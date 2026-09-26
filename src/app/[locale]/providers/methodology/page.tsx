import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import styles from "@/components/provider/provider.module.css";
import { clinicalSources, providerStatus } from "@/content/providers/site";
import {
  DetailHero,
  ProviderClosing,
  ProviderShell,
  providerLocale,
} from "../_components/provider-shell";

export const metadata: Metadata = {
  title: "Clinical approach and evidence | ODRISC",
  robots: { index: false, follow: false },
};

export default async function MethodologyPage({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const locale = await providerLocale(params);
  return (
    <ProviderShell locale={locale}>
      <DetailHero
        eyebrow="Clinical approach"
        title="Understand the method behind the view."
        body="Clinical references, software verification and clinical validation answer different questions. ODRISC’s evidence approach keeps their roles distinct, with the intended use and limitations available for review."
      />
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionTitle}>
            <h2>Three questions for clinical evidence.</h2>
          </div>
          <div className={styles.cardGrid}>
            <article className={styles.topicCard}>
              <span>01 / PUBLISHED REFERENCES</span>
              <h3>The clinical foundation</h3>
              <p>
                Guidelines and reference publications describe the methods and clinical context.
                Citing a guideline does not establish the performance of an ODRISC implementation.
              </p>
            </article>
            <article className={styles.topicCard}>
              <span>02 / SOFTWARE VERIFICATION</span>
              <h3>The implemented method</h3>
              <p>
                Verification compares software outputs against the specified reference
                implementation, including inputs, units, missing data and applicable ranges. Results
                are not published in this preview.
              </p>
            </article>
            <article className={styles.topicCard}>
              <span>03 / CLINICAL VALIDATION</span>
              <h3>The evaluated use</h3>
              <p>
                Clinical performance requires appropriate evaluation in the intended population and
                setting. This website makes no claim of completed clinical validation or improved
                outcomes.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section id="references" className={`${styles.section} ${styles.quietSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionTitle}>
            <span className={styles.kicker}>Read the underlying sources</span>
            <h2>
              Clinical references,
              <br />
              with their context intact.
            </h2>
            <p>
              These sources inform the clinical discussion. They are not endorsements of ODRISC.
              Each implemented method requires its own version, population, gestational range and
              verification record.
            </p>
          </div>
          <div className={styles.sourceList}>
            {clinicalSources.map((source) => (
              <article className={styles.sourceItem} key={source.href}>
                <div>
                  <h3>{source.title}</h3>
                  <span>{source.organization}</span>
                </div>
                <p>{source.description}</p>
                <a
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Read ${source.title} (opens a new tab)`}
                >
                  <ArrowUpRight size={22} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={`${styles.sectionInner} ${styles.prose}`}>
          <h2>What can be explored today.</h2>
          <p>
            The fetal-growth experience is demonstrable through a fixed fictional case. Doppler and
            staging context are included in that page. Provider intelligence is recorded as{" "}
            {providerStatus.intelligence.toLowerCase()} while general release status is confirmed;
            report extraction is {providerStatus.extraction.toLowerCase()}.
          </p>
          <p>
            The public demonstration displays reported estimated fetal weights, time intervals and
            example Doppler observations. It provides no individual clinical assessment or assigned
            clinical stage. All records are fictional.
          </p>
          <p>
            Availability for clinical use, the final method mappings and any performance results
            will need to be documented for publication. A functioning preview is not evidence of
            regulatory clearance.
          </p>
        </div>
      </section>
      <section id="privacy" className={`${styles.section} ${styles.blushSection}`}>
        <div className={`${styles.sectionInner} ${styles.trustGrid}`}>
          <div>
            <h3>Privacy in this demonstration</h3>
            <p>
              This preview uses prepared synthetic records. It has no patient upload, clinical-data
              entry or credential collection. Clinician signup and login integration with the
              existing application is pending. Account privacy and terms must be available before
              that connection is activated.
            </p>
          </div>
          <div>
            <h3>Intended clinical boundary</h3>
            <p>
              ODRISC supports professional review and does not replace the treating clinician. A
              missing value or absence of a flag is not reassurance. The website demonstration is
              not intended for diagnosis, treatment decisions or emergency care.
            </p>
          </div>
        </div>
      </section>
      <ProviderClosing />
    </ProviderShell>
  );
}
