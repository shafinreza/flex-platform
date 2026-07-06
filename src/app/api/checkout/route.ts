import { NextResponse } from "next/server";
import Stripe from "stripe";
import { bundles, productFamilies } from "@/data/products";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const catalog = [
  ...productFamilies.flatMap((family) =>
    family.variants.map((variant) => ({
      id: variant.id,
      name: `FLEX ${variant.name}`,
      price: variant.price,
      image: variant.image,
    }))
  ),
  ...bundles.map((bundle) => ({
    id: bundle.id,
    name: bundle.fullName,
    price: bundle.price,
    image: bundle.image,
  })),
];

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const items = body.items as {
      id: string;
      quantity: number;
    }[];

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No items in cart" }, { status: 400 });
    }

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map(
      (item) => {
        const product = catalog.find((catalogItem) => catalogItem.id === item.id);

        if (!product) {
          throw new Error(`Invalid product: ${item.id}`);
        }

        return {
          quantity: item.quantity,
          price_data: {
            currency: "gbp",
            unit_amount: Math.round(product.price * 100),
            product_data: {
              name: product.name,
              images: [`${process.env.NEXT_PUBLIC_SITE_URL}${product.image}`],
            },
          },
        };
      }
    );

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      shipping_address_collection: {
        allowed_countries: ["GB"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 299,
              currency: "gbp",
            },
            display_name: "Standard UK Delivery",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 2 },
              maximum: { unit: "business_day", value: 4 },
            },
          },
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);

    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
