"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CalendlyPopupButton from './CalendlyPopupButton';
import ConvergenceFlow from './ConvergenceFlow';

const CALENDLY_URL = 'https://calendly.com/skal-ai/discovery-call';

// Facts, not claims — so they belong in the mono voice, on the rule.
const standfirst = [
  { k: 'Surfaces', v: 'Four' },
  { k: 'Systems live in', v: 'One week' },
  { k: 'Offices', v: 'Lahore · Ajman · Florida' },
];

const BrandHero = () => {
  return (
    <section className="relative overflow-hidden pt-28 lg:pt-36 pb-10 lg:pb-14">
      {/* Atmosphere, from the previous site. Behind everything, touching no
          text colour, so the page can feel alive without getting harder to
          read. */}
      {/* The whole layer fades out before the section ends. Without this the
          section's overflow-hidden cuts the aurora off mid-blur and leaves a
          hard horizontal seam straight across the page. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_50%,transparent_96%)]"
      >
        <div className="absolute inset-0 dot-grid [mask-image:radial-gradient(ellipse_70%_60%_at_45%_35%,black,transparent)]" />
        <div className="aurora aurora--a aurora--brand -top-24 -left-40 w-[34rem] h-[34rem]" />
        <div className="aurora aurora--b aurora--signal -bottom-32 right-[-6rem] w-[40rem] h-[40rem]" />
        <div className="aurora aurora--a aurora--brand top-16 right-[18%] w-[26rem] h-[26rem] opacity-70" />
      </div>

      <div className="shell">
        {/* Opening rule. The page states what it is before it says anything. */}
        <div className="spec rise" style={{ animationDelay: '40ms' }}>
          <span className="t-label t-label--ink">SKAL</span>
          <span className="t-label">AI-native operational infrastructure</span>
        </div>

        {/* Two columns from lg up: the argument on the left, the picture of it
            on the right. Below lg the illustration drops out entirely rather
            than stacking — at phone width it is a 500-unit drawing rendered
            two inches wide, which is decoration pretending to be information,
            and it would push the buttons below the fold to do it. */}
        <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 lg:gap-x-10 items-center">
          <div className="lg:col-span-7">
            <h1
              className="font-display t-hero text-ink max-w-[19ch] rise"
              style={{ animationDelay: '120ms' }}
            >
              Systems that run inside{' '}
              <span className="accent accent-flow">real businesses.</span>
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
          </div>

          <div
            className="hidden lg:block lg:col-span-5 rise"
            style={{ animationDelay: '380ms' }}
          >
            <ConvergenceFlow />
          </div>
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
