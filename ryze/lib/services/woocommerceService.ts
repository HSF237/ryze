import api from "../woocommerce";

export interface WooProduct {
  id: number;
  name: string;
  slug: string;
  price: string;
  regular_price: string;
  description: string;
  short_description: string;
  images: { src: string }[];
  attributes: { name: string; options: string[] }[];
  stock_quantity: number;
  stock_status: string;
}

export const getWooProducts = async (category?: string) => {
  try {
    const params: any = { per_page: 20 };
    if (category) {
      // In a real app, you'd find the category ID first
      // params.category = categoryId;
    }
    
    const response = await api.get("products", params);
    return response.data as WooProduct[];
  } catch (error) {
    console.error("WooCommerce API Error (Products):", error);
    return [];
  }
};

export const getWooProductBySlug = async (slug: string) => {
  try {
    const response = await api.get("products", { slug });
    return response.data[0] as WooProduct | undefined;
  } catch (error) {
    console.error(`WooCommerce API Error (Slug: ${slug}):`, error);
    return undefined;
  }
};

// Mapper to convert WooCommerce data to our Luxury RYZE UI Format
export const mapWooToRYZE = (product: WooProduct) => {
  return {
    id: `woo_${product.id}`,
    slug: product.slug,
    name: product.name,
    price: parseFloat(product.price),
    category: "Uncategorized", // Can be enhanced
    shortDescription: product.short_description.replace(/<[^>]*>?/gm, ''), // Strip HTML
    longDescription: product.description.replace(/<[^>]*>?/gm, ''),
    images: product.images.map(img => img.src),
    specs: product.attributes.map(attr => ({ 
      title: attr.name, 
      content: attr.options.join(', ') 
    })),
    variants: [], // Mapping variants requires additional API calls per product
    batchAvailability: {
      status: product.stock_status === 'instock' ? 'AVAILABLE' : 'SOLD_OUT',
      batchNumber: 'BT-04', // Constant for brand consistency
      remaining: product.stock_quantity || 0,
      total: 100 // Visual mock for batch feel
    }
  };
};
