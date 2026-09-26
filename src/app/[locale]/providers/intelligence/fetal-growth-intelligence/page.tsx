import type { Metadata } from "next";
import { FetalGrowthDemo } from "@/features/providers/fetal-growth-demo";
import styles from "@/components/provider/provider.module.css";
import { providerRoutes } from "@/content/providers/site";
import {
  DetailHero,
  ProviderShell,
  TextLink,
  providerLocale,
} from "../../_components/provider-shell";

export const metadata: Metadata = {
  title: "Fetal growth, Doppler and staging | ODRISC",
  description:
    "Explore a fictional pregnancy across visits, with reported fetal weight, interval change, source records and Doppler review context.",
  robots: { index: false, follow: false },
};

export default async function FetalGrowthPage({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const locale = await providerLocale(params);
  return (
    <ProviderShell locale={locale}>
      <DetailHero
        eyebrow="Fetal growth"
        title="Follow the growth. Keep the context."
        body="Explore how serial ultrasound observations can come together in one longitudinal view. Move between a scan timeline, reported measurements and their sources, with Doppler and staging context kept within the same clinical review."
      />
      <section id="growth-demo" className={`${styles.section} ${styles.quietSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionTitle}>
            <span className={styles.kicker}>Explore DEMO-001</span>
            <h2>
              Three visits.
              <br />
              One pregnancy timeline.
            </h2>
            <p>
              Select an assessment, then switch between growth, Doppler and source views. All values
              belong to one fictional case. This demonstration accepts no patient data and produces
              no diagnosis or treatment recommendation.
            </p>
          </div>
          <FetalGrowthDemo detailed />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.cardGrid}>
            <article className={styles.topicCard}>
              <span>01 / DATING & SOURCE</span>
              <h3>Begin with the baseline</h3>
              <p>
                Dates and gestational ages remain aligned to the documented EDD. Reported estimated
                fetal weight is shown as an estimate, with its source available.
              </p>
              <TextLink href={`${providerRoutes.platform}#pregnancy-dating`}>
                Pregnancy dating
              </TextLink>
            </article>
            <article className={styles.topicCard}>
              <span>02 / INTERVAL CHANGE</span>
              <h3>Make elapsed time visible</h3>
              <p>
                Interval growth is the difference between reported EFW estimates divided by elapsed
                time. It describes change between scans; it does not remove measurement uncertainty.
              </p>
            </article>
            <article className={styles.topicCard}>
              <span>03 / REFERENCE & METHOD</span>
              <h3>Keep methods identifiable</h3>
              <p>
                Centiles, z-scores and customised assessments depend on a specified reference and
                its inputs. The preview shows reported EFW without substituting illustrative curves
                for named clinical standards.
              </p>
              <TextLink href={`${providerRoutes.approach}#references`}>
                Clinical references
              </TextLink>
            </article>
          </div>
        </div>
      </section>
      <section id="doppler-staging" className={`${styles.section} ${styles.blushSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionTitle}>
            <span className={styles.kicker}>Doppler & staging</span>
            <h2>
              The result needs
              <br />
              the reasoning beside it.
            </h2>
            <p>
              Doppler and staging belong within the fetal-growth review. The intended presentation
              connects recorded observations, the selected protocol, the inputs behind a result and
              the clinician’s assessment.
            </p>
          </div>
          <div className={styles.workflow}>
            <div>
              <b>01 / OBSERVATIONS</b>
              <h3>Review what is recorded</h3>
              <p>
                Keep UA, MCA, CPR and DV information distinct. Missing measurements must remain
                visible as missing.
              </p>
            </div>
            <div>
              <b>02 / PROTOCOL</b>
              <h3>Identify the framework</h3>
              <p>
                Name the guideline, version and applicable clinical context. A local protocol
                requires its own definition.
              </p>
            </div>
            <div>
              <b>03 / REASONING</b>
              <h3>Trace the interpretation</h3>
              <p>
                Show which recorded inputs and protocol rules contribute to an assessment, including
                unresolved information.
              </p>
            </div>
            <div>
              <b>04 / CLINICAL REVIEW</b>
              <h3>Keep decisions with clinicians</h3>
              <p>
                A displayed stage supports professional review. The public preview does not assign
                stages or prescribe follow-up.
              </p>
            </div>
          </div>
          <div className={styles.actions}>
            <TextLink href={providerRoutes.approach}>Methods, evidence and current status</TextLink>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={`${styles.sectionInner} ${styles.trustGrid}`}>
          <div>
            <h3>Demonstrable experience</h3>
            <p>
              The fetal-growth view is available here as an interactive demonstration. The exact
              reference implementations and staging mappings need documented verification before
              their outputs appear in a public clinical demonstration.
            </p>
          </div>
          <div>
            <h3>Clinician account access</h3>
            <p>
              Signup and login will connect to the ODRISC application. That connection is pending;
              this website preview does not accept account details.
            </p>
            <TextLink href={providerRoutes.access}>About clinician access</TextLink>
          </div>
        </div>
      </section>
    </ProviderShell>
  );
}
