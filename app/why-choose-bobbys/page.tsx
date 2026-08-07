import Hero from "@/components/WhyChoose/Hero";
import Trust from "@/components/WhyChoose/Trust";
import Features from "@/components/WhyChoose/Features";


export default function WhyChoosePage() {
  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <section className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <p className="text-sm text-slate-500">
            Home <span className="mx-2">›</span>
            <span className="font-semibold text-slate-800">
              Why Choose Bobby&apos;s Super Whip
            </span>
          </p>
        </div>
      </section>

        <Hero />

        <Trust />

        <Features />
    </main>
  );
}