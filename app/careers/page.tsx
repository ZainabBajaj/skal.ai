import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | SKAL',
  description: 'Open roles at SKAL. Practitioners who ship AI systems and operational infrastructure for real businesses. Offices in the US, UAE, and Pakistan.',
  alternates: { canonical: 'https://skal.ai/careers' },
  openGraph: {
    title: 'Careers | SKAL',
    description: 'Open roles for practitioners who ship AI systems and operational infrastructure.',
    url: 'https://skal.ai/careers',
    type: 'website',
  },
};

interface Role {
  title: string;
  type: string;
  location: string;
  description: string;
}

const openRoles: Role[] = [
  {
    title: 'Machine Learning Engineer',
    type: 'Full-time',
    location: 'Dubai or Lahore',
    description:
      'Ship production ML systems for our clients. Train models, tune them, integrate them into the workflows that run the business. You own the lifecycle from notebook to production, not just the experiment.',
  },
  {
    title: 'Data Scientist',
    type: 'Full-time',
    location: 'Dubai or Lahore',
    description:
      "Find the signal inside a client's data. Translate business questions into models, models into shipped product, and trade-offs into language non-technical stakeholders can act on.",
  },
  {
    title: 'Marketing',
    type: 'Full-time',
    location: 'Dubai or Lahore',
    description:
      "Own SKAL's voice in the market. Content, demand, brand, channels. Practitioner-led marketing. We want someone who ships campaigns the way our engineers ship code.",
  },
  {
    title: 'Tech Sales',
    type: 'Full-time',
    location: 'Dubai or Lahore',
    description:
      'Carry the conversation with B2B founders and operators. Run discovery calls, scope engagements, close the right ones. You understand AI well enough to be a credible counterpart on a technical call.',
  },
  {
    title: 'Internships (ML, DS, Marketing, Tech Sales)',
    type: 'Internship',
    location: 'Dubai or Lahore',
    description:
      'Open to early-career talent across our four hiring lines. You work alongside senior practitioners on real client projects from week one. Tell us which line you are interested in.',
  },
];

const values = [
  {
    title: 'Practitioners only.',
    body: 'Everyone here ships. No layer of people who only review the work of people who do the work.',
  },
  {
    title: 'Ownership end to end.',
    body: 'You will own a problem end to end and answer for what you ship. Tight loops, no committees.',
  },
  {
    title: 'AI-native by default.',
    body: 'We do not staple AI onto old workflows. We rebuild around it. Your tools should match.',
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-paper">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-10 lg:pb-14">
        <div className="shell">
          <div className="mb-6">
            <span className="t-label">CAREERS</span>
          </div>

          <h1 className="font-display t-hero text-ink mb-6 max-w-[17ch]">
            Build with{' '}
            <span className="accent">
              practitioners.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-ink-2 max-w-[54ch] leading-relaxed">
            We ship AI systems into real businesses, from offices in Dubai and Lahore.
            If you do your best work in tight loops with people who care about the outcome, we want to talk.
          </p>
        </div>
      </section>

      {/* Open roles */}
      <section className="band bg-surface">
        <div className="shell">
          <div className="">
            <h2 className="font-display t-h2 text-ink mb-8 max-w-[18ch]">
              Open roles
            </h2>

            {openRoles.length === 0 ? (
              <div className="border border-rule bg-surface p-8 sm:p-10">
                <p className="text-lg text-ink-2 mb-4">
                  No specific roles open right now.
                </p>
                <p className="text-ink-2 leading-relaxed mb-6">
                  We hire ahead of need when we meet the right person. If you ship AI systems, design agentic workflows,
                  or write code that lands in production on day one, send us a note. Tell us what you have built and what
                  you want to build next.
                </p>
                <a
                  href="mailto:info@skal.ai?subject=Working%20at%20SKAL"
                  className="btn btn-solid group disabled:opacity-50"
                >
                  <Mail className="w-4 h-4" />
                  Send us a note
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ) : (
              <ul className="space-y-4">
                {openRoles.map((role) => (
                  <li
                    key={role.title}
                    className="border border-rule bg-surface p-6 sm:p-8 transition-colors duration-200 hover:border-ink"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-ink">{role.title}</h3>
                      <div className="flex flex-wrap gap-2 text-xs font-bold tracking-wider">
                        <span className="t-label t-label--signal">
                          {role.type.toUpperCase()}
                        </span>
                        <span className="t-label">
                          {role.location.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <p className="text-ink-2 leading-relaxed mb-5">{role.description}</p>
                    <a
                      href={`mailto:info@skal.ai?subject=Application%3A%20${encodeURIComponent(role.title)}`}
                      className="inline-flex items-center gap-2 text-signal font-semibold hover:gap-3 transition-all"
                    >
                      Apply
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* What we value */}
      <section className="band">
        <div className="shell">
          <div className="">
            <h2 className="font-display t-h2 text-ink mb-8 max-w-[18ch]">
              How we work
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {values.map((v) => (
                <div key={v.title} className="border border-rule bg-surface p-6">
                  <h3 className="text-lg font-bold text-ink mb-3">{v.title}</h3>
                  <p className="text-ink-2 leading-relaxed text-sm">{v.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-signal font-semibold hover:gap-3 transition-all"
              >
                More about the team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
