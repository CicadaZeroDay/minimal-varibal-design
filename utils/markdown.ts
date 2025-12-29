import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Article } from '../content/articles/types';

// Функция для конвертации Markdown в HTML
async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(html)
    .process(markdown);
  return String(result);
}

// Функция для парсинга Markdown файла с frontmatter
export async function parseMarkdown(markdownContent: string, slug: string): Promise<Article> {
  const { data, content } = matter(markdownContent);
  
  // Конвертируем Markdown в HTML
  const htmlContent = await markdownToHtml(content);
  
  // Вычисляем время чтения (примерно 200 слов в минуту)
  const wordCount = content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);

  return {
    slug: slug,
    title: data.title || '',
    description: data.description || '',
    content: htmlContent,
    author: data.author || 'NMC Team',
    publishedAt: data.publishedAt || new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
    category: data.category || 'Uncategorized',
    tags: data.tags || [],
    featuredImage: data.featuredImage,
    readTime: `${readTime} min read`
  };
}

// Функция для загрузки всех статей из Markdown файлов
export async function loadArticles(): Promise<Article[]> {
  // Динамический импорт всех .md файлов из папки articles
  const articleModules = import.meta.glob('../content/articles/*.md', { 
    as: 'raw',
    eager: true 
  });

  const articles: Article[] = [];

  for (const [path, content] of Object.entries(articleModules)) {
    // Извлекаем slug из имени файла
    const slug = path
      .replace('../content/articles/', '')
      .replace('.md', '');
    
    if (typeof content === 'string') {
      const article = await parseMarkdown(content, slug);
      articles.push(article);
    }
  }

  // Сортируем по дате публикации (новые сначала)
  return articles.sort((a, b) => {
    const dateA = new Date(a.publishedAt).getTime();
    const dateB = new Date(b.publishedAt).getTime();
    return dateB - dateA;
  });
}

// Синхронная версия для использования в компонентах (с кешированием)
let cachedArticles: Article[] | null = null;

export async function getArticles(): Promise<Article[]> {
  if (cachedArticles) {
    return cachedArticles;
  }
  cachedArticles = await loadArticles();
  return cachedArticles;
}

export function getArticleBySlug(slug: string): Promise<Article | undefined> {
  return getArticles().then(articles => 
    articles.find(article => article.slug === slug)
  );
}

export function getArticlesByCategory(category: string): Promise<Article[]> {
  return getArticles().then(articles => 
    articles.filter(article => article.category === category)
  );
}

