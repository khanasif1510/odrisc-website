"use client";

import { useState } from "react";

import { ScrollAwareSiteHeader } from "@/components/scroll-aware-site-header";

import { BrandMark } from "./brand-mark";

type NavItem = Readonly<{ label: string; href: string }>;

type SiteHeaderProps = Readonly<{
  locale: string;
  audience: "patient" | "provider";
  items: readonly NavItem[];
}>;

export function SiteHeader({ locale, audience, items }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const prefix = locale === "en" ? "" : `/${locale}`;
  const otherPath = audience === "patient" ? "providers" : "patients";
  const homePath = audience === "patient" ? "patients" : "providers";
  const visibleItems = audience === "patient" ? [] : items;

  return (
    <ScrollAwareSiteHeader audience={audience}>
      <a
        className="brand-link"
        href={`${prefix}/${homePath}/`}
        aria-label={`ODRISC ${audience} home`}
      >
        <BrandMark />
      </a>
      {visibleItems.length > 0 ? (
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
          <span className="sr-only">Toggle navigation</span>
        </button>
      ) : null}
      <nav
        id="site-navigation"
        className={open ? "site-nav open" : "site-nav"}
        aria-label={`${audience} navigation`}
      >
        {visibleItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="audience-switch" href={`${prefix}/${otherPath}/`}>
          {audience === "patient" ? "For providers" : "For patients"}
        </a>
      </nav>
    </ScrollAwareSiteHeader>
  );
}
