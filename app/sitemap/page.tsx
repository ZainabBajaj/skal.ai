import Link from 'next/link';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';
import { getAllStories } from '@/lib/stories';
import { industries } from '@/lib/industries';
import { comparisons } from '@/lib/comparisons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap | SKAL',
  description: 'Every page on skal.ai in one place.',
  alternates: { canonical: 'https://skal.ai/sitemap' },
  robots: { index: true, follow: true },
};

interface Group {
  heading: string;
  links: { label: string; href: string }[];
}

export default function SitemapPage() {
  const stories = getAllStories();

  const groups: Group[] = [
    {
      heading: 'Products',
      links: [
        { label: 'Scale', href: '/scale' },
        { label: 'Systems', href: '/systems' },
        { label: 'Services', href: '/services' },
        { label: 'Staffing', href: '/staffing' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Stories', href: '/stories' },
        { label: 'Careers', href: '/careers' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Book a call', href: '/book' },
      ],
    },
    {
      heading: 'Stories',
      links: stories.map((s) => ({ label: s.title, href: `/stories/${s.slug}` })),
    },
    {
      heading: 'Industries',
      links: [
        { label: 'All industries', href: '/industries' },
        ...industries.map((i) => ({ label: `AI for ${i.name}`, href: `/industries/${i.slug}` })),
      ],
    },
    {
      heading: 'Comparisons',
      links: [
        { label: 'All comparisons', href: '/compare' },
        ...comparisons.map((c) => ({ label: `SKAL vs ${c.competitor}`, href: `/compare/${c.slug}` })),
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Cookie policy', href: '/cookie-policy' },
        { label: 'IMS Policy', href: '/ims-policy' },
        { label: 'Terms & Conditions', href: '/terms' },
      ],
    },
    {
      heading: 'Other',
      links: [
        { label: 'Home', href: '/' },
        { label: 'XML sitemap (for crawlers)', href: '/sitemap.xml' },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-paper">
      <Navbar />

      {/* Header */}
      <section className="pt-28 lg:pt-36 pb-10 lg:pb-14">
        <div className="shell">
          <div className="mb-6">
            <span className="text-signal text-sm font-bold tracking-wider">SITEMAP</span>
          </div>

          <h1 className="font-display t-hero text-ink mb-4 max-w-[18ch]">
            Every page on skal.ai
          </h1>

          <p className="text-lg text-ink-2 max-w-[54ch]">
            One scrollable list. Use it as a fast index when you know what you are looking for.
          </p>
        </div>
      </section>

      {/* Groups */}
      <section className="py-12 lg:py-16 relative bg-surface">
        <div className="shell">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {groups.map((group) => (
              <div key={group.heading}>
                <h2 className="text-xl sm:text-2xl font-bold text-ink mb-4 leading-snug pb-1">
                  {group.heading}
                </h2>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-ink-2 hover:text-signal hover:underline underline-offset-4 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
