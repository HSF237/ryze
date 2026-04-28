import { REVIEWS, PRODUCT } from '@/lib/products';

function Stars({ n = 5 }) {
  return (
    <span className="text-amber-500" aria-label={`${n} stars`}>
      {'★★★★★'.slice(0, n)}<span className="text-ink-200">{'★★★★★'.slice(n)}</span>
    </span>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="container-page py-20 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-3">
        <div>
          <span className="chip">Real reviews</span>
          <h2 className="h-display text-4xl sm:text-5xl font-extrabold mt-4">
            People are standing taller.
          </h2>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-5xl font-extrabold text-ink-900">{PRODUCT.rating}</span>
            <Stars n={5} />
          </div>
          <p className="text-ink-500 mt-1">
            Based on <strong>{PRODUCT.reviewCount.toLocaleString()}</strong> verified reviews
          </p>

          <div className="mt-6 space-y-2">
            {[
              { stars: 5, pct: 86 },
              { stars: 4, pct: 9 },
              { stars: 3, pct: 3 },
              { stars: 2, pct: 1 },
              { stars: 1, pct: 1 }
            ].map((row) => (
              <div key={row.stars} className="flex items-center gap-3 text-xs">
                <span className="w-8 text-ink-500">{row.stars}★</span>
                <div className="flex-1 h-2 rounded-full bg-ink-100 overflow-hidden">
                  <div className="h-full bg-amber-400" style={{ width: `${row.pct}%` }} />
                </div>
                <span className="w-10 text-right text-ink-400">{row.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 grid gap-5 sm:grid-cols-2">
          {REVIEWS.map((r) => (
            <article key={r.name} className="card hover:shadow-soft transition">
              <div className="flex items-center justify-between mb-2">
                <Stars n={r.rating} />
                {r.verified && (
                  <span className="text-[11px] font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-full">
                    ✓ Verified buyer
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-ink-900 mb-1">{r.title}</h3>
              <p className="text-sm text-ink-600 leading-relaxed">{r.body}</p>
              <div className="mt-4 text-xs text-ink-400 flex items-center justify-between">
                <span><strong className="text-ink-700">{r.name}</strong> · {r.location}</span>
                <span>{r.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
