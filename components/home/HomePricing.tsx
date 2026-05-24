import AnimatedSection from "@/components/ui/AnimatedSection";
import PricingCards from "@/components/pricing/PricingCards";

export default function HomePricing() {
  return (
    <section className="py-24 lg:py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-14 px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-gray-600 font-display font-semibold text-sm uppercase tracking-widest mb-4">
            Pricing
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-gray-900 mb-5 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Choose the plan that matches how hands-off you want to be. No hidden fees, no contracts.
          </p>
        </AnimatedSection>

        <PricingCards />
      </div>
    </section>
  );
}
