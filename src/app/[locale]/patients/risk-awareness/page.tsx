import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { PatientTopicPage } from "../_components/patient-topic-page";

export const metadata: Metadata = {
  title: "Risk Awareness | ODRISC",
  description: "Understand the difference between pregnancy risk awareness and diagnosis.",
  robots: { index: false, follow: false },
};

export default async function RiskAwarenessPage({
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
      eyebrow="RAS Test · Risk awareness"
      title="Awareness can begin a"
      accent="conversation."
      introduction="ODRISC is exploring a risk-awareness experience that may help you understand contributing factors and prepare questions for a qualified healthcare professional. The public test is not currently available."
      status="Status to confirm"
      sections={[
        {
          title: "Risk is not diagnosis",
          body: "A risk estimate can suggest that a clinical conversation may be useful. It cannot confirm that a condition is present.",
        },
        {
          title: "Context matters",
          body: "Health history and pregnancy information should be reviewed with a qualified professional, not interpreted in isolation.",
        },
        {
          title: "Testing stays clinical",
          body: "Only approved clinical assessment and testing can guide diagnosis, monitoring and treatment decisions.",
        },
      ]}
      boundary="No answers are collected on this public page. ODRISC does not diagnose conditions or replace screening, testing, emergency care or professional medical advice."
    />
  );
}
