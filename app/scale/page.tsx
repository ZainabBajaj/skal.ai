'use client';

import { TrendingUp, Zap, Target, BarChart3, Send, ArrowRight, Sparkles, Mail, Clock, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import FloatingThemeToggle from '../components/FloatingThemeToggle';
import { useLeadForm } from '../hooks/useLeadForm';

export default function ScalePage() {
  const { formRef, formData, status, handleChange, handleSubmit } = useLeadForm({
    name: '',
    email: '',
    company: '',
  });

  const features = [
    {
      icon: Target,
      title: 'AI-Powered Prospecting',
      description: 'Identify and qualify your ideal customers with precision targeting powered by advanced AI models.',
    },
    {
      icon: Mail,
      title: 'Automated Outreach',
      description: 'Personalized multi-channel sequences that engage prospects at scale without losing the human touch.',
    },
    {
      icon: BarChart3,
      title: 'Revenue Intelligence',
      description: 'Real-time analytics and insights that optimize your pipeline and predict deal outcomes.',
    },
    {
      icon: Zap,
      title: 'Instant Pipeline',
      description: 'Go from zero to a full sales pipeline in days, not months. AI handles the heavy lifting.',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Connect',
      description: 'Plug in your CRM and define your ideal customer profile. Setup takes minutes.',
    },
    {
      step: '02',
      title: 'Target',
      description: 'Our AI scans millions of signals to find prospects that match your exact criteria.',
    },
    {
      step: '03',
      title: 'Engage',
      description: 'Automated personalized outreach across email, LinkedIn, and more — at scale.',
    },
    {
      step: '04',
      title: 'Close',
      description: 'Warm leads flow directly into your pipeline. You focus on closing, we handle the rest.',
    },
  ];

  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Scale Hero */}
      <section className="pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-[#00E1FF]/8 to-[#1DB5C5]/6 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-[#009bd7]/6 to-[#00E1FF]/4 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto">
            {/* Left: Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/20 dark:to-[#00E1FF]/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-[#009bd7]/20 dark:border-[#00E1FF]/30">
                <TrendingUp className="w-4 h-4 text-[#009bd7] dark:text-[#00E1FF]" />
                <span className="text-[#009bd7] dark:text-[#00E1FF] text-sm font-bold tracking-wider">SKAL SCALE</span>
                <span className="ml-2 px-2 py-0.5 text-xs font-bold bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white rounded-full">COMING SOON</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-[#0f172a] dark:text-white mb-6 leading-snug pb-1">
                AI That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] via-[#00E1FF] to-[#1DB5C5]">
                  Sells
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-4">
                The outbound lead generation platform that 10X&apos;s your revenue.
                AI-powered prospecting, automated outreach, and intelligent pipeline management — all in one place.
              </p>

              <p className="text-base text-[#009bd7] dark:text-[#00E1FF] font-semibold mb-8">
                Be the first to access SKAL Scale. Join the waitlist.
              </p>

              <a
                href="#waitlist"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#009bd7]/25 hover:scale-105"
              >
                Join the Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right: Abstract Visual — Growth / Pipeline funnel */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-auto">
                <defs>
                  <linearGradient id="sc-funnel" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#009bd7" stopOpacity="0.35" />
                    <stop offset="55%" stopColor="#00E1FF" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#1DB5C5" stopOpacity="0.85" />
                  </linearGradient>
                  <linearGradient id="sc-edge" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#009bd7" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#00E1FF" stopOpacity="0.7" />
                  </linearGradient>
                  <radialGradient id="sc-deal" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                    <stop offset="40%" stopColor="#1DB5C5" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#1DB5C5" stopOpacity="0" />
                  </radialGradient>
                  <filter id="sc-soft" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="8" />
                  </filter>
                  <filter id="sc-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Ambient backlight */}
                <ellipse cx="250" cy="250" rx="180" ry="170" fill="#00E1FF" opacity="0.07" filter="url(#sc-soft)" />

                {/* Inbound prospect dots (pulsing) */}
                <g fill="#009bd7">
                  <circle cx="130" cy="80" r="3.5">
                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="180" cy="62" r="3">
                    <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.2s" begin="0.3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="250" cy="72" r="4">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="320" cy="62" r="3">
                    <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.1s" begin="0.9s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="370" cy="82" r="3.5">
                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.3s" begin="1.2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="100" cy="105" r="2.5">
                    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.6s" begin="0.4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="400" cy="105" r="2.5">
                    <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2.4s" begin="1.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="210" cy="102" r="2.8" opacity="0.6" />
                  <circle cx="290" cy="102" r="2.8" opacity="0.6" />
                </g>

                {/* Funnel body */}
                <path d="M 110 140 L 390 140 L 290 380 L 210 380 Z" fill="url(#sc-funnel)" opacity="0.95" stroke="url(#sc-edge)" strokeWidth="1.5" />

                {/* Interior stage dividers */}
                <line x1="140" y1="220" x2="360" y2="220" stroke="#FFFFFF" strokeWidth="1" opacity="0.45" />
                <line x1="170" y1="300" x2="330" y2="300" stroke="#FFFFFF" strokeWidth="1" opacity="0.4" />

                {/* Stage labels */}
                <text x="250" y="190" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2" opacity="0.95">PROSPECTS</text>
                <text x="250" y="267" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2" opacity="0.95">QUALIFIED</text>
                <text x="250" y="347" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2" opacity="0.95">DEALS</text>

                {/* Flowing white dots descending through funnel */}
                <circle r="4" fill="#FFFFFF" opacity="0">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 250 140 L 250 380" />
                  <animate attributeName="opacity" values="0;0.95;0.95;0" keyTimes="0;0.1;0.85;1" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle r="3.5" fill="#FFFFFF" opacity="0">
                  <animateMotion dur="3.5s" begin="0.8s" repeatCount="indefinite" path="M 232 140 L 235 380" />
                  <animate attributeName="opacity" values="0;0.85;0.85;0" keyTimes="0;0.1;0.85;1" dur="3.5s" begin="0.8s" repeatCount="indefinite" />
                </circle>
                <circle r="3.5" fill="#FFFFFF" opacity="0">
                  <animateMotion dur="3.2s" begin="1.4s" repeatCount="indefinite" path="M 268 140 L 265 380" />
                  <animate attributeName="opacity" values="0;0.85;0.85;0" keyTimes="0;0.1;0.85;1" dur="3.2s" begin="1.4s" repeatCount="indefinite" />
                </circle>
                <circle r="3" fill="#FFFFFF" opacity="0">
                  <animateMotion dur="2.8s" begin="0.4s" repeatCount="indefinite" path="M 200 140 L 215 380" />
                  <animate attributeName="opacity" values="0;0.75;0.75;0" keyTimes="0;0.1;0.85;1" dur="2.8s" begin="0.4s" repeatCount="indefinite" />
                </circle>
                <circle r="3" fill="#FFFFFF" opacity="0">
                  <animateMotion dur="3.1s" begin="1.8s" repeatCount="indefinite" path="M 300 140 L 285 380" />
                  <animate attributeName="opacity" values="0;0.75;0.75;0" keyTimes="0;0.1;0.85;1" dur="3.1s" begin="1.8s" repeatCount="indefinite" />
                </circle>

                {/* Deal output — glowing cluster */}
                <circle cx="250" cy="420" r="30" fill="url(#sc-deal)" />
                <circle cx="250" cy="420" r="10" fill="#1DB5C5" filter="url(#sc-glow)" />
                <circle cx="250" cy="420" r="20" fill="none" stroke="#1DB5C5" strokeWidth="1.5">
                  <animate attributeName="r" values="15;45;15" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.85;0;0.85" dur="3s" repeatCount="indefinite" />
                </circle>

                {/* 10X REVENUE callout chip */}
                <g transform="translate(400, 425)">
                  <rect x="-72" y="-18" width="144" height="36" rx="18" fill="#0f172a" />
                  <text x="0" y="6" textAnchor="middle" fill="#00E1FF" fontSize="14" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="1.5">10X REVENUE</text>
                </g>
                <path d="M 285 420 L 325 424" stroke="#1DB5C5" strokeWidth="1.5" opacity="0.55" strokeDasharray="3 3">
                  <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="2s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 relative bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/20 dark:to-[#00E1FF]/20 rounded-full px-6 py-2 mb-6 border border-[#009bd7]/20 dark:border-[#00E1FF]/30">
              <Sparkles className="w-4 h-4 text-[#009bd7] dark:text-[#00E1FF]" />
              <span className="text-[#009bd7] dark:text-[#00E1FF] text-sm font-bold tracking-wider">FEATURES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] via-[#009bd7] to-[#00E1FF] dark:from-white dark:via-[#009bd7] dark:to-[#00E1FF] mb-6 leading-snug pb-1">
              Everything You Need to Scale
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              One platform to find, engage, and convert your ideal customers — powered by AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#009bd7]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#009bd7] to-[#00E1FF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0f172a] dark:text-white mb-3 group-hover:text-[#009bd7] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#009bd7] via-[#00E1FF] to-[#009bd7] rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 relative bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/20 dark:to-[#00E1FF]/20 rounded-full px-6 py-2 mb-6 border border-[#009bd7]/20 dark:border-[#00E1FF]/30">
              <Clock className="w-4 h-4 text-[#009bd7] dark:text-[#00E1FF]" />
              <span className="text-[#009bd7] dark:text-[#00E1FF] text-sm font-bold tracking-wider">HOW IT WORKS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] via-[#009bd7] to-[#00E1FF] dark:from-white dark:via-[#009bd7] dark:to-[#00E1FF] mb-6 leading-snug pb-1">
              From Zero to Pipeline in Days
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((item, index) => (
              <div key={item.step} className="relative text-center group">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#009bd7]/30 to-[#00E1FF]/30"></div>
                )}
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#009bd7] to-[#00E1FF] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 lg:py-28 relative bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#0f172a] to-[#0c2d4a] rounded-3xl p-10 sm:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#009bd7]/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#00E1FF]/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why SKAL Scale?</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">Built by the same team that has integrated 1000+ AI systems for businesses worldwide.</p>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { number: '10X', label: 'Revenue Growth', description: 'Average increase in qualified pipeline' },
                { number: '80%', label: 'Time Saved', description: 'On manual prospecting and outreach' },
                { number: '3 Days', label: 'To First Leads', description: 'From setup to qualified meetings' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white font-bold mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="py-20 lg:py-28 relative bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/20 dark:to-[#00E1FF]/20 rounded-full px-6 py-2 mb-6 border border-[#009bd7]/20 dark:border-[#00E1FF]/30">
              <Send className="w-4 h-4 text-[#009bd7] dark:text-[#00E1FF]" />
              <span className="text-[#009bd7] dark:text-[#00E1FF] text-sm font-bold tracking-wider">EARLY ACCESS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] via-[#009bd7] to-[#00E1FF] dark:from-white dark:via-[#009bd7] dark:to-[#00E1FF] mb-4 leading-snug pb-1">
              Get Early Access
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg">
              Be among the first to use SKAL Scale. Limited spots available.
            </p>

            <div ref={formRef} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-10 border border-white/50 dark:border-gray-700/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#009bd7]/5 via-transparent to-[#00E1FF]/5 pointer-events-none"></div>

              <form onSubmit={(e) => handleSubmit(e, { source: 'waitlist_scale', from_name: formData.name, reply_to: formData.email, website: formData.company, idea: 'SKAL Scale Early Access Waitlist', outcome: 'Early access to SKAL Scale platform', budget: 'N/A' })} className="relative z-10 space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-6 py-4 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-[#009bd7]/20 focus:border-[#009bd7] dark:focus:border-[#00E1FF] bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white placeholder-gray-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-[#009bd7]/20 focus:border-[#009bd7] dark:focus:border-[#00E1FF] bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white placeholder-gray-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name (optional)"
                    className="w-full px-6 py-4 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-[#009bd7]/20 focus:border-[#009bd7] dark:focus:border-[#00E1FF] bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white placeholder-gray-400 transition-all duration-300"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.type === 'sending'}
                  className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#009bd7]/25 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span>{status.type === 'sending' ? 'Joining...' : 'Join the Waitlist'}</span>
                  <ArrowRight className={`w-5 h-5 ${status.type === 'sending' ? 'animate-pulse' : 'group-hover:translate-x-1'} transition-transform`} />
                </button>

                {status.type === 'success' && (
                  <div className="flex items-center justify-center gap-2 px-6 py-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <p className="text-green-700 dark:text-green-400 font-medium">You&apos;re on the list! We&apos;ll be in touch soon.</p>
                  </div>
                )}

                {status.type === 'error' && (
                  <div className="flex items-center justify-center gap-2 px-6 py-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                    <p className="text-red-700 dark:text-red-400 font-medium">{status.message}</p>
                  </div>
                )}
              </form>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#009bd7]" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#009bd7]" />
                <span>Early adopter pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#009bd7]" />
                <span>Priority onboarding</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
