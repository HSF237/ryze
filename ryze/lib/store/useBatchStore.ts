import { create } from 'zustand';

export interface BatchInventory {
  batchId: string;
  count: number;
  total: number;
}

interface BatchState {
  inventory: Record<string, BatchInventory>;
  updateStock: (productId: string, newCount: number) => void;
  reserveUnit: (productId: string) => void;
  simulateLiveSale: (productId: string) => void;
}

export const useBatchStore = create<BatchState>((set) => ({
  inventory: {
    'ryze-horizon-earbuds': { batchId: 'BT-04', count: 42, total: 500 },
    'ryze-nova-watch': { batchId: 'BT-02', count: 12, total: 200 },
    'ryze-aero-drone': { batchId: 'BT-01', count: 0, total: 100 },
  },
  updateStock: (productId, newCount) => set((state) => ({
    inventory: {
      ...state.inventory,
      [productId]: { ...state.inventory[productId], count: newCount }
    }
  })),
  reserveUnit: (productId) => set((state) => {
    const current = state.inventory[productId];
    if (current && current.count > 0) {
      return {
        inventory: {
          ...state.inventory,
          [productId]: { ...current, count: current.count - 1 }
        }
      };
    }
    return state;
  }),
  simulateLiveSale: (productId: string) => set((state) => {
    const current = state.inventory[productId];
    if (current && current.count > 10) {
      return {
        inventory: {
          ...state.inventory,
          [productId]: { ...current, count: current.count - (Math.random() > 0.8 ? 1 : 0) }
        }
      };
    }
    return state;
  })
}));
