import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowLeft, Check, Building2 } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingThemeToggle from '../../components/FloatingThemeToggle';
import ContactForm from '../../components/ContactForm';
import { getAllIndustrySlugs, getIndustryBySlug } from '@/lib/industries';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  const title = `AI systems for ${industry.name} | SKAL`;
  const description = industry.hero.body;
  const url = `https://skal.ai/industries/${slug}`;
  return {
    title,
    description,
    keywords: [
      `AI for ${industry.shortName}`,
      `${industry.shortName} automation`,
      `AI receptionist ${industry.shortName}`,
      `${industry.shortName} AI tools`,
      'operational AI',
    ],
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "url": `https://skal.ai/industries/${slug}`,
    "mainEntity": industry.faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `AI systems for ${industry.name}`,
    "url": `https://skal.ai/industries/${slug}`,
    "provider": { "@id": "https://skal.ai/#organization" },
    "serviceType": `AI automation for ${industry.name}`,
    "description": industry.hero.body,
    "areaServed": "Worldwide",
  };

  return (
    <main className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#009bd7] dark:text-[#00E1FF] hover:underline mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              All industries
            </Link>

            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/20 dark:to-[#00E1FF]/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-[#009bd7]/20 dark:border-[#00E1FF]/30">
              <Building2 className="w-4 h-4 text-[#009bd7] dark:text-[#00E1FF]" />
              <span className="text-[#009bd7] dark:text-[#00E1FF] text-sm font-bold tracking-wider">{industry.hero.eyebrow}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0f172a] dark:text-white mb-6 leading-snug pb-1">
              {industry.hero.headline}
            </h1>

            <p className="text-xl sm:text-2xl text-[#009bd7] dark:text-[#00E1FF] font-semibold mb-6">
              {industry.hero.subhead}
            </p>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
              {industry.hero.body}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#009bd7]/25 hover:scale-105"
              >
                Talk to us about {industry.shortName}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottleneck */}
      <section className="py-14 lg:py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] dark:text-white mb-6 leading-snug pb-1">
              {industry.bottleneck.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {industry.bottleneck.body}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 lg:py-14 bg-[#f8faff] dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {industry.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#009bd7] dark:text-[#00E1FF] mb-2">{s.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-14 lg:py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] dark:text-white mb-4 leading-snug pb-1">
                What we deploy in {industry.shortName}.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Start with the highest-leverage workflow. Layer in the others when the first one is paying for itself.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {industry.useCases.map((uc) => (
                <div
                  key={uc.title}
                  className="group relative bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-gray-900/60 dark:to-gray-800/60 rounded-3xl p-8 border border-gray-200/60 dark:border-gray-700/60 shadow-lg hover:shadow-2xl hover:shadow-[#009bd7]/10 hover:border-[#009bd7]/30 transition-all duration-300 flex flex-col"
                >
                  <div className="text-xs font-bold tracking-widest text-[#009bd7] dark:text-[#00E1FF] mb-3">
                    <Link href={uc.productHref} className="hover:underline">{uc.productLabel}</Link>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] dark:text-white mb-3 leading-snug">
                    {uc.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-1">{uc.body}</p>
                  <Link
                    href={uc.productHref}
                    className="inline-flex items-center gap-2 text-[#009bd7] dark:text-[#00E1FF] font-semibold group-hover:gap-3 transition-all duration-300"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-12 lg:py-14 bg-[#f8faff] dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] dark:text-white mb-4 leading-snug pb-1">
              Plugs into the tools you already use.
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We work inside your stack, not on top of a replacement.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {industry.integrations.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm"
                >
                  <Check className="w-3.5 h-3.5 text-[#009bd7] dark:text-[#00E1FF]" />
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 lg:py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] dark:text-white mb-10 leading-snug pb-1 text-center">
              Common questions from {industry.shortName} teams.
            </h2>
            <div className="space-y-6">
              {industry.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-gray-900/60 dark:to-gray-800/60 rounded-2xl p-6 border border-gray-200/60 dark:border-gray-700/60"
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
