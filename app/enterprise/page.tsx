'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { User, Mail, Brain, Target, CreditCard, Send, ArrowRight, Clock, Building2 } from 'lucide-react';
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
  company: string;
  project: string;
  outcome: string;
  budget: string;
};

export default function EnterpriseOffer() {
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    project: '',
    outcome: '',
    budget: 'Enterprise Package'
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
          subject: "New Enterprise Package Request",
          message: `
Company: ${formData.company}
Project: ${formData.project}
Outcome: ${formData.outcome}
Budget: ${formData.budget}
Package: Enterprise
          `
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      
      setStatus({ type: 'success', message: 'Request submitted successfully! We\'ll contact you within 1-2 hours.' });
      setFormData({ name: '', email: '', company: '', project: '', outcome: '', budget: 'Enterprise Package' });
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
          
          {/* Enterprise-specific animated objects */}
          {/* Buildings */}
          <div className="absolute top-20 left-20 w-10 h-10 text-purple-400/30 animate-float">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
          </div>
          <div className="absolute top-40 right-32 w-8 h-8 text-blue-400/25 animate-float" style={{animationDelay: '2s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
          </div>
          
          {/* Gears */}
          <div className="absolute top-60 left-1/4 w-12 h-12 text-purple-500/20 animate-spin-slow">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L19 6.5C18.8 6.2 18.6 5.9 18.4 5.7L19 4L17 2L15.3 2.6C15.1 2.4 14.8 2.2 14.5 2.1L14 0H10L9.5 2.1C9.2 2.2 8.9 2.4 8.7 2.6L7 2L5 4L5.6 5.7C5.4 5.9 5.2 6.2 5 6.5L3 7V9L5 9.5C5.2 9.8 5.4 10.1 5.6 10.3L5 12L7 14L8.7 13.4C8.9 13.6 9.2 13.8 9.5 13.9L10 16H14L14.5 13.9C14.8 13.8 15.1 13.6 15.3 13.4L17 14L19 12L18.4 10.3C18.6 10.1 18.8 9.8 19 9.5L21 9Z"/>
            </svg>
          </div>
          <div className="absolute top-80 right-1/3 w-10 h-10 text-blue-500/15 animate-spin-slow" style={{animationDelay: '1.5s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L19 6.5C18.8 6.2 18.6 5.9 18.4 5.7L19 4L17 2L15.3 2.6C15.1 2.4 14.8 2.2 14.5 2.1L14 0H10L9.5 2.1C9.2 2.2 8.9 2.4 8.7 2.6L7 2L5 4L5.6 5.7C5.4 5.9 5.2 6.2 5 6.5L3 7V9L5 9.5C5.2 9.8 5.4 10.1 5.6 10.3L5 12L7 14L8.7 13.4C8.9 13.6 9.2 13.8 9.5 13.9L10 16H14L14.5 13.9C14.8 13.8 15.1 13.6 15.3 13.4L17 14L19 12L18.4 10.3C18.6 10.1 18.8 9.8 19 9.5L21 9Z"/>
            </svg>
          </div>
          
          {/* Network nodes */}
          <div className="absolute bottom-40 left-1/3 w-8 h-8 text-purple-400/20 animate-pulse">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L19 6.5C18.8 6.2 18.6 5.9 18.4 5.7L19 4L17 2L15.3 2.6C15.1 2.4 14.8 2.2 14.5 2.1L14 0H10L9.5 2.1C9.2 2.2 8.9 2.4 8.7 2.6L7 2L5 4L5.6 5.7C5.4 5.9 5.2 6.2 5 6.5L3 7V9L5 9.5C5.2 9.8 5.4 10.1 5.6 10.3L5 12L7 14L8.7 13.4C8.9 13.6 9.2 13.8 9.5 13.9L10 16H14L14.5 13.9C14.8 13.8 15.1 13.6 15.3 13.4L17 14L19 12L18.4 10.3C18.6 10.1 18.8 9.8 19 9.5L21 9Z"/>
            </svg>
          </div>
          <div className="absolute bottom-60 right-1/4 w-6 h-6 text-blue-400/15 animate-pulse" style={{animationDelay: '0.5s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L19 6.5C18.8 6.2 18.6 5.9 18.4 5.7L19 4L17 2L15.3 2.6C15.1 2.4 14.8 2.2 14.5 2.1L14 0H10L9.5 2.1C9.2 2.2 8.9 2.4 8.7 2.6L7 2L5 4L5.6 5.7C5.4 5.9 5.2 6.2 5 6.5L3 7V9L5 9.5C5.2 9.8 5.4 10.1 5.6 10.3L5 12L7 14L8.7 13.4C8.9 13.6 9.2 13.8 9.5 13.9L10 16H14L14.5 13.9C14.8 13.8 15.1 13.6 15.3 13.4L17 14L19 12L18.4 10.3C18.6 10.1 18.8 9.8 19 9.5L21 9Z"/>
            </svg>
          </div>
          
          {/* Corporate charts */}
          <div className="absolute top-1/3 left-1/6 w-8 h-8 text-purple-300/40 animate-bounce">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3V21H21M7 17L11 13L15 15L21 9"/>
            </svg>
          </div>
          <div className="absolute top-2/3 right-1/6 w-6 h-6 text-blue-300/35 animate-bounce" style={{animationDelay: '1s'}}>
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3V21H21M7 17L11 13L15 15L21 9"/>
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-800/20 to-blue-800/20 dark:from-gray-700/30 dark:to-blue-700/30 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 backdrop-blur-sm border border-gray-700/20 dark:border-blue-700/30 animate-pulse">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-blue-400 text-xs sm:text-sm font-bold tracking-wider">ENTERPRISE PACKAGE</span>
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-blue-400" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-blue-700 to-purple-600 dark:from-white dark:via-blue-300 dark:to-purple-400 mb-4 sm:mb-6 leading-tight">
              I&apos;m An <span className="text-blue-600 dark:text-blue-300">Enterprise.</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Scaling without the right infrastructure and expertise can lead to costly bottlenecks
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
              We help enterprises build robust, scalable solutions with enterprise-grade security, 
              compliance, and performance that drives business transformation.
            </p>
            
            <div className="mt-8 inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-full px-6 py-3">
              <Building2 className="w-5 h-5 text-gray-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-blue-400 font-medium">Enterprise-grade solutions for complex challenges</span>
            </div>
          </div>

          {/* Form Section */}
          <div className="max-w-4xl mx-auto" ref={formRef}>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-white/50 dark:border-gray-700/50 relative overflow-hidden">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                Enterprise Solutions Inquiry
              </h3>
              
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                Fill out this form and we&apos;ll contact you within 1-2 hours to discuss your enterprise needs
              </p>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6 sm:space-y-8">
                {/* Name Field */}
                <div className="group">
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">
                    <User className="w-4 h-4 text-gray-600 dark:text-blue-400" />
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-gray-500/20 focus:border-gray-500 dark:focus:border-blue-400 bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div className="group">
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">
                    <Mail className="w-4 h-4 text-gray-600 dark:text-blue-400" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-gray-500/20 focus:border-gray-500 dark:focus:border-blue-400 bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-all duration-300"
                    placeholder="Your email"
                  />
                </div>

                {/* Company Field */}
                <div className="group">
                  <label htmlFor="company" className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">
                    <Building2 className="w-4 h-4 text-gray-600 dark:text-blue-400" />
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-gray-500/20 focus:border-gray-500 dark:focus:border-blue-400 bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>

                {/* Project Field */}
                <div className="group">
                  <label htmlFor="project" className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">
                    <Brain className="w-4 h-4 text-gray-600 dark:text-blue-400" />
                    Tell us about your enterprise project
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-gray-500/20 focus:border-gray-500 dark:focus:border-blue-400 bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-all duration-300 resize-none"
                    placeholder="Describe your enterprise project and technical requirements"
                  />
                </div>

                {/* Outcome Field */}
                <div className="group">
                  <label htmlFor="outcome" className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">
                    <Target className="w-4 h-4 text-gray-600 dark:text-blue-400" />
                    What business outcomes are you looking to achieve?
                  </label>
                  <textarea
                    id="outcome"
                    name="outcome"
                    value={formData.outcome}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-gray-500/20 focus:border-gray-500 dark:focus:border-blue-400 bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-all duration-300 resize-none"
                    placeholder="Tell us about your business goals and success metrics"
                  />
                </div>

                {/* Budget Field */}
                <div className="group">
                  <label htmlFor="budget" className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">
                    <CreditCard className="w-4 h-4 text-gray-600 dark:text-blue-400" />
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-gray-500/20 focus:border-gray-500 dark:focus:border-blue-400 bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white transition-all duration-300"
                  >
                    <option value="Enterprise Package">Enterprise Package</option>
                    <option value="$50000-$100000">$50000-$100000</option>
                    <option value="$100000-$250000">$100000-$250000</option>
                    <option value="$250000-$500000">$250000-$500000</option>
                    <option value="$500000+">$500000+</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.type === 'sending'}
                  className="group relative inline-flex items-center justify-center w-full gap-2 sm:gap-3 px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-gray-800 to-blue-700 text-white font-bold rounded-xl sm:rounded-2xl transition-all duration-300 hover:from-gray-900 hover:to-blue-800 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transform text-sm sm:text-base"
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
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-blue-700 to-purple-600 dark:from-white dark:via-blue-300 dark:to-purple-400 mb-12">
              Enterprise Package Includes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Enterprise Architecture */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-white/50 dark:border-gray-700/50 relative overflow-hidden group hover:shadow-2xl hover:shadow-gray-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-gray-500/10 dark:bg-gray-500/20 rounded-full">
                    <Building2 className="w-8 h-8 text-gray-600 dark:text-blue-400" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                  Enterprise Architecture
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Scalable, secure, and compliant enterprise-grade solutions
                </p>
              </div>

              {/* Strategic Consulting */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-white/50 dark:border-gray-700/50 relative overflow-hidden group hover:shadow-2xl hover:shadow-gray-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-gray-500/10 dark:bg-gray-500/20 rounded-full">
                    <Brain className="w-8 h-8 text-gray-600 dark:text-blue-400" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                  Strategic Consulting
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Expert guidance on technology strategy and digital transformation
                </p>
              </div>

              {/* 24/7 Support */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-white/50 dark:border-gray-700/50 relative overflow-hidden group hover:shadow-2xl hover:shadow-gray-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-gray-500/10 dark:bg-gray-500/20 rounded-full">
                    <Clock className="w-8 h-8 text-gray-600 dark:text-blue-400" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                  24/7 Support
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Round-the-clock enterprise support and maintenance
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 sm:mt-20 text-center">
            <button
              onClick={scrollToForm}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-800 to-blue-700 text-white font-bold rounded-xl transition-all duration-300 hover:from-gray-900 hover:to-blue-800 hover:scale-105 hover:shadow-xl"
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