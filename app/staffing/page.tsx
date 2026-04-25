'use client';

import { Users, ArrowRight, CheckCircle, Shield, Zap, Clock, Code, Brain } from 'lucide-react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';
import FloatingThemeToggle from '../components/FloatingThemeToggle';

export default function StaffingPage() {
  const roles = [
    { icon: Code, title: 'Full-Stack Engineers', description: 'React, Node.js, Python, Go, production-ready from day one.' },
    { icon: Brain, title: 'AI / ML Engineers', description: 'LLMs, computer vision, NLP, and custom model development.' },
    { icon: Shield, title: 'DevOps & Cloud', description: 'AWS, Azure, GCP, Kubernetes, infrastructure that scales.' },
    { icon: Zap, title: 'Data Engineers', description: 'Pipelines, ETL, analytics, and real-time data systems.' },
  ];

  const process = [
    { step: '01', title: 'Tell Us What You Need', description: 'Share your requirements: tech stack, team size, timeline.' },
    { step: '02', title: 'We Match Top Talent', description: 'Hand-picked engineers from our pre-vetted top 5% talent pool.' },
    { step: '03', title: 'Meet Your Team', description: 'Interview candidates. Only move forward if it\'s the right fit.' },
    { step: '04', title: 'Start Building', description: 'Your new team members integrate seamlessly and ship from week one.' },
  ];

  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#1DB5C5]/8 to-[#009bd7]/6 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#009bd7]/6 to-[#1DB5C5]/4 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto">
            {/* Left: Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#1DB5C5]/10 to-[#009bd7]/10 dark:from-[#1DB5C5]/20 dark:to-[#009bd7]/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-[#1DB5C5]/20 dark:border-[#1DB5C5]/30">
                <Users className="w-4 h-4 text-[#1DB5C5] dark:text-[#1DB5C5]" />
                <span className="text-[#1DB5C5] dark:text-[#1DB5C5] text-sm font-bold tracking-wider">SKAL STAFFING</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-[#0f172a] dark:text-white mb-6 leading-snug pb-1">
                AI That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DB5C5] via-[#009bd7] to-[#00E1FF]">
                  Executes
                </span>
              </h1>

              <p className="text-lg text-[#1DB5C5] font-semibold max-w-xl mx-auto lg:mx-0 mb-4">
                Your direction, our talent, zero friction.
              </p>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
                No hiring loops. No onboarding drag. SKAL Staffing places pre-vetted, AI-native talent straight into your workflow. Tell them what you need; they ship it. Billed by the hour, no long-term commitment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://calendly.com/skal-ai/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1DB5C5] to-[#009bd7] text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#1DB5C5]/25 hover:scale-105"
                >
                  Find your person
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right: Abstract Visual: vetted talent hub-and-spoke network */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-auto text-[#0f172a] dark:text-white">
                <defs>
                  <radialGradient id="st-hub" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                    <stop offset="45%" stopColor="#1DB5C5" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#1DB5C5" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="st-node" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00E1FF" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#009bd7" stopOpacity="0.45" />
                  </radialGradient>
                  <linearGradient id="st-spoke" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1DB5C5" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#00E1FF" stopOpacity="0.4" />
                  </linearGradient>
                  <filter id="st-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Outer orbit rings */}
                <circle cx="250" cy="260" r="155" fill="none" stroke="#1DB5C5" strokeWidth="0.6" opacity="0.2" strokeDasharray="2 6" />
                <circle cx="250" cy="260" r="115" fill="none" stroke="#1DB5C5" strokeWidth="0.6" opacity="0.25" strokeDasharray="2 4" />

                {/* Six connection spokes */}
                <g stroke="url(#st-spoke)" strokeWidth="1.3" opacity="0.7">
                  <line x1="250" y1="260" x2="250" y2="130" />
                  <line x1="250" y1="260" x2="370" y2="195" />
                  <line x1="250" y1="260" x2="370" y2="325" />
                  <line x1="250" y1="260" x2="250" y2="390" />
                  <line x1="250" y1="260" x2="130" y2="325" />
                  <line x1="250" y1="260" x2="130" y2="195" />
                </g>

                {/* Flow pulses travelling along each spoke */}
                <g fill="#00E1FF">
                  <circle r="3.5">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M 250 260 L 250 130" />
                    <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle r="3.5">
                    <animateMotion dur="2.8s" begin="0.4s" repeatCount="indefinite" path="M 250 260 L 370 195" />
                    <animate attributeName="opacity" values="0;1;0" dur="2.8s" begin="0.4s" repeatCount="indefinite" />
                  </circle>
                  <circle r="3.5">
                    <animateMotion dur="2.6s" begin="0.8s" repeatCount="indefinite" path="M 250 260 L 370 325" />
                    <animate attributeName="opacity" values="0;1;0" dur="2.6s" begin="0.8s" repeatCount="indefinite" />
                  </circle>
                  <circle r="3.5">
                    <animateMotion dur="2.4s" begin="1.2s" repeatCount="indefinite" path="M 250 260 L 250 390" />
                    <animate attributeName="opacity" values="0;1;0" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
                  </circle>
                  <circle r="3.5">
                    <animateMotion dur="2.7s" begin="1.6s" repeatCount="indefinite" path="M 250 260 L 130 325" />
                    <animate attributeName="opacity" values="0;1;0" dur="2.7s" begin="1.6s" repeatCount="indefinite" />
                  </circle>
                  <circle r="3.5">
                    <animateMotion dur="2.9s" begin="2s" repeatCount="indefinite" path="M 250 260 L 130 195" />
                    <animate attributeName="opacity" values="0;1;0" dur="2.9s" begin="2s" repeatCount="indefinite" />
                  </circle>
                </g>

                {/* Six talent satellite nodes */}
                <g filter="url(#st-glow)">
                  <circle cx="250" cy="130" r="16" fill="url(#st-node)" />
                  <circle cx="370" cy="195" r="16" fill="url(#st-node)" />
                  <circle cx="370" cy="325" r="16" fill="url(#st-node)" />
                  <circle cx="250" cy="390" r="16" fill="url(#st-node)" />
                  <circle cx="130" cy="325" r="16" fill="url(#st-node)" />
                  <circle cx="130" cy="195" r="16" fill="url(#st-node)" />
                </g>

                {/* Satellite inner pulse dots */}
                <g fill="#FFFFFF">
                  <circle cx="250" cy="130" r="4">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="370" cy="195" r="4">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" begin="0.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="370" cy="325" r="4">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" begin="1s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="250" cy="390" r="4">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" begin="1.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="130" cy="325" r="4">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" begin="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="130" cy="195" r="4">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" begin="2.5s" repeatCount="indefinite" />
                  </circle>
                </g>

                {/* Satellite role labels (positioned outside each node) */}
                <g fill="currentColor" fontFamily="system-ui, sans-serif" fontWeight="700" letterSpacing="1">
                  <text x="250" y="105" fontSize="12" textAnchor="middle">AI/ML</text>
                  <text x="395" y="199" fontSize="11" textAnchor="start">FULL-STACK</text>
                  <text x="395" y="329" fontSize="11" textAnchor="start">DEVOPS</text>
                  <text x="250" y="425" fontSize="12" textAnchor="middle">DATA</text>
                  <text x="105" y="329" fontSize="11" textAnchor="end">MOBILE</text>
                  <text x="105" y="199" fontSize="11" textAnchor="end">QA</text>
                </g>

                {/* Central hub */}
                <circle cx="250" cy="260" r="65" fill="url(#st-hub)" opacity="0.7" />
                <circle cx="250" cy="260" r="40" fill="#1DB5C5" opacity="0.3" />
                <circle cx="250" cy="260" r="20" fill="#0f172a" />
                <text x="250" y="264" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="1.5">YOUR TEAM</text>

                {/* Outward pulse from hub */}
                <circle cx="250" cy="260" r="40" fill="none" stroke="#1DB5C5" strokeWidth="1.5">
                  <animate attributeName="r" values="30;95;30" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.75;0;0.75" dur="4s" repeatCount="indefinite" />
                </circle>

                {/* TOP 5% VETTED chip */}
                <g transform="translate(250, 60)">
                  <rect x="-82" y="-20" width="164" height="40" rx="20" fill="#0f172a" />
                  <circle cx="-58" cy="0" r="6" fill="#1DB5C5" />
                  <circle cx="-58" cy="0" r="2.5" fill="#FFFFFF" />
                  <text x="12" y="6" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="1">TOP 5% VETTED</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Available Roles */}
      <section className="py-20 lg:py-28 relative bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] via-[#1DB5C5] to-[#009bd7] dark:from-white dark:via-[#1DB5C5] dark:to-[#009bd7] mb-6 leading-snug pb-1">
              Talent You Can Hire
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Every engineer in our network has been rigorously vetted through technical assessments, live coding, and real-project evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <div
                  key={role.title}
                  className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1DB5C5]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#1DB5C5] to-[#009bd7] rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0f172a] dark:text-white mb-3 group-hover:text-[#1DB5C5] transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {role.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1DB5C5] via-[#009bd7] to-[#1DB5C5] rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <HowItWorks title="How It Works" steps={process} tone="teal" />

      {/* Why SKAL Staffing */}
      <section className="py-20 lg:py-28 relative bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#0f172a] to-[#0c2d4a] rounded-3xl p-10 sm:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#1DB5C5]/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#009bd7]/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Companies Choose SKAL Staffing</h2>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { icon: Shield, label: 'Rigorously Vetted', description: 'Multi-stage technical assessments and real-project trials' },
                { icon: Clock, label: 'Fast Onboarding', description: 'Engineers ship production code within the first week' },
                { icon: CheckCircle, label: 'Zero Risk', description: 'Not the right fit? We replace them at no extra cost' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="text-center">
                    <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-[#1DB5C5]/20 to-[#009bd7]/20 rounded-2xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#1DB5C5]" />
                    </div>
                    <div className="text-white font-bold mb-1">{item.label}</div>
                    <div className="text-gray-400 text-sm">{item.description}</div>
                  </div>
                );
              })}
            </div>

            <div className="relative z-10 text-center mt-12">
              <a
                href="https://calendly.com/skal-ai/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1DB5C5] to-[#009bd7] text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#1DB5C5]/25 hover:scale-105"
              >
                Book a Discovery Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
