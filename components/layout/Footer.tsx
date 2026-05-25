import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "About", href: "/about" },
  ],
  "Get Started": [
    { label: "See What Your Property Can Earn", href: "/contact" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <span className="text-white font-display font-black text-sm">A</span>
              </div>
              <span className="font-display font-bold text-white text-xl tracking-tight">
                AutoBNBs
              </span>
            </Link>
            <p className="text-stone-300 text-sm leading-relaxed max-w-sm mb-6">
              Your dedicated short-term rental management service. We handle
              everything — listing, pricing, guests, and cleaning — so you earn passive income
              without the stress.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contact@autobnbs.com"
                className="flex items-center gap-2.5 text-stone-300 hover:text-white transition-colors text-sm"
              >
                <Mail size={15} className="text-stone-400 shrink-0" />
                contact@autobnbs.com
              </a>
              <a
                href="tel:+64223682143"
                className="flex items-center gap-2.5 text-stone-300 hover:text-white transition-colors text-sm"
              >
                <Phone size={15} className="text-stone-400 shrink-0" />
                022 368 2143
              </a>
              <span className="flex items-center gap-2.5 text-stone-300 text-sm">
                <MapPin size={15} className="text-stone-400 shrink-0" />
                Christchurch, New Zealand
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-display font-semibold text-white text-sm mb-5 uppercase tracking-wider">
                {title}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-stone-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-400 text-xs">
            © {new Date().getFullYear()} AutoBNBs Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-stone-400 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="text-stone-400 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-stone-400 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
