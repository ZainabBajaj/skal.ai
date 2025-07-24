'use client';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Clients from './components/Clients';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import GlobalSquidBackground from './components/GlobalSquidBackground';
import Newsletter from './components/Newsletter';
import FloatingThemeToggle from './components/FloatingThemeToggle';

export default function Home() {
  return (
    <main className="relative">
      <GlobalSquidBackground />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Clients />
      <ContactForm />
      <Footer />
      <Newsletter />
      <FloatingThemeToggle />
    </main>
  );
}
