import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type LoyaltyTier = 'CLIENT' | 'ARCHITECT' | 'ELITE';

export interface UserProfile {
  id: string;
  email: string;
  tier: LoyaltyTier;
  points: number;
}
