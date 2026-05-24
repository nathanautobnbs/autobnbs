import Link from "next/link";
import { List, TrendingUp, MessageCircle, Sparkles, BarChart2, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const services = [
  {
    icon: List,
    title: "Listing Creation & Optimisation",
    description:
      "Professional photography-ready descriptions, SEO-optimised titles, and compelling listings that rank higher and convert browsers into bookings.",
  },
  {
    icon: TrendingUp,
    title: "Dynamic Pricing",
    description:
      "We adjust your nightly rate in real time based on local demand, events, and seasonality — squeezing every dollar out of peak periods while minimising empty nights.",
  },
  {
    icon: MessageCircle,
    title: "Guest Communication",
    description:
      "Lightning-fast responses 7 days a week. We handle every message from first enquiry to checkout review, keeping your response rate at 100% and guests delighted.",
  },
  {
    icon: Sparkles,
    title: "Housekeeping Coordination",
    description:
      "Trusted, vetted cleaners dispatched automatically after every checkout. Every property is inspection-ready, every time — no chasing required from you.",
  },
  {
    icon: BarChart2,
    title: "Owner Reporting",
    description:
      "Monthly performance reports delivered to your inbox — occupancy, revenue, guest feedback, and forward bookings. Full transparency, zero guesswork.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-gray-600 font-display font-semibold text-sm uppercase tracking-widest mb-4">
            What We Handle
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-gray-900 mb-5 tracking-tight">
            Everything. So You Don&apos;t Have To.
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Managing a short-term rental is a full-time job. We take every task off your
            plate — and we&apos;re better at all of them.
          </p>
        </AnimatedSection>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.title} delay={i * 80}>
                <div className="glass-card rounded-2xl p-7 h-full hover:border-gold-500/25 hover:bg-navy-700/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-5 group-hover:bg-gold-500/15 transition-colors">
                    <Icon size={22} className="text-gray-600" />
                  </div>
                  <h3 className="font-display font-bold text-gray-900 text-lg mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-600 font-display font-semibold text-base transition-colors group"
          >
            View the full service breakdown
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
