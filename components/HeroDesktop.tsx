"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  MapPin,
  IceCreamCone,
  CalendarDays,
  ChevronRight,
} from "lucide-react";
import { Baloo_2 } from "next/font/google";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["800"],
});

export default function HeroDesktop() {
  return (
    <section className="relative hidden min-h-screen overflow-hidden bg-gradient-to-b from-sky-50 via-cyan-50 to-white md:block">

      {/* Background Glow Blobs */}

      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl"
      />

      <motion.div
        animate={{ y: [15, -15, 15] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute right-0 top-20 h-80 w-80 rounded-full bg-yellow-300/25 blur-3xl"
      />

      <motion.div
        animate={{ x: [-20, 20, -20] }}
        transition={{ repeat: Infinity, duration: 15 }}
        className="absolute left-1/2 top-96 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl"
      />

      {/* Decorative Artwork */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Ice Cream */}

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[420px] top-[110px] opacity-20"
        >
          <div className="rotate-6 text-[110px]">
            🍦
          </div>
        </motion.div>

        {/* Slush */}

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[300px] bottom-[160px] opacity-12"
        >
          <div className="text-[90px]">
            🥤
          </div>
        </motion.div>

        {/* Snowflakes */}

        <div className="absolute right-[300px] top-[90px] text-5xl text-sky-300/40">
          ❄
        </div>

        <div className="absolute right-[150px] bottom-[300px] text-4xl text-sky-300/35">
          ❄
        </div>

        {/* Sparkles */}

        <div className="absolute right-[500px] top-[200px] text-3xl text-yellow-300/50">
          ✦
        </div>

        <div className="absolute right-[200px] top-[320px] text-3xl text-yellow-300/40">
          ✦
        </div>

        <div className="absolute right-[340px] bottom-[130px] text-2xl text-yellow-300/40">
          ✦
        </div>

        {/* Bubbles */}

        <div className="absolute right-[390px] top-[180px] h-5 w-5 rounded-full bg-white/25" />

        <div className="absolute right-[260px] bottom-[240px] h-6 w-6 rounded-full bg-white/20" />

        <div className="absolute right-[170px] bottom-[90px] h-4 w-4 rounded-full bg-white/20" />

      </div>

      {/* Main Content */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-between px-12 xl:px-20">

        {/* Left Side */}

        <div className="max-w-xl -mr-8">

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.7,
              ease: "easeOut",
            }}
            className={`${baloo.className} leading-[0.82]`}
          >
            <span
              className="block text-[112px] font-extrabold tracking-tight text-[#57C7FF]"
              style={{
                textShadow: `
                  -2px -2px 0 #fff,
                   2px -2px 0 #fff,
                  -2px  2px 0 #fff,
                   2px  2px 0 #fff,
                   0px 6px 12px rgba(0,0,0,0.12)
                `,
              }}
            >
              Bobby&apos;s
            </span>

            <span
              className="-mt-3 block text-[100px] font-extrabold tracking-tight text-amber-400"
              style={{
                textShadow: `
                  -2px -2px 0 #fff,
                   2px -2px 0 #fff,
                  -2px  2px 0 #fff,
                   2px  2px 0 #fff,
                   0px 6px 12px rgba(0,0,0,0.12)
                `,
              }}
            >
              Super Whip
            </span>
          </motion.h1>

          {/* Tagline */}

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
              ease: "easeOut",
            }}
            className="mt-7 text-[32px] font-semibold leading-tight opacity-90"
          >
            <span className="text-slate-700">
              It's Not A Dream,
            </span>

            <br />

            <span className="text-sky-400">
              It's Bobby&apos;s Ice Cream!
            </span>
          </motion.h2>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.45,
              duration: 0.7,
              ease: "easeOut",
            }}
            className="mt-8 max-w-lg text-xl leading-relaxed text-slate-700"
          >
            Hire Bobby&apos;s Super Whip for premium whippy ice cream,
            luxury sundaes and refreshing slush at weddings, birthdays,
            schools, nurseries, festivals and corporate events across
            Walsall and the West Midlands. Fully insured with a 5-Star
            Food Hygiene Rating.
          </motion.p>

          {/* Trust Badges */}

          <div className="mt-8 grid max-w-lg grid-cols-2 gap-4">

            <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-white/90 shadow-md backdrop-blur-sm">
              <IceCreamCone className="h-5 w-5 text-sky-500" />
              <span className="text-sm font-semibold text-slate-700">
                Ice Cream Van Hire
              </span>
            </div>

            <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-white/90 shadow-md backdrop-blur-sm">
              <MapPin className="h-5 w-5 text-sky-500" />
              <span className="text-sm font-semibold text-slate-700">
                Walsall &amp; West Midlands
              </span>
            </div>

            <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-white/90 shadow-md backdrop-blur-sm">
              <BadgeCheck className="h-5 w-5 text-sky-500" />
              <span className="text-sm font-semibold text-slate-700">
                5-Star Food Hygiene
              </span>
            </div>

            <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-white/90 shadow-md backdrop-blur-sm">
              <ShieldCheck className="h-5 w-5 text-sky-500" />
              <span className="text-sm font-semibold text-slate-700">
                £10M Public Liability
              </span>
            </div>

          </div>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.7,
              ease: "easeOut",
            }}
            className="mt-12 flex gap-5"
          >

            {/* Get a Quote */}

            <Link
              href="/book"
              className="flex w-64 items-center justify-center gap-3 rounded-2xl bg-amber-400 px-8 py-4 font-bold text-slate-900 shadow-xl transition hover:scale-105"
            >
              <CalendarDays className="h-6 w-6" />

              <span>
                Get a Quote
              </span>

              <ChevronRight className="h-5 w-5" />
            </Link>

            {/* Customer Favourites */}

            <Link
              href="/#gallery"
              className="flex w-64 items-center justify-center gap-3 rounded-2xl border-2 border-sky-500 bg-white px-8 py-4 font-bold text-slate-900 shadow-xl transition duration-300 hover:scale-105 hover:bg-sky-500 hover:text-white"
            >
              <IceCreamCone className="h-6 w-6" />

              <span>
                View Customer Favourites
              </span>
            </Link>

          </motion.div>

        </div>

        {/* Van */}

        <div className="relative w-[62%] -mr-6 overflow-visible">

          {/* Animated yellow glow */}

          <motion.div
            animate={{
              opacity: [0.35, 0.55, 0.35],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-12 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-300/35 blur-[120px]"
          />

          {/* Blue glow */}

          <div className="absolute bottom-8 left-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-sky-300/25 blur-[140px]" />

          {/* White glow */}

          <div className="absolute bottom-0 left-1/2 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-white/55 blur-[160px]" />

          {/* Ground shadow */}

          <div className="absolute bottom-3 left-1/2 h-10 w-[420px] -translate-x-1/2 rounded-full bg-slate-900/15 blur-xl" />

          {/* Floating van */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-30"
          >
            <Image
              src="/images/van-cutout-v2.png"
              alt="Bobby's Super Whip Ice Cream Van"
              width={1900}
              height={1200}
              priority
              className="mt-8 w-full drop-shadow-[0_40px_65px_rgba(0,0,0,0.25)]"
            />
          </motion.div>

        </div>

      </div>

      {/* Wave */}

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="h-40 w-full"
        >
          <path
            fill="#ffffff"
            d="M0,250 C120,245 220,180 340,205 C500,240 650,310 820,250 C1020,180 1180,110 1440,150 L1440,320 L0,320 Z"
          />
        </svg>
      </div>

    </section>
  );
}