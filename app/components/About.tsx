"use client";

/* ---------------------------------------------------------------------------
   The stats used to count up from zero on scroll. The animation drew the eye to
   the number rather than to what it means, and a counting digit is unreadable
   until it stops. They are set as a plain fact row now, in the fact voice.

   The figures themselves are unchanged from what the site already claimed.
   ------------------------------------------------------------------------- */

const stats = [
  { value: '1,000+', label: 'Projects delivered' },
  { value: '100+', label: 'Clients' },
  { value: '5+', label: 'Years in production' },
];

export default function About() {
  return (
    <section id="about" className="band">
      <div className="shell">
        <div className="spec">
          <span className="t-label t-label--ink">About us</span>
          <span className="t-label">AI-native operational infrastructure</span>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-12 items-end">
          <h2 className="lg:col-span-7 font-display t-h2 text-ink max-w-[16ch]">
            Building AI-native operational infrastructure.
          </h2>
          <p className="lg:col-span-5 t-lead max-w-[42ch]">
            We design and deploy AI systems, automation infrastructure, and
            operational tooling for modern B2B companies.
          </p>
        </div>

        <dl className="mt-14 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 border-t border-rule">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0 border-b sm:border-b-0 sm:border-l sm:first:border-l-0 border-rule"
            >
              <dt className="t-label">{label}</dt>
              <dd className="font-display text-[clamp(2rem,4vw,3rem)] leading-none text-ink mt-3">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
