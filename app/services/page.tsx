'use client';

import { Code, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';
import Reveal from '../components/Reveal';

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#009bd7]/8 to-[#00E1FF]/6 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#00E1FF]/6 to-[#009bd7]/4 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto">
            {/* Left: Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/20 dark:to-[#00E1FF]/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-[#009bd7]/20 dark:border-[#00E1FF]/30 animate-fade-in-up">
                <Code className="w-4 h-4 text-[#009bd7] dark:text-[#00E1FF]" />
                <span className="text-[#009bd7] dark:text-[#00E1FF] text-sm font-bold tracking-wider">SKAL SERVICES</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-[#0f172a] dark:text-white mb-6 leading-snug pb-1 animate-fade-in-up" style={{ animationDelay: '80ms' }}>
                AI That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] via-[#00E1FF] to-[#1DB5C5]">
                  Fits
                </span>
              </h1>

              <p className="text-lg text-[#009bd7] dark:text-[#00E1FF] font-semibold max-w-xl mx-auto lg:mx-0 mb-4 animate-fade-in-up" style={{ animationDelay: '160ms' }}>
                For businesses that need something built from scratch.
              </p>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '220ms' }}>
                When off the shelf is not enough, we build from the ground up. SKAL Services covers fully custom AI agents, agentic workflows, and software development scoped entirely around your business requirements. If you can describe the problem, we can build the solution. No templates, no shortcuts, no compromises.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#009bd7]/25 hover:scale-105"
                >
                  Tell us what you need
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right: Custom-build assembly visual */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none animate-fade-in-up" style={{ animationDelay: '380ms' }}>
              <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-auto text-[#0f172a] dark:text-white">
                <defs>
                  <linearGradient id="sv-block-a" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#009bd7" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#00E1FF" stopOpacity="0.45" />
                  </linearGradient>
                  <linearGradient id="sv-block-b" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00E1FF" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#1DB5C5" stopOpacity="0.45" />
                  </linearGradient>
                  <linearGradient id="sv-block-c" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1DB5C5" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#009bd7" stopOpacity="0.45" />
                  </linearGradient>
                  <radialGradient id="sv-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00E1FF" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#00E1FF" stopOpacity="0" />
                  </radialGradient>
                  <filter id="sv-blur" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" />
                  </filter>
                </defs>

                {/* Ambient backlight */}
                <ellipse cx="250" cy="260" rx="180" ry="160" fill="url(#sv-glow)" filter="url(#sv-blur)" />

                {/* Outer frame: client's business shape */}
                <rect x="115" y="125" width="270" height="270" rx="24" fill="none" stroke="#009bd7" strokeWidth="1.6" strokeDasharray="6 5" opacity="0.55">
                  <animate attributeName="stroke-dashoffset" from="0" to="-22" dur="6s" repeatCount="indefinite" />
                </rect>

                {/* Frame label */}
                <text x="250" y="115" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2" opacity="0.6">YOUR BUSINESS</text>

                {/* Block A — settled top-left */}
                <g>
                  <rect x="135" y="145" width="105" height="80" rx="14" fill="url(#sv-block-a)" stroke="#009bd7" strokeWidth="1.2" strokeOpacity="0.7" />
                  <rect x="148" y="158" width="50" height="6" rx="3" fill="#FFFFFF" opacity="0.55" />
                  <rect x="148" y="172" width="78" height="4" rx="2" fill="#FFFFFF" opacity="0.35" />
                  <rect x="148" y="183" width="65" height="4" rx="2" fill="#FFFFFF" opacity="0.35" />
                  <circle cx="225" cy="212" r="4" fill="#FFFFFF" opacity="0.7" />
                </g>

                {/* Block B — settled top-right */}
                <g>
                  <rect x="260" y="145" width="105" height="105" rx="14" fill="url(#sv-block-b)" stroke="#00E1FF" strokeWidth="1.2" strokeOpacity="0.7" />
                  <circle cx="312" cy="195" r="22" fill="none" stroke="#FFFFFF" strokeWidth="1.4" opacity="0.6" />
                  <circle cx="312" cy="195" r="6" fill="#FFFFFF" opacity="0.85" />
                  <line x1="312" y1="217" x2="312" y2="240" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.5" />
                </g>

                {/* Block C — animated, dropping into bottom-left */}
                <g>
                  <rect x="135" y="245" width="105" height="135" rx="14" fill="url(#sv-block-c)" stroke="#1DB5C5" strokeWidth="1.2" strokeOpacity="0.7">
                    <animate attributeName="y" values="-20;245;245;245" keyTimes="0;0.25;0.85;1" dur="5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;1;1" keyTimes="0;0.25;0.85;1" dur="5s" repeatCount="indefinite" />
                  </rect>
                  <g>
                    <animate attributeName="opacity" values="0;1;1;1" keyTimes="0;0.25;0.85;1" dur="5s" repeatCount="indefinite" />
                    <rect x="148" y="260" width="60" height="6" rx="3" fill="#FFFFFF" opacity="0.6" />
                    <rect x="148" y="275" width="78" height="4" rx="2" fill="#FFFFFF" opacity="0.35" />
                    <rect x="148" y="287" width="55" height="4" rx="2" fill="#FFFFFF" opacity="0.35" />
                    <rect x="148" y="305" width="78" height="60" rx="8" fill="#0f172a" opacity="0.4" stroke="#FFFFFF" strokeOpacity="0.3" />
                    <line x1="158" y1="320" x2="200" y2="320" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.55" />
                    <line x1="158" y1="332" x2="215" y2="332" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.4" />
                    <line x1="158" y1="344" x2="195" y2="344" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.4" />
                    <line x1="158" y1="356" x2="208" y2="356" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.4" />
                  </g>
                </g>

                {/* Block D — animated, sliding into bottom-right */}
                <g>
                  <rect x="260" y="270" width="105" height="110" rx="14" fill="url(#sv-block-a)" stroke="#009bd7" strokeWidth="1.2" strokeOpacity="0.7">
                    <animate attributeName="x" values="450;260;260;260" keyTimes="0;0.4;0.9;1" dur="5.5s" begin="0.8s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;1;1" keyTimes="0;0.4;0.9;1" dur="5.5s" begin="0.8s" repeatCount="indefinite" />
                  </rect>
                  <g>
                    <animate attributeName="opacity" values="0;1;1;1" keyTimes="0;0.4;0.9;1" dur="5.5s" begin="0.8s" repeatCount="indefinite" />
                    <rect x="275" y="285" width="60" height="6" rx="3" fill="#FFFFFF" opacity="0.6" />
                    <g transform="translate(280, 305)">
                      <rect width="65" height="14" rx="7" fill="#FFFFFF" opacity="0.18" />
                      <rect width="42" height="14" rx="7" fill="#FFFFFF" opacity="0.55" />
                    </g>
                    <g transform="translate(280, 327)">
                      <rect width="65" height="14" rx="7" fill="#FFFFFF" opacity="0.18" />
                      <rect width="22" height="14" rx="7" fill="#FFFFFF" opacity="0.55" />
                    </g>
                    <g transform="translate(280, 349)">
                      <rect width="65" height="14" rx="7" fill="#FFFFFF" opacity="0.18" />
                      <rect width="55" height="14" rx="7" fill="#FFFFFF" opacity="0.55" />
                    </g>
                  </g>
                </g>

                {/* Connector seams between blocks */}
                <g stroke="#FFFFFF" strokeWidth="1" opacity="0.25" strokeDasharray="2 4">
                  <line x1="240" y1="185" x2="260" y2="185" />
                  <line x1="240" y1="320" x2="260" y2="320" />
                  <line x1="187" y1="225" x2="187" y2="245" />
                  <line x1="312" y1="250" x2="312" y2="270" />
                </g>

                {/* Incoming pieces in upper area (queue of "to be built") */}
                <g opacity="0.55">
                  <rect x="60" y="50" width="40" height="28" rx="6" fill="none" stroke="#009bd7" strokeWidth="1.2" strokeDasharray="2 3" />
                  <rect x="115" y="40" width="32" height="28" rx="6" fill="none" stroke="#00E1FF" strokeWidth="1.2" strokeDasharray="2 3" />
                  <rect x="400" y="55" width="40" height="28" rx="6" fill="none" stroke="#1DB5C5" strokeWidth="1.2" strokeDasharray="2 3" />
                </g>

                {/* Status chip */}
                <g transform="translate(355, 425)">
                  <rect x="-78" y="-12" width="135" height="24" rx="12" fill="#0f172a" stroke="#00E1FF" strokeWidth="0.8" />
                  <circle cx="-60" cy="0" r="3" fill="#22c55e">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="1.6s" repeatCount="indefinite" />
                  </circle>
                  <text x="-50" y="3" fill="#FFFFFF" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="1.5">SCOPED TO YOU</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <div id="paths">
          <Services />
        </div>
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <FAQ />
      <ContactForm />
      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
