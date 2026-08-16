'use client';

import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import { SystemsVisual } from '../components/SurfaceVisuals';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';

const BOOK_URL = '/book';

const systems = [
  {
    name: 'Sales System',
    tagline: 'Automated outbound infrastructure for your pipeline.',
    body: 'Automated outreach, lead qualification, and CRM updates. Keeps your pipeline moving 24/7 with no additional headcount.',
    bullets: [
      'Cold + warm outreach on voice, chat, email',
      'Qualifies leads against your ICP',
      'Logs everything to HubSpot, Salesforce, or your CRM',
      'Books meetings straight to your calendar',
    ],
  },
  {
    name: 'Support System',
    tagline: 'Support infrastructure that scales without increasing headcount.',
    body: 'Resolves tickets, answers product questions, and escalates the hard ones to your team. Trained on your docs and tone.',
    bullets: [
      'Resolves common tickets end-to-end',
      'Trained on your knowledge base + macros',
      'Smart handoff to humans with full context',
      'Plugs into Zendesk, Intercom, Freshdesk',
    ],
  },
  {
    name: 'Receptionist System',
    tagline: 'Always-on inbound operations.',
    body: 'Inbound calls, scheduling, and routing handled instantly. In your brand voice, in every language your customers speak.',
    bullets: [
      'Answers every call, no hold music',
      'Books and reschedules straight to calendar',
      'Multi-language out of the box',
      'Routes urgent calls to the right person',
    ],
  },
];

export default function SystemsPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <PageHero
        visual={<SystemsVisual />}
        eyebrow="SKAL Systems"
        meta="Live in one week"
        title="Handles the work that"
        emphasis="never stops."
        lead={
          <>
            Voice, chat, and workflow automation built around your business.
            Customer support, inbound calls, lead qualification, and operational
            tasks handled around the clock. Powered by Claude, ElevenLabs, and
            production workflow infrastructure including n8n, Make, and Zapier.
          </>
        }
        primary={{ href: BOOK_URL, label: 'Deploy your first system' }}
        secondary={{ href: '#systems', label: 'See the systems' }}
        facts={[
          { k: 'What you buy', v: 'A running system' },
          { k: 'Time to live', v: 'One week' },
          { k: 'Engineering needed', v: 'None on your side' },
        ]}
      />

      {/* Systems catalog */}
      <section id="systems" className="band bg-surface">
        <div className="shell">
          <div className="spec">
            <span className="t-label t-label--ink">Pick the system you need</span>
            <span className="t-label">{systems.length} packaged systems</span>
          </div>

          <h2 className="font-display t-h2 text-ink mt-8 max-w-[17ch]">
            Each one packaged for a single operational role.
          </h2>
          <p className="t-lead mt-5 max-w-[46ch]">
            Trained, integrated, and ready to deploy. Nothing here needs a
            development cycle on your side.
          </p>

          <ul className="mt-14 lg:mt-20 border-t border-rule">
            {systems.map(({ name, tagline, body, bullets }) => (
              <li key={name} className="border-b border-rule">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-8 py-10 lg:py-12">
                  <div className="lg:col-span-4">
                    <h3 className="font-display t-h3 text-ink">{name}</h3>
                    <p className="text-ink-2 text-[0.9375rem] leading-relaxed mt-2 max-w-[30ch]">
                      {tagline}
                    </p>
                  </div>

                  <div className="lg:col-span-4">
                    <p className="text-[0.9375rem] leading-relaxed text-ink-2">{body}</p>
                    <Link href={BOOK_URL} className="group inline-flex items-center gap-2 mt-6 font-mono text-[12px] uppercase tracking-[0.12em] text-ink hover:text-signal transition-colors">
                      Talk to us
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
                    </Link>
                  </div>

                  <ul className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-rule pt-5 lg:pt-0 lg:pl-8">
                    {bullets.map((b) => (
                      <li key={b} className="flex gap-3 py-1.5 text-[0.875rem] leading-relaxed text-ink-2">
                        <Check className="w-3.5 h-3.5 mt-1 shrink-0 text-signal" strokeWidth={2} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-[0.9375rem] text-ink-2">
            Need something different?{' '}
            <Link href="/services" className="link-quiet">See our custom builds</Link>.
          </p>
        </div>
      </section>

      {/* Customisation + the cost argument */}
      <section className="band">
        <div className="shell">
          <div className="spec">
            <span className="t-label t-label--ink">Built around your business</span>
            <span className="t-label">Every system is a starting point</span>
          </div>

          <div className="mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-y-14 lg:gap-x-16">
            <div className="lg:col-span-7">
              <h2 className="font-display t-h2 text-ink max-w-[15ch]">
                We shape it to how you actually work.
              </h2>
              <p className="t-lead mt-5 max-w-[44ch]">
                Voice, knowledge, tools, and escalation rules are all yours to
                set. The packaged system is where we start, not where we stop.
              </p>

              <dl className="mt-10 border-t border-rule">
                {[
                  { title: 'Voice and chat', body: 'Phone, web chat, WhatsApp. Shared context across every customer interaction.' },
                  { title: 'Persona and tone', body: 'Name, voice, language, level of formality. Your brand, not ours.' },
                  { title: 'Knowledge and tools', body: 'Connect your docs, CRM, calendar, payment, and ticketing. They use what your team uses.' },
                ].map(({ title, body }) => (
                  <div key={title} className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-2 py-5 border-b border-rule">
                    <dt className="t-label t-label--ink">{title}</dt>
                    <dd className="sm:col-span-2 text-[0.9375rem] leading-relaxed text-ink-2">{body}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* The cost argument, stated as a comparison rather than a glowing
                panel. No invented figures: these are the terms, not a price. */}
            <div className="lg:col-span-5 lg:border-l lg:border-rule lg:pl-16">
              <span className="t-label">The math</span>
              <h3 className="font-display t-h3 text-ink mt-4 max-w-[18ch]">
                Support teams scale linearly. Systems do not.
              </h3>

              <dl className="mt-8 border-t border-rule">
                <div className="py-5 border-b border-rule">
                  <dt className="t-label">A human hire</dt>
                  <dd className="mt-2 text-[0.9375rem] text-ink-2">
                    Eight hours a day, plus benefits, plus ramp-up.
                  </dd>
                </div>
                <div className="py-5 border-b border-rule">
                  <dt className="t-label t-label--ink">A SKAL system</dt>
                  <dd className="mt-2 text-[0.9375rem] text-ink">
                    Around the clock, no benefits, trained in days.
                  </dd>
                </div>
              </dl>

              <Link href={BOOK_URL} className="btn btn-solid group mt-8">
                Get a quote for your use case
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
