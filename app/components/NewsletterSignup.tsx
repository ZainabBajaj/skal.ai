"use client";

import { ArrowRight, CheckCircle } from 'lucide-react';
import { useLeadForm } from '../hooks/useLeadForm';

export default function NewsletterSignup() {
  const { formData, status, handleChange, handleSubmit } = useLeadForm({ email: '' });
  const isSending = status.type === 'sending';
  const isSuccess = status.type === 'success';

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={(e) =>
          handleSubmit(e, {
            source: 'newsletter_stories',
            reply_to: formData.email,
          })
        }
        className="flex flex-col sm:flex-row gap-3"
      >
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isSending || isSuccess}
          placeholder="your@email.com"
          aria-label="Email address"
          className="flex-1 px-5 py-4 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-[#009bd7]/30 focus:border-[#009bd7] dark:focus:border-[#00E1FF] focus:outline-none bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white placeholder-gray-400 transition-all duration-300 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={isSending || isSuccess}
          className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#009bd7]/25 hover:scale-105 disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed"
        >
          <span>{isSending ? 'Subscribing…' : isSuccess ? 'Subscribed' : 'Subscribe'}</span>
          {!isSuccess && <ArrowRight className={`w-5 h-5 ${isSending ? 'animate-pulse' : 'group-hover:translate-x-1'} transition-transform`} />}
          {isSuccess && <CheckCircle className="w-5 h-5" />}
        </button>
      </form>

      {status.type === 'success' && (
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 text-center">
          You are on the list. New stories land in your inbox.
        </p>
      )}

      {status.type === 'error' && (
        <p className="mt-4 text-sm text-red-600 dark:text-red-400 text-center">
          Could not subscribe right now. Try again in a moment.
        </p>
      )}

      <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 text-center">
        No spam. Unsubscribe any time.
      </p>
    </div>
  );
}
