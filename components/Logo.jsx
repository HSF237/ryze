export default function Logo({ className = 'h-7' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
        <defs>
          <linearGradient id="ryze-g" x1="0" x2="1" y1="1" y2="0">
            <stop offset="0%" stopColor="#0c0f17" />
            <stop offset="100%" stopColor="#1ea679" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill="url(#ryze-g)" />
        <path
          d="M9 22 L9 10 H15 a4 4 0 0 1 0 8 H12 L18 22 M22 22 V14 L26 18 V22"
          fill="none"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-display font-extrabold tracking-tight text-xl text-ink-900">RYZE</span>
    </div>
  );
}
