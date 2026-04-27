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
