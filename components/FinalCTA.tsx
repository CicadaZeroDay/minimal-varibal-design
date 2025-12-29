
import React, { useState } from 'react';
import { PhoneCall, Loader2, Check } from 'lucide-react';

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

const FinalCTA: React.FC = () => {
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
        body: JSON.stringify({ phone: `+44${cleanPhone}`, source: 'final_cta' }),
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
    <section className="py-20">
      <div className="max-w-3xl mx-auto">
        <div className="glow-card-animated rounded-3xl p-8 md:p-12 overflow-hidden">
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/10 via-[#8B5CF6]/10 to-[#0066FF]/10 rounded-3xl"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Hear Sophie in Action — <span className="gradient-text">In 30 Seconds</span>
            </h2>

            <p className="text-xl text-[#A1A1AA] mb-8">
              Enter your phone number. Get a demo call. Experience what your customers will hear.
            </p>

            {/* Phone Form */}
            {isSuccess ? (
              <div className="max-w-md mx-auto mb-6 p-6 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/30">
                <div className="w-16 h-16 rounded-full bg-[#10B981]/20 flex items-center justify-center mx-auto mb-4">
                  <PhoneCall className="w-8 h-8 text-[#10B981] animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-[#10B981] mb-2">Sophie is calling you!</h3>
                <p className="text-[#A1A1AA]">
                  Demo call to <span className="text-white font-medium">+44 {getCleanPhoneNumber(phone)}</span> in 30 seconds
                </p>
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-[#A1A1AA]">
                        <span className="text-sm font-medium">+44</span>
                        <div className="w-px h-6 bg-white/20"></div>
                      </div>
                      <input
                        type="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="7700 123456"
                        aria-label="Enter your UK phone number for demo call"
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
                      className="glow-border px-8 py-4 bg-[#0066FF] text-white rounded-xl font-bold text-lg hover:bg-[#0052CC] transition-all disabled:opacity-50 whitespace-nowrap"
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Calling...
                        </span>
                      ) : (
                        "Call Me Now — It's Free"
                      )}
                    </button>
                  </div>
                </form>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#A1A1AA]">
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
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
