'use client';

import { Bot, ArrowRight, MessageSquare, Phone, Settings, Headset, BriefcaseBusiness, ConciergeBell, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';
import Reveal from '../components/Reveal';

const CALENDLY_URL = 'https://calendly.com/skal-ai/discovery-call';

const systems = [
  {
    name: 'Sales System',
    icon: BriefcaseBusiness,
    tagline: 'An SDR that never sleeps.',
    body: 'Outbound outreach, lead qualification, and CRM updates, handled by a Sagent that talks, chats, and keeps the pipeline moving 24/7.',
    bullets: [
      'Cold + warm outreach on voice, chat, email',
      'Qualifies leads against your ICP',
      'Logs everything to HubSpot, Salesforce, or your CRM',
      'Books meetings straight to your calendar',
    ],
  },
  {
    name: 'Support System',
    icon: Headset,
    tagline: 'Tier-1 support that scales.',
    body: 'A Sagent that resolves tickets, answers product questions, and escalates the hard ones to your team, trained on your docs and tone.',
    bullets: [
      'Resolves common tickets end-to-end',
      'Trained on your knowledge base + macros',
      'Smart handoff to humans with full context',
      'Plugs into Zendesk, Intercom, Freshdesk',
    ],
  },
  {
    name: 'Receptionist System',
    icon: ConciergeBell,
    tagline: 'Your front desk, on every line.',
    body: 'Inbound calls, bookings, and FAQs handled instantly, in your brand voice, in the languages your customers actually speak.',
    bullets: [
      'Answers every call, no hold music',
      'Books and reschedules straight to calendar',
      'Multi-language out of the box',
      'Routes urgent calls to the right person',
    ],
  },
];

export default function SystemsPage() {
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
                <Bot className="w-4 h-4 text-[#009bd7] dark:text-[#00E1FF]" />
                <span className="text-[#009bd7] dark:text-[#00E1FF] text-sm font-bold tracking-wider">SKAL SYSTEMS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-[#0f172a] dark:text-white mb-6 leading-snug pb-1 animate-fade-in-up" style={{ animationDelay: '80ms' }}>
                AI That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] via-[#00E1FF] to-[#1DB5C5]">
                  Deploys
                </span>
              </h1>

              <p className="text-lg text-[#009bd7] dark:text-[#00E1FF] font-semibold max-w-xl mx-auto lg:mx-0 mb-4 animate-fade-in-up" style={{ animationDelay: '160ms' }}>
                Pre-built Sagents, ready to go live in a week.
              </p>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '220ms' }}>
                Our flagship Sagent is a voice and chat customer support agent built on ElevenLabs and GPT, trained on your business and live on your site in as little as one week. It handles enquiries, qualifies leads, and talks to your customers the way you would. Beyond that, we have a growing library of pre-built Sagents and automated workflows built on tools like n8n, Make, and more, covering everything from internal operations to lead qualification. Tell us what you need and we deploy the right agent for the job.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#009bd7]/25 hover:scale-105"
                >
                  Deploy your first Sagent
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right: live Sagent conversation */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none animate-fade-in-up" style={{ animationDelay: '380ms' }}>
              <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-auto">
                <defs>
                  <linearGradient id="sy-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#0c2d4a" />
                  </linearGradient>
                  <linearGradient id="sy-bubble-agent" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#009bd7" />
                    <stop offset="100%" stopColor="#00E1FF" />
                  </linearGradient>
                  <radialGradient id="sy-avatar" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00E1FF" />
                    <stop offset="100%" stopColor="#009bd7" />
                  </radialGradient>
                  <filter id="sy-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" />
                  </filter>
                </defs>

                {/* Soft ambient glow behind device */}
                <ellipse cx="250" cy="270" rx="200" ry="200" fill="#00E1FF" opacity="0.07" filter="url(#sy-shadow)" />

                {/* Device frame */}
                <rect x="80" y="40" width="340" height="420" rx="28" fill="url(#sy-bg)" stroke="#1f2a3d" strokeWidth="1.5" />
                <rect x="80" y="40" width="340" height="420" rx="28" fill="none" stroke="#00E1FF" strokeWidth="0.8" strokeOpacity="0.25" />

                {/* Header: avatar + name + live dot */}
                <g>
                  <circle cx="115" cy="78" r="14" fill="url(#sy-avatar)" />
                  <text x="115" y="83" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800" fontFamily="system-ui, sans-serif">S</text>
                  <text x="140" y="73" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">SAGENT</text>
                  <text x="140" y="87" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">trained on your business</text>
                  <g transform="translate(385, 78)">
                    <circle r="4" fill="#22c55e">
                      <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
                    </circle>
                    <text x="10" y="3" fill="#FFFFFF" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif" textAnchor="start">LIVE</text>
                  </g>
                </g>

                {/* Divider */}
                <line x1="100" y1="105" x2="400" y2="105" stroke="#1f2a3d" strokeWidth="1" />

                {/* Chat messages — scripted timeline (12s loop) */}
                {/* Customer 1: appears at 0.5s */}
                <g>
                  <animate attributeName="opacity" values="0;1;1;1" keyTimes="0;0.05;0.95;1" dur="12s" repeatCount="indefinite" begin="0s" />
                  <rect x="200" y="125" width="200" height="38" rx="14" fill="#1f2a3d" />
                  <text x="217" y="143" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Hi, can I book a demo for</text>
                  <text x="217" y="157" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">next Thursday?</text>
                </g>

                {/* Agent typing dots: 2s–3s */}
                <g>
                  <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.13;0.16;0.24;0.27;1" dur="12s" repeatCount="indefinite" begin="0s" />
                  <rect x="100" y="180" width="62" height="32" rx="14" fill="url(#sy-bubble-agent)" />
                  <circle cx="118" cy="196" r="3" fill="#FFFFFF">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="131" cy="196" r="3" fill="#FFFFFF">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" begin="0.2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="144" cy="196" r="3" fill="#FFFFFF">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" begin="0.4s" repeatCount="indefinite" />
                  </circle>
                </g>

                {/* Agent reply: appears at 3s */}
                <g>
                  <animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.24;0.27;1" dur="12s" repeatCount="indefinite" begin="0s" />
                  <rect x="100" y="180" width="240" height="56" rx="14" fill="url(#sy-bubble-agent)" />
                  <text x="116" y="201" fill="#FFFFFF" fontSize="11" fontFamily="system-ui, sans-serif">Of course. I have Thursday at</text>
                  <text x="116" y="216" fill="#FFFFFF" fontSize="11" fontFamily="system-ui, sans-serif">10:00, 14:30, or 16:00 with</text>
                  <text x="116" y="230" fill="#FFFFFF" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Sarah on the team. Which works?</text>
                </g>

                {/* Customer 2: appears at 5s */}
                <g>
                  <animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.41;0.44;1" dur="12s" repeatCount="indefinite" begin="0s" />
                  <rect x="240" y="252" width="160" height="38" rx="14" fill="#1f2a3d" />
                  <text x="257" y="270" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">14:30 works. Thanks!</text>
                </g>

                {/* Agent typing dots: 6s–7s */}
                <g>
                  <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.49;0.51;0.58;0.6;1" dur="12s" repeatCount="indefinite" begin="0s" />
                  <rect x="100" y="307" width="62" height="32" rx="14" fill="url(#sy-bubble-agent)" />
                  <circle cx="118" cy="323" r="3" fill="#FFFFFF">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="131" cy="323" r="3" fill="#FFFFFF">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" begin="0.2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="144" cy="323" r="3" fill="#FFFFFF">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" begin="0.4s" repeatCount="indefinite" />
                  </circle>
                </g>

                {/* Agent confirmation: appears at 7s */}
                <g>
                  <animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.58;0.6;1" dur="12s" repeatCount="indefinite" begin="0s" />
                  <rect x="100" y="307" width="260" height="56" rx="14" fill="url(#sy-bubble-agent)" />
                  <text x="116" y="328" fill="#FFFFFF" fontSize="11" fontFamily="system-ui, sans-serif">Booked. I sent the calendar invite</text>
                  <text x="116" y="343" fill="#FFFFFF" fontSize="11" fontFamily="system-ui, sans-serif">and a confirmation to your email.</text>
                  <text x="116" y="357" fill="#FFFFFF" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Anything else I can help with?</text>
                </g>

                {/* Voice waveform footer (the agent can speak too) */}
                <g transform="translate(0, 0)">
                  <line x1="100" y1="405" x2="400" y2="405" stroke="#1f2a3d" strokeWidth="1" />
                  <text x="100" y="395" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif" letterSpacing="1.5">VOICE</text>
                  <g stroke="#00E1FF" strokeWidth="2" strokeLinecap="round">
                    <line x1="135" y1="430" x2="135" y2="430">
                      <animate attributeName="y1" values="430;418;430;425;430" dur="1.4s" repeatCount="indefinite" />
                      <animate attributeName="y2" values="430;442;430;435;430" dur="1.4s" repeatCount="indefinite" />
                    </line>
                    <line x1="148" y1="430" x2="148" y2="430">
                      <animate attributeName="y1" values="430;414;430;422;430" dur="1.4s" begin="0.1s" repeatCount="indefinite" />
                      <animate attributeName="y2" values="430;446;430;438;430" dur="1.4s" begin="0.1s" repeatCount="indefinite" />
                    </line>
                    <line x1="161" y1="430" x2="161" y2="430">
                      <animate attributeName="y1" values="430;408;430;420;430" dur="1.4s" begin="0.2s" repeatCount="indefinite" />
                      <animate attributeName="y2" values="430;452;430;440;430" dur="1.4s" begin="0.2s" repeatCount="indefinite" />
                    </line>
                    <line x1="174" y1="430" x2="174" y2="430">
                      <animate attributeName="y1" values="430;420;430;415;430" dur="1.4s" begin="0.3s" repeatCount="indefinite" />
                      <animate attributeName="y2" values="430;440;430;445;430" dur="1.4s" begin="0.3s" repeatCount="indefinite" />
                    </line>
                    <line x1="187" y1="430" x2="187" y2="430">
                      <animate attributeName="y1" values="430;412;430;424;430" dur="1.4s" begin="0.05s" repeatCount="indefinite" />
                      <animate attributeName="y2" values="430;448;430;436;430" dur="1.4s" begin="0.05s" repeatCount="indefinite" />
                    </line>
                    <line x1="200" y1="430" x2="200" y2="430">
                      <animate attributeName="y1" values="430;418;430;414;430" dur="1.4s" begin="0.25s" repeatCount="indefinite" />
                      <animate attributeName="y2" values="430;442;430;446;430" dur="1.4s" begin="0.25s" repeatCount="indefinite" />
                    </line>
                    <line x1="213" y1="430" x2="213" y2="430">
                      <animate attributeName="y1" values="430;422;430;417;430" dur="1.4s" begin="0.15s" repeatCount="indefinite" />
                      <animate attributeName="y2" values="430;438;430;443;430" dur="1.4s" begin="0.15s" repeatCount="indefinite" />
                    </line>
                    <line x1="226" y1="430" x2="226" y2="430">
                      <animate attributeName="y1" values="430;410;430;423;430" dur="1.4s" begin="0.35s" repeatCount="indefinite" />
                      <animate attributeName="y2" values="430;450;430;437;430" dur="1.4s" begin="0.35s" repeatCount="indefinite" />
                    </line>
                    <line x1="239" y1="430" x2="239" y2="430">
                      <animate attributeName="y1" values="430;416;430;420;430" dur="1.4s" begin="0.2s" repeatCount="indefinite" />
                      <animate attributeName="y2" values="430;444;430;440;430" dur="1.4s" begin="0.2s" repeatCount="indefinite" />
                    </line>
                    <line x1="252" y1="430" x2="252" y2="430">
                      <animate attributeName="y1" values="430;420;430;414;430" dur="1.4s" begin="0.3s" repeatCount="indefinite" />
                      <animate attributeName="y2" values="430;440;430;446;430" dur="1.4s" begin="0.3s" repeatCount="indefinite" />
                    </line>
                    <line x1="265" y1="430" x2="265" y2="430">
                      <animate attributeName="y1" values="430;414;430;422;430" dur="1.4s" begin="0.4s" repeatCount="indefinite" />
                      <animate attributeName="y2" values="430;446;430;438;430" dur="1.4s" begin="0.4s" repeatCount="indefinite" />
                    </line>
                    <line x1="278" y1="430" x2="278" y2="430">
                      <animate attributeName="y1" values="430;418;430;425;430" dur="1.4s" begin="0.45s" repeatCount="indefinite" />
                      <animate attributeName="y2" values="430;442;430;435;430" dur="1.4s" begin="0.45s" repeatCount="indefinite" />
                    </line>
                    <line x1="291" y1="430" x2="291" y2="430">
                      <animate attributeName="y1" values="430;422;430;418;430" dur="1.4s" begin="0.1s" repeatCount="indefinite" />
                      <animate attributeName="y2" values="430;438;430;442;430" dur="1.4s" begin="0.1s" repeatCount="indefinite" />
                    </line>
                    <line x1="304" y1="430" x2="304" y2="430">
                      <animate attributeName="y1" values="430;412;430;420;430" dur="1.4s" begin="0.5s" repeatCount="indefinite" />
                      <animate attributeName="y2" values="430;448;430;440;430" dur="1.4s" begin="0.5s" repeatCount="indefinite" />
                    </line>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Systems catalog */}
      <section id="systems" className="py-20 sm:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] dark:text-white mb-4 leading-snug pb-1">
                Pick the system you need
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Each system is a Sagent packaged for a specific role, trained, integrated, and ready to deploy.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {systems.map(({ name, icon: Icon, tagline, body, bullets }, index) => (
              <Reveal key={name} delay={index * 100}>
                <div className="group relative bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-gray-800/80 dark:to-gray-700/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50 dark:border-gray-700/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#009bd7]/15 transition-all duration-500 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#009bd7] to-[#00E1FF] flex items-center justify-center mb-5 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#0f172a] dark:text-white mb-2">{name}</h3>
                  <p className="text-[#009bd7] dark:text-[#00E1FF] font-semibold mb-4">{tagline}</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{body}</p>

                  <ul className="space-y-3 mb-8">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                        <Check className="w-4 h-4 text-[#009bd7] dark:text-[#00E1FF] mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto group/btn inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#009bd7]/25 hover:scale-105"
                  >
                    Talk to us
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 text-center text-gray-600 dark:text-gray-400">
            Need something different?{' '}
            <a href="/services" className="text-[#009bd7] dark:text-[#00E1FF] font-semibold hover:underline">
              See our custom builds →
            </a>
          </p>
        </div>
      </section>


      {/* Customisation + cost split */}
      <section className="py-20 sm:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-center">
            <Reveal>
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] dark:text-white mb-6 leading-snug pb-1">
                  Built around{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF]">
                    your business
                  </span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  Every system is a starting point. We shape voice, knowledge, tools, and escalation
                  rules to how you actually work.
                </p>

                <div className="space-y-5">
                  {[
                    { icon: Phone, title: 'Voice & chat', body: 'Phone, web chat, WhatsApp; same system, same memory.' },
                    { icon: Settings, title: 'Persona & tone', body: 'Name, voice, language, level of formality. Your brand, not ours.' },
                    { icon: MessageSquare, title: 'Knowledge & tools', body: 'Connect your docs, CRM, calendar, payment, ticketing. They use what your team uses.' },
                  ].map(({ icon: Icon, title, body }) => (
                    <div key={title} className="flex gap-4">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#009bd7] to-[#00E1FF] flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0f172a] dark:text-white mb-1">{title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="relative bg-gradient-to-br from-[#0f172a] via-[#0c2d4a] to-[#0f172a] rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-700/50 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#009bd7]/30 to-[#00E1FF]/20 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="text-sm font-bold tracking-widest text-[#00E1FF] mb-3">THE MATH</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-snug">
                    A fraction of the cost. Always on.
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-baseline justify-between border-b border-gray-700/50 pb-4">
                      <span className="text-gray-300">Human hire</span>
                      <span className="text-gray-300 text-sm">8 hrs/day · benefits · ramp-up</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-white font-bold">SKAL System</span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF] font-bold text-sm">24/7 · no benefits · trained in days</span>
                    </div>
                  </div>

                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#009bd7]/25 hover:scale-105"
                  >
                    Get a quote for your use case
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FAQ />
      <ContactForm />
      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
