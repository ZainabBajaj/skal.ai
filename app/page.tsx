'use client';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Clients from './components/Clients';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import { useState, useEffect } from 'react';

export default function Home() {
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  // Function to check for session storage data
  const checkSessionStorage = () => {
    // Check for subject
    const prefillSubject = sessionStorage.getItem('contactSubject');
    if (prefillSubject) {
      setContactSubject(prefillSubject);
      sessionStorage.removeItem('contactSubject');
    }
    
    // Check for message
    const prefillMessage = sessionStorage.getItem('contactMessage');
    if (prefillMessage) {
      setContactMessage(prefillMessage);
      sessionStorage.removeItem('contactMessage');
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initial check
      checkSessionStorage();
      
      // Listen for storage events
      const handleStorageChange = () => {
        checkSessionStorage();
      };
      
      // Listen for custom event triggered when "Hire Now" is clicked
      window.addEventListener('sessionStorageUpdated', handleStorageChange);
      
      return () => {
        window.removeEventListener('sessionStorageUpdated', handleStorageChange);
      };
    }
  }, []);

  return (
    <CartProvider>
      <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Technologies />
        <Pricing />
        <Clients />
        
        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <ContactForm initialSubject={contactSubject} initialMessage={contactMessage} />
            </div>
          </div>
        </section>

        <Footer />
        <Cart />
      </div>
    </CartProvider>
  );
}
