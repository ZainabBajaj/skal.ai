"use client";

import Link from 'next/link';
import { useCookieConsent } from '../context/CookieConsentContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';

export default function CookiePolicyPage() {
  const { consent, hydrated, acceptAll, saveCustom, reset } = useCookieConsent();

  const status =
    !hydrated ? 'Loading…'
    : consent === null ? 'No choice made yet.'
    : consent.analytics ? 'You have accepted analytics cookies.'
    : 'You have rejected analytics cookies. Only essential cookies are running.';

  return (
    <main className="relative min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      <section className="pt-28 pb-12 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-sm font-semibold text-[#009bd7] dark:text-[#00E1FF] mb-4">
              Cookies
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0f172a] dark:text-white mb-6 leading-tight">
              What we set, and why.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Every cookie this site sets, what it does, and how to change your mind. Last updated 27 April 2026.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-10 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] dark:text-white mb-4">Essential</h2>
              <p>
                These run regardless of your choice because the site needs them. They store your theme preference (light or dark) and your cookie consent choice itself. They are first-party only and do not leave the browser.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] dark:text-white mb-4">Analytics</h2>
              <p className="mb-4">
                These run only if you accept. We use them to understand which pages get read, how visitors arrive, and where things break.
              </p>
              <ul className="space-y-3 list-disc list-inside ml-2">
                <li>
                  <strong className="text-[#0f172a] dark:text-white">Google Analytics.</strong> Aggregate page views and traffic sources. Google stores this data on its servers.
                </li>
                <li>
                  <strong className="text-[#0f172a] dark:text-white">SKAL analytics.</strong> Anonymous session data sent to our own backend so we can see how the site is being used and block bots. No login or form data is included.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] dark:text-white mb-4">Your current choice</h2>
              <p className="mb-6">{status}</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptAll}
                  disabled={!hydrated || consent?.analytics === true}
                  className="px-6 py-3 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-semibold rounded-xl text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#009bd7]/25 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                >
                  Accept analytics
                </button>
                <button
                  onClick={() => saveCustom({ analytics: false })}
                  disabled={!hydrated || (consent !== null && consent.analytics === false)}
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-xl text-sm transition-all duration-200 hover:border-[#009bd7] hover:text-[#009bd7] dark:hover:border-[#00E1FF] dark:hover:text-[#00E1FF] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Reject analytics
                </button>
                <button
                  onClick={reset}
                  disabled={!hydrated || consent === null}
                  className="px-6 py-3 text-gray-500 dark:text-gray-400 font-semibold rounded-xl text-sm hover:text-gray-700 dark:hover:text-gray-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Reset
                </button>
              </div>
            </div>

            <div>
              <p>
                More on what we collect and how we handle it:{' '}
                <Link href="/privacy" className="font-semibold text-[#009bd7] dark:text-[#00E1FF] underline decoration-1 underline-offset-2 hover:no-underline">
                  privacy policy
                </Link>
                . Questions:{' '}
                <a href="mailto:hi@skal.ai" className="font-semibold text-[#009bd7] dark:text-[#00E1FF] underline decoration-1 underline-offset-2 hover:no-underline">
                  hi@skal.ai
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
