import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { articles, getArticleBySlug } from '../content/articles';

const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : null;

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Callbot.uk Blog`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', article.description);
      }
    }
  }, [article]);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  // Get related articles (same category, excluding current)
  const relatedArticles = articles
    .filter(a => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0A0A0B] flex flex-col overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0066FF] opacity-5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-[#8B5CF6] opacity-5 blur-[150px] rounded-full"></div>
      </div>

      <Navbar />

      <main className="relative z-10 flex-1">
        <article className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-[#A1A1AA] mb-8">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <i className="fa-solid fa-chevron-right text-xs"></i>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <i className="fa-solid fa-chevron-right text-xs"></i>
              <span className="text-white truncate max-w-[200px]">{article.title}</span>
            </nav>

            {/* Article Header */}
            <header className="mb-12">
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
                  <i className="fa-solid fa-arrow-right"></i>
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
              "name": "Callbot.uk",
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
