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
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-rule bg-paper/95 backdrop-blur-md"
    >
      <div className="shell py-4">
        {!expanded && (
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <p className="flex-1 text-sm text-ink-2 leading-relaxed">
              SKAL uses cookies for analytics so we can see how visitors use the site. See the{' '}
              <Link href="/cookie-policy" className="link-quiet">cookie policy</Link>.
            </p>
            <div className="flex gap-3 shrink-0">
              <button onClick={() => setExpanded(true)} className="btn btn-line !py-2.5 !px-5 !text-[13px]">
                Customise
              </button>
              <button onClick={acceptAll} className="btn btn-solid !py-2.5 !px-5 !text-[13px]">
                Accept all
              </button>
            </div>
          </div>
        )}

        {expanded && (
          <div>
            <h3 className="t-label t-label--ink">Cookie preferences</h3>
            <p className="mt-2 text-sm text-ink-2">
              Necessary cookies keep the site working. Toggle the others as you like.
            </p>

            <div className="mt-5 border-t border-rule">
              <div className="flex items-center justify-between gap-4 py-3.5 border-b border-rule">
                <div>
                  <div className="text-sm font-medium text-ink">Necessary</div>
                  <div className="text-xs text-ink-2 mt-0.5">Required for the site to function. Always on.</div>
                </div>
                <span className="t-label">Always on</span>
              </div>

              <button
                type="button"
                onClick={() => setAnalytics(!analytics)}
                aria-pressed={analytics}
                className="w-full flex items-center justify-between gap-4 py-3.5 border-b border-rule text-left group"
              >
                <div>
                  <div className="text-sm font-medium text-ink">Analytics</div>
                  <div className="text-xs text-ink-2 mt-0.5">Helps us see how visitors use the site.</div>
                </div>
                <span
                  aria-hidden="true"
                  className={`shrink-0 w-10 h-5 border flex items-center px-0.5 transition-colors ${
                    analytics ? 'bg-ink border-ink justify-end' : 'border-rule justify-start'
                  }`}
                >
                  <span className={`w-3.5 h-3.5 ${analytics ? 'bg-paper' : 'bg-ink-3'}`} />
                </span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end pt-5">
              <button onClick={() => setExpanded(false)} className="btn btn-line !py-2.5 !px-5 !text-[13px]">
                Back
              </button>
              <button onClick={() => saveCustom({ analytics })} className="btn btn-solid !py-2.5 !px-5 !text-[13px]">
                Save preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
