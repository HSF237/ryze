'use client';

import { useState } from 'react';
import { FAQS } from '@/lib/products';

export default function FAQList() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="container-page py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-3">
        <div>
          <span className="chip">FAQ</span>
          <h2 className="h-display text-4xl sm:text-5xl font-extrabold mt-4">Questions, answered.</h2>
          <p className="text-ink-500 mt-4">
            Still wondering about something? Email us at{' '}
            <a href="mailto:hello@ryze.shop" className="text-ink-900 underline">hello@ryze.shop</a>{' '}
            — we reply within 24 hours.
          </p>
        </div>

        <div className="lg:col-span-2 divide-y divide-ink-100 border-y border-ink-100">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={f.q}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full text-left py-5 flex items-start gap-4 group"
                aria-expanded={isOpen}
              >
                <span className="flex-1">
                  <span className="block font-semibold text-ink-900 group-hover:text-brand-700 transition">
                    {f.q}
                  </span>
                  <span
                    className={`block text-ink-500 text-sm leading-relaxed overflow-hidden transition-all ${
                      isOpen ? 'max-h-96 mt-3' : 'max-h-0'
                    }`}
                  >
                    {f.a}
                  </span>
                </span>
                <span className={`mt-1 h-7 w-7 rounded-full grid place-items-center bg-ink-50 text-ink-700 transition ${isOpen ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
