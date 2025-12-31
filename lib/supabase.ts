import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface DbArticle {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  content: string;
  author: string;
  published_at: string;
  category: string | null;
  tags: string[] | null;
  featured_image: string | null;
  read_time: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}
