import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowLeft, Check, X, GitCompare } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingThemeToggle from '../../components/FloatingThemeToggle';
import ContactForm from '../../components/ContactForm';
import { getAllComparisonSlugs, getComparisonBySlug } from '@/lib/comparisons';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getComparisonBySlug(slug);
  if (!c) return {};
  const title = `SKAL vs ${c.competitor}: which is right for your team? | SKAL`;
  const description = c.hero.body;
  const url = `https://skal.ai/compare/${slug}`;
  return {
    title,
    description,
    keywords: [
      `SKAL vs ${c.competitor}`,
      `${c.competitor} alternative`,
      `alternatives to ${c.competitor}`,
      c.category,
      'AI sales',
    ],
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getComparisonBySlug(slug);
  if (!c) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "url": `https://skal.ai/compare/${slug}`,
    "mainEntity": c.faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <main className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#009bd7] dark:text-[#00E1FF] hover:underline mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              All comparisons
            </Link>

            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/20 dark:to-[#00E1FF]/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-[#009bd7]/20 dark:border-[#00E1FF]/30">
              <GitCompare className="w-4 h-4 text-[#009bd7] dark:text-[#00E1FF]" />
              <span className="text-[#009bd7] dark:text-[#00E1FF] text-sm font-bold tracking-wider">{c.category.toUpperCase()}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0f172a] dark:text-white mb-6 leading-snug pb-1">
              {c.hero.headline}
            </h1>

            <p className="text-xl sm:text-2xl text-[#009bd7] dark:text-[#00E1FF] font-semibold mb-6">
              {c.hero.subhead}
            </p>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
              {c.hero.body}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#009bd7]/25 hover:scale-105"
              >
                Talk to SKAL
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/scale"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#009bd7] dark:border-[#00E1FF] text-[#009bd7] dark:text-[#00E1FF] font-bold rounded-2xl transition-all duration-300 hover:bg-[#009bd7] hover:text-white dark:hover:bg-[#00E1FF] dark:hover:text-[#0f172a]"
              >
                See SKAL Scale
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* When to pick which */}
      <section className="py-14 lg:py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] dark:text-white mb-12 leading-snug pb-1 text-center">
              When to pick each.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-gradient-to-br from-[#009bd7]/5 to-[#00E1FF]/5 dark:from-[#009bd7]/10 dark:to-[#00E1FF]/10 rounded-3xl p-8 border-2 border-[#009bd7]/30 dark:border-[#00E1FF]/30">
                <div className="text-sm font-bold tracking-widest text-[#009bd7] dark:text-[#00E1FF] mb-3">PICK SKAL WHEN</div>
                <h3 className="text-2xl font-bold text-[#0f172a] dark:text-white mb-6">SKAL fits your situation</h3>
                <ul className="space-y-3">
                  {c.whenToPick.skal.map((reason) => (
                    <li key={reason} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#009bd7] dark:text-[#00E1FF] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 dark:bg-gray-900/60 rounded-3xl p-8 border border-gray-200/60 dark:border-gray-700/60">
                <div className="text-sm font-bold tracking-widest text-gray-600 dark:text-gray-400 mb-3">PICK {c.competitor.toUpperCase()} WHEN</div>
                <h3 className="text-2xl font-bold text-[#0f172a] dark:text-white mb-6">{c.competitor} fits your situation</h3>
                <ul className="space-y-3">
                  {c.whenToPick.competitor.map((reason) => (
                    <li key={reason} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-side table */}
      <section className="py-14 lg:py-20 bg-[#f8faff] dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] dark:text-white mb-10 leading-snug pb-1 text-center">
              Side by side.
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200/60 dark:border-gray-700/60 overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white">
                    <th className="px-6 py-4 text-left font-bold">Feature</th>
                    <th className="px-6 py-4 text-left font-bold">SKAL Scale</th>
                    <th className="px-6 py-4 text-left font-bold">{c.competitor}</th>
                  </tr>
                </thead>
                <tbody>
                  {c.table.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={i % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-slate-50 dark:bg-gray-900/40'}
                    >
                      <td className="px-6 py-4 font-semibold text-[#0f172a] dark:text-white">{row.feature}</td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{row.skal}</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{row.competitor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Honest take */}
      <section className="py-14 lg:py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-[#0f172a] to-[#0c2d4a] rounded-3xl p-10 sm:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#009bd7]/20 to-transparent rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="text-xs font-bold tracking-widest text-[#00E1FF] mb-4">THE HONEST TAKE</div>
                <p className="text-xl sm:text-2xl text-white leading-relaxed">{c.honestTake}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 lg:py-20 bg-[#f8faff] dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] dark:text-white mb-10 leading-snug pb-1 text-center">
              Questions teams ask before switching.
            </h2>
            <div className="space-y-6">
              {c.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200/60 dark:border-gray-700/60 shadow-sm"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-[#0f172a] dark:text-white pr-4">{faq.q}</h3>
                    <span className="text-[#009bd7] dark:text-[#00E1FF] text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
