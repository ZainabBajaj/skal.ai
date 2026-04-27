"use client";

import Image from 'next/image';
import { Star } from 'lucide-react';

const clients = [
  { name: 'National University of Singapore', logo: '/logos/nus.jpg' },
  { name: 'Educative', logo: '/logos/educative.png' },
  { name: 'Outranker', logo: '/logos/outranker.png' },
];

// Drop the SKAL profile URL on each platform here when you have them.
const reviewPlatforms = [
  { name: 'Clutch', href: '#' },
  { name: 'Upwork', href: '#' },
  { name: 'Trustpilot', href: '#' },
  { name: 'GoodFirms', href: '#' },
];

const TrustedBy = () => {
  return (
    <section className="py-10 lg:py-12 relative bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase mb-6">
          Trusted By
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
          {clients.map((client) => (
            <div
              key={client.name}
              className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={140}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Five-star reviews */}
        <div className="mt-10 lg:mt-12 pt-8 border-t border-gray-200/70 dark:border-gray-700/50">
          <p className="text-center text-sm font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase mb-6">
            Five-star reviews
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:gap-x-12 lg:gap-x-16">
            {reviewPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Five star reviews on ${platform.name}`}
                className="group flex items-center gap-2.5 text-gray-700 dark:text-gray-300 hover:text-[#009bd7] dark:hover:text-[#00E1FF] transition-colors"
              >
                <div className="flex items-center gap-0.5 text-[#009bd7] dark:text-[#00E1FF]" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-sm">{platform.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
