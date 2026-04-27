"use client";

import { useState, useEffect } from 'react';
import { Send, Mail, User, MessageCircle, Sparkles, Globe, ArrowRight } from 'lucide-react';

type FormStatus = {
  type: 'idle' | 'sending' | 'success' | 'error';
  message?: string;
};

type FormData = {
  name: string;
  email: string;
  website: string;
  message: string;
};

type ContactFormProps = {
  initialMessage?: string;
};

export default function ContactForm({ initialMessage = '' }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    website: '',
    message: initialMessage
  });

  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

  useEffect(() => {
    if (initialMessage) {
      setFormData(prev => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

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

      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'contact_form',
          name: formData.name,
          email: formData.email,
          website: formData.website,
          message: formData.message,
        }),
      });

      if (!res.ok) throw new Error('Submission failed');

      setStatus({ type: 'success', message: "Thanks for reaching out. Your message is on its way to our team, and we'll be in touch shortly." });
      setFormData({ name: '', email: '', website: '', message: '' });
    } catch {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      });
    }
  };

  return (
    <section id="contact" className="relative py-12 sm:py-14 lg:py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/20 dark:to-[#00E1FF]/20 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 backdrop-blur-sm border border-[#009bd7]/20 dark:border-[#00E1FF]/30">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#009bd7] dark:text-[#00E1FF]" />
              <span className="text-[#009bd7] dark:text-[#00E1FF] text-xs sm:text-sm font-bold tracking-wider">LET&apos;S CONNECT</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] dark:text-white mb-4 sm:mb-6 leading-snug pb-1">
              Talk to us
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium px-4 mb-6">
              Tell us what you need. We will tell you what it takes to{' '}
              <span className="text-[#009bd7] dark:text-[#00E1FF] font-bold">
                ship it
              </span>
              .
            </p>

            <a
              href="https://calendly.com/skal-ai/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#009bd7]/25 hover:scale-105"
            >
              Schedule a discovery call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
              Prefer to write? Send us a note below.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-white/50 dark:border-gray-700/50 relative overflow-hidden">
            {/* Form Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#009bd7]/5 via-transparent to-[#00E1FF]/5 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-bl from-[#00E1FF]/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-tr from-[#009bd7]/10 to-transparent rounded-full blur-3xl"></div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* Name Field */}
                <div className="group">
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">
                    <User className="w-4 h-4 text-[#009bd7]" />
                    Full Name
                  </label>
                  <div className="relative">
                                      <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#009bd7]/30 focus:border-[#009bd7] dark:focus:border-[#00E1FF] bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#009bd7]/0 to-[#00E1FF]/0 group-focus-within:from-[#009bd7]/5 group-focus-within:to-[#00E1FF]/5 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">
                    <Mail className="w-4 h-4 text-[#009bd7]" />
                    Email Address
                  </label>
                  <div className="relative">
                                      <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#009bd7]/30 focus:border-[#009bd7] dark:focus:border-[#00E1FF] bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm text-sm sm:text-base"
                    placeholder="your.email@company.com"
                  />
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#009bd7]/0 to-[#00E1FF]/0 group-focus-within:from-[#009bd7]/5 group-focus-within:to-[#00E1FF]/5 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              {/* Website Field */}
              <div className="group">
                <label htmlFor="website" className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">
                  <Globe className="w-4 h-4 text-[#009bd7]" />
                  Business Website
                </label>
                <div className="relative">
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#009bd7]/30 focus:border-[#009bd7] dark:focus:border-[#00E1FF] bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm text-sm sm:text-base"
                    placeholder="https://yourcompany.com"
                  />
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#009bd7]/0 to-[#00E1FF]/0 group-focus-within:from-[#009bd7]/5 group-focus-within:to-[#00E1FF]/5 transition-all duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Message Field */}
              <div className="group">
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">
                  <MessageCircle className="w-4 h-4 text-[#009bd7]" />
                  Project Details
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#009bd7]/30 focus:border-[#009bd7] dark:focus:border-[#00E1FF] bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm resize-none text-sm sm:text-base"
                    placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                  />
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#009bd7]/0 to-[#00E1FF]/0 group-focus-within:from-[#009bd7]/5 group-focus-within:to-[#00E1FF]/5 transition-all duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Submit Section */}
              <div className="flex flex-col items-center gap-4 sm:gap-6 pt-4">
                <button
                  type="submit"
                  disabled={status.type === 'sending'}
                  className={`group relative inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-bold rounded-xl sm:rounded-2xl transition-all duration-300 hover:from-[#008bc1] hover:to-[#00c7e3] hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transform text-sm sm:text-base w-full sm:w-auto justify-center`}
                >
                  <span className="relative z-10">
                    {status.type === 'sending' ? 'Sending Message...' : 'Send Message'}
                  </span>
                  <Send className={`w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform duration-300 ${status.type === 'sending' ? 'animate-pulse' : 'group-hover:translate-x-1'}`} />
                  
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </button>
                
                {/* Status Messages */}
                {status.type === 'success' && (
                  <div className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl w-full sm:w-auto">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-green-700 dark:text-green-400 font-medium text-sm sm:text-base">{status.message}</p>
                  </div>
                )}
                
                {status.type === 'error' && (
                  <div className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl w-full sm:w-auto">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <p className="text-red-700 dark:text-red-400 font-medium text-sm sm:text-base">{status.message}</p>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
              Prefer to reach out directly? We&apos;d love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-sm">
              <a href="mailto:hi@skal.ai" className="flex items-center justify-center gap-2 text-[#009bd7] dark:text-[#00E1FF] hover:text-[#00E1FF] dark:hover:text-[#009bd7] transition-colors font-medium">
                <Mail className="w-4 h-4" />
                hi@skal.ai
              </a>
              <span className="hidden sm:inline text-gray-300 dark:text-gray-500">|</span>
              <span className="text-gray-600 dark:text-gray-300">
                Response within 24 hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 