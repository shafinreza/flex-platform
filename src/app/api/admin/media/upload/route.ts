import { cookies } from "next/headers";
import { NextResponse } from "next/server";
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
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.redirect(new URL("/admin/media?error=no-file", req.url));
    }

    const url = await uploadMediaFile(file);

    return NextResponse.redirect(
      new URL(`/admin/media?uploaded=1&url=${encodeURIComponent(url)}`, req.url)
    );
  } catch (error) {
    console.error("Media upload failed:", error);
    return NextResponse.redirect(new URL("/admin/media?error=upload", req.url));
  }
}
