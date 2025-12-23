
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#141516] pt-32 pb-12 overflow-hidden border-t border-white/5">
      {/* Wave SVG Decor */}
      <div className="absolute top-0 left-0 w-full rotate-180 overflow-hidden leading-none opacity-5">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px] fill-purple-500">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-[#8B7EC8] to-[#6366F1] rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-bolt text-white text-sm"></i>
              </div>
              <span className="text-2xl font-extrabold tracking-tight">ClickPilot</span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
              Created by Brandon Shepherd, a YouTuber building tools for content creators. We're on a mission to make content creation more scientific and less guesswork.
            </p>
            <div className="flex gap-4">
              {['youtube', 'x-twitter', 'instagram', 'discord'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <i className={`fa-brands fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Viral Library</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-sm">© 2025 ClickPilot App. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-xs text-gray-600 uppercase font-bold tracking-widest">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
