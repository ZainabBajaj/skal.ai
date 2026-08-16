import Link from 'next/link';
import { Building2, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';
import ContactForm from '../components/ContactForm';
import { industries } from '@/lib/industries';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI systems by industry | SKAL',
  description: 'See how SKAL deploys AI systems, automated outbound, and operational infrastructure across dental, legal, real estate, e-commerce, and B2B SaaS.',
  keywords: [
    'AI by industry',
    'AI for dental',
    'AI for law firms',
    'AI for real estate',
    'AI for ecommerce',
    'AI for SaaS',
    'industry-specific AI',
  ],
  alternates: { canonical: 'https://skal.ai/industries' },
  openGraph: {
    title: 'AI systems by industry | SKAL',
    description: 'How SKAL deploys AI across dental, legal, real estate, e-commerce, and B2B SaaS.',
    url: 'https://skal.ai/industries',
    type: 'website',
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "AI systems by industry",
  "url": "https://skal.ai/industries",
  "description": "SKAL deployment patterns across major B2B industries.",
};

export default function IndustriesHubPage() {
  return (
    <main className="min-h-screen bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <Navbar />

      <section className="pt-28 lg:pt-36 pb-10 lg:pb-14">
        <div className="shell">
          <div className="max-w-[54ch]">
            <div className="mb-6">
              <Building2 className="w-4 h-4 text-signal" />
              <span className="t-label">BY INDUSTRY</span>
            </div>
            <h1 className="font-display t-hero text-ink max-w-[16ch]">
              AI systems built for your industry.
            </h1>
            <p className="t-lead max-w-[54ch]">
              The four SKAL products work everywhere. The bottleneck does not. Pick your industry to see exactly which workflows we deploy first and what they look like in production.
            </p>
          </div>
        </div>
      </section>

      <section className="band bg-surface">
        <div className="shell">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group block border border-rule bg-surface p-8 transition-colors duration-200 hover:border-ink"
              >
                <div className="text-xs font-bold tracking-widest text-signal mb-3">
                  {industry.hero.eyebrow}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-3 leading-snug">
                  {industry.hero.headline}
                </h2>
                <p className="text-ink-2 leading-relaxed mb-6">
                  {industry.hero.subhead}
                </p>
                <div className="inline-flex items-center gap-2 text-signal font-semibold group-hover:gap-3 transition-all duration-300">
                  See how SKAL deploys in {industry.shortName}
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-12 text-center text-ink-2 max-w-[54ch]">
            Industry not listed?{' '}
            <Link href="/book" className="text-signal font-semibold hover:underline">
              Tell us your use case
            </Link>
            . The four SKAL products work across most B2B operations.
          </p>
        </div>
      </section>

      <ContactForm />
      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
