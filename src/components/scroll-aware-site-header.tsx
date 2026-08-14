"use client";

import { m, useReducedMotion } from "motion/react";
import { type ReactNode, useEffect, useRef, useState } from "react";

import { AnimatedHeaderLine } from "@/components/animated-header-line";

type ScrollAwareSiteHeaderProps = Readonly<{
  audience: "patient" | "provider";
  children: ReactNode;
}>;

export function ScrollAwareSiteHeader({ audience, children }: ScrollAwareSiteHeaderProps) {
  const [showScrollSurface, setShowScrollSurface] = useState(false);
  const lastScrollY = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (audience !== "patient") {
      return;
    }

    lastScrollY.current = window.scrollY;
    let animationFrame = 0;

    const updateHeader = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const movement = currentScrollY - lastScrollY.current;

      if (currentScrollY < 24) {
        setShowScrollSurface(false);
      } else if (Math.abs(movement) >= 6) {
        setShowScrollSurface(movement < 0);
      }

      lastScrollY.current = currentScrollY;
      animationFrame = 0;
    };

    const handleScroll = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(updateHeader);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [audience]);

  return (
    <header
      className={`site-header ${audience} ${showScrollSurface ? "is-scroll-up" : "is-scroll-down"}`}
    >
      <m.div
        className="site-header-frame"
        animate={
          audience === "patient"
            ? {
                backgroundColor: showScrollSurface
                  ? "rgba(255, 255, 255, 0.94)"
                  : "rgba(255, 255, 255, 0)",
                boxShadow: showScrollSurface
                  ? "0 14px 44px rgba(39, 55, 49, 0.12)"
                  : "0 0 0 rgba(39, 55, 49, 0)",
              }
            : undefined
        }
        transition={{ duration: prefersReducedMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </m.div>
      {audience === "provider" ? <AnimatedHeaderLine /> : null}
    </header>
  );
}
