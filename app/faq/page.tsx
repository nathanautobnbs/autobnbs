import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FAQAccordion from "@/components/faq/FAQAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Got questions about AutoBNBs? Find answers on pricing, onboarding, how it works, and more. No upfront fees — we only earn when you do.",
  alternates: { canonical: "https://autobnbs.com/faq" },
};

const faqGroups = [
  {
    category: "Getting Started",
    items: [
      {
        q: "How do I get started with AutoBNBs?",
        a: "Simply fill out our free property audit form and we'll be in touch within 24 hours to discuss your property and which plan suits you best. There's no commitment required to have that initial conversation.",
      },
      {
        q: "Do I need to already be listed on Airbnb?",
        a: "No. Whether you're brand new to short-term rentals or already have an existing listing, we handle everything from the ground up — including creating and optimising your listing from scratch if needed.",
      },
      {
        q: "How long does onboarding take?",
        a: "Most properties are fully set up and live within 48 hours of signing up. We move fast so you start earning as quickly as possible.",
      },
    ],
  },
  {
    category: "Pricing & Fees",
    items: [
      {
        q: "How much does AutoBNBs charge?",
        a: "We operate on a simple commission model. Basic Plan is 15% of earnings and Pro Plan is 20% of earnings. We only take a percentage when you earn — if there are no bookings, you pay nothing.",
      },
      {
        q: "Are there any upfront or hidden fees?",
        a: "None. Zero upfront costs, no setup fees, no retainers, no hidden charges. We only get paid when you get paid.",
      },
      {
        q: "What is the difference between Basic and Pro?",
        a: "Basic covers all core automation including messaging, dynamic pricing, listing optimisation, and monthly reports. Pro includes everything in Basic plus 24/7 guest communication, cleaning coordination, calendar synchronisation, interior styling assistance, and dispute resolution.",
      },
      {
        q: "Is there a contract or minimum term?",
        a: "No contracts and no minimum term. You can cancel anytime with no penalties.",
      },
    ],
  },
  {
    category: "How It Works",
    items: [
      {
        q: "Can I still use my property when I want?",
        a: "Absolutely. Just let us know your preferred dates and we'll block them off in the calendar. Your property is still yours.",
      },
      {
        q: "How does dynamic pricing work?",
        a: "We use smart pricing tools that automatically adjust your nightly rate based on local demand, events, seasonality, and competitor pricing — maximising your revenue without you lifting a finger.",
      },
      {
        q: "How do I receive my earnings?",
        a: "Airbnb pays you directly as the property owner. We invoice you our management fee separately based on your monthly earnings. Full transparency, no surprises.",
      },
      {
        q: "What happens if there is a problem with a guest?",
        a: "Pro Plan clients have full dispute and issue resolution handled by us. Basic Plan clients receive guidance and support. Either way, we are always available to help navigate any issues that arise.",
      },
    ],
  },
  {
    category: "Results",
    items: [
      {
        q: "How much more can I earn with AutoBNBs vs managing myself?",
        a: "On average, our clients see 40% more revenue compared to self-managing — largely due to dynamic pricing, optimised listings, and professional guest communication driving higher occupancy and better reviews.",
      },
      {
        q: "Do you guarantee bookings?",
        a: "We cannot guarantee specific booking numbers as that depends on your property, location, and market conditions. What we do guarantee is that every tool, strategy, and system we have will be working around the clock to maximise your property's performance.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="bg-white">
      {/* Page header */}
      <div className="relative pt-32 pb-20 overflow-hidden bg-gold-600">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-gray-700 font-display font-semibold text-sm uppercase tracking-widest mb-4">
              FAQ
            </span>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-gray-900 mb-6 tracking-tight">
              Frequently Asked
              <br />
              <span className="text-gray-700">Questions</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about working with AutoBNBs.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* FAQ content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection>
          <FAQAccordion groups={faqGroups} />
        </AnimatedSection>

        {/* Bottom CTA */}
        <AnimatedSection delay={100}>
          <div className="mt-16 glass-card rounded-2xl p-10 text-center">
            <h2 className="font-display font-bold text-gray-900 text-2xl mb-3">
              Still have questions?
            </h2>
            <p className="text-gray-500 text-base mb-7 leading-relaxed">
              We&apos;re happy to answer anything before you commit to a single thing.
              Reach out and we&apos;ll get back to you within one business day.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gray-900 text-white font-display font-bold text-sm px-8 py-3.5 rounded-full shadow-lg hover:bg-gray-800 hover:scale-105 transition-all duration-200"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
