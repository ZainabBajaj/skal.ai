import Link from 'next/link';
import { Map } from 'lucide-react';
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
    <main className="relative min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-10 sm:pt-32 sm:pb-12 lg:pt-36 lg:pb-14 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/20 dark:to-[#00E1FF]/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-[#009bd7]/20 dark:border-[#00E1FF]/30">
            <Map className="w-4 h-4 text-[#009bd7] dark:text-[#00E1FF]" />
            <span className="text-[#009bd7] dark:text-[#00E1FF] text-sm font-bold tracking-wider">SITEMAP</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-[#0f172a] dark:text-white mb-4 leading-snug pb-1">
            Every page on skal.ai
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            One scrollable list. Use it as a fast index when you know what you are looking for.
          </p>
        </div>
      </section>

      {/* Groups */}
      <section className="py-12 lg:py-16 relative bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {groups.map((group) => (
              <div key={group.heading}>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] dark:text-white mb-4 leading-snug pb-1">
                  {group.heading}
                </h2>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-700 dark:text-gray-300 hover:text-[#009bd7] dark:hover:text-[#00E1FF] hover:underline underline-offset-4 transition-colors"
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
