import type { Metadata } from "next";
import { ProviderPlatformOverview } from "../_components/provider-home";
import styles from "@/components/provider/provider.module.css";
import { providerRoutes, providerStatus } from "@/content/providers/site";
import {
  ProviderClosing,
  ProviderShell,
  TextLink,
  providerLocale,
} from "../_components/provider-shell";

export const metadata: Metadata = {
  title: "The clinical platform | ODRISC",
  robots: { index: false, follow: false },
};

export default async function ClinicalPlatformPage({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const locale = await providerLocale(params);
  return (
    <ProviderShell locale={locale}>
      <ProviderPlatformOverview />
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionTitle}>
            <span className={styles.kicker}>Platform</span>
            <h2>One clinical view. From context to conversation.</h2>
            <p>
              ODRISC is designed to organise information around the consultation: establish the
              pregnancy context, review observations across visits, and keep the source behind each
              measurement available for review.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionTitle}>
            <h2>Context at every step.</h2>
          </div>
          <div className={styles.cardGrid}>
            <article className={styles.topicCard}>
              <span>01 / CONTEXT</span>
              <h3>Pregnancy dating</h3>
              <p>A documented baseline for every subsequent assessment.</p>
              <TextLink href="#pregnancy-dating">Explore dating</TextLink>
            </article>
            <article className={styles.topicCard}>
              <span>02 / CHANGE</span>
              <h3>Fetal growth</h3>
              <p>Serial measurements, interval change, Doppler and staging context.</p>
              <TextLink href={providerRoutes.growth}>Open the demonstration</TextLink>
            </article>
            <article className={styles.topicCard}>
              <span>03 / CONNECTION</span>
              <h3>Maternal–fetal view</h3>
              <p>Relevant maternal information alongside the fetal journey.</p>
              <TextLink href={providerRoutes.maternal}>Explore the concept</TextLink>
            </article>
          </div>
        </div>
      </section>
      <section id="pregnancy-dating" className={`${styles.section} ${styles.quietSection}`}>
        <div className={`${styles.sectionInner} ${styles.split}`}>
          <div className={styles.splitCopy}>
            <span className={styles.kicker}>Pregnancy dating</span>
            <h2>
              A documented baseline.
              <br />A traceable decision.
            </h2>
            <p>
              The estimated due date and its supporting evidence provide the context for gestational
              age. The proposed dating workflow keeps the selected source visible and records
              authorised revisions, so later assessments can be interpreted against a consistent
              baseline.
            </p>
            <TextLink href={`${providerRoutes.approach}#references`}>
              Read the dating reference
            </TextLink>
          </div>
          <div className={styles.datingCard}>
            <span className={styles.kicker}>Information to preserve</span>
            <dl>
              <div>
                <dt>Source</dt>
                <dd>Dating record and date</dd>
              </div>
              <div>
                <dt>Selected baseline</dt>
                <dd>Estimated due date</dd>
              </div>
              <div>
                <dt>Review</dt>
                <dd>Reviewer and verification state</dd>
              </div>
              <div>
                <dt>Revision</dt>
                <dd>Reason and documented change</dd>
              </div>
            </dl>
            <p>Verification of dating does not establish that fetal growth is normal.</p>
          </div>
        </div>
      </section>
      <section id="report-review" className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionTitle}>
            <span className={styles.kicker}>
              Report to review · Extraction {providerStatus.extraction.toLowerCase()}
            </span>
            <h2>
              The source stays
              <br />
              part of the story.
            </h2>
            <p>
              Report extraction is a proposed workflow. A clinician should be able to inspect dates,
              units and values, resolve uncertain entries, and confirm the record before it is used
              in the timeline.
            </p>
          </div>
          <div className={styles.workflow}>
            <div>
              <b>01 / SOURCE</b>
              <h3>Retain the report</h3>
              <p>Preserve the report identity, date and origin.</p>
            </div>
            <div>
              <b>02 / CHECK</b>
              <h3>Review the entries</h3>
              <p>Compare extracted values with their source and mark missing information.</p>
            </div>
            <div>
              <b>03 / CONFIRM</b>
              <h3>Record verification</h3>
              <p>Keep the reviewer and corrections visible in the proposed workflow.</p>
            </div>
            <div>
              <b>04 / INTERPRET</b>
              <h3>Consider the context</h3>
              <p>Review the observation alongside the established dating and prior assessments.</p>
            </div>
          </div>
        </div>
      </section>
      <ProviderClosing />
    </ProviderShell>
  );
}
