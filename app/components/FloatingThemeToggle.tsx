"use client";

import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useCookieConsent } from '../context/CookieConsentContext';

export default function FloatingThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isPressed, setIsPressed] = useState(false);
  const { consent, hydrated } = useCookieConsent();
  const liftForBanner = hydrated && consent === null ? '-translate-y-32 sm:-translate-y-20' : '';

  const themes = [
    { value: 'light' as const, icon: Sun, label: 'Light' },
    { value: 'dark' as const, icon: Moon, label: 'Dark' },
  ];

  const currentTheme = themes.find(t => t.value === theme) || themes[0];
  const CurrentIcon = currentTheme.icon;

  const handleClick = () => {
    setIsPressed(true);
    
    // Toggle between light and dark only
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    
    // Reset pressed state after animation
    setTimeout(() => setIsPressed(false), 100);
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-transform duration-300 ${liftForBanner}`}>
      <button
        onClick={handleClick}
        className={`
          group relative w-14 h-14 rounded-full shadow-lg transition-all duration-150
          ${isPressed ? 'scale-95' : 'scale-100'}
          ${resolvedTheme === 'dark' 
            ? 'bg-gray-800 hover:bg-gray-700 text-white shadow-gray-900/50' 
            : 'bg-white hover:bg-gray-50 text-gray-800 shadow-gray-900/20'
          }
          border-2 border-transparent hover:border-[#009bd7]/30
        `}
        aria-label={`Switch to ${currentTheme?.label} theme`}
      >
        {/* Background glow effect */}
        <div className={`
          absolute inset-0 rounded-full transition-all duration-150
          ${resolvedTheme === 'dark' 
            ? 'bg-gradient-to-r from-[#009bd7]/20 to-[#00E1FF]/20' 
            : 'bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10'
          }
          ${isPressed ? 'opacity-50' : 'opacity-0 group-hover:opacity-100'}
        `} />
        
        {/* Icon */}
        <div className="relative flex items-center justify-center w-full h-full">
          <CurrentIcon className="w-6 h-6 transition-all duration-150" />
        </div>
        
        {/* Ripple effect on click */}
        {isPressed && (
          <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
        )}
        
        {/* Tooltip */}
        <div className="
          absolute right-full mr-3 top-1/2 -translate-y-1/2 
          px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 
          text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 
          transition-opacity duration-150 pointer-events-none whitespace-nowrap
          shadow-lg
        ">
          {currentTheme?.label} Mode
          <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 dark:border-l-gray-100 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
        </div>
      </button>
    </div>
  );
} 