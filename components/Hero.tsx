
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Organic Shapes Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#8B7EC8] text-sm font-bold mb-8 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-[#8B7EC8] animate-ping"></span>
          Trusted by 10,000+ Creators
        </div>

        <h1 className="text-5xl md:text-7xl font-[800] leading-[1.1] mb-8 max-w-4xl mx-auto tracking-tight">
          Thumbnails That Drive <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B7EC8] via-[#A78BFA] to-[#C084FC]">
            Unstoppable Growth
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          The ultimate previewing, inspiration, and collaboration tool built to create phenomenal YouTube thumbnails that make audiences click.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button className="w-full sm:w-auto px-10 py-5 bg-[#8B7EC8] text-white rounded-full font-bold text-lg hover:bg-[#7a6bb5] transition-all transform hover:scale-105 shadow-[0_20px_50px_-10px_rgba(139,126,200,0.4)]">
            Try For Free
          </button>
          <button className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
            Watch Demo
          </button>
        </div>

        {/* Floating UI Mockup */}
        <div className="relative mt-20 group">
          <div className="absolute inset-0 bg-gradient-to-t from-[#141516] via-transparent to-transparent z-20"></div>
          <div className="relative glass-card rounded-[32px] p-2 max-w-5xl mx-auto border border-white/20 shadow-2xl overflow-hidden">
            <img 
              src="https://picsum.photos/id/2/1200/800" 
              alt="Platform Dashboard" 
              className="rounded-[24px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            
            {/* Floating Components */}
            <div className="absolute -top-10 -right-10 md:right-10 glass-card p-6 rounded-2xl border border-white/20 floating-element hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <i className="fa-solid fa-check text-green-400"></i>
                </div>
                <div>
                  <div className="text-sm font-bold">Optimized Score</div>
                  <div className="text-xs text-gray-400">98/100 Very High</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 md:left-10 glass-card p-6 rounded-2xl border border-white/20 floating-element hidden md:block" style={{animationDelay: '1s'}}>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <img key={i} src={`https://picsum.photos/id/${10+i}/40/40`} className="w-10 h-10 rounded-full border-2 border-[#141516]" />
                  ))}
                </div>
                <div className="text-sm font-bold">3 active editors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
