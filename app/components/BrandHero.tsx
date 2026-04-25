"use client";

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-[#0f172a] dark:text-white mb-6 leading-snug pb-1 animate-fade-in-up" style={{ animationDelay: '80ms' }}>
              AI that does the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] via-[#00E1FF] to-[#1DB5C5]">
                work.
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-[#0f172a] dark:text-white max-w-xl mx-auto lg:mx-0 leading-relaxed mb-4 font-semibold animate-fade-in-up" style={{ animationDelay: '160ms' }}>
              The All-in-One AI Workforce for Growing Businesses.
            </p>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '220ms' }}>
              Pick the line that fits and we handle the rest.
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
          </div>

          {/* Right: convergence flow — work in, growth out */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none animate-fade-in-up" style={{ animationDelay: '380ms' }}>
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

              {/* Input source dots — four product lines (with labels) */}
              <g>
                <circle cx="90" cy="130" r="11" fill="#009bd7" opacity="0.18" />
                <circle cx="90" cy="130" r="6" fill="#009bd7" filter="url(#bh-glow)" />
                <circle cx="90" cy="130" r="2.5" fill="#FFFFFF">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite" />
                </circle>
                <text x="76" y="128" textAnchor="end" fill="#009bd7" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="1.5" opacity="0.95">SCALE</text>
                <text x="76" y="142" textAnchor="end" fill="currentColor" className="text-[#0f172a] dark:text-white" fontSize="8" fontWeight="500" fontFamily="system-ui, sans-serif" fontStyle="italic" opacity="0.5">sells</text>

                <circle cx="90" cy="200" r="11" fill="#00E1FF" opacity="0.18" />
                <circle cx="90" cy="200" r="6" fill="#00E1FF" filter="url(#bh-glow)" />
                <circle cx="90" cy="200" r="2.5" fill="#FFFFFF">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" begin="0.6s" repeatCount="indefinite" />
                </circle>
                <text x="76" y="198" textAnchor="end" className="fill-[#0098bd] dark:fill-[#00E1FF]" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="1.5" opacity="0.95">SYSTEMS</text>
                <text x="76" y="212" textAnchor="end" fill="currentColor" className="text-[#0f172a] dark:text-white" fontSize="8" fontWeight="500" fontFamily="system-ui, sans-serif" fontStyle="italic" opacity="0.5">deploys</text>

                <circle cx="90" cy="270" r="11" fill="#1DB5C5" opacity="0.18" />
                <circle cx="90" cy="270" r="6" fill="#1DB5C5" filter="url(#bh-glow)" />
                <circle cx="90" cy="270" r="2.5" fill="#FFFFFF">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
                </circle>
                <text x="76" y="268" textAnchor="end" fill="#1DB5C5" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="1.5" opacity="0.95">SERVICES</text>
                <text x="76" y="282" textAnchor="end" fill="currentColor" className="text-[#0f172a] dark:text-white" fontSize="8" fontWeight="500" fontFamily="system-ui, sans-serif" fontStyle="italic" opacity="0.5">fits</text>

                <circle cx="90" cy="340" r="11" fill="#3da9c9" opacity="0.18" />
                <circle cx="90" cy="340" r="6" fill="#3da9c9" filter="url(#bh-glow)" />
                <circle cx="90" cy="340" r="2.5" fill="#FFFFFF">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" begin="1.8s" repeatCount="indefinite" />
                </circle>
                <text x="76" y="338" textAnchor="end" fill="#3da9c9" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="1.5" opacity="0.95">STAFFING</text>
                <text x="76" y="352" textAnchor="end" fill="currentColor" className="text-[#0f172a] dark:text-white" fontSize="8" fontWeight="500" fontFamily="system-ui, sans-serif" fontStyle="italic" opacity="0.5">executes</text>
              </g>

              {/* Animated luminance dots flowing each input → core */}
              <g fill="#FFFFFF" filter="url(#bh-glow)">
                <circle r="3.5">
                  <animateMotion dur="3s" repeatCount="indefinite">
                    <mpath href="#bh-in-1" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle r="3.5">
                  <animateMotion dur="3.2s" begin="0.7s" repeatCount="indefinite">
                    <mpath href="#bh-in-2" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="3.2s" begin="0.7s" repeatCount="indefinite" />
                </circle>
                <circle r="3.5">
                  <animateMotion dur="3.1s" begin="1.4s" repeatCount="indefinite">
                    <mpath href="#bh-in-3" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="3.1s" begin="1.4s" repeatCount="indefinite" />
                </circle>
                <circle r="3.5">
                  <animateMotion dur="3.3s" begin="2.1s" repeatCount="indefinite">
                    <mpath href="#bh-in-4" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="3.3s" begin="2.1s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Animated luminance dots flowing core → growth (heavier traffic on output) */}
              <g fill="#00E1FF" filter="url(#bh-glow)">
                <circle r="4.5">
                  <animateMotion dur="2.4s" repeatCount="indefinite">
                    <mpath href="#bh-out-path" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.4s" repeatCount="indefinite" />
                </circle>
                <circle r="4.5">
                  <animateMotion dur="2.4s" begin="0.8s" repeatCount="indefinite">
                    <mpath href="#bh-out-path" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
                </circle>
                <circle r="4.5">
                  <animateMotion dur="2.4s" begin="1.6s" repeatCount="indefinite">
                    <mpath href="#bh-out-path" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.4s" begin="1.6s" repeatCount="indefinite" />
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

              {/* Done target (top right outcome) */}
              <g>
                <circle cx="430" cy="90" r="20" fill="url(#bh-target)" opacity="0.6" />
                <circle cx="430" cy="90" r="13" fill="#00E1FF" opacity="0.85" filter="url(#bh-glow)" />
                <path d="M 423 90 L 428 95 L 437 84" stroke="#FFFFFF" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
                </path>
                {/* Completion bursts: a ring expands outward each time a dot arrives at DONE */}
                <circle cx="430" cy="90" r="13" fill="none" stroke="#22c55e" strokeWidth="1.6">
                  <animate attributeName="r" values="13;32" keyTimes="0;0.5" dur="2.4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.9;0;0;0" keyTimes="0;0.5;0.51;1" dur="2.4s" repeatCount="indefinite" />
                </circle>
                <circle cx="430" cy="90" r="13" fill="none" stroke="#22c55e" strokeWidth="1.6">
                  <animate attributeName="r" values="13;32" keyTimes="0;0.5" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.9;0;0;0" keyTimes="0;0.5;0.51;1" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="430" cy="90" r="13" fill="none" stroke="#22c55e" strokeWidth="1.6">
                  <animate attributeName="r" values="13;32" keyTimes="0;0.5" dur="2.4s" begin="1.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.9;0;0;0" keyTimes="0;0.5;0.51;1" dur="2.4s" begin="1.6s" repeatCount="indefinite" />
                </circle>
                <text x="430" y="55" textAnchor="middle" fill="currentColor" className="text-[#0f172a] dark:text-white" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2" opacity="0.75">DONE</text>
              </g>

              {/* "THIS WEEK" annotation along the trend */}
              <text x="320" y="245" textAnchor="start" fill="currentColor" className="text-[#0f172a] dark:text-white" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2" opacity="0.45">THIS WEEK</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandHero;
