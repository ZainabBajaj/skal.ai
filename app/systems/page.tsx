'use client';

import { Code, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

import FloatingThemeToggle from '../components/FloatingThemeToggle';

export default function SystemsPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Systems Hero */}
      <section className="pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#009bd7]/8 to-[#00E1FF]/6 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#00E1FF]/6 to-[#009bd7]/4 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto">
            {/* Left: Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/20 dark:to-[#00E1FF]/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-[#009bd7]/20 dark:border-[#00E1FF]/30">
                <Code className="w-4 h-4 text-[#009bd7] dark:text-[#00E1FF]" />
                <span className="text-[#009bd7] dark:text-[#00E1FF] text-sm font-bold tracking-wider">SKAL SYSTEMS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-[#0f172a] dark:text-white mb-6 leading-snug pb-1">
                AI That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] via-[#00E1FF] to-[#1DB5C5]">
                  Builds
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
                Custom AI architectures and tech solutions engineered for your business.
                From startup MVPs to enterprise-scale systems — we design, build, and deploy
                the infrastructure that powers your growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#services"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#009bd7]/25 hover:scale-105"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#009bd7] text-[#009bd7] dark:text-[#00E1FF] dark:border-[#00E1FF] font-bold rounded-2xl transition-all duration-300 hover:bg-[#009bd7]/5 dark:hover:bg-[#00E1FF]/5"
                >
                  Get a Quote
                </a>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                {[
                  { number: '1000+', label: 'AI Systems Integrated' },
                  { number: '50+', label: 'Tech Experts' },
                  { number: '10X', label: 'Average ROI' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF]">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Abstract Visual — Architecture stack with flowing data */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-auto">
                <defs>
                  <linearGradient id="sy-infra" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1DB5C5" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#1DB5C5" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#1DB5C5" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="sy-integ" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#009bd7" stopOpacity="0.25" />
                    <stop offset="50%" stopColor="#009bd7" stopOpacity="0.65" />
                    <stop offset="100%" stopColor="#009bd7" stopOpacity="0.25" />
                  </linearGradient>
                  <linearGradient id="sy-ai" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00E1FF" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#00E1FF" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00E1FF" stopOpacity="0.3" />
                  </linearGradient>
                  <radialGradient id="sy-ambient" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="#009bd7" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#009bd7" stopOpacity="0" />
                  </radialGradient>
                  <filter id="sy-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Ambient backdrop */}
                <rect x="0" y="0" width="500" height="500" fill="url(#sy-ambient)" />

                {/* Faded grid (only thin accent lines) */}
                <g stroke="#009bd7" strokeWidth="0.5" opacity="0.1">
                  <line x1="60" y1="100" x2="440" y2="100" />
                  <line x1="60" y1="190" x2="440" y2="190" />
                  <line x1="60" y1="280" x2="440" y2="280" />
                  <line x1="60" y1="370" x2="440" y2="370" />
                  <line x1="60" y1="450" x2="440" y2="450" />
                  <line x1="100" y1="60" x2="100" y2="440" />
                  <line x1="200" y1="60" x2="200" y2="440" />
                  <line x1="300" y1="60" x2="300" y2="440" />
                  <line x1="400" y1="60" x2="400" y2="440" />
                </g>

                {/* AI Layer (top) */}
                <g>
                  <rect x="120" y="110" width="260" height="72" rx="12" fill="url(#sy-ai)" stroke="#00E1FF" strokeWidth="1.5" strokeOpacity="0.7" />
                  <text x="250" y="155" textAnchor="middle" fill="#0f172a" fontSize="17" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="2">AI LAYER</text>
                  <circle cx="120" cy="146" r="4" fill="#00E1FF" filter="url(#sy-glow)" />
                  <circle cx="380" cy="146" r="4" fill="#00E1FF" filter="url(#sy-glow)" />
                  {/* Inner pulse dots */}
                  <circle cx="175" cy="168" r="2" fill="#FFFFFF" opacity="0.8">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="325" cy="168" r="2" fill="#FFFFFF" opacity="0.8">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" begin="1.2s" repeatCount="indefinite" />
                  </circle>
                </g>

                {/* Integrations (middle) */}
                <g>
                  <rect x="100" y="220" width="300" height="62" rx="10" fill="url(#sy-integ)" stroke="#009bd7" strokeWidth="1.5" strokeOpacity="0.65" />
                  <text x="250" y="258" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2">INTEGRATIONS</text>
                  <circle cx="100" cy="251" r="4" fill="#009bd7" filter="url(#sy-glow)" />
                  <circle cx="400" cy="251" r="4" fill="#009bd7" filter="url(#sy-glow)" />
                  {/* Partition markers */}
                  <rect x="170" y="268" width="6" height="6" rx="1" fill="#FFFFFF" opacity="0.55" />
                  <rect x="247" y="268" width="6" height="6" rx="1" fill="#FFFFFF" opacity="0.55" />
                  <rect x="324" y="268" width="6" height="6" rx="1" fill="#FFFFFF" opacity="0.55" />
                </g>

                {/* Infrastructure (bottom) */}
                <g>
                  <rect x="80" y="320" width="340" height="68" rx="10" fill="url(#sy-infra)" stroke="#1DB5C5" strokeWidth="1.5" strokeOpacity="0.65" />
                  <text x="250" y="361" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2">INFRASTRUCTURE</text>
                  <circle cx="80" cy="354" r="4" fill="#1DB5C5" filter="url(#sy-glow)" />
                  <circle cx="420" cy="354" r="4" fill="#1DB5C5" filter="url(#sy-glow)" />
                </g>

                {/* Inter-layer connectors (dashed, flowing) */}
                <g stroke="#00E1FF" strokeWidth="1" opacity="0.45" strokeDasharray="3 4">
                  <line x1="160" y1="220" x2="160" y2="182">
                    <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1.8s" repeatCount="indefinite" />
                  </line>
                  <line x1="250" y1="220" x2="250" y2="182">
                    <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="2s" begin="0.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="340" y1="220" x2="340" y2="182">
                    <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1.9s" begin="1s" repeatCount="indefinite" />
                  </line>
                </g>
                <g stroke="#1DB5C5" strokeWidth="1" opacity="0.45" strokeDasharray="3 4">
                  <line x1="160" y1="320" x2="160" y2="282">
                    <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="250" y1="320" x2="250" y2="282">
                    <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1.7s" begin="0.7s" repeatCount="indefinite" />
                  </line>
                  <line x1="340" y1="320" x2="340" y2="282">
                    <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="2.1s" begin="1.3s" repeatCount="indefinite" />
                  </line>
                </g>

                {/* Data-flow dots rising bottom → top */}
                <circle r="4" fill="#FFFFFF" opacity="0">
                  <animateMotion dur="3.5s" repeatCount="indefinite" path="M 160 390 L 160 108" />
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="3.5s" repeatCount="indefinite" />
                </circle>
                <circle r="4" fill="#FFFFFF" opacity="0">
                  <animateMotion dur="4s" begin="1.1s" repeatCount="indefinite" path="M 250 390 L 250 108" />
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="4s" begin="1.1s" repeatCount="indefinite" />
                </circle>
                <circle r="4" fill="#FFFFFF" opacity="0">
                  <animateMotion dur="3.8s" begin="2.2s" repeatCount="indefinite" path="M 340 390 L 340 108" />
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="3.8s" begin="2.2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <About />
      <FAQ />
      <ContactForm />
      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
