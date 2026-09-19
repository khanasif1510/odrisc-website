import type { Metadata } from "next";
import { ProviderHome } from "./_components/provider-home";
import { ProviderShell, providerLocale } from "./_components/provider-shell";

export const metadata: Metadata = {
  title: "Maternal health. Fetal growth. One clinical view. | ODRISC",
  description:
    "Explore ODRISC’s consultation-led approach to longitudinal pregnancy review, fetal growth, source records and clinician control.",
  robots: { index: false, follow: false },
};

export default async function ProviderPage({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const locale = await providerLocale(params);
  return (
    <ProviderShell locale={locale}>
      <ProviderHome />
    </ProviderShell>
  );
}
