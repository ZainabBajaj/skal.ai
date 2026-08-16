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
    <main className="min-h-screen bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-10 lg:pb-14">
        <div className="shell">
          <div className="">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-signal hover:underline mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              All industries
            </Link>

            <div className="mb-6">
              <Building2 className="w-4 h-4 text-signal" />
              <span className="t-label">{industry.hero.eyebrow}</span>
            </div>

            <h1 className="font-display t-hero text-ink max-w-[16ch]">
              {industry.hero.headline}
            </h1>

            <p className="text-xl sm:text-2xl text-signal font-semibold mb-6">
              {industry.hero.subhead}
            </p>

            <p className="text-lg sm:text-xl text-ink-2 leading-relaxed mb-10">
              {industry.hero.body}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="btn btn-solid group"
              >
                Talk to us about {industry.shortName}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottleneck */}
      <section className="band bg-surface">
        <div className="shell">
          <div className="">
            <h2 className="font-display t-h2 text-ink mb-6 max-w-[18ch]">
              {industry.bottleneck.title}
            </h2>
            <p className="text-lg text-ink-2 leading-relaxed">
              {industry.bottleneck.body}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 lg:py-14 bg-paper">
        <div className="shell">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {industry.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display t-h2 text-signal mb-2">{s.value}</div>
                <div className="text-sm text-ink-2 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="band bg-surface">
        <div className="shell">
          <div className="">
            <div className="mb-12">
              <h2 className="font-display t-h2 text-ink mb-5 max-w-[18ch]">
                What we deploy in {industry.shortName}.
              </h2>
              <p className="t-lead max-w-[52ch]">
                Start with the highest-leverage workflow. Layer in the others when the first one is paying for itself.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {industry.useCases.map((uc) => (
                <div
                  key={uc.title}
                  className="group border border-rule bg-surface p-8 transition-colors duration-200 hover:border-ink"
                >
                  <div className="text-xs font-bold tracking-widest text-signal mb-3">
                    <Link href={uc.productHref} className="hover:underline">{uc.productLabel}</Link>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-ink mb-3 leading-snug">
                    {uc.title}
                  </h3>
                  <p className="text-ink-2 leading-relaxed mb-6 flex-1">{uc.body}</p>
                  <Link
                    href={uc.productHref}
                    className="inline-flex items-center gap-2 text-signal font-semibold group-hover:gap-3 transition-all duration-300"
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
      <section className="py-12 lg:py-14 bg-paper">
        <div className="shell">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-4 leading-snug pb-1">
              Plugs into the tools you already use.
            </h2>
            <p className="text-ink-2 mb-8 max-w-[54ch]">
              We work inside your stack, not on top of a replacement.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {industry.integrations.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-rule text-sm font-medium text-ink-2 shadow-sm"
                >
                  <Check className="w-3.5 h-3.5 text-signal" />
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="band bg-surface">
        <div className="shell">
          <div className="max-w-[58ch]">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-10 leading-snug pb-1 text-center">
              Common questions from {industry.shortName} teams.
            </h2>
            <div className="space-y-6">
              {industry.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group border border-rule bg-surface p-8 transition-colors duration-200 hover:border-ink"
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
