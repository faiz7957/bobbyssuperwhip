import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl bg-gradient-to-r from-sky-500 to-sky-600 px-8 py-14 text-center shadow-lg sm:px-12">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to Make Your Event Extra Special?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
          Bring Bobby&apos;s Super Whip to your next event for delicious
          whippy ice cream, luxury sundaes and refreshing slush.
        </p>

        <Link
          href="/book"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-amber-400 px-8 py-4 font-bold text-slate-900 shadow-md transition hover:bg-amber-300"
        >
          Get a Quote
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}