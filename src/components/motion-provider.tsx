"use client";

import { domAnimation, LazyMotion, MotionConfig } from "motion/react";

type MotionProviderProps = Readonly<{
  children: React.ReactNode;
}>;

export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user" transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
