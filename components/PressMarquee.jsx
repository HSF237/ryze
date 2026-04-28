export default function PressMarquee() {
  const items = ['FORBES', 'WIRED', 'MEN\'S HEALTH', 'TECHCRUNCH', 'VOGUE', 'GQ', 'BUSINESS INSIDER'];
  // duplicate so the loop seams smoothly
  const list = [...items, ...items];
  return (
    <section className="border-y border-ink-100 bg-white py-6 overflow-hidden">
      <div className="text-center text-xs uppercase tracking-widest text-ink-400 mb-3">
        As seen in
      </div>
      <div className="marquee">
        {list.map((it, i) => (
          <span key={i} className="font-display text-2xl font-extrabold text-ink-300">
            {it}
          </span>
        ))}
      </div>
    </section>
  );
}
