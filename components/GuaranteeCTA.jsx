import Link from 'next/link';
import { PRODUCT } from '@/lib/products';

export default function GuaranteeCTA() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-700 text-white px-8 sm:px-14 py-14 sm:py-20 grid gap-10 lg:grid-cols-2 lg:items-center overflow-hidden relative">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
        <div className="absolute -left-10 -bottom-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold mb-5">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 22 c5 -2 8 -6 8 -12 V5 l-8 -3 l-8 3 v5 c0 6 3 10 8 12 Z M9 12 l2 2 l4 -4" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
            Our 60-day promise
          </div>
          <h2 className="h-display text-4xl sm:text-5xl font-extrabold text-white">
            Try it. Risk-free.
            <br />For two whole months.
          </h2>
          <p className="text-white/80 mt-4 text-lg max-w-md">
            If you&apos;re not standing visibly taller after 60 days of use, just email us. We&apos;ll refund
            you in full — no return shipping, no tricky fine print.
          </p>
          <Link href="#product" className="btn bg-white text-ink-900 px-7 py-4 mt-8 hover:-translate-y-0.5 hover:shadow-soft text-base">
            Order yours — ${PRODUCT.price}
          </Link>
        </div>

        <div className="relative grid grid-cols-2 gap-4">
          {[
            { k: '40K+', v: 'Happy customers' },
            { k: '4.8/5', v: 'Avg. rating' },
            { k: '30 days', v: 'Visible results' },
            { k: '60 days', v: 'Refund window' }
          ].map((s) => (
            <div key={s.k} className="rounded-2xl bg-white/10 backdrop-blur p-5">
              <div className="font-display text-3xl font-extrabold">{s.k}</div>
              <div className="text-white/70 text-sm mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
