import { createHash } from "node:crypto";

const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

export function cloudinaryConfigured() {
  return Boolean(cloudName && apiKey && apiSecret);
}

function requiredConfig() {
  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error("Cloudinary is not configured. Add CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET.");
  }
  return { cloudName, apiKey, apiSecret };
}

export function signCloudinaryParams(params: Record<string, string | number>) {
  const { apiSecret } = requiredConfig();
  const canonical = Object.entries(params)
    .filter(([, value]) => value !== "" && value !== null && value !== undefined)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  return createHash("sha1").update(canonical + apiSecret).digest("hex");
}

export function cloudinaryAuth() {
  const { apiKey, apiSecret } = requiredConfig();
  return `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString("base64")}`;
}

export function cloudinaryBaseUrl() {
  const { cloudName } = requiredConfig();
  return `https://api.cloudinary.com/v1_1/${cloudName}`;
}

export function cloudinaryCloudName() {
  return requiredConfig().cloudName;
}
