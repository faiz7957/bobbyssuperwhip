"use client";

import HeroMobile from "./HeroMobile";
import HeroDesktop from "./HeroDesktop";

export default function Hero() {
  return (
    <>
      <div className="md:hidden">
        <HeroMobile />
      </div>

      <div className="hidden md:block">
        <HeroDesktop />
      </div>
    </>
  );
}