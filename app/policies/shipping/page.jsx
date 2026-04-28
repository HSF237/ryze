import PolicyShell from '@/components/PolicyShell';

export const metadata = { title: 'Shipping Policy — RYZE' };

export default function ShippingPolicy() {
  return (
    <PolicyShell title="Shipping Policy" updated="April 28, 2026">
      <h2>Where we ship</h2>
      <p>RYZE ships worldwide to over 40 countries. If your country isn&apos;t available at checkout, drop us a line — we&apos;re always expanding.</p>

      <h2>Shipping speed</h2>
      <ul>
        <li><strong>Free Standard:</strong> 7–14 business days (worldwide). Tracked for most destinations.</li>
        <li><strong>Express:</strong> 3–5 business days. Available at checkout for an additional fee.</li>
      </ul>
      <p>Delivery times start once your order leaves our fulfillment center. Orders placed before 12pm PT typically ship the same business day.</p>

      <h2>Tracking</h2>
      <p>You&apos;ll receive a tracking link by email as soon as your order ships. If your tracking hasn&apos;t updated in 5+ days, email us and we&apos;ll investigate with the carrier.</p>

      <h2>Customs & duties</h2>
      <p>
        For international orders, customs duties and import taxes may apply depending on your country&apos;s rules. These fees are not included in the price at checkout and are the customer&apos;s responsibility.
      </p>

      <h2>Lost or delayed packages</h2>
      <p>
        If your package is marked delivered but missing, please check with neighbors and the carrier first, then email us within 7 days. For packages stuck in transit longer than 30 days from order date, we&apos;ll send a free replacement.
      </p>

      <h2>Address changes</h2>
      <p>
        Once an order ships, we can&apos;t change the delivery address — but contact us within 12 hours of ordering and we&apos;ll update it before fulfillment.
      </p>

      <h2>Contact</h2>
      <p>Shipping questions: <a href="mailto:hello@ryze.shop">hello@ryze.shop</a></p>
    </PolicyShell>
  );
}
