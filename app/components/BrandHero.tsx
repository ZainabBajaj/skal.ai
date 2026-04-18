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

          {/* Right: Abstract Visual */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              {/* Central node cluster */}
              <circle cx="250" cy="250" r="60" fill="url(#hero-grad1)" opacity="0.15" />
              <circle cx="250" cy="250" r="40" fill="url(#hero-grad1)" opacity="0.25" />
              <circle cx="250" cy="250" r="8" fill="#009bd7" />

              {/* Orbiting nodes */}
              <circle cx="250" cy="130" r="6" fill="#00E1FF" />
              <circle cx="355" cy="195" r="5" fill="#009bd7" />
              <circle cx="355" cy="305" r="6" fill="#1DB5C5" />
              <circle cx="250" cy="370" r="5" fill="#00E1FF" />
              <circle cx="145" cy="305" r="6" fill="#009bd7" />
              <circle cx="145" cy="195" r="5" fill="#1DB5C5" />

              {/* Connection lines */}
              <line x1="250" y1="250" x2="250" y2="130" stroke="#009bd7" strokeWidth="1" opacity="0.3" />
              <line x1="250" y1="250" x2="355" y2="195" stroke="#00E1FF" strokeWidth="1" opacity="0.3" />
              <line x1="250" y1="250" x2="355" y2="305" stroke="#1DB5C5" strokeWidth="1" opacity="0.3" />
              <line x1="250" y1="250" x2="250" y2="370" stroke="#00E1FF" strokeWidth="1" opacity="0.3" />
              <line x1="250" y1="250" x2="145" y2="305" stroke="#009bd7" strokeWidth="1" opacity="0.3" />
              <line x1="250" y1="250" x2="145" y2="195" stroke="#1DB5C5" strokeWidth="1" opacity="0.3" />

              {/* Outer ring connections */}
              <line x1="250" y1="130" x2="355" y2="195" stroke="#009bd7" strokeWidth="0.8" opacity="0.15" />
              <line x1="355" y1="195" x2="355" y2="305" stroke="#00E1FF" strokeWidth="0.8" opacity="0.15" />
              <line x1="355" y1="305" x2="250" y2="370" stroke="#1DB5C5" strokeWidth="0.8" opacity="0.15" />
              <line x1="250" y1="370" x2="145" y2="305" stroke="#00E1FF" strokeWidth="0.8" opacity="0.15" />
              <line x1="145" y1="305" x2="145" y2="195" stroke="#009bd7" strokeWidth="0.8" opacity="0.15" />
              <line x1="145" y1="195" x2="250" y2="130" stroke="#1DB5C5" strokeWidth="0.8" opacity="0.15" />

              {/* Floating satellite nodes */}
              <circle cx="120" cy="120" r="3" fill="#009bd7" opacity="0.5" />
              <circle cx="400" cy="140" r="4" fill="#00E1FF" opacity="0.4" />
              <circle cx="410" cy="380" r="3" fill="#1DB5C5" opacity="0.5" />
              <circle cx="90" cy="370" r="4" fill="#009bd7" opacity="0.4" />
              <circle cx="320" cy="80" r="3" fill="#00E1FF" opacity="0.3" />
              <circle cx="180" cy="420" r="3" fill="#1DB5C5" opacity="0.3" />

              {/* Faint connection to satellites */}
              <line x1="250" y1="130" x2="120" y2="120" stroke="#009bd7" strokeWidth="0.5" opacity="0.15" strokeDasharray="4 4" />
              <line x1="355" y1="195" x2="400" y2="140" stroke="#00E1FF" strokeWidth="0.5" opacity="0.15" strokeDasharray="4 4" />
              <line x1="355" y1="305" x2="410" y2="380" stroke="#1DB5C5" strokeWidth="0.5" opacity="0.15" strokeDasharray="4 4" />
              <line x1="145" y1="305" x2="90" y2="370" stroke="#009bd7" strokeWidth="0.5" opacity="0.15" strokeDasharray="4 4" />

              {/* Data flow arcs */}
              <path d="M 180 160 Q 215 100 280 130" stroke="#009bd7" strokeWidth="1.5" fill="none" opacity="0.2" />
              <path d="M 320 160 Q 380 220 355 290" stroke="#00E1FF" strokeWidth="1.5" fill="none" opacity="0.2" />
              <path d="M 180 340 Q 120 280 145 210" stroke="#1DB5C5" strokeWidth="1.5" fill="none" opacity="0.2" />

              {/* Abstract circuit lines */}
              <path d="M 250 250 L 250 210 L 290 210" stroke="#009bd7" strokeWidth="1.2" opacity="0.25" />
              <path d="M 250 250 L 210 250 L 210 290" stroke="#00E1FF" strokeWidth="1.2" opacity="0.25" />
              <path d="M 250 250 L 290 250 L 290 220" stroke="#1DB5C5" strokeWidth="1.2" opacity="0.25" />
              <rect x="286" y="206" width="8" height="8" rx="2" fill="#009bd7" opacity="0.3" />
              <rect x="206" y="286" width="8" height="8" rx="2" fill="#00E1FF" opacity="0.3" />
              <rect x="286" y="216" width="8" height="8" rx="2" fill="#1DB5C5" opacity="0.3" />

              {/* Gradients */}
              <defs>
                <radialGradient id="hero-grad1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#009bd7" />
                  <stop offset="100%" stopColor="#00E1FF" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandHero;
