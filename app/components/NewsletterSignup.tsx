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
          className="flex-1 bg-transparent border-b border-rule py-3 text-[0.9375rem] text-ink placeholder:text-ink-3/70 focus:outline-none focus:border-ink transition-colors disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={isSending || isSuccess}
          className="btn btn-solid group disabled:opacity-60"
        >
          <span>{isSending ? 'Subscribing…' : isSuccess ? 'Subscribed' : 'Subscribe'}</span>
          {!isSuccess && <ArrowRight className={`w-4 h-4 ${isSending ? 'animate-pulse' : 'group-hover:translate-x-0.5'} transition-transform`} />}
          {isSuccess && <CheckCircle className="w-4 h-4" />}
        </button>
      </form>

      {status.type === 'success' && (
        <p className="mt-4 text-sm text-ink-2 text-center">
          You are on the list. New stories land in your inbox.
        </p>
      )}

      {status.type === 'error' && (
        <p className="mt-4 text-sm text-red-600 dark:text-red-400 text-center">
          Could not subscribe right now. Try again in a moment.
        </p>
      )}

      <p className="mt-3 text-xs text-ink-3 text-center">
        No spam. Unsubscribe any time.
      </p>
    </div>
  );
}
