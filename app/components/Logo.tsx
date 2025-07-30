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
      className="flex items-center gap-1 sm:gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-300"
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
        width={40} 
        height={40} 
        className="object-contain w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
        priority
      />
      <span className={`text-lg sm:text-xl lg:text-2xl font-bold transition-colors duration-300 ${
        isScrolled 
          ? 'text-gray-900 dark:text-white' 
          : 'text-gray-900 dark:text-white'
      }`}>
        SKAL
      </span>
    </div>
  );
};

export default Logo; 