"use client";

import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const BrandHero = () => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#009bd7]/8 to-[#00E1FF]/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#00E1FF]/6 to-[#009bd7]/4 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#1DB5C5]/4 to-[#009bd7]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/20 dark:to-[#00E1FF]/20 rounded-full px-6 py-2 mb-8 backdrop-blur-sm border border-[#009bd7]/20 dark:border-[#00E1FF]/30">
              <Sparkles className="w-4 h-4 text-[#009bd7] dark:text-[#00E1FF]" />
              <span className="text-[#009bd7] dark:text-[#00E1FF] text-sm font-bold tracking-wider">WELCOME TO SKAL</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-[#0f172a] dark:text-white mb-6 leading-snug pb-1">
              AI That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] via-[#00E1FF] to-[#1DB5C5]">
                Builds.
              </span>
              <br />
              AI That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DB5C5] via-[#00E1FF] to-[#009bd7]">
                Sells.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
              Two products. One mission.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF] font-semibold">
                Exponential growth
              </span>{' '}
              for your business.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://calendly.com/skal-ai/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#009bd7]/25 hover:scale-105 active:scale-95"
              >
                <span>Schedule a Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/systems"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#009bd7] dark:border-[#00E1FF] text-[#009bd7] dark:text-[#00E1FF] font-bold rounded-2xl transition-all duration-300 hover:bg-[#009bd7] hover:text-white dark:hover:bg-[#00E1FF] dark:hover:text-[#0f172a] hover:scale-105 active:scale-95"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right: Abstract Visual — infinity loop (two products, one system) */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-auto text-[#0f172a] dark:text-white">
              <defs>
                <linearGradient id="bh-path" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#009bd7" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#00E1FF" stopOpacity="1" />
                  <stop offset="100%" stopColor="#1DB5C5" stopOpacity="0.95" />
                </linearGradient>
                <radialGradient id="bh-left-lobe" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#009bd7" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#009bd7" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="bh-right-lobe" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00E1FF" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#00E1FF" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="bh-nexus" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="45%" stopColor="#00E1FF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00E1FF" stopOpacity="0" />
                </radialGradient>
                <filter id="bh-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <path id="bh-infinity" d="M 250 250 C 250 150, 120 150, 120 250 C 120 350, 250 350, 250 250 C 250 150, 380 150, 380 250 C 380 350, 250 350, 250 250" />
              </defs>

              {/* Lobe auras */}
              <circle cx="120" cy="250" r="118" fill="url(#bh-left-lobe)" />
              <circle cx="380" cy="250" r="118" fill="url(#bh-right-lobe)" />

              {/* Sparse ambient particles */}
              <g fill="currentColor" opacity="0.22">
                <circle cx="60" cy="110" r="2" />
                <circle cx="440" cy="115" r="2" />
                <circle cx="85" cy="415" r="2" />
                <circle cx="420" cy="405" r="2" />
                <circle cx="250" cy="75" r="1.7" />
                <circle cx="250" cy="430" r="1.7" />
                <circle cx="40" cy="265" r="1.5" />
                <circle cx="460" cy="240" r="1.5" />
              </g>

              {/* Infinity path: glowing outer stroke */}
              <use href="#bh-infinity" stroke="url(#bh-path)" strokeWidth="3" strokeLinecap="round" opacity="0.95" filter="url(#bh-glow)" />
              {/* Infinity path: crisp inner highlight */}
              <use href="#bh-infinity" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />

              {/* Left focus (Builds) */}
              <circle cx="120" cy="250" r="16" fill="#009bd7" opacity="0.22" />
              <circle cx="120" cy="250" r="9" fill="#009bd7" filter="url(#bh-glow)" />
              <circle cx="120" cy="250" r="4" fill="#FFFFFF">
                <animate attributeName="opacity" values="0.7;1;0.7" dur="2.6s" repeatCount="indefinite" />
              </circle>

              {/* Right focus (Sells) */}
              <circle cx="380" cy="250" r="16" fill="#00E1FF" opacity="0.22" />
              <circle cx="380" cy="250" r="9" fill="#00E1FF" filter="url(#bh-glow)" />
              <circle cx="380" cy="250" r="4" fill="#FFFFFF">
                <animate attributeName="opacity" values="1;0.7;1" dur="2.6s" repeatCount="indefinite" />
              </circle>

              {/* Central nexus (crossover) */}
              <circle cx="250" cy="250" r="26" fill="url(#bh-nexus)" opacity="0.85" />
              <circle cx="250" cy="250" r="7" fill="#FFFFFF" filter="url(#bh-glow)" />

              {/* Pulse ring emanating from nexus */}
              <circle cx="250" cy="250" r="15" fill="none" stroke="#00E1FF" strokeWidth="1.5">
                <animate attributeName="r" values="10;60;10" dur="3.6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.85;0;0.85" dur="3.6s" repeatCount="indefinite" />
              </circle>

              {/* Luminance dot traveling the infinity loop */}
              <circle r="5.5" fill="#FFFFFF" filter="url(#bh-glow)">
                <animateMotion dur="6s" repeatCount="indefinite">
                  <mpath href="#bh-infinity" />
                </animateMotion>
              </circle>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandHero;
