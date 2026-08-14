import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

import { BrandMark } from "../_components/brand-mark";

export const metadata: Metadata = { title: "Contact | ODRISC" };

export default async function ContactPage({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <main className="review-state-page contact-state">
      <a href={`${prefix}/`}>
        <BrandMark />
      </a>
      <div>
        <span className="eyebrow">Contact pathway · In preparation</span>
        <h1>Stay connected to the ODRISC story.</h1>
        <p>
          The public contact workflow is not active in this review build. No personal or health
          information is collected.
        </p>
        <div className="button-row">
          <a className="button primary" href={`${prefix}/patients/`}>
            Patient experience
          </a>
          <a className="button quiet" href={`${prefix}/providers/`}>
            Provider experience
          </a>
        </div>
      </div>
    </main>
  );
}
