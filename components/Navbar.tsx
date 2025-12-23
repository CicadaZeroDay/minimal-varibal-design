
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 transition-all duration-300 backdrop-blur-md bg-[#141516]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#8B7EC8] to-[#6366F1] rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
              <i className="fa-solid fa-bolt text-white text-lg"></i>
            </div>
            <span className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              ClickPilot
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">How it works</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
            <button className="bg-white text-black px-6 py-2.5 rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-white/10">
              Get Started
            </button>
          </div>

          <button className="md:hidden text-gray-400">
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
