import PolicyShell from '@/components/PolicyShell';

export const metadata = { title: 'Refund & Returns Policy — RYZE' };

export default function RefundPolicy() {
  return (
    <PolicyShell title="Refund & Returns Policy" updated="April 28, 2026">
      <p>
        We want you to love RYZE. If something&apos;s not right, we&apos;ll make it right — quickly and
        without fine print.
      </p>

      <h2>Our 60-day promise</h2>
      <p>
        Try AeroPosture for up to 60 days. If you&apos;re not standing taller, email{' '}
        <a href="mailto:hello@ryze.shop">hello@ryze.shop</a> with your order number and a short note
        about what went wrong. We&apos;ll refund your purchase in full — you don&apos;t even have to ship
        the product back.
      </p>

      <h2>Refund timing</h2>
      <p>
        Refunds are processed within 3 business days of approval and typically appear on your
        statement within 5–10 business days, depending on your bank.
      </p>

      <h2>Damaged or incorrect items</h2>
      <p>
        If your order arrives damaged or you received the wrong item, send us a photo within 14 days
        and we&apos;ll ship a free replacement immediately — no return required.
      </p>

      <h2>Cancellations</h2>
      <p>
        Need to cancel? Email us within 12 hours of ordering and we&apos;ll cancel and refund before the
        order ships. After 12 hours, the order may already be in fulfillment.
      </p>

      <h2>What&apos;s not covered</h2>
      <ul>
        <li>Items damaged due to misuse, accident, or unauthorized modification.</li>
        <li>Wear and tear from normal use beyond 60 days.</li>
        <li>Items purchased from third-party resellers (we cannot guarantee authenticity).</li>
      </ul>

      <h2>Contact</h2>
      <p>
        Returns & refunds: <a href="mailto:hello@ryze.shop">hello@ryze.shop</a> · We reply within 24 hours.
      </p>
    </PolicyShell>
  );
}
