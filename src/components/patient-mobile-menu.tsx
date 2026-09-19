"use client";

import Image from "next/image";
import { AnimatePresence, m } from "motion/react";
import { type KeyboardEvent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type PatientMobileMenuProps = Readonly<{
  prefix: string;
}>;

export function PatientMobileMenu({ prefix }: PatientMobileMenuProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const links = [
    {
      label: "WHY ODRISC",
      href: `${prefix}/about/`,
      image: "/media/why-odrisc-hero-1672x941-v2.png",
      imagePosition: "70% center",
    },
    {
      label: "The ODRISC App",
      href: "https://app.odrisc.com",
      image: "/media/patient-connected-story/join-community-primary-desktop-1145x1374-v2.png",
      imagePosition: "center",
    },
    {
      label: "For Providers",
      href: `${prefix}/providers/`,
      image: "/media/why-odrisc-collaboration-clinicians-mobile-1672x941-v1.png",
      imagePosition: "center",
    },
  ] as const;

  const closeMenu = () => {
    setOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const mobileBreakpoint = window.matchMedia("(max-width: 760px)");
    const focusFrame = window.requestAnimationFrame(() => closeRef.current?.focus());

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };
    const handleBreakpointChange = (event: MediaQueryListEvent) => {
      if (!event.matches) {
        closeMenu();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    mobileBreakpoint.addEventListener("change", handleBreakpointChange);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      mobileBreakpoint.removeEventListener("change", handleBreakpointChange);
    };
  }, [open]);

  const handleMenuKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = Array.from(
      menuRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? [],
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements.at(-1);

    if (!firstElement || !lastElement) {
      return;
    }

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  return (
    <>
      <button
        ref={triggerRef}
        className="patient-mobile-menu-trigger"
        type="button"
        aria-expanded={open}
        aria-controls="patient-mobile-navigation"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <span />
        <span />
        <span />
      </button>
      {typeof document === "undefined"
        ? null
        : createPortal(
            <AnimatePresence initial={false}>
              {open ? (
                <m.div
                  ref={menuRef}
                  id="patient-mobile-navigation"
                  className="patient-mobile-menu"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="patient-mobile-menu-title"
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                  onKeyDown={handleMenuKeyDown}
                >
                  <button
                    ref={closeRef}
                    className="patient-mobile-menu-close"
                    type="button"
                    aria-label="Close menu"
                    onClick={closeMenu}
                  >
                    <span />
                    <span />
                  </button>
                  <div className="patient-mobile-menu-content">
                    <div className="patient-mobile-menu-intro">
                      <h2 id="patient-mobile-menu-title">
                        Discover <span>ODRISC</span>
                      </h2>
                      <p>Explore a connected pregnancy experience</p>
                    </div>
                    <nav className="patient-mobile-menu-cards" aria-label="Discover ODRISC">
                      {links.map((link) => (
                        <a className="patient-mobile-menu-card" href={link.href} key={link.label}>
                          <span className="patient-mobile-menu-card-frame" aria-hidden="true">
                            <Image
                              src={link.image}
                              alt=""
                              fill
                              sizes="96px"
                              style={{ objectPosition: link.imagePosition }}
                            />
                          </span>
                          <span className="patient-mobile-menu-card-label">{link.label}</span>
                          <span className="patient-mobile-menu-card-icon" aria-hidden="true" />
                        </a>
                      ))}
                    </nav>
                  </div>
                </m.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )}
    </>
  );
}
