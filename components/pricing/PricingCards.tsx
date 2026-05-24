import Link from "next/link";
import { CheckCircle, Zap } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const basicFeatures = [
  "Automated Messaging",
  "Review Automation",
  "Dynamic Pricing",
  "Listing Optimisation",
  "Check in/out Management",
  "Guest Verification",
  "Monthly Performance Reports",
];

const proExtras = [
  "Calendar Synchronisation",
  "24/7 Guest Communication",
  "Cleaning Coordination",
  "Airbnb Income Reporting Support",
  "Interior Styling Assistance",
  "Dispute & Issue Resolution",
];

export default function PricingCards() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Callout banner */}
      <AnimatedSection>
        <div className="mb-12 rounded-2xl bg-gold-600 border border-pink-200 px-7 py-5 flex items-start gap-4 shadow-sm">
          <Zap size={22} className="text-gray-900 shrink-0 mt-0.5" />
          <p className="text-gray-900 font-display font-semibold text-base leading-relaxed">
            You don&apos;t pay us a cent until we get you bookings. No upfront costs, no
            retainers — we only earn when you earn.
          </p>
        </div>
      </AnimatedSection>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Basic */}
        <AnimatedSection delay={80}>
          <div className="glass-card rounded-2xl p-8 h-full flex flex-col">
            <div className="mb-6">
              <span className="inline-block text-gray-500 font-display font-semibold text-xs uppercase tracking-widest mb-3">
                Basic
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-display font-extrabold text-5xl text-gray-900">15%</span>
                <span className="text-gray-500 text-sm font-medium">of earnings</span>
              </div>
            </div>

            <ul className="flex-1 space-y-3 mb-8">
              {basicFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-gray-600 text-sm">
                  <CheckCircle size={16} className="text-gray-900 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div>
              <Link
                href="/contact"
                className="block text-center bg-gray-900/8 border border-gray-900/15 text-gray-900 font-display font-semibold text-sm px-6 py-3 rounded-full hover:bg-gray-900/15 transition-all duration-200 mb-3"
              >
                Choose Basic
              </Link>
              <p className="text-center text-gray-400 text-xs">Cancel anytime</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Pro */}
        <AnimatedSection delay={160}>
          <div className="relative rounded-2xl p-8 h-full flex flex-col bg-white border-2 border-gray-900 shadow-lg shadow-gray-900/10">
            {/* Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="inline-block bg-gray-900 text-white font-display font-bold text-xs px-4 py-1.5 rounded-full tracking-wide uppercase">
                Most Popular
              </span>
            </div>

            <div className="mb-6 pt-2">
              <span className="inline-block text-gray-500 font-display font-semibold text-xs uppercase tracking-widest mb-3">
                Pro
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-display font-extrabold text-5xl text-gray-900">20%</span>
                <span className="text-gray-500 text-sm font-medium">of earnings</span>
              </div>
            </div>

            <ul className="flex-1 space-y-3 mb-8">
              <li className="text-gray-400 text-xs font-display font-semibold uppercase tracking-widest pb-1">
                Everything in Basic, plus:
              </li>
              {[...basicFeatures, ...proExtras].map((f, i) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <CheckCircle
                    size={16}
                    className={i < basicFeatures.length ? "text-gray-400 shrink-0" : "text-gray-900 shrink-0"}
                  />
                  <span className={i < basicFeatures.length ? "text-gray-400" : "text-gray-600"}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <div>
              <Link
                href="/contact"
                className="block text-center bg-gray-900 text-white font-display font-semibold text-sm px-6 py-3 rounded-full shadow-md hover:bg-gray-800 hover:scale-105 transition-all duration-200 mb-3"
              >
                Choose Pro
              </Link>
              <p className="text-center text-gray-400 text-xs">Cancel anytime</p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Footer line */}
      <AnimatedSection delay={200}>
        <p className="text-center text-gray-500 text-sm font-medium">
          No booking, no fee — ever.
        </p>
      </AnimatedSection>
    </div>
  );
}
