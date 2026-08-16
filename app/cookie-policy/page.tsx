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
    <main className="min-h-screen bg-paper">
      <Navbar />

      <section className="pt-28 lg:pt-36 pb-10 lg:pb-14">
        <div className="shell">
          <div className="max-w-[54ch]">
            <div className="t-label mb-6">
              Cookies
            </div>
            <h1 className="font-display t-hero text-ink max-w-[16ch]">
              What we set, and why.
            </h1>
            <p className="t-lead mt-8 max-w-[54ch]">
              Every cookie this site sets, what it does, and how to change your mind. Last updated 27 April 2026.
            </p>
          </div>
        </div>
      </section>

      <section className="band bg-surface">
        <div className="shell">
          <div className="shell-tight space-y-12 t-read">

            <div>
              <h2 className="font-display t-h3 text-ink mb-4">Essential</h2>
              <p>
                These run regardless of your choice because the site needs them. They store your theme preference (light or dark) and your cookie consent choice itself. They are first-party only and do not leave the browser.
              </p>
            </div>

            <div>
              <h2 className="font-display t-h3 text-ink mb-4">Analytics</h2>
              <p className="mb-4">
                These run only if you accept. We use them to understand which pages get read, how visitors arrive, and where things break.
              </p>
              <ul className="space-y-3 list-disc list-inside ml-2">
                <li>
                  <strong className="text-ink">Google Analytics.</strong> Aggregate page views and traffic sources. Google stores this data on its servers.
                </li>
                <li>
                  <strong className="text-ink">SKAL analytics.</strong> Anonymous session data sent to our own backend so we can see how the site is being used and block bots. No login or form data is included.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display t-h3 text-ink mb-4">Your current choice</h2>
              <p className="mb-6">{status}</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptAll}
                  disabled={!hydrated || consent?.analytics === true}
                  className="btn btn-solid !py-2.5 !px-5 !text-[13px] disabled:opacity-50"
                >
                  Accept analytics
                </button>
                <button
                  onClick={() => saveCustom({ analytics: false })}
                  disabled={!hydrated || (consent !== null && consent.analytics === false)}
                  className="btn btn-line !py-2.5 !px-5 !text-[13px] disabled:opacity-50"
                >
                  Reject analytics
                </button>
                <button
                  onClick={reset}
                  disabled={!hydrated || consent === null}
                  className="px-6 py-3 text-ink-3 font-semibold rounded-xl text-sm hover:text-gray-700 dark:hover:text-gray-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Reset
                </button>
              </div>
            </div>

            <div>
              <p>
                More on what we collect and how we handle it:{' '}
                <Link href="/privacy" className="link-quiet">
                  privacy policy
                </Link>
                . Questions:{' '}
                <a href="mailto:info@skal.ai" className="link-quiet">
                  info@skal.ai
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
