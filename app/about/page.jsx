export const metadata = {
  title: 'About — RYZE',
  description: 'Why we built RYZE — and the kind of company we want to be.'
};

export default function AboutPage() {
  return (
    <article className="container-page py-16 lg:py-24 max-w-3xl">
      <span className="chip">Our story</span>
      <h1 className="h-display text-4xl sm:text-6xl font-extrabold mt-4 leading-tight">
        Small habits.
        <br />Big ascents.
      </h1>

      <p className="text-ink-600 text-lg mt-8 leading-relaxed">
        RYZE started in a one-bedroom apartment in 2025, when our founder found himself nursing a
        knot in his upper back the size of a golf ball. He was 26. The fix wasn&apos;t a clinic, a
        chiropractor, or a fancy ergonomic chair — it was 15 quiet minutes a day of paying attention.
      </p>
      <p className="text-ink-600 text-lg mt-5 leading-relaxed">
        That&apos;s the idea behind everything we make: tiny, sustainable habits that compound into a
        body that feels lighter, taller, and more like your own. No 30-day juice cleanses. No
        “grind your way through pain.” Just thoughtful tools that meet you where you are.
      </p>

      <h2 className="h-display text-2xl font-bold mt-14 mb-4">What we believe</h2>
      <ul className="space-y-4 text-ink-600">
        <li className="flex gap-3"><span className="text-brand-600 font-bold">→</span><span><strong>Wellness should be quiet.</strong> Our products nudge, never nag.</span></li>
        <li className="flex gap-3"><span className="text-brand-600 font-bold">→</span><span><strong>Refunds should be easy.</strong> If we earn your trust, we earn the order. So we say yes to refunds and let our products do the talking.</span></li>
        <li className="flex gap-3"><span className="text-brand-600 font-bold">→</span><span><strong>The earth gets one shot.</strong> Plastic-free packaging, FSC-certified inserts, carbon-neutral shipping where carriers allow.</span></li>
      </ul>

      <h2 className="h-display text-2xl font-bold mt-14 mb-4">Where to reach us</h2>
      <p className="text-ink-600">
        Email: <a href="mailto:hello@ryze.shop" className="underline">hello@ryze.shop</a><br />
        Reply window: under 24 hours, every day of the year.<br />
        Mailing: RYZE Co., 1111 Mission St, San Francisco, CA 94103, USA.
      </p>
    </article>
  );
}
