"use client";

import { m, useReducedMotion } from "motion/react";

type AnimatedJourneyChecklistProps = Readonly<{
  items: readonly string[];
}>;

export function AnimatedJourneyChecklist({ items }: AnimatedJourneyChecklistProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <ul className="check-list journey-check-list">
      {items.map((item, index) => (
        <li key={item}>
          {item}
          <m.span
            className="journey-check-line"
            aria-hidden="true"
            animate={
              prefersReducedMotion
                ? { backgroundPosition: "0% 50%" }
                : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }
            }
            transition={{
              delay: index * 0.15,
              duration: 6,
              ease: "easeInOut",
              repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY,
            }}
          />
        </li>
      ))}
    </ul>
  );
}
