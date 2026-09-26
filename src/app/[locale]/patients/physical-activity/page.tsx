import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { PatientTopicPage } from "../_components/patient-topic-page";

export const metadata: Metadata = {
  title: "Fitness | ODRISC",
  description: "Explore ODRISC's planned pregnancy physical-activity support.",
  robots: { index: false, follow: false },
};
export default async function PhysicalActivityPage({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  return (
    <PatientTopicPage
      locale={locale}
      eyebrow="Fitness · Physical activity"
      title="Movement with safety at the"
      accent="centre."
      introduction="ODRISC is exploring structured, pregnancy-aware physical-activity support designed to complement—not replace—individual medical guidance."
      status="Status to confirm"
      sections={[
        {
          title: "Every pregnancy differs",
          body: "Appropriate activity depends on pregnancy stage, health context, symptoms and guidance from your healthcare professional.",
        },
        {
          title: "Safety comes first",
          body: "Contraindications and warning signs require professional assessment. No activity is universally appropriate for every pregnancy.",
        },
        {
          title: "Support, not pressure",
          body: "Movement should be presented without shame, competition or promises of a particular pregnancy outcome.",
        },
      ]}
      boundary="Seek medical clearance before beginning or changing activity during pregnancy. Stop and obtain professional advice if you experience concerning symptoms; use local emergency services for urgent care."
    />
  );
}
