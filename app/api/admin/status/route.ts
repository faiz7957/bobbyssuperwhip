import { NextRequest, NextResponse } from "next/server";
import { adminConfigured, isAdminRequest } from "@/lib/admin-auth";
import { cloudinaryConfigured } from "@/lib/cloudinary";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    authenticated: isAdminRequest(request),
    configured: adminConfigured() && cloudinaryConfigured(),
    adminConfigured: adminConfigured(),
    storageConfigured: cloudinaryConfigured(),
  });
}
