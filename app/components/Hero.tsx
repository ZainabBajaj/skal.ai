"use client";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8faff] to-white"></div>
        
        {/* Animated elements */}
        <div className="absolute inset-0">
          {/* Large glowing orbs */}
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-r from-[#00E1FF]/10 to-[#1DB5C5]/10 rounded-full blur-3xl animate-float-delay"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-[0.03]"></div>
          
          {/* Decorative circles */}
          <div className="absolute top-36 left-20 w-64 h-64 border border-[#00E1FF]/20 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 border border-[#009bd7]/20 rounded-full animate-spin-slow animation-delay-2000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="md:inline-flex hidden items-center space-x-2 bg-gradient-to-r from-[#009bd7]/5 to-[#00E1FF]/5 rounded-full px-6 py-2 mb-8 backdrop-blur-sm border border-[#009bd7]/10 mt-24">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#009bd7] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#009bd7]"></span>
              </span>
              <span className="text-[#009bd7] text-sm font-medium tracking-wider">NEXT-GEN AI SOLUTIONS</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] mb-6 leading-tight mt-24 lg:mt-0">
                Transform Your Organization
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF] mt-2">
                with AI
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Empowering businesses with cutting-edge AI, Data Science, and Full Stack solutions that drive exponential growth
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <a 
                href="#contact" 
                className="group relative px-8 py-4 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white rounded-lg font-semibold overflow-hidden transition-all hover:shadow-lg hover:shadow-[#009bd7]/20"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                <span className="relative flex items-center justify-center">
                  Start Your Project
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a 
                href="#services" 
                className="group px-8 py-4 bg-white text-[#009bd7] rounded-lg font-semibold hover:bg-[#009bd7]/5 transition-all border border-[#009bd7]/20 flex items-center justify-center"
              >
                Explore Services
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { number: "50+", label: "Projects Delivered", icon: "🚀", description: "Successful implementations" },
                { number: "10+", label: "Tech Experts", icon: "👨‍💻", description: "Skilled professionals" },
                { number: "99%", label: "Client Satisfaction", icon: "⭐", description: "Happy customers" }
              ].map((stat, index) => (
                <div key={index} className="group bg-white rounded-lg p-6 hover:bg-[#009bd7]/5 transition-all border border-[#009bd7]/10 shadow-sm">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] to-[#00E1FF] mb-2">{stat.number}</div>
                  <div className="text-[#1a1a1a] font-medium mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 