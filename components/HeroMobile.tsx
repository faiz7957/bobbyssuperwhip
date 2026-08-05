"use client";
import { Baloo_2 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CalendarDays,
  IceCreamCone,
  ChevronRight,
  MapPin,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";
const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["800"],
});
export default function HeroMobile() {
  const scrollToGallery = () => {
  document.getElementById("gallery")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 via-sky-100 to-sky-200 md:hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-28 -right-20 h-[420px] w-[420px] rounded-full bg-sky-200/60 blur-3xl" />

        <div className="absolute right-0 top-[340px] h-[340px] w-[340px] rounded-full bg-yellow-200/40 blur-3xl" />

        <div className="absolute -left-16 top-16 h-[240px] w-[240px] rounded-full bg-sky-100 blur-3xl" />

        <div className="absolute -left-24 bottom-16 h-[260px] w-[260px] rounded-full bg-white blur-3xl" />

        <div className="absolute left-10 top-48 h-[180px] w-[180px] rounded-full bg-white/60 blur-3xl" />

      </div>

      {/* Decorative artwork */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Ice Cream */}

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[10px] top-[150px] opacity-35"
        >
          <div className="rotate-6 text-[115px] text-slate-500/20">
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
          className="absolute right-[6px] top-[390px] opacity-15"
        >
          <div className="text-[92px]">
            🥤
          </div>
        </motion.div>

        {/* Snowflakes */}

        <div className="absolute right-[55px] top-[95px] text-3xl text-sky-300/50">
          ❄
        </div>

        <div className="absolute right-[8px] top-[340px] text-4xl text-sky-300/40">
          ❄
        </div>

        {/* Sparkles */}

        <div className="absolute right-[90px] top-[270px] text-2xl text-yellow-300/50">
          ✦
        </div>

        <div className="absolute right-[15px] top-[300px] text-2xl text-yellow-300/40">
          ✦
        </div>

        <div className="absolute right-[35px] top-[525px] text-xl text-yellow-300/40">
          ✦
        </div>

        {/* Bubbles */}

        <div className="absolute right-[110px] top-[245px] h-4 w-4 rounded-full bg-white/25" />

        <div className="absolute right-[80px] top-[455px] h-5 w-5 rounded-full bg-white/20" />

        <div className="absolute right-[20px] top-[600px] h-3 w-3 rounded-full bg-white/20" />

      </div>

      <div className="relative z-10 px-8 pt-32 pb-6">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-blue-700"
        >
          <MapPin className="h-5 w-5 fill-blue-600 text-blue-600" />

          <span className="text-sm font-bold uppercase tracking-wide">
            Serving the Midlands Since 2016
          </span>

        </motion.div>

        {/* Heading */}

        <motion.h1
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.15 }}
  className={`${baloo.className} mt-6 leading-[0.82]`}
>

          <span
  className={`${baloo.className} block text-[70px] font-extrabold tracking-tight text-[#57C7FF]`}
  style={{
    textShadow: `
      -2px -2px 0 #fff,
       2px -2px 0 #fff,
      -2px  2px 0 #fff,
       2px  2px 0 #fff,
       0px  6px 12px rgba(0,0,0,0.18)
    `,
  }}
>
  Bobby's
</span>

          <span
  className={`${baloo.className} -mt-2 block text-[62px] font-extrabold tracking-tight text-amber-400`}
  style={{
    textShadow: `
      -2px -2px 0 #fff,
       2px -2px 0 #fff,
      -2px  2px 0 #fff,
       2px  2px 0 #fff,
       0px  6px 12px rgba(0,0,0,0.18)
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
  className="mt-7 text-[32px] font-medium leading-tight"
>
  <span className="text-slate-600">
    It's Not A Dream,
  </span>

  <br />

  <span className="text-sky-300">
    It's Bobby&apos;s Ice Cream!
  </span>
</motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-6 max-w-[320px] text-lg leading-8 text-slate-700"
        >
          Premium whipped ice cream, luxury sundaes and refreshing slush for birthdays, schools, weddings and events across the Midlands.
        </motion.p>
        <div className="mt-6 grid grid-cols-2 gap-3">

  <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-white/90 shadow-md backdrop-blur-sm">
    <IceCreamCone className="h-5 w-5 text-sky-500" />
    <span className="text-xs font-semibold text-slate-700">
      Ice Cream Van Hire
    </span>
  </div>

  <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-white/90 shadow-md backdrop-blur-sm">
    <MapPin className="h-5 w-5 text-sky-500" />
    <span className="text-xs font-semibold text-slate-700">
      Walsall &amp; West Midlands
    </span>
  </div>

  <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-white/90 shadow-md backdrop-blur-sm">
    <BadgeCheck className="h-5 w-5 text-sky-500" />
    <span className="text-xs font-semibold text-slate-700">
      5-Star Food Hygiene
    </span>
  </div>

  <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-white/90 shadow-md backdrop-blur-sm">
    <ShieldCheck className="h-5 w-5 text-sky-500" />
    <span className="text-xs font-semibold text-slate-700">
      £10M Public Liability
    </span>
  </div>

</div>

        {/* Buttons */}

        {/* Buttons */}

<motion.div
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
  className="relative z-10 mt-8 flex flex-col gap-4"
>
          <Link
            href="/book"
            className="flex items-center justify-center gap-3 rounded-2xl bg-amber-400 py-5 text-xl font-bold text-slate-900 shadow-xl transition hover:scale-[1.02]"
          >
            <CalendarDays className="h-6 w-6" />

            Book Your Event

            <ChevronRight className="h-5 w-5" />
          </Link>

          <Link
  href="#gallery"
  scroll={true}
  className="flex items-center justify-center gap-3 rounded-2xl border-2 border-sky-500 bg-white py-5 text-xl font-bold text-slate-900 shadow-xl transition duration-300 hover:scale-[1.02] hover:bg-sky-500 hover:text-white"
>
  <IceCreamCone className="h-6 w-6" />

  View Customer Favourites
</Link>
        </motion.div>        {/* Van */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.75,
            duration: 0.9,
            ease: "easeOut",
          }}
          className="relative z-10 mt-12 -mb-20 flex justify-center"
        >
          {/* Main glow */}

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
            className="pointer-events-none absolute bottom-16 h-80 w-80 rounded-full bg-yellow-300/35 blur-3xl"
          />

          {/* Secondary glow */}

          <div className="pointer-events-none absolute bottom-8 h-64 w-96 rounded-full bg-sky-200/35 blur-3xl" />


          {/* Soft white glow */}

          <div className="pointer-events-none absolute bottom-0 h-72 w-[420px] rounded-full bg-white/40 blur-3xl" />


          {/* Ground shadow */}

          <div className="pointer-events-none absolute bottom-1 h-8 w-80 rounded-full bg-slate-900/15 blur-xl" />

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
            className="pointer-events-none relative z-20"
          >
            <Image
              src="/images/van-cutout-v2.png"
              alt="Bobby's Super Whip Ice Cream Van"
              width={1700}
              height={1100}
              priority
              className="w-[122%] max-w-none -ml-[11%] drop-shadow-[0_40px_65px_rgba(0,0,0,0.25)]"
            />
          </motion.div>
        </motion.div>

      </div>

      {/* Custom Hero Curve */}

<div className="relative -mt-14 h-44 overflow-hidden">
  <svg
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    className="absolute bottom-0 h-full w-full"
  >
    <path
      fill="#ffffff"
      d="
        M0,250
        C120,245
        220,180
        340,205

        C500,240
        650,310
        820,250

        C1020,180
        1180,110
        1440,150

        L1440,320
        L0,320
        Z
      "
    />
  </svg>
</div>    </section>
  );
}