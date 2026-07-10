import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getFreshStoreProducts } from "@/lib/product-store";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

type CheckoutItem = {
  id: string;
  quantity: number;
};

function requireShippingRate(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const items = body.items as CheckoutItem[];

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "No items in cart" },
        { status: 400 }
      );
    }

    const products = await getFreshStoreProducts();

    const resolvedItems = items.map((item) => {
      const product = products.find(
        (storeProduct) => storeProduct.id === item.id
      );

      if (!product) {
        throw new Error(`Invalid product: ${item.id}`);
      }

      if (
        !Number.isInteger(item.quantity) ||
        item.quantity < 1 ||
        item.quantity > 50
      ) {
        throw new Error(`Invalid quantity for product: ${item.id}`);
      }

      return {
        product,
        quantity: item.quantity,
      };
    });

    const totalJarCount = resolvedItems.reduce(
      (total, item) =>
        total + item.product.jarCount * item.quantity,
      0
    );

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] =
      resolvedItems.map(({ product, quantity }) => ({
        quantity,
        price_data: {
          currency: "gbp",
          unit_amount: Math.round(product.price * 100),
          product_data: {
            name: product.name,
            images: product.image
              ? [
                  product.image.startsWith("http")
                    ? product.image
                    : `${
                        process.env.NEXT_PUBLIC_SITE_URL ||
                        "https://www.eatflex.uk"
                      }${product.image}`,
                ]
              : undefined,
          },
        },
      }));

    const standardShippingRate = requireShippingRate(
      "STRIPE_STANDARD_SHIPPING_RATE_ID"
    );
    const expressShippingRate = requireShippingRate(
      "STRIPE_EXPRESS_SHIPPING_RATE_ID"
    );
    const freeShippingRate = requireShippingRate(
      "STRIPE_FREE_SHIPPING_RATE_ID"
    );
    const expressUpgradeRate = requireShippingRate(
      "STRIPE_EXPRESS_UPGRADE_RATE_ID"
    );

    const qualifiesForFreeShipping = totalJarCount >= 6;

    const shippingOptions: Stripe.Checkout.SessionCreateParams.ShippingOption[] =
      qualifiesForFreeShipping
        ? [
            { shipping_rate: freeShippingRate },
            { shipping_rate: expressUpgradeRate },
          ]
        : [
            { shipping_rate: standardShippingRate },
            { shipping_rate: expressShippingRate },
          ];

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.eatflex.uk";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      allow_promotion_codes: true,
      customer_creation: "always",
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["GB"],
      },
      shipping_options: shippingOptions,
      phone_number_collection: {
        enabled: true,
      },
      metadata: {
        items: JSON.stringify(items),
        totalJarCount: String(totalJarCount),
        shippingProfile: qualifiesForFreeShipping
          ? "free-or-express"
          : "standard-or-express",
      },
      success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/checkout/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);

    return NextResponse.json(
      { error: "Checkout failed. Please try again." },
      { status: 500 }
    );
  }
}
