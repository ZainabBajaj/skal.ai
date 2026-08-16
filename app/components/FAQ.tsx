"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    question: "I'm not sure which of the four I need. Where do I start?",
    answer: "Start with a 30-minute discovery call. We listen, name the bottleneck, and tell you which of Scale, Systems, Services, or Staffing fits. Sometimes more than one. If none of them fit, we tell you that too.",
    category: "Getting started"
  },
  {
    question: "How does pricing work?",
    answer: "It depends on the engagement. Scale is priced per qualified meeting. Systems are flat fees per agent deployed. Services are scoped and quoted up front. Staffing is billed hourly. You get a clear number after the discovery call, no surprise line items.",
    category: "Getting started"
  },
  {
    question: "How long until something is live?",
    answer: "Systems typically deploy in about a week. Services run on the timeline of the build, scoped before we start so there are no moving goalposts. Staffing engineers can start within days once the brief is set. Scale ramps over the first few weeks as we calibrate to your ICP.",
    category: "Getting started"
  },
  {
    question: "Will SKAL work with the tools we already use?",
    answer: "Yes. Systems plug into HubSpot, Salesforce, Zendesk, Intercom, Freshdesk, and most of what you already run. Workflows ride on n8n, Make, and Zapier. Voice and chat are powered by ElevenLabs and Claude. We work inside your stack rather than replacing it.",
    category: "How we work"
  },
  {
    question: "Can SKAL replace, augment, or build my engineering team?",
    answer: "All three, depending on what you need. Staffing slots pre-vetted engineers into your existing team. Services builds for you when you do not have one yet. Either way, the people shipping the code stay accountable to you.",
    category: "How we work"
  },
  {
    question: "What happens after a system goes live?",
    answer: "We do not disappear. Systems come with monitoring, prompt and policy tuning, and updates as your business changes. Services include a clear handoff and an optional retainer if you want us to keep iterating. You set the level of ongoing involvement.",
    category: "How we work"
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(faqData.map(item => item.category)))];

  const filteredFAQs = activeCategory === 'All' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="band bg-surface">
      <div className="shell">
        <div className="spec">
          <span className="t-label t-label--ink">Frequently asked</span>
          <span className="t-label">{filteredFAQs.length} of {faqData.length} questions</span>
        </div>

        <h2 className="font-display t-h2 text-ink mt-8 max-w-[16ch]">
          Everything you need to know.
        </h2>
        <p className="t-lead mt-5 max-w-[48ch]">
          Common questions about how SKAL works. If yours is not here, the
          discovery call covers it.
        </p>

        {/* Category filter reads as a filter, not as a row of buttons. */}
        <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-b border-rule pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`font-mono text-[12px] uppercase tracking-[0.12em] transition-colors ${
                activeCategory === category ? 'text-ink' : 'text-ink-3 hover:text-ink'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <ul className="mt-2">
          {filteredFAQs.map((item, index) => {
            const open = openItems.includes(index);
            return (
              <li key={item.question} className="border-b border-rule">
                <button
                  onClick={() => toggleItem(index)}
                  aria-expanded={open}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full py-6 text-left flex items-start justify-between gap-6 group"
                >
                  <h3 className="font-display text-[1.0625rem] sm:text-[1.15rem] text-ink pr-4 group-hover:text-signal transition-colors">
                    {item.question}
                  </h3>
                  {open
                    ? <ChevronUp className="w-4 h-4 mt-1 shrink-0 text-ink" strokeWidth={1.75} />
                    : <ChevronDown className="w-4 h-4 mt-1 shrink-0 text-ink-3" strokeWidth={1.75} />}
                </button>

                {/* Grid rows rather than a max-height clamp: the old max-h-96
                    silently cut off any answer taller than 24rem. */}
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-7 pr-10 text-[0.9375rem] leading-relaxed text-ink-2 max-w-[62ch]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-16 pt-10 border-t border-rule grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-12 items-end">
          <div className="lg:col-span-7">
            <h3 className="font-display t-h3 text-ink max-w-[18ch]">Still have questions?</h3>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-2 max-w-[46ch]">
              If yours is not on the list, the discovery call is the fastest way
              to get a real answer.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3">
            <a href="/book" className="btn btn-solid">Book a discovery call</a>
            <a href="mailto:hi@skal.ai" className="btn btn-line">Email us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
