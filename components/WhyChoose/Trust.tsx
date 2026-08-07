import {
  Star,
  ShieldCheck,
  BadgeCheck,
  IceCreamCone,
} from "lucide-react";

const items = [
  {
    icon: Star,
    title: "5-Star Food Hygiene Rating",
    text: "Official Food Standards Agency hygiene rating.",
  },
  {
    icon: ShieldCheck,
    title: "£10 Million Public Liability",
    text: "Fully insured for public and private events.",
  },
  {
    icon: BadgeCheck,
    title: "Level 2 Food Hygiene & Catering",
    text: "Professionally certified for safe food handling.",
  },
  
];

export default function Trust() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-sky-100 p-3 text-sky-600">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-slate-600">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}