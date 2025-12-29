
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How much does it cost?",
    answer: "Monthly: £399/month + £450 one-time setup. Annual: £2,500/year with FREE setup (save £2,288). No long contracts. Cancel anytime. That's less than 2 hours of a receptionist's weekly wage."
  },
  {
    question: "Does it really sound human?",
    answer: "Listen for yourself — get a demo call. Our AI uses native British voices with natural speech patterns. 94% of callers don't realise they're talking to AI."
  },
  {
    question: "What if I'm not happy?",
    answer: "40% booking increase in 30 days or full refund. No questions asked. We only win if you win."
  },
  {
    question: "How long to get started?",
    answer: "48 hours from signup to live. We do all the setup. You just forward your calls."
  },
  {
    question: "What types of businesses do you work with?",
    answer: "Hair salons, beauty shops, restaurants, dental practices, auto repair, trades, and any service business that takes bookings by phone."
  },
  {
    question: "Can the AI handle complex questions?",
    answer: "Sophie handles bookings, FAQs, business hours, and common queries. For complex issues, she takes a message and you get an instant notification."
  },
  {
    question: "What about my existing phone number?",
    answer: "You keep it. Just set up call forwarding when you're busy or closed. Easy to toggle on/off."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`glow-card-animated rounded-2xl transition-all ${
              openIndex === index ? 'ring-1 ring-[#0066FF]/30' : ''
            }`}
          >
            <div className="relative z-10">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#0066FF] transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="px-6 text-[#A1A1AA] leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
