'use client';

import { CartProvider } from '@/lib/cart';

export function Providers({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
