import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const password = String(body.password ?? "");

  if (!name || !email || !password) {
    return NextResponse.json({ message: "All fields are required." }, { status: 400 });
  }

  if (!email.includes("@")) {
    return NextResponse.json({ message: "Valid email is required." }, { status: 400 });
  }

  if (password.length < 8) {
    return NextResponse.json({ message: "Password must be at least 8 characters." }, { status: 400 });
  }

  const response = NextResponse.json({ ok: true, user: { name, email, role: "leader" } }, { status: 201 });

  response.cookies.set("leadership_session", "leader", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return response;
}
