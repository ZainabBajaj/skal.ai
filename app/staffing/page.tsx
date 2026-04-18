'use client';

import { Users, ArrowRight, CheckCircle, Shield, Zap, Clock, Code, Brain } from 'lucide-react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';

export default function StaffingPage() {
  const roles = [
    { icon: Code, title: 'Full-Stack Engineers', description: 'React, Node.js, Python, Go — production-ready from day one.' },
    { icon: Brain, title: 'AI / ML Engineers', description: 'LLMs, computer vision, NLP, and custom model development.' },
    { icon: Shield, title: 'DevOps & Cloud', description: 'AWS, Azure, GCP, Kubernetes — infrastructure that scales.' },
    { icon: Zap, title: 'Data Engineers', description: 'Pipelines, ETL, analytics, and real-time data systems.' },
  ];

  const process = [
    { step: '01', title: 'Tell Us What You Need', description: 'Share your requirements — tech stack, team size, timeline.' },
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
                Top 5%{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DB5C5] via-[#009bd7] to-[#00E1FF]">
                  AI Talent
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
                Pre-vetted engineers embedded directly into your team. No recruiting headaches, no ramp-up time — just world-class talent shipping code from week one.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://calendly.com/skal-ai/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1DB5C5] to-[#009bd7] text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#1DB5C5]/25 hover:scale-105"
                >
                  Book a Discovery Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#1DB5C5] text-[#1DB5C5] dark:text-[#1DB5C5] font-bold rounded-2xl transition-all duration-300 hover:bg-[#1DB5C5]/5"
                >
                  Tell Us Your Needs
                </a>
              </div>
            </div>

            {/* Right: Abstract Visual */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Central team hub */}
                <circle cx="250" cy="250" r="50" fill="#1DB5C5" fillOpacity="0.08" stroke="#1DB5C5" strokeWidth="1" strokeOpacity="0.2" />
                <circle cx="250" cy="250" r="30" fill="#009bd7" fillOpacity="0.1" />
                <text x="250" y="254" textAnchor="middle" fill="#1DB5C5" fontSize="10" fontWeight="700" opacity="0.5">YOUR TEAM</text>

                {/* Talent nodes */}
                <circle cx="250" cy="120" r="25" fill="#009bd7" fillOpacity="0.08" stroke="#009bd7" strokeWidth="1" strokeOpacity="0.25" />
                <text x="250" y="124" textAnchor="middle" fill="#009bd7" fontSize="8" fontWeight="600" opacity="0.5">AI/ML</text>

                <circle cx="380" cy="200" r="25" fill="#00E1FF" fillOpacity="0.08" stroke="#00E1FF" strokeWidth="1" strokeOpacity="0.25" />
                <text x="380" y="204" textAnchor="middle" fill="#00E1FF" fontSize="8" fontWeight="600" opacity="0.5">FULL-STACK</text>

                <circle cx="380" cy="320" r="25" fill="#1DB5C5" fillOpacity="0.08" stroke="#1DB5C5" strokeWidth="1" strokeOpacity="0.25" />
                <text x="380" y="324" textAnchor="middle" fill="#1DB5C5" fontSize="8" fontWeight="600" opacity="0.5">DEVOPS</text>

                <circle cx="250" cy="390" r="25" fill="#009bd7" fillOpacity="0.08" stroke="#009bd7" strokeWidth="1" strokeOpacity="0.25" />
                <text x="250" y="394" textAnchor="middle" fill="#009bd7" fontSize="8" fontWeight="600" opacity="0.5">DATA</text>

                <circle cx="120" cy="320" r="25" fill="#00E1FF" fillOpacity="0.08" stroke="#00E1FF" strokeWidth="1" strokeOpacity="0.25" />
                <text x="120" y="324" textAnchor="middle" fill="#00E1FF" fontSize="8" fontWeight="600" opacity="0.5">MOBILE</text>

                <circle cx="120" cy="200" r="25" fill="#1DB5C5" fillOpacity="0.08" stroke="#1DB5C5" strokeWidth="1" strokeOpacity="0.25" />
                <text x="120" y="204" textAnchor="middle" fill="#1DB5C5" fontSize="8" fontWeight="600" opacity="0.5">QA</text>

                {/* Connection lines */}
                <line x1="250" y1="200" x2="250" y2="145" stroke="#009bd7" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
                <line x1="280" y1="225" x2="355" y2="200" stroke="#00E1FF" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
                <line x1="280" y1="275" x2="355" y2="320" stroke="#1DB5C5" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
                <line x1="250" y1="300" x2="250" y2="365" stroke="#009bd7" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
                <line x1="220" y1="275" x2="145" y2="320" stroke="#00E1FF" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
                <line x1="220" y1="225" x2="145" y2="200" stroke="#1DB5C5" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />

                {/* "Top 5%" badge */}
                <rect x="195" y="55" width="110" height="30" rx="15" fill="#1DB5C5" fillOpacity="0.1" stroke="#1DB5C5" strokeWidth="1" strokeOpacity="0.3" />
                <text x="250" y="74" textAnchor="middle" fill="#1DB5C5" fontSize="11" fontWeight="700" opacity="0.5">TOP 5% VETTED</text>
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
                    <div className="w-14 h-14 bg-gradient-to-br from-[#1DB5C5] to-[#009bd7] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300">
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

      {/* How It Works */}
      <section className="py-20 lg:py-28 relative bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] via-[#1DB5C5] to-[#009bd7] dark:from-white dark:via-[#1DB5C5] dark:to-[#009bd7] mb-6 leading-snug pb-1">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={item.step} className="relative text-center group">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#1DB5C5]/30 to-[#009bd7]/30"></div>
                )}
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#1DB5C5] to-[#009bd7] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
