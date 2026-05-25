"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQGroup {
  category: string;
  items: FAQItem[];
}

function AccordionItem({ item, id }: { item: FAQItem; id: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-display font-semibold text-gray-900 text-base leading-snug group-hover:text-gray-700 transition-colors">
          {item.q}
        </span>
        <span className="shrink-0 w-7 h-7 rounded-full bg-gold-600 flex items-center justify-center transition-colors group-hover:bg-gold-700">
          {open ? (
            <Minus size={14} className="text-gray-700" />
          ) : (
            <Plus size={14} className="text-gray-700" />
          )}
        </span>
      </button>

      {/* Animated answer panel */}
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="text-gray-500 text-sm leading-relaxed pb-5">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQAccordion({ groups }: { groups: FAQGroup[] }) {
  return (
    <div className="flex flex-col gap-12">
      {groups.map((group) => (
        <div key={group.category}>
          <h2 className="font-display font-bold text-gray-900 text-xl mb-1 pb-3 border-b-2 border-gold-600">
            {group.category}
          </h2>
          <div className="glass-card rounded-2xl px-6 divide-y-0">
            {group.items.map((item, i) => (
              <AccordionItem
                key={i}
                id={`${group.category}-${i}`}
                item={item}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
