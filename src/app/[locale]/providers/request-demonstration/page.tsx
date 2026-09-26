import type { Metadata } from "next";
import styles from "@/components/provider/provider.module.css";
import { providerRoutes, providerStatus } from "@/content/providers/site";
import { DetailHero, ProviderShell, TextLink, providerLocale } from "../_components/provider-shell";

export const metadata: Metadata = {
  title: "Clinician access | ODRISC",
  robots: { index: false, follow: false },
};

export default async function ClinicianAccessPage({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const locale = await providerLocale(params);
  return (
    <ProviderShell locale={locale}>
      <DetailHero
        eyebrow="Clinician access"
        title="Explore the view. Account access comes next."
        body="Clinician signup and login will connect to the ODRISC application account system. That connection is not active in this website preview."
      />
      <section className={styles.section}>
        <div className={`${styles.sectionInner} ${styles.prose}`}>
          <span className={styles.kicker}>{providerStatus.access}</span>
          <h2>Continue with the demonstration.</h2>
          <p>
            You can explore the fictional fetal-growth case without creating an account. This page
            does not collect credentials, register an account or grant access to patient records.
          </p>
          <p>
            The clinician-specific signup and login destinations will be connected once the
            application details are provided.
          </p>
          <TextLink href={providerRoutes.growth}>Explore fetal growth</TextLink>
        </div>
      </section>
    </ProviderShell>
  );
}
