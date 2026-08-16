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
  /**
   * An illustration for the right column, from lg up.
   *
   * The heroes were consolidated because each page hand-rolled its own layout
   * around its own SVG and they drifted apart. The drawings were not the
   * problem, so they come back through one slot: the shape stays shared and
   * only the picture varies. Below lg it is not rendered at all, for the same
   * reason as the home page — a 500-unit drawing at phone width is decoration
   * that pushes the actions off screen.
   */
  visual?: ReactNode;
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
  visual,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 lg:pt-36 pb-10 lg:pb-14">
      {/* Same atmosphere as the home page, so a surface page does not land on
          flat paper after arriving from one that breathes. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 dot-grid [mask-image:radial-gradient(ellipse_70%_55%_at_45%_30%,black,transparent)]" />
        <div className="aurora aurora--a aurora--brand -top-28 -left-40 w-[32rem] h-[32rem]" />
        <div className="aurora aurora--b aurora--signal -bottom-32 right-[-6rem] w-[36rem] h-[36rem]" />
      </div>

      <div className="shell">
        <div className="spec rise" style={{ animationDelay: '40ms' }}>
          <span className="t-label t-label--ink">{eyebrow}</span>
          {meta && <span className="t-label">{meta}</span>}
        </div>

        <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 lg:gap-x-10 items-center">
          <div className={visual ? 'lg:col-span-7' : 'lg:col-span-12'}>
            <h1 className="font-display t-hero text-ink max-w-[18ch] rise" style={{ animationDelay: '120ms' }}>
              {title}
              {emphasis && (
                <>
                  {' '}
                  <span className="accent accent-flow">{emphasis}</span>
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
          </div>

          {visual && (
            <div className="hidden lg:block lg:col-span-5 rise" style={{ animationDelay: '380ms' }}>
              {visual}
            </div>
          )}
        </div>

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
