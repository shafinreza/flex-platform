import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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
    });

    return NextResponse.json({ ok: true, orderId: order.id });
  } catch (error) {
    console.error("Mark as shipped error:", error);

    return NextResponse.json(
      { ok: false, error: "Failed to mark order as shipped" },
      { status: 500 }
    );
  }
}
