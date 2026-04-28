import PolicyShell from '@/components/PolicyShell';

export const metadata = { title: 'Privacy Policy — RYZE' };

export default function PrivacyPolicy() {
  return (
    <PolicyShell title="Privacy Policy" updated="April 28, 2026">
      <p>
        RYZE Co. (&quot;RYZE,&quot; &quot;we,&quot; &quot;us&quot;) operates ryze.shop. This Privacy Policy explains how we
        collect, use, and protect the information you give us. By using our site you agree to the
        collection and use of information as described here.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li><strong>Information you give us:</strong> name, email, shipping/billing address, phone, and the contents of any messages you send us.</li>
        <li><strong>Order data:</strong> products purchased, totals, transaction IDs from our payment processor (we never see your full card number).</li>
        <li><strong>Automatic data:</strong> IP address, browser, pages visited, referrer, and device type — collected via privacy-respecting analytics.</li>
        <li><strong>Cookies:</strong> small text files used to remember your cart, login, and preferences. You can disable them in your browser; some site features may not work without them.</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To process your order, deliver it, and provide customer support.</li>
        <li>To send transactional emails (order confirmations, shipping updates).</li>
        <li>To send marketing emails — only if you opt in. You can unsubscribe at any time.</li>
        <li>To detect and prevent fraud and to comply with our legal obligations.</li>
      </ul>

      <h2>Who we share it with</h2>
      <p>We share data only with the third parties needed to run our business:</p>
      <ul>
        <li>Payment processors (e.g. Stripe, PayPal) to process your payment.</li>
        <li>Fulfillment and shipping partners to ship your order.</li>
        <li>Email providers (e.g. Klaviyo, Mailerlite) to send order/marketing emails.</li>
        <li>Analytics providers (e.g. Plausible, Google Analytics) to understand site usage.</li>
      </ul>
      <p>We never sell your personal information.</p>

      <h2>Your rights</h2>
      <p>
        Depending on your jurisdiction (GDPR, CCPA, others), you may have the right to access,
        correct, delete, or port your data, and to object to certain processing. Email{' '}
        <a href="mailto:hello@ryze.shop">hello@ryze.shop</a> and we&apos;ll handle your request within
        30 days.
      </p>

      <h2>Data retention</h2>
      <p>
        We keep order records for as long as needed to comply with tax and accounting obligations
        (typically 7 years). Marketing email lists are kept until you unsubscribe.
      </p>

      <h2>Contact</h2>
      <p>
        Privacy questions: <a href="mailto:hello@ryze.shop">hello@ryze.shop</a><br />
        RYZE Co., 1111 Mission St, San Francisco, CA 94103, USA.
      </p>
    </PolicyShell>
  );
}
