import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { PatientTopicPage } from "../_components/patient-topic-page";

export const metadata: Metadata = {
  title: "Nutrition | ODRISC",
  description: "Explore ODRISC's planned pregnancy nutrition support.",
  robots: { index: false, follow: false },
};
export default async function NutritionPage({
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
      eyebrow="Nutrition · Pregnancy-aware support"
      title="Nourishment shaped around your"
      accent="journey."
      introduction="ODRISC is exploring structured nutrition support for different pregnancy stages, with professional involvement and space for individual and regional needs."
      status="Status to confirm"
      sections={[
        {
          title: "Stage-aware",
          body: "Nutrition needs can change before and during pregnancy. Support should reflect pregnancy stage and individual context.",
        },
        {
          title: "Professionally connected",
          body: "Personalized nutrition care belongs with an appropriately qualified professional who understands your health context.",
        },
        {
          title: "Respectfully practical",
          body: "Support should account for culture, access, preferences and daily life without judgement or therapeutic guarantees.",
        },
      ]}
      boundary="This page provides general information only. Do not change your diet or treatment plan because of this page; speak with a qualified healthcare or nutrition professional."
    />
  );
}
