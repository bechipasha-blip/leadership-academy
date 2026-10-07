import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const planId = String(body.planId ?? "");

  if (!planId || !["starter", "growth"].includes(planId)) {
    return NextResponse.json({ message: "Invalid plan." }, { status: 400 });
  }

  const response = NextResponse.json({ ok: true, subscription: { planId, status: "active" } });

  response.cookies.set("leadership_plan", planId, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });

  return response;
}
