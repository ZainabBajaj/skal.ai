"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

/* What shipped, actually shown.

   This frame used to be a text card standing in for a product recording that
   was never supplied, which left the largest picture-shaped hole on the site
   filled with more words. These are the real thing: `tools/render-ui.js` in the
   Sky repo boots `popup.html` and `content.js` off disk behind a `chrome.*`
   shim, so what was captured is the actual panel and the actual in-page card in
   its shadow DOM — the shipped interface, not a mockup of it.

   The lead in them is fabricated and says so in the caption. Rendering a real
   customer's message here would put someone's contact details on a marketing
   page, which is a worse trade than a made-up name.

   If a recording ever does land at VIDEO_SRC it still takes over on top. */
function StillFrame() {
  return (
    <div className="absolute inset-0 flex flex-col sm:flex-row items-stretch gap-6 p-6 sm:p-8 lg:p-12">
      <div className="flex flex-col justify-between shrink-0 sm:max-w-[34%]">
        <span className="t-label !text-band-2">skal.ai / sky</span>

        <p className="font-display text-[clamp(1.15rem,2.4vw,1.9rem)] leading-[1.15] text-band-ink mt-4 sm:mt-0">
          You highlight it.{' '}
          <span className="text-band-accent">Sky does the rest.</span>
        </p>

        <p className="hidden sm:block font-mono text-[11px] uppercase tracking-[0.12em] text-band-2 leading-relaxed">
          The review card and the panel,
          <br />
          rendered from the shipped extension.
          <br />
          Sample lead, not a customer.
        </p>
      </div>

      {/* Both shots are portrait and the frame is 16:9, so they are laid out
          against the bottom edge and allowed to run past it. Scaling them to
          fit would have made the type inside them unreadable, which defeats
          the point of showing a real interface. */}
      <div className="relative flex-1 hidden sm:block">
        <div className="absolute inset-x-0 bottom-[-12%] top-[2%] flex items-start justify-center gap-5 lg:gap-8">
          <Image
            src="/product/sky-review-card.png"
            alt="Sky's in-page review card, showing a captured lead scored 76 as a strong fit"
            width={690}
            height={1600}
            className="h-full w-auto object-contain object-top border border-band-rule"
          />
          <Image
            src="/product/sky-panel.png"
            alt="Sky's side panel, showing leads that need attention and recent captures"
            width={800}
            height={1560}
            className="h-full w-auto object-contain object-top border border-band-rule hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
}
