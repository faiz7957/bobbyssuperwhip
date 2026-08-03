"use client";

import { useState } from "react";
import Image from "next/image";

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
    src: "/images/gallery/luxury whippy.jpg",
    title: "Luxury Whippy",
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
            <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              Gallery
            </span>

            <h2 className="mt-6 text-5xl font-bold text-slate-800">
              Our Favourite Treats
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-xl text-slate-600">
              Freshly prepared whippy ice cream, luxury sundaes and refreshing
              premium slush served across the Midlands.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, i) => (
              <button
                key={image.src}
                onClick={() => setIndex(i)}
                className="group overflow-hidden rounded-3xl shadow-xl text-left"
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