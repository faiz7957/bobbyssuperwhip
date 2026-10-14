
import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import {
  cloudinaryAuth,
  cloudinaryBaseUrl,
  cloudinaryCloudName,
  cloudinaryConfigured,
  signCloudinaryParams,
} from "@/lib/cloudinary";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Category = "gallery" | "customers";

const tags: Record<Category, string> = {
  gallery: "bobbys-gallery",
  customers: "bobbys-customers",
};

const folders: Record<Category, string> = {
  gallery: "bobbys-super-whip/gallery",
  customers: "bobbys-super-whip/customers",
};

function categoryFrom(value: string | null): Category | null {
  return value === "gallery" || value === "customers" ? value : null;
}

async function cloudinaryRequest(path: string, init?: RequestInit) {
  const response = await fetch(`${cloudinaryBaseUrl()}${path}`, {
    ...init,
    headers: {
      Authorization: cloudinaryAuth(),
      ...(init?.headers || {}),
    },
    cache: "no-store",
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    console.error("Cloudinary API error:", {
      status: response.status,
      path,
      error: data?.error?.message || data,
    });

    throw new Error(
      data?.error?.message ||
        `Cloudinary request failed (${response.status}).`,
    );
  }

  return data;
}

function errorResponse(error: unknown) {
  const message =
    error instanceof Error ? error.message : "Unexpected server error.";

  console.error("Photo manager API error:", error);

  const status = message.toLowerCase().includes("not configured")
    ? 503
    : 500;

  return NextResponse.json({ error: message }, { status });
}

export async function GET(request: NextRequest) {
  const category = categoryFrom(
    request.nextUrl.searchParams.get("category"),
  );

  if (!category) {
    return NextResponse.json(
      { error: "Choose gallery or customers." },
      { status: 400 },
    );
  }

  if (!cloudinaryConfigured()) {
    return NextResponse.json(
      { error: "Photo storage is not configured yet." },
      { status: 503 },
    );
  }

  try {
    const data = await cloudinaryRequest(
      `/resources/image/tags/${tags[category]}?max_results=100&context=true`,
    );

    const photos = (data.resources || [])
      .map(
        (item: {
          public_id: string;
          secure_url: string;
          width?: number;
          height?: number;
          format?: string;
          created_at?: string;
          context?: { custom?: { bobby_order?: string } };
        }) => ({
          publicId: item.public_id,
          url: item.secure_url,
          width: item.width,
          height: item.height,
          format: item.format,
          createdAt: item.created_at,
          order: Number(
            item.context?.custom?.bobby_order ??
              Number.MAX_SAFE_INTEGER,
          ),
        }),
      )
      .sort(
        (
          a: { order: number; createdAt?: string; publicId: string },
          b: { order: number; createdAt?: string; publicId: string },
        ) =>
          a.order - b.order ||
          (a.createdAt || "").localeCompare(b.createdAt || "") ||
          a.publicId.localeCompare(b.publicId),
      );

    return NextResponse.json({
      photos: photos.map(
        ({
          order: _order,
          ...photo
        }: {
          order: number;
          publicId: string;
          url: string;
          width?: number;
          height?: number;
          format?: string;
          createdAt?: string;
        }) => photo,
      ),
    });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function PATCH(request: NextRequest) {
  if (!isAdminRequest(request)) {
    return NextResponse.json(
      { error: "Please sign in to manage photos." },
      { status: 401 },
    );
  }

  if (!cloudinaryConfigured()) {
    return NextResponse.json(
      { error: "Photo storage is not configured yet." },
      { status: 503 },
    );
  }

  try {
    const body = await request.json();
    const category = categoryFrom(body.category);
    const publicIds: unknown = body.publicIds;

    if (
      !category ||
      !Array.isArray(publicIds) ||
      publicIds.length > 100 ||
      publicIds.some(
        (id: unknown) => typeof id !== "string" || !id,
      )
    ) {
      return NextResponse.json(
        { error: "Invalid photo order." },
        { status: 400 },
      );
    }

    if (new Set(publicIds).size !== publicIds.length) {
      return NextResponse.json(
        { error: "Duplicate photos in order." },
        { status: 400 },
      );
    }

    // Validate every photo belongs to the selected collection.
    for (const publicId of publicIds as string[]) {
      const encodedId = publicId
        .split("/")
        .map(encodeURIComponent)
        .join("/");

      const asset = await cloudinaryRequest(
        `/resources/image/upload/${encodedId}`,
      );

      if (!(asset.tags || []).includes(tags[category])) {
        return NextResponse.json(
          {
            error:
              "A photo does not belong to this collection. Refresh and try again.",
          },
          { status: 403 },
        );
      }
    }

    // Save the order on each Cloudinary asset.
    for (
      let index = 0;
      index < (publicIds as string[]).length;
      index++
    ) {
      const publicId = (publicIds as string[])[index];

      const encodedId = publicId
        .split("/")
        .map(encodeURIComponent)
        .join("/");

      const form = new URLSearchParams({
        context: `bobby_order=${index + 1}`,
      });

      await cloudinaryRequest(
        `/resources/image/upload/${encodedId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: form,
        },
      );
    }

    return NextResponse.json({
      success: true,
      saved: publicIds.length,
    });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request: NextRequest) {
  if (!isAdminRequest(request)) {
    return NextResponse.json(
      { error: "Please sign in to manage photos." },
      { status: 401 },
    );
  }

  if (!cloudinaryConfigured()) {
    return NextResponse.json(
      { error: "Photo storage is not configured yet." },
      { status: 503 },
    );
  }

  try {
    const form = await request.formData();
    const file = form.get("file");
    const category = categoryFrom(
      String(form.get("category") || ""),
    );

    if (!(file instanceof File) || !category) {
      return NextResponse.json(
        { error: "Choose an image and a destination." },
        { status: 400 },
      );
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Only image files are allowed." },
        { status: 400 },
      );
    }

    if (file.size > 12 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Each image must be 12 MB or smaller." },
        { status: 413 },
      );
    }

    const timestamp = Math.floor(Date.now() / 1000);

    const params = {
      folder: folders[category],
      tags: tags[category],
      timestamp,
    };

    const signature = signCloudinaryParams(params);

    const uploadForm = new FormData();
    uploadForm.set("file", file);
    uploadForm.set("api_key", process.env.CLOUDINARY_API_KEY!);
    uploadForm.set("timestamp", String(timestamp));
    uploadForm.set("folder", folders[category]);
    uploadForm.set("tags", tags[category]);
    uploadForm.set("signature", signature);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudinaryCloudName()}/image/upload`,
      {
        method: "POST",
        body: uploadForm,
      },
    );

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.error("Cloudinary upload error:", {
        status: response.status,
        error: data?.error?.message || data,
      });

      return NextResponse.json(
        { error: data?.error?.message || "Upload failed." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      photo: {
        publicId: data.public_id,
        url: data.secure_url,
        width: data.width,
        height: data.height,
        format: data.format,
      },
    });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function DELETE(request: NextRequest) {
  if (!isAdminRequest(request)) {
    return NextResponse.json(
      { error: "Please sign in to manage photos." },
      { status: 401 },
    );
  }

  if (!cloudinaryConfigured()) {
    return NextResponse.json(
      { error: "Photo storage is not configured yet." },
      { status: 503 },
    );
  }

  try {
    const body = await request.json();
    const publicId =
      typeof body.publicId === "string" ? body.publicId : "";
    const category = categoryFrom(body.category);

    if (!publicId || !category) {
      return NextResponse.json(
        { error: "Invalid photo selection." },
        { status: 400 },
      );
    }

    const encodedId = publicId
      .split("/")
      .map(encodeURIComponent)
      .join("/");

    // Only allow deletion from the selected collection.
    const asset = await cloudinaryRequest(
      `/resources/image/upload/${encodedId}`,
    );

    if (!(asset.tags || []).includes(tags[category])) {
      return NextResponse.json(
        { error: "That photo does not belong to this collection." },
        { status: 403 },
      );
    }

    const timestamp = Math.floor(Date.now() / 1000);

    const signature = signCloudinaryParams({
      public_id: publicId,
      timestamp,
    });

    const form = new FormData();
    form.set("public_id", publicId);
    form.set("api_key", process.env.CLOUDINARY_API_KEY!);
    form.set("timestamp", String(timestamp));
    form.set("signature", signature);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudinaryCloudName()}/image/destroy`,
      {
        method: "POST",
        body: form,
      },
    );

    const data = await response.json().catch(() => ({}));

    if (
      !response.ok ||
      (data.result !== "ok" && data.result !== "not found")
    ) {
      console.error("Cloudinary delete error:", {
        status: response.status,
        error: data?.error?.message || data,
      });

      return NextResponse.json(
        {
          error:
            data?.error?.message || "Could not delete the photo.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return errorResponse(error);
  }
}
