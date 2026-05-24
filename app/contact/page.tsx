import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Get a Free Property Audit",
  description:
    "Contact AutoBNBs for a free, no-obligation short-term rental property audit. We'll assess your property's earning potential and show you exactly what we'd do to maximise it.",
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@autobnbs.co.nz",
    href: "mailto:hello@autobnbs.co.nz",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 000 0000",
    href: "tel:+15550000000",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Available Worldwide",
    href: null,
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within one business day",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Page header */}
      <div className="relative pt-32 pb-20 overflow-hidden bg-gold-600">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-gray-700 font-display font-semibold text-sm uppercase tracking-widest mb-4">
              Get Started
            </span>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-gray-900 mb-6 tracking-tight">
              Let&apos;s Talk About
              <br />
              <span className="text-gray-700">Your Property.</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Book a free, no-obligation property audit. We&apos;ll assess your property&apos;s
              short-term rental potential and share exactly how AutoBNBs would manage and grow
              your returns.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Sidebar info */}
          <div className="lg:col-span-1">
            <AnimatedSection>
              <div className="mb-8">
                <h2 className="font-display font-bold text-gray-900 text-2xl mb-3">
                  What to Expect
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Fill out the form and we&apos;ll review your property details before getting
                  back to you. Our free audit includes:
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {[
                    "Estimated monthly earnings for your property",
                    "Analysis of competing listings in your area",
                    "Our recommended pricing and positioning strategy",
                    "A clear walkthrough of how we&apos;d manage it",
                    "Answers to any questions you have",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-4">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <div key={detail.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/15 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-gray-600" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-xs uppercase tracking-wider font-medium">
                          {detail.label}
                        </div>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-gray-700 text-sm hover:text-gray-600 transition-colors"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <div className="text-gray-700 text-sm">{detail.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <AnimatedSection delay={100}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
