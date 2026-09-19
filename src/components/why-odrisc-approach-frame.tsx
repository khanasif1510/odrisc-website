"use client";

import { m, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { useRef, type ReactNode } from "react";

export function WhyOdriscApproachFrame({
  ariaLabel = "ODRISC visual story",
  imageSrc = "/media/patient-step-inside-intelligence-landscape-20260825-v3.png",
  mobileImageSrc,
  imagePosition = "center bottom",
  children,
}: Readonly<{
  ariaLabel?: string;
  imageSrc?: string;
  mobileImageSrc?: string;
  imagePosition?: string;
  children: ReactNode;
}>) {
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
      className="why-odrisc-approach-frame"
      ref={frameRef}
      style={{ borderRadius, scale }}
      aria-label={ariaLabel}
    >
      <picture>
        {mobileImageSrc && <source media="(max-width: 760px)" srcSet={mobileImageSrc} />}
        <Image
          alt=""
          fill
          sizes="100vw"
          src={imageSrc}
          style={{ objectPosition: imagePosition }}
        />
      </picture>
      {children}
    </m.section>
  );
}
