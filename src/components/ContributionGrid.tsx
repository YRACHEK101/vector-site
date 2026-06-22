"use client";

import { motion, useReducedMotion } from "framer-motion";

const COLS = 20;
const ROWS = 7;
const SIZE = 11;
const GAP = 3;
const STEP = SIZE + GAP;
const WIDTH = COLS * STEP - GAP;
const HEIGHT = ROWS * STEP - GAP;

// GitHub's actual contribution-level greens (level 0 is an empty cell).
const FILL = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"] as const;

/**
 * Deterministic intensity for a cell so server and client render identically
 * (no hydration mismatch — Math.random would break that). Density rises toward
 * the right to read as a growing history.
 */
function levelFor(row: number, col: number): number {
  const h = Math.abs(Math.sin((col + 1) * 12.9898 + (row + 1) * 78.233) * 43758.5453);
  const noise = h - Math.floor(h);
  const bias = col / COLS;
  const v = noise * 0.7 + bias * 0.55;
  if (v < 0.32) return 0;
  if (v < 0.5) return 1;
  if (v < 0.68) return 2;
  if (v < 0.85) return 3;
  return 4;
}

export function ContributionGrid({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  const cells = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      cells.push({ r, c, level: levelFor(r, c) });
    }
  }

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      width="100%"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="A GitHub-style contribution grid filling in with green squares"
      data-contrib-grid
      className={className}
    >
      {cells.map(({ r, c, level }) => {
        const rectProps = {
          x: c * STEP,
          y: r * STEP,
          width: SIZE,
          height: SIZE,
          rx: 2.5,
          fill: FILL[level],
          stroke: level === 0 ? "#21262d" : "transparent",
          strokeWidth: 1,
        };

        // Reduced motion: render a plain, fully-visible square (no animation).
        if (reduce) {
          return <rect key={`${r}-${c}`} {...rectProps} />;
        }

        // Diagonal sweep, left-to-right. Animate on mount (not on in-view) so the
        // squares are guaranteed to reach their visible resting state regardless
        // of scroll position or viewport — fixes empty grid on mobile.
        const delay = (c + r * 0.35) * 0.03;
        return (
          <motion.rect
            key={`${r}-${c}`}
            {...rectProps}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.4, ease: "easeOut" }}
            style={{ transformOrigin: "center", transformBox: "fill-box" }}
          />
        );
      })}
    </svg>
  );
}
