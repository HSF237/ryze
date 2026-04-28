import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-page py-32 text-center">
      <span className="chip">404</span>
      <h1 className="h-display text-5xl sm:text-7xl font-extrabold mt-4">Page not found.</h1>
      <p className="text-ink-500 mt-3 max-w-md mx-auto">
        That link broke a sweat looking for the page. Try one of these instead.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">Go home</Link>
        <Link href="/#product" className="btn-ghost">Shop AeroPosture</Link>
        <Link href="/contact" className="btn-ghost">Contact us</Link>
      </div>
    </section>
  );
}
