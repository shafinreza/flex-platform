import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { uploadMediaFile } from "@/lib/media-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const cookieStore = await cookies();
  const isAuthed = cookieStore.get("flex_admin")?.value === "true";

  if (!isAuthed) {
    return NextResponse.redirect(new URL("/login", req.url), 303);
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.redirect(new URL("/admin/media", req.url), 303);
    }

    await uploadMediaFile(file);

    return NextResponse.redirect(new URL("/admin/media", req.url), 303);
  } catch (error) {
    console.error("Media upload failed:", error);
    return NextResponse.redirect(new URL("/admin/media", req.url), 303);
  }
}
