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

  const slug = String(formData.get("slug") || "");
  const name = String(formData.get("name") || slug);
  const price = Number(formData.get("price"));
  const image = String(formData.get("image") || "");

  if (!slug || Number.isNaN(price) || price <= 0) {
    return NextResponse.redirect(new URL("/admin/products?error=invalid", req.url), 303);
  }

  await prisma.products.upsert({
    where: { slug },
    update: {
      name,
      price,
      image,
      active: true,
    },
    create: {
      slug,
      name,
      description: "FLEX product",
      price,
      image,
      active: true,
    },
  });

  revalidatePath("/");
  revalidatePath("/shop");
  revalidatePath("/products/natural-smooth-510g");
  revalidatePath("/admin/products");

  return NextResponse.redirect(new URL("/admin/products?saved=1", req.url), 303);
}
