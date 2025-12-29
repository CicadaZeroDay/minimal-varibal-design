
import React from 'react';
import { PhoneOff, Clock, Voicemail } from 'lucide-react';

const painPoints = [
  {
    title: 'The Missed Call Tax',
    Icon: PhoneOff,
    color: '#EF4444',
    description: "You're cutting hair. Mixing drinks. Under a car. The phone rings — and rings — and goes to voicemail. That caller? They're already booking with your competitor."
  },
  {
    title: 'The Hiring Trap',
    Icon: Clock,
    color: '#F59E0B',
    description: "A receptionist costs £2,000+/month. Works 40 hours. Takes holidays. Calls sick. And still can't answer at 10pm when that emergency booking comes in."
  },
  {
    title: 'The Voicemail Graveyard',
    Icon: Voicemail,
    color: '#8B5CF6',
    description: '"Please leave a message after the beep." 80% of callers hang up. No message. No callback. No revenue. Just a notification you\'ll never act on.'
  }
];

const PainPoints: React.FC = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          While You're Busy With Customers,{' '}
          <span className="gradient-text">Your Phone Keeps Ringing</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {painPoints.map((point, index) => (
          <div
            key={index}
            className="glow-card-animated rounded-2xl p-8 card-hover"
          >
            <div className="relative z-10">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${point.color}20` }}
              >
                <point.Icon className="w-6 h-6" style={{ color: point.color }} />
              </div>
              <h3 className="text-xl font-bold mb-4">{point.title}</h3>
              <p className="text-[#A1A1AA] leading-relaxed">{point.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Transition Text */}
      <div className="text-center mt-16">
        <p className="text-xl md:text-2xl text-[#A1A1AA] max-w-3xl mx-auto">
          What if every call was answered in <span className="text-white font-semibold">2 seconds</span>, <span className="text-white font-semibold">24/7</span>, by a voice that sounds <span className="text-white font-semibold">completely human</span>?
        </p>
      </div>
    </section>
  );
};

export default PainPoints;
