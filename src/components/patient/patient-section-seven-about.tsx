"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";

type PatientSectionSevenAboutProps = Readonly<{
  href: string;
}>;

const statement = "Helping mothers and babies stay healthier through intelligent connected care";

export function PatientSectionSevenAbout({ href }: PatientSectionSevenAboutProps) {
  const copyRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [revealProgress, setRevealProgress] = useState(0);
  const furthestProgress = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (prefersReducedMotion || (previous !== undefined && latest <= previous)) {
      return;
    }

    const intro = copyRef.current?.closest<HTMLElement>(".section-seven-intro");
    if (!intro) {
      return;
    }

    const rawProgress = Math.min(
      Math.max((window.innerHeight - intro.getBoundingClientRect().top) / window.innerHeight, 0),
      1,
    );
    const typingProgress = rawProgress >= 0.995 ? 1 : rawProgress;
    const nextProgress = Math.max(furthestProgress.current, typingProgress);
    furthestProgress.current = nextProgress;
    setRevealProgress(nextProgress);
  });

  return (
    <div className="section-seven-about-copy" ref={copyRef}>
      <div className="section-seven-about-statement">
        <h2 className="sr-only">{statement}</h2>
        <div
          className="section-seven-about-reveal"
          aria-hidden="true"
          style={{ opacity: prefersReducedMotion ? 1 : 0.25 + revealProgress * 0.75 }}
        >
          {statement}
        </div>
      </div>
      <a className="section-seven-about-action" href={href}>
        <span className="section-seven-about-icon" aria-hidden="true">
          <Image
            className="section-seven-about-icon-image"
            src="/brand/website-icon.svg"
            alt=""
            width={86}
            height={62}
          />
        </span>
        <span className="section-seven-about-button">About us</span>
      </a>
    </div>
  );
}
