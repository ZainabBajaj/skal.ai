"use client";

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Mail, User, MessageCircle, Sparkles } from 'lucide-react';

type FormStatus = {
  type: 'idle' | 'sending' | 'success' | 'error';
  message?: string;
};

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormProps = {
  initialSubject?: string;
  initialMessage?: string;
};

export default function ContactForm({ initialSubject = '', initialMessage = '' }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: initialSubject,
    message: initialMessage
  });

  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

  // Update form data when initialSubject or initialMessage changes
  useEffect(() => {
    // Only update if initialSubject or initialMessage is not empty
    const updates: Partial<FormData> = {};
    
    if (initialSubject) {
      updates.subject = initialSubject;
    }
    
    if (initialMessage) {
      updates.message = initialMessage;
    }
    
    if (Object.keys(updates).length > 0) {
      setFormData(prev => ({
        ...prev,
        ...updates
      }));
    }
  }, [initialSubject, initialMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          subject: formData.subject,
          message: formData.message
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ 
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
      console.error('Error sending email:', error);
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated background gradients */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#009bd7]/8 to-[#00E1FF]/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#00E1FF]/6 to-purple-300/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-300/4 to-pink-300/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-[#009bd7]/20">
              <Sparkles className="w-4 h-4 text-[#009bd7] animate-pulse" />
              <span className="text-[#009bd7] text-sm font-bold tracking-wider">LET&apos;S CONNECT</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#009bd7] to-[#00E1FF] mb-6 leading-tight">
              Start Your AI Journey
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Ready to transform your business with cutting-edge AI solutions? Let&apos;s discuss your project and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF] font-bold">
                bring your vision to life
              </span>
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50 relative overflow-hidden">
            {/* Form Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#009bd7]/5 via-transparent to-[#00E1FF]/5 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#00E1FF]/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#009bd7]/10 to-transparent rounded-full blur-3xl"></div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name Field */}
                <div className="group">
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
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
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#009bd7]/20 focus:border-[#009bd7] bg-white/90 text-gray-800 placeholder-gray-400 transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm"
                      placeholder="Enter your full name"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#009bd7]/0 to-[#00E1FF]/0 group-focus-within:from-[#009bd7]/5 group-focus-within:to-[#00E1FF]/5 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
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
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#009bd7]/20 focus:border-[#009bd7] bg-white/90 text-gray-800 placeholder-gray-400 transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm"
                      placeholder="your.email@company.com"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#009bd7]/0 to-[#00E1FF]/0 group-focus-within:from-[#009bd7]/5 group-focus-within:to-[#00E1FF]/5 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              {/* Subject Field */}
              <div className="group">
                <label htmlFor="subject" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                  <MessageCircle className="w-4 h-4 text-[#009bd7]" />
                  Project Subject
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#009bd7]/20 focus:border-[#009bd7] bg-white/90 text-gray-800 placeholder-gray-400 transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm"
                    placeholder="AI Implementation, Web Development, Mobile App..."
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#009bd7]/0 to-[#00E1FF]/0 group-focus-within:from-[#009bd7]/5 group-focus-within:to-[#00E1FF]/5 transition-all duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Message Field */}
              <div className="group">
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
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
                    rows={6}
                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#009bd7]/20 focus:border-[#009bd7] bg-white/90 text-gray-800 placeholder-gray-400 transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm resize-none"
                    placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#009bd7]/0 to-[#00E1FF]/0 group-focus-within:from-[#009bd7]/5 group-focus-within:to-[#00E1FF]/5 transition-all duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Submit Section */}
              <div className="flex flex-col items-center gap-6 pt-4">
                <button
                  type="submit"
                  disabled={status.type === 'sending'}
                  className={`group relative inline-flex items-center gap-3 px-12 py-4 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-bold rounded-2xl transition-all duration-300 hover:from-[#008bc1] hover:to-[#00c7e3] hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transform`}
                >
                  <span className="relative z-10">
                    {status.type === 'sending' ? 'Sending Message...' : 'Send Message'}
                  </span>
                  <Send className={`w-5 h-5 relative z-10 transition-transform duration-300 ${status.type === 'sending' ? 'animate-pulse' : 'group-hover:translate-x-1'}`} />
                  
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </button>
                
                {/* Status Messages */}
                {status.type === 'success' && (
                  <div className="flex items-center gap-2 px-6 py-3 bg-green-50 border border-green-200 rounded-xl">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-green-700 font-medium">{status.message}</p>
                  </div>
                )}
                
                {status.type === 'error' && (
                  <div className="flex items-center gap-2 px-6 py-3 bg-red-50 border border-red-200 rounded-xl">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <p className="text-red-700 font-medium">{status.message}</p>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Prefer to reach out directly? We&apos;d love to hear from you!
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="mailto:hello@skal.ai" className="flex items-center gap-2 text-[#009bd7] hover:text-[#00E1FF] transition-colors font-medium">
                <Mail className="w-4 h-4" />
                hello@skal.ai
              </a>
              <span className="text-gray-300">|</span>
              <span className="text-gray-600">
                Response within 24 hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 