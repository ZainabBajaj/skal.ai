'use client';

import { Zap, Target, Database, ArrowRight, Mail, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';

import FloatingThemeToggle from '../components/FloatingThemeToggle';

/* The listing Sky actually ships from. Kept next to the page that links it so
   a store move is one edit, not a hunt. */
const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/kdokkmdbghnlgmkancohkocpmkmikfhi';

export default function SkyPage() {
  const features = [
    {
      icon: Target,
      title: 'Scored against your customer, not a generic one',
      description: 'You describe who is worth your time once. Every capture is rated against it trait by trait, and the lead shows its working so you can see why it scored what it did.',
    },
    {
      icon: Mail,
      title: 'Works where the leads actually are',
      description: 'WhatsApp, LinkedIn, email, a forum thread, a comment nobody else read. If it renders in Chrome, you can capture from it.',
    },
    {
      icon: Database,
      title: 'Your columns, not a fixed form',
      description: 'Different lists need different fields. Name a list and Sky sets up the columns to match, including dates, which quietly turn on deadline tracking.',
    },
    {
      icon: Zap,
      title: 'It tells you what is going cold',
      description: 'Leads age. Sky opens on the ones running out of time and emails you weekly about the rest, so remembering is not your job.',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Highlight',
      description: 'Select the message, post or reply that looks like a lead. Anywhere in Chrome.',
    },
    {
      step: '02',
      title: 'Capture',
      description: 'Sky reads it and pulls out who they are, what they need and how urgent it is.',
    },
    {
      step: '03',
      title: 'Score',
      description: 'It rates the lead against your ideal customer profile and files it in the right list.',
    },
    {
      step: '04',
      title: 'Work it',
      description: 'Your dashboard shows what is worth chasing first, and drafts the first message when you are ready.',
    },
  ];

  return (
    <main className="min-h-screen bg-paper">
      <Navbar />

      {/* Sky hero */}
      <section className="pt-28 lg:pt-36 pb-10 lg:pb-14">
        <div className="shell">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left: Text */}
            <div className="flex-1">
              <div className="spec">
                <span className="t-label t-label--ink">SKAL Sky</span>
                <span className="t-label">Live on the Chrome Web Store</span>
              </div>

              <h1 className="font-display t-hero text-ink mt-10 max-w-[15ch]">
                The lead was in a message you already{' '}
                <span className="accent accent-flow">read.</span>
              </h1>

              <p className="t-lead mt-8 max-w-[50ch]">
                Sky is a Chrome extension. Highlight a message, a post, a reply
                in a thread, and it pulls out who they are and what they need,
                scores it against your ideal customer, and files it. No CRM to
                fill in. No keys to bring.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href={CHROME_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-solid group"
                >
                  Add to Chrome
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
                </a>
                <a
                  href="https://sky.skal.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-line"
                >
                  See the dashboard
                </a>
              </div>

              <dl className="spec mt-14">
                <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-10">
                  {[
                    { k: 'What you get', v: 'Scored leads' },
                    { k: 'Terms', v: 'Free to start' },
                    { k: 'Setup', v: 'One click' },
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
                <text x="250" y="190" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2" opacity="0.95">CAPTURED</text>
                <text x="250" y="267" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2" opacity="0.95">SCORED</text>
                <text x="250" y="347" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2" opacity="0.95">WORTH IT</text>

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

                {/* The chip used to read "10X REVENUE", which was a number nothing
                    on the page supported. This one states what the funnel shows. */}
                <g transform="translate(400, 425)">
                  <rect x="-88" y="-18" width="176" height="36" rx="18" fill="#0f172a" />
                  <text x="0" y="6" textAnchor="middle" fill="#00E1FF" fontSize="14" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="1.5">NONE FORGOTTEN</text>
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
              Free until it is worth paying for.
            </h2>
            {/* No figures printed here on purpose. Sky's plan caps are rows in
                its own database, so the numbers live on its pricing page and
                this one links to them rather than keeping a second copy that
                can quietly go stale. */}
            <p className="t-lead max-w-[52ch]">
              Start on the free plan and capture without paying anything. The
              paid plans are priced in leads, and what a lead costs is printed
              on the button that spends it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-display t-h3 text-ink mb-3">Start free</h3>
              <p className="text-ink-2 leading-relaxed">
                A monthly allowance of leads at no cost, with no card and no trial clock running down.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-display t-h3 text-ink mb-3">Priced in leads</h3>
              <p className="text-ink-2 leading-relaxed">
                One meter, counted in the thing you actually came for. Nothing is discovered by being charged for it.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-display t-h3 text-ink mb-3">Bring no keys</h3>
              <p className="text-ink-2 leading-relaxed">
                No API key to buy, no model to choose, no bill from anyone but us. Sign in with an email code and go.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="https://sky.skal.ai/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-line group"
            >
              See the full pricing
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </section>

      {/* Install. The product shipped, so this asks for the install rather
          than for a place in a queue. The lead form that used to sit here was
          collecting names for something people can already just use. */}
      <section id="install" className="band">
        <div className="shell">
          <div className="max-w-[54ch]">
            <div className="spec">
              <span className="t-label t-label--ink">Get Sky</span>
              <span className="t-label">Chrome, free to start</span>
            </div>

            <h2 className="font-display t-h2 text-ink mt-8 max-w-[18ch]">
              It is already built. Go and use it.
            </h2>
            <p className="t-lead mt-5">
              Install it, sign in with an email code, and capture your first
              lead from whatever tab you already have open.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-solid group"
              >
                Add to Chrome
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
              </a>
              <a href="/book" className="btn btn-line">
                Talk to us first
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-ink-3">
              {[
                'No card, no trial clock',
                'No API key to bring',
                'Your rows, exportable',
              ].map((line) => (
                <div key={line} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-signal" />
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
