import Link from "next/link";
import { ClipboardCheck, Settings, DollarSign, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Onboard Your Property",
    description:
      "We start with a free audit of your property's earning potential. Then we take care of everything to get you live — professional listing setup, pricing configuration, and house manual creation.",
  },
  {
    number: "02",
    icon: Settings,
    title: "We Manage Everything",
    description:
      "From the moment you go live, we handle all guest enquiries, bookings, check-ins, cleaning coordination, and maintenance reporting. You get updates, not tasks.",
  },
  {
    number: "03",
    icon: DollarSign,
    title: "You Earn Passive Income",
    description:
      "Your earnings hit your account automatically. Each month, you'll receive a detailed performance report showing revenue, occupancy, and what we're doing to grow it.",
  },
];

export default function HowItWorksHome() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-800" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-gray-600 font-display font-semibold text-sm uppercase tracking-widest mb-4">
            The Process
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-gray-900 mb-5 tracking-tight">
            Up & Running in Three Steps
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            From your first conversation with us to your first payout — it&apos;s simpler than
            you think.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 mb-14">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <AnimatedSection key={step.number} delay={i * 100} className="relative">
                {/* Connector line (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+80px)] right-0 h-px bg-gradient-to-r from-gold-500/30 to-transparent z-10" />
                )}
                <div className="relative flex flex-col items-center text-center p-8">
                  {/* Number + icon */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-navy-900 border border-gold-500/20 flex items-center justify-center shadow-xl shadow-stone-200 group-hover:border-gold-500/40">
                      <Icon size={28} className="text-gray-600" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-gold-gradient flex items-center justify-center">
                      <span className="font-display font-black text-gray-900 text-[10px]">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-gray-900 text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-600 font-display font-semibold text-base transition-colors group"
          >
            Learn more about our process
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
