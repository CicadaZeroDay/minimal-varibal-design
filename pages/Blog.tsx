import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { articles } from '../content/articles';

const Blog: React.FC = () => {
  useEffect(() => {
    document.title = 'Blog | Callbot.uk - AI Receptionist Insights';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert insights on AI receptionists, missed calls recovery, and growing your UK business. Tips from Callbot.uk.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0B] flex flex-col overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0066FF] opacity-5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-[#8B5CF6] opacity-5 blur-[150px] rounded-full"></div>
      </div>

      <Navbar />

      <main className="relative z-10 flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                Callbot.uk <span className="gradient-text">Blog</span>
              </h1>
              <p className="text-xl text-[#A1A1AA] max-w-2xl mx-auto">
                Expert insights on AI receptionists, recovering missed calls, and growing your UK business.
              </p>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/blog/${article.slug}`}
                  className="group glass-card rounded-2xl overflow-hidden hover:border-[#0066FF]/30 transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Featured Image */}
                  <div className="aspect-video bg-gradient-to-br from-[#0066FF]/20 to-[#8B5CF6]/20 flex items-center justify-center">
                    <i className="fa-solid fa-newspaper text-4xl text-[#0066FF]/50 group-hover:text-[#0066FF] transition-colors"></i>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-xs font-medium">
                        {article.category}
                      </span>
                      <span className="text-xs text-[#A1A1AA]">{article.readTime}</span>
                    </div>

                    <h2 className="text-xl font-bold mb-3 group-hover:text-[#0066FF] transition-colors line-clamp-2">
                      {article.title}
                    </h2>

                    <p className="text-[#A1A1AA] text-sm mb-4 line-clamp-3">
                      {article.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#A1A1AA]">{article.publishedAt}</span>
                      <span className="text-[#0066FF] text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Read more <i className="fa-solid fa-arrow-right text-xs"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {articles.length === 0 && (
              <div className="text-center py-20">
                <i className="fa-solid fa-file-lines text-6xl text-[#A1A1AA]/30 mb-6"></i>
                <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
                <p className="text-[#A1A1AA]">We're working on exciting content for you. Check back soon!</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
