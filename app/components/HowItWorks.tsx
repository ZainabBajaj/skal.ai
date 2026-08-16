interface HowItWorksProps {
  title: string;
  steps: { step: string; title: string; description: string }[];
  /** Accepted so existing callers keep compiling; the palette is now one accent. */
  tone?: 'cyan' | 'teal';
  badge?: { label: string };
}

/* ---------------------------------------------------------------------------
   The step numbers survive here, and only here, because this genuinely is a
   sequence: you cannot be matched before you have told us what you need. The
   order is information, so it stays. Elsewhere on the site, parallel options
   are not numbered.
   ------------------------------------------------------------------------- */

export default function HowItWorks({ title, steps, badge }: HowItWorksProps) {
  return (
    <section className="band">
      <div className="shell">
        <div className="spec">
          <span className="t-label t-label--ink">{title}</span>
          <span className="t-label">{badge?.label ?? `${steps.length} steps, in order`}</span>
        </div>

        <ol className="mt-14 lg:mt-20 border-t border-rule">
          {steps.map((item) => (
            <li key={item.step} className="border-b border-rule">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-3 sm:gap-x-8 py-7">
                <div className="sm:col-span-1 t-label pt-1.5">{item.step}</div>
                <h3 className="sm:col-span-4 font-display t-h3 text-ink">{item.title}</h3>
                <p className="sm:col-span-7 text-[0.9375rem] leading-relaxed text-ink-2 self-center">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
