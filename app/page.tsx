import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import HowItWorksHome from "@/components/home/HowItWorksHome";
import Testimonials from "@/components/home/Testimonials";
import HomePricing from "@/components/home/HomePricing";
import HomeFAQ from "@/components/home/HomeFAQ";
import HomeCTA from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: { absolute: "AutoBNBs — Airbnb Property Management Service" },
  description:
    "AutoBNBs manages your Airbnb property end-to-end — listing, pricing, guests & cleaning. No upfront fees. Get a free property audit today.",
  alternates: {
    canonical: 'https://autobnbs.com',
  },
  openGraph: {
    title: "AutoBNBs — Airbnb Property Management Service",
    description:
      "AutoBNBs manages your Airbnb property end-to-end — listing, pricing, guests & cleaning. No upfront fees. Get a free property audit today.",
    url: 'https://autobnbs.com',
    images: [{ url: '/logoman.png' }],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <HowItWorksHome />
      <Testimonials />
      <HomePricing />
      <HomeFAQ />
      <HomeCTA />
    </>
  );
}
