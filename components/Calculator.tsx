
import React, { useState, useEffect } from 'react';

const industries = [
  { value: 'salon', label: 'Hair/Beauty Salon', avgValue: 45 },
  { value: 'restaurant', label: 'Restaurant', avgValue: 60 },
  { value: 'dental', label: 'Dental Practice', avgValue: 150 },
  { value: 'auto', label: 'Auto Repair', avgValue: 200 },
  { value: 'trades', label: 'Trades/Services', avgValue: 120 },
  { value: 'other', label: 'Other', avgValue: 75 },
];

const Calculator: React.FC = () => {
  const [missedCalls, setMissedCalls] = useState(10);
  const [avgValue, setAvgValue] = useState(75);
  const [industry, setIndustry] = useState('other');
  const [monthlyLoss, setMonthlyLoss] = useState(0);
  const [yearlyLoss, setYearlyLoss] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const monthly = missedCalls * avgValue * 4 * 0.6;
    const yearly = monthly * 12;
    setMonthlyLoss(Math.round(monthly));
    setYearlyLoss(Math.round(yearly));
    setShowResult(missedCalls > 0);
  }, [missedCalls, avgValue]);

  const handleIndustryChange = (value: string) => {
    setIndustry(value);
    const selected = industries.find(i => i.value === value);
    if (selected) {
      setAvgValue(selected.avgValue);
    }
  };

  const sliderProgress = ((missedCalls - 1) / 49) * 100;

  // Get reaction emoji based on missed calls
  const getReactionEmoji = () => {
    if (missedCalls <= 5) return { emoji: '😐', label: 'Hmm...' };
    if (missedCalls <= 10) return { emoji: '😮', label: 'Oh...' };
    if (missedCalls <= 20) return { emoji: '😧', label: 'Ouch!' };
    if (missedCalls <= 30) return { emoji: '😰', label: 'That hurts!' };
    if (missedCalls <= 40) return { emoji: '😱', label: 'Shocking!' };
    return { emoji: '🤯', label: 'Disaster!' };
  };

  const reaction = getReactionEmoji();

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto">
        <div className="glow-card-animated rounded-3xl p-8 md:p-12">
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
                How Much Are Missed Calls <span className="gradient-text">Costing You?</span>
              </h2>
              <p className="text-[#A1A1AA]">Calculate your potential revenue loss</p>
            </div>

            <div className="space-y-10">
              {/* Missed Calls Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium text-[#A1A1AA]">Missed calls per week</label>
                  <div className="flex items-center gap-4">
                    {/* Reaction Emoji */}
                    <div className="flex flex-col items-center transition-all duration-300">
                      <span
                        className="text-4xl transition-transform duration-300"
                        style={{
                          transform: `scale(${1 + (missedCalls / 100)})`,
                          filter: missedCalls > 30 ? 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.5))' : 'none'
                        }}
                      >
                        {reaction.emoji}
                      </span>
                      <span className="text-xs text-[#A1A1AA] mt-1">{reaction.label}</span>
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-[#0066FF]/20 border border-[#0066FF]/30">
                      <span className="text-3xl font-bold text-[#0066FF]">{missedCalls}</span>
                    </div>
                  </div>
                </div>

                {/* Premium Slider Container */}
                <div className="relative py-4">
                  {/* Track Background with Glow */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-3 rounded-full bg-[#111113] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#0066FF] to-[#8B5CF6] transition-all duration-150"
                      style={{ width: `${sliderProgress}%` }}
                    ></div>
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 shimmer"></div>
                  </div>

                  {/* Actual Slider */}
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={missedCalls}
                    onChange={(e) => setMissedCalls(parseInt(e.target.value))}
                    aria-label="Number of missed calls per week"
                    className="premium-slider relative z-10"
                  />
                </div>

                {/* Tick Marks */}
                <div className="flex justify-between px-2 mt-2">
                  {[1, 10, 20, 30, 40, 50].map(tick => (
                    <div key={tick} className="flex flex-col items-center">
                      <div className="w-px h-2 bg-[#A1A1AA]/30"></div>
                      <span className="text-xs text-[#A1A1AA]/50 mt-1">{tick}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industry Dropdown */}
              <div>
                <label id="industry-label" className="text-sm font-medium text-[#A1A1AA] mb-3 block">Your industry</label>
                <select
                  value={industry}
                  onChange={(e) => handleIndustryChange(e.target.value)}
                  aria-labelledby="industry-label"
                  className="w-full px-5 py-4 bg-[#111113] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 cursor-pointer transition-all"
                >
                  {industries.map(ind => (
                    <option key={ind.value} value={ind.value}>{ind.label}</option>
                  ))}
                </select>
              </div>

              {/* Average Booking Value */}
              <div>
                <label className="text-sm font-medium text-[#A1A1AA] mb-3 block">Average booking value</label>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#A1A1AA] text-lg font-medium">£</span>
                  <input
                    type="number"
                    value={avgValue}
                    onChange={(e) => setAvgValue(parseInt(e.target.value) || 0)}
                    aria-label="Average booking value in pounds"
                    className="w-full pl-10 pr-5 py-4 bg-[#111113] border border-white/10 rounded-xl text-white text-lg focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all"
                  />
                </div>
              </div>

              {/* Results */}
              {showResult && (
                <div className="pt-8 border-t border-white/10">
                  <div className="text-center mb-6">
                    <p className="text-[#A1A1AA] mb-2">You're losing approximately:</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-6 rounded-2xl bg-[#EF4444]/10 border border-[#EF4444]/30 text-center pulse-glow" style={{'--pulse-color': 'rgba(239, 68, 68, 0.3)'} as any}>
                      <div className="text-sm text-[#A1A1AA] mb-1">Per Month</div>
                      <div className="text-4xl font-extrabold text-[#EF4444]">
                        £{monthlyLoss.toLocaleString()}
                      </div>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#EF4444]/10 border border-[#EF4444]/30 text-center">
                      <div className="text-sm text-[#A1A1AA] mb-1">Per Year</div>
                      <div className="text-4xl font-extrabold text-[#EF4444]">
                        £{yearlyLoss.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Lead Magnet CTA */}
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-sm mb-4">
                      <span>🎁</span>
                      <span className="text-[#10B981]">Get your FREE personalized ROI report</span>
                    </div>
                  </div>

                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="w-full glow-border py-5 bg-[#0066FF] text-white rounded-xl font-bold text-lg hover:bg-[#0052CC] transition-all"
                  >
                    Stop Losing Money — Get Demo Call
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
