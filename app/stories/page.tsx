import Link from 'next/link';
import { BookOpen, ArrowRight, Clock, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';
import { getAllStories, type StoryAccent } from '@/lib/stories';
import NewsletterSignup from '../components/NewsletterSignup';

const accentStyles: Record<StoryAccent, { chip: string; bar: string; hover: string }> = {
  blue: {
    chip: 'bg-[#009bd7]/10 dark:bg-[#009bd7]/20 text-[#009bd7] dark:text-[#00E1FF] border-[#009bd7]/20 dark:border-[#00E1FF]/30',
    bar: 'from-[#009bd7] via-[#00E1FF] to-[#009bd7]',
    hover: 'group-hover:text-[#009bd7]',
  },
  cyan: {
    chip: 'bg-[#00E1FF]/10 dark:bg-[#00E1FF]/20 text-[#009bd7] dark:text-[#00E1FF] border-[#00E1FF]/25 dark:border-[#00E1FF]/30',
    bar: 'from-[#00E1FF] via-[#1DB5C5] to-[#00E1FF]',
    hover: 'group-hover:text-[#00E1FF]',
  },
  teal: {
    chip: 'bg-[#1DB5C5]/10 dark:bg-[#1DB5C5]/20 text-[#1DB5C5] dark:text-[#1DB5C5] border-[#1DB5C5]/25 dark:border-[#1DB5C5]/30',
    bar: 'from-[#1DB5C5] via-[#009bd7] to-[#1DB5C5]',
    hover: 'group-hover:text-[#1DB5C5]',
  },
};

export default function StoriesPage() {
  const stories = getAllStories();
  const featured = stories.find((s) => s.featured) ?? stories[0];
  const rest = stories.filter((s) => s.slug !== featured?.slug);

  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/20 dark:to-[#00E1FF]/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-[#009bd7]/20 dark:border-[#00E1FF]/30">
            <BookOpen className="w-4 h-4 text-[#009bd7] dark:text-[#00E1FF]" />
            <span className="text-[#009bd7] dark:text-[#00E1FF] text-sm font-bold tracking-wider">STORIES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0f172a] dark:text-white mb-6 leading-snug pb-1">
            Field notes from the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] via-[#00E1FF] to-[#1DB5C5]">
              build floor.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Essays, playbooks, and case studies on building AI systems that actually ship, and the
            decisions that separate the ones that make it from the ones that don&apos;t.
          </p>
        </div>
      </section>

      {/* Featured + Grid */}
      <section className="py-14 lg:py-20 relative bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Featured story */}
            {featured && (
              <Link href={`/stories/${featured.slug}`} className="block group">
                <article className="relative bg-gradient-to-br from-[#0f172a] to-[#0c2d4a] rounded-3xl overflow-hidden shadow-2xl hover:shadow-[#009bd7]/20 transition-all duration-500 mb-12 cursor-pointer">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#009bd7]/25 to-transparent rounded-full blur-3xl pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#00E1FF]/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

                  <div className="relative z-10 p-10 sm:p-14 lg:p-16">
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-1.5 mb-6 border border-white/20">
                      <Sparkles className="w-3.5 h-3.5 text-[#00E1FF]" />
                      <span className="text-[#00E1FF] text-xs font-bold tracking-wider">FEATURED · {featured.tag.toUpperCase()}</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-snug max-w-3xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[#00E1FF] group-hover:to-[#009bd7] transition-all duration-500">
                      {featured.title}
                    </h2>

                    <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-8">
                      {featured.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-5 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{featured.readTime} read</span>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 text-[#00E1FF] font-semibold group-hover:translate-x-1 transition-transform">
                        Read story
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            )}

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rest.map((story) => {
                const accent = accentStyles[story.accent];
                return (
                  <Link key={story.slug} href={`/stories/${story.slug}`} className="block group">
                    <article className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden cursor-pointer h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#009bd7]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-5">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider border ${accent.chip}`}>
                            {story.tag.toUpperCase()}
                          </span>
                          <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{story.readTime}</span>
                          </div>
                        </div>

                        <h3 className={`text-xl sm:text-2xl font-bold text-[#0f172a] dark:text-white mb-3 leading-snug transition-colors duration-300 ${accent.hover}`}>
                          {story.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                          {story.excerpt}
                        </p>

                        <div className="flex items-center justify-end text-sm">
                          <span className="inline-flex items-center gap-1.5 font-semibold text-[#009bd7] dark:text-[#00E1FF] group-hover:translate-x-1 transition-transform">
                            Read
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>

                      <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${accent.bar} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`}></div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe / Stay updated */}
      <section className="py-14 lg:py-20 relative bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] dark:text-white mb-4 leading-snug pb-1">
              First to read, first to build.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
              New stories land roughly every two weeks. No marketing fluff, no filler. Just what we&apos;re
              learning on the build floor.
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
