'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart';
import { PRODUCT } from '@/lib/products';

export default function CartDrawer() {
  const cart = useCart();

  return (
    <>
      {/* backdrop */}
      <div
        onClick={cart.close}
        className={`fixed inset-0 bg-ink-900/40 backdrop-blur-sm z-50 transition-opacity ${
          cart.open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />
      {/* drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:max-w-md bg-white z-50 shadow-2xl flex flex-col transition-transform ${
          cart.open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <header className="flex items-center justify-between px-6 py-5 border-b border-ink-100">
          <h2 className="font-display font-bold text-xl">Your cart</h2>
          <button onClick={cart.close} aria-label="Close cart" className="h-9 w-9 rounded-full grid place-items-center hover:bg-ink-100">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6 L18 18 M6 18 L18 6" strokeLinecap="round" />
            </svg>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {cart.items.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-4xl mb-3">🛒</div>
              <p className="font-semibold text-ink-900">Your cart is empty</p>
              <p className="text-sm text-ink-500 mt-1">Add AeroPosture and start standing taller.</p>
              <button onClick={cart.close} className="btn-primary mt-6">Browse products</button>
            </div>
          ) : (
            <ul className="space-y-5">
              {cart.items.map((item, i) => {
                const variantLabel =
                  PRODUCT.variants.find((v) => v.id === item.variant)?.label || item.variant;
                return (
                  <li key={`${item.id}-${item.variant}-${i}`} className="flex gap-4">
                    <div className="h-20 w-20 rounded-xl overflow-hidden bg-ink-100 flex-shrink-0">
                      <img src={item.image} alt="" className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-ink-900 clamp-2">{item.name}</p>
                      <p className="text-xs text-ink-500 mt-0.5">{variantLabel}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="inline-flex items-center rounded-full border border-ink-200">
                          <button
                            onClick={() => cart.setQty(i, item.qty - 1)}
                            className="h-8 w-8 grid place-items-center hover:bg-ink-50 rounded-l-full"
                            aria-label="Decrease quantity"
                          >−</button>
                          <span className="px-3 text-sm font-semibold tabular-nums">{item.qty}</span>
                          <button
                            onClick={() => cart.setQty(i, item.qty + 1)}
                            className="h-8 w-8 grid place-items-center hover:bg-ink-50 rounded-r-full"
                            aria-label="Increase quantity"
                          >+</button>
                        </div>
                        <span className="font-semibold tabular-nums">
                          ${(item.price * item.qty).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => cart.remove(i)}
                      className="text-xs text-ink-400 hover:text-ink-700 self-start"
                      aria-label="Remove from cart"
                    >
                      Remove
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {cart.items.length > 0 && (
          <footer className="border-t border-ink-100 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between text-sm text-ink-500">
              <span>Subtotal</span>
              <span className="font-semibold text-ink-900 text-base tabular-nums">
                ${cart.subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs text-ink-400">
              <span>Shipping</span>
              <span>FREE worldwide</span>
            </div>
            <Link href="/checkout" onClick={cart.close} className="btn-accent w-full text-base h-14">
              Checkout securely →
            </Link>
            <p className="text-[11px] text-ink-400 text-center">
              60-day money-back guarantee · Encrypted checkout
            </p>
          </footer>
        )}
      </aside>
    </>
  );
}
