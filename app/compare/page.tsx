import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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
    <main className="min-h-screen bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <Navbar />

      <section className="pt-28 lg:pt-36 pb-10 lg:pb-14">
        <div className="shell">
          <div className="max-w-[54ch]">
            <div className="mb-6">
              <span className="t-label">COMPARISONS</span>
            </div>
            <h1 className="font-display t-hero text-ink max-w-[16ch]">
              SKAL vs the alternatives.
            </h1>
            <p className="t-lead max-w-[54ch]">
              Honest comparisons. We will tell you when a competitor is the right pick. Most AI-sales tools are products you operate; SKAL Scale is the outbound function itself, run as managed infrastructure with pay-per-meeting pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="band bg-surface">
        <div className="shell">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {comparisons.map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="group block border border-rule bg-surface p-8 transition-colors duration-200 hover:border-ink"
              >
                <div className="text-xs font-bold tracking-widest text-signal mb-3">
                  {c.category.toUpperCase()}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-3 leading-snug">
                  SKAL vs {c.competitor}
                </h2>
                <p className="text-ink-2 leading-relaxed mb-6">
                  {c.hero.subhead}
                </p>
                <div className="inline-flex items-center gap-2 text-signal font-semibold group-hover:gap-3 transition-all duration-300">
                  See the full comparison
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-12 text-center text-ink-2 max-w-[54ch]">
            Considering a different tool?{' '}
            <Link href="/book" className="text-signal font-semibold hover:underline">
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
