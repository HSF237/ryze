export default function AnnouncementBar() {
  return (
    <div className="bg-ink-900 text-white text-xs sm:text-sm">
      <div className="container-page py-2.5 flex items-center justify-center gap-3 text-center">
        <span className="hidden sm:inline opacity-70">⚡</span>
        <span>
          <strong className="font-semibold">Free worldwide shipping</strong>
          <span className="opacity-70"> · 60-day money-back guarantee · Limited launch pricing</span>
        </span>
      </div>
    </div>
  );
}
