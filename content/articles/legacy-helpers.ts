import { Article } from './types';
import { legacyArticles } from './legacy-articles';

export function getArticleBySlug(slug: string): Article | undefined {
  return legacyArticles.find(article => article.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return legacyArticles.filter(article => article.category === category);
}

export function getLatestArticles(count: number = 3): Article[] {
  return legacyArticles.slice(0, count);
}

