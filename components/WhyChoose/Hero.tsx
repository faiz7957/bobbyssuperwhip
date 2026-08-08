import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-sky-200/40 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-[420px] w-[420px] rounded-full bg-yellow-200/40 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
        {/* Left */}
        <div>
          

          <h1 className="text-5xl font-black leading-tight text-slate-900 md:text-7xl">
            Why Choose
            <br />
            <span className="text-sky-500">
              Bobby&apos;s Super Whip?
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
            Premium whippy ice cream, luxury sundaes and refreshing slush
            for weddings, schools, nurseries, birthday parties,
            festivals and corporate events across Walsall and the
            West Midlands.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/book"
              className="rounded-full bg-amber-400 px-8 py-4 font-bold text-slate-900 shadow-lg transition hover:scale-105"
            >
              Get a Quote
            </Link>

            <Link
              href="/#gallery"
              className="rounded-full border-2 border-sky-500 px-8 py-4 font-bold text-sky-600 transition hover:bg-sky-500 hover:text-white"
            >
              View Gallery
            </Link>
          </div>
        </div>

        {/* Right */}
        <div>
          <div className="overflow-hidden rounded-[2rem] shadow-2xl aspect-[9/7]">
            <Image
              src="/images/why-choose-hero.png"
              alt="Bobby's Super Whip Ice Cream Van"
              width={900}
              height={700}
              priority
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}