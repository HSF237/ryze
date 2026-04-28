import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "../firebase";

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  shortDescription?: string;
}

export const getProducts = async (limitCount = 10) => {
  try {
    const productsRef = collection(db, "products");
    const q = query(productsRef, limit(limitCount));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Product[];
  } catch (error) {
    console.error("Firebase Product Fetch Error:", error);
    return []; // Return empty for now, will use local fallback in component if needed
  }
};

export const getProductBySlug = async (slug: string) => {
  try {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("slug", "==", slug), limit(1));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) return null;
    return { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() } as Product;
  } catch (error) {
    console.error("Firebase Product Detail Error:", error);
    return null;
  }
};
