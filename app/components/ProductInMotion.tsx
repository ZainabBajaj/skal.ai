"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const VIDEO_SRC = '/video/product-loop.mp4';
const POSTER_SRC = '/video/product-loop-poster.jpg';

/* ---------------------------------------------------------------------------
   The one dark band on the page, so the section that shows the work reads as a
   different room from the rest.

   The old fallback drew an invented dashboard — pipeline totals, call counts, a
   blinking LIVE badge — directly under a heading promising "no demos, no
   mockups". There is no video in public/, so that mockup was what shipped. The
   fallback here states what the section is for and nothing it cannot back up.
   Drop a real capture at VIDEO_SRC and it takes over automatically.
   ------------------------------------------------------------------------- */

export default function ProductInMotion() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [videoMissing, setVideoMissing] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (reducedMotion || videoMissing) return;
    const vid = videoRef.current;
    const node = containerRef.current;
    if (!vid || !node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) vid.play().catch(() => {});
        else vid.pause();
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion, videoMissing]);

  const showVideo = !reducedMotion && !videoMissing;

  return (
    <section className="band bg-band text-band-ink">
      <div className="shell">
        <div className="spec !border-band-rule">
          <span className="t-label !text-band-ink">In production</span>
          <span className="t-label !text-band-2">What shipped looks like</span>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-8 items-end">
          <h2 className="lg:col-span-7 font-display t-h2 !text-band-ink max-w-[18ch]">
            Real systems, running inside real businesses.
          </h2>
          <p className="lg:col-span-5 text-[0.9375rem] leading-relaxed text-band-2">
            Every system we ship goes live against real traffic, real customers,
            and real consequences. Nothing here is a sandbox.
          </p>
        </div>

        <div
          ref={containerRef}
          className="mt-12 lg:mt-16 relative aspect-video border border-band-rule overflow-hidden"
        >
          <StillFrame />

          {showVideo && (
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={POSTER_SRC}
              onError={() => setVideoMissing(true)}
              aria-hidden="true"
            >
              <source src={VIDEO_SRC} type="video/mp4" />
            </video>
          )}
        </div>

        <div className="mt-10">
          <Link href="/book" className="btn btn-line group !border-band-rule !text-band-ink hover:!border-band-ink">
            Book a discovery call
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* The frame shown until a real recording is dropped in. It names the four
   surfaces and says nothing it cannot back up — no invented metrics, no live
   badge, no fake feed. */
function StillFrame() {
  const surfaces = [
    ['Scale', 'outbound'],
    ['Systems', 'voice and chat'],
    ['Services', 'custom builds'],
    ['Staffing', 'embedded operators'],
  ];

  return (
    <div className="absolute inset-0 flex flex-col p-6 sm:p-10 lg:p-14">
      <span className="t-label !text-band-2">skal.ai / production</span>

      {/* Centred, so the frame reads as composed rather than as a box with a
          caption stuck to the floor. */}
      <div className="flex-1 flex items-center">
        <p className="font-display text-[clamp(1.4rem,3.4vw,2.6rem)] leading-[1.15] text-band-ink max-w-[20ch]">
          Systems in production across{' '}
          <span className="text-band-accent">four surfaces.</span>
        </p>
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-6 border-t border-band-rule pt-5">
        {surfaces.map(([name, what]) => (
          <li key={name}>
            <div className="font-mono text-[12px] uppercase tracking-[0.12em] text-band-ink">{name}</div>
            <div className="font-mono text-[12px] uppercase tracking-[0.12em] text-band-2 mt-1">{what}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
