import { Star, Quote } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Australia",
    role: "Investment property owner",
    quote:
      "I was nervous about putting my rental on Airbnb — I had no idea where to start. AutoBNBs handled absolutely everything. Within the first month, I was earning 40% more than my long-term tenant was paying, and I didn't have to lift a finger. Best decision I've made with this property.",
    rating: 5,
    highlight: "40% more than long-term rent",
  },
  {
    name: "James T.",
    location: "United Kingdom",
    role: "Owner of two properties",
    quote:
      "I tried managing my own Airbnb for three months and it nearly broke me. Late-night messages, guest issues, no-shows — it was relentless. Handing it to AutoBNBs was an instant weight off my shoulders. Occupancy went from 62% to 89% in 60 days, and I've barely thought about it since.",
    rating: 5,
    highlight: "62% → 89% occupancy in 60 days",
  },
  {
    name: "Rachel K.",
    location: "United States",
    role: "Holiday home owner",
    quote:
      "I live overseas and was worried about managing a property remotely. AutoBNBs gave me complete peace of mind. The monthly reports are detailed and transparent, and the team responds to everything. My property is consistently earning, and I never have to stress about it.",
    rating: 5,
    highlight: "Fully managed from overseas",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-gray-600 font-display font-semibold text-sm uppercase tracking-widest mb-4">
            Owner Stories
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-gray-900 mb-5 tracking-tight">
            Real Owners. Real Results.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Don&apos;t take our word for it — here&apos;s what property owners say after working
            with AutoBNBs.
          </p>
        </AnimatedSection>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 100}>
              <div className="glass-card rounded-2xl p-7 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={14} className="text-gray-600 fill-gray-400" />
                  ))}
                </div>

                {/* Highlight badge */}
                <div className="inline-flex items-center self-start bg-gold-500/10 border border-gold-500/20 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                  {t.highlight}
                </div>

                {/* Quote */}
                <div className="relative flex-1 mb-6">
                  <Quote size={20} className="text-gray-600/30 mb-2" />
                  <p className="text-gray-600 text-sm leading-relaxed italic">{t.quote}</p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-navy-900 text-sm">
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <div className="font-display font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role} · {t.location}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
