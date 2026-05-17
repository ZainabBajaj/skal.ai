'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

type CalendlyOptions = {
  url: string;
  prefill?: Record<string, string>;
  utm?: Record<string, string>;
};

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: CalendlyOptions) => void;
    };
  }
}

type Props = {
  url: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  utmSource?: string;
};

export default function CalendlyPopupButton({
  url,
  children,
  className,
  ariaLabel,
  utmSource = 'website',
}: Props) {
  const cssInjected = useRef(false);

  useEffect(() => {
    if (cssInjected.current) return;
    const id = 'calendly-widget-css';
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }
    cssInjected.current = true;
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const finalUrl = url.includes('utm_source') ? url : `${url}${url.includes('?') ? '&' : '?'}utm_source=${utmSource}`;

    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({ url: finalUrl });
    } else {
      window.open(finalUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={className}
        aria-label={ariaLabel || 'Open scheduling popup'}
      >
        {children}
      </button>
      <Script
        id="calendly-widget-js"
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
