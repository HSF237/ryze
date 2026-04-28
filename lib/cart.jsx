'use client';

import { createContext, useContext, useMemo, useReducer, useEffect, useState } from 'react';
import { PRODUCT } from './products';

const CartCtx = createContext(null);

const initial = { items: [], open: false };

function reducer(state, action) {
  switch (action.type) {
    case 'add': {
      const existing = state.items.find(
        (i) => i.id === action.payload.id && i.variant === action.payload.variant
      );
      if (existing) {
        return {
          ...state,
          open: true,
          items: state.items.map((i) =>
            i === existing ? { ...i, qty: i.qty + action.payload.qty } : i
          )
        };
      }
      return { ...state, open: true, items: [...state.items, action.payload] };
    }
    case 'remove':
      return { ...state, items: state.items.filter((_, i) => i !== action.payload) };
    case 'qty':
      return {
        ...state,
        items: state.items.map((it, i) =>
          i === action.payload.index ? { ...it, qty: Math.max(1, action.payload.qty) } : it
        )
      };
    case 'open':
      return { ...state, open: true };
    case 'close':
      return { ...state, open: false };
    case 'hydrate':
      return { ...state, items: action.payload || [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);
  const [hydrated, setHydrated] = useState(false);

  // We don't use localStorage in this build to keep it server-friendly,
  // but we expose hooks for the user to plug it in later if they want.
  useEffect(() => setHydrated(true), []);

  const value = useMemo(() => {
    const subtotal = state.items.reduce((s, i) => s + i.price * i.qty, 0);
    const count = state.items.reduce((s, i) => s + i.qty, 0);
    return {
      ...state,
      hydrated,
      subtotal,
      count,
      addToCart: (variant = 'md', qty = 1) =>
        dispatch({
          type: 'add',
          payload: {
            id: PRODUCT.id,
            variant,
            qty,
            name: PRODUCT.name,
            price: PRODUCT.price,
            image: PRODUCT.images[0].src
          }
        }),
      remove: (i) => dispatch({ type: 'remove', payload: i }),
      setQty: (index, qty) => dispatch({ type: 'qty', payload: { index, qty } }),
      open: () => dispatch({ type: 'open' }),
      close: () => dispatch({ type: 'close' })
    };
  }, [state, hydrated]);

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}
