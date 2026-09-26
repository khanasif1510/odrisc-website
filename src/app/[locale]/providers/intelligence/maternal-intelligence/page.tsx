import type { Metadata } from "next";
import styles from "@/components/provider/provider.module.css";
import { providerRoutes, providerStatus } from "@/content/providers/site";
import {
  DetailHero,
  ProviderClosing,
  ProviderShell,
  TextLink,
  providerLocale,
} from "../../_components/provider-shell";

export const metadata: Metadata = {
  title: "The maternal–fetal view | ODRISC",
  robots: { index: false, follow: false },
};

export default async function MaternalIntelligencePage({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const locale = await providerLocale(params);
  return (
    <ProviderShell locale={locale}>
      <DetailHero
        eyebrow="Maternal–fetal view"
        title="Two journeys. One clinical conversation."
        body="The connected-view concept brings relevant maternal context alongside fetal observations. Each retains its source, date and meaning, so the relationship can be considered by the treating professional."
      />
      <section className={styles.section}>
        <div className={`${styles.sectionInner} ${styles.split}`}>
          <div className={styles.splitCopy}>
            <span className={styles.kicker}>
              Connected-view concept · {providerStatus.intelligence}
            </span>
            <h2>Context alongside growth.</h2>
            <p>
              Maternal history, weight observations and pregnancy context may help frame the
              clinical conversation. Seeing them alongside fetal measurements does not, by itself,
              establish a disease mechanism or a diagnosis.
            </p>
            <TextLink href={providerRoutes.growth}>Explore the fetal-growth demonstration</TextLink>
          </div>
          <div className={styles.paired}>
            <div>
              <span className={styles.kicker}>Maternal</span>
              <h3>Relevant context</h3>
              <p>History, observations, source and date.</p>
            </div>
            <div>
              <span className={styles.kicker}>Fetal</span>
              <h3>Serial assessments</h3>
              <p>Measurements, intervals and Doppler observations.</p>
            </div>
            <span>Shared chronology. Distinct observations. Professional interpretation.</span>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.quietSection}`}>
        <div className={`${styles.sectionInner} ${styles.prose}`}>
          <h2>A connection built on permission and review.</h2>
          <p>
            The patient and clinician experiences have different roles and information needs. Any
            sharing between them must follow the implemented permission and verification workflow. A
            patient-entered value should not appear automatically as a verified clinical record.
          </p>
          <p>
            This page explains the product direction. It does not demonstrate maternal analytics,
            patient data sharing or a live maternal–fetal monitoring service.
          </p>
          <TextLink href={`${providerRoutes.approach}#privacy`}>
            Privacy and clinical boundaries
          </TextLink>
        </div>
      </section>
      <ProviderClosing />
    </ProviderShell>
  );
}
