import type { Metadata } from "next";
import Link from "next/link";
import {
  List,
  TrendingUp,
  MessageCircle,
  Sparkles,
  BarChart2,
  ArrowRight,
  CheckCircle,
  Shield,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AutoBNBs offers end-to-end short-term rental management — listing optimisation, dynamic pricing, guest communication, housekeeping coordination, and owner reporting.",
};

const services = [
  {
    icon: List,
    id: "listing",
    title: "Listing Creation & Optimisation",
    tagline: "A listing that sells itself.",
    description:
      "Your first impression is everything on Airbnb. We craft compelling, keyword-rich titles and descriptions that tell the story of your property — and rank it above the competition. Every listing includes a full amenity audit, competitive positioning analysis, and ongoing copy refinement based on booking data.",
    points: [
      "Professional copywriting tailored to your property",
      "SEO-optimised titles and descriptions",
      "Amenity audit and improvement recommendations",
      "High-conversion photo order and caption guidance",
      "Ongoing listing updates as market conditions change",
    ],
  },
  {
    icon: TrendingUp,
    id: "pricing",
    title: "Dynamic Pricing",
    tagline: "The right price, at the right time — always.",
    description:
      "Static pricing leaves money on the table during peak periods and loses bookings during slow seasons. Our dynamic pricing approach adjusts your nightly rate based on local demand signals, competitor rates, upcoming events, seasonal trends, and booking lead times. The result: a consistently higher revenue per available night.",
    points: [
      "Real-time rate adjustments based on demand",
      "Event and seasonal surge pricing",
      "Competitor benchmarking and rate positioning",
      "Minimum stay optimisation to reduce gaps",
      "Last-minute discount strategy for low-demand periods",
    ],
  },
  {
    icon: MessageCircle,
    id: "guest-comms",
    title: "Guest Communication",
    tagline: "Every guest feels like a priority — because they are.",
    description:
      "Response time is one of the most critical factors in your Airbnb ranking. We maintain a near-100% response rate across all bookings, responding to enquiries, handling pre-arrival questions, coordinating check-ins, and resolving any issues that arise during a stay — all without interrupting your day.",
    points: [
      "Rapid response to all booking enquiries",
      "Automated but personalised check-in instructions",
      "In-stay support and issue resolution",
      "Post-checkout review requests and follow-ups",
      "Conflict resolution and Airbnb escalation management",
    ],
  },
  {
    icon: Sparkles,
    id: "housekeeping",
    title: "Housekeeping Coordination",
    tagline: "Spotless, every single time.",
    description:
      "Guest reviews live and die by cleanliness. Our trusted, vetted cleaning teams are scheduled automatically after every checkout and operate to a detailed property-specific checklist. We carry out regular quality inspections and manage any linen, consumables, and restocking so your property is always guest-ready.",
    points: [
      "Vetted, reliable cleaning teams on call",
      "Automated scheduling after every checkout",
      "Property-specific cleaning checklists",
      "Linen and consumable restocking management",
      "Regular quality control inspections",
    ],
  },
  {
    icon: BarChart2,
    id: "reporting",
    title: "Owner Reporting",
    tagline: "Full visibility, no surprises.",
    description:
      "We believe transparency builds trust. Every month, you receive a comprehensive performance report covering occupancy rate, total revenue, payout breakdown, guest review summary, upcoming bookings, and our recommendations for the month ahead. You stay in control without needing to be hands-on.",
    points: [
      "Monthly detailed performance reports",
      "Revenue, occupancy, and payout breakdown",
      "Guest review summaries and trend analysis",
      "Forward booking visibility",
      "Ongoing strategic recommendations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Page header */}
      <div className="relative pt-32 pb-20 overflow-hidden bg-gold-600">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-gray-700 font-display font-semibold text-sm uppercase tracking-widest mb-4">
              Our Services
            </span>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-gray-900 mb-6 tracking-tight">
              Everything Your Property
              <br />
              <span className="text-gray-700">Needs to Perform.</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              From first listing to monthly payout, AutoBNBs covers every aspect of
              short-term rental management so you never have to.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isEven = i % 2 === 0;
            return (
              <AnimatedSection key={service.id} delay={100}>
                <div
                  id={service.id}
                  className="glass-card rounded-2xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
                >
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                        <Icon size={26} className="text-gray-600" />
                      </div>
                      <div>
                        <div className="text-gray-600 text-xs font-display font-semibold uppercase tracking-widest mb-1">
                          {service.tagline}
                        </div>
                        <h2 className="font-display font-bold text-gray-900 text-2xl lg:text-3xl leading-snug">
                          {service.title}
                        </h2>
                      </div>
                    </div>
                    <p className="text-gray-500 text-base leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-600 font-display font-semibold text-sm transition-colors group"
                    >
                      Get started with this service
                      <ArrowRight
                        size={15}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>

                  <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                      <div className="flex items-center gap-2 mb-5">
                        <Shield size={15} className="text-gray-600" />
                        <span className="text-gray-600 font-display font-semibold text-xs uppercase tracking-widest">
                          What&apos;s included
                        </span>
                      </div>
                      <ul className="flex flex-col gap-3.5">
                        {service.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <CheckCircle
                              size={16}
                              className="text-gray-600 mt-0.5 shrink-0"
                            />
                            <span className="text-gray-600 text-sm leading-relaxed">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-10 lg:p-16">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 mb-4 tracking-tight">
              Ready to Put Your Property to Work?
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Book a free property audit and we&apos;ll show you exactly what your property
              could earn under AutoBNBs management.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-gradient text-gray-900 font-display font-bold text-base px-10 py-4 rounded-full shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-105 transition-all duration-200"
            >
              Get a Free Property Audit
              <ArrowRight size={18} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
