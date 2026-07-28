"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* Mobile Hero */}
      <section className="relative flex min-h-[90svh] flex-col justify-between overflow-hidden md:hidden">
        <Image
          src="/images/van-mobile.png"
          alt="Bobby's Super Whip Ice Cream Van"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/25 to-transparent" />

        <div className="relative z-10 px-6 pt-10">
          <span className="inline-flex rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white">
            🍦 Serving the Midlands since 2016
          </span>

          <h1 className="mt-5 text-5xl font-black leading-none text-white">
            Bobby&apos;s
            <span className="block text-yellow-300">Super Whip</span>
          </h1>

          <p className="mt-4 text-2xl font-bold text-white">
            It&apos;s Not A Dream,<br/>
            It&apos;s Bobby&apos;s Ice Cream!
          </p>

          <p className="mt-4 max-w-xs text-white/95">
            Premium whipped ice cream, delicious slush, sundaes and event catering
            across Walsall and the Midlands.
          </p>

          <div className="mt-6 space-y-3">
            <Link href="/book" className="block rounded-xl bg-yellow-400 px-6 py-4 text-center font-bold text-slate-900">
              Book an Event
            </Link>

            <a href="/#treats" className="block roundevd-xl border-2 border-white px-6 py-4 text-center font-semibold text-white">
              View Our Treats
            </a>
          </div>
        </div>

        <div className="relative h-[24vh]" />
      </section>

      {/* Desktop Hero */}
      <section className="relative isolate hidden min-h-[100svh] overflow-hidden md:block">
        <Image
          src="/images/van.png"
          alt="Bobby's Super Whip Ice Cream Van"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[92%_center]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/30 via-sky-900/5 to-transparent" />

        <div className="relative z-10 flex min-h-[100svh] max-w-7xl items-center pl-5 pr-10 py-24">
          <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-slate-900/10 p-8 backdrop-blur-sm shadow-lg">
            <span className="inline-flex rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white">
              🍦 Serving the Midlands since 2016
            </span>

            <h1 className="mt-6 text-5xl font-black leading-none text-white md:text-7xl">
              Bobby&apos;s
              <span className="block text-yellow-300">Super Whip</span>
            </h1>

            <p className="mt-5 text-2xl font-bold text-white">
              It&apos;s Not A Dream,<br/>
              It&apos;s Bobby&apos;s Ice Cream!
            </p>

            <p className="mt-5 text-lg text-white/95">
              Premium whipped ice cream, delicious slush, sundaes and event
              catering across Walsall and the Midlands.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/book" className="rounded-xl bg-yellow-400 px-8 py-4 text-center font-bold text-slate-900">
                Book an Event
              </Link>

              <a href="/#treats" className="rounded-xl border-2 border-white px-8 py-4 text-center font-semibold text-white">
                View Our Treats
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
