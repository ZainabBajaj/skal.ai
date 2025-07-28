"use client";

import Image from 'next/image';

interface LogoProps {
  isScrolled?: boolean;
}

const Logo = ({ isScrolled = false }: LogoProps) => {
  const handleLogoClick = () => {
    // Scroll to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
          handleLogoClick();
        }
      }}
      aria-label="Go to top of page"
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