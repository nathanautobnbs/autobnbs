import { Star, Quote } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    name: "Aroha T.",
    location: "Queenstown, NZ",
    role: "Investment property owner",
    quote:
      "Honestly had no clue where to even start with Airbnb so I just handed it all over to AutoBNBs and they sorted everything. First month I made way more than I ever did with a long term tenant and I literally did nothing. Still can't believe how easy it was. Would 100% recommend.",
    rating: 5,
    highlight: "40% more than long-term rent",
  },
  {
    name: "Kartik R.",
    location: "Nadi, Fiji",
    role: "Holiday property owner",
    quote:
      "At first I was not sure how a company overseas could manage my property here in Nadi. I did not fully understand how it works. But I decided to try and honestly it has been really good. They handle everything from far away — the listing, the guests, all of it. Every month I get my income and I don't have to stress. No regrets, I am very happy I gave it a chance.",
    rating: 5,
    highlight: "Opened up an opportunity I didn't know existed",
  },
  {
    name: "Rachel K.",
    location: "Christchurch, NZ",
    role: "Investment property owner",
    quote:
      "We had this property sitting there doing basically nothing for ages. A friend mentioned AutoBNBs so we thought why not give it a go. Genuinely shocked at how well it's worked out. They took care of everything and we're now earning nearly double what we were getting from our last tenant. Wish we'd done it sooner honestly.",
    rating: 5,
    highlight: "Nearly double our previous rental income",
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
