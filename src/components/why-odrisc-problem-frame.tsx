"use client";

import { m, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { useRef, type ReactNode } from "react";

export function WhyOdriscProblemFrame({ children }: Readonly<{ children: ReactNode }>) {
  const frameRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start 95%", "start 70%"],
  });
  const progress = useSpring(scrollYProgress, {
    damping: 26,
    mass: 0.3,
    stiffness: 82,
  });
  const scale = useTransform(progress, [0, 1], prefersReducedMotion ? [1, 1] : [0.9, 1]);
  const borderRadius = useTransform(
    progress,
    [0, 1],
    prefersReducedMotion ? ["0px", "0px"] : ["75px", "0px"],
  );

  return (
    <m.section
      className="why-odrisc-problem-frame"
      ref={frameRef}
      style={{ borderRadius, scale }}
      aria-label="The pregnancy care problem and health statistics"
    >
      <picture>
        <source
          media="(max-width: 760px)"
          srcSet="/media/why-odrisc-problem-frame-mobile-1012x1554-20260912.png"
        />
        <Image
          className="why-odrisc-problem-frame-image"
          src="/media/why-odrisc-problem-frame-20260904.png"
          alt=""
          fill
          sizes="100vw"
        />
      </picture>
      <div className="why-odrisc-problem-frame-content">{children}</div>
    </m.section>
  );
}
