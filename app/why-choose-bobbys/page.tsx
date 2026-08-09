import Hero from "@/components/WhyChoose/Hero";
import Trust from "@/components/WhyChoose/Trust";
import Features from "@/components/WhyChoose/Features";
import CTA from "@/components/WhyChoose/CTA";

export default function WhyChoosePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="mx-auto max-w-[1060px] px-6 py-10">
          <p className="text-sm text-slate-600">
            Home › Why Choose Bobby's Super Whip
          </p>
        </div>
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