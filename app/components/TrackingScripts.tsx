"use client";

// TEMPORARY: consent gate removed to A/B-test whether the GA drop is purely
// caused by low Accept-All conversion. Banner UI still shows but does not
// gate analytics. Revert by restoring the useCookieConsent gate before
// shipping to EU/UK traffic long-term.

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();
  const lastPath = useRef<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
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
  }, [pathname, mounted]);

  if (!mounted) return null;

  return <GoogleAnalytics />;
}
