'use client';

import Link from 'next/link';
import { PRODUCT } from '@/lib/products';

export default function Hero() {
  return (
    <section className="mesh">
      <div className="container-page pt-12 sm:pt-20 pb-16 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-7">
          <span className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
            New · Now shipping worldwide
          </span>

          <h1 className="h-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02]">
            Rise up.
            <br />
            <span className="text-brand-600">Stand tall.</span>
          </h1>

          <p className="text-lg text-ink-600 max-w-lg">
            Meet <strong>AeroPosture™</strong> — the smart posture trainer that gently retrains
            your back in just <strong>15 minutes a day</strong>. Worn invisibly. Loved by 40,000+.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="#product" className="btn-accent text-base">
              Shop now — ${PRODUCT.price}
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12 H19 M13 5 L20 12 L13 19" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="#how" className="btn-ghost text-base">How it works</Link>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              {[
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&q=80',
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&q=80',
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&q=80'
              ].map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="h-9 w-9 rounded-full ring-2 ring-white object-cover"
                />
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-amber-500">
                {'★★★★★'.split('').map((s, i) => (<span key={i}>★</span>))}
                <span className="text-ink-700 font-semibold ml-1">{PRODUCT.rating}</span>
              </div>
              <div className="text-ink-500">{PRODUCT.reviewCount.toLocaleString()}+ verified reviews</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-ink-100 shadow-soft">
            <img
              src={PRODUCT.images[0].src}
              alt={PRODUCT.images[0].alt}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -left-4 sm:-left-8 top-10 bg-white rounded-2xl shadow-soft px-4 py-3 flex items-center gap-3 max-w-[200px]">
            <div className="h-9 w-9 rounded-full bg-brand-50 grid place-items-center text-brand-600">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6 L9 17 L4 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-semibold">In 30 days</div>
              <div className="text-[11px] text-ink-500">Visible posture change</div>
            </div>
          </div>
          <div className="absolute -right-4 sm:-right-8 bottom-10 bg-white rounded-2xl shadow-soft px-4 py-3 flex items-center gap-3 max-w-[220px]">
            <div className="h-9 w-9 rounded-full bg-amber-50 grid place-items-center text-amber-500">★</div>
            <div>
              <div className="text-xs font-semibold">{PRODUCT.rating} / 5 average</div>
              <div className="text-[11px] text-ink-500">{PRODUCT.reviewCount.toLocaleString()}+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
