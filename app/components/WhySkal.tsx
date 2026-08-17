"use client";

import { GraduationCap, Zap, HandCoins, type LucideIcon } from 'lucide-react';

interface Pillar {
  icon: LucideIcon;
  headline: string;
  body: string;
  proof: string[];
}

const pillars: Pillar[] = [
  {
    icon: GraduationCap,
    headline: 'Practitioners, not generalists.',
    body: 'We have been building AI inside real businesses for five years. Not since the hype cycle started. Our founder graduated from LSE with one of the highest marks in the world in Data Science and Business Analytics, and designed a course on it at NUS.',
    proof: ['LSE Letter of Commendation', 'NUS course author', '5 years in production'],
  },
  {
    icon: Zap,
    headline: 'Ship in days, not months.',
    body: 'Most agencies disappear into a three month roadmap. We do not. Systems go live in one week. Scale opens pipeline by day three. Staffing engineers ship production code in week one.',
    proof: ['Systems live in 1 week', 'Pipeline by day 3', 'Code in week 1'],
  },
  {
    icon: HandCoins,
    headline: 'Skin in the game.',
    body: 'We earn our keep. With Scale, you only pay when a meeting shows up. With Staffing, we replace any engineer at no cost. With Systems, monthly performance reviews keep us honest.',
    proof: ['Pay per meeting', 'No-fit replacement', 'Monthly reviews'],
  },
];

const WhySkal = () => {
  return (
    <section className="py-14 lg:py-20 relative bg-[#f8faff] dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#009bd7]/10 dark:bg-[#00E1FF]/10 border border-[#009bd7]/20 dark:border-[#00E1FF]/20 mb-6">
            <span className="text-[#009bd7] dark:text-[#00E1FF] text-xs font-bold tracking-[0.18em]">WHY SKAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] dark:text-white mb-4 leading-snug pb-1">
            Why teams pick us.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Three reasons that actually matter when you are choosing where to spend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pillars.map(({ icon: Icon, headline, body, proof }) => (
            <div
              key={headline}
              className="group relative bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-gray-900/60 dark:to-gray-800/60 rounded-3xl p-8 border border-gray-200/60 dark:border-gray-700/60 shadow-lg hover:shadow-2xl hover:shadow-[#009bd7]/10 hover:border-[#009bd7]/30 transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#009bd7] to-[#00E1FF] flex items-center justify-center shadow-lg mb-6">
                <Icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] dark:text-white mb-4 leading-snug">
                {headline}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-1">
                {body}
              </p>

              <div className="flex flex-wrap gap-x-3 gap-y-1.5 pt-5 border-t border-gray-200/70 dark:border-gray-700/60">
                {proof.map((item, i) => (
                  <span
                    key={item}
                    className="inline-flex items-center text-[11px] font-bold tracking-[0.12em] uppercase text-[#009bd7] dark:text-[#00E1FF]"
                  >
                    {i > 0 && <span className="text-gray-300 dark:text-gray-600 mr-3" aria-hidden="true">·</span>}
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySkal;