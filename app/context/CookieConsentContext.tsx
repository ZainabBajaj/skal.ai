"use client";

import { createContext, useContext, useEffect, useState } from 'react';

export interface CookiePreferences {
  necessary: true;
  analytics: boolean;
}

type ConsentState = CookiePreferences | null;

interface CookieConsentContextType {
  consent: ConsentState;
  hydrated: boolean;
  acceptAll: () => void;
  saveCustom: (prefs: { analytics: boolean }) => void;
  reset: () => void;
}

const STORAGE_KEY = 'skal_cookie_consent';

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

function readStorage(): ConsentState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    // Migrate legacy string values from the previous Accept/Reject API.
    if (raw === 'accepted') return { necessary: true, analytics: true };
    if (raw === 'rejected') return { necessary: true, analytics: false };
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object' && parsed.necessary === true) {
      return { necessary: true, analytics: parsed.analytics === true };
    }
    return null;
  } catch {
    return null;
  }
}

function writeStorage(state: CookiePreferences) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setConsent(readStorage());
    setHydrated(true);
  }, []);

  const acceptAll = () => {
    const state: CookiePreferences = { necessary: true, analytics: true };
    writeStorage(state);
    setConsent(state);
  };

  const saveCustom = (prefs: { analytics: boolean }) => {
    const state: CookiePreferences = { necessary: true, analytics: prefs.analytics };
    writeStorage(state);
    setConsent(state);
  };

  const reset = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setConsent(null);
  };

  return (
    <CookieConsentContext.Provider value={{ consent, hydrated, acceptAll, saveCustom, reset }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (ctx === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return ctx;
}
