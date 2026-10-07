import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const email = String(body.email ?? "").trim();
  const password = String(body.password ?? "");

  if (!email || !password || !email.includes("@")) {
    return NextResponse.json({ message: "A valid email and password are required." }, { status: 400 });
  }

  const response = NextResponse.json({ ok: true, user: { email } }, { status: 200 });

  response.cookies.set("leadership_session", "active", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
