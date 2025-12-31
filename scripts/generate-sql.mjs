/**
 * Generate SQL INSERT statements from legacy articles
 * Run: node scripts/generate-sql.mjs > articles.sql
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read the legacy articles file
const filePath = path.join(__dirname, '../content/articles/legacy-articles.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

// Extract articles array using regex
const articlesMatch = fileContent.match(/export const legacyArticles: Article\[\] = \[([\s\S]*)\];/);
if (!articlesMatch) {
  console.error('Could not find articles array');
  process.exit(1);
}

// Parse each article object
const articlesStr = articlesMatch[1];

// Helper to escape SQL strings
function escapeSql(str) {
  if (!str) return '';
  return str.replace(/'/g, "''");
}

// Parse date to ISO format
function parseDate(dateStr) {
  const months = {
    'January': '01', 'February': '02', 'March': '03', 'April': '04',
    'May': '05', 'June': '06', 'July': '07', 'August': '08',
    'September': '09', 'October': '10', 'November': '11', 'December': '12'
  };
  const parts = dateStr.split(' ');
  if (parts.length === 3) {
    const day = parts[0].padStart(2, '0');
    const month = months[parts[1]] || '01';
    const year = parts[2];
    return `${year}-${month}-${day}T00:00:00Z`;
  }
  return new Date().toISOString();
}

// Extract article objects manually
const articles = [];
let depth = 0;
let currentArticle = '';
let inArticle = false;

for (let i = 0; i < articlesStr.length; i++) {
  const char = articlesStr[i];

  if (char === '{') {
    if (depth === 0) {
      inArticle = true;
      currentArticle = '{';
    } else {
      currentArticle += char;
    }
    depth++;
  } else if (char === '}') {
    depth--;
    currentArticle += char;
    if (depth === 0 && inArticle) {
      articles.push(currentArticle);
      currentArticle = '';
      inArticle = false;
    }
  } else if (inArticle) {
    currentArticle += char;
  }
}

// Parse article object string to extract fields
function parseArticleObject(objStr) {
  const article = {};

  // Extract slug
  const slugMatch = objStr.match(/slug:\s*['"]([^'"]+)['"]/);
  if (slugMatch) article.slug = slugMatch[1];

  // Extract title (handle escaped quotes)
  const titleMatch = objStr.match(/title:\s*["'](.+?)["'],\s*\n/s);
  if (titleMatch) article.title = titleMatch[1].replace(/\\"/g, '"').replace(/\\'/g, "'");

  // Extract description
  const descMatch = objStr.match(/description:\s*["'](.+?)["'],\s*\n/s);
  if (descMatch) article.description = descMatch[1].replace(/\\"/g, '"').replace(/\\'/g, "'");

  // Extract content (template literal)
  const contentMatch = objStr.match(/content:\s*`([\s\S]*?)`,\s*\n\s*author:/);
  if (contentMatch) article.content = contentMatch[1].trim();

  // Extract author
  const authorMatch = objStr.match(/author:\s*['"]([^'"]+)['"]/);
  if (authorMatch) article.author = authorMatch[1];

  // Extract publishedAt
  const dateMatch = objStr.match(/publishedAt:\s*['"]([^'"]+)['"]/);
  if (dateMatch) article.publishedAt = dateMatch[1];

  // Extract category
  const catMatch = objStr.match(/category:\s*['"]([^'"]+)['"]/);
  if (catMatch) article.category = catMatch[1];

  // Extract tags
  const tagsMatch = objStr.match(/tags:\s*\[([\s\S]*?)\]/);
  if (tagsMatch) {
    const tagsStr = tagsMatch[1];
    const tags = tagsStr.match(/['"]([^'"]+)['"]/g);
    if (tags) {
      article.tags = tags.map(t => t.replace(/['"]/g, ''));
    }
  }

  // Extract featuredImage
  const imgMatch = objStr.match(/featuredImage:\s*['"]([^'"]+)['"]/);
  if (imgMatch) article.featuredImage = imgMatch[1];

  // Extract readTime
  const readMatch = objStr.match(/readTime:\s*['"]([^'"]+)['"]/);
  if (readMatch) article.readTime = readMatch[1];

  return article;
}

// Generate SQL
console.log('-- Migration SQL: Insert articles into Supabase');
console.log('-- Generated at:', new Date().toISOString());
console.log('-- Total articles:', articles.length);
console.log('');

for (const articleStr of articles) {
  const article = parseArticleObject(articleStr);

  if (!article.slug) continue;

  const publishedAt = parseDate(article.publishedAt || '1 January 2025');
  const tagsArray = article.tags ? `ARRAY[${article.tags.map(t => `'${escapeSql(t)}'`).join(', ')}]` : 'NULL';

  console.log(`-- Article: ${article.slug}`);
  console.log(`INSERT INTO articles (slug, title, description, content, author, published_at, category, tags, featured_image, read_time, is_published)`);
  console.log(`VALUES (`);
  console.log(`  '${escapeSql(article.slug)}',`);
  console.log(`  '${escapeSql(article.title)}',`);
  console.log(`  '${escapeSql(article.description)}',`);
  console.log(`  '${escapeSql(article.content)}',`);
  console.log(`  '${escapeSql(article.author)}',`);
  console.log(`  '${publishedAt}'::timestamptz,`);
  console.log(`  '${escapeSql(article.category)}',`);
  console.log(`  ${tagsArray},`);
  console.log(`  ${article.featuredImage ? `'${escapeSql(article.featuredImage)}'` : 'NULL'},`);
  console.log(`  '${escapeSql(article.readTime)}',`);
  console.log(`  true`);
  console.log(`)`);
  console.log(`ON CONFLICT (slug) DO NOTHING;`);
  console.log('');
}

console.log('-- Verify count');
console.log('SELECT COUNT(*) as total_articles FROM articles;');
