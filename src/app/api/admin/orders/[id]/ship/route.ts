import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendShippedEmail } from "@/services/email.service";

export const runtime = "nodejs";

type RouteProps = {
  params: Promise<{ id: string }>;
};

export async function POST(req: Request, { params }: RouteProps) {
  try {
    const { id } = await params;
    const body = await req.json().catch(() => ({}));

    const order = await prisma.orders.update({
      where: { id },
      data: {
        fulfilment_status: "Shipped",
        tracking_number: body.trackingNumber || null,
        tracking_url: body.trackingUrl || null,
        shipped_at: new Date(),
      },
      include: {
        customers: true,
        order_items: { include: { products: true } },
      },
    });

    if (order.customers?.email) {
      await sendShippedEmail({
        orderId: order.id,
        customerEmail: order.customers.email,
        customerName: `${order.customers.first_name || ""} ${order.customers.last_name || ""}`.trim(),
        items: order.order_items.map((item) => ({
          name: item.products?.name || "FLEX product",
          quantity: item.quantity || 0,
          price: Number(item.price || 0),
        })),
        subtotal: Number(order.subtotal || 0),
        delivery: Number(order.delivery || 0),
        discount: Number(order.discount_amount || 0),
        total: Number(order.total || 0),
        address: [
          order.recipient_name || "",
          order.address_line1 || "",
          order.address_line2 || "",
          order.city || "",
          order.county || "",
          order.postcode || "",
          order.country || "",
        ],
        trackingNumber: order.tracking_number,
        trackingUrl: order.tracking_url,
      });
    }

    return NextResponse.json({ ok: true, orderId: order.id });
  } catch (error) {
    console.error("Mark as shipped error:", error);

    return NextResponse.json(
      { ok: false, error: "Failed to mark order as shipped" },
      { status: 500 }
    );
  }
}
