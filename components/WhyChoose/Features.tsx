
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IceCreamCone, CupSoda, PartyPopper, Smile } from "lucide-react";

const features = [
  {
    icon: IceCreamCone,
    title: "Premium Whippy Ice Cream",
    text: "Smooth, creamy Mr Whippy style ice cream made fresh throughout every event.",
  },
  {
    icon: CupSoda,
    title: "Luxury Slush",
    text: "Refreshing premium slush available in vibrant flavours that are always popular.",
  },
  {
    icon: PartyPopper,
    title: "Perfect For Every Event",
    text: "Weddings, birthdays, schools, nurseries, festivals, corporate events and more.",
  },
  {
    icon: Smile,
    title: "Friendly Reliable Service",
    text: "Professional, punctual and trusted by hundreds of happy customers across the Midlands.",
  },
];

type CustomerPhoto = {
  src: string;
  alt: string;
  position?: string;
  publicId?: string;
};

const localCustomerPhotos: CustomerPhoto[] = [
  {
    src: "/images/Customers/on%20website/bobby_customer.jpg",
    alt: "Bobby and a young customer outside the ice cream van",
  },
  {
    src: "/images/Customers/on%20website/bobby_thumbs_up.jpg",
    alt: "Bobby giving a thumbs up beside the ice cream van",
  },
  {
    src: "/images/Customers/on%20website/boy_choc_dip.png",
    alt: "Customer enjoying a chocolate-dipped ice cream",
    position: "center 30%",
  },
  {
    src: "/images/Customers/on%20website/lady_choc_dip.jpg",
    alt: "Customer enjoying a chocolate-dipped ice cream",
    position: "center 15%",
  },
];

// Preserve the appropriate descriptions and image crops for existing uploads.
const cloudinaryCustomerDetails: Record<
  string,
  Omit<CustomerPhoto, "src" | "publicId">
> = {
  bar6rwv2u4xq1rutbmwj: {
    alt: "Customer enjoying a chocolate-dipped ice cream",
    position: "center 15%",
  },
  gmgrvoamnih81qpmym4g: {
    alt: "Customer enjoying a chocolate-dipped ice cream",
    position: "center 30%",
  },
  lwlxjiojak7iae8jacz0: {
    alt: "Bobby serving ice cream from the van",
  },
  kkswhhch0jh7sdj6hkdm: {
    alt: "Bobby and a young customer outside the ice cream van",
  },
};

export default function Features() {
  const [customerPhotos, setCustomerPhotos] =
    useState<CustomerPhoto[]>(localCustomerPhotos);

  useEffect(() => {
    let active = true;

    fetch("/api/admin/photos?category=customers", {
      cache: "no-store",
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (!active || !data?.photos?.length) return;

        // The API already returns photos in the saved Cloudinary order.
        // Do not sort them here: doing so would override the admin arrangement.
        const photos: CustomerPhoto[] = data.photos.map(
          (photo: { url: string; publicId: string }) => {
            const id = photo.publicId.split("/").pop() || "";
            const details = cloudinaryCustomerDetails[id];

            return {
              src: photo.url,
              alt: details?.alt || "Customer enjoying Bobby's Super Whip",
              position: details?.position,
              publicId: photo.publicId,
            };
          },
        );

        if (active) {
          setCustomerPhotos(photos);
        }
      })
      .catch(() => {
        // Keep the local photos visible if Cloudinary is temporarily unavailable.
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-24">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="mb-10 text-center sm:mb-12 md:mb-16">
          <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
            Everything You Need For A Great Event
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Bobby&apos;s Super Whip delivers premium ice cream, luxury desserts
            and professional service that keeps guests smiling.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-7"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600 sm:mb-6 sm:h-16 sm:w-16">
                  <Icon size={28} />
                </div>

                <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
          {customerPhotos.map((photo) => (
            <div
              key={photo.publicId || photo.src}
              className="relative aspect-[5/4] overflow-hidden bg-slate-100"
            >
              {photo.publicId ? (
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="pointer-events-none h-full w-full select-none object-cover"
                  style={
                    photo.position
                      ? { objectPosition: photo.position }
                      : undefined
                  }
                />
              ) : (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 767px) 48vw, 25vw"
                  className="pointer-events-none select-none object-cover"
                  style={
                    photo.position
                      ? { objectPosition: photo.position }
                      : undefined
                  }
                  draggable={false}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
