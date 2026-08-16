"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

/* ---------------------------------------------------------------------------
   One hero for every surface page.

   Each of Scale, Systems, Services and Staffing used to hand-roll its own hero
   with its own gradient and its own animated SVG. They drifted. This is the
   shared shape: opening rule, claim in the display face, lead, actions, and a
   closing rule carrying the facts that page can back up.
   ------------------------------------------------------------------------- */

export interface PageHeroProps {
  /** Left side of the opening rule, e.g. "SKAL Systems". */
  eyebrow: string;
  /** Right side of the opening rule. */
  meta?: string;
  /** The claim. Plain text runs in ink; `emphasis` is picked out in signal. */
  title: string;
  emphasis?: string;
  lead: ReactNode;
  /** Facts on the closing rule. Omit when the page has none worth stating. */
  facts?: { k: string; v: string }[];
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  /** For a bespoke primary action, e.g. a Calendly popup button. */
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  meta,
  title,
  emphasis,
  lead,
  facts,
  primary,
  secondary,
  children,
}: PageHeroProps) {
  return (
    <section className="pt-28 lg:pt-36 pb-10 lg:pb-14">
      <div className="shell">
        <div className="spec rise" style={{ animationDelay: '40ms' }}>
          <span className="t-label t-label--ink">{eyebrow}</span>
          {meta && <span className="t-label">{meta}</span>}
        </div>

        <h1 className="font-display t-hero text-ink mt-10 lg:mt-14 max-w-[18ch] rise" style={{ animationDelay: '120ms' }}>
          {title}
          {emphasis && (
            <>
              {' '}
              <span className="accent">{emphasis}</span>
            </>
          )}
        </h1>

        <div className="t-lead mt-8 max-w-[52ch] rise" style={{ animationDelay: '200ms' }}>
          {lead}
        </div>

        {(primary || secondary || children) && (
          <div className="mt-10 flex flex-col sm:flex-row gap-3 rise" style={{ animationDelay: '280ms' }}>
            {children}
            {primary && (
              <Link href={primary.href} className="btn btn-solid group">
                {primary.label}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
              </Link>
            )}
            {secondary && (
              <Link href={secondary.href} className="btn btn-line">
                {secondary.label}
              </Link>
            )}
          </div>
        )}

        {facts && facts.length > 0 && (
          <dl className="spec mt-16 lg:mt-24 rise" style={{ animationDelay: '360ms' }}>
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-10">
              {facts.map(({ k, v }) => (
                <div key={k}>
                  <dt className="t-label">{k}</dt>
                  <dd className="t-label t-label--ink mt-1">{v}</dd>
                </div>
              ))}
            </div>
          </dl>
        )}
      </div>
    </section>
  );
}
