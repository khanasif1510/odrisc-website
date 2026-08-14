"use client";

import { useRef } from "react";
import {
  Activity,
  Baby,
  CalendarDays,
  Scale,
  TrendingUp,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { m, useInView, useReducedMotion, useScroll, useTransform } from "motion/react";

type MaternalMeasurement = Readonly<{
  stage: string;
  week: string;
  label: string;
  value: string;
  context: string;
  icon: LucideIcon;
  x: number;
  y: number;
}>;

const measurements: readonly MaternalMeasurement[] = [
  {
    stage: "Starting Point",
    week: "Week 8",
    label: "Starting weight",
    value: "64.0 kg",
    context: "BMI context",
    icon: Scale,
    x: 12,
    y: 51,
  },
  {
    stage: "Trimester 1",
    week: "Week 14",
    label: "Weight change",
    value: "+1.1 kg",
    context: "Nutrition",
    icon: UtensilsCrossed,
    x: 36,
    y: 45,
  },
  {
    stage: "Trimester 2",
    week: "Week 20",
    label: "Weight change",
    value: "+2.8 kg",
    context: "Activity",
    icon: Activity,
    x: 60,
    y: 36,
  },
  {
    stage: "Trimester 3",
    week: "Week 26",
    label: "Weight change",
    value: "+4.5 kg",
    context: "Pregnancy stage",
    icon: CalendarDays,
    x: 86,
    y: 27,
  },
] as const;

const measurementDelays = [0, 0.4, 0.7, 1] as const;

const trajectoryTransition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1],
} as const;

export function MaternalTrajectoryVisual() {
  const rootRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rootRef, { once: true, amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();
  const showCompletedState = Boolean(prefersReducedMotion);
  const shouldReveal = isInView || showCompletedState;
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start 88%", "end 28%"],
  });
  const trajectoryProgress = useTransform(scrollYProgress, [0.08, 0.68], [0, 1]);
  const rangeOpacity = useTransform(scrollYProgress, [0.34, 0.58], [0, 1]);
  const babyProgress = useTransform(scrollYProgress, [0.76, 0.96], [0, 1]);

  const trajectoryStyle = showCompletedState
    ? { pathLength: 1 }
    : { pathLength: trajectoryProgress };
  const rangeStyle = showCompletedState ? { opacity: 1 } : { opacity: rangeOpacity };
  const babyStyle = showCompletedState ? { pathLength: 1 } : { pathLength: babyProgress };

  return (
    <div
      ref={rootRef}
      className="maternal-trajectory-visual relative isolate"
      aria-describedby="maternal-trajectory-summary"
    >
      <p id="maternal-trajectory-summary" className="sr-only">
        An illustrative sequence connects four maternal measurement moments from a starting point
        through all three trimesters. The connected measurements form a maternal trajectory, with
        contextual information and a subtle preview of baby growth beginning beneath it.
      </p>

      <span className="maternal-illustrative-note">
        Illustrative journey · not clinical guidance
      </span>

      <svg
        className="maternal-trajectory-svg maternal-trajectory-svg-desktop"
        viewBox="0 0 760 640"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="maternalTrajectoryGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ff7680" stopOpacity="0.82" />
            <stop offset="54%" stopColor="#5bc2a3" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#80ffcc" stopOpacity="0.92" />
          </linearGradient>
          <linearGradient id="maternalRangeGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ff7680" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#80ffcc" stopOpacity="0.16" />
          </linearGradient>
          <linearGradient id="babyBridgeGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ff7680" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#80ffcc" stopOpacity="0.42" />
          </linearGradient>
        </defs>

        <m.path
          d="M 245 318 C 330 302, 390 262, 456 226 C 532 185, 594 150, 660 134 L 671 192 C 599 206, 540 235, 470 270 C 397 307, 333 346, 252 358 Z"
          className="maternal-range-band"
          style={rangeStyle}
        />
        <m.path d="M 70 410 C 260 410, 502 410, 690 410" className="maternal-timeline-line" />
        <m.path d="M 91 326 L 91 410" className="maternal-guide-line" />
        <m.path d="M 274 288 L 274 410" className="maternal-guide-line" />
        <m.path d="M 456 230 L 456 410" className="maternal-guide-line" />
        <m.path d="M 654 173 L 654 410" className="maternal-guide-line" />
        <m.path
          d="M 91 326 C 166 324, 210 304, 274 288 C 342 270, 390 245, 456 230 C 532 211, 586 184, 654 173"
          className="maternal-trajectory-path"
          style={trajectoryStyle}
        />
        <m.path
          d="M 455 579 C 528 574, 600 552, 698 516"
          className="maternal-baby-bridge-path"
          style={babyStyle}
        />
        {[
          [91, 326],
          [274, 288],
          [456, 230],
          [654, 173],
        ].map(([cx, cy], index) => (
          <m.circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="5"
            className="maternal-trajectory-point"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.8 }}
            animate={shouldReveal ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{
              delay: measurementDelays[index],
              ...trajectoryTransition,
            }}
          />
        ))}
      </svg>

      <svg
        className="maternal-trajectory-svg maternal-trajectory-svg-mobile"
        viewBox="0 0 390 1040"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="maternalTrajectoryGradientMobile" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff7680" stopOpacity="0.82" />
            <stop offset="55%" stopColor="#5bc2a3" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#80ffcc" stopOpacity="0.92" />
          </linearGradient>
          <linearGradient id="maternalRangeGradientMobile" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff7680" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#80ffcc" stopOpacity="0.16" />
          </linearGradient>
          <linearGradient id="babyBridgeGradientMobile" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff7680" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#80ffcc" stopOpacity="0.42" />
          </linearGradient>
        </defs>
        <m.path
          d="M 28 218 C 38 352, 50 496, 40 674 C 37 725, 42 764, 53 808 L 81 802 C 70 754, 67 716, 71 668 C 83 501, 71 347, 60 210 Z"
          className="maternal-range-band-mobile"
          style={rangeStyle}
        />
        <m.path
          d="M 48 118 C 34 252, 62 362, 49 488 C 37 606, 55 704, 63 792"
          className="maternal-trajectory-path-mobile"
          style={trajectoryStyle}
        />
        <m.path
          d="M 65 872 C 78 910, 91 944, 116 984"
          className="maternal-baby-bridge-path-mobile"
          style={babyStyle}
        />
      </svg>

      <div className="maternal-measurements" aria-label="Illustrative maternal measurements">
        {measurements.map((measurement, index) => {
          const Icon = measurement.icon;

          return (
            <div
              className="maternal-measurement-position"
              key={measurement.week}
              style={{ left: `${measurement.x}%`, top: `${measurement.y}%` }}
            >
              <m.article
                className={`maternal-measurement-card${index === 0 ? " is-starting-point" : ""}`}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 10, scale: 0.97 }}
                animate={
                  shouldReveal ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.97 }
                }
                transition={{
                  delay: measurementDelays[index],
                  ...trajectoryTransition,
                }}
              >
                <span className="maternal-measurement-stage">{measurement.stage}</span>
                <span className="maternal-measurement-week">{measurement.week}</span>
                <span className="maternal-measurement-detail">
                  <span>{measurement.label}</span>
                  <strong>{measurement.value}</strong>
                </span>
                <span className="maternal-measurement-context">
                  <Icon aria-hidden="true" size={13} strokeWidth={1.65} />
                  {measurement.context}
                </span>
              </m.article>
            </div>
          );
        })}
      </div>

      <div className="maternal-timeline-stages" aria-label="Pregnancy timeline stages">
        {measurements.map((measurement, index) => (
          <m.span
            key={measurement.stage}
            style={{ left: `${measurement.x}%` }}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 5 }}
            animate={shouldReveal ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
            transition={{ delay: measurementDelays[index] + 0.18, ...trajectoryTransition }}
          >
            {measurement.stage}
          </m.span>
        ))}
      </div>

      <m.div
        className="maternal-range-label"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 5 }}
        animate={shouldReveal ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
        transition={{ delay: 1.8, ...trajectoryTransition }}
      >
        Personalised range
      </m.div>

      <m.div
        className="maternal-trajectory-label"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 7 }}
        animate={shouldReveal ? { opacity: 1, y: 0 } : { opacity: 0, y: 7 }}
        transition={{ delay: 1.55, ...trajectoryTransition }}
      >
        <TrendingUp aria-hidden="true" size={16} strokeWidth={1.65} />
        Your maternal trajectory
      </m.div>

      <m.p
        className="maternal-direction-statement"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
        animate={shouldReveal ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ delay: 2.4, ...trajectoryTransition }}
      >
        See the change. <span>Understand the direction.</span>
      </m.p>

      <m.div
        className="maternal-baby-bridge-label"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
        animate={shouldReveal ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
        transition={{ delay: 2.7, ...trajectoryTransition }}
      >
        <Baby aria-hidden="true" size={15} strokeWidth={1.55} />
        Baby&apos;s growth
      </m.div>
    </div>
  );
}
