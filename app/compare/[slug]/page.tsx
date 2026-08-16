import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
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
    <main className="min-h-screen bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-10 lg:pb-14">
        <div className="shell">
          <div className="">
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 text-sm font-semibold text-signal hover:underline mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              All comparisons
            </Link>

            <div className="mb-6">
              <span className="t-label">{c.category.toUpperCase()}</span>
            </div>

            <h1 className="font-display t-hero text-ink max-w-[16ch]">
              {c.hero.headline}
            </h1>

            <p className="text-xl sm:text-2xl text-signal font-semibold mb-6">
              {c.hero.subhead}
            </p>

            <p className="text-lg sm:text-xl text-ink-2 leading-relaxed mb-10">
              {c.hero.body}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="btn btn-solid group"
              >
                Talk to SKAL
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/sky"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-signal dark:border-[#00E1FF] text-signal font-bold rounded-none transition-all duration-300 hover:bg-[#009bd7] hover:text-white dark:hover:bg-[#00E1FF] dark:hover:text-[#0f172a]"
              >
                See SKAL Sky
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* When to pick which */}
      <section className="band bg-surface">
        <div className="shell">
          <div className="">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-12 leading-snug pb-1 text-center">
              When to pick each.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="border border-rule bg-surface p-8 border-2 border-signal/30 dark:border-[#00E1FF]/30">
                <div className="text-sm font-bold tracking-widest text-signal mb-3">PICK SKAL WHEN</div>
                <h3 className="text-2xl font-bold text-ink mb-6">SKAL fits your situation</h3>
                <ul className="space-y-3">
                  {c.whenToPick.skal.map((reason) => (
                    <li key={reason} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-signal mt-0.5 flex-shrink-0" />
                      <span className="text-ink-2 leading-relaxed">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-paper p-8 border border-rule">
                <div className="text-sm font-bold tracking-widest text-ink-2 mb-3">PICK {c.competitor.toUpperCase()} WHEN</div>
                <h3 className="text-2xl font-bold text-ink mb-6">{c.competitor} fits your situation</h3>
                <ul className="space-y-3">
                  {c.whenToPick.competitor.map((reason) => (
                    <li key={reason} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-ink-3 mt-0.5 flex-shrink-0" />
                      <span className="text-ink-2 leading-relaxed">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-side table */}
      <section className="py-14 lg:py-20 bg-paper">
        <div className="shell">
          <div className="">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-10 leading-snug pb-1 text-center">
              Side by side.
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-surface rounded-none shadow-lg border border-rule overflow-hidden">
                <thead>
                  <tr className="bg-band text-band-ink">
                    <th className="px-6 py-4 text-left font-bold">Feature</th>
                    <th className="px-6 py-4 text-left font-bold">SKAL Sky</th>
                    <th className="px-6 py-4 text-left font-bold">{c.competitor}</th>
                  </tr>
                </thead>
                <tbody>
                  {c.table.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={i % 2 === 0 ? 'bg-surface' : 'bg-paper'}
                    >
                      <td className="px-6 py-4 font-semibold text-ink">{row.feature}</td>
                      <td className="px-6 py-4 text-ink-2">{row.skal}</td>
                      <td className="px-6 py-4 text-ink-2">{row.competitor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Honest take */}
      <section className="band bg-surface">
        <div className="shell">
          <div className="max-w-[58ch]">
            <div className="bg-band text-band-ink p-10 sm:p-12">
              <div className="relative z-10">
                <div className="text-xs font-bold tracking-widest text-signal mb-4">THE HONEST TAKE</div>
                <p className="text-xl sm:text-2xl text-white leading-relaxed">{c.honestTake}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 lg:py-20 bg-paper">
        <div className="shell">
          <div className="max-w-[58ch]">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-10 leading-snug pb-1 text-center">
              Questions teams ask before switching.
            </h2>
            <div className="space-y-6">
              {c.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-surface rounded-none p-6 border border-rule shadow-sm"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-ink pr-4">{faq.q}</h3>
                    <span className="text-signal text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-ink-2 leading-relaxed">{faq.a}</p>
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
