import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

import { SiteHeader } from "../../_components/site-header";

export const metadata: Metadata = { title: "Request a Demonstration | ODRISC" };

export default async function RequestDemonstrationPage({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <main className="audience-page provider-page">
      <SiteHeader
        locale={locale}
        audience="provider"
        items={[{ label: "Back to platform", href: `${prefix}/providers/` }]}
      />
      <section className="review-state-page">
        <div>
          <span className="eyebrow">Provider demonstration · Workflow pending</span>
          <h1>Let’s explore the clinical direction together.</h1>
          <p>
            ODRISC’s maternal and fetal intelligence capabilities are in development. The
            demonstration-request workflow is not yet active, so this review build does not collect
            or transmit your information.
          </p>
        </div>
        <aside className="review-panel">
          <span className="status-label">No submission enabled</span>
          <h2>What a walkthrough will cover</h2>
          <ul className="check-list">
            <li>Longitudinal maternal and fetal context</li>
            <li>Illustrative monitoring timelines</li>
            <li>Product status and validation boundaries</li>
            <li>Potential clinical workflow fit</li>
          </ul>
          <a className="button primary" href={`${prefix}/providers/`}>
            Return to provider experience
          </a>
        </aside>
      </section>
    </main>
  );
}
