import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ProductVariant = {
  id: string;
  name: string;
  price: number;
  image: string;
  color?: string;
  size?: string;
  material?: string;
};

export type CartItem = {
  id: string; // variant id
  name: string;
  price: number;
  image: string;
  quantity: number;
  variantName?: string;
  color?: string;
  material?: string;
};

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: ProductVariant, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
  addItem: (product: ProductVariant, quantity = 1) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === product.id);

        if (existingItem) {
          set({
            items: currentItems.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({ items: [...currentItems, { 
            id: product.id, 
            name: product.name,
            price: product.price,
            image: product.image,
            variantName: product.color || product.name,
            color: product.color,
            material: product.material,
            quantity 
          }] });
        }
        
        get().openCart();
      },
      removeItem: (id) => set({ items: get().items.filter((item) => item.id !== id) }),
      updateQuantity: (id, quantity) =>
        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        }),
      clearCart: () => set({ items: [] }),
      toggleCart: () => set({ isOpen: !get().isOpen }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
    }),
    {
      name: 'ryze-cart-storage',
    }
  )
);
