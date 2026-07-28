"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      {/* Mobile Hero */}
      <Image
        src="/images/van-mobile.png"
        alt="Bobby's Super Whip Ice Cream Van"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center md:hidden"
      />

      {/* Desktop Hero */}
      <Image
        src="/images/van.png"
        alt="Bobby's Super Whip Ice Cream Van"
        fill
        priority
        sizes="100vw"
        className="hidden md:block object-cover object-[92%_center]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-950/40 via-sky-900/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] items-center px-5 py-24 md:max-w-7xl md:px-8">
        <div className="w-full max-w-[300px] rounded-3xl border border-white/10 bg-slate-900/20 p-6 backdrop-blur-md shadow-2xl md:max-w-sm md:p-8">
          <span className="inline-flex rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white">
            🍦 Serving the Midlands since 2016
          </span>

          <h1 className="mt-6 text-4xl font-black leading-none text-white md:text-7xl">
            Bobby&apos;s
            <span className="block text-yellow-300">
              Super Whip
            </span>
          </h1>

          <p className="mt-5 text-xl font-bold text-white md:text-2xl">
            It&apos;s Not A Dream,
            <br />
            It&apos;s Bobby&apos;s Ice Cream!
          </p>

          <p className="mt-5 text-base leading-relaxed text-white/95 md:text-lg">
            Premium whipped ice cream, delicious slush, sundaes and event
            catering across Walsall and the Midlands.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/book"
              className="rounded-xl bg-yellow-400 px-8 py-4 text-center font-bold text-slate-900 transition hover:bg-yellow-300"
            >
              Book an Event
            </Link>

            <a
              href="/#treats"
              className="rounded-xl border-2 border-white px-8 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              View Our Treats
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}