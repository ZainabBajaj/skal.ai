"use client";

import { Code, TrendingUp, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ProductSplit = () => {
  return (
    <section className="py-20 lg:py-28 relative bg-white dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] via-[#009bd7] to-[#00E1FF] dark:from-white dark:via-[#009bd7] dark:to-[#00E1FF] mb-4 leading-snug pb-1">
            Two Ways to Grow
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Custom AI systems, revenue-generating outbound, or pre-vetted talent — we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {/* SKAL Systems Card */}
          <Link href="/systems" className="group block">
            <div className="relative bg-gradient-to-br from-[#0f172a] to-[#0c2d4a] rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl hover:shadow-[#009bd7]/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden min-h-[400px] flex flex-col justify-between">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#009bd7]/10 via-transparent to-[#00E1FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#009bd7]/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#00E1FF]/20 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
              {/* Abstract circuit visual */}
              <svg className="absolute top-6 right-6 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500" viewBox="0 0 100 100" fill="none">
                <rect x="10" y="10" width="30" height="20" rx="4" stroke="#009bd7" strokeWidth="1.5" />
                <rect x="60" y="10" width="30" height="20" rx="4" stroke="#00E1FF" strokeWidth="1.5" />
                <rect x="35" y="50" width="30" height="20" rx="4" stroke="#1DB5C5" strokeWidth="1.5" />
                <line x1="40" y1="30" x2="40" y2="50" stroke="#009bd7" strokeWidth="1" />
                <line x1="65" y1="30" x2="60" y2="50" stroke="#00E1FF" strokeWidth="1" />
                <rect x="25" y="80" width="50" height="15" rx="4" stroke="#009bd7" strokeWidth="1.5" />
                <line x1="50" y1="70" x2="50" y2="80" stroke="#1DB5C5" strokeWidth="1" />
              </svg>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#009bd7] to-[#00E1FF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-500 shadow-lg">
                  <Code className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  SKAL{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF]">
                    Systems
                  </span>
                </h3>
                <p className="text-[#009bd7] dark:text-[#00E1FF] font-semibold text-lg mb-4">AI That Builds</p>

                <p className="text-gray-300 leading-relaxed mb-8">
                  Custom AI architectures, full-stack development, and tech solutions engineered for startups and enterprises.
                  From MVP to scale — we build the infrastructure that powers your business.
                </p>

                <ul className="space-y-3 mb-8">
                  {['Custom AI Development', 'Full-Stack Engineering', 'Enterprise Architecture'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-400">
                      <div className="w-1.5 h-1.5 bg-[#009bd7] rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 flex items-center gap-2 text-[#00E1FF] font-semibold group-hover:gap-4 transition-all duration-300">
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Link>

          {/* SKAL Scale Card */}
          <Link href="/scale" className="group block">
            <div className="relative bg-gradient-to-br from-white via-blue-50 to-cyan-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl hover:shadow-[#009bd7]/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden min-h-[400px] flex flex-col justify-between border border-gray-200/50 dark:border-gray-700/50">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#009bd7]/5 via-transparent to-[#00E1FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#00E1FF]/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#009bd7]/10 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>

              {/* Abstract funnel visual */}
              <svg className="absolute top-6 right-6 w-24 h-24 opacity-[0.07] group-hover:opacity-15 transition-opacity duration-500" viewBox="0 0 100 100" fill="none">
                <path d="M 15 15 L 85 15 L 65 45 L 35 45 Z" stroke="#009bd7" strokeWidth="1.5" />
                <path d="M 35 45 L 65 45 L 58 70 L 42 70 Z" stroke="#00E1FF" strokeWidth="1.5" />
                <path d="M 42 70 L 58 70 L 54 90 L 46 90 Z" stroke="#1DB5C5" strokeWidth="1.5" />
                <circle cx="30" cy="8" r="2" fill="#009bd7" />
                <circle cx="50" cy="5" r="2" fill="#00E1FF" />
                <circle cx="70" cy="8" r="2" fill="#1DB5C5" />
                <line x1="30" y1="10" x2="40" y2="15" stroke="#009bd7" strokeWidth="0.8" strokeDasharray="2 2" />
                <line x1="50" y1="7" x2="50" y2="15" stroke="#00E1FF" strokeWidth="0.8" strokeDasharray="2 2" />
                <line x1="70" y1="10" x2="60" y2="15" stroke="#1DB5C5" strokeWidth="0.8" strokeDasharray="2 2" />
              </svg>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#009bd7] to-[#1DB5C5] rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-500 shadow-lg">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white rounded-full">COMING SOON</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-[#0f172a] dark:text-white mb-2">
                  SKAL{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#1DB5C5]">
                    Scale
                  </span>
                </h3>
                <p className="text-[#009bd7] font-semibold text-lg mb-4">AI That Sells</p>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  The outbound lead generation platform that 10X&apos;s your revenue. AI-powered prospecting, automated outreach, and intelligent pipeline management.
                </p>

                <ul className="space-y-3 mb-8">
                  {['AI-Powered Prospecting', 'Automated Outreach', 'Revenue Intelligence'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-[#1DB5C5] rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 flex items-center gap-2 text-[#009bd7] font-semibold group-hover:gap-4 transition-all duration-300">
                <span>Join the Waitlist</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Link>

          {/* SKAL Staffing Card */}
          <Link href="/staffing" className="group block">
            <div className="relative bg-gradient-to-br from-[#0f172a] to-[#0c2d4a] rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl hover:shadow-[#1DB5C5]/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden min-h-[400px] flex flex-col justify-between">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1DB5C5]/10 via-transparent to-[#009bd7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#1DB5C5]/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#009bd7]/20 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>

              {/* Abstract team visual */}
              <svg className="absolute top-6 right-6 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="30" r="10" stroke="#1DB5C5" strokeWidth="1.5" />
                <circle cx="25" cy="65" r="8" stroke="#009bd7" strokeWidth="1.5" />
                <circle cx="75" cy="65" r="8" stroke="#00E1FF" strokeWidth="1.5" />
                <line x1="50" y1="40" x2="30" y2="58" stroke="#1DB5C5" strokeWidth="1" />
                <line x1="50" y1="40" x2="70" y2="58" stroke="#009bd7" strokeWidth="1" />
                <line x1="33" y1="65" x2="67" y2="65" stroke="#00E1FF" strokeWidth="1" strokeDasharray="3 3" />
              </svg>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1DB5C5] to-[#009bd7] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-500 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  SKAL{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DB5C5] to-[#009bd7]">
                    Staffing
                  </span>
                </h3>
                <p className="text-[#1DB5C5] font-semibold text-lg mb-4">Top 5% AI Talent</p>

                <p className="text-gray-300 leading-relaxed mb-8">
                  Pre-vetted AI and engineering talent embedded directly into your team. No recruiting, no ramp-up — just results.
                </p>

                <ul className="space-y-3 mb-8">
                  {['Pre-Vetted Top 5% Engineers', 'Seamless Team Integration', 'Flexible Engagement Models'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-400">
                      <div className="w-1.5 h-1.5 bg-[#1DB5C5] rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 flex items-center gap-2 text-[#1DB5C5] font-semibold group-hover:gap-4 transition-all duration-300">
                <span>Explore Staffing</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSplit;
