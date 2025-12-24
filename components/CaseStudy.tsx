
import React from 'react';

const CaseStudy: React.FC = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Real Results, <span className="gradient-text">Real Business</span>
        </h2>
      </div>

      <div className="glow-card-animated rounded-3xl p-8 md:p-12">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Story */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0066FF]/20 text-[#0066FF] text-sm font-medium mb-6">
              <i className="fa-solid fa-scissors"></i>
              Hair Salon Case Study
            </div>

            <h3 className="text-2xl font-bold mb-6">Manchester Salon: From Chaos to Calm</h3>

            {/* Before/After */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-sm font-medium text-[#A1A1AA] mb-2">BEFORE</div>
                <ul className="space-y-2 text-sm text-[#6B7280]">
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-xmark text-[#6B7280] mt-1"></i>
                    15-20 missed calls/week
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-xmark text-[#6B7280] mt-1"></i>
                    Answering phone mid-haircut
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-xmark text-[#6B7280] mt-1"></i>
                    Lost ~£3,000/month
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20">
                <div className="text-sm font-medium text-[#10B981] mb-2">AFTER 30 DAYS</div>
                <ul className="space-y-2 text-sm text-[#A1A1AA]">
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-[#10B981] mt-1"></i>
                    0 missed calls
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-[#10B981] mt-1"></i>
                    100% focus on clients
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-[#10B981] mt-1"></i>
                    +47% bookings
                  </li>
                </ul>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="relative pl-6 border-l-2 border-[#0066FF]">
              <p className="text-lg italic text-[#A1A1AA] mb-4">
                "I was sceptical about AI answering my phone. Then Sophie booked 3 appointments while I was doing a colour treatment. My regulars don't even realise it's not human."
              </p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0066FF] to-[#8B5CF6] flex items-center justify-center text-sm font-bold">
                  SM
                </div>
                <div>
                  <div className="font-medium">Sarah M.</div>
                  <div className="text-sm text-[#A1A1AA]">Salon Owner, Manchester</div>
                </div>
              </footer>
            </blockquote>
          </div>

          {/* Right: Metrics */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              {/* Metric 1 */}
              <div className="p-6 rounded-2xl bg-[#111113] border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#A1A1AA]">Missed Calls</span>
                  <span className="text-sm text-[#10B981]">-100%</span>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-bold text-[#6B7280] line-through opacity-50">23/week</span>
                  <i className="fa-solid fa-arrow-right text-[#A1A1AA]"></i>
                  <span className="text-4xl font-bold text-[#10B981]">0/week</span>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="p-6 rounded-2xl bg-[#111113] border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#A1A1AA]">Bookings</span>
                  <span className="text-sm text-[#10B981]">+47%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3">
                  <div className="bg-gradient-to-r from-[#0066FF] to-[#10B981] h-3 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0066FF]/20 to-[#10B981]/20 border border-[#10B981]/30">
                <div className="text-[#A1A1AA] mb-2">Monthly Revenue Recovered</div>
                <div className="text-5xl font-extrabold text-[#10B981]">£2,800</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
