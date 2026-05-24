import type { Metadata } from "next";
import Link from "next/link";
import {
  ClipboardCheck,
  Settings,
  DollarSign,
  ArrowRight,
  Phone,
  Home,
  Camera,
  CalendarCheck,
  MessageSquare,
  Wrench,
  FileText,
  Banknote,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "AutoBNBs makes short-term rental management simple. Onboard your property, we handle everything, and you earn passive income. Learn the full process.",
};

const phases = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Onboard Your Property",
    subtitle: "Week 1 — Get up and running fast.",
    description:
      "The process starts with a free, no-obligation property audit. We assess your property's location, unique features, and local competition to estimate your earning potential. If you decide to proceed, we take care of everything to get you live on Airbnb.",
    steps: [
      { icon: Phone, label: "Free discovery call & earning estimate" },
      { icon: Home, label: "Property walkthrough and audit" },
      { icon: Camera, label: "Listing creation and photo guidance" },
      { icon: CalendarCheck, label: "Pricing setup and calendar configuration" },
    ],
  },
  {
    number: "02",
    icon: Settings,
    title: "We Manage Everything",
    subtitle: "Ongoing — Hands-free for you, full-speed for us.",
    description:
      "Once your listing is live, we take complete control of the day-to-day. Enquiries, bookings, check-ins, in-stay support, cleaning coordination — all handled by our team with zero input required from you. You'll receive updates, not tasks.",
    steps: [
      { icon: MessageSquare, label: "Guest communication 7 days a week" },
      { icon: Wrench, label: "Maintenance issue coordination" },
      { icon: ClipboardCheck, label: "Automated cleaning after every checkout" },
      { icon: Settings, label: "Ongoing pricing optimisation" },
    ],
  },
  {
    number: "03",
    icon: DollarSign,
    title: "You Earn Passive Income",
    subtitle: "Monthly — Watch the income arrive.",
    description:
      "Your earnings are transferred directly to you every month. No chasing invoices, no spreadsheets. A detailed performance report arrives with every payout so you always know exactly how your property is performing and what we're doing to grow your revenue.",
    steps: [
      { icon: Banknote, label: "Monthly direct payout to your account" },
      { icon: FileText, label: "Detailed performance report" },
      { icon: BarChart, label: "Revenue and occupancy trend analysis" },
      { icon: CalendarCheck, label: "Forward booking visibility" },
    ],
  },
];

function BarChart({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

const faqs = [
  {
    q: "How much does AutoBNBs charge?",
    a: "We operate on a simple percentage-based management fee — a portion of each booking. No upfront fees, no retainers. We only earn when you earn.",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "No lock-in contracts. We earn your trust month-to-month. You can pause or exit the arrangement with reasonable notice.",
  },
  {
    q: "What if I want to use the property myself?",
    a: "Completely fine. You control your calendar. Just block the dates you want to use, and we work around your schedule.",
  },
  {
    q: "I live overseas — can you still manage my property?",
    a: "Absolutely. Several of our current owners are based internationally. We handle everything locally so you don't need to be on the ground.",
  },
  {
    q: "How long does it take to get started?",
    a: "Most properties are live within 7–10 days of onboarding. We move quickly and handle all the setup.",
  },
  {
    q: "What if something goes wrong with a guest?",
    a: "We handle all guest issues directly, including Airbnb resolution centre cases. You're informed of anything significant, but we deal with it so you don't have to.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-white">
      {/* Page header */}
      <div className="relative pt-32 pb-20 overflow-hidden bg-gold-600">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-gray-700 font-display font-semibold text-sm uppercase tracking-widest mb-4">
              The Process
            </span>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-gray-900 mb-6 tracking-tight">
              Simple by Design.
              <br />
              <span className="text-gray-700">Powerful in Practice.</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Getting your property managed by AutoBNBs is straightforward. Here&apos;s exactly
              what happens from your first conversation to your first payout.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Phases */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative">
          {/* Vertical timeline line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/40 via-gold-500/20 to-transparent transform -translate-x-1/2" />

          <div className="flex flex-col gap-16">
            {phases.map((phase, i) => {
              const Icon = phase.icon;
              const isLeft = i % 2 === 0;
              return (
                <AnimatedSection key={phase.number} delay={100}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Content */}
                    <div className={isLeft ? "lg:order-1" : "lg:order-2"}>
                      <div className="flex items-center gap-4 mb-5">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-2xl bg-navy-800 border border-gold-500/20 flex items-center justify-center shadow-xl shadow-stone-200">
                            <Icon size={28} className="text-gray-600" />
                          </div>
                          <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center shadow-lg shadow-gold-500/30">
                            <span className="font-display font-black text-gray-900 text-xs">
                              {phase.number}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-xs font-display font-semibold uppercase tracking-widest mb-1">
                            {phase.subtitle}
                          </div>
                          <h2 className="font-display font-bold text-gray-900 text-2xl lg:text-3xl">
                            {phase.title}
                          </h2>
                        </div>
                      </div>
                      <p className="text-gray-500 text-base leading-relaxed mb-8">
                        {phase.description}
                      </p>
                    </div>

                    {/* Steps card */}
                    <div className={isLeft ? "lg:order-2" : "lg:order-1"}>
                      <div className="glass-card rounded-2xl p-7">
                        <div className="flex flex-col gap-4">
                          {phase.steps.map((step) => {
                            const StepIcon = step.icon;
                            return (
                              <div
                                key={step.label}
                                className="flex items-center gap-4 bg-gray-50 rounded-xl px-5 py-4 border border-gray-100 hover:border-gold-500/15 transition-colors"
                              >
                                <div className="w-9 h-9 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0">
                                  <StepIcon size={16} className="text-gray-600" />
                                </div>
                                <span className="text-gray-600 text-sm font-medium">
                                  {step.label}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* FAQ section */}
        <div className="mt-24">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 mb-4 tracking-tight">
              Common Questions
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Things property owners typically want to know before getting started.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.q} delay={i * 60}>
                <div className="glass-card rounded-xl p-6 h-full hover:border-gold-500/20 transition-colors">
                  <h3 className="font-display font-semibold text-gray-900 text-base mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* CTA */}
        <AnimatedSection className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-10 lg:p-14">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 mb-4 tracking-tight">
              Sound Simple Enough?
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              It really is. Book your free property audit today and we&apos;ll walk you through
              everything in a no-pressure 20-minute call.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-gradient text-gray-900 font-display font-bold text-base px-10 py-4 rounded-full shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-105 transition-all duration-200"
            >
              Book a Free Audit
              <ArrowRight size={18} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
