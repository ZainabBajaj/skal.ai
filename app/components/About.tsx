
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
          const projectsEnd = 500;
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
          const clientsEnd = 50;
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
      className="relative bg-gradient-to-br from-[#f8faff] via-white to-[#f0f7ff] py-16 sm:py-24 overflow-hidden"
    >
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {/* Static background gradients for depth */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#009bd7]/5 to-[#00E1FF]/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#00E1FF]/3 to-purple-300/2 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-300/2 to-pink-300/2 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Header Section */}
        <div className="text-center mb-16 transform hover:scale-105 transition-transform duration-300">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-[#009bd7]/20">
            <div className="w-2 h-2 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] rounded-full animate-ping"></div>
            <span className="text-[#009bd7] text-sm font-bold tracking-wider">ABOUT US</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#009bd7] to-[#00E1FF] mb-6 leading-tight">
            Pioneering Digital Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            We&apos;re passionate about leveraging cutting-edge technology to transform businesses through{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF] font-bold">
              innovative solutions
            </span>
          </p>
        </div>

        {/* Enhanced Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Our Story */}
          <div className="group relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border border-white/50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#009bd7]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#009bd7]/0 to-[#00E1FF]/0 group-hover:from-[#009bd7]/10 group-hover:to-[#00E1FF]/10 rounded-3xl transition-all duration-500"></div>
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#009bd7] to-[#00E1FF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-4 group-hover:text-[#009bd7] transition-colors duration-300">
                OUR STORY
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Founded with a vision to revolutionize digital transformation, we&apos;ve grown into a trusted partner for businesses seeking innovative solutions that drive real results.
              </p>
              {/* Enhanced hover effect bar */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#009bd7] via-[#00E1FF] to-[#009bd7] rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </div>
          </div>

          {/* Our Mission */}
          <div className="group relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border border-white/50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 rounded-3xl transition-all duration-500"></div>
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-4 group-hover:text-blue-500 transition-colors duration-300">
                OUR MISSION
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To empower organizations with cutting-edge AI and development solutions that drive sustainable growth, innovation, and competitive advantage in the digital age.
              </p>
              {/* Enhanced hover effect bar */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </div>
          </div>

          {/* Our Vision */}
          <div className="group relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border border-white/50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 rounded-3xl transition-all duration-500"></div>
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-4 group-hover:text-indigo-500 transition-colors duration-300">
                OUR VISION
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading force in digital transformation, setting new standards in AI and software development excellence while shaping the future of technology.
              </p>
              {/* Enhanced hover effect bar */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-16 text-center" ref={statsRef}>
          <div className="inline-flex items-center justify-center space-x-8 bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF] transition-all duration-300">
                {projectsCount}+
              </div>
              <div className="text-sm text-gray-600 font-medium">Projects Delivered</div>
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF] transition-all duration-300">
                {clientsCount}+
              </div>
              <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF] transition-all duration-300">
                {yearsCount}+
              </div>
              <div className="text-sm text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}