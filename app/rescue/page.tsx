'use client';

import { Wrench, User, Mail, Globe, Brain, Target, CreditCard, Send, ArrowRight, Clock } from 'lucide-react';
import { useEmailForm } from '../hooks/useEmailForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';


export default function RescueOffer() {
  const { formRef, formData, status, handleChange, scrollToForm, handleSubmit } = useEmailForm({
    name: '',
    email: '',
    website: '',
    problem: '',
    outcome: '',
    budget: '$2,000-$5,000'
  });

  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden bg-white dark:bg-gray-800">
        {/* Footer-style Background Elements - Both Light and Dark Mode */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle wavy lines pattern like footer */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-400/30 to-transparent animate-pulse"></div>
          <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-400/20 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-400/25 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-400/15 to-transparent animate-pulse" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-400/20 to-transparent animate-pulse" style={{animationDelay: '4s'}}></div>
          
          {/* Subtle background pattern overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700/10 via-transparent to-gray-600/10 pointer-events-none"></div>
          
          {/* Rescue-specific animated objects */}
          {/* Wrenches */}
          <div className="absolute top-20 left-20 w-10 h-10 text-orange-400/30 animate-float">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
          </div>
          <div className="absolute top-40 right-32 w-8 h-8 text-red-400/25 animate-float" style={{animationDelay: '2s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
          </div>
          
          {/* Warning triangles */}
          <div className="absolute top-60 left-1/4 w-12 h-12 text-orange-500/20 animate-pulse">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
            </svg>
          </div>
          <div className="absolute top-80 right-1/3 w-10 h-10 text-red-500/15 animate-pulse" style={{animationDelay: '1.5s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
            </svg>
          </div>
          
          {/* Screwdrivers */}
          <div className="absolute bottom-40 left-1/3 w-8 h-8 text-orange-400/20 animate-bounce">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
          </div>
          <div className="absolute bottom-60 right-1/4 w-6 h-6 text-red-400/15 animate-bounce" style={{animationDelay: '0.5s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
          </div>
          
          {/* Emergency lights */}
          <div className="absolute top-1/3 left-1/6 w-4 h-4 text-orange-300/40 animate-ping">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
            </svg>
          </div>
          <div className="absolute top-2/3 right-1/6 w-3 h-3 text-red-300/35 animate-ping" style={{animationDelay: '1s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
            </svg>
          </div>
          
          {/* Repair tools */}
          <div className="absolute top-1/2 left-1/2 w-6 h-6 text-orange-400/25 animate-spin-slow">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 dark:from-blue-500/30 dark:to-cyan-500/30 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 backdrop-blur-sm border border-blue-500/20 dark:border-cyan-500/30 animate-pulse">
              <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 dark:text-cyan-400" />
              <span className="text-blue-600 dark:text-cyan-400 text-xs sm:text-sm font-bold tracking-wider">RESCUE PACKAGE</span>
              <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 dark:text-cyan-400" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] via-blue-600 to-cyan-500 dark:from-white dark:via-blue-400 dark:to-cyan-400 mb-4 sm:mb-6 leading-snug pb-1">
              I Need A <span className="text-blue-600 dark:text-blue-400">Rescue.</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              A messy codebase and tech debt are suffocating your progress
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
              We rescue struggling projects by cleaning up codebases, fixing technical debt, 
              and implementing best practices to get your project back on track.
            </p>
            
            <div className="mt-8 inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full px-6 py-3">
              <Wrench className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-medium">Emergency code rescue and technical debt cleanup</span>
            </div>
          </div>

          {/* Form Section */}
          <div className="max-w-4xl mx-auto" ref={formRef}>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-white/50 dark:border-gray-700/50 relative overflow-hidden">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                Get Your Project Rescued
              </h3>
              
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                Fill out this form and we&apos;ll contact you within 1-2 hours to discuss your rescue needs
              </p>

              <form onSubmit={(e) => handleSubmit(e, { from_name: formData.name, reply_to: formData.email, website: formData.website, idea: formData.problem, outcome: formData.outcome, budget: formData.budget })} className="relative z-10 space-y-6 sm:space-y-8">
                {/* Name Field */}
                <div className="group">
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">
                    <User className="w-4 h-4 text-blue-600" />
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-cyan-400 bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div className="group">
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">
                    <Mail className="w-4 h-4 text-blue-600" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-cyan-400 bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-all duration-300"
                    placeholder="Your email"
                  />
                </div>

                {/* Website URL Field */}
                <div className="group">
                  <label htmlFor="website" className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">
                    <Globe className="w-4 h-4 text-blue-600" />
                    Project URL (optional)
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-cyan-400 bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-all duration-300"
                    placeholder="https://example.com"
                  />
                </div>

                {/* Problem Field */}
                <div className="group">
                  <label htmlFor="problem" className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">
                    <Wrench className="w-4 h-4 text-blue-600" />
                    Describe the problems you&apos;re facing
                  </label>
                  <textarea
                    id="problem"
                    name="problem"
                    value={formData.problem}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-cyan-400 bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-all duration-300 resize-none"
                    placeholder="Describe the technical issues, code problems, or tech debt you need help with"
                  />
                </div>

                {/* Outcome Field */}
                <div className="group">
                  <label htmlFor="outcome" className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">
                    <Target className="w-4 h-4 text-blue-600" />
                    What&apos;s the main outcome you&apos;re hoping to achieve?
                  </label>
                  <textarea
                    id="outcome"
                    name="outcome"
                    value={formData.outcome}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-cyan-400 bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-all duration-300 resize-none"
                    placeholder="Tell us what you want to achieve after the rescue"
                  />
                </div>

                {/* Budget Field */}
                <div className="group">
                  <label htmlFor="budget" className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">
                    <CreditCard className="w-4 h-4 text-blue-600" />
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-cyan-400 bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white transition-all duration-300"
                  >
                    <option value="$2,000-$5,000">$2,000-$5,000</option>
                    <option value="$5,000-$15,000">$5,000-$15,000</option>
                    <option value="$15,000-$50,000">$15,000-$50,000</option>
                    <option value="$50,000+">$50,000+</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.type === 'sending'}
                  className="group relative inline-flex items-center justify-center w-full gap-2 sm:gap-3 px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl sm:rounded-2xl transition-all duration-300 hover:from-blue-700 hover:to-cyan-600 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transform text-sm sm:text-base"
                >
                  <span className="relative z-10">
                    {status.type === 'sending' ? 'Submitting Request...' : 'Submit Request'}
                  </span>
                  <Send className={`w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform duration-300 ${status.type === 'sending' ? 'animate-pulse' : 'group-hover:translate-x-1'}`} />
                </button>
                
                {/* Status Messages */}
                {status.type === 'success' && (
                  <div className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-green-700 dark:text-green-400 font-medium text-sm sm:text-base">{status.message}</p>
                  </div>
                )}
                
                {status.type === 'error' && (
                  <div className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <p className="text-red-700 dark:text-red-400 font-medium text-sm sm:text-base">{status.message}</p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Package Details Section */}
          <div className="mt-20 sm:mt-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] via-blue-600 to-cyan-500 dark:from-white dark:via-blue-400 dark:to-cyan-400 mb-12 leading-snug pb-1">
              Rescue Package Includes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Code Cleanup */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-white/50 dark:border-gray-700/50 relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-full">
                    <Wrench className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                  Code Cleanup
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Refactor messy code, fix bugs, and implement best practices
                </p>
              </div>

              {/* Tech Debt Resolution */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-white/50 dark:border-gray-700/50 relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-full">
                    <Brain className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                  Tech Debt Resolution
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Identify and resolve technical debt to improve performance
                </p>
              </div>

              {/* Emergency Support */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-white/50 dark:border-gray-700/50 relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-full">
                    <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                  Emergency Support
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Priority support to get your project back on track quickly
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 sm:mt-20 text-center">
            <button
              onClick={scrollToForm}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl transition-all duration-300 hover:from-blue-700 hover:to-cyan-600 hover:scale-105 hover:shadow-xl"
            >
              <span>Need a Fix Now</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingThemeToggle />
    </main>
  );
} 