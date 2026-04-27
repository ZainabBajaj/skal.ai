"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useCookieConsent } from '../context/CookieConsentContext';
import GoogleAnalytics from './GoogleAnalytics';

const SESSION_KEY = 'skal_session_id';

function getSessionId(): string {
  let id = sessionStorage.getItem(SESSION_KEY);
  if (!id) {
    id =
      typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? crypto.randomUUID()
        : `s-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    sessionStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

export default function TrackingScripts() {
  const { consent, hydrated } = useCookieConsent();
  const pathname = usePathname();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (!hydrated || consent !== 'accepted') return;
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;

    const payload = {
      session_id: getSessionId(),
      page_url: window.location.href,
      referrer: document.referrer || null,
      user_agent: navigator.userAgent,
    };

    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {
      // fire-and-forget; analytics failures should not surface
    });
  }, [pathname, consent, hydrated]);

  if (!hydrated || consent !== 'accepted') return null;

  return <GoogleAnalytics />;
}
