import { NextResponse } from "next/server";
import Stripe from "stripe";
import { FREE_SHIPPING_THRESHOLD } from "@/data/products";
import { getFreshStoreProducts } from "@/lib/product-store";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const items = body.items as { id: string; quantity: number }[];

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No items in cart" }, { status: 400 });
    }

    const products = await getFreshStoreProducts();

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map(
      (item) => {
        const product = products.find((catalogItem) => catalogItem.id === item.id);

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

    const subtotal = items.reduce((total, item) => {
      const product = products.find((catalogItem) => catalogItem.id === item.id);
      if (!product) return total;
      return total + product.price * item.quantity;
    }, 0);

    const shipping_options: Stripe.Checkout.SessionCreateParams.ShippingOption[] =
      subtotal >= FREE_SHIPPING_THRESHOLD
        ? [
            {
              shipping_rate_data: {
                type: "fixed_amount",
                fixed_amount: {
                  amount: 0,
                  currency: "gbp",
                },
                display_name: "Free UK Delivery",
                delivery_estimate: {
                  minimum: { unit: "business_day", value: 2 },
                  maximum: { unit: "business_day", value: 4 },
                },
              },
            },
          ]
        : [
            {
              shipping_rate_data: {
                type: "fixed_amount",
                fixed_amount: {
                  amount: 399,
                  currency: "gbp",
                },
                display_name: "Standard UK Delivery",
                delivery_estimate: {
                  minimum: { unit: "business_day", value: 2 },
                  maximum: { unit: "business_day", value: 4 },
                },
              },
            },
          ];

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      allow_promotion_codes: true,
      shipping_address_collection: {
        allowed_countries: ["GB"],
      },
      shipping_options,
      metadata: {
        items: JSON.stringify(items),
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
