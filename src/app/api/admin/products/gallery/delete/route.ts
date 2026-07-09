import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
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
  const imageId = String(formData.get("imageId") || "");

  if (!imageId) {
    return NextResponse.redirect(new URL("/admin/products?error=delete", req.url), 303);
  }

  const image = await prisma.product_images.findUnique({
    where: { id: imageId },
  });

  if (!image) {
    return NextResponse.redirect(new URL("/admin/products?error=missing-image", req.url), 303);
  }

  await prisma.product_images.delete({
    where: { id: imageId },
  });

  if (image.is_primary) {
    const nextImage = await prisma.product_images.findFirst({
      where: { product_id: image.product_id },
      orderBy: { sort_order: "asc" },
    });

    if (nextImage) {
      await prisma.product_images.update({
        where: { id: nextImage.id },
        data: { is_primary: true },
      });

      await prisma.products.update({
        where: { id: image.product_id },
        data: { image: nextImage.image_url },
      });
    }
  }

  revalidateTag("store-products", "max");
  revalidatePath("/");
  revalidatePath("/shop");
  revalidatePath("/products/natural-smooth-510g");
  revalidatePath("/admin/products");

  return NextResponse.redirect(new URL("/admin/products?saved=1", req.url), 303);
}
