'use client';
import dynamic from 'next/dynamic';
import BrandHero from './components/BrandHero';
import ProductSplit from './components/ProductSplit';
import SystemDiagram from './components/SystemDiagram';
import ProductInMotion from './components/ProductInMotion';
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
      <WhySkal />
      <TrustedBy />
      <ContactForm />
      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
