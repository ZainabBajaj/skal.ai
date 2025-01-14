"use client";

import { useState } from 'react';
import emailjs from '@emailjs/browser';

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

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

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
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
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
    <section id="contact" className="bg-[#f8faff] py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Get In Touch</h2>
            <p className="text-gray-600">Let&aposs discuss your project and explore how we can help.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#009bd7]/20 rounded-lg focus:ring-2 focus:ring-[#009bd7]/10 focus:border-[#009bd7] bg-white text-gray-800 placeholder-gray-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#009bd7]/20 rounded-lg focus:ring-2 focus:ring-[#009bd7]/10 focus:border-[#009bd7] bg-white text-gray-800 placeholder-gray-400"
                placeholder="Your email"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#009bd7]/20 rounded-lg focus:ring-2 focus:ring-[#009bd7]/10 focus:border-[#009bd7] bg-white text-gray-800 placeholder-gray-400"
                placeholder="Subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-[#009bd7]/20 rounded-lg focus:ring-2 focus:ring-[#009bd7]/10 focus:border-[#009bd7] bg-white text-gray-800 placeholder-gray-400"
                placeholder="Your message"
              />
            </div>

            <div className="flex flex-col items-center gap-4">
              <button
                type="submit"
                disabled={status.type === 'sending'}
                className={`w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-semibold rounded-lg transition-all duration-200 hover:from-[#008bc1] hover:to-[#00c7e3] disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {status.type === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              
              {status.type === 'success' && (
                <p className="text-green-600">{status.message}</p>
              )}
              
              {status.type === 'error' && (
                <p className="text-red-600">{status.message}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
} 