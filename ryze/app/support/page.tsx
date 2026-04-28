export default function SupportPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-3xl mx-auto">
      <h1 className="font-playfair text-5xl font-bold tracking-wide mb-6">Concierge Support</h1>
      <p className="text-zinc-400 mb-12">Global assistance for your RYZE instruments.</p>
      
      <div className="space-y-6">
        <div className="p-8 border border-white/10 hover:border-white/30 transition-colors">
          <h3 className="text-xl font-bold font-playfair mb-2">WhatsApp Live Chat</h3>
          <p className="text-sm text-zinc-400 mb-6">Connect directly with a RYZE engineer in your timezone.</p>
          <button className="text-xs font-bold uppercase tracking-widest bg-white text-zinc-950 px-6 py-3">Initiate Chat</button>
        </div>
        
        <div className="p-8 border border-white/10">
          <h3 className="text-xl font-bold font-playfair mb-6">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div className="border-b border-zinc-800 pb-4">
              <p className="font-medium mb-2">When is the next batch allocation?</p>
              <p className="text-sm text-zinc-500">Batch 05 is currently in final QA testing. Expected Q3 2026.</p>
            </div>
            <div className="border-b border-zinc-800 pb-4">
              <p className="font-medium mb-2">Do you offer international shipping?</p>
              <p className="text-sm text-zinc-500">Yes, via DHL Premium Global. Customs duties are included at checkout.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
