"use client";

import Image from 'next/image';
import { Star } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/skal-official',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/skalai_official',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      href: 'mailto:hi@skal.ai',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const productLinks = [
    { name: 'Scale', href: '/scale' },
    { name: 'Systems', href: '/systems' },
    { name: 'Services', href: '/services' },
    { name: 'Staffing', href: '/staffing' },
  ];

  const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'Stories', href: '/stories' },
    { name: 'Careers', href: '/careers' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Book a call', href: '/book' },
    { name: 'Contact', href: '#contact' },
  ];

  const legalLinks = [
    { name: 'Sitemap', href: '/sitemap' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie policy', href: '/cookie-policy' },
    { name: 'IMS Policy', href: '/ims-policy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ];

  const offices = [
    { city: 'Pembroke Pines', country: 'United States', flag: '🇺🇸', address: '130 NW 77th Ave, Pembroke Pines, FL 33024' },
    { city: 'Toronto', country: 'Canada', flag: '🇨🇦', address: '220 Duncan Mill Road, Toronto, Ontario M3B 3J5' },
    { city: 'Ajman', country: 'United Arab Emirates', flag: '🇦🇪', address: '26th Floor, Amber Gem Tower, Ajman' },
    { city: 'Lahore', country: 'Pakistan', flag: '🇵🇰', address: 'H, 21 Mateen Fatima Rd Block, Block H, Gulberg, Lahore' },
  ];

  // Drop the SKAL profile URL on each platform here when you have them.
  // Set logo to null to render the wordmark fallback below.
  const reviewPlatforms: { name: string; logo: string | null; wordmarkColor: string; href: string }[] = [
    { name: 'Clutch', logo: null, wordmarkColor: '#FF3D2E', href: '#' },
    { name: 'Upwork', logo: '/logos/upwork.svg', wordmarkColor: '#14A800', href: '#' },
    { name: 'Trustpilot', logo: '/logos/trustpilot.svg', wordmarkColor: '#00B67A', href: '#' },
    { name: 'GoodFirms', logo: null, wordmarkColor: '#F26522', href: '#' },
  ];

  return (
    <footer className="relative bg-[#f8faff] dark:bg-gray-900 py-12 overflow-hidden">
      {/* Animated Background Elements */}
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/5 dark:to-[#00E1FF]/5 rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-r from-[#00E1FF]/10 to-[#009bd7]/10 dark:from-[#00E1FF]/5 dark:to-[#009bd7]/5 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/5 dark:to-[#00E1FF]/5 rounded-full"></div>
      </div>

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8faff] via-white to-[#f0f8ff] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#009bd7]/5 dark:via-[#009bd7]/10 to-transparent"></div>
      </div>

      {/* Moving Wave Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 footer-slide" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 25 50 50 T100 50' stroke='%23009bd7' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-3 dark:opacity-5">
        <div className="absolute inset-0 footer-float" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23009bd7' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Logo />
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#009bd7] hover:text-[#00E1FF] dark:text-[#00E1FF] dark:hover:text-[#009bd7] transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-[#0f172a] dark:text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-[#009bd7] dark:hover:text-[#00E1FF] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#0f172a] dark:text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-[#009bd7] dark:hover:text-[#00E1FF] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#0f172a] dark:text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:hi@skal.ai"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#009bd7] dark:hover:text-[#00E1FF] transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hi@skal.ai
                </a>
              </li>
            </ul>

          </div>
        </div>

        {/* Offices */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office) => (
              <div key={office.country} className="text-center sm:text-left">
                <div className="text-2xl mb-3 leading-none" aria-hidden="true">{office.flag}</div>
                <span className="sr-only">{office.country}. </span>
                <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{office.address}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Five-star reviews */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-[#0f172a] dark:text-white font-semibold text-center mb-6">Five-star reviews</h3>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14 lg:gap-x-20 mb-6">
            {reviewPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Five star reviews on ${platform.name}`}
                className="group inline-flex items-center justify-center"
              >
                {platform.logo ? (
                  <div className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                    <Image
                      src={platform.logo}
                      alt={platform.name}
                      width={120}
                      height={36}
                      className="h-7 sm:h-8 w-auto object-contain"
                    />
                  </div>
                ) : (
                  <span
                    className="text-lg sm:text-xl font-extrabold tracking-tight opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: platform.wordmarkColor }}
                  >
                    {platform.name}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-center gap-1 text-[#009bd7] dark:text-[#00E1FF]" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <p className="sr-only">Five out of five stars across all four platforms.</p>
        </div>

        {/* Bottom row: left = legal links, right = license + copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-2">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 dark:text-gray-400 text-xs hover:text-[#009bd7] dark:hover:text-[#00E1FF] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="text-center sm:text-right space-y-1">
              <p className="text-gray-500 dark:text-gray-500 text-xs">
                Dubai, UAE · License No: 262305646888
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-xs">
                © {new Date().getFullYear()} SKAL. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 