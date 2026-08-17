import Link from 'next/link';
import { GitCompare, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';
import ContactForm from '../components/ContactForm';
import { comparisons } from '@/lib/comparisons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SKAL alternatives and comparisons | SKAL',
  description: 'Honest comparisons of SKAL Scale against Clay, Apollo, 11x.ai, Salesloft, and other AI sales platforms. When SKAL fits and when it does not.',
  keywords: [
    'SKAL alternatives',
    'Clay alternative',
    'Apollo alternative',
    '11x alternative',
    'Salesloft alternative',
    'AI sales comparison',
  ],
  alternates: { canonical: 'https://skal.ai/compare' },
  openGraph: {
    title: 'SKAL alternatives and comparisons | SKAL',
    description: 'Honest comparisons of SKAL against Clay, Apollo, 11x.ai, Salesloft, and other AI sales platforms.',
    url: 'https://skal.ai/compare',
    type: 'website',
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "SKAL comparisons",
  "url": "https://skal.ai/compare",
  "description": "Side-by-side comparisons of SKAL against other AI sales and outbound platforms.",
};

export default function ComparisonsHubPage() {
  return (
    <main className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <Navbar />

      <section className="pt-28 pb-12 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/20 dark:to-[#00E1FF]/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-[#009bd7]/20 dark:border-[#00E1FF]/30">
              <GitCompare className="w-4 h-4 text-[#009bd7] dark:text-[#00E1FF]" />
              <span className="text-[#009bd7] dark:text-[#00E1FF] text-sm font-bold tracking-wider">COMPARISONS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0f172a] dark:text-white mb-6 leading-snug pb-1">
              SKAL vs the alternatives.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Honest comparisons. We will tell you when a competitor is the right pick. Most AI-sales tools are products you operate; SKAL Scale is the outbound function itself, run as managed infrastructure with pay-per-meeting pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {comparisons.map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="group block relative bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-gray-900/60 dark:to-gray-800/60 rounded-3xl p-8 sm:p-10 border border-gray-200/60 dark:border-gray-700/60 shadow-lg hover:shadow-2xl hover:shadow-[#009bd7]/10 hover:border-[#009bd7]/30 transition-all duration-300"
              >
                <div className="text-xs font-bold tracking-widest text-[#009bd7] dark:text-[#00E1FF] mb-3">
                  {c.category.toUpperCase()}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] dark:text-white mb-3 leading-snug">
                  SKAL vs {c.competitor}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {c.hero.subhead}
                </p>
                <div className="inline-flex items-center gap-2 text-[#009bd7] dark:text-[#00E1FF] font-semibold group-hover:gap-3 transition-all duration-300">
                  See the full comparison
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-12 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Considering a different tool?{' '}
            <Link href="/book" className="text-[#009bd7] dark:text-[#00E1FF] font-semibold hover:underline">
              Bring it to the discovery call
            </Link>
            . We will give you an honest read on whether SKAL or the alternative fits.
          </p>
        </div>
      </section>

      <ContactForm />
      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
