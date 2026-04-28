export default function PolicyShell({ title, updated, children }) {
  return (
    <article className="container-page py-16 lg:py-24 max-w-3xl">
      <span className="chip">Policy</span>
      <h1 className="h-display text-4xl sm:text-5xl font-extrabold mt-4">{title}</h1>
      <p className="text-ink-400 text-sm mt-3">Last updated {updated}</p>
      <div className="prose-ryze mt-10 space-y-6 text-ink-600 leading-relaxed">{children}</div>
      <style>{`
        .prose-ryze h2 { font-family: 'Plus Jakarta Sans', Inter, sans-serif; font-weight: 800; font-size: 1.4rem; color: #0c0f17; margin-top: 2rem; margin-bottom: 0.5rem; }
        .prose-ryze h3 { font-weight: 700; color: #0c0f17; margin-top: 1.4rem; margin-bottom: 0.4rem; }
        .prose-ryze a { color: #118661; text-decoration: underline; }
        .prose-ryze ul { list-style: disc; padding-left: 1.4rem; }
        .prose-ryze ul li { margin-bottom: 0.5rem; }
      `}</style>
    </article>
  );
}
