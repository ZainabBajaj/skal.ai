"use client";

import { useReducedMotion } from 'framer-motion';

/* ---------------------------------------------------------------------------
   The hero illustration, carried over from the previous site.

   Four streams of work converge on the mark and leave as a rising trend. It is
   the emotional version of the argument SystemDiagram makes precisely further
   down the page, which is why it carries no labels: two diagrams explaining the
   same four-into-one idea in the same words would read as a stutter.

   Two things changed on the way over:

   - The old version ended on a "10X REVENUE" callout. Nothing on this site
     supports that number, and a figure nobody can check is worse than no
     figure, so the target keeps its pulse and loses its caption.
   - The motion is SMIL (`animateMotion`), which the prefers-reduced-motion
     rule in globals.css cannot touch — that rule only clamps CSS animations.
     So the check happens here, in JS, and the still frame keeps every path,
     the core and the trend. Nothing disappears; it just stops moving.
   ------------------------------------------------------------------------- */

const ConvergenceFlow = () => {
  const still = useReducedMotion();

  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-auto"
    >
      <defs>
        <radialGradient id="bh-ambient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00E1FF" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#00E1FF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bh-flow" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#009bd7" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#00E1FF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#1DB5C5" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="bh-out" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00E1FF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#1DB5C5" stopOpacity="0.7" />
        </linearGradient>
        <radialGradient id="bh-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bh-puck" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="75%" stopColor="#e5f4fa" stopOpacity="1" />
          <stop offset="100%" stopColor="#b2e0f0" stopOpacity="1" />
        </radialGradient>
        <radialGradient id="bh-sheen" cx="35%" cy="32%" r="55%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
          <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bh-target" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="60%" stopColor="#00E1FF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#00E1FF" stopOpacity="0" />
        </radialGradient>
        <filter id="bh-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
        <filter id="bh-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <path id="bh-in-1" d="M 90 130 Q 165 110, 250 230" />
        <path id="bh-in-2" d="M 90 200 Q 175 195, 250 230" />
        <path id="bh-in-3" d="M 90 270 Q 175 275, 250 230" />
        <path id="bh-in-4" d="M 90 340 Q 165 360, 250 230" />
        <path id="bh-out-path" d="M 250 230 L 295 218 L 325 222 L 355 198 L 385 175 L 415 120 L 430 90" />
      </defs>

      <ellipse cx="250" cy="240" rx="220" ry="200" fill="url(#bh-ambient)" filter="url(#bh-blur)" />

      <g className="text-ink" fill="currentColor" opacity="0.15">
        <circle cx="40" cy="60" r="1.5" />
        <circle cx="460" cy="380" r="1.5" />
        <circle cx="35" cy="430" r="1.5" />
        <circle cx="470" cy="200" r="1.5" />
        <circle cx="200" cy="50" r="1.2" />
        <circle cx="300" cy="450" r="1.2" />
      </g>

      {/* The four streams in. */}
      {['#bh-in-1', '#bh-in-2', '#bh-in-3', '#bh-in-4'].map((id) => (
        <use key={id} href={id} stroke="url(#bh-flow)" strokeWidth="1.6" fill="none" opacity="0.65" />
      ))}

      {/* The trend out. */}
      <use href="#bh-out-path" stroke="url(#bh-out)" strokeWidth="2.6" fill="none" opacity="0.95" filter="url(#bh-glow)" strokeLinecap="round" strokeLinejoin="round" />
      <use href="#bh-out-path" stroke="#FFFFFF" strokeWidth="0.7" fill="none" opacity="0.4" strokeLinecap="round" strokeLinejoin="round" />

      <g fill="#00E1FF" opacity="0.65">
        {[[295, 218], [325, 222], [355, 198], [385, 175], [415, 120]].map(([cx, cy]) => (
          <circle key={`${cx}`} cx={cx} cy={cy} r="2" />
        ))}
      </g>

      {!still && (
        <>
          {/* Traffic along each stream. Two dots per path, the second offset by
              a negative begin so it is already mid-flight on first paint. */}
          <g fill="#FFFFFF" filter="url(#bh-glow)">
            {[
              { path: '#bh-in-1', dur: '3s', a: '0s', b: '-1.5s' },
              { path: '#bh-in-2', dur: '3.2s', a: '-2.5s', b: '-0.9s' },
              { path: '#bh-in-3', dur: '3.1s', a: '-1.7s', b: '-0.2s' },
              { path: '#bh-in-4', dur: '3.3s', a: '-1.0s', b: '-2.6s' },
            ].map(({ path, dur, a, b }) => (
              <g key={path}>
                <circle r="3.5">
                  <animateMotion dur={dur} begin={a} repeatCount="indefinite">
                    <mpath href={path} />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur={dur} begin={a} repeatCount="indefinite" />
                </circle>
                <circle r="2.5">
                  <animateMotion dur={dur} begin={b} repeatCount="indefinite">
                    <mpath href={path} />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;0.7;0.7;0" keyTimes="0;0.15;0.85;1" dur={dur} begin={b} repeatCount="indefinite" />
                </circle>
              </g>
            ))}
          </g>

          {/* Heavier traffic on the way out. */}
          <g fill="#00E1FF" filter="url(#bh-glow)">
            {['0s', '-0.45s', '-0.9s', '-1.35s'].map((begin) => (
              <circle key={begin} r="5">
                <animateMotion dur="1.8s" begin={begin} repeatCount="indefinite">
                  <mpath href="#bh-out-path" />
                </animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.92;1" dur="1.8s" begin={begin} repeatCount="indefinite" />
              </circle>
            ))}
          </g>
        </>
      )}

      {/* The core, carrying the actual mark. */}
      <circle cx="250" cy="230" r="50" fill="url(#bh-core)" opacity="0.55" />
      <circle cx="250" cy="230" r="34" fill="url(#bh-puck)" />
      <circle cx="250" cy="230" r="34" fill="url(#bh-sheen)" />
      <circle cx="250" cy="230" r="34" fill="none" stroke="#FFFFFF" strokeWidth="1.4" opacity="0.45" />
      <image
        href="/skal-logo.svg"
        x="228"
        y="208"
        width="44"
        height="44"
        preserveAspectRatio="xMidYMid meet"
        style={{ filter: 'drop-shadow(0 1px 2px rgba(15, 23, 42, 0.25))' }}
      />

      {!still && (
        <circle cx="250" cy="230" r="34" fill="none" stroke="#FFFFFF" strokeWidth="1.3">
          <animate attributeName="r" values="34;72;34" dur="3.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="3.6s" repeatCount="indefinite" />
        </circle>
      )}

      {/* The one caption. "One week" is the number the rest of the page already
          commits to, so this is the only claim the picture is allowed to make. */}
      <g>
        <rect x="290" y="237" width="118" height="20" rx="10" fill="#FFFFFF" stroke="#00E1FF" strokeWidth="0.8" opacity="0.95" />
        <circle cx="302" cy="247" r="2.5" fill="#22c55e">
          {!still && <animate attributeName="opacity" values="0.5;1;0.5" dur="1.6s" repeatCount="indefinite" />}
        </circle>
        <text x="312" y="251" textAnchor="start" fill="#009bd7" fontSize="9" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="1.5">LIVE IN ONE WEEK</text>
      </g>

      {/* Where it ends up. Caption removed; the pulse says enough. */}
      <g>
        <circle cx="430" cy="90" r="28" fill="url(#bh-target)" opacity="0.7" />
        <circle cx="430" cy="90" r="16" fill="#00E1FF" opacity="0.95" filter="url(#bh-glow)" />
        <circle cx="430" cy="90" r="16" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />
        <path d="M 423 96 L 430 84 L 437 96 M 430 84 L 430 99" stroke="#FFFFFF" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {!still && (
          <>
            <circle cx="430" cy="90" r="16" fill="none" stroke="#00E1FF" strokeWidth="1.6">
              <animate attributeName="r" values="16;42;16" dur="3.6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.85;0;0.85" dur="3.6s" repeatCount="indefinite" />
            </circle>
            <circle cx="430" cy="90" r="16" fill="none" stroke="#00E1FF" strokeWidth="1.4">
              <animate attributeName="r" values="16;42;16" dur="3.6s" begin="-1.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;0;0.7" dur="3.6s" begin="-1.8s" repeatCount="indefinite" />
            </circle>
          </>
        )}
      </g>
    </svg>
  );
};

export default ConvergenceFlow;
