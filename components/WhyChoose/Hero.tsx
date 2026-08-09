"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Baloo_2 } from "next/font/google";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["800"],
});

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* =====================================================
          BACKGROUND GLOWS
          ===================================================== */}

      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
        className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-300/25 blur-3xl"
      />

      <motion.div
        animate={{ y: [15, -15, 15] }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
        className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-yellow-300/25 blur-3xl"
      />

      <motion.div
        animate={{ x: [-20, 20, -20] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-200/20 blur-3xl"
      />

      {/* =====================================================
          DECORATIVE BACKGROUND DETAILS
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Sparkles */}
        <div className="absolute right-[18%] top-[18%] text-3xl text-yellow-300/50">
          ✦
        </div>

        <div className="absolute right-[8%] top-[55%] text-2xl text-yellow-300/40">
          ✦
        </div>

        <div className="absolute left-[8%] bottom-[20%] text-3xl text-sky-300/40">
          ✦
        </div>

        {/* Snowflakes */}
        <div className="absolute right-[12%] top-[10%] text-4xl text-sky-300/30">
          ❄
        </div>

        <div className="absolute left-[42%] bottom-[12%] text-3xl text-sky-300/25">
          ❄
        </div>

        {/* Bubbles */}
        <div className="absolute right-[25%] top-[30%] h-5 w-5 rounded-full bg-sky-200/30" />

        <div className="absolute right-[7%] bottom-[25%] h-6 w-6 rounded-full bg-yellow-200/30" />

        <div className="absolute left-[15%] top-[45%] h-4 w-4 rounded-full bg-sky-200/30" />
      </div>

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-12 xl:py-24">

        {/* =====================================================
            LEFT SIDE
            ===================================================== */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className={`${baloo.className} text-5xl leading-[0.95] tracking-tight text-slate-800 sm:text-6xl lg:text-7xl`}
          >
            Why Choose
            <br />

            <span
              className="text-sky-500"
              style={{
                textShadow: `
                  -1px -1px 0 #fff,
                   1px -1px 0 #fff,
                  -1px  1px 0 #fff,
                   1px  1px 0 #fff
                `,
              }}
            >
              Bobby&apos;s
            </span>

            <br />

            <span className="text-amber-400">
              Super Whip?
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
              ease: "easeOut",
            }}
            className="mt-8 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl"
          >
            Premium whippy ice cream, luxury sundaes and refreshing slush
            for weddings, schools, nurseries, birthday parties, festivals
            and corporate events across Walsall and the West Midlands.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.7,
              ease: "easeOut",
            }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/book"
              className="rounded-2xl bg-amber-400 px-8 py-4 font-bold text-slate-900 shadow-xl transition duration-300 hover:scale-105 hover:bg-amber-300"
            >
              Get a Quote
            </Link>

            <Link
              href="/#gallery"
              className="rounded-2xl border-2 border-sky-500 bg-white px-8 py-4 font-bold text-sky-600 shadow-lg transition duration-300 hover:scale-105 hover:bg-sky-500 hover:text-white"
            >
              View Gallery
            </Link>
          </motion.div>
        </motion.div>

        {/* =====================================================
            RIGHT SIDE IMAGE
            ===================================================== */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.15,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative"
        >
          {/* Yellow glow behind image */}
          <motion.div
            animate={{
              opacity: [0.25, 0.4, 0.25],
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-8 rounded-full bg-yellow-300/30 blur-[90px]"
          />

          {/* Image */}
          <div className="relative z-10 overflow-hidden rounded-[2.5rem] border border-white/70 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.15)]">
            <Image
              src="/images/why-choose-hero.png"
              alt="Bobby's Super Whip Ice Cream Van"
              width={900}
              height={700}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Decorative blue circle */}
          <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full border-[10px] border-sky-300/30" />

          {/* Decorative yellow circle */}
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full border-[8px] border-amber-300/30" />
        </motion.div>
      </div>
    </section>
  );
}