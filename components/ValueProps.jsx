const PROPS = [
  {
    title: 'Smart vibration nudge',
    body: 'A miniature gyroscope detects slouching and sends a gentle, 1-second pulse — never annoying, just enough to reset.',
    icon: (
      <path d="M12 3 v3 M12 18 v3 M3 12 h3 M18 12 h3 M5.6 5.6 l2.1 2.1 M16.3 16.3 l2.1 2.1 M5.6 18.4 l2.1 -2.1 M16.3 7.7 l2.1 -2.1" />
    )
  },
  {
    title: 'Featherweight & invisible',
    body: '1.4 oz, 4 mm thin, made with breathable medical-grade silicone. Disappears under any t-shirt or button-down.',
    icon: <path d="M12 2 L4 7 v6 c0 5 3 8 8 9 c5 -1 8 -4 8 -9 V7 Z" />
  },
  {
    title: 'Powered by the RYZE app',
    body: 'Free iOS & Android app tracks your posture score, daily streaks, and gives a 5-min stretch routine you\'ll actually do.',
    icon: <path d="M7 2 h10 a2 2 0 0 1 2 2 v16 a2 2 0 0 1 -2 2 H7 a2 2 0 0 1 -2 -2 V4 a2 2 0 0 1 2 -2 Z M11 18 h2" />
  },
  {
    title: 'Backed by 60-day guarantee',
    body: 'Try it for two months. If you\'re not standing taller, email us — we\'ll refund every cent. No "ship it back" hassle.',
    icon: <path d="M12 22 c5 -2 8 -6 8 -12 V5 l-8 -3 l-8 3 v5 c0 6 3 10 8 12 Z" />
  }
];

export default function ValueProps() {
  return (
    <section id="how" className="container-page py-20 sm:py-28">
      <div className="max-w-2xl mb-14">
        <span className="chip">How it works</span>
        <h2 className="h-display text-4xl sm:text-5xl font-extrabold mt-4">
          The science of standing tall, simplified.
        </h2>
        <p className="text-ink-500 mt-4 text-lg">
          AeroPosture uses gentle motion feedback — the same technique physical therapists use, packed
          into a featherweight wearable.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PROPS.map((p) => (
          <div key={p.title} className="card hover:shadow-soft hover:-translate-y-1 transition">
            <div className="h-11 w-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-4">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {p.icon}
              </svg>
            </div>
            <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
            <p className="text-sm text-ink-500 leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
