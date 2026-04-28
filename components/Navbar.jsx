'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart';
import Logo from './Logo';

export default function Navbar() {
  const { count, open } = useCart();

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 border-b border-ink-100">
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" aria-label="RYZE home">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-700">
          <Link href="/#product" className="hover:text-ink-900">Shop</Link>
          <Link href="/#how" className="hover:text-ink-900">How it works</Link>
          <Link href="/#reviews" className="hover:text-ink-900">Reviews</Link>
          <Link href="/about" className="hover:text-ink-900">About</Link>
          <Link href="/faq" className="hover:text-ink-900">FAQ</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn-ghost hidden sm:inline-flex">Help</Link>
          <button
            onClick={open}
            className="relative inline-flex items-center justify-center rounded-full bg-ink-900 text-white h-11 w-11 hover:bg-ink-800 transition"
            aria-label={`Open cart. ${count} items`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2 L3 6 v14 a2 2 0 0 0 2 2 h14 a2 2 0 0 0 2 -2 V6 L18 2 Z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 6 h18" strokeLinecap="round" />
              <path d="M16 10 a4 4 0 0 1 -8 0" strokeLinecap="round" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-500 text-white text-[10px] font-bold rounded-full h-5 w-5 grid place-items-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
