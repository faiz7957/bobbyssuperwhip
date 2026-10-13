import Image from "next/image";
import {
  IceCreamCone,
  CupSoda,
  PartyPopper,
  Smile,
} from "lucide-react";

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

const customerPhotos = [
  {
    src: "/images/Customers/on%20website/bobby_customer.jpg",
    alt: "Bobby and a young customer outside the ice cream van",
    fit: "cover",
  },
  {
    src: "/images/Customers/on%20website/bobby_thumbs_up.jpg",
    alt: "Bobby giving a thumbs up beside the ice cream van",
    fit: "cover",
  },
  {
    src: "/images/Customers/on%20website/boy_choc_dip.png",
    alt: "Customer enjoying a chocolate-dipped ice cream",
    fit: "cover",
    position: "center 30%",
  },
  {
    src: "/images/Customers/on%20website/lady_choc_dip.jpg",
    alt: "Customer enjoying a chocolate-dipped ice cream",
    fit: "cover",
    position: "center 15%",
  },
];

export default function Features() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-24">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Section heading */}
        <div className="mb-10 text-center sm:mb-12 md:mb-16">
          <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
            Everything You Need For A Great Event
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Bobby&apos;s Super Whip delivers premium ice cream, luxury desserts
            and professional service that keeps guests smiling.
          </p>
        </div>

        {/* Four feature cards */}
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

        {/* Four static customer photos */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
          {customerPhotos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[5/4] overflow-hidden bg-slate-100"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 767px) 48vw, 25vw"
                className={`pointer-events-none select-none ${
                  photo.fit === "contain" ? "object-contain" : "object-cover"
                }`}
                style={
                  photo.position
                    ? { objectPosition: photo.position }
                    : undefined
                }
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}