"use client";

import { useState } from "react";
import { Send, CheckCircle, Video } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<"basic" | "pro" | "unsure" | "">("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    propertyType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const payload = { ...form, plan };
    console.log("Form submission:", payload);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <div className="glass-card rounded-2xl p-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center mb-6">
          <CheckCircle size={32} className="text-gray-600" />
        </div>
        <h3 className="font-display font-bold text-gray-900 text-2xl mb-3">
          We&apos;ve Received Your Enquiry!
        </h3>
        <p className="text-gray-500 text-base leading-relaxed max-w-sm">
          Thanks for reaching out. We&apos;ll review your property details and get back to you
          within one business day to schedule your free audit.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-navy-900/80 border border-gray-200 hover:border-gold-500/25 focus:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/10 rounded-xl px-4 py-3.5 text-gray-900 placeholder-slate-500 text-sm transition-colors";
  const labelClass = "block text-gray-600 text-sm font-medium mb-2";

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 lg:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-gray-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address <span className="text-gray-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000 0000"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="propertyType" className={labelClass}>
            Property Type
          </label>
          <select
            id="propertyType"
            name="propertyType"
            value={form.propertyType}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>
              Select type…
            </option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="unit">Unit / Townhouse</option>
            <option value="holiday-home">Holiday Home / Bach</option>
            <option value="room">Room in Home</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="address" className={labelClass}>
          Property Address <span className="text-gray-600">*</span>
        </label>
        <input
          id="address"
          name="address"
          type="text"
          required
          value={form.address}
          onChange={handleChange}
          placeholder="123 Example St, Your City"
          className={inputClass}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className={labelClass}>
          Tell Us About Your Property
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Share anything that would help us understand your property — number of bedrooms, current situation, goals, questions…"
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Plan selection */}
      <div className="mb-6">
        <p className={labelClass}>Which plan are you interested in?</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Basic */}
          <button
            type="button"
            onClick={() => setPlan("basic")}
            className={`text-left rounded-xl border-2 px-4 py-4 transition-all duration-200 ${
              plan === "basic"
                ? "border-pink-400 bg-gold-600"
                : "border-gray-200 bg-white hover:border-pink-200 hover:bg-gold-600/40"
            }`}
          >
            <div className="font-display font-bold text-gray-900 text-sm mb-0.5">Basic Plan</div>
            <div className="text-pink-500 font-display font-semibold text-xs mb-1.5">15%</div>
            <div className="text-gray-500 text-xs leading-snug">Automated management, hands-off hosting</div>
          </button>

          {/* Pro */}
          <button
            type="button"
            onClick={() => setPlan("pro")}
            className={`text-left rounded-xl border-2 px-4 py-4 transition-all duration-200 ${
              plan === "pro"
                ? "border-pink-400 bg-gold-600"
                : "border-gray-200 bg-white hover:border-pink-200 hover:bg-gold-600/40"
            }`}
          >
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="font-display font-bold text-gray-900 text-sm">Pro Plan</span>
              <span className="text-[10px] font-display font-bold bg-gray-900 text-white px-1.5 py-0.5 rounded-full uppercase tracking-wide">Popular</span>
            </div>
            <div className="text-pink-500 font-display font-semibold text-xs mb-1.5">20%</div>
            <div className="text-gray-500 text-xs leading-snug">Full service, completely done for you</div>
          </button>

          {/* Not Sure Yet */}
          <button
            type="button"
            onClick={() => setPlan("unsure")}
            className={`text-left rounded-xl border-2 px-4 py-4 transition-all duration-200 ${
              plan === "unsure"
                ? "border-pink-400 bg-gold-600"
                : "border-gray-200 bg-white hover:border-pink-200 hover:bg-gold-600/40"
            }`}
          >
            <div className="flex items-center gap-1.5 mb-0.5">
              <Video size={13} className="text-gray-400 shrink-0" />
              <span className="font-display font-bold text-gray-900 text-sm">Not Sure Yet</span>
            </div>
            <div className="text-pink-500 font-display font-semibold text-xs mb-1.5">Let&apos;s Talk</div>
            <div className="text-gray-500 text-xs leading-snug">No stress, we&apos;ll figure it out together on a quick Zoom call</div>
          </button>
        </div>

        {plan === "unsure" && (
          <p className="mt-3 text-gray-500 text-xs leading-relaxed bg-gold-600/60 border border-pink-200 rounded-lg px-4 py-3">
            We&apos;ll reach out to schedule a free 15 minute Zoom call at a time that suits you.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2.5 bg-gold-gradient text-gray-900 font-display font-bold text-base px-8 py-4 rounded-full shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-[1.01] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={16} />
            See What Your Property Can Earn
          </>
        )}
      </button>

      <p className="text-gray-400 text-xs text-center mt-4">
        No obligation. No spam. We typically respond within one business day.
      </p>
    </form>
  );
}
