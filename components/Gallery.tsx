"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";

const galleryImages = [
  {
    src: "/images/gallery/rainbow-sundae.jpg",
    title: "Rainbow Sundae",
  },
  {
    src: "/images/gallery/oreo-biscoff-sundae.jpg",
    title: "Oreo Biscoff Sundae",
  },
  {
    src: "/images/gallery/sherbet-sundae.jpg",
    title: "Sherbet Sundae",
  },
  {
    src: "/images/gallery/slush-machine.jpg",
    title: "Premium Slush",
  },
  {
    src: "/images/gallery/luxury-whippy.jpg",
    title: "Luxury Whippy",
  },
  {
    src: "/images/gallery/choc-and-nut-boat.jpg",
    title: "Chocolate & Nut Sundae Boat",
  },
  {
    src: "/images/gallery/choc-dip-cone.jpg",
    title: "Chocolate-Dipped Cone",
  },
  {
    src: "/images/gallery/choc-dip-sundae.jpg",
    title: "Chocolate-Dipped Sundae",
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <section
        id="gallery"
        className="bg-gradient-to-b from-sky-50 to-white py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <div className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white/90 px-6 shadow-md backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-amber-400" />
              <span className="text-sm font-semibold text-slate-700">
                Customer Favourites
              </span>
            </div>

            <h2 className="mt-6 text-5xl font-bold text-slate-800">
              Our Most Popular Treats.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-xl leading-relaxed text-slate-600">
              Discover our customers' favourite treats, from premium whippy
              ice cream, luxury sundaes and refreshing slush, freshly served
              at weddings, birthdays, schools, nurseries, corporate events
              and festivals across Walsall and the West Midlands.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, i) => (
              <button
                key={image.src}
                onClick={() => setIndex(i)}
                className="group overflow-hidden rounded-3xl text-left shadow-xl"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        plugins={[Zoom]}
        slides={galleryImages.map((img) => ({
          src: img.src,
          title: img.title,
        }))}
      />
    </>
  );
}