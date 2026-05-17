import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingThemeToggle from '../../components/FloatingThemeToggle';
import { getAllStorySlugs, getStoryBySlug } from '@/lib/stories';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return getAllStorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return {};
  return {
    title: `${story.title} | SKAL Stories`,
    description: story.excerpt,
    alternates: { canonical: `https://skal.ai/stories/${slug}` },
    openGraph: {
      title: story.title,
      description: story.excerpt,
      type: 'article',
      url: `https://skal.ai/stories/${slug}`,
      publishedTime: story.publishedDate,
      authors: ['SKAL'],
      tags: [story.tag],
    },
    twitter: {
      card: 'summary_large_image',
      title: story.title,
      description: story.excerpt,
    },
  };
}

const accentChip: Record<string, string> = {
  blue: 'bg-[#009bd7]/10 dark:bg-[#009bd7]/20 text-[#009bd7] dark:text-[#00E1FF] border-[#009bd7]/20 dark:border-[#00E1FF]/30',
  cyan: 'bg-[#00E1FF]/10 dark:bg-[#00E1FF]/20 text-[#009bd7] dark:text-[#00E1FF] border-[#00E1FF]/25 dark:border-[#00E1FF]/30',
  teal: 'bg-[#1DB5C5]/10 dark:bg-[#1DB5C5]/20 text-[#1DB5C5] dark:text-[#1DB5C5] border-[#1DB5C5]/25 dark:border-[#1DB5C5]/30',
};

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();

  const formattedDate = new Date(story.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const relatedProductBySlug: Record<string, { href: string; label: string; pitch: string }> = {
    'hidden-cost-of-agent-sprawl': {
      href: '/systems',
      label: 'SKAL Systems',
      pitch: 'Stop deploying disconnected agents. SKAL Systems gives you operational AI infrastructure built around your business, with shared context across every customer interaction.',
    },
    'why-most-ai-pilots-fail': {
      href: '/services',
      label: 'SKAL Services',
      pitch: 'Most pilots stall because nobody builds the production infrastructure. SKAL Services scopes the gap before you start and ships systems built around how your business actually operates.',
    },
    'from-balance-sheet-to-build-plan': {
      href: '/services',
      label: 'SKAL Services',
      pitch: 'Map the bottleneck on your P&L to a concrete build plan. SKAL Services designs and deploys the internal AI tooling that removes operational drag from your numbers.',
    },
    'hiring-the-top-five-percent': {
      href: '/staffing',
      label: 'SKAL Staffing',
      pitch: 'Skip the hiring loops. SKAL Staffing embeds pre-vetted, AI-native operators directly into your workflow. Shipping production work from week one.',
    },
    'how-ai-receptionists-actually-work': {
      href: '/systems',
      label: 'SKAL Systems',
      pitch: 'The voice model is the easy part. SKAL Systems deploys AI receptionists with the knowledge, integrations, and escalation logic that actually hold up in production.',
    },
    'true-cost-of-missed-sales-call': {
      href: '/scale',
      label: 'SKAL Scale',
      pitch: 'Stop leaking pipeline to slow response. SKAL Scale runs your outbound and inbound first-response, with five-minute reply at any hour, in any timezone.',
    },
    'sdr-vs-ai-when-to-hire-when-to-deploy': {
      href: '/scale',
      label: 'SKAL Scale',
      pitch: 'The hybrid pattern most companies should run starts with AI infrastructure for the top of funnel. SKAL Scale handles outbound on pay-per-qualified-meeting pricing.',
    },
    'build-vs-buy-framework-for-b2b-ai': {
      href: '/services',
      label: 'SKAL Services',
      pitch: 'When the answer is "build," SKAL Services designs and deploys custom AI systems and internal tooling built specifically for how your business operates.',
    },
    'ai-for-dental-what-we-learned': {
      href: '/industries/dental-clinics',
      label: 'AI for Dental Clinics',
      pitch: 'The full deployment pattern for dental practices and DSOs. AI receptionists, reminders, intake, and treatment-plan follow-up, integrated with Dentrix, Eaglesoft, and Open Dental.',
    },
    'support-team-is-retention-team': {
      href: '/industries/ecommerce',
      label: 'AI for E-commerce',
      pitch: 'Cut tier-1 support cost without trading away CSAT. SKAL deploys AI support that resolves WISMO, returns, and product questions end-to-end on Shopify and Gorgias.',
    },
    'ai-engineering-hiring-loop-is-broken': {
      href: '/staffing',
      label: 'SKAL Staffing',
      pitch: 'AI-native operators embedded into your workflow. Pre-screened against the loop in this piece. Shipping production work from week one.',
    },
    'what-ai-native-actually-means': {
      href: '/staffing',
      label: 'SKAL Staffing',
      pitch: 'Hire AI-native operators or run an AI-painted operation. SKAL Staffing embeds engineers who actually work the way this piece describes.',
    },
    'architecture-of-ai-sales-system-that-books-meetings': {
      href: '/scale',
      label: 'SKAL Scale',
      pitch: 'The full seven-component architecture, run as managed infrastructure. Proprietary data, multi-channel sequencing, sub-60-second reply, pay per qualified meeting.',
    },
    'pay-per-meeting-contract-that-aligns-ai-sales': {
      href: '/scale',
      label: 'SKAL Scale',
      pitch: 'The only AI sales product priced per qualified meeting that actually lands on your calendar. No retainer, no monthly minimum, no-shows do not count.',
    },
    'what-i-would-build-if-starting-saas-in-2026': {
      href: '/industries/saas',
      label: 'AI for B2B SaaS',
      pitch: 'The full SKAL deployment pattern for AI-native SaaS companies. Outbound, demo qualification, support, onboarding, and embedded engineering, all on one execution layer.',
    },
    'pilot-to-production-gap': {
      href: '/services',
      label: 'SKAL Services',
      pitch: 'Production discipline built in from day one. SKAL Services scopes the integration, monitoring, and operational ownership before the pilot starts, not after.',
    },
  };
  const relatedProduct = relatedProductBySlug[slug];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": story.title,
    "description": story.excerpt,
    "datePublished": story.publishedDate,
    "dateModified": story.publishedDate,
    "url": `https://skal.ai/stories/${slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://skal.ai/stories/${slug}`,
    },
    "author": {
      "@type": "Organization",
      "name": "SKAL",
      "url": "https://skal.ai",
    },
    "publisher": {
      "@id": "https://skal.ai/#organization",
    },
    "image": "https://skal.ai/skal-logo.png",
    "keywords": [story.tag, "AI systems", "operational infrastructure"],
    "articleSection": story.tag,
  };

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />

      {/* Article header */}
      <section className="pt-28 pb-8 sm:pt-32 sm:pb-10 lg:pt-36 lg:pb-12 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#009bd7] dark:text-[#00E1FF] hover:underline mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              All stories
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider border ${accentChip[story.accent] ?? accentChip.blue}`}>
                {story.tag.toUpperCase()}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                <Clock className="w-3.5 h-3.5" />
                <span>{story.readTime} read</span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">{formattedDate}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0f172a] dark:text-white leading-snug pb-1 mb-6">
              {story.title}
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {story.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 lg:py-16 relative bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {slug === 'hidden-cost-of-agent-sprawl' && <SprawlBanner />}
          {slug === 'why-most-ai-pilots-fail' && <PilotGapBanner />}
          {slug === 'from-balance-sheet-to-build-plan' && <BuildPlanBanner />}
          {slug === 'hiring-the-top-five-percent' && <VettingBanner />}
          {story.pullQuote && (
            <figure className="max-w-3xl mx-auto mb-12 relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-[#009bd7] via-[#00E1FF] to-[#1DB5C5]" aria-hidden="true" />
              <blockquote className="pl-8 sm:pl-10">
                <p className="text-2xl sm:text-3xl font-semibold italic text-[#0f172a] dark:text-white leading-snug">
                  {story.pullQuote}
                </p>
              </blockquote>
            </figure>
          )}
          <article className="max-w-3xl mx-auto prose prose-lg dark:prose-invert prose-headings:text-[#0f172a] dark:prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-[#009bd7] dark:prose-a:text-[#00E1FF] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#0f172a] dark:prose-strong:text-white prose-code:text-[#009bd7] dark:prose-code:text-[#00E1FF] prose-code:bg-gray-100 dark:prose-code:bg-gray-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-blockquote:border-l-[#009bd7] dark:prose-blockquote:border-l-[#00E1FF] prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{story.content}</ReactMarkdown>
          </article>

          {relatedProduct && (
            <aside className="max-w-3xl mx-auto mt-16 p-8 rounded-3xl bg-gradient-to-br from-[#009bd7]/5 to-[#00E1FF]/5 dark:from-[#009bd7]/10 dark:to-[#00E1FF]/10 border border-[#009bd7]/20 dark:border-[#00E1FF]/20">
              <div className="text-xs font-bold tracking-widest text-[#009bd7] dark:text-[#00E1FF] mb-3">RELATED</div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] dark:text-white mb-3 leading-snug">
                {relatedProduct.label}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">{relatedProduct.pitch}</p>
              <Link
                href={relatedProduct.href}
                className="inline-flex items-center gap-2 text-[#009bd7] dark:text-[#00E1FF] font-semibold hover:gap-3 transition-all duration-300"
              >
                Explore {relatedProduct.label} <ArrowRight className="w-4 h-4" />
              </Link>
            </aside>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 lg:py-20 relative bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] dark:text-white mb-4 leading-snug pb-1">
              Working on something like this?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
              Tell us what you are stuck on. We will tell you what it takes to ship it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#009bd7]/25 hover:scale-105"
              >
                Talk to the team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/stories"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#009bd7] dark:border-[#00E1FF] text-[#009bd7] dark:text-[#00E1FF] font-bold rounded-2xl transition-all duration-300 hover:bg-[#009bd7] hover:text-white dark:hover:bg-[#00E1FF] dark:hover:text-[#0f172a]"
              >
                More stories
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}

function SprawlBanner() {
  return (
    <div className="max-w-3xl mx-auto mb-10 relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#0c2d4a] border border-gray-700/40 shadow-xl">
      <svg
        viewBox="0 0 800 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="block w-full h-auto"
      >
        <defs>
          <radialGradient id="sb-glow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#00E1FF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#00E1FF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="sb-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E1FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1DB5C5" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="sb-active" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="60%" stopColor="#00E1FF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#00E1FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient glow */}
        <ellipse cx="400" cy="100" rx="360" ry="120" fill="url(#sb-glow)" />

        {/* Faint dotted connections — partial, suggesting a system that doesn't quite exist */}
        <g stroke="url(#sb-line)" strokeWidth="1" strokeDasharray="2 4" fill="none" opacity="0.55">
          <line x1="80" y1="60" x2="160" y2="115" />
          <line x1="160" y1="115" x2="260" y2="80" />
          <line x1="260" y1="80" x2="360" y2="120" />
          <line x1="430" y1="65" x2="520" y2="105" />
          <line x1="520" y1="105" x2="610" y2="75" />
          <line x1="610" y1="75" x2="700" y2="120" />
        </g>

        {/* Connected nodes */}
        <g fill="#00E1FF">
          <circle cx="80" cy="60" r="4" opacity="0.7" />
          <circle cx="160" cy="115" r="5" opacity="0.85" />
          <circle cx="260" cy="80" r="4" opacity="0.75" />
          <circle cx="360" cy="120" r="5" opacity="0.8" />
          <circle cx="430" cy="65" r="4" opacity="0.7" />
          <circle cx="520" cy="105" r="5" opacity="0.85" />
          <circle cx="610" cy="75" r="4" opacity="0.75" />
          <circle cx="700" cy="120" r="5" opacity="0.8" />
        </g>

        {/* Two "active" nodes pulsing — the agents you actually trust */}
        <g>
          <circle cx="260" cy="80" r="9" fill="url(#sb-active)">
            <animate attributeName="opacity" values="0.4;0.95;0.4" dur="2.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="520" cy="105" r="9" fill="url(#sb-active)">
            <animate attributeName="opacity" values="0.4;0.95;0.4" dur="2.8s" begin="-1.4s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Orphan nodes — not connected to anything, just floating */}
        <g fill="#1DB5C5" opacity="0.45">
          <circle cx="120" cy="155" r="3" />
          <circle cx="340" cy="40" r="3" />
          <circle cx="470" cy="155" r="3" />
          <circle cx="660" cy="155" r="3" />
          <circle cx="180" cy="35" r="2.5" />
          <circle cx="580" cy="40" r="2.5" />
          <circle cx="740" cy="55" r="2.5" />
        </g>

        {/* A few extra dim dots — "agents nobody remembers" */}
        <g fill="#94a3b8" opacity="0.2">
          <circle cx="40" cy="100" r="2" />
          <circle cx="220" cy="170" r="2" />
          <circle cx="400" cy="180" r="2" />
          <circle cx="640" cy="35" r="2" />
          <circle cx="770" cy="170" r="2" />
        </g>
      </svg>

      {/* Caption strip */}
      <div className="absolute left-4 bottom-3 sm:left-6 sm:bottom-4 text-[10px] sm:text-xs font-bold tracking-[0.18em] text-[#00E1FF]/80">
        AGENTS, MOSTLY UNCONNECTED
      </div>
    </div>
  );
}

function PilotGapBanner() {
  return (
    <div className="max-w-3xl mx-auto mb-10 relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#0c2d4a] border border-gray-700/40 shadow-xl">
      <svg
        viewBox="0 0 800 220"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="block w-full h-auto"
      >
        <defs>
          <radialGradient id="pf-glow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#00E1FF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#00E1FF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="pf-stall" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E1FF" stopOpacity="0.85" />
            <stop offset="55%" stopColor="#00E1FF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="pf-success" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E1FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1DB5C5" stopOpacity="1" />
          </linearGradient>
          <radialGradient id="pf-active" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="60%" stopColor="#1DB5C5" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#1DB5C5" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient glow over the gap */}
        <ellipse cx="400" cy="110" rx="360" ry="120" fill="url(#pf-glow)" />

        {/* Faint vertical "the gap" dividers */}
        <g stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="2 6" opacity="0.25">
          <line x1="240" y1="20" x2="240" y2="200" />
          <line x1="560" y1="20" x2="560" y2="200" />
        </g>
        <text x="400" y="40" fill="#94a3b8" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="3" textAnchor="middle" opacity="0.55">THE GAP</text>

        {/* Demo platform (left, lower) */}
        <line x1="40" y1="170" x2="220" y2="170" stroke="#00E1FF" strokeWidth="2" opacity="0.7" />
        <text x="50" y="190" fill="#00E1FF" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2" opacity="0.85">DEMO</text>

        {/* Production platform (right, higher = shipped) */}
        <line x1="580" y1="130" x2="760" y2="130" stroke="#1DB5C5" strokeWidth="2" opacity="0.95" />
        <text x="650" y="150" fill="#1DB5C5" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2" opacity="0.95">PRODUCTION</text>

        {/* Pilot trails — most stall in the gap */}
        <g fill="none">
          {/* Stall: confident arc that loses energy mid-gap */}
          <path d="M 130 170 Q 240 80 380 130" stroke="url(#pf-stall)" strokeWidth="1.6" strokeDasharray="3 3" />
          {/* Stall: high arc that crashes back toward the demo side */}
          <path d="M 160 170 Q 280 60 420 120" stroke="url(#pf-stall)" strokeWidth="1.6" strokeDasharray="3 3" />
          {/* Stall: short hop that drops back to the demo level */}
          <path d="M 100 170 Q 200 140 320 170" stroke="url(#pf-stall)" strokeWidth="1.6" strokeDasharray="3 3" />
          {/* Stall: ambitious arc that dies past the midpoint */}
          <path d="M 180 170 Q 360 50 480 130" stroke="url(#pf-stall)" strokeWidth="1.6" strokeDasharray="3 3" />
          {/* Success: smooth curve all the way to the production platform */}
          <path d="M 200 170 Q 400 60 600 130" stroke="url(#pf-success)" strokeWidth="2.6" />
        </g>

        {/* Cluster of pilot dots leaving demo */}
        <g fill="#00E1FF">
          <circle cx="100" cy="170" r="3" opacity="0.7" />
          <circle cx="130" cy="170" r="3" opacity="0.8" />
          <circle cx="160" cy="170" r="3" opacity="0.8" />
          <circle cx="180" cy="170" r="3" opacity="0.7" />
          <circle cx="200" cy="170" r="4" opacity="0.95" />
        </g>

        {/* Stalled-pilot tombstones — faint dots where each stall died */}
        <g fill="#94a3b8" opacity="0.45">
          <circle cx="380" cy="130" r="2.5" />
          <circle cx="420" cy="120" r="2.5" />
          <circle cx="320" cy="170" r="2.5" />
          <circle cx="480" cy="130" r="2.5" />
        </g>

        {/* The one that landed — pulses on the production platform */}
        <circle cx="600" cy="130" r="11" fill="url(#pf-active)">
          <animate attributeName="opacity" values="0.4;0.95;0.4" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="600" cy="130" r="4" fill="#FFFFFF" opacity="0.95" />
      </svg>
    </div>
  );
}

function BuildPlanBanner() {
  return (
    <div className="max-w-3xl mx-auto mb-10 relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#0c2d4a] border border-gray-700/40 shadow-xl">
      <svg
        viewBox="0 0 800 220"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="block w-full h-auto"
      >
        <defs>
          <radialGradient id="bp-glow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#1DB5C5" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#1DB5C5" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="bp-lens" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#00E1FF" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#00E1FF" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="bp-build" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E1FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#1DB5C5" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Ambient glow */}
        <ellipse cx="400" cy="110" rx="380" ry="120" fill="url(#bp-glow)" />

        {/* Section labels */}
        <text x="40" y="22" fill="#94a3b8" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2.5" opacity="0.7">P&amp;L</text>
        <text x="380" y="22" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2.5" opacity="0.85">DIAGNOSTIC</text>
        <text x="510" y="22" fill="#1DB5C5" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2.5" opacity="0.95">BUILD PLAN</text>

        {/* Left: P&L noise — many faint horizontal lines suggesting line items */}
        <g stroke="#94a3b8" strokeOpacity="0.5" strokeWidth="1.2">
          <line x1="40" y1="55" x2="220" y2="55" />
          <line x1="40" y1="73" x2="200" y2="73" />
          <line x1="40" y1="91" x2="240" y2="91" />
          <line x1="40" y1="109" x2="180" y2="109" />
          <line x1="40" y1="127" x2="220" y2="127" />
          <line x1="40" y1="145" x2="160" y2="145" />
          <line x1="40" y1="163" x2="220" y2="163" />
          <line x1="40" y1="181" x2="200" y2="181" />
        </g>

        {/* Constraint markers — bright dots on a couple of P&L lines */}
        <g fill="#1DB5C5" opacity="0.95">
          <circle cx="180" cy="91" r="3.5" />
          <circle cx="160" cy="145" r="3.5" />
        </g>

        {/* Diagnostic lens — chevron narrowing the input */}
        <path d="M 280 35 L 480 110 L 280 185 Z" fill="url(#bp-lens)" stroke="#00E1FF" strokeOpacity="0.55" strokeWidth="1.5" />

        {/* Faint convergence lines from the P&L into the lens tip */}
        <g stroke="#94a3b8" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="2 4" fill="none">
          <line x1="220" y1="55" x2="478" y2="110" />
          <line x1="240" y1="91" x2="478" y2="110" />
          <line x1="220" y1="127" x2="478" y2="110" />
          <line x1="220" y1="163" x2="478" y2="110" />
        </g>

        {/* Right: focused builds — three bright lines exiting the lens */}
        <g>
          <line x1="510" y1="80" x2="730" y2="80" stroke="url(#bp-build)" strokeWidth="2.6" />
          <circle cx="510" cy="80" r="5" fill="#00E1FF" />
          <line x1="510" y1="115" x2="710" y2="115" stroke="url(#bp-build)" strokeWidth="2.6" />
          <circle cx="510" cy="115" r="5" fill="#00E1FF">
            <animate attributeName="opacity" values="0.55;1;0.55" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <line x1="510" y1="150" x2="720" y2="150" stroke="url(#bp-build)" strokeWidth="2.6" />
          <circle cx="510" cy="150" r="5" fill="#00E1FF" />
        </g>
      </svg>
    </div>
  );
}

function VettingBanner() {
  return (
    <div className="max-w-3xl mx-auto mb-10 relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#0c2d4a] border border-gray-700/40 shadow-xl">
      <svg
        viewBox="0 0 800 220"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="block w-full h-auto"
      >
        <defs>
          <radialGradient id="vt-glow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#00E1FF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#00E1FF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="vt-active" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="60%" stopColor="#1DB5C5" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1DB5C5" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient glow */}
        <ellipse cx="400" cy="115" rx="380" ry="120" fill="url(#vt-glow)" />

        {/* Stage labels at the top */}
        <text x="105" y="22" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2.5" opacity="0.7">CANDIDATES</text>
        <text x="290" y="22" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2.5" opacity="0.85">FRAMING</text>
        <text x="450" y="22" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2.5" opacity="0.85">JUDGMENT</text>
        <text x="595" y="22" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2.5" opacity="0.85">FAILURE</text>
        <text x="755" y="22" textAnchor="end" fill="#1DB5C5" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2.5" opacity="0.95">TOP 5%</text>

        {/* Vertical filter gates */}
        <g stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.4">
          <line x1="210" y1="40" x2="210" y2="200" />
          <line x1="370" y1="40" x2="370" y2="200" />
          <line x1="530" y1="40" x2="530" y2="200" />
          <line x1="680" y1="40" x2="680" y2="200" />
        </g>

        {/* Initial candidate pool — ~15 dim dots */}
        <g fill="#94a3b8" opacity="0.55">
          <circle cx="55" cy="65" r="3" />
          <circle cx="80" cy="100" r="3" />
          <circle cx="60" cy="135" r="3" />
          <circle cx="100" cy="55" r="3" />
          <circle cx="125" cy="85" r="3" />
          <circle cx="150" cy="65" r="3" />
          <circle cx="135" cy="120" r="3" />
          <circle cx="170" cy="100" r="3" />
          <circle cx="180" cy="155" r="3" />
          <circle cx="105" cy="155" r="3" />
          <circle cx="40" cy="170" r="3" />
          <circle cx="70" cy="180" r="3" />
          <circle cx="155" cy="180" r="3" />
          <circle cx="155" cy="40" r="3" />
          <circle cx="190" cy="135" r="3" />
        </g>

        {/* After framing gate — ~8 dots, brighter cyan */}
        <g fill="#00E1FF" opacity="0.7">
          <circle cx="240" cy="80" r="3.5" />
          <circle cx="280" cy="105" r="3.5" />
          <circle cx="265" cy="140" r="3.5" />
          <circle cx="310" cy="75" r="3.5" />
          <circle cx="335" cy="115" r="3.5" />
          <circle cx="240" cy="160" r="3.5" />
          <circle cx="305" cy="155" r="3.5" />
          <circle cx="345" cy="170" r="3.5" />
        </g>

        {/* After judgment gate — ~5 dots, brighter still */}
        <g fill="#00E1FF" opacity="0.9">
          <circle cx="395" cy="95" r="4" />
          <circle cx="430" cy="115" r="4" />
          <circle cx="465" cy="100" r="4" />
          <circle cx="495" cy="130" r="4" />
          <circle cx="425" cy="155" r="4" />
        </g>

        {/* After failure gate — 2 dots, brightest teal */}
        <g fill="#1DB5C5" opacity="0.95">
          <circle cx="565" cy="100" r="4.5" />
          <circle cx="615" cy="130" r="4.5" />
        </g>

        {/* Faint trails connecting one path through every gate */}
        <g stroke="#1DB5C5" strokeWidth="1" strokeDasharray="2 4" fill="none" opacity="0.45">
          <line x1="125" y1="85" x2="240" y2="80" />
          <line x1="240" y1="80" x2="395" y2="95" />
          <line x1="395" y1="95" x2="565" y2="100" />
          <line x1="565" y1="100" x2="730" y2="115" />
        </g>

        {/* The top 5% output — single pulsing dot on the right */}
        <circle cx="730" cy="115" r="11" fill="url(#vt-active)">
          <animate attributeName="opacity" values="0.4;0.95;0.4" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="730" cy="115" r="4" fill="#FFFFFF" opacity="0.95" />
      </svg>
    </div>
  );
}
