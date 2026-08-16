"use client";

interface Pillar {
  headline: string;
  body: string;
  proof: string[];
}

const pillars: Pillar[] = [
  {
    headline: 'Practitioners, not generalists.',
    body: 'We have been building AI inside real businesses for five years, not since the hype cycle started. Our founder graduated from LSE with one of the highest marks in the world in Data Science and Business Analytics, and designed a course on it at NUS.',
    proof: ['LSE Letter of Commendation', 'NUS course author', 'Five years in production'],
  },
  {
    headline: 'Days, not roadmaps.',
    body: 'Most agencies disappear into a three month plan. We do not. Systems go live in one week. Scale opens pipeline by day three. Staffing engineers ship production code in their first week.',
    proof: ['Systems live in one week', 'Pipeline by day three', 'Code in week one'],
  },
  {
    headline: 'Skin in the game.',
    body: 'We earn our keep. With Scale you pay only when a meeting shows up. With Staffing we replace any engineer at no cost. With Systems, monthly performance reviews keep us honest.',
    proof: ['Pay per meeting', 'No-fit replacement', 'Monthly reviews'],
  },
];

const WhySkal = () => {
  return (
    <section className="band bg-surface">
      <div className="shell">
        <div className="spec">
          <span className="t-label t-label--ink">Why teams pick us</span>
          <span className="t-label">Three reasons</span>
        </div>

        <h2 className="font-display t-h2 text-ink mt-8 max-w-[18ch]">
          What actually matters when you choose where to spend.
        </h2>

        {/* Columns divided by the same hairline as everything else — no cards,
            no shadows, no filled tiles. */}
        <div className="mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-3 border-t border-rule">
          {pillars.map(({ headline, body, proof }) => (
            <div
              key={headline}
              className="flex flex-col pt-8 pb-10 md:pb-10 md:pt-10 md:px-8 md:first:pl-0 md:last:pr-0 border-b md:border-b-0 md:border-l md:first:border-l-0 border-rule"
            >
              <h3 className="font-display t-h3 text-ink max-w-[16ch]">{headline}</h3>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-2">{body}</p>

              {/* Pushed to the floor so the three proof blocks line up even
                  when the bodies above them differ in length. */}
              <ul className="mt-auto pt-7 space-y-2">
                {proof.map((item) => (
                  <li key={item} className="t-label">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySkal;
