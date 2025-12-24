import React from 'react';
import { Link } from 'react-router-dom';
import { getLatestArticles } from '../content/articles';

const Footer: React.FC = () => {
  const latestArticles = getLatestArticles(3);

  return (
    <footer className="border-t border-white/5 bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="logo-neural w-12 h-12 relative">
                <svg viewBox="0 0 48 48" className="w-full h-full">
                  <defs>
                    <linearGradient id="footerCircuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0066FF" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                    <linearGradient id="footerCoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0066FF" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>

                  {/* Circuit Lines */}
                  <path className="circuit-line" d="M24 14 L24 6 L32 6" />
                  <path className="circuit-line" d="M34 24 L42 24 L42 16" />
                  <path className="circuit-line" d="M24 34 L24 42 L16 42" />
                  <path className="circuit-line" d="M14 24 L6 24 L6 32" />

                  {/* Neural Nodes */}
                  <circle className="neural-node" cx="32" cy="6" r="3" />
                  <circle className="neural-node" cx="42" cy="16" r="3" />
                  <circle className="neural-node" cx="16" cy="42" r="3" />
                  <circle className="neural-node" cx="6" cy="32" r="3" />

                  {/* Core - Phone Icon Background */}
                  <circle className="logo-core" cx="24" cy="24" r="10" fill="url(#footerCoreGradient)" />

                  {/* Phone Icon (simplified) */}
                  <path
                    d="M21 19.5c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-3c-.83 0-1.5-.67-1.5-1.5v-9z"
                    fill="white"
                  />
                  <circle cx="24" cy="27.5" r="1" fill="url(#footerCoreGradient)" />
                </svg>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-extrabold tracking-tight text-white">call</span>
                <span className="text-2xl font-extrabold tracking-tight text-shimmer">bot</span>
                <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold bg-gradient-to-r from-[#0066FF] to-[#8B5CF6] rounded text-white uppercase tracking-wider">AI</span>
              </div>
            </Link>
            <p className="text-[#A1A1AA] mb-6 max-w-sm">
              AI-powered receptionist for UK small businesses. Never miss a call, never lose a booking.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-all">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-all">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-all">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Latest Articles */}
          <div>
            <h4 className="font-semibold mb-4">Latest Articles</h4>
            <ul className="space-y-3">
              {latestArticles.map(article => (
                <li key={article.slug}>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="text-[#A1A1AA] hover:text-white transition-colors text-sm line-clamp-2"
                  >
                    {article.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/blog"
                  className="text-[#0066FF] hover:text-[#0052CC] transition-colors text-sm inline-flex items-center gap-1"
                >
                  View all articles <i className="fa-solid fa-arrow-right text-xs"></i>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-[#A1A1AA]">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-envelope text-[#0066FF]"></i>
                hello@callbot.uk
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-[#0066FF]"></i>
                +44 7476 947803
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-brands fa-whatsapp text-[#10B981]"></i>
                WhatsApp
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-[#A1A1AA]">
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[#A1A1AA] text-sm">
            Callbot © 2025 | AI10P Ltd (UK Company 16542108)
          </div>
          <div className="flex items-center gap-2 text-sm text-[#A1A1AA]">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
