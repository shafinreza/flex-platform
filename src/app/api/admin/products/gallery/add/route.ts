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
  const imageUrl = String(formData.get("imageUrl") || "");
  const altText = String(formData.get("altText") || "");

  if (!slug || !imageUrl) {
    return NextResponse.redirect(new URL("/admin/products?error=gallery", req.url), 303);
  }

  const product = await prisma.products.findUnique({
    where: { slug },
    include: { product_images: true },
  });

  if (!product) {
    return NextResponse.redirect(new URL("/admin/products?error=missing-product", req.url), 303);
  }

  const isFirstImage = product.product_images.length === 0;

  await prisma.product_images.create({
    data: {
      product_id: product.id,
      image_url: imageUrl,
      alt_text: altText || product.name,
      sort_order: product.product_images.length,
      is_primary: isFirstImage,
    },
  });

  if (isFirstImage) {
    await prisma.products.update({
      where: { slug },
      data: { image: imageUrl },
    });
  }

  revalidatePath("/");
  revalidatePath("/shop");
  revalidatePath("/products/natural-smooth-510g");
  revalidatePath("/admin/products");

  return NextResponse.redirect(new URL("/admin/products?saved=1", req.url), 303);
}
