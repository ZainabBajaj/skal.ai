import type { LucideIcon } from 'lucide-react';

type Tone = 'cyan' | 'teal';

interface HowItWorksProps {
  title: string;
  steps: { step: string; title: string; description: string }[];
  tone?: Tone;
  badge?: { icon: LucideIcon; label: string };
}

const tones: Record<Tone, { circle: string; connector: string; headingVia: string }> = {
  cyan: {
    circle: 'from-[#009bd7] to-[#00E1FF]',
    connector: 'from-[#009bd7]/30 to-[#00E1FF]/30',
    headingVia: 'via-[#009bd7]',
  },
  teal: {
    circle: 'from-[#1DB5C5] to-[#009bd7]',
    connector: 'from-[#1DB5C5]/30 to-[#009bd7]/30',
    headingVia: 'via-[#1DB5C5]',
  },
};

export default function HowItWorks({ title, steps, tone = 'cyan', badge }: HowItWorksProps) {
  const t = tones[tone];
  const BadgeIcon = badge?.icon;

  return (
    <section className="py-20 lg:py-28 relative bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {badge && BadgeIcon && (
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/20 dark:to-[#00E1FF]/20 rounded-full px-6 py-2 mb-6 border border-[#009bd7]/20 dark:border-[#00E1FF]/30">
              <BadgeIcon className="w-4 h-4 text-[#009bd7] dark:text-[#00E1FF]" />
              <span className="text-[#009bd7] dark:text-[#00E1FF] text-sm font-bold tracking-wider">{badge.label}</span>
            </div>
          )}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] dark:text-white mb-6 leading-snug pb-1`}>
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((item, index) => (
            <div key={item.step} className="relative text-center">
              {index < steps.length - 1 && (
                <div className={`hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r ${t.connector}`}></div>
              )}
              <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${t.circle} rounded-2xl flex items-center justify-center shadow-lg`}>
                <span className="text-2xl font-bold text-white">{item.step}</span>
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
