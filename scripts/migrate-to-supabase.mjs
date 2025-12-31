/**
 * Migration Script: Upload articles to Supabase
 * Run: node scripts/migrate-to-supabase.mjs
 */

const SUPABASE_URL = 'https://qzlmknwmmfbzjqwzurzz.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6bG1rbndtbWZiempxd3p1cnp6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NzE2ODAwMywiZXhwIjoyMDgyNzQ0MDAzfQ.UPPQeCzGEwpeCIzgcIBJwauW7NmzPCrQR2Ap1fKQFeU';

// Parse date string to ISO format
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

// Articles data (copied from legacy-articles.ts)
const articles = [
  {
    slug: 'beauty-salon-case-study-lost-clients-to-competitors',
    title: "How Sarah's Beauty Salon Stopped Losing £4,200/Month to Competitors",
    description: "A London salon owner was watching clients book with rivals while she was busy with appointments. Here's how she turned it around in 30 days.",
    author: 'NMC Team',
    publishedAt: '22 December 2024',
    category: 'Case Studies',
    tags: ['beauty salon', 'case study', 'missed calls', 'London', 'ROI'],
    featuredImage: '/blog/beauty-salon.webp',
    readTime: '12 min read'
  },
  {
    slug: 'dental-practice-case-study-emergency-calls',
    title: 'Oakwood Dental Was Missing Emergency Calls — Then Revenue Jumped 34%',
    description: 'A Manchester dental practice was losing high-value emergency patients to competitors. One change brought in £18,000 extra per month.',
    author: 'NMC Team',
    publishedAt: '20 December 2024',
    category: 'Case Studies',
    tags: ['dental', 'case study', 'emergency calls', 'Manchester', 'healthcare'],
    featuredImage: '/blog/dental.svg',
    readTime: '14 min read'
  },
  {
    slug: 'auto-repair-shop-case-study-missed-calls',
    title: "How Pete's Garage Captured £67,000 in Lost Business",
    description: 'A Bristol auto repair shop was losing customers every time mechanics were under the hood. See how they fixed it without hiring staff.',
    author: 'NMC Team',
    publishedAt: '18 December 2024',
    category: 'Case Studies',
    tags: ['auto repair', 'garage', 'case study', 'Bristol', 'trades'],
    featuredImage: '/blog/garage.svg',
    readTime: '11 min read'
  },
  {
    slug: 'restaurant-case-study-reservations-during-service',
    title: 'Bella Roma Lost 340 Reservations a Year. Then They Made One Change.',
    description: 'An Edinburgh restaurant was missing calls during busy service hours. Here is how they increased bookings by 47% without adding staff.',
    author: 'NMC Team',
    publishedAt: '28 December 2024',
    category: 'Case Studies',
    tags: ['restaurant', 'case study', 'reservations', 'Edinburgh', 'hospitality', 'no-shows'],
    featuredImage: '/blog/restaurant.svg',
    readTime: '15 min read'
  },
  {
    slug: 'plumber-case-study-emergency-calls-leeds',
    title: "This Leeds Plumber Was Losing £800/Day to Missed Emergency Calls. Here's How He Fixed It.",
    description: "Dave couldn't answer phones while fixing burst pipes. Every missed call meant another £200+ job going to a competitor. In 60 days, he doubled his income without working more hours.",
    author: 'NMC Team',
    publishedAt: '26 December 2024',
    category: 'Case Studies',
    tags: ['plumber', 'trades', 'case study', 'Leeds', 'emergency', 'ROI'],
    featuredImage: '/blog/plumber.svg',
    readTime: '13 min read'
  },
  {
    slug: 'estate-agent-case-study-property-viewings',
    title: 'How a Birmingham Estate Agent Doubled Property Viewings in 90 Days',
    description: 'Prospect Properties was losing hot leads to voicemail while agents showed properties. One decision transformed their business.',
    author: 'NMC Team',
    publishedAt: '24 December 2024',
    category: 'Case Studies',
    tags: ['estate agent', 'property', 'case study', 'Birmingham', 'real estate', 'viewings'],
    featuredImage: '/blog/estate-agent.svg',
    readTime: '14 min read'
  },
  {
    slug: 'veterinary-practice-case-study-emergency-pets',
    title: 'Yorkshire Vets Were Missing After-Hours Pet Emergencies. Sophie Changed Everything.',
    description: 'When a border collie had a seizure at midnight, the owners got voicemail. That wake-up call led to a 62% revenue increase.',
    author: 'NMC Team',
    publishedAt: '29 December 2024',
    category: 'Case Studies',
    tags: ['veterinary', 'vet practice', 'case study', 'Yorkshire', 'emergency', 'pet care'],
    featuredImage: '/blog/veterinary.svg',
    readTime: '16 min read'
  },
  {
    slug: 'solicitor-case-study-missed-client-calls',
    title: "This Birmingham Solicitor Lost £336K in New Clients. Then Sophie Started Answering His Phone.",
    description: "Marcus Webb spent 22 hours a week in court — unreachable. Every missed call was a potential client going to competitors. Here's how he doubled his new client revenue in 90 days.",
    author: 'NMC Team',
    publishedAt: '30 December 2024',
    category: 'Case Studies',
    tags: ['solicitor', 'law firm', 'case study', 'Birmingham', 'legal', 'police station'],
    featuredImage: '/blog/solicitor.svg',
    readTime: '14 min read'
  },
  {
    slug: 'missed-calls-cost-uk-business',
    title: 'The True Cost of Missed Calls: UK Businesses Lose £30 Billion Annually',
    description: 'New research reveals the staggering financial impact of unanswered phone calls on British businesses. Here are the numbers — and what you can do about it.',
    author: 'NMC Team',
    publishedAt: '15 January 2025',
    category: 'Research',
    tags: ['statistics', 'UK business', 'missed calls', 'research', 'cost analysis'],
    featuredImage: '/blog/research.svg',
    readTime: '10 min read'
  },
  {
    slug: 'ai-receptionist-vs-human-receptionist',
    title: 'AI Receptionist vs Human Receptionist: A Complete Comparison for 2025',
    description: 'Should you hire a human receptionist or use an AI? We break down costs, capabilities, availability, and real-world performance.',
    author: 'NMC Team',
    publishedAt: '10 January 2025',
    category: 'Guides',
    tags: ['AI', 'comparison', 'receptionist', 'cost analysis', 'technology'],
    featuredImage: '/blog/comparison.svg',
    readTime: '12 min read'
  },
  {
    slug: 'best-industries-for-ai-receptionists',
    title: 'The 10 Best Industries for AI Receptionists in 2025',
    description: 'Which businesses benefit most from AI phone answering? We analyze ROI data from hundreds of UK companies to find the winners.',
    author: 'NMC Team',
    publishedAt: '5 January 2025',
    category: 'Guides',
    tags: ['industries', 'AI', 'ROI', 'business types', 'recommendations'],
    featuredImage: '/blog/industries.svg',
    readTime: '9 min read'
  }
];

async function migrateArticles() {
  console.log('Starting migration...');
  console.log(`Total articles to migrate: ${articles.length}`);
  console.log('');

  let successCount = 0;
  let errorCount = 0;

  for (const article of articles) {
    const dbArticle = {
      slug: article.slug,
      title: article.title,
      description: article.description,
      content: '', // Will be fetched from legacy file separately
      author: article.author,
      published_at: parseDate(article.publishedAt),
      category: article.category,
      tags: article.tags,
      featured_image: article.featuredImage || null,
      read_time: article.readTime,
      is_published: true
    };

    try {
      // Check if article already exists
      const checkResponse = await fetch(
        `${SUPABASE_URL}/rest/v1/articles?slug=eq.${encodeURIComponent(article.slug)}`,
        {
          headers: {
            'apikey': SERVICE_ROLE_KEY,
            'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
          }
        }
      );

      const existing = await checkResponse.json();

      if (existing && existing.length > 0) {
        console.log(`⏭️  Skipping (already exists): ${article.slug}`);
        continue;
      }

      // Insert new article
      const response = await fetch(`${SUPABASE_URL}/rest/v1/articles`, {
        method: 'POST',
        headers: {
          'apikey': SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify(dbArticle)
      });

      if (response.ok) {
        console.log(`✅ Migrated: ${article.slug}`);
        successCount++;
      } else {
        const error = await response.text();
        console.log(`❌ Failed: ${article.slug} - ${error}`);
        errorCount++;
      }
    } catch (err) {
      console.log(`❌ Error: ${article.slug} - ${err.message}`);
      errorCount++;
    }
  }

  console.log('');
  console.log('Migration complete!');
  console.log(`✅ Success: ${successCount}`);
  console.log(`❌ Errors: ${errorCount}`);
}

migrateArticles();
