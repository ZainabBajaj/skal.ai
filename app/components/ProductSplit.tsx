"use client";

import { TrendingUp, Bot, Wrench, Users, ArrowRight, type LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ProductCard {
  href: string;
  eyebrow: string;
  verb: string;
  audience: string;
  body: string;
  cta: string;
  icon: LucideIcon;
  badge?: string;
}

const cards: ProductCard[] = [
  {
    href: '/scale',
    eyebrow: 'SKAL SCALE',
    verb: 'Sells',
    audience: 'For B2B founders who are done doing outbound manually.',
    body: 'Your pipeline should not depend on how hard you hustle. SKAL Scale runs your entire B2B outbound operation. Prospecting powered by AI, personalised sequences at scale, and a proprietary contact database built in-house. Priced per qualified meeting, so you only pay for results.',
    cta: 'Join the waitlist',
    icon: TrendingUp,
    badge: 'NEW',
  },
  {
    href: '/systems',
    eyebrow: 'SKAL SYSTEMS',
    verb: 'Deploys',
    audience: 'Pre-built Sagents, ready to go live in a week.',
    body: 'A voice and chat customer support agent on ElevenLabs and GPT, trained on your business and live in as little as one week. Plus a growing library of pre-built Sagents and automated workflows on n8n, Make, and more. Tell us what you need; we deploy the right agent for the job.',
    cta: 'Deploy your first Sagent',
    icon: Bot,
  },
  {
    href: '/services',
    eyebrow: 'SKAL SERVICES',
    verb: 'Fits',
    audience: 'For businesses that need something built from scratch.',
    body: 'When off the shelf is not enough, we build from the ground up. Fully custom AI agents, agentic workflows, and software development scoped entirely around your business requirements. If you can describe the problem, we can build the solution.',
    cta: 'Tell us what you need',
    icon: Wrench,
  },
  {
    href: '/staffing',
    eyebrow: 'SKAL STAFFING',
    verb: 'Executes',
    audience: 'Your direction, our talent, zero friction.',
    body: 'You do not need to know exactly who to hire or what tools they should use. SKAL Staffing places pre-vetted, AI-native talent directly into your workflow. Tell them what you need; they deliver it. Billed by the hour, no long-term commitment.',
    cta: 'Find your person',
    icon: Users,
  },
];

const ProductSplit = () => {
  return (
    <section className="py-20 lg:py-28 relative bg-white dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] dark:text-white mb-4 leading-snug pb-1">
            Four ways SKAL builds with you
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Scale sells. Systems deploys. Services fits. Staffing executes.
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
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 flex-1">{body}</p>

              <div className="inline-flex items-center gap-2 text-[#009bd7] dark:text-[#00E1FF] font-semibold group-hover:gap-3 transition-all duration-300">
                <span>{cta}</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSplit;
