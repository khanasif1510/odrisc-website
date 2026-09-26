"use client";

import { useRef } from "react";
import { Baby, CalendarDays, ScanLine, Sparkles } from "lucide-react";
import { m, useInView, useReducedMotion, useScroll, useTransform } from "motion/react";

type UltrasoundMoment = Readonly<{
  week: string;
  marker: string;
  x: number;
  y: number;
}>;

const ultrasoundMoments: readonly UltrasoundMoment[] = [
  { week: "20 weeks", marker: "20w", x: 12, y: 53 },
  { week: "24 weeks", marker: "24w", x: 37, y: 47 },
  { week: "28 weeks", marker: "28w", x: 62, y: 38 },
  { week: "32 weeks", marker: "32w", x: 87, y: 29 },
] as const;

const revealDelays = [0, 0.4, 0.7, 1] as const;

const calmTransition = {
  duration: 0.52,
  ease: [0.22, 1, 0.36, 1],
} as const;

function AbstractScan({ index }: Readonly<{ index: number }>) {
  const shift = index * 1.5;

  return (
    <svg viewBox="0 0 72 50" aria-hidden="true">
      <defs>
        <linearGradient id={`scanGlow-${index}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff7680" stopOpacity="0.36" />
          <stop offset="100%" stopColor="#80ffcc" stopOpacity="0.68" />
        </linearGradient>
      </defs>
      <path
        d={`M ${14 + shift} 35 C 19 18, 37 10, 51 20 C 59 26, 57 39, 45 42 C 34 45, 24 41, ${14 + shift} 35 Z`}
        fill={`url(#scanGlow-${index})`}
      />
      <path
        d="M 30 33 C 29 25, 34 20, 41 21 C 46 22, 48 27, 45 31 C 42 35, 36 36, 30 33 Z"
        fill="none"
        stroke="rgba(255,255,255,.92)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx={42 + shift * 0.4} cy="21" r="3.5" fill="rgba(255,255,255,.86)" />
      <path
        d="M 10 10 H 62 M 10 40 H 62"
        fill="none"
        stroke="rgba(91,194,163,.2)"
        strokeWidth="0.7"
        strokeDasharray="2 3"
      />
    </svg>
  );
}

export function FetalGrowthJourneyVisual() {
  const rootRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rootRef, { once: true, amount: 0.18 });
  const prefersReducedMotion = useReducedMotion();
  const showCompletedState = Boolean(prefersReducedMotion);
  const shouldReveal = isInView || showCompletedState;
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start 90%", "end 24%"],
  });
  const inheritedProgress = useTransform(scrollYProgress, [0, 0.2], [0.22, 1]);
  const growthProgress = useTransform(scrollYProgress, [0.28, 0.7], [0, 1]);
  const parallelProgress = useTransform(scrollYProgress, [0.74, 0.96], [0, 1]);

  const inheritedStyle = showCompletedState
    ? { pathLength: 1, opacity: 1 }
    : { pathLength: inheritedProgress, opacity: inheritedProgress };
  const growthStyle = showCompletedState ? { pathLength: 1 } : { pathLength: growthProgress };
  const parallelStyle = showCompletedState
    ? { pathLength: 1, opacity: 1 }
    : { pathLength: parallelProgress, opacity: parallelProgress };

  return (
    <div
      ref={rootRef}
      className="fetal-growth-visual relative isolate"
      aria-describedby="fetal-growth-summary"
    >
      <p id="fetal-growth-summary" className="sr-only">
        Four illustrative ultrasound snapshots at 20, 24, 28 and 32 weeks contribute individual
        measurement points. The points connect into a continuous baby growth journey. A maternal
        trajectory remains visible in parallel, ready to form a connected maternal-fetal story in
        the next section.
      </p>

      <span className="fetal-illustrative-note">
        Illustrative concept · not clinical interpretation
      </span>

      <m.div
        className="fetal-snapshot-label"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 5 }}
        animate={shouldReveal ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
        transition={calmTransition}
      >
        <ScanLine aria-hidden="true" size={14} strokeWidth={1.6} />
        Individual snapshots
      </m.div>

      <svg
        className="fetal-growth-svg fetal-growth-svg-desktop"
        viewBox="0 0 760 700"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="fetalJourneyGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#80ffcc" stopOpacity="0.72" />
            <stop offset="48%" stopColor="#5bc2a3" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ff7680" stopOpacity="0.82" />
          </linearGradient>
          <linearGradient id="fetalInheritedGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#80ffcc" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#5bc2a3" stopOpacity="0.62" />
          </linearGradient>
          <linearGradient id="fetalParallelGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5bc2a3" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#80ffcc" stopOpacity="0.72" />
          </linearGradient>
          <linearGradient id="maternalParallelGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ff7680" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#5bc2a3" stopOpacity="0.48" />
          </linearGradient>
        </defs>

        <m.path
          d="M 0 396 C 35 392, 62 380, 91 371"
          className="fetal-inherited-path"
          style={inheritedStyle}
        />
        <m.path
          d="M 91 371 C 165 363, 211 342, 281 329 C 357 315, 401 281, 471 266 C 548 248, 594 214, 661 203"
          className="fetal-journey-path"
          style={growthStyle}
        />
        <m.path
          d="M 91 371 C 165 363, 211 342, 281 329 C 357 315, 401 281, 471 266 C 548 248, 594 214, 661 203"
          className="fetal-journey-highlight"
          initial={prefersReducedMotion ? false : { pathLength: 0, pathOffset: 0, opacity: 0 }}
          animate={
            shouldReveal && !prefersReducedMotion
              ? {
                  pathLength: [0, 0.17, 0.17, 0],
                  pathOffset: [0, 0.25, 0.76, 1],
                  opacity: [0, 0.72, 0.72, 0],
                }
              : { opacity: 0 }
          }
          transition={{ duration: 1.15, delay: 2.15, ease: "easeInOut" }}
        />

        {[
          [91, 371],
          [281, 329],
          [471, 266],
          [661, 203],
        ].map(([cx, cy], index) => (
          <g key={`${cx}-${cy}`}>
            <m.path
              d={`M ${cx} 186 C ${cx - 5} 238, ${cx + 7} ${cy - 38}, ${cx} ${cy - 8}`}
              className="fetal-measurement-guide"
              initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
              animate={shouldReveal ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ delay: revealDelays[index] + 0.58, ...calmTransition }}
            />
            <m.circle
              cx={cx}
              cy={cy}
              r="5"
              className="fetal-growth-point"
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.75 }}
              animate={shouldReveal ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
              transition={{ delay: revealDelays[index] + 0.82, ...calmTransition }}
            />
          </g>
        ))}

        <m.path
          d="M 150 582 C 286 574, 458 567, 676 554"
          className="fetal-maternal-parallel-path"
          style={parallelStyle}
        />
        <m.path
          d="M 150 625 C 290 620, 467 608, 676 591"
          className="fetal-parallel-path"
          style={parallelStyle}
        />
      </svg>

      <svg
        className="fetal-growth-svg fetal-growth-svg-mobile"
        viewBox="0 0 390 1080"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="fetalJourneyGradientMobile" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#80ffcc" stopOpacity="0.74" />
            <stop offset="50%" stopColor="#5bc2a3" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ff7680" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <m.path
          d="M 48 48 C 37 155, 58 278, 48 398 C 38 520, 62 644, 52 768"
          className="fetal-journey-path-mobile"
          style={growthStyle}
        />
      </svg>

      <div className="fetal-scan-cards" aria-label="Illustrative ultrasound snapshots">
        {ultrasoundMoments.map((moment, index) => (
          <div key={moment.week} className="fetal-scan-position" style={{ left: `${moment.x}%` }}>
            <m.article
              className="fetal-scan-card"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12, scale: 0.97 }}
              animate={
                shouldReveal ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 12, scale: 0.97 }
              }
              transition={{ delay: revealDelays[index], ...calmTransition }}
            >
              <div className="fetal-scan-art">
                <AbstractScan index={index} />
              </div>
              <div className="fetal-scan-copy">
                <span className="fetal-scan-week">{moment.week}</span>
                <strong>Growth scan</strong>
                <span>Illustrative measurement</span>
              </div>
            </m.article>
          </div>
        ))}
      </div>

      <div className="fetal-age-markers" aria-label="Gestational age markers">
        {ultrasoundMoments.map((moment, index) => (
          <m.span
            key={moment.marker}
            style={{ left: `${moment.x}%`, top: `${moment.y + 3.5}%` }}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 5 }}
            animate={shouldReveal ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
            transition={{ delay: 1.75 + index * 0.08, ...calmTransition }}
          >
            {moment.marker}
          </m.span>
        ))}
      </div>

      <m.div
        className="fetal-journey-label"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 7 }}
        animate={shouldReveal ? { opacity: 1, y: 0 } : { opacity: 0, y: 7 }}
        transition={{ delay: 1.85, ...calmTransition }}
      >
        <Baby aria-hidden="true" size={16} strokeWidth={1.55} />
        Your baby&apos;s growth journey
      </m.div>

      <m.div
        className="fetal-over-time-label"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 5 }}
        animate={shouldReveal ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
        transition={{ delay: 2.25, ...calmTransition }}
      >
        <CalendarDays aria-hidden="true" size={14} strokeWidth={1.6} />
        Growth over time
      </m.div>

      <m.p
        className="fetal-closing-statement"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
        animate={shouldReveal ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ delay: 2.45, ...calmTransition }}
      >
        From individual measurements <span>to a growth journey.</span>
      </m.p>

      <m.div
        className="fetal-parallel-journeys"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
        animate={shouldReveal ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
        transition={{ delay: 2.7, ...calmTransition }}
        aria-label="Maternal and fetal trajectories continue in parallel"
      >
        <span>
          <Sparkles aria-hidden="true" size={13} strokeWidth={1.55} />
          You
        </span>
        <span>
          <Baby aria-hidden="true" size={13} strokeWidth={1.55} />
          Your baby
        </span>
      </m.div>
    </div>
  );
}
