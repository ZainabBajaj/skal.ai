"use client";

import { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['about', 'services', 'faq', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
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
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg border-b border-gray-200/30 dark:border-gray-700/30' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo isScrolled={isScrolled} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                  activeSection === link.name.toLowerCase()
                    ? 'text-[#009bd7] bg-[#009bd7]/10 dark:bg-[#009bd7]/20'
                    : isScrolled 
                      ? 'text-gray-700 dark:text-gray-300 hover:text-[#009bd7] hover:bg-[#009bd7]/5 dark:hover:bg-[#009bd7]/10'
                      : 'text-gray-800 dark:text-gray-200 hover:text-[#009bd7] hover:bg-white/20 dark:hover:bg-gray-800/20'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] transition-all duration-300 group-hover:w-full group-hover:left-0 ${
                  activeSection === link.name.toLowerCase() ? 'w-full left-0' : ''
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
                ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' 
                : 'text-gray-800 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-800/20'
            }`}
          >
            <span className="sr-only">Open menu</span>
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
          } overflow-hidden`}
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link, index) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 transform ${
                  activeSection === link.name.toLowerCase()
                    ? 'text-[#009bd7] bg-[#009bd7]/10 dark:bg-[#009bd7]/20 border-l-4 border-[#009bd7]'
                    : 'text-gray-700 dark:text-gray-300 hover:text-[#009bd7] hover:bg-[#009bd7]/5 dark:hover:bg-[#009bd7]/10'
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
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
} 