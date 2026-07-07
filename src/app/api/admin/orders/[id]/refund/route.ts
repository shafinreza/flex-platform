import { NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

type RouteProps = {
  params: Promise<{ id: string }>;
};

export async function POST(_req: Request, { params }: RouteProps) {
  try {
    const { id } = await params;

    const order = await prisma.orders.findUnique({
      where: { id },
    });

    if (!order) {
      return NextResponse.json({ ok: false, error: "Order not found" }, { status: 404 });
    }

    if (order.refunded_at) {
      return NextResponse.json({ ok: false, error: "Order already refunded" }, { status: 400 });
    }

    if (!order.stripe_payment_intent) {
      return NextResponse.json({ ok: false, error: "Missing Stripe payment intent" }, { status: 400 });
    }

    await stripe.refunds.create({
      payment_intent: order.stripe_payment_intent,
    });

    await prisma.orders.update({
      where: { id },
      data: {
        payment_status: "refunded",
        fulfilment_status: "Refunded",
        refunded_at: new Date(),
        cancelled_at: new Date(),
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Refund order error:", error);
    return NextResponse.json({ ok: false, error: "Failed to refund order" }, { status: 500 });
  }
}
