"use client";

import { useEffect, useRef } from "react";

const DESKTOP_VIDEO = "/media/patient-section6-maternal-fetal-intelligence-desktop-20260818-v3.mp4";
const MOBILE_VIDEO =
  "/media/patient-section6-maternal-fetal-intelligence-mobile-portrait-20260818-v5.mp4";
const DESKTOP_VIDEO_POSTER =
  "/media/patient-section6-maternal-fetal-intelligence-poster-20260818-v2.jpg";
const MOBILE_VIDEO_POSTER =
  "/media/patient-section6-maternal-fetal-intelligence-mobile-poster-20260818-v4.jpg";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const MOBILE_VIDEO_QUERY = "(max-width: 900px)";

export function PatientSectionSixVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    const mobileVideoQuery = window.matchMedia(MOBILE_VIDEO_QUERY);

    if (!video) {
      return;
    }
    const player = video;

    function syncPlaybackPreference() {
      player.loop = !mediaQuery.matches;
      player.preload = mediaQuery.matches ? "metadata" : "auto";

      if (mediaQuery.matches) {
        player.pause();
        player.currentTime = 0;
        return;
      }

      void player.play().catch(() => undefined);
    }

    const syncResponsiveSource = () => {
      const useMobileVideo = mobileVideoQuery.matches;
      const nextSource = useMobileVideo ? MOBILE_VIDEO : DESKTOP_VIDEO;
      const nextPoster = useMobileVideo ? MOBILE_VIDEO_POSTER : DESKTOP_VIDEO_POSTER;

      if (player.getAttribute("src") !== nextSource) {
        player.src = nextSource;
        player.load();
      }
      if (player.getAttribute("poster") !== nextPoster) {
        player.poster = nextPoster;
      }
      syncPlaybackPreference();
    };

    syncResponsiveSource();
    mediaQuery.addEventListener("change", syncPlaybackPreference);
    mobileVideoQuery.addEventListener("change", syncResponsiveSource);
    window.addEventListener("resize", syncResponsiveSource);

    return () => {
      mediaQuery.removeEventListener("change", syncPlaybackPreference);
      mobileVideoQuery.removeEventListener("change", syncResponsiveSource);
      window.removeEventListener("resize", syncResponsiveSource);
    };
  }, []);

  return (
    <div className="patient-section6-video-shell" aria-labelledby="patient-section6-title">
      <h2 id="patient-section6-title" className="sr-only">
        One pregnancy, two connected journeys
      </h2>
      <p id="patient-section6-description" className="sr-only">
        ODRISC brings maternal information such as pregnancy risk, BMI, weight, nutrition, activity
        and maternal health together with fetal information such as gestational age, biometry,
        growth, percentiles, growth over time and clinical observations. The animation presents
        these as one connected maternal and fetal intelligence journey.
      </p>
      <video
        ref={videoRef}
        className="patient-section6-video"
        aria-describedby="patient-section6-description"
        loop
        muted
        playsInline
        poster={DESKTOP_VIDEO_POSTER}
        preload="auto"
      >
        <source src={MOBILE_VIDEO} media={MOBILE_VIDEO_QUERY} type="video/mp4" />
        <source src={DESKTOP_VIDEO} type="video/mp4" />
      </video>
    </div>
  );
}
