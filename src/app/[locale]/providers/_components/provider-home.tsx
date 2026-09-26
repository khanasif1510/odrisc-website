import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  FileText,
  HeartHandshake,
  ScanLine,
} from "lucide-react";
import { FetalGrowthDemo } from "@/features/providers/fetal-growth-demo";
import styles from "@/components/provider/provider.module.css";
import { providerRoutes, providerStatus } from "@/content/providers/site";
import { demoCase, displayDate } from "@/content/providers/demo-case";
import { TextLink } from "./provider-shell";

export function ProviderPlatformOverview() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <span className={styles.kicker}>ODRISC for clinicians</span>
            <h1>
              <span>Maternal health.</span>
              <span>Fetal growth.</span>
              <span>One clinical view.</span>
            </h1>
            <p>
              Bring pregnancy dating, maternal context and serial ultrasound measurements into one
              longitudinal view. See what has been recorded, what has changed, and what needs a
              closer look.
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href={providerRoutes.growth}>
                Explore fetal growth <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a className={styles.secondary} href="#pregnancy-in-view">
                See the timeline <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
            <p className={styles.heroNote}>
              Designed to support your assessment and the conversations that follow.
            </p>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/media/patient-connected-story/fetal-growth-consultation-desktop-1086x1448-v9.png"
              alt="A clinician and a pregnant woman discussing an ultrasound together"
              fill
              sizes="(max-width: 760px) 100vw, 46vw"
              priority
            />
            <div className={styles.imageCaption}>
              <HeartHandshake size={28} strokeWidth={1.2} aria-hidden="true" />
              <div>
                <strong>Every pregnancy has a story.</strong>
                <span>A clearer view. A more informed conversation.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={`${styles.sectionInner} ${styles.problem}`}>
          <div className={styles.splitCopy}>
            <span className={styles.kicker}>01 / The clinical context</span>
            <h2>
              The pregnancy is continuous.
              <br />
              Its records are often separate.
            </h2>
            <p>
              A dating record. An ultrasound report. A maternal observation. Each adds context at a
              different moment. ODRISC is designed to organise these observations around the same
              pregnancy timeline, keeping their sources in view.
            </p>
          </div>
          <div className={styles.records}>
            <div className={styles.record}>
              <CalendarDays size={24} strokeWidth={1.2} aria-hidden="true" />
              <div>
                <strong>Pregnancy dating</strong>
                <span>The documented baseline</span>
              </div>
              <small>CONTEXT</small>
            </div>
            <div className={styles.record}>
              <ScanLine size={24} strokeWidth={1.2} aria-hidden="true" />
              <div>
                <strong>Ultrasound measurements</strong>
                <span>Each assessment, in sequence</span>
              </div>
              <small>CHANGE</small>
            </div>
            <div className={styles.record}>
              <FileText size={24} strokeWidth={1.2} aria-hidden="true" />
              <div>
                <strong>Maternal observations</strong>
                <span>Relevant information for review</span>
              </div>
              <small>CONNECTION</small>
            </div>
            <div className={styles.statement}>
              <ArrowRight size={18} aria-hidden="true" />
              One pregnancy. Information connected across time.
            </div>
          </div>
        </div>
      </section>
      <section id="pregnancy-in-view" className={`${styles.section} ${styles.quietSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionTitleRow}>
            <div className={styles.sectionTitle}>
              <span className={styles.kicker}>02 / The longitudinal view</span>
              <h2>
                See each visit within
                <br />
                the whole pregnancy.
              </h2>
              <p>
                Follow one fictional case through three assessments. Select a visit to see its
                reported measurements, interval change, Doppler observations and source record.
              </p>
            </div>
            <TextLink href={providerRoutes.growth}>Explore the full demonstration</TextLink>
          </div>
          <FetalGrowthDemo />
        </div>
      </section>
      <section className={styles.section}>
        <div className={`${styles.sectionInner} ${styles.split}`}>
          <div className={styles.splitCopy}>
            <span className={styles.kicker}>03 / Pregnancy dating</span>
            <h2>
              A consistent timeline
              <br />
              for every assessment.
            </h2>
            <p>
              Keep the selected estimated due date and its supporting source visible. Each
              subsequent visit sits against that documented baseline, with any authorised revision
              recorded separately from the assessment of growth.
            </p>
            <TextLink href={`${providerRoutes.platform}#pregnancy-dating`}>
              Learn about pregnancy dating
            </TextLink>
          </div>
          <div className={styles.datingCard}>
            <span className={styles.kicker}>Example dating record · {demoCase.id}</span>
            <strong>{displayDate(demoCase.edd)}</strong>
            <p>Estimated due date · Fictional case</p>
            <dl>
              <div>
                <dt>Dating source</dt>
                <dd>First-trimester record</dd>
              </div>
              <div>
                <dt>First assessment</dt>
                <dd>20w 0d · 22 Feb 2026</dd>
              </div>
              <div>
                <dt>Latest assessment</dt>
                <dd>28w 3d · 22 Apr 2026</dd>
              </div>
            </dl>
            <p>Dating verification and growth interpretation are separate review steps.</p>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.quietSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionTitle}>
            <span className={styles.kicker}>04 / Growth interpretation</span>
            <h2>
              Size today.
              <br />
              Change across visits.
            </h2>
            <p>
              A measurement becomes more useful when its date, interval and reference are clear.
              Move from the reported estimate to the information needed to interpret it.
            </p>
          </div>
          <div className={styles.cardGrid}>
            <article className={styles.topicCard}>
              <span>01 — THE MEASUREMENT</span>
              <h3>Estimated fetal weight</h3>
              <p>
                Review the reported estimate and its source. Keep measurement uncertainty part of
                the clinical conversation.
              </p>
              <TextLink href={providerRoutes.growth}>Review fetal growth</TextLink>
            </article>
            <article className={styles.topicCard}>
              <span>02 — THE INTERVAL</span>
              <h3>Change between scans</h3>
              <p>
                See the difference between recorded estimates alongside the actual time elapsed
                between assessments.
              </p>
              <TextLink href={`${providerRoutes.growth}#growth-demo`}>
                Explore interval change
              </TextLink>
            </article>
            <article className={styles.topicCard}>
              <span>03 — THE REFERENCE</span>
              <h3>Know the method</h3>
              <p>
                Understand which reference produced a result, which inputs it uses, and the
                population and gestational range it applies to.
              </p>
              <TextLink href={`${providerRoutes.approach}#references`}>
                Review clinical references
              </TextLink>
            </article>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.blushSection}`}>
        <div className={`${styles.sectionInner} ${styles.split}`}>
          <div className={styles.paired}>
            <div>
              <span className={styles.kicker}>The maternal journey</span>
              <h3>Health in context.</h3>
              <p>History, weight and relevant pregnancy observations.</p>
            </div>
            <div>
              <span className={styles.kicker}>The fetal journey</span>
              <h3>Growth over time.</h3>
              <p>Serial measurements, assessment dates and Doppler context.</p>
            </div>
            <span>Connected-view concept · {providerStatus.intelligence}</span>
          </div>
          <div className={styles.splitCopy}>
            <span className={styles.kicker}>05 / The maternal connection</span>
            <h2>
              Two journeys.
              <br />
              One pregnancy.
            </h2>
            <p>
              Maternal health and fetal growth belong in the same clinical conversation. ODRISC is
              designed to bring relevant maternal context alongside serial fetal observations,
              supporting a connected review over time.
            </p>
            <TextLink href={providerRoutes.maternal}>Explore the maternal–fetal view</TextLink>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionTitle}>
            <span className={styles.kicker}>06 / Verification & clinical control</span>
            <h2>
              From report to review,
              <br />
              with you in control.
            </h2>
            <p>
              The proposed report workflow keeps source information close to the measurements being
              reviewed. Report extraction is {providerStatus.extraction.toLowerCase()}; confirmation
              remains a distinct step before information joins a clinical timeline.
            </p>
          </div>
          <div className={styles.workflow}>
            <div>
              <b>01</b>
              <h3>Add the record</h3>
              <p>Retain the report date, source and measurement units.</p>
            </div>
            <div>
              <b>02</b>
              <h3>Check the values</h3>
              <p>Review entries against the original source and resolve uncertainty.</p>
            </div>
            <div>
              <b>03</b>
              <h3>Confirm the record</h3>
              <p>Keep verification separate from interpretation and clinical assessment.</p>
            </div>
            <div>
              <b>04</b>
              <h3>Review the timeline</h3>
              <p>Bring the confirmed observation into view alongside previous visits.</p>
            </div>
          </div>
          <div className={styles.actions}>
            <TextLink href={`${providerRoutes.platform}#report-review`}>
              Explore the proposed workflow
            </TextLink>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.quietSection}`}>
        <div className={`${styles.sectionInner} ${styles.split}`}>
          <div className={styles.widePhoto}>
            <Image
              src="/media/why-odrisc-collaboration-clinicians-desktop-1672x941-v1.png"
              alt="Healthcare professionals discussing information together"
              fill
              sizes="(max-width: 760px) 100vw, 45vw"
            />
          </div>
          <div className={styles.splitCopy}>
            <span className={styles.kicker}>07 / Shared understanding</span>
            <h2>
              A clearer picture
              <br />
              to discuss together.
            </h2>
            <p>
              The patient experience helps women understand their pregnancy. The clinician
              experience brings clinical detail into view. Together, they support conversations
              about recorded changes and the next steps agreed with the care team.
            </p>
            <TextLink href={providerRoutes.patients}>Visit the patient experience</TextLink>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionTitle}>
            <span className={styles.kicker}>08 / Clinical trust</span>
            <h2>
              Clear methods.
              <br />
              Visible boundaries.
            </h2>
          </div>
          <div className={styles.trustGrid}>
            <div>
              <h3>Evidence in its proper context</h3>
              <p>
                Published guidelines inform the clinical methods. Verification of a software
                implementation and clinical validation are separate forms of evidence, each with its
                own scope and limitations.
              </p>
              <TextLink href={providerRoutes.approach}>Read the clinical approach</TextLink>
            </div>
            <div>
              <h3>Transparent about availability</h3>
              <p>
                Fetal growth can be explored through this demonstration. Provider intelligence
                remains labelled in development while release status is confirmed. Clinician account
                connection is pending; this preview collects no patient information.
              </p>
              <TextLink href={providerRoutes.access}>About clinician access</TextLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
