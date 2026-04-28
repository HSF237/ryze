export default function PoliciesPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-3xl mx-auto text-zinc-400 font-light text-sm space-y-12">
      <h1 className="font-playfair text-4xl text-white font-bold mb-12">Legal & Policies</h1>
      
      <section>
        <h2 className="text-xl text-white font-playfair mb-4">Refund Policy</h2>
        <p>Because each device is allocated from a finite batch, we only accept returns within 14 days for completely sealed, un-opened boxes. Defective units fall under our 2-year Platinum Warranty guarantee.</p>
      </section>

      <section>
        <h2 className="text-xl text-white font-playfair mb-4">Shipping & Logistics</h2>
        <p>We provide complimentary insured air-shipping on all Batch 001 allocations.
          <br /><br />
          - Domestic (India): 3-5 business days via BlueDart/Delhivery Priority.
          <br />
          - International: 7-12 business days via FedEx/DHL.
          <br /><br />
          All shipments are trackable via the RYZE Manifest portal.
        </p>
      </section>
      
      <section>
        <h2 className="text-xl text-white font-playfair mb-4">Terms of Service</h2>
        <p>RYZE operates under strict allocations. Reselling allocations at a premium on secondary markets violates our terms. Accounts flagged for scalping will be permanently banned from future batches.</p>
      </section>
      
      <section>
        <h2 className="text-xl text-white font-playfair mb-4">Privacy Policy</h2>
        <p>Your data remains natively encrypted. We do not transmit, sell, or cloud-store any data unless explicitly requested for telemetry bug-finding via opt-in.</p>
      </section>
    </div>
  );
}
