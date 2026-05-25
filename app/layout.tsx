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
  metadataBase: new URL('https://autobnbs.com'),
  title: {
    default: "AutoBNBs — Airbnb Property Management",
    template: "%s | AutoBNBs",
  },
  description:
    "AutoBNBs manages your short-term rental property end-to-end. Listing, dynamic pricing, guest communication & cleaning — all handled. Earn passive income from your Airbnb.",
  keywords: [
    "Airbnb management service",
    "short-term rental management",
    "Airbnb property management",
    "vacation rental management",
    "Airbnb automation",
    "passive income Airbnb",
    "property management for Airbnb hosts",
  ],
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "AutoBNBs",
    title: "AutoBNBs — Airbnb Property Management",
    description:
      "AutoBNBs manages your short-term rental property end-to-end. Listing, dynamic pricing, guest communication & cleaning — all handled. Earn passive income from your Airbnb.",
    images: [
      {
        url: '/logoman.png',
        width: 800,
        height: 400,
        alt: 'AutoBNBs — Airbnb Property Management',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoBNBs — Airbnb Property Management",
    description:
      "AutoBNBs manages your short-term rental property end-to-end. Listing, dynamic pricing, guest communication & cleaning — all handled. Earn passive income from your Airbnb.",
    images: ['/logoman.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#FFDEF0',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "AutoBNBs",
              "description": "Professional Airbnb and short-term rental property management service",
              "url": "https://autobnbs.com",
              "email": "contact@autobnbs.com",
              "telephone": "+64223682143",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Christchurch",
                "addressCountry": "NZ",
              },
              "serviceType": "Short-Term Rental Property Management",
              "areaServed": "Worldwide",
              "priceRange": "15%-20% of booking revenue",
            }),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
