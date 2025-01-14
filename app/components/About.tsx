export default function About() {
  return (
    <section id="about" className="bg-[#f8faff] py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#009bd7] text-sm font-medium uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl font-bold text-[#1a1a1a] mt-4 mb-6">Pioneering Digital Excellence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re passionate about leveraging cutting-edge technology to transform businesses through innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Our Story */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">OUR STORY</h3>
            <p className="text-gray-600">
              Founded with a vision to revolutionize digital transformation, we&apos;ve grown into a trusted partner for businesses seeking innovative solutions.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">OUR MISSION</h3>
            <p className="text-gray-600">
              To empower organizations with cutting-edge AI and development solutions that drive growth and innovation.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">OUR VISION</h3>
            <p className="text-gray-600">
              To be the leading force in digital transformation, setting new standards in AI and software development excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 