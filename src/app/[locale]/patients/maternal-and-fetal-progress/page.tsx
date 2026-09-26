import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { PatientTopicPage } from "../_components/patient-topic-page";

export const metadata: Metadata = {
  title: "Monitor | ODRISC",
  description: "See how ODRISC is developing a clearer view of maternal and fetal progress.",
  robots: { index: false, follow: false },
};
export default async function MonitorPage({
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
      eyebrow="Monitor · Maternal and fetal progress"
      title="See change as part of a"
      accent="timeline."
      introduction="ODRISC is developing ways to organize approved maternal and fetal information over time so patients can follow their journey and prepare for more informed conversations."
      status="In development"
      sections={[
        {
          title: "Connected over time",
          body: "A timeline can place separate appointments and reports in sequence without asking you to interpret clinical data alone.",
        },
        {
          title: "Patient-friendly context",
          body: "Clear summaries may support understanding while detailed interpretation remains with qualified healthcare professionals.",
        },
        {
          title: "Illustrative, not live",
          body: "The public experience is an explanation of the concept. It is not connected to Patient records or real-time monitoring.",
        },
      ]}
      boundary="ODRISC does not provide emergency monitoring, independent fetal-growth interpretation or diagnosis. Contact your care team with questions and local emergency services for urgent concerns."
    />
  );
}
