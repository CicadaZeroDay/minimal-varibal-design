
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Heart Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <i className="fa-solid fa-heart text-[600px] text-[#8B7EC8]"></i>
      </div>

      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">People love ClickPilot</h2>
        <div className="flex justify-center gap-1 text-yellow-400 mb-10">
          {[1, 2, 3, 4, 5].map(i => <i key={i} className="fa-solid fa-star"></i>)}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="glass-card p-8 rounded-[24px] border border-white/10 hover:border-white/20 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-purple-500/30" />
              <div>
                <h4 className="font-bold text-lg">{t.name}</h4>
                <p className="text-sm text-[#8B7EC8]">{t.handle}</p>
              </div>
            </div>
            <p className="text-gray-300 italic mb-6 leading-relaxed">"{t.text}"</p>
            <div className="flex gap-1 text-yellow-400 text-xs">
              {Array.from({length: t.rating}).map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 glass-card rounded-[32px] p-12 border border-white/10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-4">Join the Elite 1%</h3>
          <p className="text-gray-400 mb-8">ClickPilot powers the biggest channels on the platform. Join creators like MrBeast and Dude Perfect in optimizing every pixel.</p>
          <div className="flex flex-wrap gap-10">
            <div className="text-center">
              <div className="text-3xl font-bold">336M+</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Subscribers reached</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">12.5%</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Avg. CTR Boost</div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-80">
          <img src="https://picsum.photos/id/1/400/400" className="rounded-2xl shadow-2xl shadow-purple-500/20 transform rotate-3" alt="Success Story" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
