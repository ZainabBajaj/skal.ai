import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export type FormStatus = {
  type: 'idle' | 'sending' | 'success' | 'error';
  message?: string;
};

export function useEmailForm<T extends Record<string, string>>(initialData: T) {
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
    templateParams: Record<string, string>
  ) => {
    e.preventDefault();

    try {
      setStatus({ type: 'sending' });

      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
          !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_STARTUP ||
          !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        throw new Error('EmailJS environment variables are not set');
      }

      const sanitized = Object.fromEntries(
        Object.entries(templateParams).map(([k, v]) => [k, v.replace(/[<>]/g, '').trim()])
      );

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_STARTUP,
        sanitized,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus({ type: 'success', message: "Request submitted successfully! We'll contact you within 1-2 hours." });
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
