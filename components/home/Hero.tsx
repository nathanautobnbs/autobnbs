"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [imageOpacity, setImageOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const heroEl = document.getElementById("hero-section");
      if (!heroEl) return;
      const heroHeight = heroEl.offsetHeight;
      const opacity = Math.max(0, 1 - window.scrollY / (heroHeight * 0.65));
      setImageOpacity(opacity);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Fixed hero background — beach house image with #FFDEF0 tint */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          opacity: imageOpacity,
          transition: "opacity 0.05s linear",
          pointerEvents: "none",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        {/* #FFDEF0 tint — multiply layer for pink tone */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(255, 222, 240, 0.70)", mixBlendMode: "multiply" }}
        />
        {/* Darkening layer so white text stays readable */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(255, 222, 240, 0.25)" }}
        />
      </div>

      {/* Solid #FFDEF0 fallback — shows as image fades */}
      <div className="fixed inset-0 -z-20 bg-gold-400" style={{ pointerEvents: "none" }} />

      {/* Hero section */}
      <section
        id="hero-section"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "transparent" }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 lg:pt-44 lg:pb-32">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <p className="text-white font-display font-semibold text-sm uppercase tracking-widest mb-7"
               style={{ textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}>
              Short-Term Rental Management
            </p>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] tracking-tight mb-8"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.25)" }}>
              Your Property.
              <br />
              Maximum
              <br />
              <span className="text-white">Returns.</span>
            </h1>

            <p className="text-white text-xl leading-relaxed max-w-xl mb-10"
               style={{ textShadow: "0 1px 4px rgba(0,0,0,0.25)" }}>
              AutoBNBs manages your Airbnb end-to-end — listing creation, dynamic pricing,
              guest communication, and cleaning coordination — so you earn passive income
              without lifting a finger.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gray-900 text-white font-display font-bold text-base px-9 py-4 rounded-full shadow-xl shadow-gray-900/30 hover:bg-gray-800 hover:scale-105 transition-all duration-200"
            >
              Get a Free Property Audit
              <ArrowRight size={18} />
            </Link>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 mt-14 pt-10 border-t border-white/30">
              {[
                { value: "87%", label: "Avg. Occupancy Rate" },
                { value: "8+", label: "Properties Managed" },
                { value: "4.9★", label: "Guest Rating" },
                { value: "$3,800", label: "Avg. Monthly Revenue" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-extrabold text-3xl text-white"
                       style={{ textShadow: "0 1px 4px rgba(0,0,0,0.25)" }}>
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fade into white below */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>
    </>
  );
}
