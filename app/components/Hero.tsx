"use client";

import { useState, useEffect } from 'react';
import { ChevronRight, Sparkles, Zap, Target, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const rotatingWords = ["AI", "Innovation", "Growth", "Success"];

  useEffect(() => {
    setIsMounted(true);
    
    // Small delay to trigger drop-down animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Rotating words animation
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [rotatingWords.length]);

  const FloatingParticles = () => {
    const [particles, setParticles] = useState<{
      left: number;
      top: number;
      duration: number;
      delay: number;
    }[]>([]);

    useEffect(() => {
      if (!isMounted) return;
      
      // Only runs on the client after mount
      setParticles(
        Array.from({ length: 20 }).map(() => ({
          left: Math.random() * 100,
          top: Math.random() * 100,
          duration: 3 + Math.random() * 4,
          delay: Math.random() * 2,
        }))
      );
    }, []);

    if (!isMounted) {
      return null;
    }

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] rounded-full opacity-30"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animation: `float ${p.duration}s ease-in-out infinite ${p.delay}s`,
            }}
          />
        ))}
      </div>
    );
  };

  // Show a simplified version during SSR/hydration but with the same structure for smooth transition
  if (!isMounted) {
    return (
      <section 
        id="home" 
        className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-1000">
              
              {/* Static Badge */}
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/20 dark:to-[#00E1FF]/20 rounded-full px-8 py-3 mb-8 backdrop-blur-md border border-[#009bd7]/20 dark:border-[#009bd7]/30 mt-24">
                <Sparkles className="w-4 h-4 text-[#009bd7]" />
                <span className="text-[#009bd7] text-sm font-bold tracking-wider">NEXT-GEN AI SOLUTIONS</span>
                <ChevronRight className="w-4 h-4 text-[#009bd7]" />
              </div>

              {/* Static Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] dark:text-white mb-6 leading-tight mt-24 lg:mt-0">
                Transform Your Organization
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] via-[#00E1FF] to-[#1DB5C5] mt-2">
                  with AI
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] via-[#00E1FF] to-[#1DB5C5] mt-2">
                  Innovation
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                Empowering businesses with cutting-edge AI, Data Science, and Full Stack solutions that drive{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF] font-bold">
                  exponential growth
                </span>
              </p>

              {/* CTA Button */}
              <div className="flex justify-center mb-16">
                <a 
                  href="https://calendly.com/skal-ai/discovery-call?month=2025-07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white rounded-2xl font-bold overflow-hidden transition-all hover:shadow-2xl hover:shadow-[#009bd7]/30 hover:scale-105 active:scale-95 inline-flex items-center justify-center"
                >
                  <span className="relative flex items-center justify-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Start Your Project
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </span>
                </a>
              </div>

              {/* Static Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  { 
                    number: "250+", 
                    label: "AI Systems Integrated", 
                    icon: Target, 
                    description: "Successful implementations",
                    color: "from-blue-500 to-cyan-500"
                  },
                  { 
                    number: "10+", 
                    label: "Tech Experts", 
                    icon: Users, 
                    description: "Skilled professionals",
                    color: "from-purple-500 to-pink-500"
                  },
                  { 
                    number: "5X", 
                    label: "Average ROI per Project", 
                    icon: TrendingUp, 
                    description: "Return on investment",
                    color: "from-green-500 to-emerald-500"
                  }
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div 
                      key={index} 
                      className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-white dark:hover:bg-gray-800 transition-all border border-[#009bd7]/10 dark:border-[#009bd7]/20 shadow-lg hover:shadow-2xl hover:scale-105 cursor-pointer"
                    >
                      <div className="flex items-center justify-center mb-4">
                        <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color}`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF] mb-2">
                        {stat.number}
                      </div>
                      <div className="text-[#1a1a1a] dark:text-white font-bold mb-2 text-lg">{stat.label}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">{stat.description}</div>
                      <div className="mt-4 h-1 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 overflow-hidden"
    >
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,155,215,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,155,215,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        {/* Floating particles */}
        <FloatingParticles />
        
        {/* Decorative elements */}
        <div className="absolute top-36 left-20 w-64 h-64 border-2 border-[#00E1FF]/10 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 border-2 border-[#009bd7]/10 rounded-full animate-spin-slow" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Enhanced Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/20 dark:to-[#00E1FF]/20 rounded-full px-8 py-3 mb-8 backdrop-blur-md border border-[#009bd7]/20 dark:border-[#009bd7]/30 mt-24 hover:scale-105 transition-transform cursor-pointer group">
              <div className="relative">
                <Sparkles className="w-4 h-4 text-[#009bd7]" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#00E1FF] rounded-full animate-ping"></div>
              </div>
              <span className="text-[#009bd7] text-sm font-bold tracking-wider">NEXT-GEN AI SOLUTIONS</span>
              <ChevronRight className="w-4 h-4 text-[#009bd7] group-hover:translate-x-1 transition-transform" />
            </div>

            {/* Dynamic Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] dark:text-white mb-6 leading-tight mt-24 lg:mt-0">
              Transform Your Organization
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] via-[#00E1FF] to-[#1DB5C5] mt-2 relative text-center w-full">
                with AI
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] via-[#00E1FF] to-[#1DB5C5] mt-2 relative">
                <span className="inline-block min-w-[200px] text-center w-full">
                  {rotatingWords.map((word, index) => (
                    <span
                      key={word}
                      className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${
                        index === currentWord
                          ? 'opacity-100 transform translate-y-0'
                          : 'opacity-0 transform translate-y-4'
                      }`}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Empowering businesses with cutting-edge AI, Data Science, and Full Stack solutions that drive{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF] font-bold">
                exponential growth
              </span>
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex justify-center mb-16">
              <a 
                href="https://calendly.com/skal-ai/discovery-call?month=2025-07"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white rounded-2xl font-bold overflow-hidden transition-all hover:shadow-2xl hover:shadow-[#009bd7]/30 hover:scale-105 active:scale-95 inline-flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Start Your Project
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>

            {/* Static Stats - No Animation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { 
                  number: "250+", 
                  label: "AI Systems Integrated", 
                  icon: Target, 
                  description: "Successful implementations",
                  color: "from-blue-500 to-cyan-500"
                },
                { 
                  number: "10+", 
                  label: "Tech Experts", 
                  icon: Users, 
                  description: "Skilled professionals",
                  color: "from-purple-500 to-pink-500"
                },
                { 
                  number: "5X", 
                  label: "Average ROI per Project", 
                  icon: TrendingUp, 
                  description: "Return on investment",
                  color: "from-green-500 to-emerald-500"
                }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-white dark:hover:bg-gray-800 transition-all border border-[#009bd7]/10 dark:border-[#009bd7]/20 shadow-lg hover:shadow-2xl hover:scale-105 cursor-pointer"
                    style={{
                      animationDelay: `${index * 200}ms`,
                    }}
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color} group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF] mb-2 group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-[#1a1a1a] dark:text-white font-bold mb-2 text-lg">{stat.label}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">{stat.description}</div>
                    <div className="mt-4 h-1 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </div>
                );
              })}
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 pt-12 border-t border-gray-200/50 dark:border-gray-700/50">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">TRUSTED BY LEADING COMPANIES</p>
              <div className="flex justify-center items-center space-x-12 opacity-50 hover:opacity-80 transition-opacity">
                {['Google', 'Microsoft', 'AWS', 'OpenAI', 'Meta'].map((company, index) => (
                  <div key={index} className="text-lg font-bold text-gray-400 dark:text-gray-500 hover:text-[#009bd7] dark:hover:text-[#00E1FF] transition-colors">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;