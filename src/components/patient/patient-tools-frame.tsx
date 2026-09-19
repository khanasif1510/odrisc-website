"use client";

import { type ReactNode, useRef } from "react";
import { m, useScroll, useSpring, useTransform } from "motion/react";

type PatientToolsFrameProps = Readonly<{
  children: ReactNode;
}>;

export function PatientToolsFrame({ children }: PatientToolsFrameProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 95%", "start 25%"],
  });
  const smoothScrollProgress = useSpring(scrollYProgress, {
    damping: 28,
    mass: 0.35,
    stiffness: 75,
  });
  const scale = useTransform(smoothScrollProgress, [0, 1], [1, 0.82]);
  const borderRadius = useTransform(smoothScrollProgress, [0, 1], ["0px", "40px"]);

  return (
    <section id="tools" ref={sectionRef} className="patient-tools-zoom-story">
      <div className="patient-tools-zoom-sticky">
        <m.div
          className="section patient-tools patient-tools-zoom-frame"
          style={{ borderRadius, scale }}
        >
          {children}
        </m.div>
      </div>
    </section>
  );
}
