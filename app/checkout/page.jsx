'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart';
import { PRODUCT } from '@/lib/products';

export default function CheckoutPage() {
  const cart = useCart();
  const tax = cart.subtotal * 0.0;
  const total = cart.subtotal + tax;

  return (
    <section className="container-page py-14 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-5">
        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              'Payment integration not connected yet.\n\nWhen you wire up Stripe / PayPal / Razorpay, replace the form submit handler in app/checkout/page.jsx with your provider call. The order data is already collected in this form.'
            );
          }}
          className="lg:col-span-3 space-y-8"
        >
          <header>
            <Link href="/" className="text-sm text-ink-500 hover:text-ink-900">← Continue shopping</Link>
            <h1 className="h-display text-3xl sm:text-4xl font-extrabold mt-2">Checkout</h1>
            <p className="text-ink-500 mt-1">
              You’re moments away from standing taller. We&apos;ll send your order confirmation by email.
            </p>
          </header>

          <fieldset className="space-y-4">
            <legend className="font-semibold text-ink-900 mb-2">Contact</legend>
            <input required type="email" placeholder="Email address" className="input" />
            <label className="flex items-center gap-2 text-sm text-ink-500">
              <input type="checkbox" className="accent-brand-500" /> Email me with news and offers
            </label>
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="font-semibold text-ink-900 mb-2">Shipping address</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              <input required placeholder="First name" className="input" />
              <input required placeholder="Last name" className="input" />
            </div>
            <input required placeholder="Address" className="input" />
            <input placeholder="Apartment, suite, etc. (optional)" className="input" />
            <div className="grid gap-3 sm:grid-cols-3">
              <input required placeholder="City" className="input" />
              <input required placeholder="State / Province" className="input" />
              <input required placeholder="ZIP / Postal" className="input" />
            </div>
            <select required className="input" defaultValue="US">
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="GB">United Kingdom</option>
              <option value="AU">Australia</option>
              <option value="IN">India</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
              <option value="JP">Japan</option>
              <option value="BR">Brazil</option>
            </select>
            <input required placeholder="Phone (for delivery updates)" className="input" />
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="font-semibold text-ink-900 mb-2">Shipping method</legend>
            <label className="flex items-center justify-between rounded-xl border border-ink-200 p-4 cursor-pointer has-[:checked]:border-brand-500 has-[:checked]:bg-brand-50">
              <span className="flex items-center gap-3">
                <input type="radio" name="ship" defaultChecked className="accent-brand-500" />
                <span><strong>Free Standard</strong> · 7–14 business days</span>
              </span>
              <span className="font-semibold">FREE</span>
            </label>
            <label className="flex items-center justify-between rounded-xl border border-ink-200 p-4 cursor-pointer has-[:checked]:border-brand-500 has-[:checked]:bg-brand-50">
              <span className="flex items-center gap-3">
                <input type="radio" name="ship" className="accent-brand-500" />
                <span><strong>Express</strong> · 3–5 business days</span>
              </span>
              <span className="font-semibold">$9.99</span>
            </label>
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="font-semibold text-ink-900 mb-2">Payment</legend>
            <div className="rounded-xl border border-dashed border-ink-300 p-6 text-center bg-ink-50">
              <div className="text-3xl">🔒</div>
              <p className="font-semibold mt-2">Payment provider not connected</p>
              <p className="text-sm text-ink-500 mt-1 max-w-md mx-auto">
                Drop in your Stripe, PayPal, or Razorpay keys and replace the placeholder block in
                <code className="bg-white px-1.5 py-0.5 rounded mx-1 text-xs">app/checkout/page.jsx</code>.
                The full order payload is ready for you.
              </p>
            </div>
          </fieldset>

          <button type="submit" className="btn-accent w-full text-base h-14">
            Place order — ${total.toFixed(2)}
          </button>
          <p className="text-[11px] text-ink-400 text-center">
            By placing this order you agree to RYZE&apos;s
            <Link href="/policies/terms" className="underline mx-1">Terms</Link>
            and
            <Link href="/policies/privacy" className="underline ml-1">Privacy Policy</Link>.
          </p>
        </form>

        {/* Order summary */}
        <aside className="lg:col-span-2">
          <div className="rounded-2xl border border-ink-100 p-6 sticky top-28">
            <h2 className="font-display font-bold text-lg mb-4">Order summary</h2>

            {cart.items.length === 0 ? (
              <p className="text-sm text-ink-500">
                Your cart is empty. <Link href="/#product" className="underline">Add a product</Link> to continue.
              </p>
            ) : (
              <>
                <ul className="space-y-4 mb-5">
                  {cart.items.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <div className="relative h-16 w-16 rounded-lg overflow-hidden bg-ink-100 flex-shrink-0">
                        <img src={item.image} alt="" className="h-full w-full object-cover" />
                        <span className="absolute -top-1 -right-1 bg-ink-900 text-white text-[10px] h-5 w-5 grid place-items-center rounded-full">
                          {item.qty}
                        </span>
                      </div>
                      <div className="flex-1 text-sm">
                        <p className="font-semibold clamp-2">{item.name}</p>
                        <p className="text-xs text-ink-500">
                          {PRODUCT.variants.find((v) => v.id === item.variant)?.label}
                        </p>
                      </div>
                      <span className="text-sm font-semibold">${(item.price * item.qty).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-ink-100 space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-ink-500">Subtotal</span><span className="font-semibold">${cart.subtotal.toFixed(2)}</span></div>
                  <div className="flex justify-between"><span className="text-ink-500">Shipping</span><span>FREE</span></div>
                  <div className="flex justify-between"><span className="text-ink-500">Taxes</span><span>Calculated at next step</span></div>
                  <div className="flex justify-between pt-3 border-t border-ink-100 text-base">
                    <span className="font-semibold">Total</span>
                    <span className="font-extrabold tabular-nums">${total.toFixed(2)}</span>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="text-xs text-ink-400 mt-4 text-center">
            🔒 Encrypted checkout · 60-day money-back · Cancel any time before shipping
          </div>
        </aside>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #d5dae3;
          background: white;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          transition: all 0.2s;
        }
        .input:focus {
          outline: none;
          border-color: #1ea679;
          box-shadow: 0 0 0 4px rgba(30, 166, 121, 0.15);
        }
      `}</style>
    </section>
  );
}
