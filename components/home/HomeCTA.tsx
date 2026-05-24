import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const inclusions = [
  "No lock-in contracts",
  "Free initial property audit",
  "Transparent monthly reporting",
  "We only win when you win",
];

export default function HomeCTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gold-600">
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-white/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-white/20 blur-[80px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <span className="inline-block text-gray-600 font-display font-semibold text-sm uppercase tracking-widest mb-5">
            Ready to get started?
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 tracking-tight leading-tight">
            Find Out What Your Property
            <br />
            <span className="text-gray-700">Could Really Be Earning.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Book a free, no-obligation property audit. We&apos;ll assess your property&apos;s
            short-term rental potential, estimate your monthly earnings, and walk you through
            exactly how AutoBNBs would manage it.
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
            {inclusions.map((item) => (
              <div key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                <CheckCircle size={15} className="text-gray-900 shrink-0" />
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-display font-bold text-base px-10 py-4 rounded-full shadow-xl shadow-gray-900/20 hover:bg-gray-800 hover:scale-105 transition-all duration-200"
            >
              Get My Free Audit
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-gray-900/10 border border-gray-900/20 text-gray-900 font-display font-semibold text-base px-8 py-4 rounded-full hover:bg-gray-900/15 transition-all duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
