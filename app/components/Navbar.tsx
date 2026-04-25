"use client";

import { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

type NavItem =
  | { name: string; href: string; badge?: string }
  | { name: string; children: { name: string; href: string }[] };

const navLinks: NavItem[] = [
  { name: 'Scale', href: '/scale', badge: 'NEW' },
  {
    name: 'Solutions',
    children: [
      { name: 'Systems', href: '/systems' },
      { name: 'Services', href: '/services' },
      { name: 'Staffing', href: '/staffing' },
    ],
  },
  { name: 'Stories', href: '/stories' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const dropdownCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isMainPage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (isMainPage) {
        const sections = ['faq', 'contact'];
        const scrollPosition = window.scrollY + 120;

        let current = '';
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const elementTop = element.offsetTop;
            const elementBottom = elementTop + element.offsetHeight;
            if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
              current = section;
              break;
            }
          }
        }
        setActiveSection(current);
      }
    };

    if (isMainPage) handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMainPage]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenDropdown(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setOpenDropdown(null);

    if (href.startsWith('/')) {
      router.push(href);
      return;
    }

    if (isMainPage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      router.push(`/${href}`);
    }
  };

  const isChildActive = (children: { href: string }[]) =>
    children.some((c) => pathname === c.href);

  const isActive = (item: NavItem) => {
    if ('children' in item) return isChildActive(item.children);
    if (item.href.startsWith('/')) return pathname === item.href;
    return activeSection === item.name.toLowerCase() && isMainPage;
  };

  const openGroup = (name: string) => {
    if (dropdownCloseTimer.current) clearTimeout(dropdownCloseTimer.current);
    setOpenDropdown(name);
  };
  const scheduleClose = () => {
    if (dropdownCloseTimer.current) clearTimeout(dropdownCloseTimer.current);
    dropdownCloseTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/98 dark:bg-gray-900/98 backdrop-blur-2xl shadow-xl border-b border-gray-200/50 dark:border-gray-700/50'
          : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo isScrolled={isScrolled} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link);
              const baseClasses = `relative px-4 py-2 rounded-lg font-medium transition-colors duration-200 group ${
                active
                  ? 'text-[#009bd7] bg-[#009bd7]/10 dark:bg-[#009bd7]/20'
                  : isScrolled
                    ? 'text-gray-800 dark:text-gray-200 hover:text-[#009bd7] hover:bg-[#009bd7]/5 dark:hover:bg-[#009bd7]/10'
                    : 'text-gray-800 dark:text-gray-200 hover:text-[#009bd7] hover:bg-white/20 dark:hover:bg-gray-800/20'
              }`;
              const underline = (
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] transition-all duration-300 group-hover:w-full ${
                    active ? 'w-full' : ''
                  }`}
                ></span>
              );

              if ('children' in link) {
                const isOpenDropdown = openDropdown === link.name;
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => openGroup(link.name)}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      onClick={() => setOpenDropdown(isOpenDropdown ? null : link.name)}
                      aria-haspopup="menu"
                      aria-expanded={isOpenDropdown}
                      className={`${baseClasses} inline-flex items-center gap-1`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${isOpenDropdown ? 'rotate-180' : ''}`}
                      />
                      {underline}
                    </button>

                    <div
                      className={`absolute left-0 top-full pt-2 transition-all duration-150 ${
                        isOpenDropdown
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 -translate-y-1 pointer-events-none'
                      }`}
                    >
                      <div
                        role="menu"
                        className="min-w-[200px] bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200/60 dark:border-gray-700/60 py-2"
                      >
                        {link.children.map((child) => {
                          const childActive = pathname === child.href;
                          return (
                            <button
                              key={child.href}
                              role="menuitem"
                              onClick={() => handleNavClick(child.href)}
                              className={`block w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                                childActive
                                  ? 'text-[#009bd7] bg-[#009bd7]/10 dark:bg-[#009bd7]/20'
                                  : 'text-gray-700 dark:text-gray-200 hover:text-[#009bd7] hover:bg-[#009bd7]/5 dark:hover:bg-[#009bd7]/10'
                              }`}
                            >
                              {child.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`${baseClasses} inline-flex items-center gap-2`}
                >
                  {link.name}
                  {link.badge && (
                    <span className="text-[10px] font-bold tracking-wider px-1.5 py-0.5 rounded bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white">
                      {link.badge}
                    </span>
                  )}
                  {underline}
                </button>
              );
            })}
          </div>

          {/* Desktop Right Side - CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => handleNavClick('#contact')}
              className="group relative px-6 py-3 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#009bd7]/25 hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative flex items-center">
                Get Started
                <ChevronDown className="w-4 h-4 ml-2 group-hover:rotate-180 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden relative p-2 rounded-lg transition-all duration-300 ${
              isScrolled
                ? 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                : 'text-gray-800 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-800/20'
            }`}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'}`}>
                <Menu className={`w-6 h-6 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              </span>
              <span className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-0 translate-y-0' : 'translate-y-1'}`}>
                <X className={`w-6 h-6 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
              </span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${
            isOpen
              ? 'max-h-[32rem] opacity-100 translate-y-0'
              : 'max-h-0 opacity-0 -translate-y-4'
          } overflow-hidden bg-white/98 dark:bg-gray-900/98 backdrop-blur-2xl rounded-b-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50`}
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => {
              const active = isActive(link);

              if ('children' in link) {
                const expanded = openMobileGroup === link.name;
                return (
                  <div key={link.name}>
                    <button
                      onClick={() => setOpenMobileGroup(expanded ? null : link.name)}
                      aria-expanded={expanded}
                      className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                        active
                          ? 'text-[#009bd7] bg-[#009bd7]/10 dark:bg-[#009bd7]/20 border-l-4 border-[#009bd7]'
                          : 'text-gray-800 dark:text-gray-200 hover:text-[#009bd7] hover:bg-[#009bd7]/5 dark:hover:bg-[#009bd7]/10'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
                    </button>
                    {expanded && (
                      <div className="pl-3 mt-1 space-y-1">
                        {link.children.map((child) => {
                          const childActive = pathname === child.href;
                          return (
                            <button
                              key={child.href}
                              onClick={() => handleNavClick(child.href)}
                              className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                childActive
                                  ? 'text-[#009bd7] bg-[#009bd7]/10 dark:bg-[#009bd7]/20'
                                  : 'text-gray-600 dark:text-gray-300 hover:text-[#009bd7] hover:bg-[#009bd7]/5 dark:hover:bg-[#009bd7]/10'
                              }`}
                            >
                              {child.name}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`flex items-center gap-2 w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                    active
                      ? 'text-[#009bd7] bg-[#009bd7]/10 dark:bg-[#009bd7]/20 border-l-4 border-[#009bd7]'
                      : 'text-gray-800 dark:text-gray-200 hover:text-[#009bd7] hover:bg-[#009bd7]/5 dark:hover:bg-[#009bd7]/10'
                  }`}
                >
                  {link.name}
                  {link.badge && (
                    <span className="text-[10px] font-bold tracking-wider px-1.5 py-0.5 rounded bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}

            <div className="pt-2">
              <button
                onClick={() => handleNavClick('#contact')}
                className="block w-full px-4 py-3 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white rounded-lg font-semibold text-center transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-[#0f172a]/30 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
