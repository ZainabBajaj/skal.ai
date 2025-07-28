"use client";

import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface LogoProps {
  isScrolled?: boolean;
}

const Logo = ({ isScrolled = false }: LogoProps) => {
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent) => {
    // If we're already on the home page, just scroll to top
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    // Otherwise, the Link component will handle navigation
  };

  return (
    <div 
      className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity duration-300"
      onClick={handleLogoClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleLogoClick(e as unknown as React.MouseEvent);
        }
      }}
      aria-label="Go to homepage"
    >
      <Image 
        src="/skal-logo.png" 
        alt="SKAL Logo" 
        width={60} 
        height={60} 
        className="object-contain"
      />
      <span className={`text-2xl font-bold transition-colors duration-300 ${
        isScrolled 
          ? 'text-gray-800 dark:text-white' 
          : 'text-[#1a1a1a] dark:text-white'
      }`}>
        SKAL
      </span>
    </div>
  );
};

export default Logo; 