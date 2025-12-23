
import React from 'react';
import { VALUE_PROPS } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Everything you need to <br/> dominate the feed</h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">Stop guessing what works. Start using data-backed creative tools.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {VALUE_PROPS.map((prop) => (
          <div 
            key={prop.id} 
            className="bg-white rounded-[24px] p-10 flex flex-col items-start transition-all transform hover:-translate-y-2 hover:shadow-2xl group border border-transparent hover:border-[#8B7EC8]/20"
          >
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-inner transition-transform group-hover:rotate-12"
              style={{ backgroundColor: `${prop.color}20` }}
            >
              <i className={`fa-solid ${prop.icon} text-3xl`} style={{ color: prop.color }}></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{prop.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {prop.description}
            </p>
            <div className="mt-auto pt-8">
              <button className="text-[#6366F1] font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Invite team <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
