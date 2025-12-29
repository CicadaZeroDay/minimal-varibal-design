
import React from 'react';
import { Phone, CalendarCheck, Zap, Building2, Shield, Lock } from 'lucide-react';

const metrics = [
  { value: '5,000+', label: 'Calls Handled', Icon: Phone },
  { value: '94%', label: 'Booking Rate', Icon: CalendarCheck },
  { value: '<3s', label: 'Response Time', Icon: Zap },
  { value: '10+', label: 'UK Businesses', Icon: Building2 },
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-[#111113]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center gap-3 mb-2">
                <metric.Icon className="w-5 h-5 text-[#0066FF] group-hover:scale-110 transition-transform" />
                <span className="text-3xl md:text-4xl font-bold counter">{metric.value}</span>
              </div>
              <p className="text-sm text-[#A1A1AA] uppercase tracking-widest">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Trust Elements */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-8 border-t border-white/5">
          <span className="flex items-center gap-2 text-sm text-[#A1A1AA]">
            <Shield className="w-4 h-4 text-[#0066FF]" />
            Powered by enterprise-grade AI
          </span>
          <span className="flex items-center gap-2 text-sm text-[#A1A1AA]">
            <img src="https://flagcdn.com/w20/gb.png" alt="UK flag" className="w-4 h-auto rounded-sm" loading="lazy" width="20" height="16" />
            British English Native Voice
          </span>
          <span className="flex items-center gap-2 text-sm text-[#A1A1AA]">
            <Lock className="w-4 h-4 text-[#10B981]" />
            GDPR Compliant
          </span>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
