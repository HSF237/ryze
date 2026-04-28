'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <section className="container-page py-16 lg:py-24 grid gap-14 lg:grid-cols-2">
      <div>
        <span className="chip">Contact</span>
        <h1 className="h-display text-4xl sm:text-5xl font-extrabold mt-4">We&apos;re humans, not bots.</h1>
        <p className="text-ink-500 text-lg mt-4">
          Drop a message — we read every single one and reply within 24 hours, every day.
        </p>

        <div className="mt-8 space-y-4 text-sm">
          <p className="flex items-start gap-3">
            <span className="h-9 w-9 rounded-xl bg-brand-50 grid place-items-center text-brand-600">@</span>
            <span>
              <strong className="block">Email</strong>
              <a href="mailto:hello@ryze.shop" className="text-ink-600 underline">hello@ryze.shop</a>
            </span>
          </p>
          <p className="flex items-start gap-3">
            <span className="h-9 w-9 rounded-xl bg-brand-50 grid place-items-center text-brand-600">⏱</span>
            <span>
              <strong className="block">Reply time</strong>
              <span className="text-ink-600">Within 24 hours, 7 days a week</span>
            </span>
          </p>
          <p className="flex items-start gap-3">
            <span className="h-9 w-9 rounded-xl bg-brand-50 grid place-items-center text-brand-600">✦</span>
            <span>
              <strong className="block">Support hours</strong>
              <span className="text-ink-600">Mon–Fri, 9am–6pm PT (responses go out outside hours too)</span>
            </span>
          </p>
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="card space-y-4"
      >
        {sent ? (
          <div className="text-center py-12">
            <div className="text-4xl mb-3">✓</div>
            <h3 className="font-display font-bold text-2xl">Message received</h3>
            <p className="text-ink-500 mt-2">We&apos;ll get back to you within 24 hours.</p>
          </div>
        ) : (
          <>
            <h3 className="font-display font-bold text-xl mb-1">Send a message</h3>
            <p className="text-sm text-ink-500 mb-4">
              Note: connect this form to a free service like{' '}
              <a className="underline" href="https://formspree.io" target="_blank" rel="noreferrer">Formspree</a>,{' '}
              <a className="underline" href="https://web3forms.com" target="_blank" rel="noreferrer">Web3Forms</a>, or{' '}
              <a className="underline" href="https://getform.io" target="_blank" rel="noreferrer">Getform</a> to receive submissions in your inbox.
            </p>
            <input required placeholder="Your name" className="input" />
            <input required type="email" placeholder="Email address" className="input" />
            <input placeholder="Order # (if applicable)" className="input" />
            <textarea required placeholder="How can we help?" rows="5" className="input" />
            <button type="submit" className="btn-accent w-full">Send message</button>
          </>
        )}
        <style jsx>{`
          .input {
            width: 100%;
            border-radius: 0.75rem;
            border: 1px solid #d5dae3;
            background: white;
            padding: 0.75rem 1rem;
            font-size: 0.95rem;
          }
          .input:focus { outline: none; border-color: #1ea679; box-shadow: 0 0 0 4px rgba(30, 166, 121, 0.15); }
        `}</style>
      </form>
    </section>
  );
}
