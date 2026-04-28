import { getProducts } from "@/lib/services/productService";
import { PRODUCTS } from "@/lib/data/products";
import ProductCard from "@/components/ui/ProductCard";
import Image from "next/image";

export default async function FeaturedProducts() {
  // 1. Try to fetch from Firebase Firestore, fallback to local products
  let products = [];
  try {
    products = await getProducts(4);
  } catch (error) {
    console.error("Firebase fetch failed, using fallback:", error);
    products = PRODUCTS.slice(0, 4);
  }

  // If still empty, use fallback
  if (products.length === 0) {
    products = PRODUCTS.slice(0, 4);
  }

  if (products.length === 0) {
    return (
      <div className="col-span-full py-20 flex flex-col items-center text-center">
        <div className="relative w-full max-w-4xl aspect-[21/9] rounded-2xl overflow-hidden mb-12 border border-white/5">
           <Image 
             src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
             alt="Architectural Preview" 
             fill 
             className="object-cover grayscale opacity-40 hover:opacity-60 transition-opacity duration-1000"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
           <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <span className="text-[10px] font-bold tracking-[0.6em] text-white/40 uppercase mb-4">Batch 001 Allocation</span>
              <h3 className="font-playfair text-4xl md:text-6xl text-white font-bold tracking-tighter">Preparing Manifest.</h3>
           </div>
        </div>
        <p className="text-zinc-500 font-light max-w-md mx-auto text-sm uppercase tracking-widest leading-relaxed">
           Our fulfillment pipeline is currently being verified.
           <br />
           <span className="text-white">Batch 001 Access opens in 48 hours.</span>
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((p: any) => (
        <ProductCard key={p.id} product={{ ...p, specs: p.shortDescription }} />
      ))}
    </div>
  );
}
