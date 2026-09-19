"use client";

import { useEffect, useRef, useState } from "react";
import { m, useReducedMotion } from "motion/react";

const CROSSFADE_DURATION_MS = 900;
const CROSSFADE_LEAD_SECONDS = 1;
const MOBILE_HERO_VIDEO = "/media/patient-hero-mobile-20260818-v2.mp4";
const DESKTOP_HERO_VIDEO = "/media/patient-hero-desktop.mp4";
const MOBILE_HERO_QUERY = "(max-width: 900px)";

export function ResponsivePatientHeroVideo() {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([null, null]);
  const crossfadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isCrossfading = useRef(false);
  const prefersReducedMotion = useReducedMotion();
  const [activeVideo, setActiveVideo] = useState(0);
  const [incomingVideo, setIncomingVideo] = useState<number | null>(null);

  useEffect(() => {
    const mobileQuery = window.matchMedia(MOBILE_HERO_QUERY);

    function syncResponsiveSource() {
      const nextSource = mobileQuery.matches ? MOBILE_HERO_VIDEO : DESKTOP_HERO_VIDEO;
      const videos = videoRefs.current.filter((video) => video !== null);

      if (videos.every((video) => video.getAttribute("src") === nextSource)) {
        return;
      }

      if (crossfadeTimer.current) {
        clearTimeout(crossfadeTimer.current);
        crossfadeTimer.current = null;
      }
      isCrossfading.current = false;
      setIncomingVideo(null);
      setActiveVideo(0);

      videos.forEach((video, index) => {
        video.src = nextSource;
        video.load();
        video.currentTime = 0;

        if (index === 0 && !prefersReducedMotion) {
          void video.play().catch(() => undefined);
        }
      });
    }

    syncResponsiveSource();
    mobileQuery.addEventListener("change", syncResponsiveSource);
    window.addEventListener("resize", syncResponsiveSource);

    return () => {
      mobileQuery.removeEventListener("change", syncResponsiveSource);
      window.removeEventListener("resize", syncResponsiveSource);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    const videos = videoRefs.current;

    if (prefersReducedMotion) {
      videos.forEach((video) => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
      return;
    }

    const active = videos[activeVideo];
    void active?.play().catch(() => undefined);
  }, [activeVideo, prefersReducedMotion]);

  useEffect(
    () => () => {
      if (crossfadeTimer.current) {
        clearTimeout(crossfadeTimer.current);
      }
    },
    [],
  );

  function restartVideo(index: number) {
    const video = videoRefs.current[index];

    if (!video || prefersReducedMotion) {
      return;
    }

    video.currentTime = 0;
    void video.play().catch(() => undefined);
  }

  function beginCrossfade(index: number) {
    const outgoing = videoRefs.current[index];

    if (
      !outgoing ||
      index !== activeVideo ||
      isCrossfading.current ||
      prefersReducedMotion ||
      !Number.isFinite(outgoing.duration) ||
      outgoing.duration - outgoing.currentTime > CROSSFADE_LEAD_SECONDS
    ) {
      return;
    }

    const nextIndex = index === 0 ? 1 : 0;
    const incoming = videoRefs.current[nextIndex];

    if (!incoming) {
      return;
    }

    isCrossfading.current = true;
    incoming.currentTime = 0;

    void incoming
      .play()
      .then(() => {
        setIncomingVideo(nextIndex);
        crossfadeTimer.current = setTimeout(() => {
          outgoing.pause();
          outgoing.currentTime = 0;
          setActiveVideo(nextIndex);
          setIncomingVideo(null);
          isCrossfading.current = false;
        }, CROSSFADE_DURATION_MS);
      })
      .catch(() => {
        isCrossfading.current = false;
        restartVideo(index);
      });
  }

  return (
    <div className="patient-hero-video-shell">
      {[0, 1].map((index) => {
        const isVisible =
          incomingVideo === index || (incomingVideo === null && activeVideo === index);
        const stateClass =
          incomingVideo === index
            ? "is-crossfade-in"
            : incomingVideo !== null && activeVideo === index
              ? "is-crossfade-out"
              : activeVideo === index
                ? "is-active"
                : "";

        return (
          <m.video
            key={index}
            ref={(video) => {
              videoRefs.current[index] = video;
            }}
            className={`patient-hero-video ${stateClass}`}
            initial={{ opacity: index === 0 ? 1 : 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.9, ease: "linear" }}
            style={{ zIndex: incomingVideo === index ? 2 : 1 }}
            aria-hidden="true"
            autoPlay={index === 0}
            muted
            playsInline
            preload="auto"
            onEnded={() => restartVideo(index)}
            onTimeUpdate={() => beginCrossfade(index)}
          >
            <source src={MOBILE_HERO_VIDEO} media={MOBILE_HERO_QUERY} type="video/mp4" />
            <source src={DESKTOP_HERO_VIDEO} type="video/mp4" />
          </m.video>
        );
      })}
    </div>
  );
}
