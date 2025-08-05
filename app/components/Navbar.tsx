"use client";

import { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();
  const router = useRouter();
  const is99Page = pathname === '/99';
  const isNewPage = pathname === '/startup' || pathname === '/enterprise' || pathname === '/rescue';
  const isMainPage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Only track sections on main page
      if (isMainPage) {
        // Update active section based on scroll position
        const sections = ['about', 'services', 'faq', 'contact'];
        const scrollPosition = window.scrollY + 120; // Offset for navbar height
        
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

    // Initial check for active section
    if (isMainPage) {
      handleScroll();
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMainPage]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    if (is99Page || isNewPage) {
      // On any sub-page, navigate to main page with section hash
      router.push(`/${href}`);
    } else {
      // On main page, scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/98 dark:bg-gray-900/98 backdrop-blur-2xl shadow-xl border-b border-gray-200/50 dark:border-gray-700/50' 
        : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo isScrolled={isScrolled} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                  activeSection === link.name.toLowerCase() && isMainPage
                    ? 'text-[#009bd7] bg-[#009bd7]/10 dark:bg-[#009bd7]/20'
                    : isScrolled 
                      ? 'text-gray-800 dark:text-gray-200 hover:text-[#009bd7] hover:bg-[#009bd7]/5 dark:hover:bg-[#009bd7]/10'
                      : 'text-gray-800 dark:text-gray-200 hover:text-[#009bd7] hover:bg-white/20 dark:hover:bg-gray-800/20'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] transition-all duration-300 group-hover:w-full ${
                  activeSection === link.name.toLowerCase() && isMainPage ? 'w-full' : ''
                }`}></span>
              </button>
            ))}
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
              <span className={`absolute inset-0 transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'
              }`}>
                <Menu className={`w-6 h-6 transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`} />
              </span>
              <span className={`absolute inset-0 transition-all duration-300 ${
                isOpen ? 'rotate-0 translate-y-0' : 'translate-y-1'
              }`}>
                <X className={`w-6 h-6 transition-all duration-300 ${
                  isOpen ? 'opacity-100' : 'opacity-0'
                }`} />
              </span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${
            isOpen 
              ? 'max-h-96 opacity-100 translate-y-0' 
              : 'max-h-0 opacity-0 -translate-y-4'
          } overflow-hidden bg-white/98 dark:bg-gray-900/98 backdrop-blur-2xl rounded-b-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50`}
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link, index) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 transform ${
                  activeSection === link.name.toLowerCase() && isMainPage
                    ? 'text-[#009bd7] bg-[#009bd7]/10 dark:bg-[#009bd7]/20 border-l-4 border-[#009bd7]'
                    : 'text-gray-800 dark:text-gray-200 hover:text-[#009bd7] hover:bg-[#009bd7]/5 dark:hover:bg-[#009bd7]/10'
                } ${
                  isOpen ? 'translate-x-0' : 'translate-x-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {link.name}
              </button>
            ))}
            
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

      {/* Backdrop for mobile menu */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
} 