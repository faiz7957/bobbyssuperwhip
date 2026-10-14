import { NextRequest, NextResponse } from "next/server";
import { adminConfigured, adminCookieMaxAge, adminCookieName, checkAdminPassword, createAdminCookieValue } from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
  if (!adminConfigured()) {
    return NextResponse.json({ error: "Admin login is not configured. Set ADMIN_PASSWORD and a random ADMIN_SESSION_SECRET of at least 32 characters in your deployment environment." }, { status: 503 });
  }
  let body: { password?: unknown };
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  if (!checkAdminPassword(body.password)) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }
  const response = NextResponse.json({ success: true });
  response.cookies.set(adminCookieName, createAdminCookieValue(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: adminCookieMaxAge,
  });
  return response;
}
