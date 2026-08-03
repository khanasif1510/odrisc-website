import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

type SharedEntryPageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export default async function SharedEntryPage({ params }: SharedEntryPageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const translate = await getTranslations("SharedEntry");

  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1>{translate("siteName")}</h1>
    </main>
  );
}
