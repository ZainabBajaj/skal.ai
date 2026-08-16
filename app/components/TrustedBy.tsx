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
          {/* These rendered grayscale at 80%. Three real logos were the only
              outside colour on the page, and it was switched off. */}
          {clients.map((client) => (
            <Image
              key={client.name}
              src={client.logo}
              alt={client.name}
              width={140}
              height={60}
              className="h-11 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity duration-300 dark:brightness-110"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
