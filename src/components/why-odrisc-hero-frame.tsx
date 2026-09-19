"use client";

import { m, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function WhyOdriscHeroFrame() {
  const stageRef = useRef<HTMLElement>(null);
  const [isFrameSettled, setIsFrameSettled] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start start", "end end"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 0.2], [0, 1], { clamp: true });
  const smoothScaleProgress = useSpring(scaleProgress, {
    damping: 28,
    mass: 0.35,
    stiffness: 75,
  });
  const copyProgress = useTransform(scrollYProgress, [0, 0.48], [0, 1], { clamp: true });
  const smoothCopyProgress = useSpring(copyProgress, {
    damping: 28,
    mass: 0.35,
    stiffness: 75,
  });
  const scale = useTransform(
    smoothScaleProgress,
    [0, 1],
    prefersReducedMotion ? [1, 1] : [1, 0.82],
  );
  // Reveal about 1.5s before the spring's previous 99.9% settling threshold.
  // With this spring's slow decay (~2.775/s), 93.6% advances that reveal by ~1.5s.
  // Keep the scroll boundary so reverse expansion still hides the action immediately.
  // Visibility also removes the hidden link from keyboard navigation.
  useEffect(() => {
    const updateAction = () => {
      // Leaving or returning to the viewport does not hide a compact-frame action.
      setIsFrameSettled(scrollYProgress.get() >= 0.2 && smoothScaleProgress.get() >= 0.936);
    };
    updateAction();
    const stopScroll = scrollYProgress.on("change", updateAction);
    const stopSpring = smoothScaleProgress.on("change", updateAction);
    return () => {
      stopScroll();
      stopSpring();
    };
  }, [scrollYProgress, smoothScaleProgress]);
  const copyOpacity = useTransform(
    smoothCopyProgress,
    [0, 0.9, 1],
    prefersReducedMotion ? [1, 1, 1] : [1, 1, 0],
  );
  const copyY = useTransform(
    smoothCopyProgress,
    [0, 1],
    prefersReducedMotion ? ["0vh", "0vh"] : ["0vh", "-80vh"],
  );
  const copyClipPath = useTransform(
    smoothScaleProgress,
    [0, 1],
    prefersReducedMotion
      ? ["inset(0% round 0px)", "inset(0% round 0px)"]
      : ["inset(0% round 0px)", "inset(9% round 75px)"],
  );
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.2, 0.65, 1],
    prefersReducedMotion ? ["0px", "0px", "0px", "0px"] : ["0px", "75px", "75px", "75px"],
  );

  return (
    <section className="why-odrisc-hero-stage" ref={stageRef} aria-label="Why ODRISC introduction">
      <div className="why-odrisc-hero-sticky">
        <m.div className="why-odrisc-hero" style={{ borderRadius, scale }}>
          <Image
            className="why-odrisc-hero-image"
            src="/media/why-odrisc-hero-1672x941-v2.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </m.div>
        <m.div className="why-odrisc-hero-copy-clip" style={{ clipPath: copyClipPath }}>
          <m.div className="why-odrisc-hero-copy" style={{ opacity: copyOpacity, y: copyY }}>
            <span className="eyebrow">Why ODRISC</span>
            <h1>
              <span className="why-odrisc-hero-title-white">
                Because
                <br className="why-odrisc-hero-mobile-break" /> It begins
              </span>
              <span className="why-odrisc-hero-title-secondary">
                with <span className="why-odrisc-hero-title-coral">You</span>
              </span>
            </h1>
            <p>
              ODRISC is being built to answer one question: what would pregnancy care look like if
              prevention and earlier understanding came before complications?
            </p>
          </m.div>
        </m.div>
        <a
          className="section-seven-about-action why-odrisc-hero-app-action"
          href="https://app.odrisc.com"
          data-frame-settled={isFrameSettled}
        >
          <span className="section-seven-about-icon" aria-hidden="true">
            <Image
              className="section-seven-about-icon-image"
              src="/brand/website-icon.svg"
              alt=""
              width={86}
              height={62}
            />
          </span>
          <span className="section-seven-about-button">The ODRISC App</span>
        </a>
      </div>
    </section>
  );
}
