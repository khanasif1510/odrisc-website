"use client";

import Image from "next/image";
import { type ReactNode, useRef, useState } from "react";
import { m, type MotionValue, useMotionValueEvent, useScroll, useTransform } from "motion/react";

type StoryFrame = Readonly<{
  src?: string;
  mobileSrc?: string;
  alt: string;
  placeholderLabel?: string;
  shortLabel: string;
  position: string;
}>;

type ConnectedPregnancyJourneyProps = Readonly<{
  children: ReactNode;
}>;

type PersonalPregnancyStoryProps = Readonly<{
  children: ReactNode;
}>;

type PatientImageNarrativeProps = Readonly<{
  children: ReactNode;
  className: string;
  id: string;
  label: string;
  story: "maternal" | "fetal";
  visualSide: "left" | "right";
}>;

const storyFrames: readonly StoryFrame[] = [
  {
    src: "/media/patient-connected-story/maternal-health-risk-20260812.png",
    mobileSrc: "/media/patient-connected-story/maternal-health-risk-mobile-20260812.png",
    alt: "A pregnant woman speaking with a healthcare professional",
    shortLabel: "Risk",
    position: "50% 48%",
  },
  {
    src: "/media/patient-connected-story/nutrition-20260812.png",
    mobileSrc: "/media/patient-connected-story/nutrition-mobile-20260812.png",
    alt: "A pregnant woman preparing a fresh meal",
    shortLabel: "Nutrition",
    position: "50% 62%",
  },
  {
    src: "/media/patient-connected-story/activity-20260812.png",
    mobileSrc: "/media/patient-connected-story/activity-mobile-20260812.png",
    alt: "A pregnant woman walking outdoors",
    shortLabel: "Activity",
    position: "50% 48%",
  },
  {
    src: "/media/patient-connected-story/monitoring-baby-growth-20260812.png",
    mobileSrc: "/media/patient-connected-story/monitoring-baby-growth-mobile-20260812.png",
    alt: "A pregnant woman reviewing an ultrasound with a healthcare professional",
    shortLabel: "Monitor",
    position: "50% 56%",
  },
] as const;

const personalStoryFrames: readonly StoryFrame[] = [
  {
    src: "/media/patient-connected-story/personal-journey-consultation-desktop-20260814-v2.png",
    mobileSrc:
      "/media/patient-connected-story/personal-journey-consultation-mobile-20260814-v2.png",
    alt: "A pregnant woman speaking with a healthcare professional",
    shortLabel: "Risk",
    position: "50% 50%",
  },
  {
    src: "/media/patient-connected-story/personal-journey-nutrition-desktop-20260814-v2.png",
    mobileSrc: "/media/patient-connected-story/personal-journey-nutrition-mobile-20260814-v2.png",
    alt: "A pregnant woman enjoying a fresh fruit and salad meal",
    shortLabel: "Nutrition",
    position: "50% 50%",
  },
  {
    src: "/media/patient-connected-story/personal-journey-activity-desktop-20260814-v2.png",
    mobileSrc: "/media/patient-connected-story/personal-journey-activity-mobile-20260814-v2.png",
    alt: "A pregnant woman stretching on an exercise mat",
    shortLabel: "Activity",
    position: "50% 50%",
  },
] as const;

const maternalTrajectoryFrames: readonly StoryFrame[] = [
  {
    src: "/media/patient-connected-story/maternal-trajectory-food-label-desktop-20260814.png",
    mobileSrc: "/media/patient-connected-story/maternal-trajectory-food-label-mobile-20260814.png",
    alt: "A pregnant woman reading the label on a food container",
    shortLabel: "Starting point",
    position: "50% 50%",
  },
  {
    src: "/media/patient-connected-story/maternal-trajectory-weight-progress-desktop-20260814.png",
    mobileSrc:
      "/media/patient-connected-story/maternal-trajectory-weight-progress-mobile-20260814.png",
    alt: "A pregnant woman standing on a scale",
    shortLabel: "Progress",
    position: "50% 50%",
  },
  {
    src: "/media/patient-connected-story/maternal-trajectory-phone-desktop-20260814.png",
    mobileSrc: "/media/patient-connected-story/maternal-trajectory-phone-mobile-20260814.png",
    alt: "A pregnant woman using a smartphone",
    shortLabel: "Trajectory",
    position: "50% 50%",
  },
] as const;

const fetalGrowthFrames: readonly StoryFrame[] = [
  {
    src: "/media/patient-connected-story/fetal-growth-ultrasound-snapshot-desktop-20260814.png",
    mobileSrc:
      "/media/patient-connected-story/fetal-growth-ultrasound-snapshot-mobile-20260814.png",
    alt: "A pregnant woman having an ultrasound examination with a healthcare professional",
    shortLabel: "Snapshot",
    position: "50% 50%",
  },
  {
    src: "/media/patient-connected-story/fetal-growth-ultrasound-prints-desktop-20260814.png",
    mobileSrc: "/media/patient-connected-story/fetal-growth-ultrasound-prints-mobile-20260814.png",
    alt: "A pregnant woman looking at ultrasound images",
    shortLabel: "Growth",
    position: "50% 50%",
  },
  {
    src: "/media/patient-connected-story/fetal-growth-review-journey-desktop-20260814.png",
    mobileSrc: "/media/patient-connected-story/fetal-growth-review-journey-mobile-20260814.png",
    alt: "A healthcare professional reviewing an ultrasound image with a pregnant woman",
    shortLabel: "Journey",
    position: "50% 50%",
  },
] as const;

function StoryFrameVisual({
  frame,
  mobile,
  priority = false,
}: Readonly<{ frame: StoryFrame; mobile: boolean; priority?: boolean }>) {
  const src = mobile ? (frame.mobileSrc ?? frame.src) : frame.src;

  if (!src) {
    return (
      <div className="journey-story-placeholder" aria-hidden="true">
        <span>{frame.placeholderLabel}</span>
        <small>Image placeholder</small>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={frame.alt}
      fill
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      sizes={mobile ? "100vw" : "(max-width: 1100px) 68vw, 768px"}
      style={{ objectPosition: frame.position }}
    />
  );
}

function ScrollingStoryLayer({
  frame,
  frameCount,
  index,
  mobile,
  progress,
}: Readonly<{
  frame: StoryFrame;
  frameCount: number;
  index: number;
  mobile: boolean;
  progress: MotionValue<number>;
}>) {
  const segment = 1 / frameCount;
  const transitionStart = Math.max(0.1, segment * index - segment * 0.5);
  const transitionEnd = transitionStart + Math.min(0.14, segment * 0.52);
  const layerY = useTransform(
    progress,
    [0, transitionStart, transitionEnd, 1],
    ["100%", "100%", "0%", "0%"],
  );

  return (
    <m.figure
      className="journey-story-image-layer journey-story-image-layer-entering"
      style={{ y: layerY, zIndex: index + 1 }}
    >
      <StoryFrameVisual frame={frame} mobile={mobile} />
    </m.figure>
  );
}

function ScrollingStoryFrames({
  frames = storyFrames,
  progress,
  mobile = false,
}: Readonly<{
  frames?: readonly StoryFrame[];
  progress: MotionValue<number>;
  mobile?: boolean;
}>) {
  const firstFrame = frames[0];

  return (
    <div className="journey-story-layers" aria-live="off">
      <div className="journey-story-image-stack">
        <figure className="journey-story-image-layer" style={{ zIndex: 1 }}>
          <StoryFrameVisual frame={firstFrame} mobile={mobile} priority />
        </figure>
        {frames.slice(1).map((frame, offset) => (
          <ScrollingStoryLayer
            frame={frame}
            frameCount={frames.length}
            index={offset + 1}
            mobile={mobile}
            progress={progress}
            key={`${frame.shortLabel}-${offset}`}
          />
        ))}
      </div>
    </div>
  );
}

function MobileStageIndicator({
  activeFrameIndex,
  frames,
  index,
  progress,
}: Readonly<{
  activeFrameIndex: number;
  frames: readonly StoryFrame[];
  index: number;
  progress: MotionValue<number>;
}>) {
  const stageProgress = useTransform(
    progress,
    [index / frames.length, (index + 1) / frames.length],
    [0, 1],
  );
  const state =
    index === activeFrameIndex ? "current" : index < activeFrameIndex ? "complete" : "upcoming";

  return (
    <li data-state={state} aria-current={state === "current" ? "step" : undefined}>
      <span>{frames[index].shortLabel}</span>
      <span className="journey-mobile-stage-line" aria-hidden="true">
        <m.i style={{ scaleX: stageProgress }} />
      </span>
    </li>
  );
}

function MobileStory({
  children,
  frames = storyFrames,
  label = "Connected pregnancy story stages",
}: Readonly<{
  children: ReactNode;
  frames?: readonly StoryFrame[];
  label?: string;
}>) {
  const mobileStoryRef = useRef<HTMLDivElement>(null);
  const [activeFrameIndex, setActiveFrameIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: mobileStoryRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latestProgress) => {
    setActiveFrameIndex(
      Math.max(0, Math.min(frames.length - 1, Math.floor(latestProgress * frames.length))),
    );
  });

  return (
    <div className="journey-story-mobile">
      <div className="journey-story-copy">{children}</div>
      <div ref={mobileStoryRef} className="journey-story-mobile-track">
        <div className="journey-story-mobile-sticky">
          <div className="journey-story-mobile-frame">
            <ScrollingStoryFrames frames={frames} progress={scrollYProgress} mobile />
          </div>
          <ol
            className="journey-mobile-stages"
            aria-label={label}
            style={{ gridTemplateColumns: `repeat(${frames.length}, minmax(0, 1fr))` }}
          >
            {frames.map((frame, index) => (
              <MobileStageIndicator
                activeFrameIndex={activeFrameIndex}
                frames={frames}
                index={index}
                progress={scrollYProgress}
                key={frame.shortLabel}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

function StaticStoryImages({
  frames = storyFrames,
  label = "The connected pregnancy journey",
}: Readonly<{ frames?: readonly StoryFrame[]; label?: string }>) {
  return (
    <div className="journey-story-static-grid" aria-label={label}>
      {frames.map((frame, index) => (
        <figure className="journey-story-static-card" key={`${frame.shortLabel}-${index}`}>
          <div className="journey-story-static-image">
            <StoryFrameVisual frame={frame} mobile={false} />
          </div>
        </figure>
      ))}
    </div>
  );
}

export function ConnectedPregnancyJourney({ children }: ConnectedPregnancyJourneyProps) {
  const storyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: approachProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "start start"],
  });
  const shellScale = useTransform(approachProgress, [0, 1], [0.9, 1]);
  const shellRadius = useTransform(approachProgress, [0, 1], ["37.4px", "0px"]);
  const imageRightRadius = useTransform(approachProgress, [0, 1], ["37.4px", "0px"]);

  return (
    <div id="connected-pregnancy-journey" ref={storyRef} className="journey-scroll-story">
      <div className="journey-story-sticky">
        <m.div
          className="journey-story-shell"
          style={{ borderRadius: shellRadius, scale: shellScale }}
        >
          <div className="journey-story-composition">
            <div className="journey-story-copy">{children}</div>
            <m.div
              className="journey-story-frame"
              style={{
                borderBottomRightRadius: imageRightRadius,
                borderTopRightRadius: imageRightRadius,
              }}
            >
              <ScrollingStoryFrames progress={scrollYProgress} />
            </m.div>
          </div>
        </m.div>
      </div>

      <MobileStory>{children}</MobileStory>

      <div className="journey-story-reduced journey-story-reduced-fallback">
        <div className="journey-story-copy">{children}</div>
        <StaticStoryImages />
      </div>
    </div>
  );
}

export function PersonalPregnancyStory({ children }: PersonalPregnancyStoryProps) {
  const storyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: approachProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "start start"],
  });
  const shellScale = useTransform(approachProgress, [0, 1], [0.9, 1]);
  const shellRadius = useTransform(approachProgress, [0, 1], ["37.4px", "0px"]);
  const imageLeftRadius = useTransform(approachProgress, [0, 1], ["37.4px", "0px"]);

  return (
    <div
      id="personal-journey"
      ref={storyRef}
      className="journey-scroll-story personal-story-scroll"
    >
      <div className="journey-story-sticky">
        <m.div
          className="journey-story-shell personal-story-shell"
          style={{ borderRadius: shellRadius, scale: shellScale }}
        >
          <div className="journey-story-composition personal-story-composition">
            <m.div
              className="journey-story-frame personal-story-frame"
              style={{
                borderBottomLeftRadius: imageLeftRadius,
                borderTopLeftRadius: imageLeftRadius,
              }}
            >
              <ScrollingStoryFrames frames={personalStoryFrames} progress={scrollYProgress} />
            </m.div>
            <div className="journey-story-copy personal-story-copy">{children}</div>
          </div>
        </m.div>
      </div>

      <MobileStory frames={personalStoryFrames} label="Personal pregnancy story stages">
        {children}
      </MobileStory>

      <div className="journey-story-reduced journey-story-reduced-fallback personal-story-reduced">
        <StaticStoryImages frames={personalStoryFrames} label="The personal pregnancy journey" />
        <div className="journey-story-copy personal-story-copy">{children}</div>
      </div>
    </div>
  );
}

export function PatientImageNarrative({
  children,
  className,
  id,
  label,
  story,
  visualSide,
}: PatientImageNarrativeProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const frames = story === "maternal" ? maternalTrajectoryFrames : fetalGrowthFrames;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: approachProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });
  const shellScale = useTransform(approachProgress, [0, 1], [0.9, 1]);
  const shellRadius = useTransform(approachProgress, [0, 1], ["37.4px", "0px"]);
  const frameStyle =
    visualSide === "left"
      ? { borderBottomLeftRadius: shellRadius, borderTopLeftRadius: shellRadius }
      : { borderBottomRightRadius: shellRadius, borderTopRightRadius: shellRadius };
  const frame = (
    <m.div
      className={`journey-story-frame${visualSide === "left" ? " personal-story-frame" : ""}`}
      style={frameStyle}
    >
      <ScrollingStoryFrames frames={frames} progress={scrollYProgress} />
    </m.div>
  );

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`journey-scroll-story section-image-story ${className}`}
    >
      <div className="journey-story-sticky">
        <m.div
          className={`journey-story-shell${visualSide === "left" ? " personal-story-shell" : ""}`}
          style={{ borderRadius: shellRadius, scale: shellScale }}
        >
          <div
            className={`journey-story-composition${
              visualSide === "left" ? " personal-story-composition" : ""
            }`}
          >
            {visualSide === "left" ? frame : null}
            <div
              className={`journey-story-copy${visualSide === "left" ? " personal-story-copy" : ""}`}
            >
              {children}
            </div>
            {visualSide === "right" ? frame : null}
          </div>
        </m.div>
      </div>

      <MobileStory frames={frames} label={label}>
        {children}
      </MobileStory>

      <div
        className={`journey-story-reduced journey-story-reduced-fallback${
          visualSide === "left" ? " personal-story-reduced" : ""
        }`}
      >
        {visualSide === "left" ? (
          <>
            <StaticStoryImages frames={frames} label={label} />
            <div className="journey-story-copy personal-story-copy">{children}</div>
          </>
        ) : (
          <>
            <div className="journey-story-copy">{children}</div>
            <StaticStoryImages frames={frames} label={label} />
          </>
        )}
      </div>
    </section>
  );
}
