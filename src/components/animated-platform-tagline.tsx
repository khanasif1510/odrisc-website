"use client";

import { m, useReducedMotion } from "motion/react";

export function AnimatedPlatformTagline() {
  const prefersReducedMotion = useReducedMotion();
  const label = "A Maternal-Fetal Intelligence Platform";

  return (
    <m.span
      className="gateway-tagline"
      aria-label={label}
      initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
      animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{
        opacity: { duration: 0.45 },
        y: { duration: 0.55 },
      }}
    >
      <span className="gateway-tagline-fallback" aria-hidden="true">
        {label}
      </span>
      <m.span
        className="gateway-tagline-gradient"
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? { backgroundPosition: "0% 50%" }
            : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }
        }
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY,
        }}
      >
        {label}
      </m.span>
    </m.span>
  );
}
