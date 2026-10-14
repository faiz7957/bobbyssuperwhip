"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

type GalleryPhoto = {
  src: string;
  title: string;
  publicId?: string;
};

const localGalleryImages: GalleryPhoto[] = [
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
    title: "Choc & Nut Sundae Boat",
  },
  {
    src: "/images/gallery/choc-dip-cone.jpg",
    title: "Choc Dip Cone",
  },
  {
    src: "/images/gallery/choc-dip-sundae.jpg",
    title: "Choc Dip Sundae",
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);
  const [galleryImages, setGalleryImages] =
    useState<GalleryPhoto[]>(localGalleryImages);

  useEffect(() => {
    let active = true;

    async function loadGallery() {
      try {
        const response = await fetch(
          "/api/admin/photos?category=gallery",
          { cache: "no-store" }
        );

        if (!response.ok) return;

        const data = await response.json();

        if (!active || !Array.isArray(data.photos)) return;

        // An empty Cloudinary collection should not remove the
        // existing local gallery.
        if (data.photos.length === 0) return;

        // The API returns photos in the order saved in the manager.
        const photos: GalleryPhoto[] = data.photos.map(
          (photo: {
            url: string;
            publicId: string;
          }) => ({
            src: photo.url,
            title: "",
            publicId: photo.publicId,
          })
        );

        if (active) {
          setGalleryImages(photos);
        }
      } catch (error) {
        console.error("Could not load managed gallery photos:", error);
      }
    }

    loadGallery();

    return () => {
      active = false;
    };
  }, []);

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
              Discover our customers&apos; favourite treats, from premium
              whippy ice cream, luxury sundaes and refreshing slush,
              freshly served at weddings, birthdays, schools, nurseries,
              corporate events and festivals across Walsall and the West
              Midlands.
            </p>
          </div>

          <div className="columns-1 gap-8 md:columns-2 lg:columns-3">
            {galleryImages.map((photo, i) => (
              <button
                key={photo.publicId || photo.src}
                onClick={() => setIndex(i)}
                className="group mb-8 block w-full overflow-hidden rounded-3xl text-left shadow-xl break-inside-avoid"
                aria-label={`View photo ${i + 1}`}
              >
                <div className="relative overflow-hidden rounded-3xl">
                  {photo.publicId ? (
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      className="h-auto w-full transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      width={1200}
                      height={1200}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="h-auto w-full transition duration-500 group-hover:scale-105"
                    />
                  )}

                  {photo.title && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 pt-12">
                      <span className="text-lg font-bold text-white">
                        {photo.title}
                      </span>
                    </div>
                  )}
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
        slides={galleryImages.map((photo) => ({
          src: photo.src,
        }))}
      />
    </>
  );
}