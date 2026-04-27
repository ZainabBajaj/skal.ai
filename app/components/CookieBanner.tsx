"use client";

import Link from 'next/link';
import { useCookieConsent } from '../context/CookieConsentContext';

export default function CookieBanner() {
  const { consent, hydrated, accept, reject } = useCookieConsent();

  if (!hydrated || consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-gray-200/50 dark:border-gray-700/50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
        <p className="flex-1 text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
          SKAL uses cookies for analytics so we can see how visitors use the site. You can accept or reject. See the{' '}
          <Link href="/cookie-policy" className="font-semibold text-[#009bd7] dark:text-[#00E1FF] underline decoration-1 underline-offset-2 hover:no-underline">
            cookie policy
          </Link>
          .
        </p>
        <div className="flex gap-2 sm:gap-3 shrink-0">
          <button
            onClick={accept}
            className="px-5 py-2 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-semibold rounded-lg text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#009bd7]/25 active:scale-95"
          >
            Accept
          </button>
          <button
            onClick={reject}
            className="px-5 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-lg text-sm transition-all duration-200 hover:border-[#009bd7] hover:text-[#009bd7] dark:hover:border-[#00E1FF] dark:hover:text-[#00E1FF] active:scale-95"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
