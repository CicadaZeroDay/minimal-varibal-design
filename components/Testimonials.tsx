
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Sophie sounds more professional than my last receptionist. And she works weekends.",
    name: "James T.",
    business: "Auto Repair Shop",
    location: "Bristol",
    avatar: "JT",
    color: "#0066FF"
  },
  {
    quote: "Patients call at 8am, 10pm, Sunday morning. Sophie books them all. We've added 12 new patients this month.",
    name: "Dr. Patel",
    business: "Dental Practice",
    location: "London",
    avatar: "DP",
    color: "#8B5CF6"
  },
  {
    quote: "I was losing dinner reservations because we're too busy cooking to answer. Now every table is full.",
    name: "Marco L.",
    business: "Restaurant Owner",
    location: "Birmingham",
    avatar: "ML",
    color: "#10B981"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Trusted by UK <span className="gradient-text">Business Owners</span>
        </h2>
        <p className="text-xl text-[#A1A1AA]">
          See what our customers are saying
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="glow-card-animated rounded-2xl p-8 card-hover flex flex-col"
          >
            <div className="relative z-10 flex flex-col flex-1">
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-[#A1A1AA] mb-6 flex-1 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: `${testimonial.color}20`, color: testimonial.color }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-[#A1A1AA]">
                    {testimonial.business}, {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
