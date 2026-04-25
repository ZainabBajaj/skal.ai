"use client";
import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const currentRef = statsRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate Projects Counter
          let projectsStart = 0;
          const projectsEnd = 1000;
          const projectsIncrement = projectsEnd / 100;
          const projectsTimer = setInterval(() => {
            projectsStart += projectsIncrement;
            if (projectsStart >= projectsEnd) {
              setProjectsCount(projectsEnd);
              clearInterval(projectsTimer);
            } else {
              setProjectsCount(Math.floor(projectsStart));
            }
          }, 20);

          // Animate Clients Counter
          let clientsStart = 0;
          const clientsEnd = 100;
          const clientsIncrement = clientsEnd / 50;
          const clientsTimer = setInterval(() => {
            clientsStart += clientsIncrement;
            if (clientsStart >= clientsEnd) {
              setClientsCount(clientsEnd);
              clearInterval(clientsTimer);
            } else {
              setClientsCount(Math.floor(clientsStart));
            }
          }, 40);

          // Animate Years Counter
          let yearsStart = 0;
          const yearsEnd = 5;
          const yearsIncrement = yearsEnd / 25;
          const yearsTimer = setInterval(() => {
            yearsStart += yearsIncrement;
            if (yearsStart >= yearsEnd) {
              setYearsCount(yearsEnd);
              clearInterval(yearsTimer);
            } else {
              setYearsCount(Math.floor(yearsStart));
            }
          }, 80);
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  return (
    <section 
      id="about" 
      className="relative bg-gradient-to-br from-[#f8faff] via-white to-[#f0f7ff] dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 py-16 sm:py-24 overflow-hidden"
    >
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {/* Static background gradients for depth */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#009bd7]/5 to-[#00E1FF]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#00E1FF]/3 to-[#009bd7]/2 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#1DB5C5]/2 to-[#009bd7]/2 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Header Section */}
        <div className="text-center mb-16">
                      <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/20 dark:to-[#00E1FF]/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-[#009bd7]/20 dark:border-[#00E1FF]/30">
              <div className="w-2 h-2 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] rounded-full"></div>
              <span className="text-[#009bd7] dark:text-[#00E1FF] text-sm font-bold tracking-wider">ABOUT US</span>
            </div>
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] dark:text-white mb-6 leading-snug pb-1">
              Pioneering Digital Excellence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
            We&apos;re passionate about leveraging cutting-edge technology to transform businesses through{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF] font-bold">
              innovative solutions
            </span>
          </p>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-16 text-center" ref={statsRef}>
          <div className="inline-flex items-center justify-center space-x-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 dark:border-gray-700/50 hover:shadow-3xl transition-all duration-500">
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF] dark:from-[#00E1FF] dark:to-[#009bd7] transition-all duration-300">
                {projectsCount}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Projects Delivered</div>
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF] dark:from-[#00E1FF] dark:to-[#009bd7] transition-all duration-300">
                {clientsCount}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Happy Clients</div>
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF] dark:from-[#00E1FF] dark:to-[#009bd7] transition-all duration-300">
                {yearsCount}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}