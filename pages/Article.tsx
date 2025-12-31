import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/blog/Breadcrumb';
import { getArticleBySlug, getRelatedArticles } from '../lib/articles';
import { Article as ArticleType } from '../content/articles/types';
import { ArrowRight, Loader2 } from 'lucide-react';

const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<ArticleType | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<ArticleType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  // Load article from Supabase
  useEffect(() => {
    const loadArticle = async () => {
      if (!slug) {
        setNotFound(true);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const articleData = await getArticleBySlug(slug);
        if (!articleData) {
          setNotFound(true);
        } else {
          setArticle(articleData);
          // Load related articles
          const related = await getRelatedArticles(slug, articleData.category, 3);
          setRelatedArticles(related);
        }
      } catch (error) {
        console.error('Failed to load article:', error);
        setNotFound(true);
      } finally {
        setIsLoading(false);
      }
    };
    loadArticle();
  }, [slug]);

  useEffect(() => {
    if (article) {
      // Update title
      document.title = `${article.title} | No Missed Calls Blog`;

      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', article.description);
      }

      // Update Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      const ogImage = document.querySelector('meta[property="og:image"]');
      const ogUrl = document.querySelector('meta[property="og:url"]');

      if (ogTitle) ogTitle.setAttribute('content', `${article.title} | No Missed Calls`);
      if (ogDescription) ogDescription.setAttribute('content', article.description);
      if (ogImage && article.featuredImage) {
        ogImage.setAttribute('content', `https://nomissedcalls.uk${article.featuredImage}`);
      }
      if (ogUrl) ogUrl.setAttribute('content', `https://nomissedcalls.uk/blog/${article.slug}`);

      // Update Twitter tags
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      const twitterDescription = document.querySelector('meta[name="twitter:description"]');
      const twitterImage = document.querySelector('meta[name="twitter:image"]');

      if (twitterTitle) twitterTitle.setAttribute('content', `${article.title} | No Missed Calls`);
      if (twitterDescription) twitterDescription.setAttribute('content', article.description);
      if (twitterImage && article.featuredImage) {
        twitterImage.setAttribute('content', `https://nomissedcalls.uk${article.featuredImage}`);
      }

      // Update canonical URL
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', `https://nomissedcalls.uk/blog/${article.slug}`);
      }
    }
  }, [article]);

  if (notFound) {
    return <Navigate to="/blog" replace />;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-[#0066FF] animate-spin" />
      </div>
    );
  }

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  // JSON-LD structured data for article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.featuredImage ? `https://nomissedcalls.uk${article.featuredImage}` : "https://nomissedcalls.uk/og-image.webp",
    "author": {
      "@type": "Organization",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "No Missed Calls",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nomissedcalls.uk/logo.png"
      }
    },
    "datePublished": article.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://nomissedcalls.uk/blog/${article.slug}`
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] flex flex-col overflow-x-hidden">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0066FF] opacity-5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-[#8B5CF6] opacity-5 blur-[150px] rounded-full"></div>
      </div>

      <Navbar />

      <main className="relative z-10 flex-1">
        <article className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-sm font-medium">
                  {article.category}
                </span>
                <span className="text-sm text-[#A1A1AA]">{article.readTime}</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                {article.title}
              </h1>

              <p className="text-xl text-[#A1A1AA] mb-8">
                {article.description}
              </p>

              <div className="flex items-center gap-4 pb-8 border-b border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0066FF] to-[#8B5CF6] flex items-center justify-center">
                  <span className="text-lg font-bold">{article.author.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-medium">{article.author}</div>
                  <div className="text-sm text-[#A1A1AA]">{article.publishedAt}</div>
                </div>
              </div>
            </header>

            {/* Breadcrumbs - under the title */}
            <div className="w-full mb-8">
              <Breadcrumb
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Blog', href: '/blog' },
                  { label: article.category, href: `/blog?category=${encodeURIComponent(article.category)}` },
                  { label: article.title }
                ]}
              />
            </div>

            {/* Article Content */}
            <div className="article-content mb-16 text-[#E4E4E7] leading-relaxed">
              <div
                className="space-y-6"
                dangerouslySetInnerHTML={{ __html: article.content }}
                style={{
                  fontSize: '18px',
                  lineHeight: '1.75'
                }}
              />
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-white/10">
                {article.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/5 text-[#A1A1AA] text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="glow-card-animated rounded-2xl p-8 mb-16">
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Stop Missing Calls?
                </h3>
                <p className="text-[#A1A1AA] mb-6">
                  Get a free demo call from Sophie, our AI receptionist. See how she handles bookings in 30 seconds.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#0066FF] text-white rounded-xl font-bold text-lg hover:bg-[#0052CC] transition-all glow-border"
                >
                  Get Demo Call
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedArticles.map(relatedArticle => (
                    <Link
                      key={relatedArticle.slug}
                      to={`/blog/${relatedArticle.slug}`}
                      className="group glass-card rounded-xl p-6 hover:border-[#0066FF]/30 transition-all"
                    >
                      <h3 className="font-bold mb-2 group-hover:text-[#0066FF] transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-sm text-[#A1A1AA] line-clamp-2">
                        {relatedArticle.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>
      </main>

      <Footer />

      {/* JSON-LD for Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "description": article.description,
            "author": {
              "@type": "Person",
              "name": article.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "No Missed Calls",
              "logo": {
                "@type": "ImageObject",
                "url": "https://nomissedcalls.uk/logo.png"
              }
            },
            "datePublished": article.publishedAt,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://nomissedcalls.uk/blog/${article.slug}`
            }
          })
        }}
      />
    </div>
  );
};

export default Article;
