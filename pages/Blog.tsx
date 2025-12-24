import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/blog/BlogCard';
import { articles } from '../content/articles';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    document.title = 'Blog | No Missed Calls - AI Receptionist Insights';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert insights on AI receptionists, missed calls recovery, and growing your UK business.');
    }
  }, []);

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(articles.map(a => a.category)))];

  // Filter articles by category
  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

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
        <section className="pt-32 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                No Missed Calls <span className="gradient-text">Blog</span>
              </h1>
              <p className="text-xl text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
                Expert insights on AI receptionists, recovering missed calls, and growing your UK business.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-[#0066FF] text-white shadow-lg shadow-[#0066FF]/30'
                      : 'bg-white/5 text-[#A1A1AA] hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <BlogCard key={article.slug} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <i className="fa-solid fa-file-lines text-6xl text-[#A1A1AA]/30 mb-6"></i>
                <h2 className="text-2xl font-bold mb-2">No articles found</h2>
                <p className="text-[#A1A1AA]">Try selecting a different category.</p>
              </div>
            )}

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
