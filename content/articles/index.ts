import { Article } from './types';
import { legacyArticles } from './legacy-articles';

// Экспортируем все статьи
export const articles: Article[] = legacyArticles;

// Экспортируем интерфейс
export type { Article } from './types';

// Экспортируем функции
export { getArticleBySlug, getArticlesByCategory, getLatestArticles } from './legacy-helpers';
