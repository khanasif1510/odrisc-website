"use client";

import { useRef } from "react";
import {
  Activity,
  ArrowDown,
  CalendarDays,
  ChevronRight,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { m, useInView, useReducedMotion } from "motion/react";

type ProfileFactor = Readonly<{
  title: string;
  detail: string;
  value: string;
  icon: LucideIcon;
}>;

type SupportIndicator = Readonly<{
  label: string;
  icon: LucideIcon;
}>;

const profileFactors: readonly ProfileFactor[] = [
  { title: "BMI", detail: "Starting range", value: "Context", icon: Scale },
  { title: "Pregnancy Risk", detail: "Factors reviewed", value: "Profile", icon: ShieldCheck },
  { title: "Pregnancy Stage", detail: "Place in the journey", value: "Stage", icon: CalendarDays },
  { title: "Weight Journey", detail: "Change over time", value: "Trend", icon: TrendingUp },
];

const supportIndicators: readonly SupportIndicator[] = [
  { label: "Weight", icon: Scale },
  { label: "Nutrition", icon: UtensilsCrossed },
  { label: "Activity", icon: Activity },
  { label: "Pregnancy Guidance", icon: Sparkles },
];

const pregnancyStages = ["Preconception", "Trimester 1", "Trimester 2", "Trimester 3"] as const;
const progressionSteps = ["Assess", "Personalise", "Support"] as const;

const connectorPaths = [
  "M 204 132 C 318 132, 354 218, 432 250",
  "M 796 132 C 682 132, 646 218, 568 250",
  "M 204 334 C 314 334, 362 284, 432 266",
  "M 796 334 C 686 334, 638 284, 568 266",
] as const;

const mobileConnectorPaths = [
  "M 94 92 C 118 246, 154 320, 195 390",
  "M 296 92 C 270 246, 236 320, 195 390",
  "M 94 214 C 126 290, 158 348, 195 390",
  "M 296 214 C 264 290, 230 348, 195 390",
] as const;

const supportLinkPaths = [
  "M 209 414 C 209 432, 209 450, 209 466",
  "M 403 414 C 403 432, 403 450, 403 466",
  "M 597 414 C 597 432, 597 450, 597 466",
  "M 791 414 C 791 432, 791 450, 791 466",
] as const;

const supportSpinePaths = [
  "M 500 414 C 414 414, 302 414, 209 414",
  "M 500 414 C 586 414, 698 414, 791 414",
] as const;

const mobileSupportLinkPaths = [
  "M 166 780 C 178 780, 186 780, 195 780",
  "M 166 884 C 178 884, 186 884, 195 884",
  "M 166 988 C 178 988, 186 988, 195 988",
  "M 166 1092 C 178 1092, 186 1092, 195 1092",
] as const;

export function PersonalPregnancyJourney() {
  const rootRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rootRef, { once: true, amount: 0.24 });
  const prefersReducedMotion = useReducedMotion();
  const showCompletedState = Boolean(prefersReducedMotion);
  const shouldAnimate = isInView || showCompletedState;

  return (
    <div
      ref={rootRef}
      className="personal-pregnancy-journey relative isolate"
      aria-describedby="personal-journey-summary"
    >
      <p id="personal-journey-summary" className="sr-only">
        BMI, pregnancy risk, pregnancy stage and weight journey information are assessed together to
        form a pregnancy profile, which supports a personalised journey from preconception through
        all three trimesters with weight, nutrition, activity and pregnancy guidance in context.
      </p>

      <svg
        className="personal-journey-svg personal-journey-svg-desktop"
        viewBox="0 0 1000 650"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="personalConnectorGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ff7680" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#80ffcc" stopOpacity="0.82" />
          </linearGradient>
          <linearGradient id="personalTimelineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ff7680" stopOpacity="0.78" />
            <stop offset="52%" stopColor="#5bc2a3" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#80ffcc" stopOpacity="0.92" />
          </linearGradient>
        </defs>
        {connectorPaths.map((path, index) => (
          <m.path
            key={path}
            d={path}
            className="personal-connector-path"
            initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={shouldAnimate ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ delay: 0.78 + index * 0.1, duration: 0.72, ease: "easeOut" }}
          />
        ))}
        <m.path
          d="M 500 326 C 500 356, 500 388, 500 414"
          className="personal-profile-bridge"
          initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={shouldAnimate ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ delay: 1.58, duration: 0.58, ease: "easeInOut" }}
        />
        {supportSpinePaths.map((path, index) => (
          <m.path
            key={path}
            d={path}
            className="personal-support-spine-path"
            initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={shouldAnimate ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ delay: 1.72 + index * 0.08, duration: 0.72, ease: "easeInOut" }}
          />
        ))}
        <m.path
          d="M 112 466 C 328 466, 680 466, 888 466"
          className="personal-timeline-path"
          initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={shouldAnimate ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ delay: 1.82, duration: 0.82, ease: "easeInOut" }}
        />
        {supportLinkPaths.map((path, index) => (
          <m.path
            key={path}
            d={path}
            className="personal-support-link-path"
            initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={shouldAnimate ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ delay: 2.08 + index * 0.1, duration: 0.42, ease: "easeOut" }}
          />
        ))}
      </svg>

      <svg
        className="personal-journey-svg personal-journey-svg-mobile"
        viewBox="0 0 390 1260"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="personalConnectorGradientMobile" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff7680" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#80ffcc" stopOpacity="0.82" />
          </linearGradient>
          <linearGradient id="personalTimelineGradientMobile" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff7680" stopOpacity="0.78" />
            <stop offset="100%" stopColor="#80ffcc" stopOpacity="0.92" />
          </linearGradient>
        </defs>
        {mobileConnectorPaths.map((path, index) => (
          <m.path
            key={path}
            d={path}
            className="personal-connector-path-mobile"
            initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={shouldAnimate ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ delay: 0.78 + index * 0.1, duration: 0.72, ease: "easeOut" }}
          />
        ))}
        <m.path
          d="M 195 454 L 195 468"
          className="personal-profile-bridge personal-profile-bridge-mobile"
          initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={shouldAnimate ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ delay: 1.58, duration: 0.34, ease: "easeInOut" }}
        />
        <m.path
          d="M 195 468 L 195 1128"
          className="personal-timeline-path-mobile"
          initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={shouldAnimate ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ delay: 1.72, duration: 0.9, ease: "easeInOut" }}
        />
        {mobileSupportLinkPaths.map((path, index) => (
          <m.path
            key={path}
            d={path}
            className="personal-support-link-path-mobile"
            initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={shouldAnimate ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ delay: 2.08 + index * 0.1, duration: 0.42, ease: "easeOut" }}
          />
        ))}
      </svg>

      <div className="personal-profile-cards">
        {profileFactors.map((factor, index) => {
          const Icon = factor.icon;

          return (
            <m.article
              className={`personal-data-card personal-data-card-${index + 1}`}
              key={factor.title}
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, scale: 0.94, x: index % 2 === 0 ? -18 : 18, y: 10 }
              }
              animate={
                shouldAnimate
                  ? { opacity: 1, scale: 1, x: 0, y: 0 }
                  : { opacity: 0, scale: 0.94, x: index % 2 === 0 ? -18 : 18, y: 10 }
              }
              transition={{
                delay: 0.1 + index * 0.12,
                duration: 0.58,
                type: "spring",
                stiffness: 125,
                damping: 18,
              }}
            >
              <m.div
                className="personal-data-card-surface"
                animate={
                  !prefersReducedMotion && shouldAnimate
                    ? { y: [0, index % 2 === 0 ? -2 : 2, 0] }
                    : undefined
                }
                transition={{
                  delay: 3.05 + index * 0.22,
                  duration: 6.4 + index * 0.35,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <span className="personal-data-icon" aria-hidden="true">
                  <Icon size={17} strokeWidth={1.65} />
                </span>
                <span className="personal-data-copy">
                  <strong>{factor.title}</strong>
                  <small>{factor.detail}</small>
                </span>
                <span className="personal-data-value">{factor.value}</span>
              </m.div>
            </m.article>
          );
        })}
      </div>

      <m.div
        className="personal-profile-node"
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.92 }}
        animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
        transition={{ delay: 0.42, duration: 0.62, type: "spring", stiffness: 115, damping: 18 }}
      >
        <div className="personal-profile-halo" aria-hidden="true" />
        <div className="personal-maternal-mark" aria-hidden="true">
          <svg viewBox="0 0 72 82">
            <circle cx="36" cy="15" r="8" />
            <path d="M28 29c-8 8-9 27-4 42" />
            <path d="M44 29c7 7 10 20 7 31-2 8-8 13-15 13-9 0-15-7-15-17 0-12 8-19 17-17 7 2 11 9 10 17" />
          </svg>
        </div>
        <div className="personal-profile-state" aria-hidden="true">
          {showCompletedState ? (
            <strong>Your Personalised Journey</strong>
          ) : (
            <>
              <m.strong
                initial={{ opacity: 1 }}
                animate={shouldAnimate ? { opacity: [1, 1, 0] } : { opacity: 1 }}
                transition={{ delay: 0.08, duration: 1.18, times: [0, 0.68, 1] }}
              >
                Your Starting Point
              </m.strong>
              <m.strong
                initial={{ opacity: 0 }}
                animate={shouldAnimate ? { opacity: [0, 1, 1, 0] } : { opacity: 0 }}
                transition={{ delay: 1.03, duration: 1.2, times: [0, 0.18, 0.72, 1] }}
              >
                Your Pregnancy Profile
              </m.strong>
              <m.strong
                initial={{ opacity: 0 }}
                animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 2.22, duration: 0.52, ease: "easeOut" }}
              >
                Your Personalised Journey
              </m.strong>
            </>
          )}
        </div>
      </m.div>

      <div className="personal-mobile-state-flow" aria-hidden="true">
        <span>Your Starting Point</span>
        <ArrowDown size={15} strokeWidth={1.6} />
        <span>Your Pregnancy Profile</span>
      </div>

      <div className="personal-progression" aria-label="Assess, personalise and support">
        {progressionSteps.map((step, index) => (
          <div className="personal-progression-segment" key={step}>
            <m.span
              initial={prefersReducedMotion ? false : { opacity: 0.45, y: 4 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0.45, y: 4 }}
              transition={{ delay: 0.48 + index * 0.76, duration: 0.42, ease: "easeOut" }}
            >
              {step}
            </m.span>
            {index < progressionSteps.length - 1 ? (
              <ChevronRight aria-hidden="true" size={14} strokeWidth={1.5} />
            ) : null}
          </div>
        ))}
      </div>

      <div className="personal-support-indicators" aria-label="Contextual pregnancy support">
        {supportIndicators.map((indicator, index) => {
          const Icon = indicator.icon;

          return (
            <m.span
              key={indicator.label}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ delay: 2 + index * 0.14, duration: 0.42, ease: "easeOut" }}
            >
              <Icon aria-hidden="true" size={14} strokeWidth={1.6} />
              {indicator.label}
            </m.span>
          );
        })}
      </div>

      <div className="personal-pregnancy-timeline" aria-label="Pregnancy journey stages">
        {pregnancyStages.map((stage, index) => (
          <m.div
            className="personal-pregnancy-stage"
            key={stage}
            initial={prefersReducedMotion ? false : { opacity: 0, x: -8 }}
            animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
            transition={{ delay: 1.94 + index * 0.14, duration: 0.42, ease: "easeOut" }}
          >
            <span aria-hidden="true" />
            <strong>{stage}</strong>
          </m.div>
        ))}
      </div>
    </div>
  );
}
