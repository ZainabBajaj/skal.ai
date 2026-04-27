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
    <section id="faq" className="relative py-12 sm:py-14 lg:py-20 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Custom CSS for floating animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.7;
          }
          25% { 
            transform: translateY(-15px) rotate(90deg); 
            opacity: 1;
          }
          50% { 
            transform: translateY(-25px) rotate(180deg); 
            opacity: 0.8;
          }
          75% { 
            transform: translateY(-10px) rotate(270deg); 
            opacity: 0.9;
          }
        }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 backdrop-blur-sm border border-[#009bd7]/20">
              <div className="w-2 h-2 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] rounded-full animate-ping"></div>
              <span className="text-[#009bd7] text-xs sm:text-sm font-bold tracking-wider">FREQUENTLY ASKED QUESTIONS</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] dark:text-white mb-4 sm:mb-6 leading-snug pb-1">
              Everything You Need to Know
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium px-4">
              Common questions about how SKAL works. If yours is not here, the discovery call covers it.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white shadow-lg'
                    : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-[#009bd7]/10 dark:hover:bg-[#009bd7]/20 hover:text-[#009bd7] border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 sm:space-y-6">
            {filteredFAQs.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItems.includes(index)}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full px-6 sm:px-8 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors duration-300"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-[#009bd7]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  className={`transition-all duration-300 ease-in-out ${
                    openItems.includes(index)
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 sm:px-8 pb-4 sm:pb-6">
                    <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-gradient-to-r from-[#009bd7]/5 to-[#00E1FF]/5 dark:from-[#009bd7]/10 dark:to-[#00E1FF]/10 rounded-2xl p-8 sm:p-12 border border-[#009bd7]/10 dark:border-[#009bd7]/20">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base">
                If yours is not on the list, the discovery call is the fastest way to get a real answer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/book"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Book a discovery call
                </a>
                <a
                  href="mailto:hi@skal.ai"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#009bd7] text-[#009bd7] font-semibold rounded-xl hover:bg-[#009bd7] hover:text-white transition-all duration-300"
                >
                  Email us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 