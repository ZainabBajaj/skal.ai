const Technologies = () => {
  const techCategories = [
    {
      title: "AI & Data Science",
      icon: "🤖",
      technologies: [
        "-> TensorFlow • PyTorch • Keras",
        "-> Scikit-learn • XGBoost • LightGBM",
        "-> Pandas • NumPy • OpenCV",
        "-> Hugging Face • GPT-3 • BERT",
        "-> ML • Deep Learning • Reinforcement Learning",
        "-> NLP • Computer Vision • Langchain",
        "-> Data Visualization (Matplotlib • Power BI • Tableau)",
        "-> Big Data (Apache Spark • Hadoop • BigQuery)",
      ]
    },
    {
      title: "Full Stack Development",
      icon: "💻",
      technologies: [
        "-> React • Angular • Vue.js • Next.js • Nuxt.js",
        "-> Node.js • Express • Next.js",
        "-> Python (Flask • Django) • TypeScript • JavaScript",
        "-> MongoDB • PostgreSQL • Redis",
        "-> GraphQL • RESTful APIs • WebSockets",
        "-> Tailwind CSS • Bootstrap • Material-UI",
        "-> Microservices • Serverless",
        "-> State Management (Redux • MobX • Recoil)",
        "-> Testing (Jest • Mocha • Selenium)",
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: "☁️",
      technologies: [
        "-> AWS • Azure • GCP",
        "-> Docker • Kubernetes • Helm",
        "-> CI/CD (Jenkins • GitLab CI • CircleCI)",
        "-> Terraform • Ansible • CloudFormation",
        "-> Serverless (AWS Lambda • Google Cloud)",
        "-> Cloud Storage (Amazon S3 • Azure Blob Storage)",
        "-> Networking (VPC • API Gateway • Load Balancers)",
        "-> Database as Service (RDS • Firebase • MongoDB Atlas)",
      ]
    }
  ];
  

  return (
    <section id="technologies" className="py-24 bg-[#f8faff]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#009bd7] text-sm font-medium uppercase tracking-wider">Tech Stack</span>
          <h2 className="text-3xl font-bold text-[#1a1a1a] mt-4 mb-6">Technologies We Excel In</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to build powerful solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {techCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-[#009bd7]/10">
              <div className="text-2xl mb-4 text-[#009bd7]">{category.icon}</div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="text-gray-600">{tech}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies; 