'use client';

import { Rocket, User, Mail, Globe, Brain, Target, CreditCard, Send, ArrowRight, Code, MessageSquare, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';

import { useLeadForm } from '../hooks/useLeadForm';

export default function StartupOffer() {
  const { formRef, formData, status, handleChange, scrollToForm, handleSubmit } = useLeadForm({
    name: '',
    email: '',
    website: '',
    idea: '',
    outcome: '',
    budget: 'Under $1,000'
  });

  return (
    <main className="min-h-screen bg-paper">
      <Navbar />
      
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16 relative overflow-hidden bg-surface">
        <div className="shell">
          {/* Header */}
          <div className="mb-12">
            <div className="mb-6">
              <span className="text-signal text-xs sm:text-sm font-bold tracking-wider">STARTUP PACKAGE</span>
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 dark:text-cyan-400" />
            </div>
            
            <h1 className="font-display t-hero text-ink max-w-[16ch]">
              I&apos;m A <span className="accent">Startup.</span>
            </h1>
            
            <h2 className="t-lead mt-6 max-w-[46ch]">
              Remarkable ideas often stall without the right team to bring them to life
            </h2>
            
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-2 max-w-[54ch]">
              We help startups transform their vision into reality with expert development, 
              strategic guidance, and scalable solutions that accelerate your growth.
            </p>
            
            <div className="mt-8 inline-flex items-center gap-2">
              <span className="t-label">From idea to MVP in record time</span>
            </div>
          </div>

          {/* Form Section */}
          <div className="" ref={formRef}>
            <div className="border border-rule bg-surface p-8">
              {/* Form Background Effects */}

              <h3 className="text-2xl sm:text-3xl font-bold text-ink mb-6 text-center relative z-10">
                Get Started with Your Startup
              </h3>
              
              <p className="text-center text-ink-2 mb-8 relative z-10">
                Fill out this form and we&apos;ll contact you within 1-2 hours to discuss your startup needs
              </p>

              <form onSubmit={(e) => handleSubmit(e, { source: 'waitlist_startup', from_name: formData.name, reply_to: formData.email, website: formData.website, idea: formData.idea, outcome: formData.outcome, budget: formData.budget })} className="relative z-10 space-y-6 sm:space-y-8">
                {/* Name Field */}
                <div className="group">
                  <label htmlFor="name" className="t-label block mb-1">
                    <User className="w-4 h-4 text-blue-600" />
                    Name
                  </label>
                  <div className="relative">
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
                    Website URL (optional)
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

                {/* Startup Idea Field */}
                <div className="group">
                  <label htmlFor="idea" className="t-label block mb-1">
                    <Brain className="w-4 h-4 text-blue-600" />
                    Tell us about your startup idea
                  </label>
                  <textarea
                    id="idea"
                    name="idea"
                    value={formData.idea}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-rule py-3 text-[0.9375rem] text-ink placeholder:text-ink-3/70 focus:outline-none focus:border-ink transition-colors resize-none"
                    placeholder="Describe your startup idea and what you need help with"
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
                    placeholder="Tell us about your goals and timeline"
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
                    <option value="Under $1,000">Under $1,000</option>
                    <option value="$1,000-$3,000">$1,000-$3,000</option>
                    <option value="$3,000-$5,000">$3,000-$5,000</option>
                    <option value="$5,000-$10,000">$5,000-$10,000</option>
                    <option value="$10,000-$50,000">$10,000-$50,000</option>
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
              Startup Package Includes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* MVP Development */}
              <div className="border border-rule bg-surface p-8">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-full">
                    <Code className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-ink mb-4 text-center">
                  MVP Development
                </h3>
                
                <p className="text-ink-2 text-center">
                  Rapid development of your minimum viable product with core features
                </p>
              </div>

              {/* Strategic Guidance */}
              <div className="border border-rule bg-surface p-8">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-full">
                    <MessageSquare className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-ink mb-4 text-center">
                  Strategic Guidance
                </h3>
                
                <p className="text-ink-2 text-center">
                  Expert consultation on technology choices and growth strategy
                </p>
              </div>

              {/* Scalable Architecture */}
              <div className="border border-rule bg-surface p-8">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-full">
                    <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-ink mb-4 text-center">
                  Scalable Architecture
                </h3>
                
                <p className="text-ink-2 text-center">
                  Future-proof technology stack that grows with your business
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
              <span>Get Started Now</span>
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