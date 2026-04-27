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
    openGraph: {
      title: story.title,
      description: story.excerpt,
      type: 'article',
      publishedTime: story.publishedDate,
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

  return (
    <main className="relative min-h-screen">
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
