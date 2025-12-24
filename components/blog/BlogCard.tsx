import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../content/articles';

interface BlogCardProps {
  article: Article;
}

const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  return (
    <Link
      to={`/blog/${article.slug}`}
      className="group block bg-[#111113] rounded-2xl overflow-hidden border border-white/5 hover:border-[#0066FF]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0066FF]/10"
    >
      {/* Featured Image */}
      <div className="aspect-video bg-gradient-to-br from-[#0066FF]/20 via-[#8B5CF6]/20 to-[#0066FF]/20 flex items-center justify-center relative overflow-hidden">
        {article.featuredImage ? (
          <img 
            src={article.featuredImage} 
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-8">
            <i className="fa-solid fa-newspaper text-5xl text-[#0066FF]/40 group-hover:text-[#0066FF] transition-colors mb-3"></i>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0066FF] to-[#8B5CF6] rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category and Read Time */}
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-xs font-semibold border border-[#0066FF]/20">
            {article.category}
          </span>
          <span className="text-xs text-[#A1A1AA] flex items-center gap-1">
            <i className="fa-solid fa-clock text-[10px]"></i>
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold mb-3 group-hover:text-[#0066FF] transition-colors line-clamp-2 leading-tight">
          {article.title}
        </h2>

        {/* Description */}
        <p className="text-[#A1A1AA] text-sm mb-5 line-clamp-3 leading-relaxed">
          {article.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0066FF] to-[#8B5CF6] flex items-center justify-center">
              <span className="text-xs font-bold text-white">{article.author.charAt(0)}</span>
            </div>
            <div>
              <div className="text-xs font-medium text-white">{article.author}</div>
              <div className="text-xs text-[#A1A1AA]">{article.publishedAt}</div>
            </div>
          </div>
          <span className="text-[#0066FF] text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Read <i className="fa-solid fa-arrow-right text-xs"></i>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

