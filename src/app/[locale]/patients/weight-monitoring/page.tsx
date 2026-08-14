import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

import { PatientTopicPage } from "../_components/patient-topic-page";

export const metadata: Metadata = {
  title: "Weight Monitoring | ODRISC",
  description: "Explore ODRISC's planned, non-stigmatizing pregnancy weight support.",
  robots: { index: false, follow: false },
};

export default async function WeightMonitoringPage({
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
      eyebrow="Weight · Change over time"
      title="A number makes more sense in"
      accent="context."
      introduction="ODRISC is exploring non-stigmatizing ways to help patients follow weight change over time with appropriate professional context."
      status="Status to confirm"
      sections={[
        {
          title: "Trends, not judgement",
          body: "Longitudinal change can be more useful than focusing on one isolated measurement.",
        },
        {
          title: "Individual context",
          body: "Appropriate goals depend on health history, pregnancy stage and professional assessment.",
        },
        {
          title: "Connected support",
          body: "Weight information should support respectful conversations with your healthcare team—not shame or pressure.",
        },
      ]}
      boundary="This page does not set a weight target or provide weight-loss advice. Discuss weight changes and appropriate monitoring with a qualified healthcare professional."
    />
  );
}
