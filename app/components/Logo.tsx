"use client";

import Image from 'next/image';

interface LogoProps {
  isScrolled?: boolean;
}

const Logo = ({ isScrolled = false }: LogoProps) => {
  return (
    <div className="flex items-center gap-1">
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