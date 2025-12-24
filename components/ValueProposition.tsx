
import React from 'react';

const outcomes = [
  {
    stat: '40%',
    title: 'More Bookings',
    description: 'Capture revenue from calls you\'re currently missing',
    icon: 'fa-chart-line',
    color: '#10B981'
  },
  {
    stat: 'Zero',
    title: 'Staff Stress',
    description: 'Stop interrupting clients to grab the phone',
    icon: 'fa-face-smile',
    color: '#0066FF'
  },
  {
    stat: '100%',
    title: 'Visibility',
    description: 'Full transcripts, SMS follow-ups, booking confirmations',
    icon: 'fa-eye',
    color: '#8B5CF6'
  }
];

const ValueProposition: React.FC = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Turn Every Ring Into <span className="gradient-text">Revenue</span>
        </h2>

        {/* Value Exchange Formula */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 mt-8 p-6 rounded-2xl bg-[#111113] border border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#0066FF]/20 flex items-center justify-center">
              <i className="fa-solid fa-phone text-[#0066FF]"></i>
            </div>
            <span className="font-medium">We create your number</span>
          </div>
          <i className="fa-solid fa-arrow-right text-[#A1A1AA]"></i>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center">
              <i className="fa-solid fa-robot text-[#8B5CF6]"></i>
            </div>
            <span className="font-medium">Get an AI receptionist</span>
          </div>
          <i className="fa-solid fa-arrow-right text-[#A1A1AA]"></i>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#10B981]/20 flex items-center justify-center">
              <i className="fa-solid fa-calendar-check text-[#10B981]"></i>
            </div>
            <span className="font-medium">Never miss a booking</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {outcomes.map((outcome, index) => (
          <div
            key={index}
            className="glow-card-animated rounded-2xl p-8 card-hover"
          >
            <div className="relative z-10 text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: `${outcome.color}20` }}
              >
                <i className={`fa-solid ${outcome.icon} text-3xl`} style={{ color: outcome.color }}></i>
              </div>
              <div className="text-5xl font-extrabold mb-2" style={{ color: outcome.color }}>
                {outcome.stat}
              </div>
              <h3 className="text-xl font-bold mb-2">{outcome.title}</h3>
              <p className="text-[#A1A1AA]">{outcome.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueProposition;
