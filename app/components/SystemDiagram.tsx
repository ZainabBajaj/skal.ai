/* ---------------------------------------------------------------------------
   The drawing sheet.

   ProductSplit makes a claim the page never shows: "Four surfaces. One system
   underneath." This is the underneath, drawn. Every node on it is a phrase
   already used elsewhere on the site — the four surface names and their `buys`
   values from ProductSplit, and the substrate those four descriptions all
   describe. Nothing here is a new claim, which is the whole constraint: a
   diagram that invents a capability is worse than no diagram, because it reads
   as specification rather than marketing.

   Drawn in the page's own ink. Hairlines at 1px on `--rule`, labels in the mono
   fact voice, one accent on the flow direction and nowhere else. No fills, no
   gradients, no shadow — the same rule the rest of globals.css follows.

   Two renderings of one content set:
   - lg and up: the schematic, left to right, as a signal-flow drawing.
   - below lg: the same nodes stacked as hairline rows. A 1160-unit-wide
     schematic squeezed onto a phone is a picture of a diagram, not a diagram —
     the labels go sub-legible long before the layout breaks. `display:none`
     drops the hidden one out of the accessibility tree too, so only the
     rendering actually on screen is announced.
   ------------------------------------------------------------------------- */

// The four ways in, in the order ProductSplit lists them, paired with what
// each one leaves you holding. Keep both halves in step with that file.
const surfaces = [
  { name: 'Sky',      buys: 'Leads you would have lost' },
  { name: 'Systems',  buys: 'A running system' },
  { name: 'Services', buys: 'A custom build' },
  { name: 'Staffing', buys: 'An embedded operator' },
];

// The substrate. Three stages, because that is what the surface copy describes
// between them: trained on your business, powered by the models, wired into
// what you already run.
const stages = [
  { n: '01', title: 'Your business', sub: ['context, data', 'and tone'] },
  { n: '02', title: 'Agents',        sub: ['voice, chat', 'and automation'] },
  { n: '03', title: 'Your tools',    sub: ['CRM, calendar', 'and inbox'] },
];

/* -- schematic geometry ------------------------------------------------------
   One coordinate space, stated once. The bus leaves the surface stack at its
   vertical centre (BUS_Y) and every stage box is centred on the same line, so
   the flow reads as one unbroken run. */
const VB_W = 1160;
const VB_H = 272;

const ROW_Y = [70, 100, 130, 160];              // the four surface rows
const BUS_X = 172;                              // where their leaders collect
const BUS_Y = (ROW_Y[0] + ROW_Y[3]) / 2;        // 115 — the spine's height

const BOX_W = 190;
const BOX_H = 96;
const BOX_Y = BUS_Y - BOX_H / 2;
const BOX_X = [250, 485, 720];
const GAP_END = BOX_X[2] + BOX_W;               // 910
const FAN_X = 940;                              // the spine fans back out here
const OUT_X = 968;                              // the outcomes column

/* A hairline with a chevron at its head. Markers are avoided on purpose:
   `context-stroke` is still uneven across browsers, and there are few enough
   arrows here that drawing the head is cheaper than debugging one. */
const Arrow = ({ x1, x2, y }: { x1: number; x2: number; y: number }) => (
  <g stroke="var(--signal)" strokeWidth="1" fill="none">
    <line x1={x1} y1={y} x2={x2} y2={y} />
    <polyline points={`${x2 - 5},${y - 3.5} ${x2},${y} ${x2 - 5},${y + 3.5}`} />
  </g>
);

const SystemDiagram = () => (
  <section className="band-tight">
    <div className="shell">
      <div className="spec">
        <span className="t-label t-label--ink">The system underneath</span>
        <span className="t-label">Fig. 1</span>
      </div>

      <figure className="mt-12 lg:mt-16 rise">
        {/* ---------------------------------------------------- the schematic */}
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          className="hidden lg:block w-full h-auto"
          role="img"
          aria-labelledby="sysdiag-title sysdiag-desc"
        >
          <title id="sysdiag-title">
            How SKAL&apos;s four surfaces run on one system
          </title>
          <desc id="sysdiag-desc">
            Scale, Systems, Services and Staffing all feed into the same three
            stages: your business context and tone, the agents that run on it,
            and the tools you already use. Anything the agents cannot settle
            goes to a human. What comes out is a qualified meeting, a running
            system, a custom build, or an embedded operator.
          </desc>

          {/* Column headers, each over its own hairline — the .spec device,
              carried into the drawing so the sheet matches the page. */}
          <g className="font-mono" fontSize="11" letterSpacing="0.12em" fill="currentColor">
            <g className="text-ink-3">
              <text x="0" y="26">FOUR WAYS IN</text>
              <text x={BOX_X[0]} y="26">THE SAME THREE STAGES</text>
              <text x={OUT_X} y="26">WHAT YOU HOLD</text>
            </g>
          </g>
          <g stroke="var(--rule)" strokeWidth="1">
            <line x1="0" y1="38" x2={BUS_X} y2="38" />
            <line x1={BOX_X[0]} y1="38" x2={GAP_END} y2="38" />
            <line x1={OUT_X} y1="38" x2={VB_W} y2="38" />
          </g>

          {/* The four ways in. Each name sits on its own leader, and the
              leaders collect into one vertical: four doors, one building. */}
          <g className="font-mono text-ink" fontSize="12" letterSpacing="0.06em" fill="currentColor">
            {surfaces.map((s, i) => (
              <text key={s.name} x="0" y={ROW_Y[i] + 4}>{s.name}</text>
            ))}
          </g>
          <g stroke="var(--rule)" strokeWidth="1" fill="none">
            {surfaces.map((s, i) => (
              <line key={s.name} x1="80" y1={ROW_Y[i]} x2={BUS_X} y2={ROW_Y[i]} />
            ))}
          </g>
          {/* The collector runs a shade darker than the leaders feeding it. At
              --rule it vanished and the four leaders read as unconnected. */}
          <g stroke="var(--ink-3)" strokeWidth="1" fill="none">
            <line x1={BUS_X} y1={ROW_Y[0]} x2={BUS_X} y2={ROW_Y[3]} />
          </g>
          {/* Junction nodes. Without them four equal leaders meeting one
              vertical read as an empty table rather than a connection. */}
          <g fill="var(--ink-3)">
            {surfaces.map((s, i) => (
              <circle key={s.name} cx={BUS_X} cy={ROW_Y[i]} r="2" />
            ))}
          </g>
          <Arrow x1={BUS_X} x2={BOX_X[0]} y={BUS_Y} />

          {/* The three stages. Hairline boxes on the raised surface, so they
              read as plates on the page rather than filled cards. */}
          {stages.map((st, i) => (
            <g key={st.n}>
              <rect
                x={BOX_X[i]} y={BOX_Y} width={BOX_W} height={BOX_H}
                fill="var(--surface)" stroke="var(--rule)" strokeWidth="1"
              />
              <text
                className="font-mono text-ink-3" fill="currentColor"
                fontSize="10" letterSpacing="0.12em"
                x={BOX_X[i] + 16} y={BOX_Y + 24}
              >
                {st.n}
              </text>
              <text
                className="font-display text-ink" fill="currentColor"
                fontSize="17" letterSpacing="-0.02em"
                x={BOX_X[i] + 16} y={BOX_Y + 50}
              >
                {st.title}
              </text>
              {st.sub.map((line, j) => (
                <text
                  key={line}
                  className="text-ink-2" fill="currentColor" fontSize="11"
                  x={BOX_X[i] + 16} y={BOX_Y + 68 + j * 14}
                >
                  {line}
                </text>
              ))}
            </g>
          ))}
          <Arrow x1={BOX_X[0] + BOX_W} x2={BOX_X[1]} y={BUS_Y} />
          <Arrow x1={BOX_X[1] + BOX_W} x2={BOX_X[2]} y={BUS_Y} />
          <Arrow x1={GAP_END} x2={FAN_X} y={BUS_Y} />

          {/* The spine fans back out, mirroring the way in. Four doors, one
              building, four different things to walk out with. */}
          <g stroke="var(--ink-3)" strokeWidth="1" fill="none">
            <line x1={FAN_X} y1={ROW_Y[0]} x2={FAN_X} y2={ROW_Y[3]} />
          </g>
          <g stroke="var(--rule)" strokeWidth="1" fill="none">
            {surfaces.map((s, i) => (
              <line key={s.buys} x1={FAN_X} y1={ROW_Y[i]} x2={OUT_X - 10} y2={ROW_Y[i]} />
            ))}
          </g>
          <g fill="var(--ink-3)">
            {surfaces.map((s, i) => (
              <circle key={s.buys} cx={FAN_X} cy={ROW_Y[i]} r="2" />
            ))}
          </g>

          {/* The exception path. It hangs off the agents, because that is the
              only stage that can decide it is out of its depth. */}
          <g stroke="var(--rule)" strokeWidth="1" fill="none">
            <line x1={BOX_X[1] + BOX_W / 2} y1={BOX_Y + BOX_H} x2={BOX_X[1] + BOX_W / 2} y2={225} />
            <polyline
              points={`${BOX_X[1] + BOX_W / 2 - 4},221 ${BOX_X[1] + BOX_W / 2},226 ${BOX_X[1] + BOX_W / 2 + 4},221`}
              stroke="var(--ink-3)"
            />
          </g>
          <text
            className="font-mono text-ink-3" fill="currentColor"
            fontSize="11" letterSpacing="0.12em" textAnchor="middle"
            x={BOX_X[1] + BOX_W / 2} y="248"
          >
            HUMAN, ON EXCEPTION
          </text>

          {/* What you hold. Same order as the four ways in, so the eye can
              trace a surface straight across the sheet. */}
          <g className="text-ink-2" fill="currentColor" fontSize="12">
            {surfaces.map((s, i) => (
              <text key={s.buys} x={OUT_X} y={ROW_Y[i] + 4}>{s.buys}</text>
            ))}
          </g>
        </svg>

        {/* ------------------------------------------------ stacked, on small */}
        <div className="lg:hidden">
          <div className="t-label">Four ways in</div>
          <ul className="mt-3 border-t border-rule">
            {surfaces.map((s) => (
              <li key={s.name} className="flex items-baseline justify-between gap-4 py-2.5 border-b border-rule">
                <span className="font-mono text-[13px] text-ink">{s.name}</span>
                <span className="text-[13px] text-ink-2 text-right">{s.buys}</span>
              </li>
            ))}
          </ul>

          <div className="t-label mt-9">The same three stages</div>
          <ol className="mt-3 border-t border-rule">
            {stages.map((st) => (
              <li key={st.n} className="flex items-baseline gap-4 py-3.5 border-b border-rule">
                <span className="t-label shrink-0">{st.n}</span>
                <span>
                  <span className="font-display text-[1.0625rem] text-ink block leading-tight">
                    {st.title}
                  </span>
                  <span className="text-[13px] text-ink-2">{st.sub.join(' ')}</span>
                </span>
              </li>
            ))}
          </ol>

          <p className="t-label mt-5">Human, on exception</p>
        </div>

        {/* The caption states what the drawing proves, rather than naming it
            again. The spec rule above already carries the title. */}
        <figcaption className="mt-8 text-[0.9375rem] text-ink-2 max-w-[52ch]">
          Whichever surface you start on, the three stages underneath are the
          same. That is what lets you plug in wherever you are stuck and grow
          from there.
        </figcaption>
      </figure>
    </div>
  </section>
);

export default SystemDiagram;
