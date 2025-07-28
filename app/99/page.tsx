'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';
import { PartyPopper, Sparkles, User, Mail, Globe, Brain, Target, CreditCard, Send, ArrowRight, Clock, Code, MessageSquare } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';
import GlobalSquidBackground from '../components/GlobalSquidBackground';

type FormStatus = {
  type: 'idle' | 'sending' | 'success' | 'error';
  message?: string;
};

type FormData = {
  name: string;
  email: string;
  website: string;
  idea: string;
  outcome: string;
  budget: string;
};

export default function MVPOffer() {
  const router = useRouter();
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    website: '',
    idea: '',
    outcome: '',
    budget: '$99 - MVP Only'
  });

  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      setStatus({ type: 'sending' });
      
      // Make sure environment variables exist
      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
          !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 
          !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        throw new Error('EmailJS environment variables are not set');
      }
      
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: "New $99 MVP Request",
          message: `
Website: ${formData.website}
Idea: ${formData.idea}
Outcome: ${formData.outcome}
Budget: ${formData.budget}
          `
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      
      setStatus({ type: 'success', message: 'Request submitted successfully! We\'ll contact you within 1-2 hours.' });
      setFormData({ name: '', email: '', website: '', idea: '', outcome: '', budget: '$99 - MVP Only' });
    } catch (error) {
      setStatus({ 
        type: 'error',
        message: 'Failed to submit request. Please try again or contact us directly.'
      });
      console.error('Error sending email:', error);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen">
      <GlobalSquidBackground />
      <Navbar />
      
      <section className="pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated background gradients */}
          <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-[#009bd7]/8 to-[#00E1FF]/6 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-[#00E1FF]/6 to-purple-300/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-purple-300/4 to-pink-300/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header with Limited Time Offer */}
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-amber-500/20 dark:from-red-500/30 dark:to-amber-500/30 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 backdrop-blur-sm border border-red-500/20 dark:border-amber-500/30 animate-pulse">
              <PartyPopper className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 dark:text-amber-400" />
              <span className="text-red-600 dark:text-amber-400 text-xs sm:text-sm font-bold tracking-wider">LIMITED TIME OFFER</span>
              <PartyPopper className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 dark:text-amber-400" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#009bd7] to-[#00E1FF] dark:from-white dark:via-[#009bd7] dark:to-[#00E1FF] mb-4 sm:mb-6 leading-tight">
              Your MVP for just <span className="text-red-500 dark:text-amber-400">$99</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Built in 48 hours or less
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Launch your AI-powered idea quickly and affordably. Our expert team will build a 
              functional MVP that demonstrates your concept's potential to investors and early users.
            </p>
            
            <div className="mt-8 inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full px-6 py-3">
              <Sparkles className="w-5 h-5 text-[#009bd7]" />
              <span className="text-[#009bd7] font-medium">The most easy and reliable way for founders to transform their Vision into Reality</span>
            </div>
          </div>

          {/* Form Section */}
          <div className="max-w-4xl mx-auto" ref={formRef}>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-white/50 dark:border-gray-700/50 relative overflow-hidden">
              {/* Form Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#009bd7]/5 via-transparent to-[#00E1FF]/5 pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-bl from-[#00E1FF]/10 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-tr from-[#009bd7]/10 to-transparent rounded-full blur-3xl"></div>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                Get Started Now
              </h3>
              
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                Fill out this form and we'll contact you within 1-2 hours to begin work on your MVP
              </p>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6 sm:space-y-8">
                {/* Name Field */}
                <div className="group">
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">
                    <User className="w-4 h-4 text-[#009bd7]" />
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
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[#009bd7]/20 focus:border-[#009bd7] dark:focus:border-[#00E1FF] bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm text-sm sm:text-base"
                      placeholder="Your name"
                    />
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#009bd7]/0 to-[#00E1FF]/0 group-focus-within:from-[#009bd7]/5 group-focus-within:to-[#00E1FF]/5 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">
                    <Mail className="w-4 h-4 text-[#009bd7]" />
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
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[#009bd7]/20 focus:border-[#009bd7] dark:focus:border-[#00E1FF] bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm text-sm sm:text-base"
                      placeholder="Your email"
                    />
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#009bd7]/0 to-[#00E1FF]/0 group-focus-within:from-[#009bd7]/5 group-focus-within:to-[#00E1FF]/5 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Website URL Field */}
                <div className="group">
                  <label htmlFor="website" className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">
                    <Globe className="w-4 h-4 text-[#009bd7]" />
                    Please enter your business website's URL
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[#009bd7]/20 focus:border-[#009bd7] dark:focus:border-[#00E1FF] bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm text-sm sm:text-base"
                      placeholder="https://example.com (optional)"
                    />
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#009bd7]/0 to-[#00E1FF]/0 group-focus-within:from-[#009bd7]/5 group-focus-within:to-[#00E1FF]/5 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* AI System Idea Field */}
                <div className="group">
                  <label htmlFor="idea" className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">
                    <Brain className="w-4 h-4 text-[#009bd7]" />
                    Is there a specific AI system or workflow in mind that you want built out, or would you like help figuring out what's possible?
                  </label>
                  <div className="relative">
                    <textarea
                      id="idea"
                      name="idea"
                      value={formData.idea}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[#009bd7]/20 focus:border-[#009bd7] dark:focus:border-[#00E1FF] bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm resize-none text-sm sm:text-base"
                      placeholder="Describe your idea or let us know if you need guidance"
                    />
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#009bd7]/0 to-[#00E1FF]/0 group-focus-within:from-[#009bd7]/5 group-focus-within:to-[#00E1FF]/5 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Outcome Field */}
                <div className="group">
                  <label htmlFor="outcome" className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">
                    <Target className="w-4 h-4 text-[#009bd7]" />
                    What's the main outcome you're hoping to achieve by working with us?
                  </label>
                  <div className="relative">
                    <textarea
                      id="outcome"
                      name="outcome"
                      value={formData.outcome}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[#009bd7]/20 focus:border-[#009bd7] dark:focus:border-[#00E1FF] bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm resize-none text-sm sm:text-base"
                      placeholder="Tell us about your goals"
                    />
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#009bd7]/0 to-[#00E1FF]/0 group-focus-within:from-[#009bd7]/5 group-focus-within:to-[#00E1FF]/5 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Budget Field */}
                <div className="group">
                  <label htmlFor="budget" className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">
                    <CreditCard className="w-4 h-4 text-[#009bd7]" />
                    Is there a budget range you're considering for this project?
                  </label>
                  <div className="relative">
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[#009bd7]/20 focus:border-[#009bd7] dark:focus:border-[#00E1FF] bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm text-sm sm:text-base appearance-none"
                    >
                      <option value="$99 - MVP Only">$99 - MVP Only</option>
                      <option value="$100-$500">$100-$500</option>
                      <option value="$500-$1000">$500-$1000</option>
                      <option value="$1000-$10000">$1000-$10000</option>
                      <option value="$10000-$50000">$10000-$50000</option>
                      <option value="$50000+">$50000+</option>
                    </select>
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#009bd7]/0 to-[#00E1FF]/0 group-focus-within:from-[#009bd7]/5 group-focus-within:to-[#00E1FF]/5 transition-all duration-300 pointer-events-none"></div>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.type === 'sending'}
                  className="group relative inline-flex items-center justify-center w-full gap-2 sm:gap-3 px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-bold rounded-xl sm:rounded-2xl transition-all duration-300 hover:from-[#008bc1] hover:to-[#00c7e3] hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transform text-sm sm:text-base"
                >
                  <span className="relative z-10">
                    {status.type === 'sending' ? 'Submitting Request...' : 'Submit Request'}
                  </span>
                  <Send className={`w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform duration-300 ${status.type === 'sending' ? 'animate-pulse' : 'group-hover:translate-x-1'}`} />
                  
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#009bd7] to-[#00E1FF] dark:from-white dark:via-[#009bd7] dark:to-[#00E1FF] mb-12">
              Your $99 MVP Package Includes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Working Prototype */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-white/50 dark:border-gray-700/50 relative overflow-hidden group hover:shadow-2xl hover:shadow-[#009bd7]/10 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-[#009bd7]/5 via-transparent to-[#00E1FF]/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-[#009bd7]/10 dark:bg-[#009bd7]/20 rounded-full">
                    <Code className="w-8 h-8 text-[#009bd7]" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                  Working Prototype
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  A functional MVP that demonstrates your AI concept's core functionality
                </p>
              </div>

              {/* 48-Hour Turnaround */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-white/50 dark:border-gray-700/50 relative overflow-hidden group hover:shadow-2xl hover:shadow-[#009bd7]/10 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-[#009bd7]/5 via-transparent to-[#00E1FF]/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-[#009bd7]/10 dark:bg-[#009bd7]/20 rounded-full">
                    <Clock className="w-8 h-8 text-[#009bd7]" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                  48-Hour Turnaround
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Quick development so you can start testing and iterating on your idea immediately
                </p>
              </div>

              {/* Expert Consultation */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-white/50 dark:border-gray-700/50 relative overflow-hidden group hover:shadow-2xl hover:shadow-[#009bd7]/10 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-[#009bd7]/5 via-transparent to-[#00E1FF]/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-[#009bd7]/10 dark:bg-[#009bd7]/20 rounded-full">
                    <MessageSquare className="w-8 h-8 text-[#009bd7]" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                  Expert Consultation
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Guidance on feasibility, technical requirements and future development roadmap
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 sm:mt-20 text-center">
            <button
              onClick={scrollToForm}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-bold rounded-xl transition-all duration-300 hover:from-[#008bc1] hover:to-[#00c7e3] hover:scale-105 hover:shadow-xl"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
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
function ChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
} 