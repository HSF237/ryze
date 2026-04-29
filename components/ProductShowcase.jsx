'use client';

import { useState } from 'react';
import { PRODUCT } from '@/lib/products';
import { useCart } from '@/lib/cart';

export default function ProductShowcase() {
  const { addToCart } = useCart();
  const [variant, setVariant] = useState(PRODUCT.variants[1].id);
  const [activeImage, setActiveImage] = useState(0);

  const discountPct = Math.round(
    ((PRODUCT.compareAtPrice - PRODUCT.price) / PRODUCT.compareAtPrice) * 100
  );

  return (
    <section id="product" className="bg-ink-50 py-12 sm:py-20 lg:py-28">
      <div className="container-page grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-start">
        {/* Gallery */}
        <div className="space-y-3 sm:space-y-4">
          <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-soft">
            <img
              src={PRODUCT.images[activeImage].src}
              alt={PRODUCT.images[activeImage].alt}
              className="h-full w-full object-cover transition-opacity"
            />
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {PRODUCT.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`aspect-square rounded-lg sm:rounded-xl overflow-hidden ring-2 transition active:scale-95 ${
                  activeImage === i ? 'ring-ink-900' : 'ring-transparent hover:ring-ink-200'
                }`}
                aria-label={`View image ${i + 1}`}
              >
                <img src={img.src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Buy box */}
        <div>
          <div className="flex flex-wrap items-center gap-2 text-amber-500 mb-3">
            {'★★★★★'.split('').map((s, i) => <span key={i}>★</span>)}
            <span className="text-ink-700 font-semibold ml-1 text-sm">{PRODUCT.rating}</span>
            <span className="text-ink-400">·</span>
            <a href="#reviews" className="text-ink-500 text-sm underline-offset-2 hover:underline">
              {PRODUCT.reviewCount.toLocaleString()} reviews
            </a>
          </div>

          <h2 className="h-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            {PRODUCT.name}
          </h2>
          <p className="text-ink-500 mt-2 sm:mt-3 text-base sm:text-lg">{PRODUCT.shortPitch}</p>

          <div className="mt-5 sm:mt-6 flex flex-wrap items-baseline gap-2 sm:gap-3">
            <span className="text-3xl sm:text-4xl font-extrabold text-ink-900">${PRODUCT.price}</span>
            <span className="text-base sm:text-lg text-ink-400 line-through">${PRODUCT.compareAtPrice}</span>
            <span className="chip bg-amber-100 text-amber-800 text-xs sm:text-sm">Save {discountPct}%</span>
          </div>
          <p className="text-xs sm:text-sm text-ink-500 mt-2">or 4 interest-free payments — finalize at checkout</p>

          <ul className="mt-5 sm:mt-6 space-y-2">
            {PRODUCT.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm sm:text-base text-ink-700">
                <svg className="h-5 w-5 mt-0.5 text-brand-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 13 L9 17 L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 sm:mt-8">
            <label className="text-xs sm:text-sm font-semibold text-ink-700 mb-2 sm:mb-3 block">Choose your size</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {PRODUCT.variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setVariant(v.id)}
                  className={`rounded-lg sm:rounded-xl border px-2 sm:px-3 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition active:scale-95 ${
                    variant === v.id
                      ? 'border-ink-900 bg-ink-900 text-white'
                      : 'border-ink-200 bg-white text-ink-700 hover:border-ink-400'
                  }`}
                >
                  {v.label.split(' ')[0]}
                  <span className={`block text-[9px] sm:text-[10px] font-normal mt-0.5 ${variant === v.id ? 'text-white/70' : 'text-ink-400'}`}>
                    {v.label.match(/\(.+\)/)?.[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(variant, 1)}
            className="btn-accent w-full mt-6 sm:mt-7 text-base h-12 sm:h-14"
          >
            Add to cart — ${PRODUCT.price}
          </button>

          <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 sm:gap-3 text-[11px] sm:text-xs text-ink-500">
            <span className="flex items-center gap-1.5 sm:gap-2">
              <svg className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-brand-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 7 h13 v10 H3 Z M16 10 h4 l1 4 v3 h-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Free worldwide shipping</span>
            </span>
            <span className="flex items-center gap-1.5 sm:gap-2">
              <svg className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-brand-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22 c5 -2 8 -6 8 -12 V5 l-8 -3 l-8 3 v5 c0 6 3 10 8 12 Z" strokeLinejoin="round" />
              </svg>
              <span>60-day money-back</span>
            </span>
            <span className="flex items-center gap-1.5 sm:gap-2">
              <svg className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-brand-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11 V7 a5 5 0 0 1 10 0 v4" />
              </svg>
              <span>Secure checkout</span>
            </span>
            <span className="flex items-center gap-1.5 sm:gap-2">
              <svg className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-brand-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2 v4 M12 22 v-4 M4.9 4.9 l2.8 2.8 M16.3 16.3 l2.8 2.8 M2 12 h4 M18 12 h4" />
              </svg>
              <span>Plastic-free packaging</span>
            </span>
          </div>

          <div className="mt-5 sm:mt-6 rounded-xl sm:rounded-2xl bg-amber-50 border border-amber-100 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-amber-900 flex items-start gap-2">
            <svg className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><path d="M12 8 v4 M12 16 h.01" strokeLinecap="round" />
            </svg>
            <span>
              <strong>Only {PRODUCT.unitsLeft} left</strong> at launch pricing — restock in ~3 weeks.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
