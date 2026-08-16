'use client';

import { User, Mail, Brain, Target, CreditCard, Send, ArrowRight, Clock, Building2, ChevronDown } from 'lucide-react';
import { useLeadForm } from '../hooks/useLeadForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';


export default function EnterpriseOffer() {
  const { formRef, formData, status, handleChange, scrollToForm, handleSubmit } = useLeadForm({
    name: '',
    email: '',
    company: '',
    project: '',
    outcome: '',
    budget: '$50,000-$100,000'
  });

  return (
    <main className="min-h-screen bg-paper">
      <Navbar />
      
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16 relative overflow-hidden bg-surface">

        <div className="shell">
          {/* Header */}
          <div className="mb-12">
            <div className="mb-6">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-blue-400 text-xs sm:text-sm font-bold tracking-wider">ENTERPRISE PACKAGE</span>
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-blue-400" />
            </div>
            
            <h1 className="font-display t-hero text-ink max-w-[16ch]">
              I&apos;m An <span className="accent">Enterprise.</span>
            </h1>
            
            <h2 className="t-lead mt-6 max-w-[46ch]">
              Scaling without the right infrastructure and expertise can lead to costly bottlenecks
            </h2>
            
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-2 max-w-[54ch]">
              We help enterprises build robust, scalable solutions with enterprise-grade security, 
              compliance, and performance that drives business transformation.
            </p>
            
            <div className="mt-8 inline-flex items-center gap-2">
              <Building2 className="w-5 h-5 text-gray-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-blue-400 font-medium">Enterprise-grade solutions for complex challenges</span>
            </div>
          </div>

          {/* Form Section */}
          <div className="" ref={formRef}>
            <div className="border border-rule bg-surface p-8">
              {/* Form Background Effects */}

              <h3 className="text-2xl sm:text-3xl font-bold text-ink mb-6 text-center relative z-10">
                Enterprise Solutions Inquiry
              </h3>
              
              <p className="text-center text-ink-2 mb-8 relative z-10">
                Fill out this form and we&apos;ll contact you within 1-2 hours to discuss your enterprise needs
              </p>

              <form onSubmit={(e) => handleSubmit(e, { source: 'waitlist_enterprise', from_name: formData.name, reply_to: formData.email, website: formData.company, idea: formData.project, outcome: formData.outcome, budget: formData.budget })} className="relative z-10 space-y-6 sm:space-y-8">
                {/* Name Field */}
                <div className="group">
                  <label htmlFor="name" className="t-label block mb-1">
                    <User className="w-4 h-4 text-gray-600 dark:text-blue-400" />
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
                    <Mail className="w-4 h-4 text-gray-600 dark:text-blue-400" />
                    Email
                  </label>
                  <div className="relative">
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
                </div>

                {/* Company Field */}
                <div className="group">
                  <label htmlFor="company" className="t-label block mb-1">
                    <Building2 className="w-4 h-4 text-gray-600 dark:text-blue-400" />
                    Company Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-rule py-3 text-[0.9375rem] text-ink placeholder:text-ink-3/70 focus:outline-none focus:border-ink transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                {/* Project Field */}
                <div className="group">
                  <label htmlFor="project" className="t-label block mb-1">
                    <Brain className="w-4 h-4 text-gray-600 dark:text-blue-400" />
                    Tell us about your enterprise project
                  </label>
                  <div className="relative">
                    <textarea
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-transparent border-b border-rule py-3 text-[0.9375rem] text-ink placeholder:text-ink-3/70 focus:outline-none focus:border-ink transition-colors resize-none"
                      placeholder="Describe your enterprise project and technical requirements"
                    />
                  </div>
                </div>

                {/* Outcome Field */}
                <div className="group">
                  <label htmlFor="outcome" className="t-label block mb-1">
                    <Target className="w-4 h-4 text-gray-600 dark:text-blue-400" />
                    What business outcomes are you looking to achieve?
                  </label>
                  <div className="relative">
                    <textarea
                      id="outcome"
                      name="outcome"
                      value={formData.outcome}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full bg-transparent border-b border-rule py-3 text-[0.9375rem] text-ink placeholder:text-ink-3/70 focus:outline-none focus:border-ink transition-colors resize-none"
                      placeholder="Tell us about your business goals and success metrics"
                    />
                  </div>
                </div>

                {/* Budget Field */}
                <div className="group">
                  <label htmlFor="budget" className="t-label block mb-1">
                    <CreditCard className="w-4 h-4 text-gray-600 dark:text-blue-400" />
                    Budget Range
                  </label>
                  <div className="relative">
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-rule py-3 text-[0.9375rem] text-ink placeholder:text-ink-3/70 focus:outline-none focus:border-ink transition-colors"
                    >
                    <option value="$50,000-$100,000">$50,000-$100,000</option>
                    <option value="$100,000-$250,000">$100,000-$250,000</option>
                    <option value="$250,000-$500,000">$250,000-$500,000</option>
                    <option value="$500,000-$1,000,000">$500,000-$1,000,000</option>
                    <option value="$1,000,000-$2,500,000">$1,000,000-$2,500,000</option>
                    <option value="$2,500,000-$5,000,000">$2,500,000-$5,000,000</option>
                    <option value="$5,000,000-$10,000,000">$5,000,000-$10,000,000</option>
                    <option value="$10,000,000+">$10,000,000+</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <ChevronDown className="w-5 h-5 text-ink-3" />
                  </div>
                </div>
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
                  
                  {/* Button glow effect */}
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
              Enterprise Package Includes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Enterprise Architecture */}
              <div className="border border-rule bg-surface p-8">
                <div className="flex justify-center mb-6">
                  <div className="hidden">
                    <Building2 className="w-8 h-8 text-gray-600 dark:text-blue-400" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-ink mb-4 text-center">
                  Enterprise Architecture
                </h3>
                
                <p className="text-ink-2 text-center">
                  Scalable, secure, and compliant enterprise-grade solutions
                </p>
              </div>

              {/* Strategic Consulting */}
              <div className="border border-rule bg-surface p-8">
                <div className="flex justify-center mb-6">
                  <div className="hidden">
                    <Brain className="w-8 h-8 text-gray-600 dark:text-blue-400" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-ink mb-4 text-center">
                  Strategic Consulting
                </h3>
                
                <p className="text-ink-2 text-center">
                  Expert guidance on technology strategy and digital transformation
                </p>
              </div>

              {/* 24/7 Support */}
              <div className="border border-rule bg-surface p-8">
                <div className="flex justify-center mb-6">
                  <div className="hidden">
                    <Clock className="w-8 h-8 text-gray-600 dark:text-blue-400" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-ink mb-4 text-center">
                  24/7 Support
                </h3>
                
                <p className="text-ink-2 text-center">
                  Round-the-clock enterprise support and maintenance
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
              <span>Explore Enterprise Solutions</span>
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

// Helper component for dropdown icon
