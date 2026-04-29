'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart';
import Logo from './Logo';

export default function Navbar() {
    const { count, open } = useCart();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/#product', label: 'Shop' },
    { href: '/#how', label: 'How it works' },
    { href: '/#reviews', label: 'Reviews' },
    { href: '/about', label: 'About' },
    { href: '/faq', label: 'FAQ' }
      ];

  return (
        <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 border-b border-ink-100">
              <div className="container-page flex items-center justify-between py-4">
                      <Link href="/" aria-label="RYZE home">
                                <Logo />
                      </Link>Link>
              
                {/* Desktop nav */}
                      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-700">
                        {navItems.map((item) => (
                      <Link key={item.href} href={item.href} className="hover:text-ink-900">
                        {item.label}
                      </Link>Link>
                ))}
                      </nav>nav>
              
                {/* Mobile menu backdrop and drawer */}
                {mobileMenuOpen && (
                    <div
                                  className="fixed inset-0 bg-ink-900/20 z-30 md:hidden"
                                  onClick={() => setMobileMenuOpen(false)}
                                />
                  )}
              
                      <nav
                                  className={`absolute top-full left-0 right-0 bg-white border-b border-ink-100 md:hidden transition-all transform origin-top ${
                                                mobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-95 opacity-0 pointer-events-none'
                                  }`}
                                >
                                <div className="container-page py-4 space-y-2">
                                  {navItems.map((item) => (
                                                <Link
                                                                  key={item.href}
                                                                  href={item.href}
                                                                  className="block py-2.5 px-3 rounded-lg text-ink-700 hover:bg-ink-50 transition"
                                                                  onClick={() => setMobileMenuOpen(false)}
                                                                >
                                                  {item.label}
                                                </Link>Link>
                                              ))}
                                            <Link
                                                            href="/contact"
                                                            className="block py-2.5 px-3 rounded-lg text-ink-700 hover:bg-ink-50 transition"
                   onClick={() => setMobileMenuOpen(false)}
                                                          >
                                                          Help
                                            </Link>Link>
                                </div>div>
                      </nav>nav>
              
                      <div className="flex items-center gap-2">
                                <Link href="/contact" className="btn-ghost hidden sm:inline-flex text-sm px-3 py-2.5 h-auto">Help</Link>Link>
                                <button
                                              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                              className="md:hidden h-11 w-11 rounded-full hover:bg-ink-100 transition flex items-center justify-center"
                                              aria-label="Toggle menu"
                                            >
                                            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                                              {mobileMenuOpen ? (
                                                              <path d="M6 6 L18 18 M6 18 L18 6" strokeLinecap="round" strokeLinejoin="round" />
                                                            ) : (
                                                              <>
                                                                                <path d="M3 6 h18" strokeLinecap="round" />
                                                                                <path d="M3 12 h18" strokeLinecap="round" />
                                                                                <path d="M3 18 h18" strokeLinecap="round" />
                                                              </>>
                                                            )}
                                            </svg>svg>
                                </button>button>
                                <button
                                              onClick={open}
                                              className="relative inline-flex items-center justify-center rounded-full bg-ink-900 text-white h-11 w-11 hover:bg-ink-800 transition active:scale-95"
                                              aria-label={`Open cart. ${count} items`}
                                            >
                                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                                                          <path d="M6 2 L3 6 v14 a2 2 0 0 0 2 2 h14 a2 2 0 0 0 2 -2 V6 L18 2 Z" strokeLinecap="round" strokeLinejoin="round" />
                                                          <path d="M3 6 h18" strokeLinecap="round" />
                                                          <path d="M16 10 a4 4 0 0 1 -8 0" strokeLinecap="round" />
                                            </svg>svg>
                                  {count > 0 && (
                                                            <span className="absolute -top-1 -right-1 bg-brand-500 text-white text-[10px] font-bold rounded-full h-5 w-5 grid place-items-center">
                                                              {count}
                                                            </span>span>
                                            )}
                                </button>button>
                      </div>div>
              </div>div>
        </header>header>
      );
}</></header>
