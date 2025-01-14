import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Clients from './components/Clients';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Technologies />
      <Clients />
      
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#009bd7] text-sm font-medium uppercase tracking-wider">Get in Touch</span>
              <h2 className="text-3xl font-bold text-[#1a1a1a] mt-4 mb-6">Start Your Project</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ready to transform your business? Contact us to discuss how we can help you achieve your goals with our cutting-edge solutions
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
