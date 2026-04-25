"use client";

import { ArrowRight, TrendingUp, Bot, Wrench, Users, type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const inputNodes: {
  label: string;
  subtext: string;
  icon: LucideIcon;
  topPct: number;
  labelClass: string;
}[] = [
  { label: 'SCALE',    subtext: 'sells',    icon: TrendingUp, topPct: 26, labelClass: 'text-[#009bd7] dark:text-[#009bd7]' },
  { label: 'SYSTEMS',  subtext: 'deploys',  icon: Bot,        topPct: 40, labelClass: 'text-[#0098bd] dark:text-[#00E1FF]' },
  { label: 'SERVICES', subtext: 'fits',     icon: Wrench,     topPct: 54, labelClass: 'text-[#1DB5C5] dark:text-[#1DB5C5]' },
  { label: 'STAFFING', subtext: 'executes', icon: Users,      topPct: 68, labelClass: 'text-[#3da9c9] dark:text-[#3da9c9]' },
];

const BrandHero = () => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#009bd7]/8 to-[#00E1FF]/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#00E1FF]/6 to-[#009bd7]/4 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#1DB5C5]/4 to-[#009bd7]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#009bd7] dark:text-[#00E1FF] mb-4 animate-fade-in-up" style={{ animationDelay: '40ms' }}>
              FOUR DELIVERY LINES
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-[#0f172a] dark:text-white mb-6 leading-tight pb-1 animate-fade-in-up" style={{ animationDelay: '120ms' }}>
              One AI{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] via-[#00E1FF] to-[#1DB5C5]">
                partner.
              </span>
            </h1>

            <ul className="space-y-2 text-base sm:text-lg text-gray-700 dark:text-gray-200 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '160ms' }}>
              {[
                { icon: TrendingUp, keyword: 'pipeline', after: ' runs itself.', color: 'text-[#009bd7]' },
                { icon: Bot,        keyword: 'support',  after: ' handles itself.', color: 'text-[#0098bd] dark:text-[#00E1FF]' },
                { icon: Wrench,     keyword: 'systems',  after: ' built for you.', color: 'text-[#1DB5C5]' },
                { icon: Users,      keyword: 'talent',   after: ' ships from day one.', color: 'text-[#3da9c9]' },
              ].map(({ icon: Icon, keyword, after, color }) => (
                <li key={keyword} className="flex items-center gap-2.5 justify-center lg:justify-start">
                  <Icon className={`w-4 h-4 shrink-0 ${color}`} strokeWidth={2.2} />
                  <span>
                    Your <span className={`font-semibold ${color}`}>{keyword}</span>{after}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10 font-semibold animate-fade-in-up" style={{ animationDelay: '220ms' }}>
              Start anywhere. We take it from there.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <a
                href="https://calendly.com/skal-ai/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#009bd7]/25 hover:scale-105 active:scale-95"
              >
                <span>Schedule a discovery call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="#products"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#009bd7] dark:border-[#00E1FF] text-[#009bd7] dark:text-[#00E1FF] font-bold rounded-2xl transition-all duration-300 hover:bg-[#009bd7] hover:text-white dark:hover:bg-[#00E1FF] dark:hover:text-[#0f172a] hover:scale-105 active:scale-95"
              >
                <span>See what we do</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 animate-fade-in-up" style={{ animationDelay: '380ms' }}>
              Built by an AI team based in Dubai and Lahore.{' '}
              <Link href="/about" className="font-semibold text-[#009bd7] dark:text-[#00E1FF] hover:underline">
                Meet the team →
              </Link>
            </p>
          </div>

          {/* Right: convergence flow — work in, growth out */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl animate-fade-in-up relative" style={{ animationDelay: '380ms' }}>
            <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-auto">
              <defs>
                <radialGradient id="bh-ambient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00E1FF" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#00E1FF" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="bh-flow" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#009bd7" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#00E1FF" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#1DB5C5" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="bh-out" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00E1FF" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#1DB5C5" stopOpacity="0.7" />
                </linearGradient>
                <radialGradient id="bh-core" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="bh-puck" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="75%" stopColor="#e5f4fa" stopOpacity="1" />
                  <stop offset="100%" stopColor="#b2e0f0" stopOpacity="1" />
                </radialGradient>
                <radialGradient id="bh-sheen" cx="35%" cy="32%" r="55%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
                  <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="bh-target" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="60%" stopColor="#00E1FF" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#00E1FF" stopOpacity="0" />
                </radialGradient>
                <filter id="bh-blur" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" />
                </filter>
                <filter id="bh-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <path id="bh-in-1" d="M 90 130 Q 165 110, 250 230" />
                <path id="bh-in-2" d="M 90 200 Q 175 195, 250 230" />
                <path id="bh-in-3" d="M 90 270 Q 175 275, 250 230" />
                <path id="bh-in-4" d="M 90 340 Q 165 360, 250 230" />
                <path id="bh-out-path" d="M 250 230 L 295 218 L 325 222 L 355 198 L 385 175 L 415 120 L 430 90" />
              </defs>

              {/* Ambient backlight */}
              <ellipse cx="250" cy="240" rx="220" ry="200" fill="url(#bh-ambient)" filter="url(#bh-blur)" />

              {/* Sparse ambient particles */}
              <g fill="currentColor" opacity="0.15" className="text-[#0f172a] dark:text-white">
                <circle cx="40" cy="60" r="1.5" />
                <circle cx="460" cy="380" r="1.5" />
                <circle cx="35" cy="430" r="1.5" />
                <circle cx="470" cy="200" r="1.5" />
                <circle cx="200" cy="50" r="1.2" />
                <circle cx="300" cy="450" r="1.2" />
              </g>

              {/* Input curves */}
              <use href="#bh-in-1" stroke="url(#bh-flow)" strokeWidth="1.6" fill="none" opacity="0.65" />
              <use href="#bh-in-2" stroke="url(#bh-flow)" strokeWidth="1.6" fill="none" opacity="0.65" />
              <use href="#bh-in-3" stroke="url(#bh-flow)" strokeWidth="1.6" fill="none" opacity="0.65" />
              <use href="#bh-in-4" stroke="url(#bh-flow)" strokeWidth="1.6" fill="none" opacity="0.65" />

              {/* Output trend (sparkline-style growth chart) */}
              <use href="#bh-out-path" stroke="url(#bh-out)" strokeWidth="2.6" fill="none" opacity="0.95" filter="url(#bh-glow)" strokeLinecap="round" strokeLinejoin="round" />
              <use href="#bh-out-path" stroke="#FFFFFF" strokeWidth="0.7" fill="none" opacity="0.4" strokeLinecap="round" strokeLinejoin="round" />

              {/* Waypoint data points along the trend */}
              <g fill="#00E1FF" opacity="0.65">
                <circle cx="295" cy="218" r="2" />
                <circle cx="325" cy="222" r="2" />
                <circle cx="355" cy="198" r="2" />
                <circle cx="385" cy="175" r="2" />
                <circle cx="415" cy="120" r="2" />
              </g>


              {/* Animated luminance dots flowing each input → core (denser traffic for momentum) */}
              <g fill="#FFFFFF" filter="url(#bh-glow)">
                {/* Curve 1 — primary + trail */}
                <circle r="3.5">
                  <animateMotion dur="3s" repeatCount="indefinite">
                    <mpath href="#bh-in-1" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle r="2.5">
                  <animateMotion dur="3s" begin="-1.5s" repeatCount="indefinite">
                    <mpath href="#bh-in-1" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;0.7;0.7;0" keyTimes="0;0.15;0.85;1" dur="3s" begin="-1.5s" repeatCount="indefinite" />
                </circle>

                {/* Curve 2 */}
                <circle r="3.5">
                  <animateMotion dur="3.2s" begin="-2.5s" repeatCount="indefinite">
                    <mpath href="#bh-in-2" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="3.2s" begin="-2.5s" repeatCount="indefinite" />
                </circle>
                <circle r="2.5">
                  <animateMotion dur="3.2s" begin="-0.9s" repeatCount="indefinite">
                    <mpath href="#bh-in-2" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;0.7;0.7;0" keyTimes="0;0.15;0.85;1" dur="3.2s" begin="-0.9s" repeatCount="indefinite" />
                </circle>

                {/* Curve 3 */}
                <circle r="3.5">
                  <animateMotion dur="3.1s" begin="-1.7s" repeatCount="indefinite">
                    <mpath href="#bh-in-3" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="3.1s" begin="-1.7s" repeatCount="indefinite" />
                </circle>
                <circle r="2.5">
                  <animateMotion dur="3.1s" begin="-0.2s" repeatCount="indefinite">
                    <mpath href="#bh-in-3" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;0.7;0.7;0" keyTimes="0;0.15;0.85;1" dur="3.1s" begin="-0.2s" repeatCount="indefinite" />
                </circle>

                {/* Curve 4 */}
                <circle r="3.5">
                  <animateMotion dur="3.3s" begin="-1.0s" repeatCount="indefinite">
                    <mpath href="#bh-in-4" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="3.3s" begin="-1.0s" repeatCount="indefinite" />
                </circle>
                <circle r="2.5">
                  <animateMotion dur="3.3s" begin="-2.6s" repeatCount="indefinite">
                    <mpath href="#bh-in-4" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;0.7;0.7;0" keyTimes="0;0.15;0.85;1" dur="3.3s" begin="-2.6s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Animated luminance dots flowing core → growth (heavier, accelerating traffic) */}
              <g fill="#00E1FF" filter="url(#bh-glow)">
                <circle r="5">
                  <animateMotion dur="1.8s" repeatCount="indefinite">
                    <mpath href="#bh-out-path" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.92;1" dur="1.8s" repeatCount="indefinite" />
                </circle>
                <circle r="5">
                  <animateMotion dur="1.8s" begin="-0.45s" repeatCount="indefinite">
                    <mpath href="#bh-out-path" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.92;1" dur="1.8s" begin="-0.45s" repeatCount="indefinite" />
                </circle>
                <circle r="5">
                  <animateMotion dur="1.8s" begin="-0.9s" repeatCount="indefinite">
                    <mpath href="#bh-out-path" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.92;1" dur="1.8s" begin="-0.9s" repeatCount="indefinite" />
                </circle>
                <circle r="5">
                  <animateMotion dur="1.8s" begin="-1.35s" repeatCount="indefinite">
                    <mpath href="#bh-out-path" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.92;1" dur="1.8s" begin="-1.35s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* SKAL core */}
              <circle cx="250" cy="230" r="50" fill="url(#bh-core)" opacity="0.55" />
              <circle cx="250" cy="230" r="34" fill="url(#bh-puck)" />
              <circle cx="250" cy="230" r="34" fill="url(#bh-sheen)" />
              <circle cx="250" cy="230" r="34" fill="none" stroke="#FFFFFF" strokeWidth="1.4" opacity="0.45" />
              <image
                href="/skal-logo.svg"
                x="228"
                y="208"
                width="44"
                height="44"
                preserveAspectRatio="xMidYMid meet"
                className="animate-breathe"
                style={{ filter: 'drop-shadow(0 1px 2px rgba(15, 23, 42, 0.25))' }}
              />

              {/* Pulse from core */}
              <circle cx="250" cy="230" r="34" fill="none" stroke="#FFFFFF" strokeWidth="1.3">
                <animate attributeName="r" values="34;72;34" dur="3.6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0;0.5" dur="3.6s" repeatCount="indefinite" />
              </circle>

              {/* Speed callout — momentum lives along the trend */}
              <g>
                <rect x="290" y="237" width="115" height="20" rx="10" fill="#FFFFFF" stroke="#00E1FF" strokeWidth="0.8" opacity="0.95" />
                <circle cx="302" cy="247" r="2.5" fill="#22c55e">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="1.6s" repeatCount="indefinite" />
                </circle>
                <text x="312" y="251" textAnchor="start" fill="#009bd7" fontSize="9" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="1.5">LIVE IN DAYS</text>
              </g>

              {/* Growth target (top right) — your business growing with us, dialed up for momentum */}
              <g>
                <circle cx="430" cy="90" r="28" fill="url(#bh-target)" opacity="0.7" />
                <circle cx="430" cy="90" r="16" fill="#00E1FF" opacity="0.95" filter="url(#bh-glow)" />
                <circle cx="430" cy="90" r="16" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />
                {/* Upward arrow inside the target — the growth signal */}
                <path d="M 423 96 L 430 84 L 437 96 M 430 84 L 430 99" stroke="#FFFFFF" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <animate attributeName="opacity" values="0.85;1;0.85" dur="2.4s" repeatCount="indefinite" />
                </path>
                {/* Layered outward pulses — sustained, multi-ring momentum */}
                <circle cx="430" cy="90" r="16" fill="none" stroke="#00E1FF" strokeWidth="1.6">
                  <animate attributeName="r" values="16;42;16" dur="3.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.85;0;0.85" dur="3.6s" repeatCount="indefinite" />
                </circle>
                <circle cx="430" cy="90" r="16" fill="none" stroke="#00E1FF" strokeWidth="1.4">
                  <animate attributeName="r" values="16;42;16" dur="3.6s" begin="-1.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.7;0;0.7" dur="3.6s" begin="-1.8s" repeatCount="indefinite" />
                </circle>
                <text x="430" y="48" textAnchor="middle" fill="currentColor" className="text-[#0f172a] dark:text-white" fontSize="11" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="2" opacity="0.85">YOUR GROWTH</text>
              </g>

            </svg>

            {/* HTML icon node overlay — Lucide icons + labels */}
            {inputNodes.map((n, i) => {
              const Icon = n.icon;
              return (
                <motion.div
                  key={n.label}
                  className="absolute flex items-center gap-2 -translate-y-1/2 pointer-events-none"
                  style={{ right: '82%', top: `${n.topPct}%` }}
                  animate={{ y: [-3, 3, -3] }}
                  transition={{
                    duration: 5 + i * 0.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.5,
                  }}
                >
                  <div className="text-right whitespace-nowrap leading-tight">
                    <div className={`text-[11px] font-bold tracking-[0.18em] ${n.labelClass}`}>{n.label}</div>
                    <div className="text-[10px] text-gray-500 dark:text-gray-400 italic mt-0.5">{n.subtext}</div>
                  </div>
                  <div
                    className="w-9 h-9 rounded-xl bg-white dark:bg-gray-900 border border-cyan-100 dark:border-[#00E1FF]/25 flex items-center justify-center shrink-0"
                    style={{ boxShadow: '0 4px 16px rgba(0, 229, 255, 0.25), inset 0 1px 0 rgba(255,255,255,0.85)' }}
                  >
                    <Icon className="w-4 h-4 text-[#0f172a] dark:text-[#00E1FF]" strokeWidth={2.2} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandHero;
