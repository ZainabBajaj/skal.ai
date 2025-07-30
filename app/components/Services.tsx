"use client";

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface Technology {
  name: string;
  icon: string;
  color: string;
  bgGradient: string;
}

const Services = () => {
  const [activeTab, setActiveTab] = useState('All');

  const technologies = {
    'Front-End': [
      { name: 'HTML', icon: '🌐', color: 'text-orange-500', bgGradient: 'from-orange-100 to-orange-50' },
      { name: 'CSS', icon: '🎨', color: 'text-blue-500', bgGradient: 'from-blue-100 to-blue-50' },
      { name: 'Javascript', icon: '⚡', color: 'text-yellow-500', bgGradient: 'from-yellow-100 to-yellow-50' },
      { name: 'React JS', icon: '⚛️', color: 'text-blue-600', bgGradient: 'from-blue-100 to-cyan-50' },
      { name: 'Vue JS', icon: '💚', color: 'text-green-500', bgGradient: 'from-green-100 to-green-50' },
      { name: 'Angular', icon: '🅰️', color: 'text-red-500', bgGradient: 'from-red-100 to-red-50' },
    ],
    'Back-End': [
      { name: 'Node.js', icon: '🟢', color: 'text-green-600', bgGradient: 'from-green-100 to-green-50' },
      { name: 'Python', icon: '🐍', color: 'text-blue-500', bgGradient: 'from-blue-100 to-indigo-50' },
      { name: 'Java', icon: '☕', color: 'text-orange-600', bgGradient: 'from-orange-100 to-amber-50' },
      { name: 'PHP', icon: '🐘', color: 'text-purple-600', bgGradient: 'from-purple-100 to-purple-50' },
      { name: 'Golang', icon: '🐹', color: 'text-cyan-500', bgGradient: 'from-cyan-100 to-cyan-50' },
      { name: 'C#', icon: '#️⃣', color: 'text-purple-700', bgGradient: 'from-purple-100 to-violet-50' },
    ],
    'Database': [
      { name: 'MongoDB', icon: '🍃', color: 'text-green-600', bgGradient: 'from-green-100 to-emerald-50' },
      { name: 'PostgreSQL', icon: '🐘', color: 'text-blue-600', bgGradient: 'from-blue-100 to-blue-50' },
      { name: 'MySQL', icon: '🗄️', color: 'text-orange-500', bgGradient: 'from-orange-100 to-orange-50' },
      { name: 'Redis', icon: '🔴', color: 'text-red-500', bgGradient: 'from-red-100 to-red-50' },
      { name: 'Firebase', icon: '🔥', color: 'text-yellow-500', bgGradient: 'from-yellow-100 to-amber-50' },
      { name: 'SQLite', icon: '💾', color: 'text-gray-600', bgGradient: 'from-gray-100 to-gray-50' },
    ],
    'DevOps': [
      { name: 'Docker', icon: '🐳', color: 'text-blue-500', bgGradient: 'from-blue-100 to-cyan-50' },
      { name: 'Kubernetes', icon: '⚙️', color: 'text-blue-600', bgGradient: 'from-blue-100 to-indigo-50' },
      { name: 'AWS', icon: '☁️', color: 'text-orange-500', bgGradient: 'from-orange-100 to-yellow-50' },
      { name: 'Azure', icon: '🔵', color: 'text-blue-600', bgGradient: 'from-blue-100 to-blue-50' },
      { name: 'Jenkins', icon: '🔧', color: 'text-gray-600', bgGradient: 'from-gray-100 to-slate-50' },
      { name: 'GitHub Actions', icon: '🚀', color: 'text-gray-800', bgGradient: 'from-gray-100 to-gray-50' },
    ],
    'AI & ML': [
      { name: 'TensorFlow', icon: '🧠', color: 'text-orange-500', bgGradient: 'from-orange-100 to-amber-50' },
      { name: 'PyTorch', icon: '🔥', color: 'text-red-500', bgGradient: 'from-red-100 to-orange-50' },
      { name: 'OpenAI', icon: '🤖', color: 'text-green-600', bgGradient: 'from-green-100 to-emerald-50' },
      { name: 'Hugging Face', icon: '🤗', color: 'text-yellow-500', bgGradient: 'from-yellow-100 to-yellow-50' },
      { name: 'Scikit-learn', icon: '📊', color: 'text-blue-500', bgGradient: 'from-blue-100 to-sky-50' },
      { name: 'Langchain', icon: '🔗', color: 'text-purple-600', bgGradient: 'from-purple-100 to-purple-50' },
    ],
    'Low/No Code': [
      { name: 'Bubble', icon: '🫧', color: 'text-blue-500', bgGradient: 'from-blue-100 to-cyan-50' },
      { name: 'Webflow', icon: '🌊', color: 'text-purple-600', bgGradient: 'from-purple-100 to-indigo-50' },
      { name: 'Zapier', icon: '⚡', color: 'text-orange-500', bgGradient: 'from-orange-100 to-yellow-50' },
      { name: 'Airtable', icon: '📋', color: 'text-yellow-600', bgGradient: 'from-yellow-100 to-amber-50' },
      { name: 'Notion', icon: '📝', color: 'text-gray-800', bgGradient: 'from-gray-100 to-slate-50' },
      { name: 'Make', icon: '🔧', color: 'text-blue-600', bgGradient: 'from-blue-100 to-blue-50' },
    ]
  };

  const tabs = ['All', 'Front-End', 'Back-End', 'Low/No Code', 'Database', 'DevOps', 'AI & ML'];

  const getDisplayedTechnologies = () => {
    if (activeTab === 'All') {
      return {
        'Front-End': technologies['Front-End'],
        'Back-End': technologies['Back-End'],
        'Database': technologies['Database'],
        'DevOps': technologies['DevOps'],
        'Low/No Code': technologies['Low/No Code'],
        'AI & ML': technologies['AI & ML']
      };
    }
    return { [activeTab]: technologies[activeTab as keyof typeof technologies] || [] };
  };

  return (
          <section 
        id="services" 
        className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 overflow-hidden"
      >
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {/* Static background gradients for depth */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#009bd7]/8 to-[#00E1FF]/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#00E1FF]/6 to-purple-300/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-300/4 to-pink-300/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-20">
                      <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/20 dark:to-[#00E1FF]/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-[#009bd7]/20 dark:border-[#00E1FF]/30">
              <div className="w-2 h-2 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] rounded-full animate-ping"></div>
              <span className="text-[#009bd7] dark:text-[#00E1FF] text-sm font-bold tracking-wider">OUR TECH STACK</span>
            </div>
          
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#009bd7] to-[#00E1FF] dark:from-white dark:via-[#009bd7] dark:to-[#00E1FF] mb-6 leading-tight">
              Technologies We Master
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Cutting-edge technologies and frameworks we use to build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF] font-bold">
              exceptional solutions
            </span>
          </p>
        </div>

        {/* Enhanced Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl p-3 max-w-5xl mx-auto border border-white/50 dark:border-gray-700/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#009bd7]/5 via-transparent to-[#00E1FF]/5"></div>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-4 rounded-2xl font-bold transition-all duration-500 m-1 transform hover:scale-105 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white shadow-xl scale-105 shadow-[#009bd7]/30'
                  : 'text-gray-600 dark:text-gray-300 hover:text-[#009bd7] hover:bg-white/80 dark:hover:bg-gray-700/80 hover:shadow-lg'
              }`}
            >
              <span className="relative z-10">{tab}</span>
              {activeTab === tab && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] rounded-2xl blur-sm opacity-50 -z-10"></div>
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Technology Grid */}
        <div className="max-w-7xl mx-auto">
          {activeTab === 'All' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {Object.values(getDisplayedTechnologies()).flat().map((tech: Technology, index: number) => (
                <div
                  key={`${tech.name}-${index}`}
                  className={`group relative bg-gradient-to-br ${tech.bgGradient} dark:from-gray-800/80 dark:to-gray-700/80 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/50 dark:border-gray-600/50 hover:border-[#009bd7]/30 hover:scale-110 cursor-pointer backdrop-blur-sm overflow-hidden`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#009bd7]/0 to-[#00E1FF]/0 group-hover:from-[#009bd7]/10 group-hover:to-[#00E1FF]/10 rounded-3xl transition-all duration-500"></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className={`text-3xl mb-4 group-hover:scale-110 transition-all duration-500 transform group-hover:rotate-6 ${tech.color}`}>
                      {tech.icon}
                    </div>
                    
                    <h3 className="font-bold text-gray-800 dark:text-white text-base group-hover:text-[#009bd7] transition-all duration-300 mb-2">
                      {tech.name}
                    </h3>
                    
                    {/* Animated particles */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-[#00E1FF] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-[#009bd7] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" style={{animationDelay: '200ms'}}></div>
                  </div>
                  
                  {/* Enhanced hover effect bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#009bd7] via-[#00E1FF] to-[#009bd7] rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
                </div>
              ))}
            </div>
          ) : (
            Object.entries(getDisplayedTechnologies()).map(([category, techs]) => (
              <div key={category} className="mb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {techs.map((tech: Technology, index: number) => (
                  <div
                    key={`${tech.name}-${index}`}
                    className={`group relative bg-gradient-to-br ${tech.bgGradient} dark:from-gray-800/80 dark:to-gray-700/80 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/50 dark:border-gray-600/50 hover:border-[#009bd7]/30 hover:scale-110 cursor-pointer backdrop-blur-sm overflow-hidden`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#009bd7]/0 to-[#00E1FF]/0 group-hover:from-[#009bd7]/10 group-hover:to-[#00E1FF]/10 rounded-3xl transition-all duration-500"></div>
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className={`text-3xl mb-4 group-hover:scale-110 transition-all duration-500 transform group-hover:rotate-6 ${tech.color}`}>
                        {tech.icon}
                      </div>
                      
                      <h3 className="font-bold text-gray-800 dark:text-white text-base group-hover:text-[#009bd7] dark:group-hover:text-[#00E1FF] transition-all duration-300 mb-2">
                        {tech.name}
                      </h3>
                      
                      {/* Animated particles */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-[#00E1FF] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 left-2 w-1 h-1 bg-[#009bd7] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" style={{animationDelay: '200ms'}}></div>
                    </div>
                    
                    {/* Enhanced hover effect bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#009bd7] via-[#00E1FF] to-[#009bd7] rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
                  </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

          {/* Enhanced Service Category Cards */}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 rounded-full border border-[#009bd7]/20 mb-4">
                <div className="w-2 h-2 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] rounded-full animate-pulse"></div>
                <span className="text-[#009bd7] dark:text-[#00E1FF] text-xs sm:text-sm font-bold tracking-wider">CHOOSE YOUR PATH</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#009bd7] to-[#00E1FF] dark:from-white dark:via-[#009bd7] dark:to-[#00E1FF] mb-4 sm:mb-6 leading-tight">
                Ready to Transform?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                Select the path that best fits your journey and let&apos;s build something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF] font-bold">
                  extraordinary together
                </span>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-0">
              {/* Enhanced Startup Card */}
              <div className="group relative bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-blue-900/30 dark:via-cyan-900/20 dark:to-indigo-900/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 xl:p-12 border border-blue-200/50 dark:border-blue-700/50 hover:shadow-3xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden min-h-[400px] sm:min-h-[500px]">
                {/* Animated background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-indigo-500/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-400/20 to-blue-400/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" style={{animationDelay: '200ms'}}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 text-center">
                    I&apos;m A <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600 dark:from-blue-300 dark:to-cyan-400">Startup.</span>
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-center mb-8 leading-relaxed">
                    Remarkable ideas often stall without the right team to bring them to life
                  </p>
                  
                  {/* Additional features */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>MVP Development in 2-4 weeks</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span>Scalable Architecture Design</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>24/7 Technical Support</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <button 
                      onClick={() => window.location.href = '/startup'}
                      className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
                    >
                      <span className="relative z-10">Get Started</span>
                      <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
              </div>

              {/* Enhanced Enterprise Card */}
              <div className="group relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 backdrop-blur-xl rounded-3xl shadow-2xl p-10 sm:p-12 border border-gray-700/50 hover:shadow-3xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden min-h-[500px]">
                {/* Animated background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" style={{animationDelay: '200ms'}}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    I&apos;m An <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Enterprise.</span>
                  </h3>
                  
                  <p className="text-gray-300 text-center mb-8 leading-relaxed">
                    Scaling without the right infrastructure and expertise can lead to costly bottlenecks
                  </p>
                  
                  {/* Additional features */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Enterprise-grade Security</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Compliance & Governance</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>Dedicated Project Manager</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <button 
                      onClick={() => window.location.href = '/enterprise'}
                      className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
                    >
                      <span className="relative z-10">Explore More</span>
                      <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
              </div>

              {/* Enhanced Rescue Card */}
              <div className="group relative bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 dark:from-red-900/30 dark:via-orange-900/20 dark:to-amber-900/30 backdrop-blur-xl rounded-3xl shadow-2xl p-10 sm:p-12 border border-red-200/50 dark:border-red-700/50 hover:shadow-3xl hover:shadow-red-500/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden min-h-[500px]">
                {/* Animated background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-orange-500/5 to-amber-500/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-400/20 to-amber-400/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" style={{animationDelay: '200ms'}}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4 text-center">
                    I Need A <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-orange-600 dark:from-red-300 dark:to-orange-400">Rescue.</span>
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-center mb-8 leading-relaxed">
                    A messy codebase and tech debt are suffocating your progress
                  </p>
                  
                  {/* Additional features */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Code Review & Refactoring</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>Performance Optimization</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span>Technical Debt Cleanup</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <button 
                      onClick={() => window.location.href = '/rescue'}
                      className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
                    >
                      <span className="relative z-10">Need a Fix</span>
                      <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default Services; 