export default function ProcessPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-5xl mx-auto">
      <h1 className="font-playfair text-5xl md:text-7xl font-bold tracking-wide mb-8">Engineering Phase.</h1>
      <p className="text-xl text-zinc-400 font-light mb-16">Witness the metallurgy and neural mapping that constructs a RYZE device.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square bg-zinc-900 border border-white/5 relative items-end flex p-8">
          <p className="text-2xl font-playfair z-10 w-full text-center text-zinc-300 animate-pulse">CNC Machining Mocks</p>
        </div>
        <div className="aspect-square bg-zinc-900 border border-white/5 relative items-end flex p-8">
          <p className="text-2xl font-playfair z-10 w-full text-center text-zinc-300 animate-pulse">Acoustic Testing Mocks</p>
        </div>
      </div>
    </div>
  );
}
