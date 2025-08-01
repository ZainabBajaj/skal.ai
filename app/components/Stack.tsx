"use client";

import { useState } from 'react';
import Image from 'next/image';

interface Technology {
  name: string;
  svgName: string;
  color: string;
  bgGradient: string;
}

const Stack = () => {
  const [activeTab, setActiveTab] = useState('All');

  const technologies = {
    'Front-End': [
      { name: 'HTML', svgName: 'html.svg', color: 'text-orange-500', bgGradient: 'from-orange-100 to-orange-50' },
      { name: 'CSS', svgName: 'css.svg', color: 'text-blue-500', bgGradient: 'from-blue-100 to-blue-50' },
      { name: 'Javascript', svgName: 'javascript.svg', color: 'text-yellow-500', bgGradient: 'from-yellow-100 to-yellow-50' },
      { name: 'React JS', svgName: 'react.svg', color: 'text-blue-600', bgGradient: 'from-blue-100 to-cyan-50' },
      { name: 'Vue JS', svgName: 'vuejs.svg', color: 'text-green-500', bgGradient: 'from-green-100 to-green-50' },
      { name: 'Angular', svgName: 'angular.svg', color: 'text-red-500', bgGradient: 'from-red-100 to-red-50' },
    ],
    'Back-End': [
      { name: 'Node.js', svgName: 'node_js.svg', color: 'text-green-600', bgGradient: 'from-green-100 to-green-50' },
      { name: 'Python', svgName: 'python.svg', color: 'text-blue-500', bgGradient: 'from-blue-100 to-indigo-50' },
      { name: 'Java', svgName: 'java.svg', color: 'text-orange-600', bgGradient: 'from-orange-100 to-amber-50' },
      { name: 'PHP', svgName: 'php.svg', color: 'text-purple-600', bgGradient: 'from-purple-100 to-purple-50' },
      { name: 'Golang', svgName: 'golang.svg', color: 'text-cyan-500', bgGradient: 'from-cyan-100 to-cyan-50' },
      { name: 'C#', svgName: 'c#.svg', color: 'text-purple-700', bgGradient: 'from-purple-100 to-violet-50' },
    ],
    'Database': [
      { name: 'MongoDB', svgName: 'mangodb.svg', color: 'text-green-600', bgGradient: 'from-green-100 to-emerald-50' },
      { name: 'PostgreSQL', svgName: 'postgresql.svg', color: 'text-blue-600', bgGradient: 'from-blue-100 to-blue-50' },
      { name: 'MySQL', svgName: 'mysql.svg', color: 'text-orange-500', bgGradient: 'from-orange-100 to-orange-50' },
      { name: 'Redis', svgName: 'redis.svg', color: 'text-red-500', bgGradient: 'from-red-100 to-red-50' },
      { name: 'Firebase', svgName: 'firebase.svg', color: 'text-yellow-500', bgGradient: 'from-yellow-100 to-amber-50' },
      { name: 'SQLite', svgName: 'sqlite.svg', color: 'text-gray-600', bgGradient: 'from-gray-100 to-gray-50' },
    ],
    'DevOps': [
      { name: 'Docker', svgName: 'docker.svg', color: 'text-blue-500', bgGradient: 'from-blue-100 to-cyan-50' },
      { name: 'Kubernetes', svgName: 'kubernetes.svg', color: 'text-blue-600', bgGradient: 'from-blue-100 to-indigo-50' },
      { name: 'AWS', svgName: 'aws.svg', color: 'text-orange-500', bgGradient: 'from-orange-100 to-yellow-50' },
      { name: 'Azure', svgName: 'azure.svg', color: 'text-blue-600', bgGradient: 'from-blue-100 to-blue-50' },
      { name: 'Jenkins', svgName: 'jenkins.svg', color: 'text-gray-600', bgGradient: 'from-gray-100 to-slate-50' },
      { name: 'GitHub Actions', svgName: 'GitHub Actions.svg', color: 'text-gray-800', bgGradient: 'from-gray-100 to-gray-50' },
    ],
    'AI & ML': [
      { name: 'Hugging Face', svgName: 'hf-logo.svg', color: 'text-yellow-500', bgGradient: 'from-yellow-100 to-yellow-50' },
      { name: 'Langchain', svgName: 'Langchain.svg', color: 'text-purple-600', bgGradient: 'from-purple-100 to-purple-50' },
      { name: 'TensorFlow', svgName: 'tensorflow.svg', color: 'text-orange-500', bgGradient: 'from-orange-100 to-amber-50' },
      { name: 'PyTorch', svgName: 'pytorch.svg', color: 'text-red-500', bgGradient: 'from-red-100 to-orange-50' },
      { name: 'OpenAI', svgName: 'open_ai.svg', color: 'text-green-600', bgGradient: 'from-green-100 to-emerald-50' },
      { name: 'Scikit-learn', svgName: 'Scikit_learn.svg', color: 'text-blue-500', bgGradient: 'from-blue-100 to-sky-50' },
    ],
    'Low/No Code': [
      { name: 'Bubble', svgName: 'bubble.svg', color: 'text-blue-500', bgGradient: 'from-blue-100 to-cyan-50' },
      { name: 'Webflow', svgName: 'webflow.svg', color: 'text-purple-600', bgGradient: 'from-purple-100 to-indigo-50' },
      { name: 'Zapier', svgName: 'zapier.svg', color: 'text-orange-500', bgGradient: 'from-orange-100 to-yellow-50' },
      { name: 'Airtable', svgName: 'Airtable.svg', color: 'text-yellow-600', bgGradient: 'from-yellow-100 to-amber-50' },
      { name: 'Notion', svgName: 'notion.svg', color: 'text-gray-800', bgGradient: 'from-gray-100 to-slate-50' },
      { name: 'Make', svgName: 'make.svg', color: 'text-blue-600', bgGradient: 'from-blue-100 to-blue-50' },
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

  const renderIcon = (tech: Technology) => {
    // Handle special characters in filenames
    let svgPath = tech.svgName;
    if (tech.svgName === 'c#.svg') {
      svgPath = 'c%23.svg';
    }
    
    return (
      <div className="w-12 h-12 relative mb-4 group-hover:scale-110 transition-all duration-500 transform group-hover:rotate-6">
        <Image
          src={`/svgs/${svgPath}`}
          alt={tech.name}
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
    );
  };

  return (
    <section 
      id="stack" 
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
                    {renderIcon(tech)}
                    
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
                        {renderIcon(tech)}
                        
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
      </div>
    </section>
  );
};

export default Stack; 