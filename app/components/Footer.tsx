"use client";

import Image from 'next/image';
import Link from 'next/link';
import Logo from './Logo';

const productLinks = [
  { name: 'Scale', href: '/scale' },
  { name: 'Systems', href: '/systems' },
  { name: 'Services', href: '/services' },
  { name: 'Staffing', href: '/staffing' },
];

const companyLinks = [
  { name: 'About', href: '/about' },
  { name: 'Stories', href: '/stories' },
  { name: 'Industries', href: '/industries' },
  { name: 'Compare', href: '/compare' },
  { name: 'Careers', href: '/careers' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Book a call', href: '/book' },
];

const legalLinks = [
  { name: 'Sitemap', href: '/sitemap' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'Cookies', href: '/cookie-policy' },
  { name: 'IMS Policy', href: '/ims-policy' },
  { name: 'Terms', href: '/terms' },
];

const offices = [
  { country: 'United States', city: 'Pembroke Pines', address: '130 NW 77th Ave, Pembroke Pines, FL 33024' },
  { country: 'United Arab Emirates', city: 'Ajman', address: '26th Floor, Amber Gem Tower, Ajman' },
  { country: 'Pakistan', city: 'Lahore', address: 'H, 21 Mateen Fatima Rd Block, Block H, Gulberg, Lahore' },
];

// Add href when a real profile URL exists; until then the logo renders as a
// non-clickable trust mark.
const reviewPlatforms: { name: string; logo: string; href?: string }[] = [
  { name: 'Clutch', logo: '/logos/clutch.jpeg' },
  { name: 'Upwork', logo: '/logos/upwork.svg' },
  { name: 'Trustpilot', logo: '/logos/trustpilot.svg' },
  { name: 'GoodFirms', logo: '/logos/goodfirms.png' },
];

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/skal-official',
    path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/skalai_official',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@skal-ai',
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
];

function LinkColumn({ label, links }: { label: string; links: { name: string; href: string }[] }) {
  return (
    <div>
      <h3 className="t-label t-label--ink">{label}</h3>
      <ul className="mt-5 space-y-2.5">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="text-sm text-ink-2 hover:text-signal transition-colors">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-paper border-t border-rule">
      <div className="shell py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-y-12 lg:gap-x-8">
          <div className="col-span-2 lg:col-span-4">
            <Logo />
            <p className="mt-6 text-sm leading-relaxed text-ink-2 max-w-[30ch]">
              AI-native operational infrastructure for companies that need it
              running, not demonstrated.
            </p>
            <a href="mailto:hi@skal.ai" className="link-quiet inline-block mt-6 text-sm">
              hi@skal.ai
            </a>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <LinkColumn label="Products" links={productLinks} />
          </div>
          <div className="lg:col-span-2">
            <LinkColumn label="Company" links={companyLinks} />
          </div>

          <div className="col-span-2 lg:col-span-3">
            <h3 className="t-label t-label--ink">Reviews</h3>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
              {reviewPlatforms.map((platform) => {
                const logo = (
                  <Image
                    src={platform.logo}
                    alt={`Five star reviews on ${platform.name}`}
                    width={120}
                    height={32}
                    className="h-7 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 dark:brightness-110"
                  />
                );
                return platform.href ? (
                  <a key={platform.name} href={platform.href} target="_blank" rel="noopener noreferrer"
                     aria-label={`Five star reviews on ${platform.name}`}>{logo}</a>
                ) : (
                  <span key={platform.name} aria-label={`${platform.name} reviews`}>{logo}</span>
                );
              })}
            </div>
            <p className="mt-4 t-label">Five out of five across all four</p>

            <h3 className="t-label t-label--ink mt-10">Follow</h3>
            <div className="mt-5 flex gap-5">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="text-ink-3 hover:text-signal transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Offices — a fact row, so it is set in the fact voice. */}
        <div className="mt-16 pt-8 border-t border-rule grid grid-cols-1 sm:grid-cols-3 gap-8">
          {offices.map((office) => (
            <div key={office.country}>
              <div className="t-label t-label--ink">{office.country}</div>
              <div className="mt-2 text-sm text-ink-2 leading-relaxed">{office.address}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-rule flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link key={link.name} href={link.href} className="t-label hover:text-ink transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="t-label sm:text-right">
            Dubai, UAE · License 262305646888 · © {new Date().getFullYear()} SKAL
          </div>
        </div>
      </div>
    </footer>
  );
}
