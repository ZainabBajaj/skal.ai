'use client';
import dynamic from 'next/dynamic';
import BrandHero from './components/BrandHero';
import ProductSplit from './components/ProductSplit';
import ProductInMotion from './components/ProductInMotion';
import Navbar from './components/Navbar';
import TrustedBy from './components/TrustedBy';
import FloatingThemeToggle from './components/FloatingThemeToggle';

const ContactForm = dynamic(() => import('./components/ContactForm'));
const Footer = dynamic(() => import('./components/Footer'));

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <BrandHero />
      <ProductSplit />
      <ProductInMotion />
      <TrustedBy />
      <ContactForm />
      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
