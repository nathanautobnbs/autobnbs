import type { Metadata } from "next";
import PricingCards from "@/components/pricing/PricingCards";

export const metadata: Metadata = {
  title: "Airbnb Management Pricing & Plans",
  description:
    "Simple Airbnb management pricing — Basic 15% or Pro 20% of earnings. No upfront fees, no contracts. You pay only when we earn you bookings.",
  alternates: {
    canonical: 'https://autobnbs.com/pricing',
  },
};

export default function PricingPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-36 pb-16 bg-gold-600 text-center px-4 sm:px-6 lg:px-8">
        <span className="inline-block text-gray-600 font-display font-semibold text-sm uppercase tracking-widest mb-4">
          Pricing
        </span>
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-gray-900 mb-5 tracking-tight">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Choose the plan that matches how hands-off you want to be. No hidden fees, no contracts.
        </p>
      </section>

      {/* Cards */}
      <section className="py-20 bg-navy-900">
        <PricingCards />
      </section>
    </>
  );
}
