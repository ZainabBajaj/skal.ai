'use client';

import { Zap, Target, Database, ArrowRight, Mail, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';

import FloatingThemeToggle from '../components/FloatingThemeToggle';
import { useLeadForm } from '../hooks/useLeadForm';

export default function ScalePage() {
  const { formRef, formData, status, handleChange, handleSubmit } = useLeadForm({
    name: '',
    email: '',
    company: '',
  });

  const features = [
    {
      icon: Target,
      title: 'Prospecting that finds the right people',
      description: 'AI identifies and qualifies prospects that match your exact customer profile. No list-buying. No guessing. No wasted outreach.',
    },
    {
      icon: Mail,
      title: 'Outreach that does not feel like outreach',
      description: 'Personalised multi-channel sequences across email and LinkedIn, written and sent at scale without losing the human feel.',
    },
    {
      icon: Database,
      title: 'A contact database built in-house',
      description: 'Not scraped from the same sources everyone else uses. Proprietary, continuously updated, and exclusive to SKAL Scale.',
    },
    {
      icon: Zap,
      title: 'Pipeline from day three, not month three',
      description: 'Setup takes minutes. Qualified meetings start landing on day three.',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Connect',
      description: 'Tell us who your ideal customer is. We handle everything from there.',
    },
    {
      step: '02',
      title: 'Target',
      description: 'Our AI scans millions of signals to find prospects that match your exact criteria.',
    },
    {
      step: '03',
      title: 'Engage',
      description: 'Personalised outreach goes out automatically across email and LinkedIn.',
    },
    {
      step: '04',
      title: 'Close',
      description: 'Qualified meetings land in your calendar. You show up and sell.',
    },
  ];

  return (
    <main className="min-h-screen bg-paper">
      <Navbar />

      {/* Scale Hero */}
      <section className="pt-28 lg:pt-36 pb-10 lg:pb-14">
        <div className="shell">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left: Text */}
            <div className="flex-1">
              <div className="spec">
                <span className="t-label t-label--ink">SKAL Scale</span>
                <span className="t-label">Early access</span>
              </div>

              <h1 className="font-display t-hero text-ink mt-10 max-w-[14ch]">
                Pipeline that does not depend on how hard you{' '}
                <span className="accent">hustle.</span>
              </h1>

              <p className="t-lead mt-8 max-w-[50ch]">
                SKAL Scale runs your entire outbound operation. AI prospecting,
                personalised sequences, and a proprietary contact database built
                in-house and exclusive to Scale. We handle the stack. You show up
                to the meetings.
              </p>

              <div className="mt-10">
                <a href="#waitlist" className="btn btn-solid group">
                  Join the waitlist
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
                </a>
              </div>

              <dl className="spec mt-14">
                <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-10">
                  {[
                    { k: 'What you buy', v: 'Qualified meetings' },
                    { k: 'Terms', v: 'Pay per meeting' },
                    { k: 'First pipeline', v: 'Day three' },
                  ].map(({ k, v }) => (
                    <div key={k}>
                      <dt className="t-label">{k}</dt>
                      <dd className="t-label t-label--ink mt-1">{v}</dd>
                    </div>
                  ))}
                </div>
              </dl>
            </div>

            {/* Right: Abstract Visual: Growth / Pipeline funnel */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-auto">
                <defs>
                  <linearGradient id="sc-funnel" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#009bd7" stopOpacity="0.35" />
                    <stop offset="55%" stopColor="#00E1FF" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#1DB5C5" stopOpacity="0.85" />
                  </linearGradient>
                  <linearGradient id="sc-edge" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#009bd7" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#00E1FF" stopOpacity="0.7" />
                  </linearGradient>
                  <radialGradient id="sc-deal" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                    <stop offset="40%" stopColor="#1DB5C5" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#1DB5C5" stopOpacity="0" />
                  </radialGradient>
                  <filter id="sc-soft" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="8" />
                  </filter>
                  <filter id="sc-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Ambient backlight */}
                <ellipse cx="250" cy="250" rx="180" ry="170" fill="#00E1FF" opacity="0.07" filter="url(#sc-soft)" />

                {/* Inbound prospect dots (pulsing) */}
                <g fill="#009bd7">
                  <circle cx="130" cy="80" r="3.5">
                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="180" cy="62" r="3">
                    <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.2s" begin="0.3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="250" cy="72" r="4">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="320" cy="62" r="3">
                    <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.1s" begin="0.9s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="370" cy="82" r="3.5">
                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.3s" begin="1.2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="100" cy="105" r="2.5">
                    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.6s" begin="0.4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="400" cy="105" r="2.5">
                    <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2.4s" begin="1.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="210" cy="102" r="2.8" opacity="0.6" />
                  <circle cx="290" cy="102" r="2.8" opacity="0.6" />
                </g>

                {/* Funnel body */}
                <path d="M 110 140 L 390 140 L 290 380 L 210 380 Z" fill="url(#sc-funnel)" opacity="0.95" stroke="url(#sc-edge)" strokeWidth="1.5" />

                {/* Interior stage dividers */}
                <line x1="140" y1="220" x2="360" y2="220" stroke="#FFFFFF" strokeWidth="1" opacity="0.45" />
                <line x1="170" y1="300" x2="330" y2="300" stroke="#FFFFFF" strokeWidth="1" opacity="0.4" />

                {/* Stage labels */}
                <text x="250" y="190" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2" opacity="0.95">PROSPECTS</text>
                <text x="250" y="267" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2" opacity="0.95">QUALIFIED</text>
                <text x="250" y="347" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2" opacity="0.95">DEALS</text>

                {/* Flowing white dots descending through funnel */}
                <circle r="4" fill="#FFFFFF" opacity="0">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 250 140 L 250 380" />
                  <animate attributeName="opacity" values="0;0.95;0.95;0" keyTimes="0;0.1;0.85;1" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle r="3.5" fill="#FFFFFF" opacity="0">
                  <animateMotion dur="3.5s" begin="0.8s" repeatCount="indefinite" path="M 232 140 L 235 380" />
                  <animate attributeName="opacity" values="0;0.85;0.85;0" keyTimes="0;0.1;0.85;1" dur="3.5s" begin="0.8s" repeatCount="indefinite" />
                </circle>
                <circle r="3.5" fill="#FFFFFF" opacity="0">
                  <animateMotion dur="3.2s" begin="1.4s" repeatCount="indefinite" path="M 268 140 L 265 380" />
                  <animate attributeName="opacity" values="0;0.85;0.85;0" keyTimes="0;0.1;0.85;1" dur="3.2s" begin="1.4s" repeatCount="indefinite" />
                </circle>
                <circle r="3" fill="#FFFFFF" opacity="0">
                  <animateMotion dur="2.8s" begin="0.4s" repeatCount="indefinite" path="M 200 140 L 215 380" />
                  <animate attributeName="opacity" values="0;0.75;0.75;0" keyTimes="0;0.1;0.85;1" dur="2.8s" begin="0.4s" repeatCount="indefinite" />
                </circle>
                <circle r="3" fill="#FFFFFF" opacity="0">
                  <animateMotion dur="3.1s" begin="1.8s" repeatCount="indefinite" path="M 300 140 L 285 380" />
                  <animate attributeName="opacity" values="0;0.75;0.75;0" keyTimes="0;0.1;0.85;1" dur="3.1s" begin="1.8s" repeatCount="indefinite" />
                </circle>

                {/* Deal output: glowing cluster */}
                <circle cx="250" cy="420" r="30" fill="url(#sc-deal)" />
                <circle cx="250" cy="420" r="10" fill="#1DB5C5" filter="url(#sc-glow)" />
                <circle cx="250" cy="420" r="20" fill="none" stroke="#1DB5C5" strokeWidth="1.5">
                  <animate attributeName="r" values="15;45;15" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.85;0;0.85" dur="3s" repeatCount="indefinite" />
                </circle>

                {/* 10X REVENUE callout chip */}
                <g transform="translate(400, 425)">
                  <rect x="-72" y="-18" width="144" height="36" rx="18" fill="#0f172a" />
                  <text x="0" y="6" textAnchor="middle" fill="#00E1FF" fontSize="14" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="1.5">10X REVENUE</text>
                </g>
                <path d="M 285 420 L 325 424" stroke="#1DB5C5" strokeWidth="1.5" opacity="0.55" strokeDasharray="3 3">
                  <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="2s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* What it does */}
      <section className="band bg-surface">
        <div className="shell">
          <div className="mb-14">
            <div className="mb-6">
              <span className="t-label">WHAT IT DOES</span>
            </div>
            <h2 className="font-display t-h2 text-ink mb-6 max-w-[18ch]">
              The full outbound stack. None of the grind.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group border border-rule bg-surface p-8 transition-colors duration-200 hover:border-ink"
                >

                  <div className="relative z-10">
                    <div className="mb-6 text-signal">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-signal transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-ink-2 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <HowItWorks
        title="Zero to pipeline in days."
        steps={steps}
        tone="cyan"
        badge={{ label: 'Four steps, in order' }}
      />

      {/* Pricing */}
      <section className="band bg-surface">
        <div className="shell">
          <div className="mb-12">
            <div className="mb-6">
              <span className="t-label">PRICING</span>
            </div>
            <h2 className="font-display t-h2 text-ink mb-5 max-w-[18ch]">
              You pay when it works.
            </h2>
            <p className="t-lead max-w-[52ch]">
              Pricing shared on your discovery call. Joining the waitlist is free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-display t-h3 text-ink mb-3">Pay-per-outcome</h3>
              <p className="text-ink-2 leading-relaxed">
                You pay per qualified meeting that lands on your calendar. No-shows do not count.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-display t-h3 text-ink mb-3">What counts as qualified</h3>
              <p className="text-ink-2 leading-relaxed">
                A confirmed, attended call with a decider at a B2B company who has expressed active interest.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-display t-h3 text-ink mb-3">The setup fee</h3>
              <p className="text-ink-2 leading-relaxed">
                A small one-time fee covers ICP definition, database build, and campaign launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="band">
        <div className="shell">
          <div className="max-w-[54ch] text-center">
            <div className="mb-6">
              <span className="t-label">EARLY ACCESS</span>
            </div>

            <h2 className="font-display t-h2 text-ink mb-5 max-w-[18ch]">
              Limited spots available.
            </h2>
            <p className="text-ink-2 mb-10 text-lg">
              We are onboarding a small number of founding clients to stress-test the system before we scale. Founding clients also get first access to the AI-native CRM coming next. If you are a B2B founder done doing outbound manually, this is your spot.
            </p>

            <div ref={formRef} className="border border-rule bg-surface p-8 sm:p-10">

              <form onSubmit={(e) => handleSubmit(e, { source: 'waitlist_scale', from_name: formData.name, reply_to: formData.email, website: formData.company, idea: 'SKAL Scale Early Access Waitlist', outcome: 'Early access to SKAL Scale platform', budget: 'N/A' })} className="relative z-10 space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-rule py-3 text-[0.9375rem] text-ink placeholder:text-ink-3/70 focus:outline-none focus:border-ink transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-b border-rule py-3 text-[0.9375rem] text-ink placeholder:text-ink-3/70 focus:outline-none focus:border-ink transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name (optional)"
                    className="w-full bg-transparent border-b border-rule py-3 text-[0.9375rem] text-ink placeholder:text-ink-3/70 focus:outline-none focus:border-ink transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.type === 'sending'}
                  className="btn btn-solid group w-full disabled:opacity-50"
                >
                  <span>{status.type === 'sending' ? 'Joining...' : 'Join the Waitlist'}</span>
                  <ArrowRight className={`w-5 h-5 ${status.type === 'sending' ? 'animate-pulse' : 'group-hover:translate-x-1'} transition-transform`} />
                </button>

                {status.type === 'success' && (
                  <div className="flex items-center justify-center gap-2 px-6 py-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <p className="text-green-700 dark:text-green-400 font-medium">You&apos;re on the list! We&apos;ll be in touch soon.</p>
                  </div>
                )}

                {status.type === 'error' && (
                  <div className="flex items-center justify-center gap-2 px-6 py-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                    <p className="text-red-700 dark:text-red-400 font-medium">{status.message}</p>
                  </div>
                )}
              </form>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-ink-3">
              <div className="flex items-start justify-center gap-2 text-center sm:text-left">
                <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-signal" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-start justify-center gap-2 text-center sm:text-left">
                <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-signal" />
                <span>Pricing shared on your call</span>
              </div>
              <div className="flex items-start justify-center gap-2 text-center sm:text-left">
                <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-signal" />
                <span>Founding-client pricing locked in</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
