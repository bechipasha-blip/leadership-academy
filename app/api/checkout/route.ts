import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const planId = String(body.planId ?? "");

  if (!planId || !["starter", "growth"].includes(planId)) {
    return NextResponse.json({ message: "Invalid plan." }, { status: 400 });
  }

  const response = NextResponse.json({ ok: true, checkoutSession: { id: "cs_demo_" + Date.now() } });

  return response;
}
