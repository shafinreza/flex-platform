import { NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { bundles, productFamilies } from "@/data/products";
import { sendOrderEmails } from "@/services/email.service";

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
    return NextResponse.json(
      { error: "Missing Stripe signature" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    );
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  const fullSession = await stripe.checkout.sessions.retrieve(session.id);

  const email = fullSession.customer_details?.email;

  if (!email) {
    return NextResponse.json(
      { error: "Missing email" },
      { status: 400 }
    );
  }

  const name = fullSession.customer_details?.name || "";
  const [firstName, ...lastName] = name.split(" ");

  const address = fullSession.customer_details?.address;

  const discount = fullSession.total_details?.amount_discount || 0;

  const items = JSON.parse(fullSession.metadata?.items || "[]") as {
    id: string;
    quantity: number;
  }[];

  const customer = await prisma.customers.upsert({
    where: {
      email,
    },
    update: {
      first_name: firstName || null,
      last_name: lastName.join(" ") || null,
      phone: fullSession.customer_details?.phone || null,
    },
    create: {
      email,
      first_name: firstName || null,
      last_name: lastName.join(" ") || null,
      phone: fullSession.customer_details?.phone || null,
    },
  });

  const existingOrder = await prisma.orders.findFirst({
    where: {
      stripe_session: fullSession.id,
    },
  });

  if (!existingOrder) {
    const order = await prisma.orders.create({
      data: {
        customer_id: customer.id,

        stripe_session: fullSession.id,

        stripe_payment_intent:
          typeof fullSession.payment_intent === "string"
            ? fullSession.payment_intent
            : null,

        payment_status: fullSession.payment_status,

        fulfilment_status: "Ready to Pack",

        subtotal: (fullSession.amount_subtotal || 0) / 100,

        delivery:
          (fullSession.shipping_cost?.amount_total || 0) / 100,

        discount_amount: discount / 100,

        discount_code: null,

        total: (fullSession.amount_total || 0) / 100,

        recipient_name: name || null,

        address_line1: address?.line1 || null,

        address_line2: address?.line2 || null,

        city: address?.city || null,

        county: address?.state || null,

        postcode: address?.postal_code || null,

        country: address?.country || null,
      },
    });

    const emailItems = [];

    for (const item of items) {
      const productData = catalog.find(
        (product) => product.id === item.id
      );

      if (!productData) continue;

      const product = await prisma.products.upsert({
        where: {
          slug: productData.id,
        },
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

      emailItems.push({
        name: productData.name,
        quantity: item.quantity,
        price: productData.price,
      });
    }

    await sendOrderEmails({
      orderId: order.id,
      customerEmail: email,
      customerName: name,
      items: emailItems,
      subtotal: (fullSession.amount_subtotal || 0) / 100,
      delivery: (fullSession.shipping_cost?.amount_total || 0) / 100,
      discount: discount / 100,
      total: (fullSession.amount_total || 0) / 100,
      address: [
        name,
        address?.line1 || "",
        address?.line2 || "",
        address?.city || "",
        address?.state || "",
        address?.postal_code || "",
        address?.country || "",
      ],
    });
  }

  return NextResponse.json({
    received: true,
  });
}