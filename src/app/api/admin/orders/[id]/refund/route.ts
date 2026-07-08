import { NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { sendRefundedEmail } from "@/services/email.service";

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
      include: {
        customers: true,
        order_items: { include: { products: true } },
      },
    });

    if (!order) {
      return NextResponse.json({ ok: false, error: "Order not found" }, { status: 404 });
    }

    if (order.refunded_at) {
      return NextResponse.json({ ok: false, error: "Order already refunded" }, { status: 400 });
    }

    let paymentIntent = order.stripe_payment_intent;

    if (!paymentIntent && order.stripe_session) {
      const session = await stripe.checkout.sessions.retrieve(order.stripe_session);

      if (typeof session.payment_intent === "string") {
        paymentIntent = session.payment_intent;
      }
    }

    if (!paymentIntent) {
      return NextResponse.json(
        { ok: false, error: "Missing Stripe payment intent" },
        { status: 400 }
      );
    }

    await stripe.refunds.create({
      payment_intent: paymentIntent,
    });

    const updatedOrder = await prisma.orders.update({
      where: { id },
      data: {
        stripe_payment_intent: paymentIntent,
        payment_status: "refunded",
        fulfilment_status: "Refunded",
        refunded_at: new Date(),
        cancelled_at: new Date(),
      },
      include: {
        customers: true,
        order_items: { include: { products: true } },
      },
    });

    if (updatedOrder.customers?.email) {
      await sendRefundedEmail({
        orderId: updatedOrder.id,
        customerEmail: updatedOrder.customers.email,
        customerName: `${updatedOrder.customers.first_name || ""} ${updatedOrder.customers.last_name || ""}`.trim(),
        items: updatedOrder.order_items.map((item) => ({
          name: item.products?.name || "FLEX product",
          quantity: item.quantity || 0,
          price: Number(item.price || 0),
        })),
        subtotal: Number(updatedOrder.subtotal || 0),
        delivery: Number(updatedOrder.delivery || 0),
        discount: Number(updatedOrder.discount_amount || 0),
        total: Number(updatedOrder.total || 0),
        address: [
          updatedOrder.recipient_name || "",
          updatedOrder.address_line1 || "",
          updatedOrder.address_line2 || "",
          updatedOrder.city || "",
          updatedOrder.county || "",
          updatedOrder.postcode || "",
          updatedOrder.country || "",
        ],
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Refund order error:", error);

    return NextResponse.json(
      { ok: false, error: "Failed to refund order" },
      { status: 500 }
    );
  }
}
