import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { uploadMediaFile } from "@/lib/media-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const cookieStore = await cookies();
  const isAuthed = cookieStore.get("flex_admin")?.value === "true";

  if (!isAuthed) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const formData = await req.formData();
    const slug = String(formData.get("slug") || "");
    const file = formData.get("file");

    if (!slug || !(file instanceof File)) {
      return NextResponse.redirect(new URL("/admin/products?error=image", req.url));
    }

    const image = await uploadMediaFile(file);

    await prisma.products.update({
      where: { slug },
      data: { image },
    });

    revalidatePath("/");
    revalidatePath("/shop");
    revalidatePath("/products/natural-smooth-510g");
    revalidatePath("/admin/products");

    return NextResponse.redirect(new URL("/admin/products?saved=1", req.url));
  } catch (error) {
    console.error("Product image upload failed:", error);
    return NextResponse.redirect(new URL("/admin/products?error=image-upload", req.url));
  }
}
