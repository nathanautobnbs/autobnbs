import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Heart, Zap, Globe } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AutoBNBs — a global short-term rental management service founded by a young entrepreneur passionate about property and technology.",
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
              Built for Owners,
              <br />
              <span className="text-gray-700">Built to Perform.</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              AutoBNBs was founded with a simple idea: property owners deserve access to
              professional-grade short-term rental management without the corporate price tag.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Founder story */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            {/* Portrait placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-card-gradient border border-gold-500/15 overflow-hidden flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="w-24 h-24 rounded-full bg-gold-gradient mx-auto mb-6 flex items-center justify-center shadow-xl shadow-gold-500/30">
                    <span className="font-display font-black text-gray-900 text-3xl">J</span>
                  </div>
                  <div className="text-gray-900 font-display font-bold text-xl mb-1">
                    James Wilson
                  </div>
                  <div className="text-gray-600 text-sm font-medium">Founder & Director</div>
                  <div className="text-gray-400 text-xs mt-1">Founder & Director</div>
                </div>
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-6 -right-6 glass-card rounded-xl px-6 py-4 border border-gold-500/20 shadow-xl">
                <div className="font-display font-extrabold text-3xl text-gray-900">87%</div>
                <div className="text-gray-500 text-xs mt-0.5">Avg. occupancy across portfolio</div>
              </div>
            </div>

            {/* Story content */}
            <div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 mb-6 tracking-tight leading-snug">
                The Problem I Saw — and Decided to Solve
              </h2>
              <div className="flex flex-col gap-5 text-gray-500 text-base leading-relaxed">
                <p>
                  I grew up watching my parents manage a rental property the hard way — late
                  calls from tenants, months of vacancy, the constant stress of whether it was
                  actually worth it. When short-term rentals took off, I saw a better path.
                  But I also saw property owners struggling to make it work on their own.
                </p>
                <p>
                  After spending time studying the Airbnb algorithm, building connections with
                  reliable cleaning and maintenance teams, and learning everything I could about
                  dynamic pricing and guest experience, I realised I had built something most
                  property owners didn&apos;t have: a complete system.
                </p>
                <p>
                  I started managing properties for family friends. The results spoke for
                  themselves — properties that had sat empty were suddenly booked weeks in
                  advance. Owners were earning 30–50% more than their long-term rental rate.
                  And nobody was stressed.
                </p>
                <p>
                  AutoBNBs grew from there. Today we manage a growing portfolio of properties
                  worldwide, and every single decision we make still comes back to one question:
                  is this the best outcome for the property owner?
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
