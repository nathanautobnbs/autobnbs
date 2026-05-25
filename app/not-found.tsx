import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-white">
      {/* Page header */}
      <div className="relative pt-32 pb-20 overflow-hidden bg-gold-600">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-gray-700 font-display font-semibold text-sm uppercase tracking-widest mb-4">
            404 Error
          </span>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-gray-900 mb-6 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-10 lg:p-16 max-w-2xl mx-auto">
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Sorry, we couldn&apos;t find what you were looking for. It may have been removed,
              renamed, or it never existed. Head back to the home page and we&apos;ll get you
              back on track.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gold-gradient text-gray-900 font-display font-bold text-base px-10 py-4 rounded-full shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-105 transition-all duration-200"
            >
              Back to Home
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
