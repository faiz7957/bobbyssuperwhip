import Breadcrumb from "@/components/Breadcrumb";

import Hero from "@/components/WhyChoose/Hero";
import Trust from "@/components/WhyChoose/Trust";
import Features from "@/components/WhyChoose/Features";
import CTA from "@/components/WhyChoose/CTA";

export default function WhyChoosePage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb current="Why Choose Bobby's Super Whip" />

      {/* Hero */}
      <Hero />

      {/* Trust */}
      <Trust />

      {/* Features */}
      <Features />

      {/* Call To Action */}
      <CTA />
    </main>
  );
}