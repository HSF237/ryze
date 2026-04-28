import { getWooProducts, mapWooToRYZE } from "@/lib/services/woocommerceService";
import { PRODUCTS as LOCAL_PRODUCTS } from "@/lib/data/products";
import ProductCard from "@/components/ui/ProductCard";

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const category = resolvedParams.category;

  // 1. Fetch from WooCommerce
  const wooProducts = await getWooProducts(category);
  
  // 2. Map or Fallback
  let products = (Array.isArray(wooProducts) && wooProducts.length > 0)
    ? wooProducts.map(mapWooToRYZE) 
    : LOCAL_PRODUCTS;

  if (category !== 'all') {
    products = products.filter(p => p.category.toLowerCase() === category.toLowerCase() || category === 'all');
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-white/10 pb-8">
        <div>
          <h1 className="font-playfair text-5xl font-bold tracking-wide mb-4 capitalize">
            {category} Collection
          </h1>
          <p className="text-zinc-400 font-light max-w-xl">
            Precision engineered audio and wearable tech. Filter by specifications, availability, and material.
          </p>
        </div>
        
        {/* High-end Filtering Mock */}
        <div className="flex gap-4">
          <button className="text-xs uppercase tracking-widest px-4 py-2 border border-zinc-700 hover:border-white transition-colors">
            Material
          </button>
          <button className="text-xs uppercase tracking-widest px-4 py-2 border border-zinc-700 hover:border-white transition-colors">
            Price
          </button>
          <button className="text-xs uppercase tracking-widest px-4 py-2 border border-zinc-700 hover:border-white transition-colors">
            Availability
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((p: any) => (
          <ProductCard key={p.slug} product={{ ...p, specs: p.shortDescription }} />
        ))}
      </div>
    </div>
  );
}
