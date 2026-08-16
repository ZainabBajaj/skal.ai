import type { Metadata } from 'next';
import { Clock, MessageSquare, Sparkles, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';
import CalendlyEmbed from './CalendlyEmbed';

const CALENDLY_URL = 'https://calendly.com/skal-ai/discovery-call?utm_source=website';

export const metadata: Metadata = {
  title: 'Book a Discovery Call | SKAL',
  description:
    'Schedule a focused 30-minute discovery call with SKAL. Real conversation, no pitch, useful next step either way.',
  alternates: { canonical: 'https://skal.ai/book' },
  openGraph: {
    title: 'Book a Discovery Call | SKAL',
    description:
      'A 30-minute call to understand what you are building, where the bottleneck is, and how SKAL plugs in.',
    url: 'https://skal.ai/book',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Discovery Call | SKAL',
    description: 'A 30-minute call. Real conversation, no pitch.',
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
    <main className="min-h-screen bg-paper">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-10 lg:pb-14">
        <div className="shell">
          <div className="max-w-[54ch]">
            <div className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-signal mb-4 animate-fade-in-up">
              DISCOVERY CALL
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-ink mb-6 leading-tight tracking-tight animate-fade-in-up"
              style={{ animationDelay: '80ms' }}
            >
              Let&apos;s see if we&apos;re a{' '}
              <span className="accent">
                fit.
              </span>
            </h1>
            <p
              className="text-lg sm:text-xl text-ink-2 leading-relaxed animate-fade-in-up"
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
        <div className="shell">
          <div className="">
            <div className="overflow-hidden border border-rule bg-surface">
              <CalendlyEmbed url={CALENDLY_URL} />
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-ink-3">
              <ShieldCheck className="w-4 h-4 text-signal" />
              <span>Confirmation lands in your inbox the moment you book.</span>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="pb-14 sm:pb-20 bg-white dark:bg-[#0a0a0a]">
        <div className="shell">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {expectations.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="border border-rule bg-surface p-6 transition-colors duration-200 hover:border-ink"
              >
                <div className="mb-4 text-signal">
                  <Icon
                    className="w-5 h-5 text-signal"
                    strokeWidth={2.2}
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-ink mb-2">
                  {title}
                </h3>
                <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
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
