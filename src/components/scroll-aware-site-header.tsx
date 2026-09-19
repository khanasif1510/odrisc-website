"use client";

import { m, useReducedMotion } from "motion/react";
import { type ReactNode, useEffect, useRef, useState } from "react";

type ScrollAwareSiteHeaderProps = Readonly<{
  audience: "patient" | "provider";
  children: ReactNode;
}>;

export function ScrollAwareSiteHeader({ audience, children }: ScrollAwareSiteHeaderProps) {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let animationFrame = 0;

    const updateHeader = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const movement = currentScrollY - lastScrollY.current;
      setIsAtTop(currentScrollY < 24);

      if (currentScrollY < 24) {
        setIsScrollingUp(false);
      } else if (Math.abs(movement) >= 6) {
        setIsScrollingUp(movement < 0);
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
  }, []);

  const showScrollSurface = !isAtTop && isScrollingUp;

  return (
    <header
      className={`site-header ${audience} ${isScrollingUp ? "is-scroll-up" : "is-scroll-down"} ${isAtTop ? "is-at-top" : ""}`}
    >
      <m.div
        className="site-header-frame"
        animate={{
          backgroundColor: showScrollSurface
            ? "rgba(255, 255, 255, 0.94)"
            : "rgba(255, 255, 255, 0)",
          boxShadow: showScrollSurface
            ? "0 14px 44px rgba(39, 55, 49, 0.12)"
            : "0 0 0 rgba(39, 55, 49, 0)",
        }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: "easeInOut" }}
      >
        {children}
      </m.div>
    </header>
  );
}
