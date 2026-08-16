'use client';

import { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/* ---------------------------------------------------------------------------
   Fails open.

   This used to start at opacity-0 and only become visible once an
   IntersectionObserver fired. Anything that stopped the observer firing — no
   observer support, a section already past the viewport on load, a scripted
   scroll that outran it — left real content permanently invisible with no
   error anywhere. A decorative entrance must never be able to hide the page.

   So: hidden only after we know the observer is running, and revealed on any
   of intersect, reduced-motion, or a short timeout.
   ------------------------------------------------------------------------- */

export default function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setVisible(true);
      return;
    }

    setArmed(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(node);

    // Backstop: whatever happened, this content is visible within two seconds.
    const timer = setTimeout(() => setVisible(true), 2000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const hidden = armed && !visible;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        hidden ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}
