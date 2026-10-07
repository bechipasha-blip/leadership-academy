import { NextResponse } from "next/server";
import { getRoleFromEmail, isValidDemoLogin } from "@/lib/auth";

export async function POST(request: Request) {
  const body = await request.json();
  const email = String(body.email ?? "").trim();
  const password = String(body.password ?? "");

  if (!email || !password || !email.includes("@")) {
    return NextResponse.json({ message: "A valid email and password are required." }, { status: 400 });
  }

  if (!isValidDemoLogin(email, password)) {
    return NextResponse.json({ message: "Invalid email or password. Try one of the demo credentials below." }, { status: 401 });
  }

  const role = getRoleFromEmail(email);
  const response = NextResponse.json({ ok: true, user: { email, role } }, { status: 200 });

  response.cookies.set("leadership_session", role ?? "leader", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
