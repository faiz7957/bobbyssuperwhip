import {
  IceCreamCone,
  CupSoda,
  PartyPopper,
  BadgeCheck,
  ShieldCheck,
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

export default function Features() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black text-slate-900">
            Everything You Need For A Great Event
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Bobby's Super Whip delivers premium ice cream, luxury desserts
            and professional service that keeps guests smiling.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {feature.text}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}