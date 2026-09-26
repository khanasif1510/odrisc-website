import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { AnimatedGradientLink } from "@/components/animated-gradient-link";
import { AnimatedPlatformTagline } from "@/components/animated-platform-tagline";
import { routing } from "@/i18n/routing";

import { BrandMark } from "./_components/brand-mark";

type SharedEntryPageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export default async function SharedEntryPage({ params }: SharedEntryPageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <main className="gateway-page">
      <header className="gateway-header">
        <BrandMark logoSizes="(max-width: 533px) 96px, (max-width: 800px) 18vw, 144px" />
        <AnimatedPlatformTagline />
      </header>
      <section className="gateway-hero">
        <div className="gateway-copy">
          <span className="eyebrow">One connected platform · Two distinct journeys</span>
          <h1>
            Every pregnancy has a <em>story.</em>
          </h1>
          <p>
            ODRISC helps patients and healthcare professionals understand how that story is evolving
            over time.
          </p>
          <div className="gateway-prompt">
            <span>Choose your experience</span>
            <i />
          </div>
        </div>
      </section>
      <section className="audience-grid" aria-label="Choose your ODRISC experience">
        <AnimatedGradientLink className="audience-card patient-card" href={`${prefix}/patients/`}>
          <span className="card-index"></span>
          <div>
            <span className="audience-label">I am a</span>
            <h2>Patient</h2>
            <p>
              Understand, prepare and take part in your pregnancy journey with calm, supportive
              guidance.
            </p>
          </div>
          <span className="card-action">
            Explore patient experience{" "}
            <span className="gateway-card-action-icon" aria-hidden="true" />
          </span>
        </AnimatedGradientLink>
        <AnimatedGradientLink className="audience-card provider-card" href={`${prefix}/providers/`}>
          <span className="card-index"></span>
          <div>
            <span className="audience-label">I am a</span>
            <h2>
              Healthcare
              <br className="gateway-provider-mobile-break" /> provider
            </h2>
            <p>
              Explore longitudinal maternal and fetal intelligence designed to support clinical
              monitoring.
            </p>
          </div>
          <span className="card-action">
            Explore provider experience{" "}
            <span className="gateway-card-action-icon" aria-hidden="true" />
          </span>
        </AnimatedGradientLink>
      </section>
      <footer className="gateway-footer">
        <span>© 2026 ODRISC TECHNOLOGIES LLP. All Rights Reserved.</span>
      </footer>
    </main>
  );
}
