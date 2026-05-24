import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import HowItWorksHome from "@/components/home/HowItWorksHome";
import Testimonials from "@/components/home/Testimonials";
import HomePricing from "@/components/home/HomePricing";
import HomeCTA from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "AutoBNBs — Short-Term Rental Management",
  description:
    "AutoBNBs manages your Airbnb and short-term rental property. Listing creation, dynamic pricing, guest communication, and cleaning coordination — all handled for you.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <HowItWorksHome />
      <Testimonials />
      <HomePricing />
      <HomeCTA />
    </>
  );
}
