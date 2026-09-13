"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const eventPhotos = [
  {
    src: "/images/events/pickedforwebsite/13, 2026, 01_14_01 AM.png",
    alt: "Bobby's Super Whip at an event",
  },
  {
    src: "/images/events/pickedforwebsite/20260815_114008.jpg",
    alt: "Bobby's Super Whip at an event",
  },
  {
    src: "/images/events/pickedforwebsite/20260815_144444.jpg",
    alt: "Bobby's Super Whip at an event",
  },
  {
    src: "/images/events/pickedforwebsite/20260816_135606.jpg",
    alt: "Bobby's Super Whip at an event",
  },
  {
    src: "/images/events/pickedforwebsite/20260816_135624.jpg",
    alt: "Bobby's Super Whip at an event",
  },
  {
    src: "/images/events/pickedforwebsite/20260816_135659.jpg",
    alt: "Bobby's Super Whip at an event",
  },
  {
    src: "/images/events/pickedforwebsite/IMG-20260704-WA0013.jpeg",
    alt: "Bobby's Super Whip at an outdoor event",
  },
  {
    src: "/images/events/pickedforwebsite/IMG-20260816-WA0008.jpg",
    alt: "Bobby's Super Whip at an event",
  },
  {
    src: "/images/events/pickedforwebsite/Sep 13, 2026, 01_17_03 AM.png",
    alt: "Bobby's Super Whip at an event",
  },
  {
    src: "/images/events/pickedforwebsite/Sep 13, 2026, 01_20_11 AM.png",
    alt: "Bobby's Super Whip at an event",
  },
  {
    src: "/images/events/pickedforwebsite/Sep 13, 2026, 01_23_12 AM.png",
    alt: "Bobby's Super Whip at an event",
  },
];

export default function Events2() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const showPrevious = () => {
    if (selectedPhoto === null) return;

    setSelectedPhoto(
      selectedPhoto === 0 ? eventPhotos.length - 1 : selectedPhoto - 1
    );
  };

  const showNext = () => {
    if (selectedPhoto === null) return;

    setSelectedPhoto(
      selectedPhoto === eventPhotos.length - 1 ? 0 : selectedPhoto + 1
    );
  };

  useEffect(() => {
    if (selectedPhoto === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }

      if (event.key === "Escape") {
        setSelectedPhoto(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPhoto]);

  return (
    <section id="events" className="bg-sky-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-slate-800">
            Events We Cater For
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-xl text-slate-600">
            From birthdays to weddings, Bobby&apos;s Super Whip is available for
            events across the West Midlands.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {/* Birthday Parties */}
          <div className="h-full rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              🎂 Birthday Parties
            </h3>
            <p className="mt-4 text-slate-600">
              Fresh whippy ice cream, luxury sundaes and premium slush for all ages.
            </p>
          </div>

          {/* Weddings */}
          <div className="h-full rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              💒 Weddings
            </h3>
            <p className="mt-4 text-slate-600">
              A unique dessert experience that guests of all ages will love.
            </p>
          </div>

          {/* Schools & Nurseries */}
          <div className="h-full rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              🏫 Schools &amp; Nurseries
            </h3>
            <p className="mt-4 text-slate-600">
              Perfect for sports days, fun days and school celebrations.
            </p>
          </div>

          {/* Corporate Events */}
          <div className="h-full rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              🏢 Corporate Events
            </h3>
            <p className="mt-4 text-slate-600">
              Great for staff appreciation days, family fun days and company celebrations.
            </p>
          </div>

          {/* Fun Fairs */}
          <div className="h-full rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              🎡 Fun Fairs
            </h3>
            <p className="mt-4 text-slate-600">
              A great addition to fun fairs and family days, with treats for visitors of all ages.
            </p>
          </div>

          {/* Festivals */}
          <div className="h-full rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              🎉 Festivals
            </h3>
            <p className="mt-4 text-slate-600">
              Keep festival crowds refreshed with delicious ice cream, sundaes and premium slush.
            </p>
          </div>

          {/* Charity Events */}
          <div className="h-full rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              ❤️ Charity Events
            </h3>
            <p className="mt-4 text-slate-600">
              Helping make charity events extra special with a fun dessert experience for everyone.
            </p>
          </div>

          {/* Care Homes */}
          <div className="h-full rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              🏡 Care Homes
            </h3>
            <p className="mt-4 text-slate-600">
              Bringing a little extra joy to residents with delicious treats and a memorable experience.
            </p>
          </div>

          {/* Community Events */}
          <div className="h-full rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-sky-700">
              🎪 Community Events
            </h3>
            <p className="mt-4 text-slate-600">
              Perfect for local community days, fairs and celebrations, bringing something special for everyone.
            </p>
          </div>

        </div>

        {/* Event Photo Gallery */}
        <div className="mt-16">
          <div className="-mx-6 overflow-x-auto px-6 pb-4 scrollbar-thin">
            <div className="flex gap-5">
              {eventPhotos.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setSelectedPhoto(index)}
                  className="group relative h-72 w-[360px] shrink-0 overflow-hidden rounded-3xl bg-white shadow-lg focus:outline-none focus:ring-4 focus:ring-sky-300"
                  aria-label={`Open event photo ${index + 1}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="360px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
                </button>
              ))}
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-slate-500 md:hidden">
            Swipe to see more photos
          </p>
        </div>

      </div>

      {/* Lightbox */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedPhoto(null)}
            className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Close photo"
          >
            <X className="h-7 w-7" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrevious();
            }}
            className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <div
            className="relative h-[80vh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={eventPhotos[selectedPhoto].src}
              alt={eventPhotos[selectedPhoto].alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Next photo"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
            {selectedPhoto + 1} / {eventPhotos.length}
          </div>
        </div>
      )}

    </section>
  );
}