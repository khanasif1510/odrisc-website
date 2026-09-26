import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { providerRoutes } from "@/content/providers/site";
import styles from "@/components/provider/provider.module.css";
import { SiteHeader } from "../../_components/site-header";

export async function providerLocale(params: Promise<{ locale: string }>) {
  const { locale } = await params;
  // Arabic publication requires reviewed clinical translation (ADR-016).
  if (locale !== "en") {
    notFound();
  }
  setRequestLocale(locale);
  return locale;
}

export function ProviderShell({
  locale,
  children,
}: Readonly<{ locale: string; children: ReactNode }>) {
  return (
    <div className={styles.site} lang="en" dir="ltr">
      <nav aria-label="Skip links">
        <a className={styles.skip} href="#provider-content">
          Skip to content
        </a>
      </nav>
      <SiteHeader
        locale={locale}
        audience="provider"
        items={[
          { label: "Platform", href: providerRoutes.platform },
          { label: "Clinical Approach", href: providerRoutes.approach },
        ]}
      />
      <main id="provider-content">{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <strong>
            ODRISC <span className={styles.kicker}>The intelligence layer for pregnancy care</span>
          </strong>
          <div>
            <a href={providerRoutes.patients}>For patients</a>
            <a href={`${providerRoutes.approach}#privacy`}>Privacy & clinical use</a>
            <a href={providerRoutes.contact}>Contact</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© 2026 ODRISC Technologies</span>
          <span>
            Supports professional review. Clinical decisions remain with the treating clinician.
            <br />
            Website preview · Synthetic demonstration data · Publication review pending
          </span>
        </div>
      </footer>
    </div>
  );
}

export function TextLink({ href, children }: Readonly<{ href: string; children: ReactNode }>) {
  return (
    <a className={styles.textLink} href={href}>
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}

export function DetailHero({
  eyebrow,
  title,
  body,
}: Readonly<{ eyebrow: string; title: string; body: string }>) {
  return (
    <section className={styles.detailHero}>
      <div>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href={providerRoutes.home}>For clinicians</a>
          <ArrowRight size={12} aria-hidden="true" />
          <span>{eyebrow}</span>
        </nav>
        <span className={styles.kicker}>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </section>
  );
}

export function ProviderClosing() {
  return (
    <section className={styles.closing}>
      <div>
        <div>
          <span className={styles.kicker}>Explore the clinical view</span>
          <h2>
            See the story behind
            <br />
            each assessment.
          </h2>
        </div>
        <a className={styles.primary} href={providerRoutes.growth}>
          Explore fetal growth <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
