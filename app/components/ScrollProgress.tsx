"use client";

import { motion, useScroll, useSpring } from 'framer-motion';

/* ---------------------------------------------------------------------------
   Carried over from the previous site, repainted.

   There it was a 3px cyan → violet → magenta bar with a cyan glow. Both are
   the old palette arguing with this one: globals.css opens with "No gradients"
   and the About portrait is set explicitly "hairline, no glow". So it keeps
   the mechanic and loses the costume — 2px, one accent, flat.

   It reads as the page's own top rule filling in, rather than as a separate
   decorative object, which is the only reason it belongs on a page built from
   hairlines. aria-hidden because it states nothing a screen reader needs: it
   duplicates scroll position, which the browser already reports.
   ------------------------------------------------------------------------- */

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left bg-signal"
      style={{ scaleX }}
    />
  );
}
