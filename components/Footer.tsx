import React from 'react';
import { Link } from 'react-router-dom';
import { getLatestArticles } from '../content/articles';
import { ArrowRight, Mail, Phone } from 'lucide-react';

// WhatsApp icon (not in lucide)
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="16" height="16">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// LinkedIn icon
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="16" height="16">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// Twitter/X icon
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="16" height="16">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Footer: React.FC = () => {
  const latestArticles = getLatestArticles(3);

  return (
    <footer className="border-t border-white/5 bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4" aria-label="No Missed Calls - Home">
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
                <span className="text-xl font-extrabold tracking-tight text-white">No Missed</span>
                <span className="text-xl font-extrabold tracking-tight text-shimmer">Calls</span>
              </div>
            </Link>
            <p className="text-[#A1A1AA] mb-6 max-w-sm">
              AI-powered receptionist for UK small businesses. Never miss a call, never lose a booking.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Follow us on LinkedIn" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-all">
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Follow us on Twitter" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-all">
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Contact us on WhatsApp" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-all">
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Latest Articles */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Latest Articles</h3>
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
                  View all articles <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Contact</h3>
            <ul className="space-y-3 text-[#A1A1AA]">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0066FF]" />
                sales@nomissedcalls.uk
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0066FF]" />
                +44 7476 947803
              </li>
              <li className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-[#10B981]" />
                WhatsApp
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Legal</h3>
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
            No Missed Calls © 2025 | AI10P Ltd (UK Company 16542108)
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
