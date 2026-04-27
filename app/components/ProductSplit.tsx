"use client";

import { TrendingUp, Bot, Wrench, Users, ArrowRight, type LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ProductCard {
  href: string;
  eyebrow: string;
  verb: string;
  audience: string;
  body: string[];
  cta: string;
  icon: LucideIcon;
  badge?: string;
}

const cards: ProductCard[] = [
  {
    href: '/scale',
    eyebrow: 'NEED LEADS?',
    verb: 'Sells',
    audience: 'For B2B founders done doing outbound manually.',
    body: [
      'Your leads find you. Here is what finds them.',
      'SKAL Scale runs your entire outbound. AI prospecting, personalised sequences, and a proprietary contact database built to book qualified meetings, not just fill a funnel.',
      'You only pay when a meeting shows up on your calendar.',
    ],
    cta: 'Join the waitlist',
    icon: TrendingUp,
    badge: 'NEW',
  },
  {
    href: '/systems',
    eyebrow: 'NEED AUTOMATION?',
    verb: 'Deploys',
    audience: 'Live in one week.',
    body: [
      'Your operations run without you. Here is what runs them.',
      'Voice and chat agents trained on your business, powered by ElevenLabs and Claude. Plus end-to-end automation that handles your operations around the clock.',
      'No development cycles. No engineering required. No overhead.',
    ],
    cta: 'Deploy your first AI agent',
    icon: Bot,
  },
  {
    href: '/services',
    eyebrow: 'NEED SOMETHING CUSTOM?',
    verb: 'Fits',
    audience: 'No templates. No constraints. Just solutions.',
    body: [
      'Off the shelf does not fit your business.',
      'Custom AI agents, agentic workflows, and software scoped to your exact requirements.',
      'If it doesn’t exist, we build it from scratch.',
    ],
    cta: 'Tell us what you need',
    icon: Wrench,
  },
  {
    href: '/staffing',
    eyebrow: 'NEED EXECUTION?',
    verb: 'Executes',
    audience: 'Your direction, our talent, zero friction.',
    body: [
      'No hiring loops. No onboarding drag.',
      'Pre-vetted, AI-native talent placed straight into your workflow.',
      'Tell them what you need. They ship it. Billed by the hour.',
    ],
    cta: 'Find your person',
    icon: Users,
  },
];

const ProductSplit = () => {
  return (
    <section id="products" className="py-14 lg:py-20 relative bg-white dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] dark:text-white mb-4 leading-snug pb-1">
            Four ways SKAL builds with you
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Each one fixes a different bottleneck.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {cards.map(({ href, eyebrow, verb, audience, body, cta, icon: Icon, badge }) => (
            <Link
              key={href}
              href={href}
              className="group block relative bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-gray-900/60 dark:to-gray-800/60 rounded-3xl p-8 sm:p-10 border border-gray-200/60 dark:border-gray-700/60 shadow-lg hover:shadow-2xl hover:shadow-[#009bd7]/10 hover:border-[#009bd7]/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#009bd7] to-[#00E1FF] flex items-center justify-center shadow-lg">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                {badge && (
                  <span className="text-[10px] font-bold tracking-wider px-2 py-1 rounded bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white">
                    {badge}
                  </span>
                )}
              </div>

              <div className="text-xs font-bold tracking-widest text-[#009bd7] dark:text-[#00E1FF] mb-2">{eyebrow}</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] dark:text-white mb-3 leading-snug">
                AI That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] via-[#00E1FF] to-[#1DB5C5]">
                  {verb}
                </span>
              </h3>

              <p className="text-[#009bd7] dark:text-[#00E1FF] font-semibold mb-4">{audience}</p>
              <div className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 flex-1 space-y-3">
                {body.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 text-[#009bd7] dark:text-[#00E1FF] font-semibold group-hover:gap-3 transition-all duration-300">
                <span>{cta}</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-8 lg:mt-10 text-center text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          This is not four tools. It is one system. Most companies need all four;
          <span className="font-semibold text-[#0f172a] dark:text-white"> we plug in wherever you are stuck.</span>
        </p>
      </div>
    </section>
  );
};

export default ProductSplit;
