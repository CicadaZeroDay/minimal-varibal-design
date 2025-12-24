
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0A0A0B]/90 backdrop-blur-md border-b border-white/5' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo - Neural Network Style */}
          <Link to="/" className="flex items-center gap-3">
            <div className="logo-neural w-12 h-12 relative">
              <svg viewBox="0 0 48 48" className="w-full h-full">
                <defs>
                  <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0066FF" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                  <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
                <circle className="logo-core" cx="24" cy="24" r="10" fill="url(#coreGradient)" />

                {/* Phone Icon (simplified) */}
                <path
                  d="M21 19.5c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-3c-.83 0-1.5-.67-1.5-1.5v-9z"
                  fill="white"
                />
                <circle cx="24" cy="27.5" r="1" fill="url(#coreGradient)" />
              </svg>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-extrabold tracking-tight text-white">call</span>
              <span className="text-2xl font-extrabold tracking-tight text-shimmer">bot</span>
              <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold bg-gradient-to-r from-[#0066FF] to-[#8B5CF6] rounded text-white uppercase tracking-wider">AI</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {isHomePage ? (
              <>
                <a href="#how-it-works" className="text-[#A1A1AA] hover:text-white transition-colors">How it works</a>
                <a href="#pricing" className="text-[#A1A1AA] hover:text-white transition-colors">Pricing</a>
                <a href="#faq" className="text-[#A1A1AA] hover:text-white transition-colors">FAQ</a>
              </>
            ) : (
              <>
                <Link to="/#how-it-works" className="text-[#A1A1AA] hover:text-white transition-colors">How it works</Link>
                <Link to="/#pricing" className="text-[#A1A1AA] hover:text-white transition-colors">Pricing</Link>
                <Link to="/#faq" className="text-[#A1A1AA] hover:text-white transition-colors">FAQ</Link>
              </>
            )}
            <Link to="/blog" className="text-[#A1A1AA] hover:text-white transition-colors">Blog</Link>
            <Link
              to="/"
              className="glow-border px-6 py-2.5 bg-[#0066FF] text-white rounded-full font-semibold hover:bg-[#0052CC] transition-all"
            >
              Get Demo Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#A1A1AA] hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-6 border-t border-white/10 mt-4 pt-4">
            <div className="flex flex-col space-y-4">
              {isHomePage ? (
                <>
                  <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="text-[#A1A1AA] hover:text-white transition-colors py-2">How it works</a>
                  <a href="#pricing" onClick={() => setMobileOpen(false)} className="text-[#A1A1AA] hover:text-white transition-colors py-2">Pricing</a>
                  <a href="#faq" onClick={() => setMobileOpen(false)} className="text-[#A1A1AA] hover:text-white transition-colors py-2">FAQ</a>
                </>
              ) : (
                <>
                  <Link to="/#how-it-works" onClick={() => setMobileOpen(false)} className="text-[#A1A1AA] hover:text-white transition-colors py-2">How it works</Link>
                  <Link to="/#pricing" onClick={() => setMobileOpen(false)} className="text-[#A1A1AA] hover:text-white transition-colors py-2">Pricing</Link>
                  <Link to="/#faq" onClick={() => setMobileOpen(false)} className="text-[#A1A1AA] hover:text-white transition-colors py-2">FAQ</Link>
                </>
              )}
              <Link to="/blog" onClick={() => setMobileOpen(false)} className="text-[#A1A1AA] hover:text-white transition-colors py-2">Blog</Link>
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="glow-border px-6 py-3 bg-[#0066FF] text-white rounded-full font-semibold text-center"
              >
                Get Demo Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
