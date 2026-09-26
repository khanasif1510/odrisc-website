"use client";

import { m, useReducedMotion } from "motion/react";

export function AnimatedHeaderLine() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <m.span
      className="site-header-gradient-line"
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
    />
  );
}
