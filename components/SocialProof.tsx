
import React from 'react';

const metrics = [
  { value: '5,000+', label: 'Calls Handled', icon: 'fa-phone' },
  { value: '94%', label: 'Booking Rate', icon: 'fa-calendar-check' },
  { value: '<3s', label: 'Response Time', icon: 'fa-bolt' },
  { value: '10+', label: 'UK Businesses', icon: 'fa-building' },
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-[#111113]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center gap-3 mb-2">
                <i className={`fa-solid ${metric.icon} text-[#0066FF] group-hover:scale-110 transition-transform`}></i>
                <span className="text-3xl md:text-4xl font-bold counter">{metric.value}</span>
              </div>
              <p className="text-sm text-[#A1A1AA] uppercase tracking-widest">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Trust Elements */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-8 border-t border-white/5">
          <span className="flex items-center gap-2 text-sm text-[#A1A1AA]">
            <i className="fa-solid fa-shield-halved text-[#0066FF]"></i>
            Powered by enterprise-grade AI
          </span>
          <span className="flex items-center gap-2 text-sm text-[#A1A1AA]">
            <img src="https://flagcdn.com/w20/gb.png" alt="UK" className="w-4 h-3 rounded-sm" />
            British English Native Voice
          </span>
          <span className="flex items-center gap-2 text-sm text-[#A1A1AA]">
            <i className="fa-solid fa-lock text-[#10B981]"></i>
            GDPR Compliant
          </span>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
