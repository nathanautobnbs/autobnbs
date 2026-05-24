import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AutoBNBs — Short-Term Rental Management",
    template: "%s | AutoBNBs",
  },
  description:
    "AutoBNBs manages your Airbnb and short-term rental property — from listing creation and dynamic pricing to guest communication and cleaning coordination. Earn more, stress less.",
  keywords: [
    "Airbnb management",
    "short-term rental management",
    "property management",
    "Airbnb co-host",
    "passive income property",
  ],
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "AutoBNBs",
    title: "AutoBNBs — Short-Term Rental Management",
    description:
      "We handle everything so you can earn passive income from your property without the hassle.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoBNBs — Short-Term Rental Management",
    description:
      "We handle everything so you can earn passive income from your property without the hassle.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-sans bg-navy-900 text-gray-800 antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
