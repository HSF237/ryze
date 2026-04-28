const STEPS = [
  {
    n: '01',
    title: 'Wear it for 15 minutes',
    body: 'Slip AeroPosture under your shirt — you barely feel it. Start with a short daily session.'
  },
  {
    n: '02',
    title: 'Feel the gentle nudge',
    body: 'When you slouch, it sends a soft vibration. Your body learns to correct itself naturally.'
  },
  {
    n: '03',
    title: 'Track your progress',
    body: 'The free RYZE app shows your daily posture score and a 5-min stretch routine.'
  },
  {
    n: '04',
    title: 'Stand taller in 30 days',
    body: 'Most customers see a visible difference within a month — and feel it sooner.'
  }
];

export default function HowItWorksSteps() {
  return (
    <section className="bg-ink-900 text-white py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl mb-14">
          <span className="chip bg-white/10 text-white">Your 30-day journey</span>
          <h2 className="h-display text-4xl sm:text-5xl font-extrabold mt-4 text-white">
            Tiny daily habit. Lifelong impact.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="font-display text-3xl font-extrabold text-brand-400">{s.n}</div>
              <h3 className="font-display font-bold text-xl mt-3">{s.title}</h3>
              <p className="text-white/60 mt-2 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
