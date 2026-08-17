"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useCookieConsent } from '../context/CookieConsentContext';

export default function CookieBanner() {
  const { consent, hydrated, acceptAll, saveCustom } = useCookieConsent();
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  if (!hydrated || consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-gray-200/50 dark:border-gray-700/50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {!expanded && (
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <p className="flex-1 text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
              SKAL uses cookies for analytics so we can see how visitors use the site. See the{' '}
              <Link href="/cookie-policy" className="font-semibold text-[#009bd7] dark:text-[#00E1FF] underline decoration-1 underline-offset-2 hover:no-underline">
                cookie policy
              </Link>
              .
            </p>
            <div className="flex gap-2 sm:gap-3 shrink-0">
              <button
                onClick={() => setExpanded(true)}
                className="px-5 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-lg text-sm transition-all duration-200 hover:border-[#009bd7] hover:text-[#009bd7] dark:hover:border-[#00E1FF] dark:hover:text-[#00E1FF] active:scale-95"
              >
                Customize
              </button>
              <button
                onClick={acceptAll}
                className="px-5 py-2 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-semibold rounded-lg text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#009bd7]/25 active:scale-95"
              >
                Accept All
              </button>
            </div>
          </div>
        )}

        {expanded && (
          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-bold text-[#0f172a] dark:text-white">Cookie preferences</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                Necessary cookies keep the site working. Toggle the others as you like.
              </p>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/80 dark:bg-gray-800/50">
              <div className="mt-0.5 w-9 h-5 rounded-full bg-[#009bd7] flex items-center justify-end px-0.5 shrink-0" aria-hidden="true">
                <div className="w-4 h-4 rounded-full bg-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-[#0f172a] dark:text-white">Necessary</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Required for the site to function. Always on.</div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setAnalytics(!analytics)}
              aria-pressed={analytics}
              className="w-full flex items-start gap-3 p-3 rounded-xl bg-gray-50/80 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left"
            >
              <div className={`mt-0.5 w-9 h-5 rounded-full flex items-center px-0.5 transition-all shrink-0 ${analytics ? 'bg-[#009bd7] justify-end' : 'bg-gray-300 dark:bg-gray-700 justify-start'}`} aria-hidden="true">
                <div className="w-4 h-4 rounded-full bg-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-[#0f172a] dark:text-white">Analytics</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Helps us see how visitors use the site.</div>
              </div>
            </button>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 sm:justify-end pt-1">
              <button
                onClick={() => setExpanded(false)}
                className="px-5 py-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => saveCustom({ analytics })}
                className="px-5 py-2 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-semibold rounded-lg text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#009bd7]/25 active:scale-95"
              >
                Save preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
