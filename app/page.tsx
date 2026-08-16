'use client';
import dynamic from 'next/dynamic';
import BrandHero from './components/BrandHero';
import ProductSplit from './components/ProductSplit';
import SystemDiagram from './components/SystemDiagram';
import ProductInMotion from './components/ProductInMotion';
import Stack from './components/Stack';
import WhySkal from './components/WhySkal';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import TrustedBy from './components/TrustedBy';
import FloatingThemeToggle from './components/FloatingThemeToggle';

const ContactForm = dynamic(() => import('./components/ContactForm'));
const Footer = dynamic(() => import('./components/Footer'));

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <BrandHero />
      <ProductSplit />
      <SystemDiagram />
      <ProductInMotion />
      {/* The 36 tool logos were only on /services. They are the largest block
          of real imagery the site owns, and the home page had none. */}
      <section className="band">
        <div className="shell">
          <Stack />
        </div>
      </section>
      <WhySkal />
      <TrustedBy />
      <ContactForm />
      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
