const ROWS = [
  { feat: 'Smart vibration reminder', ryze: true, others: false },
  { feat: 'Companion app + posture tracking', ryze: true, others: false },
  { feat: 'Under 1.5 oz, invisible under shirts', ryze: true, others: false },
  { feat: 'Adjustable sensitivity', ryze: true, others: false },
  { feat: 'USB-C charging', ryze: true, others: 'Sometimes' },
  { feat: '60-day money-back guarantee', ryze: true, others: false },
  { feat: 'Free worldwide shipping', ryze: true, others: false }
];

const Tick = () => (
  <svg className="h-5 w-5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M5 13 L9 17 L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const X = () => (
  <svg className="h-5 w-5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M6 6 L18 18 M6 18 L18 6" strokeLinecap="round" />
  </svg>
);

export default function Comparison() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="max-w-2xl mb-10">
        <span className="chip">RYZE vs. the rest</span>
        <h2 className="h-display text-4xl sm:text-5xl font-extrabold mt-4">
          Why we built AeroPosture.
        </h2>
        <p className="text-ink-500 mt-4 text-lg">
          Most posture braces are stiff, hot, and you can&apos;t actually wear them all day. We started
          from scratch.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-ink-100">
        <table className="w-full text-left text-sm">
          <thead className="bg-ink-50">
            <tr className="text-ink-500 uppercase text-xs tracking-wider">
              <th className="py-4 px-5 font-semibold">Feature</th>
              <th className="py-4 px-5 font-semibold text-ink-900">RYZE AeroPosture</th>
              <th className="py-4 px-5 font-semibold">Generic posture braces</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100 bg-white">
            {ROWS.map((row) => (
              <tr key={row.feat}>
                <td className="py-4 px-5 text-ink-700">{row.feat}</td>
                <td className="py-4 px-5">
                  {row.ryze === true ? <Tick /> : <span className="text-ink-500">{row.ryze}</span>}
                </td>
                <td className="py-4 px-5">
                  {row.others === false ? <X /> : <span className="text-ink-500">{row.others}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
