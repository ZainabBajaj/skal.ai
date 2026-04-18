"use client";

import Image from 'next/image';

const clients = [
  { name: 'National University of Singapore', logo: '/logos/nus.jpg' },
  // Add more clients here as you get logos:
  // { name: 'Company Name', logo: '/logos/company.png' },
];

const TrustedBy = () => {
  return (
    <section className="py-16 lg:py-20 relative bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase mb-10">
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
      </div>
    </section>
  );
};

export default TrustedBy;
