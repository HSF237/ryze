import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <h1 className="font-playfair text-5xl md:text-7xl font-bold tracking-wide mb-8">
        The Ethos.
      </h1>
      <div className="relative h-[400px] mb-16 w-full grayscale rounded overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop" 
          alt="Engineering lab"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-8 text-zinc-300 font-light leading-relaxed text-lg pb-12 border-b border-white/10">
        <p>
          RYZE was founded on the principle of <span className="text-white font-medium italic">Architectural Wellness</span>. In an era of disposable electronics, we chose to build instruments that elevate the human experience.
        </p>
        <p>
          Our lineage is rooted in civil engineering and cognitive ergonomics. We don't just design objects; we calculate the optimal intersection of form, function, and neurological recovery.
        </p>
        <p>
          Every RYZE piece is part of a finite batch run. We do not mass-produce quality; we allocate it.
        </p>
      </div>
    </div>
  );
}
