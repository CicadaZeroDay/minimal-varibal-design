import { supabase, DbArticle } from './supabase';
import { Article } from '../content/articles/types';
// Import legacy articles as fallback
import { legacyArticles } from '../content/articles/legacy-articles';

// Transform database article to frontend Article type
function transformArticle(dbArticle: DbArticle): Article {
  return {
    slug: dbArticle.slug,
    title: dbArticle.title,
    description: dbArticle.description || '',
    content: dbArticle.content,
    author: dbArticle.author,
    publishedAt: formatDate(dbArticle.published_at),
    category: dbArticle.category || 'Uncategorized',
    tags: dbArticle.tags || [],
    featuredImage: dbArticle.featured_image || undefined,
    readTime: dbArticle.read_time || '5 min read',
  };
}

// Format date to "DD Month YYYY" format
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// Cache for articles
let articlesCache: Article[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Check if cache is valid
function isCacheValid(): boolean {
  return articlesCache !== null && Date.now() - cacheTimestamp < CACHE_DURATION;
}

// Clear cache (useful for forcing refresh)
export function clearArticlesCache(): void {
  articlesCache = null;
  cacheTimestamp = 0;
}

/**
 * Get all published articles
 * Falls back to legacy articles if Supabase fails
 */
export async function getArticles(): Promise<Article[]> {
  // Return cached data if valid
  if (isCacheValid() && articlesCache) {
    return articlesCache;
  }

  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('is_published', true)
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return legacyArticles;
    }

    if (!data || data.length === 0) {
      // No articles in Supabase yet, use legacy
      return legacyArticles;
    }

    const articles = data.map(transformArticle);

    // Update cache
    articlesCache = articles;
    cacheTimestamp = Date.now();

    return articles;
  } catch (err) {
    console.error('Failed to fetch articles:', err);
    return legacyArticles;
  }
}

/**
 * Get article by slug
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .single();

    if (error || !data) {
      // Try legacy articles as fallback
      const legacyArticle = legacyArticles.find(a => a.slug === slug);
      return legacyArticle || null;
    }

    return transformArticle(data);
  } catch (err) {
    console.error('Failed to fetch article:', err);
    // Fallback to legacy
    const legacyArticle = legacyArticles.find(a => a.slug === slug);
    return legacyArticle || null;
  }
}

/**
 * Get articles by category
 */
export async function getArticlesByCategory(category: string): Promise<Article[]> {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('category', category)
      .eq('is_published', true)
      .order('published_at', { ascending: false });

    if (error || !data || data.length === 0) {
      // Fallback to legacy
      return legacyArticles.filter(a => a.category === category);
    }

    return data.map(transformArticle);
  } catch (err) {
    console.error('Failed to fetch articles by category:', err);
    return legacyArticles.filter(a => a.category === category);
  }
}

/**
 * Get latest N articles
 */
export async function getLatestArticles(count: number = 3): Promise<Article[]> {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('is_published', true)
      .order('published_at', { ascending: false })
      .limit(count);

    if (error || !data || data.length === 0) {
      return legacyArticles.slice(0, count);
    }

    return data.map(transformArticle);
  } catch (err) {
    console.error('Failed to fetch latest articles:', err);
    return legacyArticles.slice(0, count);
  }
}

/**
 * Get all unique categories
 */
export async function getCategories(): Promise<string[]> {
  try {
    const articles = await getArticles();
    const categories = [...new Set(articles.map(a => a.category))];
    return categories.sort();
  } catch (err) {
    console.error('Failed to fetch categories:', err);
    const categories = [...new Set(legacyArticles.map(a => a.category))];
    return categories.sort();
  }
}

/**
 * Get related articles (same category, excluding current)
 */
export async function getRelatedArticles(slug: string, category: string, limit: number = 3): Promise<Article[]> {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('category', category)
      .eq('is_published', true)
      .neq('slug', slug)
      .order('published_at', { ascending: false })
      .limit(limit);

    if (error || !data || data.length === 0) {
      return legacyArticles
        .filter(a => a.category === category && a.slug !== slug)
        .slice(0, limit);
    }

    return data.map(transformArticle);
  } catch (err) {
    console.error('Failed to fetch related articles:', err);
    return legacyArticles
      .filter(a => a.category === category && a.slug !== slug)
      .slice(0, limit);
  }
}
