import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const faqs = [
  {
    q: "How does Airbnb property management work?",
    a: "AutoBNBs handles every aspect of your rental — listing creation, dynamic pricing, guest communication, housekeeping, and monthly reporting. You receive the income; we do all the work.",
  },
  {
    q: "How much does AutoBNBs charge?",
    a: "We charge a simple percentage of your booking revenue — 15% for the Basic plan and 20% for Pro. No upfront costs, no retainers, no surprises.",
  },
  {
    q: "Do I pay anything upfront?",
    a: "Nothing. You pay $0 until we generate bookings for you. Our fee is taken only from confirmed booking revenue — we only earn when you earn.",
  },
  {
    q: "What types of properties do you manage?",
    a: "We manage houses, apartments, units, townhouses, holiday homes, and rooms suitable for short-term rental on platforms like Airbnb and Vrbo.",
  },
  {
    q: "How do I get started with AutoBNBs?",
    a: "Book a free property audit through our contact page. We'll assess your property's earning potential and walk you through exactly how we'd manage it — no commitment required.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a,
    },
  })),
};

export default function HomeFAQ() {
  return (
    <section className="py-24 lg:py-32 bg-navy-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-gray-600 font-display font-semibold text-sm uppercase tracking-widest mb-4">
            FAQs
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-gray-900 mb-5 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Everything property owners want to know before getting started with AutoBNBs.
          </p>
        </AnimatedSection>

        {/* FAQ grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
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

        {/* CTA */}
        <AnimatedSection className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold-gradient text-gray-900 font-display font-bold text-base px-10 py-4 rounded-full shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-105 transition-all duration-200"
          >
            See What Your Property Can Earn
            <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
