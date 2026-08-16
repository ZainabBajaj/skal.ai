'use client';

import Navbar from '../components/Navbar';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-paper">
      <Navbar />

      <section className="pt-28 lg:pt-36 pb-10 lg:pb-14">
        <div className="shell">
          <div className="max-w-[54ch]">
            <div className="mb-6">
              <span className="t-label">FAQ</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink mb-6 leading-snug pb-1 animate-fade-in-up" style={{ animationDelay: '80ms' }}>
              Frequently asked{' '}
              <span className="accent">
                questions
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-ink-2 leading-relaxed animate-fade-in-up" style={{ animationDelay: '160ms' }}>
              The questions we hear most often. If yours is not here, send it our way below.
            </p>
          </div>
        </div>
      </section>

      <FAQ />
      <ContactForm />
      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
