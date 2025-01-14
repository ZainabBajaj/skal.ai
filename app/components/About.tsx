const About = () => {
  return (
    <section id="about" className="py-24 bg-[#f8faff]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[#009bd7] text-sm font-medium uppercase tracking-wider">Who We Are</span>
          <h2 className="text-3xl font-bold text-[#1a1a1a] mt-4 mb-6">Pioneering AI-Powered Solutions</h2>
          <p className="text-gray-600 mb-8 text-lg">
            SKAL is a leading technology solutions provider specializing in AI, Data Science, and Full-Stack Development. We combine innovative technology with industry expertise to deliver transformative full-stack AI solutions that drive business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg hover:bg-gradient-to-br from-white to-[#f8faff] transition-colors group shadow-sm border border-[#009bd7]/10">
            <div className="text-4xl mb-6 text-[#009bd7] group-hover:scale-110 transition-transform">🚀</div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">OUR STORY</h3>
            <p className="text-gray-600">
              Founded by tech enthusiasts with a vision to revolutionize full-stack AI solutions, we've grown into a global team of innovators delivering cutting-edge solutions across industries.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg hover:bg-gradient-to-br from-white to-[#f8faff] transition-colors group shadow-sm border border-[#009bd7]/10">
            <div className="text-4xl mb-6 text-[#009bd7] group-hover:scale-110 transition-transform">🎯</div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">OUR MISSION</h3>
            <p className="text-gray-600">
              To empower businesses with innovative AI and data-driven solutions that drive growth, efficiency, and competitive advantage in the digital age.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg hover:bg-gradient-to-br from-white to-[#f8faff] transition-colors group shadow-sm border border-[#009bd7]/10">
            <div className="text-4xl mb-6 text-[#009bd7] group-hover:scale-110 transition-transform">🌟</div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">OUR VISION</h3>
            <p className="text-gray-600">
              To be the global leader in delivering transformative AI-Powered tech solutions that shape the future of digital innovation and business success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 