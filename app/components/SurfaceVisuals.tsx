"use client";

import { useReducedMotion } from 'framer-motion';

/* ---------------------------------------------------------------------------
   One illustration per surface page.

   The previous site drew each of these and the redesign dropped them, which is
   most of why the pages read as walls of text. These are the same three ideas
   redrawn rather than copied across: the old ones were built from the old
   palette and a stack of gradient fills, and pasting them in would put two
   design systems on one page.

   The rules they follow are the page's own. Hairlines on `--rule`, the brand
   only where something is live or moving, no fill that is not carrying meaning.
   Each is aria-hidden — every one of them restates a claim that is already
   written in text beside it, so a screen reader gains nothing and loses time.

   SMIL is not covered by the prefers-reduced-motion rule in globals.css, so the
   check is done here and the still version keeps every shape.
   ------------------------------------------------------------------------- */

const BOX = 'w-full h-auto';

/* --- Systems: a conversation being handled, turn by turn ------------------ */
export function SystemsVisual() {
  const still = useReducedMotion();
  const turns = [
    { y: 60, w: 150, them: true },
    { y: 112, w: 190, them: false },
    { y: 164, w: 120, them: true },
    { y: 216, w: 205, them: false },
  ];

  return (
    <svg viewBox="0 0 420 400" fill="none" aria-hidden="true" className={BOX}>
      {/* Each turn fades in once and stays. An earlier version looped, so the
          conversation kept wiping itself back to nothing every six seconds,
          which reads as a rendering fault rather than as a thread arriving.
          The bubble and its rules fade as one group for the same reason: when
          only the box animated, the later turns sat on screen as bare lines. */}
      {turns.map(({ y, w, them }, i) => {
        const x = them ? 20 : 400 - w;
        return (
          <g key={y} opacity={still ? 1 : 0}>
            {!still && (
              <animate
                attributeName="opacity"
                from="0"
                to="1"
                dur="0.45s"
                begin={`${0.35 + i * 0.45}s`}
                fill="freeze"
              />
            )}
            <rect
              x={x}
              y={y}
              width={w}
              height="34"
              rx="3"
              fill={them ? 'var(--surface)' : 'rgb(0 155 215 / .10)'}
              stroke={them ? 'var(--rule)' : 'rgb(0 155 215 / .45)'}
              strokeWidth="1"
            />
            {/* Rules stand in for the words. Never real sentences: a legible
                transcript is a claim about a conversation that never happened. */}
            <g stroke={them ? 'var(--ink-3)' : 'var(--signal)'} strokeWidth="1" opacity=".45">
              <line x1={x + 12} y1={y + 13} x2={x + w - 24} y2={y + 13} />
              <line x1={x + 12} y1={y + 22} x2={x + w * 0.55} y2={y + 22} />
            </g>
          </g>
        );
      })}

      {/* The handler, always on. */}
      <g transform="translate(210, 320)">
        <circle r="30" fill="none" stroke="var(--rule)" strokeWidth="1" />
        <circle r="7" fill="var(--signal)">
          {!still && <animate attributeName="r" values="7;9;7" dur="2.4s" repeatCount="indefinite" />}
        </circle>
        {!still && (
          <circle r="30" fill="none" stroke="var(--signal)" strokeWidth="1">
            <animate attributeName="r" values="30;58;30" dur="3.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values=".6;0;.6" dur="3.4s" repeatCount="indefinite" />
          </circle>
        )}
        <text
          className="font-mono text-ink-3"
          fill="currentColor"
          fontSize="10"
          letterSpacing="0.12em"
          textAnchor="middle"
          y="52"
        >
          ANSWERING
        </text>
      </g>
    </svg>
  );
}

/* --- Services: parts arriving and settling into a build ------------------- */
export function ServicesVisual() {
  const still = useReducedMotion();
  const blocks = [
    { x: 40, y: 250, w: 150, h: 46, d: '0s' },
    { x: 210, y: 250, w: 110, h: 46, d: '0.5s' },
    { x: 40, y: 188, w: 110, h: 46, d: '1s' },
    { x: 170, y: 188, w: 150, h: 46, d: '1.5s' },
    { x: 90, y: 126, w: 180, h: 46, d: '2s' },
  ];

  return (
    <svg viewBox="0 0 360 380" fill="none" aria-hidden="true" className={BOX}>
      {/* The ground it is built on. */}
      <line x1="20" y1="312" x2="340" y2="312" stroke="var(--ink-3)" strokeWidth="1" />

      {blocks.map(({ x, y, w, h, d }) => (
        <g key={`${x}-${y}`}>
          <rect
            x={x}
            y={y}
            width={w}
            height={h}
            rx="2"
            fill="var(--surface)"
            stroke="var(--rule)"
            strokeWidth="1"
          >
            {!still && (
              <>
                <animate attributeName="opacity" values="0;1" dur="0.5s" begin={d} fill="freeze" />
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,-26; 0,0"
                  dur="0.6s"
                  begin={d}
                  fill="freeze"
                />
              </>
            )}
          </rect>
          <line
            x1={x + 14}
            y1={y + h / 2}
            x2={x + w - 14}
            y2={y + h / 2}
            stroke="var(--ink-3)"
            strokeWidth="1"
            opacity=".4"
          >
            {!still && <animate attributeName="opacity" values="0;.4" dur="0.5s" begin={d} fill="freeze" />}
          </line>
        </g>
      ))}

      {/* The one piece that did not exist yet, so it is drawn, not stocked. */}
      <rect
        x="90"
        y="126"
        width="180"
        height="46"
        rx="2"
        fill="none"
        stroke="var(--signal)"
        strokeWidth="1.5"
        strokeDasharray="5 4"
      >
        {!still && <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1.6s" repeatCount="indefinite" />}
      </rect>

      <text
        className="font-mono text-ink-3"
        fill="currentColor"
        fontSize="10"
        letterSpacing="0.12em"
        x="180"
        y="350"
        textAnchor="middle"
      >
        BUILT TO FIT
      </text>
    </svg>
  );
}

/* --- Staffing: vetted people, placed around your team --------------------- */
export function StaffingVisual() {
  const still = useReducedMotion();
  const spokes = [
    { a: -90, vetted: true },
    { a: -30, vetted: true },
    { a: 30, vetted: true },
    { a: 90, vetted: true },
    { a: 150, vetted: false },
    { a: -150, vetted: true },
  ];
  const R = 120;

  return (
    <svg viewBox="0 0 400 400" fill="none" aria-hidden="true" className={BOX}>
      <g transform="translate(200, 190)">
        {spokes.map(({ a, vetted }, i) => {
          const rad = (a * Math.PI) / 180;
          const x = Math.cos(rad) * R;
          const y = Math.sin(rad) * R;
          return (
            <g key={a}>
              <line x1="0" y1="0" x2={x} y2={y} stroke="var(--rule)" strokeWidth="1" />
              <circle
                cx={x}
                cy={y}
                r="17"
                fill="var(--surface)"
                stroke={vetted ? 'var(--signal)' : 'var(--rule)'}
                strokeWidth={vetted ? '1.5' : '1'}
              />
              {/* A person mark: head and shoulders, no face. */}
              <circle cx={x} cy={y - 4} r="4.5" fill="none" stroke="var(--ink-3)" strokeWidth="1.2" />
              <path
                d={`M ${x - 7} ${y + 9} a 7 7 0 0 1 14 0`}
                fill="none"
                stroke="var(--ink-3)"
                strokeWidth="1.2"
              />
              {vetted && !still && (
                <circle cx={x} cy={y} r="17" fill="none" stroke="var(--signal)" strokeWidth="1">
                  <animate attributeName="r" values="17;26;17" dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values=".5;0;.5" dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                </circle>
              )}
            </g>
          );
        })}

        {/* Your team at the centre. They embed into it, not beside it. */}
        <circle r="42" fill="var(--surface)" stroke="var(--ink-3)" strokeWidth="1" />
        <text
          className="font-mono text-ink"
          fill="currentColor"
          fontSize="10"
          letterSpacing="0.12em"
          textAnchor="middle"
          y="4"
        >
          YOUR TEAM
        </text>
      </g>

      <text
        className="font-mono text-ink-3"
        fill="currentColor"
        fontSize="10"
        letterSpacing="0.12em"
        x="200"
        y="380"
        textAnchor="middle"
      >
        PRE-VETTED, THEN EMBEDDED
      </text>
    </svg>
  );
}
