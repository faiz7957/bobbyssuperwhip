import { createHmac, timingSafeEqual } from "node:crypto";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "bobby_photo_admin";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

function secret() {
  return process.env.ADMIN_SESSION_SECRET || "";
}

function makeSignature(timestamp: string) {
  return createHmac("sha256", secret()).update(timestamp).digest("hex");
}

export function adminConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD && secret().length >= 32);
}

export function checkAdminPassword(value: unknown) {
  const expected = process.env.ADMIN_PASSWORD;
  if (typeof value !== "string" || !expected) return false;
  const a = Buffer.from(value);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function createAdminCookieValue() {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  return `${timestamp}.${makeSignature(timestamp)}`;
}

export function isAdminRequest(request: NextRequest) {
  if (!adminConfigured()) return false;
  const token = request.cookies.get(COOKIE_NAME)?.value;
  if (!token) return false;
  const [timestamp, signature] = token.split(".");
  if (!timestamp || !signature || !/^\d+$/.test(timestamp)) return false;
  const age = Math.floor(Date.now() / 1000) - Number(timestamp);
  if (age < 0 || age > SESSION_MAX_AGE_SECONDS) return false;
  const expected = Buffer.from(makeSignature(timestamp));
  const actual = Buffer.from(signature);
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}

export const adminCookieName = COOKIE_NAME;
export const adminCookieMaxAge = SESSION_MAX_AGE_SECONDS;
