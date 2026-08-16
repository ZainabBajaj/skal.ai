'use client';

import { Wrench, User, Mail, Globe, Brain, Target, CreditCard, Send, ArrowRight, Clock } from 'lucide-react';
import { useLeadForm } from '../hooks/useLeadForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';


export default function RescueOffer() {
  const { formRef, formData, status, handleChange, scrollToForm, handleSubmit } = useLeadForm({
    name: '',
    email: '',
    website: '',
    problem: '',
    outcome: '',
    budget: '$2,000-$5,000'
  });

  return (
    <main className="min-h-screen bg-paper">
      <Navbar />
      
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16 relative overflow-hidden bg-surface">

        <div className="shell">
          {/* Header */}
          <div className="mb-12">
            <div className="mb-6">
              <span className="text-signal text-xs sm:text-sm font-bold tracking-wider">RESCUE PACKAGE</span>
              <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 dark:text-cyan-400" />
            </div>
            
            <h1 className="font-display t-hero text-ink max-w-[16ch]">
              I Need A <span className="accent">Rescue.</span>
            </h1>
            
            <h2 className="t-lead mt-6 max-w-[46ch]">
              A messy codebase and tech debt are suffocating your progress
            </h2>
            
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-2 max-w-[54ch]">
              We rescue struggling projects by cleaning up codebases, fixing technical debt, 
              and implementing best practices to get your project back on track.
            </p>
            
            <div className="mt-8 inline-flex items-center gap-2">
              <span className="t-label">Emergency code rescue and technical debt cleanup</span>
            </div>
          </div>

          {/* Form Section */}
          <div className="" ref={formRef}>
            <div className="border border-rule bg-surface p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-ink mb-6 text-center">
                Get Your Project Rescued
              </h3>
              
              <p className="text-center text-ink-2 mb-8">
                Fill out this form and we&apos;ll contact you within 1-2 hours to discuss your rescue needs
              </p>

              <form onSubmit={(e) => handleSubmit(e, { source: 'waitlist_rescue', from_name: formData.name, reply_to: formData.email, website: formData.website, idea: formData.problem, outcome: formData.outcome, budget: formData.budget })} className="relative z-10 space-y-6 sm:space-y-8">
                {/* Name Field */}
                <div className="group">
                  <label htmlFor="name" className="t-label block mb-1">
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
                    className="w-full bg-transparent border-b border-rule py-3 text-[0.9375rem] text-ink placeholder:text-ink-3/70 focus:outline-none focus:border-ink transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div className="group">
                  <label htmlFor="email" className="t-label block mb-1">
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
                    className="w-full bg-transparent border-b border-rule py-3 text-[0.9375rem] text-ink placeholder:text-ink-3/70 focus:outline-none focus:border-ink transition-colors"
                    placeholder="Your email"
                  />
                </div>

                {/* Website URL Field */}
                <div className="group">
                  <label htmlFor="website" className="t-label block mb-1">
                    <Globe className="w-4 h-4 text-blue-600" />
                    Project URL (optional)
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-rule py-3 text-[0.9375rem] text-ink placeholder:text-ink-3/70 focus:outline-none focus:border-ink transition-colors"
                    placeholder="https://example.com"
                  />
                </div>

                {/* Problem Field */}
                <div className="group">
                  <label htmlFor="problem" className="t-label block mb-1">
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
                    className="w-full bg-transparent border-b border-rule py-3 text-[0.9375rem] text-ink placeholder:text-ink-3/70 focus:outline-none focus:border-ink transition-colors resize-none"
                    placeholder="Describe the technical issues, code problems, or tech debt you need help with"
                  />
                </div>

                {/* Outcome Field */}
                <div className="group">
                  <label htmlFor="outcome" className="t-label block mb-1">
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
                    className="w-full bg-transparent border-b border-rule py-3 text-[0.9375rem] text-ink placeholder:text-ink-3/70 focus:outline-none focus:border-ink transition-colors resize-none"
                    placeholder="Tell us what you want to achieve after the rescue"
                  />
                </div>

                {/* Budget Field */}
                <div className="group">
                  <label htmlFor="budget" className="t-label block mb-1">
                    <CreditCard className="w-4 h-4 text-blue-600" />
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-rule py-3 text-[0.9375rem] text-ink placeholder:text-ink-3/70 focus:outline-none focus:border-ink transition-colors"
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
                  className="btn btn-solid group disabled:opacity-50"
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
            <h2 className="font-display t-h2 text-ink mb-12 max-w-[18ch]">
              Rescue Package Includes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Code Cleanup */}
              <div className="border border-rule bg-surface p-8">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-full">
                    <Wrench className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-ink mb-4 text-center">
                  Code Cleanup
                </h3>
                
                <p className="text-ink-2 text-center">
                  Refactor messy code, fix bugs, and implement best practices
                </p>
              </div>

              {/* Tech Debt Resolution */}
              <div className="border border-rule bg-surface p-8">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-full">
                    <Brain className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-ink mb-4 text-center">
                  Tech Debt Resolution
                </h3>
                
                <p className="text-ink-2 text-center">
                  Identify and resolve technical debt to improve performance
                </p>
              </div>

              {/* Emergency Support */}
              <div className="border border-rule bg-surface p-8">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-full">
                    <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-ink mb-4 text-center">
                  Emergency Support
                </h3>
                
                <p className="text-ink-2 text-center">
                  Priority support to get your project back on track quickly
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 sm:mt-20 text-center">
            <button
              onClick={scrollToForm}
              className="btn btn-solid group disabled:opacity-50"
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