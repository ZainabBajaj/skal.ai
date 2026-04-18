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

            {/* Right: Abstract Visual — Architecture / Building blocks */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Grid background */}
                {[100, 150, 200, 250, 300, 350, 400].map((y) => (
                  <line key={`h-${y}`} x1="80" y1={y} x2="420" y2={y} stroke="#009bd7" strokeWidth="0.5" opacity="0.08" />
                ))}
                {[100, 150, 200, 250, 300, 350, 400].map((x) => (
                  <line key={`v-${x}`} x1={x} y1="80" x2={x} y2="420" stroke="#009bd7" strokeWidth="0.5" opacity="0.08" />
                ))}

                {/* Architecture blocks */}
                <rect x="150" y="320" width="200" height="50" rx="8" fill="#009bd7" fillOpacity="0.12" stroke="#009bd7" strokeWidth="1" strokeOpacity="0.3" />
                <text x="250" y="350" textAnchor="middle" fill="#009bd7" fontSize="12" fontWeight="600" opacity="0.5">INFRASTRUCTURE</text>

                <rect x="130" y="240" width="100" height="60" rx="8" fill="#00E1FF" fillOpacity="0.1" stroke="#00E1FF" strokeWidth="1" strokeOpacity="0.25" />
                <rect x="270" y="240" width="100" height="60" rx="8" fill="#00E1FF" fillOpacity="0.1" stroke="#00E1FF" strokeWidth="1" strokeOpacity="0.25" />

                <rect x="170" y="160" width="160" height="55" rx="8" fill="#1DB5C5" fillOpacity="0.1" stroke="#1DB5C5" strokeWidth="1" strokeOpacity="0.25" />

                <rect x="200" y="100" width="100" height="40" rx="8" fill="#009bd7" fillOpacity="0.15" stroke="#009bd7" strokeWidth="1" strokeOpacity="0.35" />
                <text x="250" y="124" textAnchor="middle" fill="#009bd7" fontSize="11" fontWeight="600" opacity="0.6">AI LAYER</text>

                {/* Connection lines between blocks */}
                <line x1="180" y1="240" x2="220" y2="215" stroke="#009bd7" strokeWidth="1" opacity="0.2" />
                <line x1="320" y1="240" x2="280" y2="215" stroke="#009bd7" strokeWidth="1" opacity="0.2" />
                <line x1="250" y1="160" x2="250" y2="140" stroke="#00E1FF" strokeWidth="1" opacity="0.2" />
                <line x1="180" y1="320" x2="180" y2="300" stroke="#1DB5C5" strokeWidth="1" opacity="0.2" />
                <line x1="320" y1="320" x2="320" y2="300" stroke="#1DB5C5" strokeWidth="1" opacity="0.2" />

                {/* Data flow dots */}
                <circle cx="180" cy="270" r="3" fill="#009bd7" opacity="0.5" />
                <circle cx="320" cy="270" r="3" fill="#00E1FF" opacity="0.5" />
                <circle cx="250" cy="188" r="3" fill="#1DB5C5" opacity="0.5" />
                <circle cx="250" cy="120" r="3" fill="#009bd7" opacity="0.6" />
                <circle cx="250" cy="345" r="3" fill="#00E1FF" opacity="0.4" />
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
