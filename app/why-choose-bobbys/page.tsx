import Hero from "@/components/WhyChoose/Hero";
import Trust from "@/components/WhyChoose/Trust";
import Features from "@/components/WhyChoose/Features";
import CTA from "@/components/WhyChoose/CTA";

export default function WhyChoosePage() {
  return (
    <main>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 pt-20 xl:px-12">
        <p className="text-sm text-slate-600">
          Home › Why Choose Bobby&apos;s Super Whip
        </p>
      </div>

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