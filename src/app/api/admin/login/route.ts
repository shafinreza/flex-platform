import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = await req.json();

  console.log("Entered password length:", password?.length);
  console.log("ENV password exists:", Boolean(process.env.ADMIN_PASSWORD));
  console.log("ENV password length:", process.env.ADMIN_PASSWORD?.length);

  if (!process.env.ADMIN_PASSWORD || password.trim() !== process.env.ADMIN_PASSWORD.trim()) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });

  res.cookies.set("flex_admin", "true", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return res;
}
