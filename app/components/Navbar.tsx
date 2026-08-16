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
  { name: 'Scale', href: '/scale', badge: 'New' },
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
      setIsScrolled(window.scrollY > 16);

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
      if (e.key === 'Escape') { setOpenDropdown(null); setIsOpen(false); }
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
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  // Nav items read as small caps set in the fact voice — the same mono the rest
  // of the page uses for labels, so the chrome and the content agree.
  const itemBase =
    'relative px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-200';

  return (
    <nav
      aria-label="Primary"
      className={`fixed w-full z-50 bg-paper/90 backdrop-blur-md transition-[border-color] duration-300 border-b ${
        isScrolled ? 'border-rule' : 'border-transparent'
      }`}
    >
      <div className="shell">
        <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
          <Link href="/" className="flex-shrink-0" aria-label="SKAL home">
            <Logo isScrolled={isScrolled} />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center">
            {navLinks.map((link) => {
              const active = isActive(link);
              const tone = active
                ? 'text-ink'
                : 'text-ink-3 hover:text-ink';

              // Active state is a rule under the item, not a filled pill.
              const marker = (
                <span
                  aria-hidden="true"
                  className={`absolute left-3 right-3 -bottom-px h-px bg-ink transition-transform duration-200 origin-left ${
                    active ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              );

              if ('children' in link) {
                const expanded = openDropdown === link.name;
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => openGroup(link.name)}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      onClick={() => setOpenDropdown(expanded ? null : link.name)}
                      aria-haspopup="menu"
                      aria-expanded={expanded}
                      className={`${itemBase} ${tone} inline-flex items-center gap-1.5`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
                        strokeWidth={2}
                      />
                      {marker}
                    </button>

                    <div
                      className={`absolute left-0 top-full pt-3 transition-opacity duration-150 ${
                        expanded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      <div role="menu" className="min-w-[13rem] bg-surface border border-rule">
                        {link.children.map((child, i) => {
                          const childActive = pathname === child.href;
                          return (
                            <button
                              key={child.href}
                              role="menuitem"
                              onClick={() => handleNavClick(child.href)}
                              className={`block w-full text-left px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                                i > 0 ? 'border-t border-rule-faint' : ''
                              } ${childActive ? 'text-ink bg-paper' : 'text-ink-3 hover:text-ink hover:bg-paper'}`}
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
                  className={`${itemBase} ${tone} inline-flex items-center gap-2`}
                >
                  {link.name}
                  {link.badge && (
                    <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-signal border border-signal/40 px-1.5 py-px">
                      {link.badge}
                    </span>
                  )}
                  {marker}
                </button>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Link href="/book" onClick={() => setOpenDropdown(null)} className="btn btn-solid !py-2.5 !px-5 !text-[13px]">
              Book a call
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 -mr-2 text-ink"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" strokeWidth={1.6} /> : <Menu className="w-5 h-5" strokeWidth={1.6} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden border-t transition-[max-height,opacity] duration-300 ease-out ${
          isOpen ? 'max-h-[34rem] opacity-100 border-rule' : 'max-h-0 opacity-0 border-transparent'
        } bg-paper`}
      >
        <div className="shell py-2">
          {navLinks.map((link, idx) => {
            const active = isActive(link);

            if ('children' in link) {
              const expanded = openMobileGroup === link.name;
              return (
                <div key={link.name} className={idx > 0 ? 'border-t border-rule-faint' : ''}>
                  <button
                    onClick={() => setOpenMobileGroup(expanded ? null : link.name)}
                    aria-expanded={expanded}
                    className={`flex items-center justify-between w-full text-left py-4 font-mono text-[11px] uppercase tracking-[0.14em] ${
                      active ? 'text-ink' : 'text-ink-3'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`} strokeWidth={2} />
                  </button>
                  {expanded && (
                    <div className="pb-2">
                      {link.children.map((child) => (
                        <button
                          key={child.href}
                          onClick={() => handleNavClick(child.href)}
                          className={`block w-full text-left py-2.5 pl-4 font-mono text-[11px] uppercase tracking-[0.14em] ${
                            pathname === child.href ? 'text-ink' : 'text-ink-3'
                          }`}
                        >
                          {child.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`flex items-center gap-2 w-full text-left py-4 font-mono text-[11px] uppercase tracking-[0.14em] ${
                  idx > 0 ? 'border-t border-rule-faint' : ''
                } ${active ? 'text-ink' : 'text-ink-3'}`}
              >
                {link.name}
                {link.badge && (
                  <span className="text-[9px] tracking-[0.14em] text-signal border border-signal/40 px-1.5 py-px">
                    {link.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="py-4 border-t border-rule-faint">
            <Link href="/book" onClick={() => setIsOpen(false)} className="btn btn-solid w-full">
              Book a call
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
