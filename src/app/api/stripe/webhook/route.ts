import { NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { bundles, productFamilies } from "@/data/products";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const catalog = [
  ...productFamilies.flatMap((family) =>
    family.variants.map((variant) => ({
      id: variant.id,
      name: `FLEX ${variant.name}`,
      description: family.description,
      price: variant.price,
      image: variant.image,
    }))
  ),
  ...bundles.map((bundle) => ({
    id: bundle.id,
    name: bundle.fullName,
    description: "FLEX bundle",
    price: bundle.price,
    image: bundle.image,
  })),
];

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing Stripe signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.error("Webhook signature error:", error);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const email = session.customer_details?.email;

    if (!email) {
      return NextResponse.json({ error: "Missing customer email" }, { status: 400 });
    }

    const name = session.customer_details?.name || "";
    const [firstName, ...lastNameParts] = name.split(" ");

    const items = JSON.parse(session.metadata?.items || "[]") as {
      id: string;
      quantity: number;
    }[];

    const customer = await prisma.customers.upsert({
      where: { email },
      update: {
        first_name: firstName || null,
        last_name: lastNameParts.join(" ") || null,
      },
      create: {
        email,
        first_name: firstName || null,
        last_name: lastNameParts.join(" ") || null,
      },
    });

    const existingOrder = await prisma.orders.findFirst({
      where: { stripe_session: session.id },
    });

    if (!existingOrder) {
      const order = await prisma.orders.create({
        data: {
          customer_id: customer.id,
          stripe_session: session.id,
          payment_status: session.payment_status,
          fulfilment_status: "Ready to Pack",
          subtotal: (session.amount_subtotal || 0) / 100,
          delivery: (session.shipping_cost?.amount_total || 0) / 100,
          total: (session.amount_total || 0) / 100,
        },
      });

      for (const item of items) {
        const productData = catalog.find((product) => product.id === item.id);
        if (!productData) continue;

        const product = await prisma.products.upsert({
          where: { slug: productData.id },
          update: {
            name: productData.name,
            description: productData.description,
            price: productData.price,
            image: productData.image,
            active: true,
          },
          create: {
            slug: productData.id,
            name: productData.name,
            description: productData.description,
            price: productData.price,
            image: productData.image,
            active: true,
          },
        });

        await prisma.order_items.create({
          data: {
            order_id: order.id,
            product_id: product.id,
            quantity: item.quantity,
            price: productData.price,
          },
        });
      }
    }
  }

  return NextResponse.json({ received: true });
}
