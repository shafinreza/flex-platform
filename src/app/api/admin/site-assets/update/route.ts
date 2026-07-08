import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const cookieStore = await cookies();
  const isAuthed = cookieStore.get("flex_admin")?.value === "true";

  if (!isAuthed) {
    return NextResponse.redirect(new URL("/login", req.url), 303);
  }

  const formData = await req.formData();
  const key = String(formData.get("key") || "");
  const value = String(formData.get("value") || "");

  if (!key || !value) {
    return NextResponse.redirect(new URL("/admin/media?error=asset", req.url), 303);
  }

  await prisma.site_assets.upsert({
    where: { key },
    update: {
      value,
      updated_at: new Date(),
    },
    create: {
      key,
      value,
    },
  });

  revalidatePath("/");
  revalidatePath("/admin/media");

  return NextResponse.redirect(new URL("/admin/media?saved=1", req.url), 303);
}
