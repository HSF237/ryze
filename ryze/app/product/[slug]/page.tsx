import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductClient from './ProductClient';
import { PRODUCTS } from '@/lib/data/products';

// Incremental Static Regeneration (Update data every 60 seconds)
export const revalidate = 60;

// Dynamic params function for generateStaticParams
export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.slug === resolvedParams.slug);
  
  if (!product) return { title: 'Product Not Found' };
  
  return {
    title: `${product.name} | RYZE Luxury Tech`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | RYZE`,
      description: product.shortDescription,
      images: [{ url: product.images[0] }],
    },
  };
}

import { getProductBySlug } from '@/lib/services/productService';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // 1. Attempt to fetch from Firebase
  let product = await getProductBySlug(slug);

  // 2. Fallback to Local Luxury Registry (Phase 3 data)
  if (!product) {
    product = PRODUCTS.find((p) => p.slug === slug) as any;
  }

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16 bg-zinc-950 min-h-screen">
      <ProductClient product={product} />
    </div>
  );
}
