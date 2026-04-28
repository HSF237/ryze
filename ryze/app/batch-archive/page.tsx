export default function BatchArchivePage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-6xl mx-auto">
      <h1 className="font-playfair text-5xl font-bold tracking-wide mb-4">The Archives.</h1>
      <p className="text-zinc-500 mb-16 max-w-2xl">Past allocations. Once a batch is sold out, those specific engineering runs are never repeated. View the history of RYZE.</p>
      
      <div className="space-y-4">
        {[1, 2, 3].map((batch) => (
          <div key={batch} className="flex justify-between items-center p-6 border border-zinc-900 bg-zinc-900/50 hover:bg-zinc-800 transition-colors opacity-60">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">Batch 0{batch}</p>
              <h3 className="font-playfair text-xl mt-1">Founders Edition</h3>
            </div>
            <span className="text-red-900 font-bold uppercase tracking-widest text-xs border border-red-900 px-3 py-1">Sold Out</span>
          </div>
        ))}
      </div>
    </div>
  );
}
