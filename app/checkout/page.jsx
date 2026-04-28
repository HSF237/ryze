'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/lib/cart';
import { PRODUCT } from '@/lib/products';
import { loadStripe } from '@stripe/js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// Stripe payment form component
function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const cart = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',
    phone: '',
  });

  const tax = cart.subtotal * 0.0;
  const total = cart.subtotal + tax;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!stripe || !elements) {
      setErrorMessage('Payment system not ready. Please refresh the page.');
      return;
    }

    setIsLoading(true);

    try {
      // Create payment method
      const { error: methodError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
        billing_details: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
        },
      });

      if (methodError) {
        setErrorMessage(methodError.message);
        setIsLoading(false);
        return;
      }

      // Get first item from cart for product details
      const cartItem = cart.items[0];
      if (!cartItem) {
        setErrorMessage('Your cart is empty.');
        setIsLoading(false);
        return;
      }

      // Send order to API
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          productId: PRODUCT.id,
          productName: PRODUCT.name,
          quantity: cartItem.qty,
          price: cartItem.price,
          size: cartItem.variant,
          paymentMethodId: paymentMethod.id,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.error || 'Payment failed. Please try again.');
        setIsLoading(false);
        return;
      }

      // Success!
      setSuccessMessage('✅ Order placed successfully! Check your email for confirmation.');
      setFormData({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        apartment: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'US',
        phone: '',
      });
      elements.getElement(CardElement).clear();

      // Redirect to home after 2 seconds
      setTimeout(() => {
        window.location.href = '/?orderSuccess=true';
      }, 2000);
    } catch (error) {
      console.error('Checkout error:', error);
      setErrorMessage(error.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-8">
      <header>
        <Link href="/" className="text-sm text-ink-500 hover:text-ink-900">← Continue shopping</Link>
        <h1 className="h-display text-3xl sm:text-4xl font-extrabold mt-2">Checkout</h1>
        <p className="text-ink-500 mt-1">
          You're moments away from standing taller. We'll send your order confirmation by email.
        </p>
      </header>

      {errorMessage && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-800">
          {errorMessage}
        </div>
      )}

      {successMessage && (
        <div className="rounded-lg bg-green-50 border border-green-200 p-4 text-sm text-green-800">
          {successMessage}
        </div>
      )}

      <fieldset className="space-y-4">
        <legend className="font-semibold text-ink-900 mb-2">Contact</legend>
        <input
          required
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleInputChange}
          className="input"
        />
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-semibold text-ink-900 mb-2">Shipping address</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            required
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleInputChange}
            className="input"
          />
          <input
            required
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <input
          required
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
          className="input"
        />
        <input
          name="apartment"
          placeholder="Apartment, suite, etc. (optional)"
          value={formData.apartment}
          onChange={handleInputChange}
          className="input"
        />
        <div className="grid gap-3 sm:grid-cols-3">
          <input
            required
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
            className="input"
          />
          <input
            required
            name="state"
            placeholder="State / Province"
            value={formData.state}
            onChange={handleInputChange}
            className="input"
          />
          <input
            required
            name="zipCode"
            placeholder="ZIP / Postal"
            value={formData.zipCode}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <select
          required
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          className="input"
        >
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
        <input
          required
          name="phone"
          placeholder="Phone (for delivery updates)"
          value={formData.phone}
          onChange={handleInputChange}
          className="input"
        />
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="font-semibold text-ink-900 mb-2">Payment</legend>
        <div className="rounded-xl border border-ink-200 p-4 bg-white">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#9ca3af',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
        <p className="text-xs text-ink-400">
          🔒 Your payment is encrypted and secure. We accept Visa, Mastercard, American Express.
        </p>
      </fieldset>

      <button
        type="submit"
        disabled={isLoading}
        className="btn-accent w-full text-base h-14 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Processing...' : `Place order — $${total.toFixed(2)}`}
      </button>
      <p className="text-[11px] text-ink-400 text-center">
        By placing this order you agree to RYZE's
        <Link href="/policies/terms" className="underline mx-1">Terms</Link>
        and
        <Link href="/policies/privacy" className="underline ml-1">Privacy Policy</Link>.
      </p>
    </form>
  );
}

// Main checkout page wrapper
export default function CheckoutPage() {
  const cart = useCart();
  const tax = cart.subtotal * 0.0;
  const total = cart.subtotal + tax;

  return (
    <Elements stripe={stripePromise}>
      <section className="container-page py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <CheckoutForm />

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
    </Elements>
  );
}
