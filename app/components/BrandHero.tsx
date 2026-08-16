"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CalendlyPopupButton from './CalendlyPopupButton';

const CALENDLY_URL = 'https://calendly.com/skal-ai/discovery-call';

// Facts, not claims — so they belong in the mono voice, on the rule.
const standfirst = [
  { k: 'Surfaces', v: 'Four' },
  { k: 'Systems live in', v: 'One week' },
  { k: 'Offices', v: 'Lahore · Ajman · Florida' },
];

const BrandHero = () => {
  return (
    <section className="pt-28 lg:pt-36 pb-10 lg:pb-14">
      <div className="shell">
        {/* Opening rule. The page states what it is before it says anything. */}
        <div className="spec rise" style={{ animationDelay: '40ms' }}>
          <span className="t-label t-label--ink">SKAL</span>
          <span className="t-label">AI-native operational infrastructure</span>
        </div>

        <h1
          className="font-display t-hero text-ink mt-10 lg:mt-14 max-w-[19ch] rise"
          style={{ animationDelay: '120ms' }}
        >
          Systems that run inside{' '}
          <em className="italic text-signal">real businesses.</em>
        </h1>

        <p
          className="t-lead mt-8 max-w-[52ch] rise"
          style={{ animationDelay: '200ms' }}
        >
          Not experiments. Not demos. SKAL builds and operates the AI
          infrastructure your sales, support, and operations actually run on.
          Four ways to plug in. Start with one.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row gap-3 rise"
          style={{ animationDelay: '280ms' }}
        >
          <CalendlyPopupButton
            url={CALENDLY_URL}
            utmSource="brand_hero"
            ariaLabel="Schedule a 30-minute discovery call"
            className="btn btn-solid group"
          >
            <span>Book a discovery call</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
          </CalendlyPopupButton>

          <Link href="#products" className="btn btn-line">
            See what we build
          </Link>
        </div>

        {/* Closing rule carries the standfirst and hands off to the index. */}
        <dl
          className="spec mt-16 lg:mt-24 rise"
          style={{ animationDelay: '360ms' }}
        >
          {/* Stacked pairs, so a long value never wraps mid-phrase on mobile. */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-10">
            {standfirst.map(({ k, v }) => (
              <div key={k}>
                <dt className="t-label">{k}</dt>
                <dd className="t-label t-label--ink mt-1">{v}</dd>
              </div>
            ))}
          </div>
        </dl>
      </div>
    </section>
  );
};

export default BrandHero;
