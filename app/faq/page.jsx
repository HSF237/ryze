import FAQList from '@/components/FAQList';

export const metadata = {
  title: 'FAQ — RYZE',
  description: 'Answers to the questions we get most about AeroPosture and RYZE.'
};

export default function FAQPage() {
  return (
    <>
      <section className="mesh">
        <div className="container-page py-16 lg:py-24 max-w-3xl">
          <span className="chip">FAQ</span>
          <h1 className="h-display text-4xl sm:text-6xl font-extrabold mt-4 leading-tight">
            Questions, answered.
          </h1>
          <p className="text-ink-500 text-lg mt-4">
            Can&apos;t find what you&apos;re looking for?{' '}
            <a href="mailto:hello@ryze.shop" className="underline text-ink-900">hello@ryze.shop</a>{' '}
            — we reply within 24 hours.
          </p>
        </div>
      </section>
      <FAQList />
    </>
  );
}
