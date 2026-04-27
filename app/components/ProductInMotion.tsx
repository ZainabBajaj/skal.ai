"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

const VIDEO_SRC = '/video/product-loop.mp4';
const POSTER_SRC = '/video/product-loop-poster.jpg';

export default function ProductInMotion() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [videoMissing, setVideoMissing] = useState(false);

  // Honour prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Play/pause based on viewport visibility
  useEffect(() => {
    if (reducedMotion || videoMissing) return;
    const vid = videoRef.current;
    const node = containerRef.current;
    if (!vid || !node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion, videoMissing]);

  return (
    <section className="py-16 lg:py-24 relative bg-[#0f172a] overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#009bd7]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#00E1FF]/12 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 lg:mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <Play className="w-3 h-3 text-[#00E1FF] fill-[#00E1FF]" />
            <span className="text-[#00E1FF] text-xs font-bold tracking-[0.18em]">IN PRODUCTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-snug pb-1">
            What shipped looks like.
          </h2>
          <p className="text-lg text-gray-300">
            Real systems running inside real businesses. No demos. No mockups.
          </p>
        </div>

        <div
          ref={containerRef}
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative aspect-video bg-gradient-to-br from-[#0c2d4a] via-[#0f172a] to-[#0c2d4a] border border-gray-700/40 shadow-2xl"
        >
          {/* Styled placeholder — always renders behind. Visible only if video and poster are both missing. */}
          <PlaceholderFrame />

          {/* Video — covers the placeholder when assets are present. Skipped under reduced-motion. */}
          {!reducedMotion && !videoMissing && (
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

          {/* Bottom caption overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
            <p className="text-white font-semibold text-base sm:text-lg">Live in production.</p>
            <p className="text-gray-300 text-xs sm:text-sm mt-1">Voice + chat agents. Automated outbound. Custom systems.</p>
          </div>
        </div>

        <div className="text-center mt-10 lg:mt-12">
          <Link
            href="/book"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-bold rounded-2xl hover:shadow-xl hover:shadow-[#009bd7]/25 hover:scale-105 transition-all duration-300"
          >
            Schedule a discovery call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Styled fallback that looks intentional even before video assets are dropped.
// Mimics a product capture — terminal-style window with a faint signal animation.
function PlaceholderFrame() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="pim-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0c2d4a" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <radialGradient id="pim-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00E1FF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#00E1FF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="pim-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E1FF" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#00E1FF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#1DB5C5" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <rect width="1280" height="720" fill="url(#pim-bg)" />
        <ellipse cx="640" cy="360" rx="520" ry="280" fill="url(#pim-glow)" />

        {/* Faint grid */}
        <g stroke="#1f2a3d" strokeWidth="1" opacity="0.5">
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 110 + 60} y1="0" x2={i * 110 + 60} y2="720" />
          ))}
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 110 + 60} x2="1280" y2={i * 110 + 60} />
          ))}
        </g>

        {/* Centred "signal" sweep */}
        <g>
          <path
            d="M 160 460 Q 320 360 480 380 T 800 320 T 1120 280"
            stroke="url(#pim-line)"
            strokeWidth="3"
            fill="none"
          />
          <circle r="6" fill="#FFFFFF">
            <animateMotion dur="6s" repeatCount="indefinite" path="M 160 460 Q 320 360 480 380 T 800 320 T 1120 280" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="6s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Sparse status pills suggesting a working interface */}
        <g fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="14" letterSpacing="2">
          <rect x="160" y="160" width="180" height="36" rx="18" fill="#00E1FF" opacity="0.15" />
          <text x="180" y="183" fill="#00E1FF" opacity="0.95">AGENT ONLINE</text>

          <rect x="160" y="220" width="220" height="36" rx="18" fill="#1DB5C5" opacity="0.12" />
          <text x="180" y="243" fill="#1DB5C5" opacity="0.85">MEETING BOOKED · 10:30</text>

          <rect x="160" y="280" width="200" height="36" rx="18" fill="#94a3b8" opacity="0.1" />
          <text x="180" y="303" fill="#94a3b8" opacity="0.7">REPLY SENT · 2.1s</text>
        </g>
      </svg>
    </div>
  );
}
