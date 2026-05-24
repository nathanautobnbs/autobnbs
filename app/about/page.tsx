import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Heart, Zap, Globe } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AutoBNBs — a global short-term rental management service co-founded by Nathan Sparrow and Wiari Faulkner, two young entrepreneurs who turned a shared passion into a business built for property owners.",
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
              Two Founders.
              <br />
              <span className="text-gray-700">One Mission.</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              AutoBNBs was built by two people who saw a better way for property owners to earn —
              and decided to make it happen.
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
                A Shared Vision, Built From Scratch
              </h2>
              <div className="flex flex-col gap-5 text-gray-500 text-base leading-relaxed">
                <p>
                  Nathan and Wiari met in college and hit it off immediately — not just as
                  friends, but as two people who thought about business and opportunity the
                  same way. They were constantly talking about ideas, spotting gaps in markets,
                  and asking the same question: <em>why isn&apos;t someone doing this better?</em>
                </p>
                <p>
                  Short-term rentals kept coming up. They could both see that property owners
                  were sitting on real earning potential — but most had no idea how to unlock it,
                  and the existing options were either too expensive, too hands-off, or just
                  not built with the owner in mind.
                </p>
                <p>
                  After leaving school, they decided to stop talking and start building. They
                  threw themselves into learning everything — Airbnb algorithms, dynamic pricing,
                  guest communication, cleaning coordination — and built AutoBNBs from the
                  ground up together.
                </p>
                <p>
                  The results were immediate. Properties that owners had struggled to manage
                  themselves were suddenly running smoothly, earning more, and getting five-star
                  reviews. Word spread fast. AutoBNBs grew from there — and it&apos;s still
                  driven by the same two people who started it, with the same commitment to
                  one thing: doing right by the property owner.
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
