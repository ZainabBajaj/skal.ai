import { useState, useRef } from 'react';

export type FormStatus = {
  type: 'idle' | 'sending' | 'success' | 'error';
  message?: string;
};

type LeadParams = {
  source: string;
  from_name?: string;
  reply_to?: string;
  website?: string;
  idea?: string;
  outcome?: string;
  budget?: string;
  phone?: string;
};

export function useLeadForm<T extends Record<string, string>>(initialData: T) {
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<T>(initialData);
  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    params: LeadParams
  ) => {
    e.preventDefault();

    try {
      setStatus({ type: 'sending' });

      const messageParts = [
        params.idea && `Idea: ${params.idea}`,
        params.outcome && `Outcome: ${params.outcome}`,
      ].filter(Boolean);

      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: params.source,
          name: params.from_name,
          email: params.reply_to,
          website: params.website,
          budget: params.budget,
          phone: params.phone,
          message: messageParts.join('\n\n') || undefined,
        }),
      });

      if (!res.ok) throw new Error('Submission failed');

      setStatus({ type: 'success', message: "Thanks for reaching out. Your request is with our team, and we'll be in touch shortly." });
      setFormData(initialData);
    } catch {
      setStatus({
        type: 'error',
        message: 'Failed to submit request. Please try again or contact us directly.'
      });
    }
  };

  return { formRef, formData, status, handleChange, scrollToForm, handleSubmit };
}
