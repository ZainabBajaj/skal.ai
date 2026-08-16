"use client";

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useCookieConsent } from '../context/CookieConsentContext';

export default function FloatingThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { consent, hydrated } = useCookieConsent();
  const liftForBanner = hydrated && consent === null ? '-translate-y-32 sm:-translate-y-20' : '';

  const next = theme === 'light' ? 'dark' : 'light';
  const Icon = resolvedTheme === 'dark' ? Sun : Moon;

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-transform duration-300 ${liftForBanner}`}>
      <button
        onClick={() => setTheme(next)}
        aria-label={`Switch to ${next} theme`}
        className="w-11 h-11 flex items-center justify-center bg-surface border border-rule text-ink-2 hover:text-ink hover:border-ink transition-colors"
      >
        <Icon className="w-[18px] h-[18px]" strokeWidth={1.6} />
      </button>
    </div>
  );
}
