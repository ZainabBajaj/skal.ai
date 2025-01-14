"use client";

import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  submitted: boolean;
  submitting: boolean;
  info: {
    error: boolean;
    msg: string | null;
  };
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // EmailJS service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // EmailJS template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // EmailJS public key
      );

      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Message sent successfully!' }
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'An error occurred. Please try again later.' }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
      <div className="relative">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="w-full px-6 py-4 bg-white border border-[#009bd7]/20 rounded-lg focus:outline-none focus:border-[#009bd7] focus:ring-2 focus:ring-[#009bd7]/10 text-gray-800 transition-colors placeholder-gray-400"
        />
      </div>

      <div className="relative">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full px-6 py-4 bg-white border border-[#009bd7]/20 rounded-lg focus:outline-none focus:border-[#009bd7] focus:ring-2 focus:ring-[#009bd7]/10 text-gray-800 transition-colors placeholder-gray-400"
        />
      </div>

      <div className="relative md:col-span-2">
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
          className="w-full px-6 py-4 bg-white border border-[#009bd7]/20 rounded-lg focus:outline-none focus:border-[#009bd7] focus:ring-2 focus:ring-[#009bd7]/10 text-gray-800 transition-colors placeholder-gray-400"
        />
      </div>

      <div className="relative md:col-span-2">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
          rows={6}
          className="w-full px-6 py-4 bg-white border border-[#009bd7]/20 rounded-lg focus:outline-none focus:border-[#009bd7] focus:ring-2 focus:ring-[#009bd7]/10 text-gray-800 transition-colors placeholder-gray-400 resize-none"
        ></textarea>
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status.submitting}
          className="w-full py-4 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
          <span className="relative inline-flex items-center justify-center">
            {status.submitting ? 'Sending...' : 'Send Message'}
            {!status.submitting && (
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            )}
          </span>
        </button>
      </div>

      {status.info.msg && (
        <div className={`md:col-span-2 p-4 rounded-lg ${
          status.info.error ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'
        }`}>
          {status.info.msg}
        </div>
      )}
    </form>
  );
} 