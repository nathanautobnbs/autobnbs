import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Heart, Zap, Globe } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "About AutoBNBs — Our Story & Team",
  description:
    "AutoBNBs was co-founded by Nathan Sparrow & Wiari Faulkner. Built to deliver professional Airbnb management with measurable results for property owners.",
  alternates: {
    canonical: 'https://autobnbs.com/about',
  },
};

const values = [
  {
    icon: Target,
    title: "Performance First",
    description:
      "Every decision we make — from pricing strategy to listing copy — is driven by data and optimised for your results. We don't guess; we measure.",
  },
  {
    icon: Heart,
    title: "Owner-Centric",
    description:
      "Your goals are our goals. We don't just manage properties — we build long-term partnerships. Your success is the only metric that matters to us.",
  },
  {
    icon: Zap,
    title: "Tech-Forward",
    description:
      "We use the latest tools in dynamic pricing, automated scheduling, and performance analytics — things that most self-managers can't access or don't have time to learn.",
  },
  {
    icon: Globe,
    title: "Built for Owners",
    description:
      "We understand short-term rental markets — the seasonality, the guest expectations, the local nuances. Wherever your property is, we know how to make it perform.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page header */}
      <div className="relative pt-32 pb-20 overflow-hidden bg-gold-600">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-gray-700 font-display font-semibold text-sm uppercase tracking-widest mb-4">
              Our Story
            </span>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-gray-900 mb-6 tracking-tight">
              Built with Purpose.
              <br />
              <span className="text-gray-700">Driven by Results.</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              AutoBNBs was founded on a clear vision: to bring professional-grade short-term
              rental management to property owners who deserve better than the status quo.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Founder story */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">

            {/* Co-founder cards */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-5">
              {[
                { initial: "N", name: "Nathan Sparrow", role: "Co-Founder & Director" },
                { initial: "W", name: "Wiari Faulkner", role: "Co-Founder & Director" },
              ].map((founder) => (
                <div
                  key={founder.name}
                  className="flex-1 glass-card rounded-2xl p-8 flex items-center gap-5 border border-gold-500/15"
                >
                  <div className="w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center shrink-0 shadow-lg shadow-gold-500/20">
                    <span className="font-display font-black text-gray-900 text-2xl">
                      {founder.initial}
                    </span>
                  </div>
                  <div>
                    <div className="font-display font-bold text-gray-900 text-lg leading-snug">
                      {founder.name}
                    </div>
                    <div className="text-gray-500 text-sm mt-0.5">{founder.role}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Story content */}
            <div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 mb-6 tracking-tight leading-snug">
                A Deliberate Vision for a Broken Industry
              </h2>
              <div className="flex flex-col gap-5 text-gray-500 text-base leading-relaxed">
                <p>
                  Nathan Sparrow and Wiari Faulkner founded AutoBNBs after identifying a
                  consistent gap in the short-term rental market: property owners were
                  leaving significant revenue on the table, not through lack of effort, but
                  because the tools, systems, and expertise required to truly optimise a
                  rental weren&apos;t accessible to them.
                </p>
                <p>
                  With combined expertise across property management, revenue optimisation,
                  guest experience, and hospitality technology, Nathan and Wiari built
                  AutoBNBs from the ground up with one clear objective — to deliver
                  measurable, consistent results for every property owner they work with.
                </p>
                <p>
                  AutoBNBs was designed around automation and data from day one. Every
                  process — from dynamic pricing and listing optimisation to guest
                  communication and housekeeping coordination — was engineered to perform
                  at a level that self-managing owners simply can&apos;t replicate on their own.
                </p>
                <p>
                  The results speak for themselves. Properties under AutoBNBs management
                  consistently outperform market averages, and the owners behind them
                  finally have what they were looking for: passive income that actually
                  works. Nathan and Wiari remain hands-on in the business, and that
                  commitment to quality and accountability has never changed.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Values */}
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block text-gray-600 font-display font-semibold text-sm uppercase tracking-widest mb-4">
            What We Stand For
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 mb-5 tracking-tight">
            Our Values
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            These aren&apos;t buzzwords on a wall — they&apos;re the principles that drive
            every decision we make for your property.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <AnimatedSection key={value.title} delay={i * 80}>
                <div className="glass-card rounded-2xl p-7 h-full hover:border-gold-500/25 transition-colors group">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0 group-hover:bg-gold-500/15 transition-colors">
                      <Icon size={22} className="text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-gray-900 text-lg mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="text-center">
          <div className="glass-card rounded-2xl p-10 lg:p-14">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 mb-4 tracking-tight">
              Let&apos;s Work Together
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Whether you have one property or a growing portfolio, we&apos;d love to show you
              what AutoBNBs can do for your returns.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-gradient text-gray-900 font-display font-bold text-base px-10 py-4 rounded-full shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-105 transition-all duration-200"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
