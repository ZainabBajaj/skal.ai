'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Zap, Code, Brain } from 'lucide-react';
import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';
import FloatingThemeToggle from '../components/FloatingThemeToggle';

export default function StaffingPage() {
  const roles = [
    { icon: Code, title: 'Full-Stack Engineers', description: 'React, Node.js, Python, Go, production-ready from day one.' },
    { icon: Brain, title: 'AI / ML Engineers', description: 'LLMs, computer vision, NLP, and custom model development.' },
    { icon: Shield, title: 'DevOps & Cloud', description: 'AWS, Azure, GCP, Kubernetes, infrastructure that scales.' },
    { icon: Zap, title: 'Data Engineers', description: 'Pipelines, ETL, analytics, and real-time data systems.' },
  ];

  const process = [
    { step: '01', title: 'Tell Us What You Need', description: 'Share your requirements: tech stack, team size, timeline.' },
    { step: '02', title: 'We Match Top Talent', description: 'Hand-picked engineers from our pre-vetted top 5% talent pool.' },
    { step: '03', title: 'Deploy Your Operators', description: 'Interview candidates. Only move forward if it\'s the right fit.' },
    { step: '04', title: 'Start Shipping', description: 'Your operators embed immediately and ship production work from week one.' },
  ];

  return (
    <main className="relative min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="SKAL Staffing"
        meta="Billed by the hour"
        title="Operators who ship from"
        emphasis="the first week."
        lead={
          <>
            No hiring loops. No onboarding drag. SKAL Staffing connects companies
            with pre-vetted engineers and operators who already work AI-first and
            ship fast inside modern workflows. Drop them into your workflow and
            start shipping.
          </>
        }
        primary={{ href: '/book', label: 'Deploy your operators' }}
        secondary={{ href: '#roles', label: 'See the roles' }}
        facts={[
          { k: 'What you buy', v: 'An embedded operator' },
          { k: 'Terms', v: 'Billed by the hour' },
          { k: 'If it is not a fit', v: 'Replaced at no cost' },
        ]}
      />

      {/* Available Roles */}
      <section id="roles" className="band bg-surface">
        <div className="shell">
          <div className="spec">
            <span className="t-label t-label--ink">Operators ready to deploy</span>
            <span className="t-label">{roles.length} disciplines</span>
          </div>

          <h2 className="font-display t-h2 text-ink mt-8 max-w-[16ch]">
            Vetted before you ever meet them.
          </h2>
          <p className="t-lead mt-5 max-w-[48ch]">
            Every operator in the network has been through technical assessment,
            live coding, and real-project evaluation. All are fluent in modern AI
            tooling and autonomous workflows.
          </p>

          <ul className="mt-14 lg:mt-20 border-t border-rule">
            {roles.map((role) => (
              <li key={role.title} className="border-b border-rule">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-2 sm:gap-x-8 py-7">
                  <h3 className="sm:col-span-4 font-display t-h3 text-ink">{role.title}</h3>
                  <p className="sm:col-span-8 text-[0.9375rem] leading-relaxed text-ink-2 self-center">
                    {role.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HowItWorks title="How it works" steps={process} />

      {/* Why SKAL Staffing — the one dark band on this page. */}
      <section className="band bg-band text-band-ink">
        <div className="shell">
          <div className="spec !border-band-rule">
            <span className="t-label !text-band-ink">Why companies choose it</span>
            <span className="t-label !text-band-2">Three commitments</span>
          </div>

          <h2 className="font-display t-h2 !text-band-ink mt-8 max-w-[16ch]">
            The risk sits with us, not with you.
          </h2>

          <div className="mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-3 border-t border-band-rule">
            {[
              { label: 'Rigorously vetted', description: 'Multi-stage technical assessments and real-project trials before anyone reaches you.' },
              { label: 'Immediate execution', description: 'Operators ship production work inside your workflow from their first week.' },
              { label: 'No-fit replacement', description: 'Not the right person? We replace them at no extra cost.' },
            ].map((item) => (
              <div
                key={item.label}
                className="pt-8 pb-10 md:pb-0 md:pt-10 md:px-8 md:first:pl-0 md:last:pr-0 border-b md:border-b-0 md:border-l md:first:border-l-0 border-band-rule"
              >
                <h3 className="font-display t-h3 !text-band-ink max-w-[14ch]">{item.label}</h3>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-band-2">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <Link href="/book" className="btn btn-line group !border-band-rule !text-band-ink hover:!border-band-ink">
              Deploy your operators
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
