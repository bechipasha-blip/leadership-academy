import { NextResponse } from "next/server";
import { getUserFromSessionValue } from "@/lib/auth";

export async function GET(request: Request) {
  const cookieHeader = request.headers.get("cookie") ?? "";
  const sessionCookie = cookieHeader
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith("leadership_session="));

  const value = sessionCookie ? decodeURIComponent(sessionCookie.split("=")[1] ?? "") : null;
  const user = getUserFromSessionValue(value);

  return NextResponse.json({ authenticated: Boolean(user), user });
}
