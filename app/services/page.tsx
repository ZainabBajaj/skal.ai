'use client';

import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import { ServicesVisual } from '../components/SurfaceVisuals';
import About from '../components/About';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';
import Reveal from '../components/Reveal';

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <PageHero
        visual={<ServicesVisual />}
        eyebrow="SKAL Services"
        meta="Custom builds"
        title="Built around how you"
        emphasis="already work."
        lead={
          <>
            Off the shelf does not fit your business. SKAL Services designs and
            deploys internal AI systems, workflow automation, and custom software
            shaped to your operations rather than to a template.
          </>
        }
        primary={{ href: '#contact', label: 'Tell us what you need' }}
        secondary={{ href: '#paths', label: 'See the paths' }}
        facts={[
          { k: 'What you buy', v: 'A custom build' },
          { k: 'Terms', v: 'Scoped per project' },
          { k: 'Starts with', v: 'A discovery call' },
        ]}
      />

      <Reveal>
        <div id="paths">
          <Services />
        </div>
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <ContactForm />
      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
