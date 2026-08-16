"use client";

import Image from 'next/image';

const clients = [
  { name: 'National University of Singapore', logo: '/logos/nus.jpg' },
  { name: 'Educative', logo: '/logos/educative.png' },
  { name: 'Outranker', logo: '/logos/outranker.png' },
];

const TrustedBy = () => {
  return (
    <section className="band-tight bg-surface">
      <div className="shell">
        <div className="spec">
          <span className="t-label t-label--ink">Trusted by</span>
          <span className="t-label">{clients.length} organisations</span>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-14 gap-y-8">
          {clients.map((client) => (
            <Image
              key={client.name}
              src={client.logo}
              alt={client.name}
              width={140}
              height={60}
              className="h-10 w-auto object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300 dark:brightness-0 dark:invert dark:opacity-70 dark:hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
