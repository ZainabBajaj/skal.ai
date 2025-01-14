const Services = () => {
  const services = [
    {
      title: "AI-Powered Chatbots",
      description: "Our AI-powered chatbots provide instant, 24/7 customer support and process internal PDFs and CSVs to extract critical information. They ensure secure, role-based access, delivering tailored insights to different management levels and departments.",
      icon: "🤖",
    },
    {
      title: "AI Agents",
      description: "AI agents for automating complex tasks and workflows, enhancing efficiency and productivity in various industries",
      icon: "🦾"
    },
    {
      title: "Data Science & Analytics",
      description: "Advanced analytics, predictive modeling, and data visualization for informed decision-making",
      icon: "📊"
    },
    {
      title: "DevOps & Cloud Solutions",
      description: "Streamlined deployment, CI/CD pipelines, and cloud infrastructure management",
      icon: "☁️"
    },
    {
      title: "Full Stack Development",
      description: "End-to-end web and mobile application development with modern technologies",
      icon: "💻"
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing, automation, and quality control for reliable software",
      icon: "✅"
    },
    {
      title: "Machine Learning",
      description: "Automated systems, pattern recognition, and intelligent algorithms for optimization",
      icon: "🧠"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design with intuitive interfaces and exceptional user experiences",
      icon: "🎨"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: "📱"
    },
    {
      title: "AI Solutions Development",
      description: "Custom AI solutions including machine learning models, neural networks, and natural language processing",
      icon: "🤖"
    },
    {
      title: "Generative AI Solutions",
      description: "Advanced LLMs, text-to-image generation, and AI-powered content creation solutions",
      icon: "✨"
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#009bd7] text-sm font-medium uppercase tracking-wider">Our Expertise</span>
          <h2 className="text-3xl font-bold text-[#1a1a1a] mt-4 mb-6">Comprehensive Tech Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Delivering innovative solutions across AI, Data Science, and Full Stack Development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} 
              className="group bg-[#f8faff] rounded-lg p-8 hover:bg-gradient-to-br from-white to-[#f8faff] transition-all duration-300 border border-[#009bd7]/10 shadow-sm"
            >
              <div className="mb-6 text-4xl group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="#contact" className="inline-flex items-center text-[#009bd7] hover:text-[#00E1FF] transition-colors">
                Learn More <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 