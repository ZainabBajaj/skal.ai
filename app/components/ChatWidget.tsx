"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, X, Send, ArrowRight, Telescope, RotateCcw } from 'lucide-react';
import { useCookieConsent } from '../context/CookieConsentContext';

type Message = { role: 'bot' | 'user'; text: string };
type Step = 'intro' | 'category' | 'detail' | 'timing' | 'contact' | 'summary';
type Contact = { name: string; email: string; phone: string };

type Option = { label: string; value: string; next?: Step };

const BOOK_URL = '/book';

const introMessage =
  "Hey, I'm Scout. SKAL plugs into your business four ways. Tell me where you're stuck and I'll point you to the right one in about 30 seconds.";

const categoryOptions: Option[] = [
  { label: 'Need leads', value: 'scale' },
  { label: 'Need automation', value: 'systems' },
  { label: 'Need something custom', value: 'services' },
  { label: 'Need execution', value: 'staffing' },
  { label: 'Something else', value: 'other' },
];

const detailByCategory: Record<string, { prompt: string; options: Option[]; freeText?: boolean }> = {
  scale: {
    prompt: "Got it. What's the biggest bottleneck?",
    options: [
      { label: 'Finding prospects', value: 'prospects' },
      { label: 'Outreach / engagement', value: 'outreach' },
      { label: 'Pipeline management', value: 'pipeline' },
      { label: 'All of it', value: 'everything' },
    ],
  },
  systems: {
    prompt: "Nice. What do you need an agent to handle?",
    options: [
      { label: 'Customer support', value: 'support' },
      { label: 'Sales / lead qualification', value: 'sales' },
      { label: 'Internal workflows', value: 'workflow' },
      { label: 'Not sure yet', value: 'unsure' },
    ],
  },
  services: {
    prompt: "Got it. What needs building?",
    options: [
      { label: 'Custom AI agent', value: 'agent' },
      { label: 'Agentic workflow', value: 'workflow' },
      { label: 'Software from scratch', value: 'software' },
      { label: 'Not sure yet', value: 'unsure' },
    ],
  },
  staffing: {
    prompt: 'Cool. What are you staffing?',
    options: [
      { label: '1 to 2 specific roles', value: 'roles' },
      { label: 'A full squad', value: 'squad' },
      { label: 'Not sure yet', value: 'unsure' },
    ],
  },
  other: {
    prompt: "Tell me a bit more. What's on your mind?",
    options: [],
    freeText: true,
  },
};

const timingOptions: Option[] = [
  { label: 'This week', value: 'urgent' },
  { label: 'Next 1 to 2 months', value: 'soon' },
  { label: 'Just researching', value: 'research' },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { consent, hydrated } = useCookieConsent();
  const liftForBanner = hydrated && consent === null ? '-translate-y-32 sm:-translate-y-20' : '';
  const [step, setStep] = useState<Step>('intro');
  const [category, setCategory] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([{ role: 'bot', text: introMessage }]);
  const [freeInput, setFreeInput] = useState('');
  const [contact, setContact] = useState<Contact>({ name: '', email: '', phone: '' });
  const [detail, setDetail] = useState<string | null>(null);
  const [timing, setTiming] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email);
  const phoneValid = contact.phone.trim() === '' || contact.phone.replace(/\D/g, '').length >= 7;
  const contactValid = contact.name.trim().length > 0 && emailValid && phoneValid;

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, step]);

  const addBot = (text: string) => setMessages((m) => [...m, { role: 'bot', text }]);
  const addUser = (text: string) => setMessages((m) => [...m, { role: 'user', text }]);

  const handleCategory = (opt: Option) => {
    addUser(opt.label);
    setCategory(opt.value);
    setStep('detail');
    setTimeout(() => addBot(detailByCategory[opt.value].prompt), 250);
  };

  const handleDetail = (opt: Option) => {
    addUser(opt.label);
    setDetail(opt.value);
    setStep('timing');
    setTimeout(() => addBot('Last one. What is the timing?'), 250);
  };

  const handleFreeDetail = () => {
    const text = freeInput.trim();
    if (!text) return;
    addUser(text);
    setDetail(text);
    setFreeInput('');
    setStep('timing');
    setTimeout(() => addBot('Got it. What is the timing?'), 250);
  };

  const handleTiming = (opt: Option) => {
    addUser(opt.label);
    setTiming(opt.value);
    setStep('contact');
    setTimeout(() => {
      addBot("Great. Drop your name and email so the right person can follow up. Phone is optional if you prefer a call.");
    }, 250);
  };

  const handleContactSubmit = () => {
    if (!contactValid) return;
    addUser(contact.phone ? `${contact.name} · ${contact.email} · ${contact.phone}` : `${contact.name} · ${contact.email}`);

    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source: 'chat_widget',
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        category,
        detail,
        timing,
      }),
    }).catch((err) => console.error('[leads] post failed', err));

    setStep('summary');
    setTimeout(() => {
      addBot(
        timing === 'urgent'
          ? "Thanks! We'll be in touch shortly. To move faster, grab a 30 minute discovery slot below."
          : timing === 'soon'
          ? "Thanks! We'll reach out soon. You can also book a 30 minute discovery call below."
          : "Thanks! We've got your details and will follow up. Feel free to book a call whenever you're ready."
      );
    }, 250);
  };

  const reset = () => {
    setStep('intro');
    setCategory(null);
    setFreeInput('');
    setContact({ name: '', email: '', phone: '' });
    setDetail(null);
    setTiming(null);
    setMessages([{ role: 'bot', text: introMessage }]);
  };

  const scrollToContact = () => {
    setIsOpen(false);
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = '/#contact';
    }
  };

  const currentOptions =
    step === 'intro' || step === 'category'
      ? categoryOptions
      : step === 'detail' && category
      ? detailByCategory[category].options
      : step === 'timing'
      ? timingOptions
      : [];

  const onOptionClick =
    step === 'intro' || step === 'category'
      ? handleCategory
      : step === 'detail'
      ? handleDetail
      : step === 'timing'
      ? handleTiming
      : () => {};

  const showFreeText = step === 'detail' && category === 'other';

  return (
    <>
      {/* Floating trigger button (stacked above theme toggle) */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            if (step === 'intro') setStep('category');
          }}
          aria-label="Open chat"
          className={`fixed bottom-24 right-6 z-50 group w-11 h-11 bg-ink text-paper border border-ink hover:bg-signal hover:border-signal transition-colors duration-200 flex items-center justify-center ${liftForBanner}`}
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-75 animate-ping"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal"></span>
          </span>
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div className={`fixed bottom-24 right-6 z-50 w-[92vw] max-w-sm sm:max-w-md h-[min(600px,75vh)] flex flex-col overflow-hidden border border-rule bg-surface transition-transform duration-300 ${liftForBanner}`}>
          {/* Header */}
          <div className="relative flex items-center justify-between px-5 py-4 bg-ink text-paper">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 bg-paper/15 border border-paper/25 flex items-center justify-center">
                <Telescope className="w-5 h-5" strokeWidth={2.25} />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 ring-2 ring-white" />
              </div>
              <div>
                <div className="font-bold text-sm tracking-wide">Scout</div>
                <div className="text-[11px] opacity-90 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300"></span>
                  30 second qualifier
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={reset}
                aria-label="Reset conversation"
                className="p-2 rounded-lg hover:bg-white/20 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="p-2 rounded-lg hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-3 bg-paper">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-ink text-paper rounded-br-sm'
                      : 'bg-surface text-ink rounded-bl-sm border border-rule'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Actions */}
          <div className="px-5 py-4 bg-surface border-t border-rule">
            {step === 'summary' ? (
              <div className="space-y-2">
                <Link
                  href={BOOK_URL}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between w-full px-4 py-3 bg-ink text-paper font-medium hover:bg-signal transition-colors"
                >
                  <span>Book a discovery call</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  onClick={scrollToContact}
                  className="flex items-center justify-between w-full px-4 py-3 border border-rule text-ink font-medium hover:border-ink transition-colors"
                >
                  <span>Send details via form</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={reset}
                  className="w-full text-xs text-ink-3 hover:text-signal py-1 transition-colors"
                >
                  Start over
                </button>
              </div>
            ) : step === 'contact' ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleContactSubmit();
                }}
                className="space-y-2"
              >
                <input
                  type="text"
                  value={contact.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                  placeholder="Your name"
                  autoFocus
                  className="w-full px-4 py-2.5 text-sm border border-rule bg-surface text-ink focus:outline-none focus:border-ink transition-colors"
                />
                <input
                  type="email"
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  placeholder="Email address"
                  className="w-full px-4 py-2.5 text-sm border border-rule bg-surface text-ink focus:outline-none focus:border-ink transition-colors"
                />
                <input
                  type="tel"
                  value={contact.phone}
                  onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                  placeholder="Phone number (optional)"
                  className="w-full px-4 py-2.5 text-sm border border-rule bg-surface text-ink focus:outline-none focus:border-ink transition-colors"
                />
                <button
                  type="submit"
                  disabled={!contactValid}
                  className="flex items-center justify-between w-full px-4 py-3 bg-ink text-paper font-medium hover:bg-signal transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <span>Submit details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : showFreeText ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleFreeDetail();
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={freeInput}
                  onChange={(e) => setFreeInput(e.target.value)}
                  placeholder="Type a short message..."
                  autoFocus
                  className="flex-1 px-4 py-2.5 text-sm border border-rule bg-surface text-ink focus:outline-none focus:border-ink transition-colors"
                />
                <button
                  type="submit"
                  disabled={!freeInput.trim()}
                  aria-label="Send"
                  className="w-10 h-10 flex-shrink-0 bg-ink text-paper flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-signal transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="flex flex-wrap gap-2">
                {currentOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => onOptionClick(opt)}
                    className="px-3.5 py-2 text-xs sm:text-sm font-semibold text-ink border border-rule hover:border-ink transition-colors"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
            <div className="mt-3 text-[10px] text-center text-ink-3">
              Not a live chat. This is a guided qualifier.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
