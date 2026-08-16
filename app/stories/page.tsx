import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';
import { getAllStories } from '@/lib/stories';
import NewsletterSignup from '../components/NewsletterSignup';

export default function StoriesPage() {
  const stories = getAllStories();
  const featured = stories.find((s) => s.featured) ?? stories[0];
  const rest = stories.filter((s) => s.slug !== featured?.slug);

  return (
    <main className="min-h-screen bg-paper">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-10 lg:pb-14">
        <div className="shell">
          <div className="mb-6">
            <span className="t-label">STORIES</span>
          </div>

          <h1 className="font-display t-hero text-ink mb-6 max-w-[17ch]">
            Field notes from the{' '}
            <span className="accent">
              build floor.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-ink-2 max-w-[54ch] leading-relaxed">
            Essays, playbooks, and case studies on building AI systems that actually ship, and the
            decisions that separate the ones that make it from the ones that don&apos;t.
          </p>
        </div>
      </section>

      {/* Featured + index */}
      <section className="band bg-surface">
        <div className="shell">
          {featured && (
            <Link href={`/stories/${featured.slug}`} className="block group">
              <article className="bg-band text-band-ink p-10 sm:p-14 lg:p-16">
                <div className="flex items-baseline justify-between gap-6 flex-wrap border-b border-band-rule pb-4">
                  <span className="t-label !text-band-ink">Featured · {featured.tag}</span>
                  <span className="t-label !text-band-2">{featured.readTime} read</span>
                </div>

                <h2 className="font-display t-h2 !text-band-ink mt-8 max-w-[20ch] group-hover:text-band-accent transition-colors">
                  {featured.title}
                </h2>

                <p className="mt-5 text-[0.9375rem] leading-relaxed text-band-2 max-w-[58ch]">
                  {featured.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 mt-8 font-mono text-[11px] uppercase tracking-[0.14em] !text-band-ink group-hover:text-band-accent transition-colors">
                  Read story
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
                </span>
              </article>
            </Link>
          )}

          <ul className="mt-16 lg:mt-20 border-t border-rule">
            {rest.map((story) => (
              <li key={story.slug} className="border-b border-rule">
                <Link
                  href={`/stories/${story.slug}`}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-y-4 lg:gap-x-8 py-9 transition-colors duration-200 hover:bg-paper"
                >
                  <div className="lg:col-span-3">
                    <div className="t-label">{story.tag}</div>
                    <div className="t-label mt-1.5">{story.readTime} read</div>
                  </div>

                  <div className="lg:col-span-7">
                    <h3 className="font-display t-h3 text-ink group-hover:text-signal transition-colors max-w-[36ch]">
                      {story.title}
                    </h3>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-2 max-w-[58ch]">
                      {story.excerpt}
                    </p>
                  </div>

                  <div className="lg:col-span-2 lg:text-right">
                    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink group-hover:text-signal transition-colors">
                      Read
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Subscribe / Stay updated */}
      <section className="band">
        <div className="shell">
          <div className="max-w-[54ch]">
            <h2 className="font-display t-h2 text-ink mb-5 max-w-[18ch]">
              First to read, first to build.
            </h2>
            <p className="text-lg text-ink-2 mb-10">
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
