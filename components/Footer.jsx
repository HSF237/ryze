'use client';

import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 mt-24">
      <div className="container-page py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <Logo />
          <p className="text-ink-500 max-w-sm">
            RYZE makes wellness products that help you stand a little taller every day. Designed in
            California, loved in 40+ countries.
          </p>
          <form className="flex max-w-sm gap-2 mt-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 rounded-full border border-ink-200 px-4 py-3 text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/20"
            />
            <button type="submit" className="btn-primary text-sm px-5 py-3">Get 10% off</button>
          </form>
        </div>

        <div>
          <h4 className="font-semibold text-ink-900 mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-ink-500">
            <li><Link href="/#product" className="hover:text-ink-900">AeroPosture™</Link></li>
            <li><Link href="/faq" className="hover:text-ink-900">FAQ</Link></li>
            <li><Link href="/policies/shipping" className="hover:text-ink-900">Shipping</Link></li>
            <li><Link href="/policies/refund" className="hover:text-ink-900">Returns</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-ink-900 mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-ink-500">
            <li><Link href="/about" className="hover:text-ink-900">About</Link></li>
            <li><Link href="/contact" className="hover:text-ink-900">Contact</Link></li>
            <li><Link href="/policies/privacy" className="hover:text-ink-900">Privacy</Link></li>
            <li><Link href="/policies/terms" className="hover:text-ink-900">Terms</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-100">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-500">
          <p>© {new Date().getFullYear()} RYZE Co. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>We accept</span>
            <span className="flex gap-1.5 opacity-70">
              {['VISA', 'MC', 'AMEX', 'PAYPAL', 'SHOP'].map((p) => (
                <span key={p} className="rounded border border-ink-200 px-2 py-0.5 text-[10px] font-bold tracking-wider text-ink-600">{p}</span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
