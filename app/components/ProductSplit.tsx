"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/* ---------------------------------------------------------------------------
   The index.

   These four are not a sequence, so they are not numbered 01–04. The thing that
   actually separates them is what you end up holding at the end — a meeting, a
   running system, a build, a person. That is the left column, and it is the
   only ordering device the section needs.
   ------------------------------------------------------------------------- */

interface Surface {
  href: string;
  name: string;
  buys: string;      // what you end up with
  terms: string;     // how it is billed or how fast it lands
  claim: string;
  body: string;
  cta: string;
  badge?: string;
}

const surfaces: Surface[] = [
  {
    href: '/scale',
    name: 'Scale',
    buys: 'Qualified meetings',
    terms: 'Pay per meeting',
    claim: 'Runs your outbound end to end.',
    body: 'AI prospecting, personalised sequences, and a proprietary contact database built to book meetings that are worth taking, not to fill a funnel.',
    cta: 'Join the waitlist',
    badge: 'New',
  },
  {
    href: '/systems',
    name: 'Systems',
    buys: 'A running system',
    terms: 'Live in one week',
    claim: 'Handles the work that never stops.',
    body: 'Voice and chat systems trained on your business, powered by ElevenLabs and Claude, plus the workflow automation behind them. No development cycle on your side.',
    cta: 'Deploy your first system',
  },
  {
    href: '/services',
    name: 'Services',
    buys: 'A custom build',
    terms: 'Scoped per project',
    claim: 'Built around how you already work.',
    body: 'Custom AI systems, workflow automation, and software shaped to your operations rather than to a template. If it does not exist yet, we build it.',
    cta: 'Tell us what you need',
  },
  {
    href: '/staffing',
    name: 'Staffing',
    buys: 'An embedded operator',
    terms: 'Billed by the hour',
    claim: 'Ships from the first week.',
    body: 'Pre-vetted engineers and operators who work AI-first, embedded directly into your workflow. No hiring loop, no onboarding drag.',
    cta: 'Deploy your operators',
  },
];

const ProductSplit = () => {
  return (
    <section id="products" className="band">
      <div className="shell">
        <div className="spec">
          <span className="t-label t-label--ink">What we build</span>
          <span className="t-label">Four ways to plug in</span>
        </div>

        <h2 className="font-display t-h2 text-ink mt-8 max-w-[16ch]">
          Four surfaces. One system underneath.
        </h2>
        <p className="t-lead mt-5 max-w-[46ch]">
          Most companies need more than one eventually. We plug in wherever you
          are stuck and grow from there.
        </p>

        <ul className="mt-14 lg:mt-20 border-t border-rule">
          {surfaces.map((s) => (
            <li key={s.href} className="border-b border-rule">
              <Link
                href={s.href}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-y-5 lg:gap-x-8 py-9 lg:py-11 transition-colors duration-200 hover:bg-surface"
              >
                {/* What you end up holding. */}
                <div className="lg:col-span-3">
                  <div className="t-label">{s.buys}</div>
                  <div className="t-label mt-1.5 text-ink-3">{s.terms}</div>
                </div>

                {/* The claim and the detail. */}
                <div className="lg:col-span-6">
                  <h3 className="flex items-baseline gap-3 flex-wrap">
                    <span className="font-display t-h3 text-ink">{s.name}</span>
                    {s.badge && (
                      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-signal border border-signal/40 px-1.5 py-px">
                        {s.badge}
                      </span>
                    )}
                    <span className="font-display text-ink-2 text-[1.05rem] italic">
                      {s.claim}
                    </span>
                  </h3>
                  <p className="mt-3.5 text-[0.9375rem] leading-relaxed text-ink-2 max-w-[54ch]">
                    {s.body}
                  </p>
                </div>

                {/* The way in. */}
                <div className="lg:col-span-3 lg:text-right">
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink group-hover:text-signal transition-colors">
                    {s.cta}
                    <ArrowRight
                      className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                      strokeWidth={1.75}
                    />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductSplit;
