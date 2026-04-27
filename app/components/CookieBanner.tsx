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
      className="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md z-[60] rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl p-5 sm:p-6"
    >
      <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
        SKAL uses cookies for analytics so we can see how visitors use the site. You can accept or reject. See the{' '}
        <Link href="/cookie-policy" className="font-semibold text-[#009bd7] dark:text-[#00E1FF] underline decoration-1 underline-offset-2 hover:no-underline">
          cookie policy
        </Link>
        .
      </p>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <button
          onClick={accept}
          className="flex-1 px-4 py-2.5 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-semibold rounded-xl text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#009bd7]/25 active:scale-95"
        >
          Accept
        </button>
        <button
          onClick={reject}
          className="flex-1 px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-xl text-sm transition-all duration-200 hover:border-[#009bd7] hover:text-[#009bd7] dark:hover:border-[#00E1FF] dark:hover:text-[#00E1FF] active:scale-95"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
