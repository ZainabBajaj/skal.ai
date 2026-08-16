"use client";

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import CalendlyPopupButton from './CalendlyPopupButton';

const CALENDLY_URL = 'https://calendly.com/skal-ai/discovery-call';

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

const fieldClass =
  'w-full bg-transparent border-b border-rule py-3 text-[0.9375rem] text-ink placeholder:text-ink-3/70 ' +
  'focus:outline-none focus:border-ink transition-colors';

export default function ContactForm({ initialMessage = '' }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    website: '',
    message: initialMessage,
  });

  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

      setStatus({
        type: 'success',
        message: 'Message sent. We reply within one working day.',
      });
      setFormData({ name: '', email: '', website: '', message: '' });
    } catch {
      setStatus({
        type: 'error',
        message: 'That did not send. Try again, or email hi@skal.ai directly.',
      });
    }
  };

  return (
    <section id="contact" className="band bg-surface">
      <div className="shell">
        <div className="spec">
          <span className="t-label t-label--ink">Talk to us</span>
          <span className="t-label">Two ways in</span>
        </div>

        <h2 className="font-display t-h2 text-ink mt-8 max-w-[18ch]">
          Tell us what you need. We will tell you what it takes to ship it.
        </h2>

        <div className="mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-y-14 lg:gap-x-16 border-t border-rule pt-12">
          {/* The fast path. */}
          <div className="lg:col-span-5">
            <span className="t-label">Fastest way in</span>
            <h3 className="font-display t-h3 text-ink mt-4 max-w-[18ch]">
              Book a 30-minute discovery call.
            </h3>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-2 max-w-[42ch]">
              A real conversation, not a pitch. We listen, name the bottleneck,
              and tell you which of Scale, Systems, Services, or Staffing fits.
              Useful either way.
            </p>

            <dl className="mt-8 border-t border-rule-faint">
              {[
                ['Length', '30 minutes'],
                ['Format', 'No sales pressure'],
                ['Booking', 'Takes 30 seconds'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-3 border-b border-rule-faint">
                  <dt className="t-label">{k}</dt>
                  <dd className="t-label t-label--ink">{v}</dd>
                </div>
              ))}
            </dl>

            <CalendlyPopupButton
              url={CALENDLY_URL}
              utmSource="contact_form"
              ariaLabel="Schedule a 30-minute discovery call"
              className="btn btn-solid group mt-8"
            >
              Schedule a discovery call
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
            </CalendlyPopupButton>
          </div>

          {/* The written path. */}
          <div className="lg:col-span-7 lg:border-l lg:border-rule lg:pl-16">
            <span className="t-label">Or send a note</span>
            <h3 className="font-display t-h3 text-ink mt-4 max-w-[22ch]">
              Not ready to book yet?
            </h3>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-2 max-w-[46ch]">
              Press, partnerships, careers, or a quick question. We reply within
              one working day.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="t-label block mb-1">Full name</label>
                  <input
                    type="text" id="name" name="name" required
                    value={formData.name} onChange={handleChange}
                    className={fieldClass} placeholder="Jordan Reyes"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="t-label block mb-1">Email</label>
                  <input
                    type="email" id="email" name="email" required
                    value={formData.email} onChange={handleChange}
                    className={fieldClass} placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="website" className="t-label block mb-1">Business website</label>
                <input
                  type="url" id="website" name="website" required
                  value={formData.website} onChange={handleChange}
                  className={fieldClass} placeholder="https://yourcompany.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="t-label block mb-1">What you need</label>
                <textarea
                  id="message" name="message" required rows={4}
                  value={formData.message} onChange={handleChange}
                  className={`${fieldClass} resize-none`}
                  placeholder="The bottleneck, roughly when you need it solved, and anything already in place."
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <button type="submit" disabled={status.type === 'sending'} className="btn btn-solid group disabled:opacity-50">
                  {status.type === 'sending' ? 'Sending' : 'Send message'}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
                </button>

                {/* Errors say what happened and what to do next. */}
                {status.type !== 'idle' && status.type !== 'sending' && (
                  <p
                    role="status"
                    className={`text-sm ${status.type === 'success' ? 'text-signal' : 'text-ink'}`}
                  >
                    {status.message}
                  </p>
                )}
              </div>
            </form>

            <p className="mt-10 pt-6 border-t border-rule-faint text-sm text-ink-2">
              Or email us directly at{' '}
              <a href="mailto:hi@skal.ai" className="link-quiet">hi@skal.ai</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
