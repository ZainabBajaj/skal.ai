"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Stack from './Stack';

/* ---------------------------------------------------------------------------
   Three paths into Services.

   What separates them is not a sequence but a situation: where the business
   already is when it arrives. That is the left column, and it is the only
   sorting device the section needs.
   ------------------------------------------------------------------------- */

interface Path {
  href: string;
  situation: string;
  name: string;
  body: string;
  bullets: string[];
  cta: string;
}

const paths: Path[] = [
  {
    href: '/startup',
    situation: 'Building from scratch',
    name: 'Startup',
    body: 'Launch with AI-native infrastructure from day one. Automation-first architecture that scales as you do, rather than something you rebuild at Series A.',
    bullets: ['AI-native MVP in two to four weeks', 'Automation-first infrastructure', 'Scalable systems from day one'],
    cta: 'Get started',
  },
  {
    href: '/enterprise',
    situation: 'Running at scale',
    name: 'Enterprise',
    body: 'Automate internal workflows, reduce manual operations, and deploy AI tooling built around how your team actually works rather than how a vendor assumed it would.',
    bullets: ['Internal AI workflow tooling', 'Operational efficiency at scale', 'Process automation and orchestration'],
    cta: 'Explore more',
  },
  {
    href: '/rescue',
    situation: 'Something is broken',
    name: 'Rescue',
    body: 'Rebuild broken systems, automate technical debt, and stabilise operations that have stopped being predictable.',
    bullets: ['System rebuild and stabilisation', 'Technical debt automation', 'Operational recovery'],
    cta: 'Need a fix',
  },
];

const Services = () => {
  return (
    <section id="services" className="band bg-surface">
      <div className="shell">
        <div className="spec">
          <span className="t-label t-label--ink">Which describes you?</span>
          <span className="t-label">{paths.length} ways in</span>
        </div>

        <h2 className="font-display t-h2 text-ink mt-8 max-w-[17ch]">
          Every path ends at infrastructure built around your operations.
        </h2>

        <ul className="mt-14 lg:mt-20 border-t border-rule">
          {paths.map((p) => (
            <li key={p.href} className="border-b border-rule">
              <Link
                href={p.href}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-y-5 lg:gap-x-8 py-9 lg:py-11 transition-colors duration-200 hover:bg-paper"
              >
                <div className="lg:col-span-3">
                  <div className="t-label">{p.situation}</div>
                  <h3 className="font-display t-h3 text-ink mt-2">{p.name}</h3>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-[0.9375rem] leading-relaxed text-ink-2 max-w-[52ch]">{p.body}</p>
                </div>

                <ul className="lg:col-span-3 lg:border-l border-rule lg:pl-8">
                  {p.bullets.map((b) => (
                    <li key={b} className="t-label py-1.5">{b}</li>
                  ))}
                </ul>

                <div className="lg:col-span-1 lg:text-right">
                  <span className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.12em] text-ink group-hover:text-signal transition-colors whitespace-nowrap">
                    {p.cta}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-20 lg:mt-28">
          <Stack />
        </div>
      </div>
    </section>
  );
};

export default Services;
