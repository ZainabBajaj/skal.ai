"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    question: "How much does AI development cost?",
    answer: "AI development costs vary based on project complexity, ranging from $15,000 for basic chatbots to $100,000+ for enterprise AI solutions. We offer flexible pricing models including hourly rates ($15-30/hr), monthly retainers ($2,500-5,000/month), and project-based pricing. Contact us for a free consultation and custom quote.",
    category: "Pricing"
  },
  {
    question: "How long does it take to implement AI solutions?",
    answer: "Implementation timelines depend on the solution complexity: AI chatbots (2-4 weeks), machine learning models (4-8 weeks), enterprise AI systems (8-16 weeks). We use agile methodologies to deliver working solutions quickly and iterate based on feedback.",
    category: "Timeline"
  },
  {
    question: "What industries do you specialize in?",
    answer: "We serve diverse industries including healthcare, finance, e-commerce, manufacturing, and technology. Our AI solutions are customized for each industry's specific needs, compliance requirements, and business objectives.",
    category: "Industries"
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, performance optimization, and technical support. Our maintenance plans ensure your AI solutions remain current and perform optimally.",
    category: "Support"
  },
  {
    question: "Can you integrate AI with our existing systems?",
    answer: "Absolutely! We specialize in seamless integration with existing CRM, ERP, and business systems. Our team ensures minimal disruption while maximizing the value of your current technology investments.",
    category: "Integration"
  },
  {
    question: "What's the ROI of implementing AI solutions?",
    answer: "Our clients typically see 300-500% ROI within the first year. AI solutions reduce operational costs by 40-60%, increase efficiency by 50-80%, and improve customer satisfaction by 30-50%. We provide detailed ROI analysis for each project.",
    category: "ROI"
  },
  {
    question: "Do you offer AI consulting services?",
    answer: "Yes, we provide comprehensive AI consulting including strategy development, technology assessment, implementation roadmaps, and team training. Our experts help you identify the best AI opportunities for your business.",
    category: "Consulting"
  },
  {
    question: "How do you ensure data security and privacy?",
    answer: "We implement enterprise-grade security measures including encryption, secure cloud infrastructure, GDPR compliance, and regular security audits. Your data security and privacy are our top priorities.",
    category: "Security"
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
    <section id="faq" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 overflow-hidden">
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
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating animated objects */}
        <div className="absolute top-10 left-10 w-8 h-8 bg-gradient-to-r from-[#009bd7]/30 to-[#00E1FF]/30 dark:from-[#009bd7]/60 dark:to-[#00E1FF]/60 rounded-full animate-float shadow-lg dark:shadow-[#009bd7]/20" style={{animationDelay: '0s', animationDuration: '6s'}}></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-gradient-to-r from-purple-400/30 to-pink-400/30 dark:from-purple-400/60 dark:to-pink-400/60 rounded-full animate-float shadow-lg dark:shadow-purple-400/20" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
        <div className="absolute bottom-20 left-20 w-10 h-10 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 dark:from-cyan-400/60 dark:to-blue-400/60 rounded-full animate-float shadow-lg dark:shadow-cyan-400/20" style={{animationDelay: '4s', animationDuration: '7s'}}></div>
        <div className="absolute bottom-10 right-10 w-4 h-4 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 dark:from-indigo-400/60 dark:to-purple-400/60 rounded-full animate-float shadow-lg dark:shadow-indigo-400/20" style={{animationDelay: '1s', animationDuration: '9s'}}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-32 left-32 w-12 h-12 bg-gradient-to-r from-[#009bd7]/20 to-[#00E1FF]/20 dark:from-[#009bd7]/50 dark:to-[#00E1FF]/50 rounded-lg rotate-45 animate-float shadow-lg dark:shadow-[#009bd7]/15" style={{animationDelay: '3s', animationDuration: '10s'}}></div>
        <div className="absolute top-40 right-40 w-8 h-8 bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-purple-400/50 dark:to-pink-400/50 rounded-lg rotate-12 animate-float shadow-lg dark:shadow-purple-400/15" style={{animationDelay: '5s', animationDuration: '11s'}}></div>
        <div className="absolute bottom-32 left-32 w-14 h-14 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 dark:from-cyan-400/50 dark:to-blue-400/50 rounded-lg -rotate-12 animate-float shadow-lg dark:shadow-cyan-400/15" style={{animationDelay: '1.5s', animationDuration: '8.5s'}}></div>
        <div className="absolute bottom-40 right-40 w-6 h-6 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 dark:from-indigo-400/50 dark:to-purple-400/50 rounded-lg rotate-45 animate-float shadow-lg dark:shadow-indigo-400/15" style={{animationDelay: '2.5s', animationDuration: '12s'}}></div>
        
        {/* Floating dots with different patterns */}
        <div className="absolute top-16 left-1/2 w-3 h-3 bg-[#009bd7]/40 dark:bg-[#009bd7]/70 rounded-full animate-float shadow-sm dark:shadow-[#009bd7]/30" style={{animationDelay: '0.5s', animationDuration: '7.5s'}}></div>
        <div className="absolute top-24 right-1/3 w-2 h-2 bg-purple-400/40 dark:bg-purple-400/70 rounded-full animate-float shadow-sm dark:shadow-purple-400/30" style={{animationDelay: '3.5s', animationDuration: '9.5s'}}></div>
        <div className="absolute bottom-16 left-1/3 w-4 h-4 bg-cyan-400/40 dark:bg-cyan-400/70 rounded-full animate-float shadow-sm dark:shadow-cyan-400/30" style={{animationDelay: '1.5s', animationDuration: '6.5s'}}></div>
        <div className="absolute bottom-24 right-1/2 w-3 h-3 bg-indigo-400/40 dark:bg-indigo-400/70 rounded-full animate-float shadow-sm dark:shadow-indigo-400/30" style={{animationDelay: '4.5s', animationDuration: '10.5s'}}></div>
        
        {/* Original gradient elements */}
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-[#009bd7]/8 to-[#00E1FF]/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-[#00E1FF]/6 to-purple-300/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 backdrop-blur-sm border border-[#009bd7]/20">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#009bd7] animate-pulse" />
              <span className="text-[#009bd7] text-xs sm:text-sm font-bold tracking-wider">FREQUENTLY ASKED QUESTIONS</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#009bd7] to-[#00E1FF] dark:from-white dark:via-[#009bd7] dark:to-[#00E1FF] mb-4 sm:mb-6 leading-tight">
              Everything You Need to Know
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium px-4">
              Get answers to common questions about AI implementation, pricing, and our services
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
                Still Have Questions?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base">
                Can&apos;t find what you&apos;re looking for? Our AI experts are here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Get Free Consultation
                </a>
                <a
                  href="mailto:hello@skal.ai"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#009bd7] text-[#009bd7] font-semibold rounded-xl hover:bg-[#009bd7] hover:text-white transition-all duration-300"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 