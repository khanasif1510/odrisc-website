"use client";

import type { ReactNode } from "react";
import { m } from "motion/react";

type AnimatedGradientLinkProps = Readonly<{
  children: ReactNode;
  className: string;
  href: string;
}>;

export function AnimatedGradientLink({ children, className, href }: AnimatedGradientLinkProps) {
  return (
    <m.a className={className} href={href}>
      {children}
      <m.span
        className="audience-card-running-border"
        aria-hidden="true"
        animate={{ rotate: [0, 360] }}
        transition={{
          duration: 6,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
      />
    </m.a>
  );
}
