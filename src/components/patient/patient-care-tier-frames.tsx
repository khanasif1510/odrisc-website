"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "motion/react";

type PatientCareTierFramesProps = { href: string };

type TierPanelProps = {
  description: readonly string[];
  href: string;
  imageAlt?: string;
  imageSrc?: string;
  mobileImageSrc?: string;
  title: string;
};

function TierPanel({
  description,
  href,
  imageAlt = "A pregnancy care consultation",
  imageSrc = "/media/patient-connected-story/personal-journey-consultation-desktop-20260814-v2.png",
  mobileImageSrc,
  title,
}: TierPanelProps) {
  return (
    <article className="section-seven-tier-panel">
      <figure className="section-seven-tier-frame section-seven-tier-frame-primary">
        <picture>
          {mobileImageSrc ? <source media="(max-width: 760px)" srcSet={mobileImageSrc} /> : null}
          <Image src={imageSrc} alt={imageAlt} fill sizes="(max-width: 760px) 80vw, 29vw" />
        </picture>
      </figure>
      <div className="section-seven-membership-copy">
        <h3>{title}</h3>
        <p>
          {description.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
        <a className="section-seven-about-action section-seven-membership-action" href={href}>
          <span className="section-seven-about-icon" aria-hidden="true">
            <Image
              className="section-seven-about-icon-image"
              src="/brand/website-icon.svg"
              alt=""
              width={86}
              height={62}
            />
          </span>
          <span className="section-seven-about-button">Get Started</span>
        </a>
      </div>
    </article>
  );
}

export function PatientCareTierFrames({ href }: PatientCareTierFramesProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const firstPanelRef = useRef<HTMLDivElement>(null);
  const secondPanelRef = useRef<HTMLDivElement>(null);
  const [travelDistance, setTravelDistance] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start start", "end end"],
  });
  const trackX = useTransform(
    scrollYProgress,
    [0.08, 0.78],
    [0, prefersReducedMotion ? 0 : -travelDistance],
  );

  useEffect(() => {
    const measure = () => {
      if (!firstPanelRef.current || !secondPanelRef.current) {
        return;
      }
      setTravelDistance(secondPanelRef.current.offsetLeft - firstPanelRef.current.offsetLeft);
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (stageRef.current) {
      observer.observe(stageRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="section-seven-choice-stage" ref={stageRef}>
      <div className="section-seven-choice-sticky">
        <h2>Choose what works for you</h2>
        <div className="section-seven-tier-viewport">
          <m.div className="section-seven-tier-track" style={{ x: trackX }}>
            <div ref={firstPanelRef}>
              <TierPanel
                title="Gold Care Programme"
                imageSrc="/media/patient-connected-story/join-community-primary-desktop-1145x1374-v2.png"
                mobileImageSrc="/media/patient-connected-story/join-community-primary-mobile-1672x941-v2.png"
                imageAlt="A pregnant woman showing the ODRISC app on her smartphone"
                description={[
                  "Personalised one-to-one dietitian and physiotherapy support, designed by experts",
                  "to fit your lifestyle and guide you confidently throughout your eligible care period.",
                ]}
                href={href}
              />
            </div>
            <div ref={secondPanelRef}>
              <TierPanel
                title="Platinum Care Programme"
                imageSrc="/media/patient-connected-story/platinum-membership-video-call-desktop-1200x1440-v1.svg"
                mobileImageSrc="/media/patient-connected-story/platinum-membership-video-call-mobile-1600x900-v1.svg"
                imageAlt="A pregnant woman speaking with a pregnancy care professional by video call"
                description={[
                  "Enhanced one-to-one dietitian and physiotherapy care, personalised to your needs",
                  "and continuously adapted by experts throughout your eligible care period.",
                ]}
                href={href}
              />
            </div>
          </m.div>
        </div>
      </div>
    </div>
  );
}
