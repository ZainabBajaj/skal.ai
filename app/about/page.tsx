'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-paper">
      <Navbar />

      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="pt-28 lg:pt-36 pb-12 lg:pb-16">
        <div className="shell">
          <div className="spec rise" style={{ animationDelay: '40ms' }}>
            <span className="t-label t-label--ink">Founder&apos;s story</span>
            <span className="t-label">SKAL</span>
          </div>

          <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-start">
            <div className="lg:col-span-7 rise" style={{ animationDelay: '120ms' }}>
              <h1 className="font-display t-hero text-ink max-w-[13ch]">
                Practitioners, not{' '}
                <span className="accent">generalists.</span>
              </h1>

              <p className="t-lead mt-8 max-w-[48ch]">
                SKAL exists because businesses that want AI systems do not know
                how to build them, and teams that can build them do not
                understand business well enough to build them right. We sit at
                that intersection.
              </p>

              <dl className="mt-12 border-t border-rule">
                {[
                  ['Founded', '2024'],
                  ['Building AI in production', 'Five years'],
                  ['Offices', 'Florida · Ajman · Lahore'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-6 py-3.5 border-b border-rule">
                    <dt className="t-label">{k}</dt>
                    <dd className="t-label t-label--ink text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Portrait as an editorial plate: hairline, no glow, mono caption. */}
            <figure className="lg:col-span-5 rise" style={{ animationDelay: '200ms' }}>
              <div className="border border-rule bg-surface p-2">
                <Image
                  src="/founder.jpg"
                  alt="Portrait of the SKAL founder"
                  width={900}
                  height={1200}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="t-label mt-4">
                Founder, SKAL
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* The story — set at a reading measure                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="band bg-surface">
        <div className="shell">
          <div className="spec">
            <span className="t-label t-label--ink">How it started</span>
            <span className="t-label">A thread pulled since ten</span>
          </div>

        <div className="mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 lg:gap-x-12">
          {/* The one place on the site where numbering is honest: this is a
              chronology, so the order carries information. */}
          <aside className="hidden lg:block lg:col-span-3">
            <ol className="sticky top-28 border-t border-rule">
              {[
                ['Age ten', 'A pop-up fry stall'],
                ['O levels', 'Business, then technology'],
                ['LSE', 'Data Science and Business Analytics'],
                ['NUS', 'Course author'],
                ['Now', 'SKAL'],
              ].map(([when, what]) => (
                <li key={when} className="py-3.5 border-b border-rule">
                  <div className="t-label t-label--ink">{when}</div>
                  <div className="t-label mt-1">{what}</div>
                </li>
              ))}
            </ol>
          </aside>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="font-display text-[clamp(1.5rem,3vw,2.15rem)] leading-[1.2] text-ink">
              My first business was a pop-up fry stall. I was ten.
            </p>

            <div className="t-read mt-10">
              <p>
                While other kids were eating, I was thinking about ingredients,
                margins, and foot traffic.
              </p>

              <p>
                The stall was the start of a habit. By my teens I had spent real
                time inside spinning mills, FMCG lines, and banquet halls, close
                enough to see exactly where each one made money and where it
                lost it. Reading a balance sheet came early. Business was never
                something I studied. It was something I was already doing.
              </p>

              <p>
                In O levels, I wanted to know where my brain naturally went, so I
                started tracking my thoughts. Business was at the top. But right
                next to it was something else: technology. Not for its own sake,
                but for what it could do inside a business. The idea that you
                could build systems that take over repetitive work, so you can
                focus on the parts that actually matter, felt like the closest
                thing to magic.
              </p>

              <p>
                I went after it seriously. I graduated with one of the highest
                marks in the world in{' '}
                <strong>Data Science and Business Analytics</strong>, earning a{' '}
                <strong>London School of Economics Letter of Commendation</strong>.
                I designed a course,{' '}
                <em className="italic text-ink font-medium">
                  Transforming Organisations with Data Storytelling
                </em>
                , which is delivered at the National University of Singapore.
                Data has always felt intuitive to me. I usually see the story
                before I run the numbers.
              </p>

              <p>
                When AI agents arrived, it felt like the natural end of a thread
                I had been pulling since I was ten. For the first time, systems
                could actually operate inside real businesses. Not just tools,
                but infrastructure that does work in the background. Work that
                continues without friction. Operations that stay consistent as
                you scale. Processes that support teams instead of slowing them
                down.
              </p>
            </div>

            {/* The claim, set in the claim voice, on a rule. No tinted card. */}
            <blockquote className="mt-14 pt-8 border-t border-rule">
              <p className="font-display text-[clamp(1.5rem,3vw,2.15rem)] leading-[1.2] text-ink">
                That is what we build at SKAL. Not experiments. Not demos.{' '}
                <span className="accent">
                  Systems that run inside real businesses.
                </span>
              </p>
            </blockquote>

            <div className="t-read mt-14">
              <p>
                We have offices in the United States, the UAE, and Pakistan, and
                a growing team of engineers and AI specialists who think the same
                way.
              </p>
              <p>
                <strong>
                  We are not generalists who discovered AI last year. We are
                  practitioners who have been building toward this for a long
                  time.
                </strong>
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CTA                                                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="band">
        <div className="shell">
          <div className="spec">
            <span className="t-label t-label--ink">Start a conversation</span>
            <span className="t-label">No pitch decks</span>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-end">
            <h2 className="lg:col-span-7 font-display t-h2 text-ink max-w-[16ch]">
              Want to see what practitioners build?
            </h2>

            <div className="lg:col-span-5">
              <p className="text-[0.9375rem] leading-relaxed text-ink-2 max-w-[42ch]">
                A discovery call, not a pitch. We spend it understanding the
                shape of your problem and telling you plainly whether we are the
                right people for it.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/book" className="btn btn-solid group">
                  Book a discovery call
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
                </Link>
                <Link href="/systems" className="btn btn-line">
                  Explore what we build
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
