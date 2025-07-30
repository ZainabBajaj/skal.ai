'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Rocket, User, Mail, Globe, Brain, Target, CreditCard, Send, ArrowRight, Code, MessageSquare, Clock } from 'lucide-react';
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

export default function StartupOffer() {
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    website: '',
    idea: '',
    outcome: '',
    budget: 'Startup Package'
  });

  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      setStatus({ type: 'sending' });
      
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
          subject: "New Startup Package Request",
          message: `
Website: ${formData.website}
Idea: ${formData.idea}
Outcome: ${formData.outcome}
Budget: ${formData.budget}
Package: Startup
          `
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      
      setStatus({ type: 'success', message: 'Request submitted successfully! We\'ll contact you within 1-2 hours.' });
      setFormData({ name: '', email: '', website: '', idea: '', outcome: '', budget: 'Startup Package' });
    } catch (error) {
      setStatus({ 
        type: 'error',
        message: 'Failed to submit request. Please try again or contact us directly.'
      });
      console.error('Error sending email:', error);
    }
  };

  return (
    <main className="relative min-h-screen">
      <GlobalSquidBackground />
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
          
          {/* Startup-specific animated objects */}
          {/* Floating rockets */}
          <div className="absolute top-20 left-20 w-8 h-8 text-blue-400/30 animate-float">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
            </svg>
          </div>
          <div className="absolute top-40 right-32 w-6 h-6 text-cyan-400/25 animate-float" style={{animationDelay: '2s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
            </svg>
          </div>
          
          {/* Lightning bolts */}
          <div className="absolute top-60 left-1/4 w-10 h-10 text-blue-500/20 animate-pulse">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2L3 12H8L6 22L21 8H14L16 2H7Z"/>
            </svg>
          </div>
          <div className="absolute top-80 right-1/3 w-8 h-8 text-cyan-500/15 animate-pulse" style={{animationDelay: '1.5s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2L3 12H8L6 22L21 8H14L16 2H7Z"/>
            </svg>
          </div>
          
          {/* Upward arrows */}
          <div className="absolute bottom-40 left-1/3 w-12 h-12 text-blue-400/20 animate-bounce">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4L12 20M12 4L6 10M12 4L18 10"/>
            </svg>
          </div>
          <div className="absolute bottom-60 right-1/4 w-10 h-10 text-cyan-400/15 animate-bounce" style={{animationDelay: '0.5s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4L12 20M12 4L6 10M12 4L18 10"/>
            </svg>
          </div>
          
          {/* Sparkles */}
          <div className="absolute top-1/3 left-1/6 w-4 h-4 text-blue-300/40 animate-ping">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
            </svg>
          </div>
          <div className="absolute top-2/3 right-1/6 w-3 h-3 text-cyan-300/35 animate-ping" style={{animationDelay: '1s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 dark:from-blue-500/30 dark:to-cyan-500/30 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 backdrop-blur-sm border border-blue-500/20 dark:border-cyan-500/30 animate-pulse">
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 dark:text-cyan-400" />
              <span className="text-blue-600 dark:text-cyan-400 text-xs sm:text-sm font-bold tracking-wider">STARTUP PACKAGE</span>
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 dark:text-cyan-400" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-blue-600 to-cyan-500 dark:from-white dark:via-blue-400 dark:to-cyan-400 mb-4 sm:mb-6 leading-tight">
              I&apos;m A <span className="text-blue-600 dark:text-blue-400">Startup.</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Remarkable ideas often stall without the right team to bring them to life
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
              We help startups transform their vision into reality with expert development, 
              strategic guidance, and scalable solutions that accelerate your growth.
            </p>
            
            <div className="mt-8 inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full px-6 py-3">
              <Rocket className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-medium">From idea to MVP in record time</span>
            </div>
          </div>

          {/* Form Section */}
          <div className="max-w-4xl mx-auto" ref={formRef}>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-white/50 dark:border-gray-700/50 relative overflow-hidden">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                Get Started with Your Startup
              </h3>
              
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                Fill out this form and we&apos;ll contact you within 1-2 hours to discuss your startup needs
              </p>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6 sm:space-y-8">
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
                    Website URL (optional)
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

                {/* Startup Idea Field */}
                <div className="group">
                  <label htmlFor="idea" className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">
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
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-cyan-400 bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-all duration-300 resize-none"
                    placeholder="Describe your startup idea and what you need help with"
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
                    placeholder="Tell us about your goals and timeline"
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
                    <option value="Startup Package">Startup Package</option>
                    <option value="$1000-$5000">$1000-$5000</option>
                    <option value="$5000-$15000">$5000-$15000</option>
                    <option value="$15000-$50000">$15000-$50000</option>
                    <option value="$50000+">$50000+</option>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-blue-600 to-cyan-500 dark:from-white dark:via-blue-400 dark:to-cyan-400 mb-12">
              Startup Package Includes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* MVP Development */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-white/50 dark:border-gray-700/50 relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-full">
                    <Code className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                  MVP Development
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Rapid development of your minimum viable product with core features
                </p>
              </div>

              {/* Strategic Guidance */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-white/50 dark:border-gray-700/50 relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-full">
                    <MessageSquare className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                  Strategic Guidance
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Expert consultation on technology choices and growth strategy
                </p>
              </div>

              {/* Scalable Architecture */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-white/50 dark:border-gray-700/50 relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-full">
                    <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                  Scalable Architecture
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Future-proof technology stack that grows with your business
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