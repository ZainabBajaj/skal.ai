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
// Reads as a live product dashboard: window chrome, event feed, KPIs, voice waveform.
function PlaceholderFrame() {
  const events = [
    { label: 'LEAD QUALIFIED · acme corp · 87', accent: '#00E1FF', age: 'now' },
    { label: 'CALL HANDLED · sarah b · 4m 12s', accent: '#1DB5C5', age: '6s' },
    { label: 'REPLY SENT · marcus t · 2.1s', accent: '#00E1FF', age: '14s' },
    { label: 'MEETING BOOKED · 10:30 · zoom', accent: '#1DB5C5', age: '38s' },
    { label: 'AGENT ONLINE · queue empty', accent: '#94a3b8', age: '1m' },
    { label: 'LEAD ASSIGNED · julia r', accent: '#1DB5C5', age: '2m' },
  ];
  const pillStart = 195;
  const pillStride = 60;
  const pillCycle = events.length * 1.5;
  const kpis = [
    { x: 620, y: 130, label: 'CALLS · 24H', value: '1,247', color: '#e2e8f0' },
    { x: 920, y: 130, label: 'REPLIES · 24H', value: '3,902', color: '#e2e8f0' },
    { x: 620, y: 280, label: 'AVG RESPONSE', value: '2.1s', color: '#00E1FF' },
    { x: 920, y: 280, label: 'PIPELINE · TODAY', value: '$184k', color: '#00E1FF' },
  ];
  const eqBars = 9;
  const eqBaseY = 100;

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="pim-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0a1424" />
            <stop offset="100%" stopColor="#060e1c" />
          </linearGradient>
          <radialGradient id="pim-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00E1FF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#00E1FF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="pim-bar" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#00E1FF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#00E1FF" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        <rect width="1280" height="720" fill="url(#pim-bg)" />
        <ellipse cx="640" cy="360" rx="520" ry="280" fill="url(#pim-glow)" />

        {/* Window chrome */}
        <rect x="40" y="40" width="1200" height="640" rx="20" fill="none" stroke="#1e293b" strokeWidth="1.5" />
        <path d="M 40 60 A 20 20 0 0 1 60 40 L 1220 40 A 20 20 0 0 1 1240 60 L 1240 96 L 40 96 Z" fill="#0f1e36" />
        <line x1="40" y1="96" x2="1240" y2="96" stroke="#1e293b" strokeWidth="1" />

        <circle cx="72" cy="68" r="7" fill="#ef4444" opacity="0.85" />
        <circle cx="94" cy="68" r="7" fill="#f59e0b" opacity="0.85" />
        <circle cx="116" cy="68" r="7" fill="#10b981" opacity="0.85" />

        <text x="640" y="73" textAnchor="middle" fill="#94a3b8" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="14" fontWeight="600" letterSpacing="1.5">
          skal.ai / production
        </text>

        <g transform="translate(1200 68)" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="13" letterSpacing="3">
          <text x="-12" y="5" textAnchor="end" fill="#fecaca">LIVE</text>
          <circle cx="6" cy="0" r="5" fill="#ef4444">
            <animate attributeName="opacity" values="0.35;1;0.35" dur="1.6s" repeatCount="indefinite" />
            <animate attributeName="r" values="4;6;4" dur="1.6s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* LEFT PANEL: live events feed */}
        <text x="80" y="146" fill="#64748b" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" letterSpacing="3">LIVE EVENTS</text>
        <circle cx="186" cy="142" r="4" fill="#10b981">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.6s" repeatCount="indefinite" />
        </circle>

        {events.map((e, i) => {
          const y = pillStart + i * pillStride;
          const begin = i * 1.5;
          return (
            <g key={i}>
              <rect x="80" y={y} width="500" height="50" rx="12" fill="#0f1e36" stroke="#1e293b" strokeWidth="1" />
              <rect x="80" y={y} width="500" height="50" rx="12" fill={e.accent} opacity="0">
                <animate
                  attributeName="opacity"
                  values="0;0.14;0.14;0"
                  keyTimes="0;0.04;0.18;0.24"
                  dur={`${pillCycle}s`}
                  begin={`${begin}s`}
                  repeatCount="indefinite"
                />
              </rect>
              <rect x="80" y={y + 8} width="3" height="34" rx="1.5" fill={e.accent} opacity="0.35">
                <animate
                  attributeName="opacity"
                  values="0.35;1;1;0.35"
                  keyTimes="0;0.04;0.18;0.24"
                  dur={`${pillCycle}s`}
                  begin={`${begin}s`}
                  repeatCount="indefinite"
                />
              </rect>
              <circle cx="108" cy={y + 25} r="4" fill={e.accent} opacity="0.7" />
              <text x="124" y={y + 30} fill="#cbd5e1" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600" letterSpacing="0.5">
                {e.label}
              </text>
              <text x="560" y={y + 30} textAnchor="end" fill="#475569" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="12" fontWeight="500">
                {e.age}
              </text>
            </g>
          );
        })}

        {/* RIGHT TOP: KPI cards */}
        {kpis.map((c) => (
          <g key={`${c.x}-${c.y}`}>
            <rect x={c.x} y={c.y} width="280" height="120" rx="14" fill="#0f1e36" stroke="#1e293b" strokeWidth="1" />
            <text x={c.x + 22} y={c.y + 34} fill="#64748b" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" letterSpacing="2.5">
              {c.label}
            </text>
            <text x={c.x + 22} y={c.y + 88} fill={c.color} fontFamily="system-ui, sans-serif" fontSize="44" fontWeight="700" letterSpacing="-0.5">
              {c.value}
            </text>
          </g>
        ))}

        {/* RIGHT BOTTOM: voice agent */}
        <rect x="620" y="430" width="580" height="230" rx="14" fill="#0f1e36" stroke="#1e293b" strokeWidth="1" />
        <text x="640" y="468" fill="#64748b" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" letterSpacing="2.5">VOICE AGENT</text>
        <g transform="translate(770 458)">
          <rect x="0" y="-14" width="74" height="22" rx="11" fill="#10b981" opacity="0.18" />
          <circle cx="14" cy="-3" r="3.5" fill="#10b981">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.6s" repeatCount="indefinite" />
          </circle>
          <text x="24" y="2" fill="#10b981" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" letterSpacing="2">ACTIVE</text>
        </g>

        <g transform="translate(660 490)">
          {Array.from({ length: eqBars }).map((_, i) => {
            const peak1 = 28 + ((i * 13) % 32);
            const peak2 = 18 + ((i * 7) % 26);
            const peak3 = 38 + ((i * 19) % 36);
            return (
              <rect key={i} x={i * 56} y={eqBaseY - 14} width="22" height="14" rx="4" fill="url(#pim-bar)">
                <animate
                  attributeName="height"
                  values={`14;${peak1};${peak2};${peak3};14`}
                  dur="1.4s"
                  begin={`${i * 0.1}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y"
                  values={`${eqBaseY - 14};${eqBaseY - peak1};${eqBaseY - peak2};${eqBaseY - peak3};${eqBaseY - 14}`}
                  dur="1.4s"
                  begin={`${i * 0.1}s`}
                  repeatCount="indefinite"
                />
              </rect>
            );
          })}
        </g>

        <text x="640" y="640" fill="#94a3b8" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="500" letterSpacing="0.5" opacity="0.85">
          Sarah B · account #2843 · listening
        </text>
      </svg>
    </div>
  );
}
