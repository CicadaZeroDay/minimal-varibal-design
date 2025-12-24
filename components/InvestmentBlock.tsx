
import React, { useState } from 'react';

// Функция форматирования номера телефона для UK формата
const formatPhoneNumber = (value: string): string => {
  // Убираем все нецифровые символы
  const numbers = value.replace(/\D/g, '');
  
  // Ограничиваем до 10 цифр (UK мобильные номера без первой 0)
  const limited = numbers.slice(0, 10);
  
  // Форматируем: XXXX XXXXXX
  if (limited.length <= 4) {
    return limited;
  } else if (limited.length <= 10) {
    return `${limited.slice(0, 4)} ${limited.slice(4)}`;
  }
  
  return limited;
};

// Функция для получения чистого номера (только цифры) для отправки
const getCleanPhoneNumber = (formatted: string): string => {
  return formatted.replace(/\D/g, '');
};

const invoiceLines = [
  { item: 'Unanswered calls (47)', amount: '£2,209.00' },
  { item: 'Lost bookings (28)', amount: '£1,316.00' },
  { item: 'Customers gone to competitors', amount: '£658.00' },
];

const InvestmentBlock: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const cleanPhone = getCleanPhoneNumber(phone);
    
    if (cleanPhone.length < 10) {
      setError('Please enter a valid phone number');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('https://n8n.kyshkov.com/webhook/9632e85f-548c-4391-a013-9df337f54d7c', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: `+44${cleanPhone}`, source: 'pricing' }),
      });

      if (!response.ok) {
        throw new Error(`Webhook failed: ${response.status} ${response.statusText}`);
      }

      const data = await response.json().catch(() => ({}));
      console.log('Webhook success:', data);
      
      setIsSuccess(true);
    } catch (error) {
      console.error('Webhook error:', error);
      setError('Failed to send request. Please try again.');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="pricing" className="py-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          You're Already Paying. <span className="gradient-text">Just Not Us.</span>
        </h2>
        <p className="text-xl text-[#A1A1AA] max-w-2xl mx-auto">
          Every missed call is an invisible invoice. Callbot cancels it.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* Left: Invoice Card */}
        <div className="relative">
          <div
            className="invoice-card bg-[#F5F5F4] rounded-xl p-6 md:p-8 text-[#1A1A1A] shadow-2xl"
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0,0,0,0.05)'
            }}
          >
            {/* Invoice Header */}
            <div className="flex justify-between items-start mb-6 pb-4 border-b border-[#E5E5E5]">
              <div>
                <div className="text-xs text-[#6B7280] uppercase tracking-wider mb-1">Invoice</div>
                <div className="font-mono text-sm font-semibold">#2025-1247</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-[#6B7280]">December 2025</div>
              </div>
            </div>

            {/* From / To */}
            <div className="grid grid-cols-2 gap-4 mb-6 pb-4 border-b border-[#E5E5E5]">
              <div>
                <div className="text-xs text-[#6B7280] uppercase tracking-wider mb-1">From</div>
                <div className="font-semibold text-sm">Missed Calls Ltd</div>
              </div>
              <div>
                <div className="text-xs text-[#6B7280] uppercase tracking-wider mb-1">To</div>
                <div className="font-semibold text-sm">Your Business</div>
              </div>
            </div>

            {/* Line Items */}
            <div className="mb-6">
              <div className="grid grid-cols-[1fr_auto] gap-2 text-xs text-[#6B7280] uppercase tracking-wider mb-3 pb-2 border-b border-[#E5E5E5]">
                <span>Description</span>
                <span className="text-right">Amount</span>
              </div>

              {invoiceLines.map((line, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[1fr_auto] gap-4 py-3 border-b border-[#E5E5E5]/50 last:border-0"
                >
                  <span className="text-sm text-[#374151]">{line.item}</span>
                  <span className="text-sm font-medium text-[#374151] font-mono">{line.amount}</span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="bg-[#FEE2E2] -mx-6 md:-mx-8 px-6 md:px-8 py-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="font-bold text-[#991B1B]">TOTAL DUE:</span>
                <span className="text-2xl md:text-3xl font-extrabold text-[#DC2626] total-pulse">
                  £4,183.00
                </span>
              </div>
            </div>

            {/* Warnings */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-[#92400E]">
                <span className="text-[#F59E0B]">⚠️</span>
                <span>Payment method: <strong>Automatic</strong></span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#92400E]">
                <span className="text-[#F59E0B]">⚠️</span>
                <span>Frequency: <strong>Every month</strong></span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#92400E]">
                <span className="text-[#F59E0B]">⚠️</span>
                <span>Cancel option: <strong>None (until now)</strong></span>
              </div>
            </div>
          </div>

          {/* Reframe Text */}
          <div className="mt-6 text-center lg:text-left">
            <p className="text-lg md:text-xl text-white font-semibold mb-2">
              Cancel this invisible invoice for just <span className="text-[#0066FF]">£399/month</span>.
            </p>
            <p className="text-[#A1A1AA]">
              For every £1 you invest in Callbot, you recover £6+ in bookings you're currently losing.
            </p>
          </div>
        </div>

        {/* Right: ROI + CTA */}
        <div className="space-y-6">

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Monthly Plan */}
            <div className="rounded-2xl p-6 bg-[#111113] border border-white/10 flex flex-col">
              <div className="text-sm text-[#A1A1AA] uppercase tracking-wider mb-2">Monthly Plan</div>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-white">£399</span>
                <span className="text-[#A1A1AA]">/month</span>
              </div>
              <div className="text-sm text-[#A1A1AA] mb-6 pb-6 border-b border-white/10">
                + £450 one-time setup fee
              </div>
              <ul className="space-y-2 text-sm text-[#A1A1AA] mb-6 flex-1">
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#0066FF]"></i>
                  24/7 AI receptionist
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#0066FF]"></i>
                  Unlimited calls
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#0066FF]"></i>
                  Native British voice
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#0066FF]"></i>
                  Instant answering (&lt;3s)
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#0066FF]"></i>
                  SMS booking confirmations
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#0066FF]"></i>
                  Full call transcripts
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#0066FF]"></i>
                  Real-time notifications
                </li>
              </ul>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-all"
              >
                Get Started
              </button>
            </div>

            {/* Annual Plan - BEST VALUE */}
            <div className="glow-card-animated rounded-2xl p-6 flex flex-col">
              <div className="relative z-10 flex flex-col h-full">
                {/* Best Value Badge - Inside card */}
                <div className="inline-flex self-start px-3 py-1 mb-3 bg-gradient-to-r from-[#0066FF] to-[#8B5CF6] rounded-full text-xs font-bold uppercase tracking-wider">
                  Best Value
                </div>
                <div className="text-sm text-[#A1A1AA] uppercase tracking-wider mb-2">Annual Plan</div>
                <div className="mb-2">
                  <span className="text-4xl font-extrabold text-white">£2,500</span>
                  <span className="text-[#A1A1AA]">/year</span>
                </div>
                <div className="inline-flex items-center gap-2 text-sm text-[#10B981] font-medium mb-6 pb-6 border-b border-white/10">
                  <i className="fa-solid fa-tag"></i>
                  Save £2,288 — Setup FREE
                </div>
                <ul className="space-y-2 text-sm text-[#A1A1AA] mb-6 flex-1">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-[#10B981]"></i>
                    <strong className="text-white">Everything in Monthly</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-[#10B981]"></i>
                    <strong className="text-white">FREE setup</strong> (save £450)
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-[#10B981]"></i>
                    Priority support
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-[#10B981]"></i>
                    Dedicated account manager
                  </li>
                </ul>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="w-full py-3 rounded-xl bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-all glow-border"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Guarantee Badge */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30">
            <div className="text-3xl">🛡️</div>
            <p className="text-[#10B981] font-medium">
              40% more bookings in 30 days — or full refund. Zero risk.
            </p>
          </div>

          {/* CTA Form */}
          <div className="glow-card-animated rounded-2xl p-6 md:p-8">
            <div className="relative z-10">
              {isSuccess ? (
                <div className="text-center py-4">
                  <div className="w-16 h-16 rounded-full bg-[#10B981]/20 flex items-center justify-center mx-auto mb-4">
                    <i className="fa-solid fa-phone-volume text-3xl text-[#10B981] animate-pulse"></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#10B981] mb-2">Sophie is calling you!</h3>
                  <p className="text-[#A1A1AA]">
                    Demo call to <span className="text-white font-medium">+44 {getCleanPhoneNumber(phone)}</span> in 30 seconds
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-4 text-center">Stop Paying — Start Earning</h3>

                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3">
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-[#A1A1AA]">
                          <span className="text-sm font-medium">+44</span>
                          <div className="w-px h-6 bg-white/20"></div>
                        </div>
                        <input
                          type="tel"
                          value={phone}
                          onChange={handlePhoneChange}
                          placeholder="7700 123456"
                          className="w-full pl-20 pr-4 py-4 bg-[#0A0A0B] border border-white/20 rounded-xl text-white placeholder:text-[#A1A1AA]/50 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all text-lg"
                          required
                        />
                        {error && (
                          <p className="mt-2 text-sm text-red-400">{error}</p>
                        )}
                      </div>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full glow-border py-4 bg-[#0066FF] text-white rounded-xl font-bold text-lg hover:bg-[#0052CC] transition-all disabled:opacity-50"
                      >
                        {isLoading ? (
                          <span className="flex items-center justify-center gap-2">
                            <i className="fa-solid fa-spinner animate-spin"></i>
                            Calling...
                          </span>
                        ) : (
                          'Get Demo Call Now'
                        )}
                      </button>
                    </div>
                  </form>

                  <p className="text-center text-sm text-[#A1A1AA] mt-4">
                    <a href="#demo" className="hover:text-white transition-colors">
                      See how Sophie handles calls first →
                    </a>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentBlock;
