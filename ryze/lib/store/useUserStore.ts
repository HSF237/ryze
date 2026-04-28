import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LoyaltyTier, UserProfile } from '../supabase';

interface UserState {
  profile: UserProfile | null;
  setProfile: (profile: UserProfile | null) => void;
  getDiscountMultiplier: () => number;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      profile: {
        id: 'mock-123',
        email: 'architect@ryze.tech',
        tier: 'ARCHITECT' as LoyaltyTier,
        points: 1250,
      }, // Mocked logged in user for Phase 2 demo
      setProfile: (profile) => set({ profile }),
      getDiscountMultiplier: () => {
        const tier = get().profile?.tier;
        switch (tier) {
          case 'ARCHITECT': return 0.90; // 10% off
          case 'ELITE': return 0.80; // 20% off
          default: return 1.0;
        }
      },
    }),
    { name: 'ryze-user-session' }
  )
);
