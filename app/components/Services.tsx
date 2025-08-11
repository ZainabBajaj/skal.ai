"use client";

import { ArrowRight } from 'lucide-react';
import Stack from './Stack';

const Services = () => {
  return (
          <section 
        id="services" 
        className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 overflow-hidden"
      >
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {/* Static background gradients for depth */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#009bd7]/8 to-[#00E1FF]/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#00E1FF]/6 to-purple-300/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-300/4 to-pink-300/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Stack Component */}
        <Stack />

          {/* Enhanced Service Category Cards */}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 rounded-full border border-[#009bd7]/20 mb-4">
                <div className="w-2 h-2 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] rounded-full animate-pulse"></div>
                <span className="text-[#009bd7] dark:text-[#00E1FF] text-xs sm:text-sm font-bold tracking-wider">CHOOSE YOUR PATH</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#009bd7] to-[#00E1FF] dark:from-white dark:via-[#009bd7] dark:to-[#00E1FF] mb-4 sm:mb-6 leading-tight">
                Ready to Transform?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                Select the path that best fits your journey and let&apos;s build something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF] font-bold">
                  extraordinary together
                </span>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-0">
              {/* Enhanced Startup Card */}
              <div className="group relative bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-blue-900/30 dark:via-cyan-900/20 dark:to-indigo-900/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 xl:p-12 border border-blue-200/50 dark:border-blue-700/50 hover:shadow-3xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden min-h-[400px] sm:min-h-[500px]">
                {/* Animated background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-indigo-500/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-400/20 to-blue-400/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" style={{animationDelay: '200ms'}}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 text-center">
                    I&apos;m A <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600 dark:from-blue-300 dark:to-cyan-400">Startup.</span>
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-center mb-8 leading-relaxed">
                    Remarkable ideas often stall without the right team to bring them to life
                  </p>
                  
                  {/* Additional features */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>MVP Development in 2-4 weeks</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span>Scalable Architecture Design</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>24/7 Technical Support</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <button 
                      onClick={() => window.location.href = '/startup'}
                      className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
                    >
                      <span className="relative z-10">Get Started</span>
                      <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
              </div>

              {/* Enhanced Enterprise Card */}
              <div className="group relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 backdrop-blur-xl rounded-3xl shadow-2xl p-10 sm:p-12 border border-gray-700/50 hover:shadow-3xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden min-h-[500px]">
                {/* Animated background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" style={{animationDelay: '200ms'}}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    I&apos;m An <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Enterprise.</span>
                  </h3>
                  
                  <p className="text-gray-300 text-center mb-8 leading-relaxed">
                    Scaling without the right infrastructure and expertise can lead to costly bottlenecks
                  </p>
                  
                  {/* Additional features */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Enterprise-grade Security</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Compliance & Governance</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>Dedicated Project Manager</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <button 
                      onClick={() => window.location.href = '/enterprise'}
                      className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
                    >
                      <span className="relative z-10">Explore More</span>
                      <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
              </div>

              {/* Enhanced Rescue Card */}
              <div className="group relative bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 dark:from-red-900/30 dark:via-orange-900/20 dark:to-amber-900/30 backdrop-blur-xl rounded-3xl shadow-2xl p-10 sm:p-12 border border-red-200/50 dark:border-red-700/50 hover:shadow-3xl hover:shadow-red-500/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden min-h-[500px]">
                {/* Animated background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-orange-500/5 to-amber-500/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-400/20 to-amber-400/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" style={{animationDelay: '200ms'}}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4 text-center">
                    I Need A <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-orange-600 dark:from-red-300 dark:to-orange-400">Rescue.</span>
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-center mb-8 leading-relaxed">
                    A messy codebase and tech debt are suffocating your progress
                  </p>
                  
                  {/* Additional features */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Code Review & Refactoring</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>Performance Optimization</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span>Technical Debt Cleanup</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <button 
                      onClick={() => window.location.href = '/rescue'}
                      className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
                    >
                      <span className="relative z-10">Need a Fix</span>
                      <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default Services; 