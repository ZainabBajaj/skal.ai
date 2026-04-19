"use client";

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ArrowRight, Telescope, RotateCcw } from 'lucide-react';

type Message = { role: 'bot' | 'user'; text: string };
type Step = 'intro' | 'category' | 'detail' | 'timing' | 'contact' | 'summary';
type Contact = { name: string; email: string; phone: string };

type Option = { label: string; value: string; next?: Step };

const CALENDLY = 'https://calendly.com/skal-ai/discovery-call';

const introMessage =
  "Hey, I'm Scout, SKAL's assistant. I can point you to the right team in about 30 seconds. What brings you here?";

const categoryOptions: Option[] = [
  { label: 'Build AI systems', value: 'systems' },
  { label: 'Scale outbound sales', value: 'scale' },
  { label: 'Hire engineers', value: 'staffing' },
  { label: 'Something else', value: 'other' },
];

const detailByCategory: Record<string, { prompt: string; options: Option[]; freeText?: boolean }> = {
  systems: {
    prompt: "Nice. Where are you in the build?",
    options: [
      { label: 'Just exploring', value: 'explore' },
      { label: 'Have a clear spec', value: 'spec' },
      { label: 'Mid-build and stuck', value: 'stuck' },
    ],
  },
  scale: {
    prompt: "Got it. What's the biggest bottleneck?",
    options: [
      { label: 'Finding prospects', value: 'prospects' },
      { label: 'Outreach / engagement', value: 'outreach' },
      { label: 'Pipeline management', value: 'pipeline' },
      { label: 'All of it', value: 'everything' },
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
          ? "Thanks! We'll be in touch shortly. To move faster, grab a 20 minute discovery slot below."
          : timing === 'soon'
          ? "Thanks! We'll reach out soon. You can also book a 20 minute discovery call below."
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
          className="fixed bottom-24 right-6 z-50 group w-14 h-14 rounded-full bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white shadow-xl shadow-[#009bd7]/30 hover:shadow-2xl hover:shadow-[#009bd7]/40 hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#00E1FF] opacity-75 animate-ping"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#00E1FF]"></span>
          </span>
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-sm sm:max-w-md h-[min(600px,75vh)] flex flex-col rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50 dark:border-gray-700/50 bg-white dark:bg-gray-900 backdrop-blur-xl">
          {/* Header */}
          <div className="relative flex items-center justify-between px-5 py-4 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-white/25 backdrop-blur-sm ring-2 ring-white/40 flex items-center justify-center shadow-lg">
                <Telescope className="w-5 h-5" strokeWidth={2.25} />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 ring-2 ring-white" />
              </div>
              <div>
                <div className="font-bold text-sm tracking-wide">Scout</div>
                <div className="text-[11px] opacity-90 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300"></span>
                  Usually replies instantly
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
          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-3 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white rounded-br-sm'
                      : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-bl-sm shadow-sm border border-gray-100 dark:border-gray-600'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Actions */}
          <div className="px-5 py-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
            {step === 'summary' ? (
              <div className="space-y-2">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between w-full px-4 py-3 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#009bd7]/25 transition-all"
                >
                  <span>Book a discovery call</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <button
                  onClick={scrollToContact}
                  className="flex items-center justify-between w-full px-4 py-3 border-2 border-[#009bd7] dark:border-[#00E1FF] text-[#009bd7] dark:text-[#00E1FF] font-semibold rounded-xl hover:bg-[#009bd7]/5 transition-colors"
                >
                  <span>Send details via form</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={reset}
                  className="w-full text-xs text-gray-500 dark:text-gray-400 hover:text-[#009bd7] py-1 transition-colors"
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
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#009bd7]/30 focus:border-[#009bd7]"
                />
                <input
                  type="email"
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  placeholder="Email address"
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#009bd7]/30 focus:border-[#009bd7]"
                />
                <input
                  type="tel"
                  value={contact.phone}
                  onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                  placeholder="Phone number (optional)"
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#009bd7]/30 focus:border-[#009bd7]"
                />
                <button
                  type="submit"
                  disabled={!contactValid}
                  className="flex items-center justify-between w-full px-4 py-3 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#009bd7]/25 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
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
                  className="flex-1 px-4 py-2.5 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#009bd7]/30 focus:border-[#009bd7]"
                />
                <button
                  type="submit"
                  disabled={!freeInput.trim()}
                  aria-label="Send"
                  className="w-10 h-10 flex-shrink-0 rounded-xl bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg transition-all"
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
                    className="px-3.5 py-2 text-xs sm:text-sm font-semibold text-[#009bd7] dark:text-[#00E1FF] bg-[#009bd7]/8 dark:bg-[#00E1FF]/10 hover:bg-[#009bd7]/15 dark:hover:bg-[#00E1FF]/20 border border-[#009bd7]/20 dark:border-[#00E1FF]/30 rounded-full transition-all hover:scale-[1.02]"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
            <div className="mt-3 text-[10px] text-center text-gray-400 dark:text-gray-500">
              Not a live chat. This is a guided qualifier.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
