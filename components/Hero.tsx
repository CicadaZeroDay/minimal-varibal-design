
import React, { useState, useEffect } from 'react';
import { Phone, CalendarCheck, Headset, PhoneCall, Loader2, Check, PlayCircle, ArrowRight, ChevronDown, X } from 'lucide-react';

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

const Hero: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [wistiaLoaded, setWistiaLoaded] = useState(false);

  // Load Wistia script dynamically when video modal opens
  useEffect(() => {
    if (showVideo && !wistiaLoaded) {
      const script = document.createElement('script');
      script.src = 'https://fast.wistia.com/player.js';
      script.async = true;
      script.onload = () => setWistiaLoaded(true);
      document.head.appendChild(script);
    }
  }, [showVideo, wistiaLoaded]);

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
        body: JSON.stringify({ phone: `+44${cleanPhone}`, source: 'hero' }),
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
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-20 pb-32">
      {/* ===== STATIC BACKGROUND (no orbs/particles to avoid CLS) ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Floating Elements - Hidden on mobile */}
        <div className="hidden lg:block absolute top-1/4 left-[8%] floating-element opacity-30">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#8B5CF6] flex items-center justify-center">
            <Phone className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="hidden lg:block absolute top-1/3 right-[12%] floating-element opacity-25" style={{animationDelay: '2s'}}>
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#10B981] flex items-center justify-center">
            <CalendarCheck className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="hidden lg:block absolute bottom-1/3 left-[15%] floating-element opacity-20" style={{animationDelay: '4s'}}>
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#10B981] to-[#0066FF] flex items-center justify-center">
            <Headset className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Sound Wave Visualization - Hidden on mobile */}
        <div className="hidden lg:flex absolute right-[8%] top-1/2 -translate-y-1/2 items-end gap-1 opacity-30">
          {[1, 2, 3, 4, 5, 4, 3, 2, 1].map((_, i) => (
            <div
              key={i}
              className="sound-wave-bar"
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-8 pulse-glow">
          <span className="flex items-center gap-2">
            <img src="https://flagcdn.com/w20/gb.png" alt="UK flag" className="w-5 h-auto rounded-sm" loading="lazy" width="20" height="16" />
            British English Native Voice
          </span>
          <span className="w-1 h-1 rounded-full bg-white/30"></span>
          <span className="text-[#10B981]">GDPR Compliant</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
          Every Missed Call Costs You{' '}
          <span className="gradient-text">£47</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-[#D4D4D8] max-w-3xl mx-auto mb-8 leading-relaxed">
          24/7 AI receptionist that speaks like a native, books appointments, and never puts customers on hold.{' '}
          <span className="text-white font-medium">Try it yourself — get a demo call in 30 seconds.</span>
        </p>

        {/* Lead Magnet Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-sm font-medium mb-6">
          <span className="text-lg">🎁</span>
          <span className="text-[#10B981]">FREE: Get your personalized ROI report</span>
        </div>

        {/* Phone Input CTA */}
        {isSuccess ? (
          <div className="max-w-md mx-auto mb-6 p-6 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/30 text-center">
            <div className="w-16 h-16 rounded-full bg-[#10B981]/20 flex items-center justify-center mx-auto mb-4">
              <PhoneCall className="w-8 h-8 text-[#10B981] animate-pulse" />
            </div>
            <h3 className="text-xl font-bold text-[#10B981] mb-2">Sophie is calling you!</h3>
            <p className="text-[#D4D4D8]">
              Demo call to <span className="text-white font-medium">+44 {getCleanPhoneNumber(phone)}</span> in 30 seconds
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-[#D4D4D8]">
                  <span className="text-sm font-medium">+44</span>
                  <div className="w-px h-6 bg-white/20"></div>
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="7700 123456"
                  aria-label="Enter your UK phone number for demo call"
                  className="w-full pl-20 pr-4 py-4 bg-[#111113] border border-white/10 rounded-xl text-white placeholder:text-[#A1A1AA]/50 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all text-lg"
                  required
                />
                {error && (
                  <p className="mt-2 text-sm text-red-400">{error}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="glow-border px-8 py-4 bg-[#0066FF] text-white rounded-xl font-bold text-lg hover:bg-[#0052CC] transition-all disabled:opacity-50 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:ring-offset-2 focus:ring-offset-[#0A0A0B]"
                aria-label={isLoading ? "Submitting phone number" : "Request demo call"}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Calling...
                  </span>
                ) : (
                  'Call Me Now'
                )}
              </button>
            </div>
          </form>
        )}

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#D4D4D8] mb-6">
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#10B981]" />
            No signup required
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#10B981]" />
            No credit card
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#10B981]" />
            Just 30 seconds
          </span>
        </div>

        {/* Secondary CTA */}
        <div className="mt-4">
          <button
            onClick={() => setShowVideo(true)}
            className="inline-flex items-center gap-2 text-[#D4D4D8] hover:text-white transition-colors group focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:ring-offset-2 focus:ring-offset-[#0A0A0B] rounded-lg px-2 py-1"
            aria-label="Watch video demonstration of Sophie handling a booking"
          >
            <PlayCircle className="w-5 h-5 text-[#0066FF] group-hover:scale-110 transition-transform" />
            See how Sophie handles a booking
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#D4D4D8] animate-bounce" aria-label="Scroll down to see more content">
        <span className="text-xs uppercase tracking-widest">See how it works</span>
        <ChevronDown className="w-4 h-4" />
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-4xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-2"
              aria-label="Close video modal"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Wistia Player */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <wistia-player media-id="jxt0jxqld2" aspect="1.7777777777777777"></wistia-player>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
