/**
 * Migration Script: Generate SQL to insert articles into Supabase
 *
 * Run: node scripts/generate-migration-sql.js > migration.sql
 * Then copy the output to Supabase SQL Editor and execute
 */

import { legacyArticles } from '../content/articles/legacy-articles.ts';

// Escape single quotes for SQL
function escapeSql(str) {
  if (!str) return '';
  return str.replace(/'/g, "''");
}

// Convert date string to ISO format
function parseDate(dateStr) {
  // Parse "DD Month YYYY" format
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

// Format tags array for PostgreSQL
function formatTags(tags) {
  if (!tags || tags.length === 0) return 'NULL';
  const escapedTags = tags.map(t => `"${escapeSql(t)}"`);
  return `ARRAY[${escapedTags.map(t => `'${t.replace(/"/g, '')}'`).join(', ')}]::text[]`;
}

// Generate INSERT statements
function generateSql() {
  console.log('-- Migration SQL: Insert articles into Supabase');
  console.log('-- Generated at:', new Date().toISOString());
  console.log('-- Total articles:', legacyArticles.length);
  console.log('');
  console.log('-- Temporarily disable RLS for bulk insert');
  console.log('ALTER TABLE articles DISABLE ROW LEVEL SECURITY;');
  console.log('');

  for (const article of legacyArticles) {
    const publishedAt = parseDate(article.publishedAt);

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
    console.log(`  ${formatTags(article.tags)},`);
    console.log(`  ${article.featuredImage ? `'${escapeSql(article.featuredImage)}'` : 'NULL'},`);
    console.log(`  '${escapeSql(article.readTime)}',`);
    console.log(`  true`);
    console.log(`);`);
    console.log('');
  }

  console.log('-- Re-enable RLS');
  console.log('ALTER TABLE articles ENABLE ROW LEVEL SECURITY;');
  console.log('');
  console.log('-- Verify count');
  console.log('SELECT COUNT(*) as total_articles FROM articles;');
}

generateSql();
