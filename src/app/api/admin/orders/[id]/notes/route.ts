import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

type RouteProps = {
  params: Promise<{ id: string }>;
};

export async function POST(req: Request, { params }: RouteProps) {
  try {
    const { id } = await params;
    const body = await req.json();

    await prisma.orders.update({
      where: { id },
      data: {
        internal_notes: body.notes || null,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Save notes error:", error);

    return NextResponse.json(
      { ok: false, error: "Failed to save notes" },
      { status: 500 }
    );
  }
}
