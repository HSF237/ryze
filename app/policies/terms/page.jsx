import PolicyShell from '@/components/PolicyShell';

export const metadata = { title: 'Terms of Service — RYZE' };

export default function TermsPage() {
  return (
    <PolicyShell title="Terms of Service" updated="April 28, 2026">
      <p>
        These terms govern your use of ryze.shop and any purchase you make from RYZE Co.
        (&quot;RYZE,&quot; &quot;we,&quot; &quot;us&quot;). By using the site, you agree to these terms. If you don&apos;t
        agree, please don&apos;t use the site.
      </p>

      <h2>Eligibility</h2>
      <p>You must be at least 18 to make a purchase, or have permission from a parent or guardian.</p>

      <h2>Orders</h2>
      <p>
        We reserve the right to refuse or cancel any order — for example, if a product is out of
        stock or there&apos;s a pricing error. If we cancel an order you&apos;ve already paid for, you&apos;ll
        receive a full refund.
      </p>

      <h2>Pricing & taxes</h2>
      <p>
        All prices are in USD unless otherwise noted. We may change prices at any time, but the
        price you saw at checkout is the price you pay for that order.
      </p>

      <h2>Health disclaimer</h2>
      <p>
        AeroPosture is a posture training aid, not a medical device. It is not intended to diagnose,
        treat, cure, or prevent any disease. If you have a medical condition affecting your spine,
        shoulders, or chest, please consult a healthcare professional before use.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All content on this site — text, images, logos, designs — is the property of RYZE Co. or
        used with permission. You may not copy, reproduce, or distribute it without our written
        consent.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, RYZE&apos;s total liability for any claim relating to
        your use of the site or our products is limited to the amount you paid us in the 12 months
        before the claim arose.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of California, USA, without regard to
        its conflict of law provisions.
      </p>

      <h2>Contact</h2>
      <p>Questions about these terms: <a href="mailto:hello@ryze.shop">hello@ryze.shop</a></p>
    </PolicyShell>
  );
}
