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
    <main className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <Navbar />

      <section className="pt-28 pb-12 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/20 dark:to-[#00E1FF]/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-[#009bd7]/20 dark:border-[#00E1FF]/30">
              <Building2 className="w-4 h-4 text-[#009bd7] dark:text-[#00E1FF]" />
              <span className="text-[#009bd7] dark:text-[#00E1FF] text-sm font-bold tracking-wider">BY INDUSTRY</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0f172a] dark:text-white mb-6 leading-snug pb-1">
              AI systems built for your industry.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              The four SKAL products work everywhere. The bottleneck does not. Pick your industry to see exactly which workflows we deploy first and what they look like in production.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group block relative bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-gray-900/60 dark:to-gray-800/60 rounded-3xl p-8 sm:p-10 border border-gray-200/60 dark:border-gray-700/60 shadow-lg hover:shadow-2xl hover:shadow-[#009bd7]/10 hover:border-[#009bd7]/30 transition-all duration-300"
              >
                <div className="text-xs font-bold tracking-widest text-[#009bd7] dark:text-[#00E1FF] mb-3">
                  {industry.hero.eyebrow}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] dark:text-white mb-3 leading-snug">
                  {industry.hero.headline}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {industry.hero.subhead}
                </p>
                <div className="inline-flex items-center gap-2 text-[#009bd7] dark:text-[#00E1FF] font-semibold group-hover:gap-3 transition-all duration-300">
                  See how SKAL deploys in {industry.shortName}
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-12 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Industry not listed?{' '}
            <Link href="/book" className="text-[#009bd7] dark:text-[#00E1FF] font-semibold hover:underline">
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
