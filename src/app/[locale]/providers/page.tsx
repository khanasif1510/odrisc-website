import type { Metadata } from "next";
import { LookupDashboard } from "@/features/providers/lookup-dashboard";
import { ProviderShell, providerLocale } from "./_components/provider-shell";

export const metadata: Metadata = {
  title: "Fetal Growth — Interactive clinical cases | ODRISC",
  description:
    "Explore two illustrative clinical cases with traceable pregnancy dating, fetal growth, maternal observations and clinical source review.",
  robots: { index: false, follow: false },
};

export default async function ProviderPage({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const locale = await providerLocale(params);
  return (
    <ProviderShell locale={locale}>
      <LookupDashboard />
    </ProviderShell>
  );
}
