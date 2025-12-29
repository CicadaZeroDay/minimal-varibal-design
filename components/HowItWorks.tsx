
import React from 'react';
import { PhoneCall, Settings, Rocket, CalendarCheck, ArrowDown } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Demo Call',
    timing: 'Today',
    description: 'Enter your number, get a call from Sophie in 30 seconds',
    Icon: PhoneCall,
    color: '#0066FF'
  },
  {
    number: '02',
    title: 'Setup',
    timing: '24-48h',
    description: 'We configure your AI with your services, prices, availability',
    Icon: Settings,
    color: '#8B5CF6'
  },
  {
    number: '03',
    title: 'Go Live',
    timing: 'Day 2',
    description: 'Forward your calls to your AI number — that\'s it',
    Icon: Rocket,
    color: '#10B981'
  },
  {
    number: '04',
    title: 'Get Bookings',
    timing: 'Ongoing',
    description: 'Sophie answers, books, sends confirmations. You get notified.',
    Icon: CalendarCheck,
    color: '#F59E0B'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Live in <span className="gradient-text">48 Hours</span>. No Tech Skills Needed.
        </h2>
        <p className="text-xl text-[#A1A1AA] max-w-2xl mx-auto">
          No apps to install. No scripts to write. No training required. We handle everything.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Connection Line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0066FF] via-[#8B5CF6] to-[#10B981] -translate-y-1/2"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="glow-card-animated rounded-2xl p-6 card-hover relative z-10">
                <div className="relative z-10 text-center">
                  {/* Number Badge */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold"
                    style={{ backgroundColor: `${step.color}20`, color: step.color }}
                  >
                    {step.number}
                  </div>

                  {/* Timing Badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-[#A1A1AA] mb-4">
                    {step.timing}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${step.color}20` }}
                  >
                    <step.Icon className="w-6 h-6" style={{ color: step.color }} />
                  </div>

                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-[#A1A1AA]">{step.description}</p>
                </div>
              </div>

              {/* Arrow (mobile) */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-4">
                  <ArrowDown className="w-5 h-5 text-[#A1A1AA]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
