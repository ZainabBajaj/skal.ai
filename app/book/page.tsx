import type { Metadata } from 'next';
import { Clock, MessageSquare, Sparkles, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';
import CalendlyEmbed from './CalendlyEmbed';

const CALENDLY_URL = 'https://calendly.com/skal-ai/discovery-call';

export const metadata: Metadata = {
  title: 'Book a Discovery Call | SKAL',
  description:
    'Schedule a focused 30-minute discovery call with SKAL. Real conversation, no pitch, useful next step either way.',
  alternates: { canonical: '/book' },
  openGraph: {
    title: 'Book a Discovery Call | SKAL',
    description:
      'A 30-minute call to understand what you are building, where the bottleneck is, and whether SKAL is the right partner.',
    url: 'https://skal.ai/book',
    type: 'website',
  },
};

const expectations = [
  {
    icon: Clock,
    title: '30 focused minutes',
    body: 'Time-boxed and respectful of your calendar. We start on time and end on time.',
  },
  {
    icon: MessageSquare,
    title: 'Real conversation',
    body: 'You speak with a senior engineer, not a salesperson reading a script.',
  },
  {
    icon: Sparkles,
    title: 'Useful either way',
    body: 'You leave with a concrete next step, even if SKAL is not the right fit.',
  },
];

export default function BookPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#009bd7] dark:text-[#00E1FF] mb-4 animate-fade-in-up">
              DISCOVERY CALL
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-[#0f172a] dark:text-white mb-6 leading-tight tracking-tight animate-fade-in-up"
              style={{ animationDelay: '80ms' }}
            >
              Let&apos;s see if we&apos;re a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] via-[#00E1FF] to-[#1DB5C5]">
                fit.
              </span>
            </h1>
            <p
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '160ms' }}
            >
              A focused 30-minute call to understand what you are building, where the
              bottleneck is, and whether SKAL is the right partner. No deck, no pitch,
              no obligation.
            </p>
          </div>
        </div>
      </section>

      {/* Calendly */}
      <section className="pt-4 pb-12 sm:pt-6 sm:pb-16 bg-white dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#111] shadow-2xl shadow-[#009bd7]/5">
              <CalendlyEmbed url={CALENDLY_URL} />
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <ShieldCheck className="w-4 h-4 text-[#009bd7] dark:text-[#00E1FF]" />
              <span>Confirmation lands in your inbox the moment you book.</span>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="pb-14 sm:pb-20 bg-white dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {expectations.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/40 p-6 transition-all duration-300 hover:border-[#009bd7]/30 dark:hover:border-[#00E1FF]/30 hover:shadow-lg hover:shadow-[#009bd7]/5"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#009bd7]/10 to-[#00E1FF]/10 flex items-center justify-center mb-4">
                  <Icon
                    className="w-5 h-5 text-[#009bd7] dark:text-[#00E1FF]"
                    strokeWidth={2.2}
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0f172a] dark:text-white mb-2">
                  {title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
