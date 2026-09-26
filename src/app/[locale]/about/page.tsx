import type { Metadata } from "next";
import Image from "next/image";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";
import { PatientStepInsideCarousel } from "@/components/patient/patient-step-inside-carousel";
import { WhyOdriscApproachFrame } from "@/components/why-odrisc-approach-frame";
import { WhyOdriscHeroFrame } from "@/components/why-odrisc-hero-frame";
import { WhyOdriscProblemFrame } from "@/components/why-odrisc-problem-frame";

import { SiteHeader } from "../_components/site-header";

export const metadata: Metadata = {
  title: "Why ODRISC | ODRISC",
  description:
    "Why ODRISC is developing connected maternal and fetal intelligence for pregnancy care.",
};

const pregnancyHealthStats = [
  {
    value: "1 in 5",
    lines: ["live births worldwide are affected", "by hyperglycaemia during pregnancy"],
    mobileLines: ["live births worldwide are affected", "by hyperglycaemia during pregnancy"],
  },
  {
    value: "1 in 7",
    lines: ["babies worldwide are born", "with low birth weight"],
    mobileLines: ["babies worldwide are", "born with low birth weight"],
  },
  {
    value: "1.9 million",
    lines: [
      "stillbirths occurred globally in 2023, many potentially",
      "preventable with appropriate care",
    ],
    mobileLines: [
      "stillbirths occurred globally in 2023, many",
      "potentially preventable with appropriate care",
    ],
  },
  {
    value: "700+",
    lines: [
      "women died every day in 2023 from preventable causes",
      "related to pregnancy and childbirth",
    ],
    mobileLines: [
      "women died every day in 2023 from preventable",
      "causes related to pregnancy and childbirth",
    ],
  },
] as const;

export default async function AboutPage({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <main className="why-odrisc-page" data-page-id="COM-PG-001">
      <SiteHeader locale={locale} audience="patient" items={[]} />
      <WhyOdriscHeroFrame />
      <section className="why-odrisc-since" aria-label="ODRISC company history">
        <p>
          Beginning in 2019, we’ve been building a new approach to pregnancy care, bringing together
          proprietary intelligence, connected health data and a maternal-fetal model designed around
          the evolving health of both mother and baby.
        </p>
      </section>
      <section className="why-odrisc-history" aria-label="ODRISC founding history">
        <div className="why-odrisc-history-copy">
          <p className="why-odrisc-founded">
            <span>Founded in 2019</span>
            <span>Mumbai, India</span>
          </p>
          <p className="why-odrisc-history-description">
            We began developing new technologies for preventive pregnancy care, including the GDM
            Risk Assessment (RAS Test pictured), designed to identify the risk of gestational
            diabetes mellitus and provide a clearer, more detailed understanding of the factors
            contributing to that risk.
          </p>
        </div>
        <figure className="why-odrisc-history-frame">
          <Image
            src="/media/why-odrisc-founded-ras-test-1254x1254-v1.png"
            alt="A woman viewing the ODRISC RAS Test interface on a tablet"
            fill
            sizes="(max-width: 760px) 100vw, 46vw"
          />
        </figure>
      </section>
      <WhyOdriscProblemFrame>
        <section className="why-odrisc-story" aria-labelledby="why-odrisc-problem">
          <div className="why-odrisc-problem-content">
            <span className="why-odrisc-problem-label">THE PROBLEM</span>
            <h2 id="why-odrisc-problem">
              <span>Important changes can</span>
              <span>begin before they are felt</span>
            </h2>
            <div className="why-odrisc-problem-copy">
              <p>
                Pregnancy care is highly capable, but it often works through separate appointments,
                measurements and clinical snapshots. Maternal health, metabolic risk, weight,
                nutrition and activity, and fetal growth may all be monitored, yet the relationships
                between them can be difficult to see across the full pregnancy journey.
              </p>
              <p>
                Many pregnancy-related concerns do not begin with obvious symptoms. Gestational
                diabetes is identified through prenatal screening rather than symptoms, while
                changes in maternal health or fetal growth may only become meaningful when viewed as
                a pattern over time.
              </p>
              <p>
                The system is not failing. It simply needs better ways to connect signals earlier,
                follow how they change and support timely clinical attention.
              </p>
            </div>
          </div>
        </section>
        <section className="why-odrisc-numbers" aria-labelledby="why-odrisc-numbers-title">
          <div className="why-odrisc-numbers-marker">
            <span className="why-odrisc-numbers-line" aria-hidden="true" />
            <h2 id="why-odrisc-numbers-title">Pregnancy health in numbers</h2>
            <span className="why-odrisc-numbers-line" aria-hidden="true" />
          </div>
          <div className="why-odrisc-stat-list">
            {pregnancyHealthStats.map((stat) => (
              <article className="why-odrisc-stat" key={stat.value}>
                <h3>{stat.value}</h3>
                <p className="why-odrisc-stat-description-desktop">
                  {stat.lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </p>
                <p className="why-odrisc-stat-description-mobile">
                  {stat.mobileLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </p>
              </article>
            ))}
          </div>
          <div className="why-odrisc-numbers-rule" aria-hidden="true" />
          <div className="why-odrisc-numbers-closing">
            <p>
              Disconnected information carries a real cost for women, babies, families and
              healthcare systems. Important changes can be harder to recognise. Opportunities for
              earlier support may be missed. Care becomes more reactive.
            </p>
            <p>
              Pregnancy needs a healthcare experience that can understand change before it becomes a
              complication.
            </p>
            <p>
              <span>ODRISC is building that connected view.</span>
            </p>
          </div>
        </section>
      </WhyOdriscProblemFrame>
      <section className="why-odrisc-perspective" aria-labelledby="why-odrisc-perspective-title">
        <div className="why-odrisc-perspective-marker" aria-label="Our Perspective">
          <span className="why-odrisc-purpose-box" aria-hidden="true" />
          <span className="why-odrisc-purpose-label">Our Perspective</span>
          <span className="why-odrisc-purpose-line" aria-hidden="true" />
        </div>
        <div className="why-odrisc-perspective-content">
          <h2 id="why-odrisc-perspective-title">
            <span>
              The connection
              <br className="why-odrisc-perspective-mobile-break" /> pregnancy
            </span>{" "}
            <span>
              care
              <br className="why-odrisc-perspective-mobile-break" /> was missing
            </span>
          </h2>
          <div className="why-odrisc-perspective-copy">
            <p>
              Pregnancy care has always depended on observation: monitoring the mother’s health,
              assessing potential risks and following the baby’s development. But for much of its
              history, these elements have been viewed through separate appointments, measurements
              and clinical snapshots. The information existed; the continuous maternal–fetal picture
              did not.
            </p>
            <p>
              In 2019, ODRISC began by exploring how pregnancy-related risks could be recognised
              earlier. That work led to the development of the GDM Risk Assessment—a tool designed
              to identify the risk of gestational diabetes and provide a clearer view of the factors
              contributing to it.
            </p>
            <p>
              But it also revealed a much larger challenge. Pregnancy does not progress through
              isolated risks or measurements. Maternal weight, metabolic health, nutrition, activity
              and fetal growth all change across time, yet the relationships between them can remain
              difficult to see.
            </p>
          </div>
        </div>
        <figure className="why-odrisc-perspective-frame" aria-label="ODRISC perspective visual">
          <Image
            src="/media/why-odrisc-perspective-couple-1243x1265-v1.png"
            alt="An expectant mother holding a flower beside her partner"
            fill
            sizes="(max-width: 760px) 94vw, 47vw"
          />
        </figure>
        <div className="why-odrisc-perspective-direction">
          <p>This led us to a defining question:</p>
          <blockquote>
            “What would pregnancy care look like if the mother’s health and the baby’s growth could
            be followed as one connected journey?”
          </blockquote>
          <p>
            The answer became our direction: a maternal–fetal intelligence platform that connects
            health information across pregnancy, transforms individual measurements into meaningful
            trajectories and supports earlier, better-informed care.
          </p>
          <p>
            The vision was clear. Building it responsibly, with clinical relevance and trust at its
            foundation, became the work ahead.
          </p>
        </div>
        <WhyOdriscApproachFrame
          ariaLabel="ODRISC connected pregnancy journey visual"
          imageSrc="/media/why-odrisc-perspective-family-desktop-1672x941-v1.png"
          mobileImageSrc="/media/why-odrisc-perspective-family-mobile-853x1844-v1.png"
        >
          <blockquote className="why-odrisc-perspective-visual-quote">
            <p>
              <span>“When conception has</span>
              <span>taken place, one must</span>
              <span>beware of every excess</span>
              <span>and change”</span>
            </p>
            <cite>– Soranus of Ephesus</cite>
          </blockquote>
        </WhyOdriscApproachFrame>
      </section>
      <section className="why-odrisc-purpose" aria-labelledby="why-odrisc-purpose-title">
        <div className="why-odrisc-purpose-marker" aria-label="Our purpose">
          <span className="why-odrisc-purpose-box" aria-hidden="true" />
          <span className="why-odrisc-purpose-label">Our purpose</span>
          <span className="why-odrisc-purpose-line" aria-hidden="true" />
        </div>
        <h2 id="why-odrisc-purpose-title">Earlier understanding for every pregnancy</h2>
        <p className="why-odrisc-purpose-intro">
          <span>We bring maternal health,</span>
          <span>pregnancy risk, personalised</span>
          <span>guidance and fetal growth</span>
          <span>together so that women and</span>
          <span>clinicians can understand the</span>
          <span>journey as one—not as a</span>
          <span>series of isolated measurements.</span>
        </p>
        <div className="why-odrisc-purpose-composition">
          <figure
            className="why-odrisc-purpose-frame why-odrisc-purpose-frame-small"
            aria-label="An expectant couple viewing pregnancy information on a phone"
          >
            <picture>
              <source
                media="(max-width: 760px)"
                srcSet="/media/why-odrisc-purpose-supporting-mobile-1144x1375-v1.png"
              />
              <Image
                alt=""
                fill
                sizes="(max-width: 760px) 36vw, 24vw"
                src="/media/why-odrisc-purpose-supporting-desktop-1144x1375-v1.png"
              />
            </picture>
          </figure>
          <div className="why-odrisc-purpose-main-stage">
            <figure
              className="why-odrisc-purpose-frame why-odrisc-purpose-frame-main"
              aria-label="An expectant mother and clinician reviewing first-trimester screening results"
            >
              <picture>
                <source
                  media="(max-width: 760px)"
                  srcSet="/media/why-odrisc-purpose-main-mobile-1430x1100-v1.png"
                />
                <Image
                  alt=""
                  fill
                  sizes="(max-width: 760px) 34vw, 46vw"
                  src="/media/why-odrisc-purpose-main-desktop-1466x1073-v1.png"
                />
              </picture>
            </figure>
          </div>
          <div className="why-odrisc-purpose-closing-copy">
            <p className="why-odrisc-purpose-outcome">
              <span>Our purpose is to make pregnancy</span>
              <span>care more connected, preventive</span>
              <span>and responsive to change.</span>
            </p>
            <p className="why-odrisc-purpose-closing">
              <span>By revealing how maternal and fetal</span>
              <span>health evolve across time, ODRISC</span>
              <span>aims to support earlier understanding,</span>
              <span>more informed conversations and</span>
              <span>timely care decisions. Because every</span>
              <span>meaningful change understood sooner</span>
              <span>can help create a better-supported</span>
              <span>pregnancy for both mother and baby.</span>
            </p>
            <a
              className="section-seven-about-action why-odrisc-purpose-app-action"
              href="https://app.odrisc.com"
            >
              <span className="section-seven-about-icon" aria-hidden="true">
                <Image
                  className="section-seven-about-icon-image"
                  src="/brand/website-icon.svg"
                  alt=""
                  width={86}
                  height={62}
                />
              </span>
              <span className="section-seven-about-button">The ODRISC App</span>
            </a>
          </div>
        </div>
      </section>
      <div className="why-odrisc-step-inside-placement">
        <PatientStepInsideCarousel />
      </div>
      <section className="why-odrisc-approach" aria-labelledby="why-odrisc-approach-title">
        <div className="why-odrisc-approach-marker" aria-label="Our Approach">
          <span className="why-odrisc-purpose-box" aria-hidden="true" />
          <span className="why-odrisc-purpose-label">Our Approach</span>
          <span className="why-odrisc-purpose-line" aria-hidden="true" />
        </div>
        <div className="why-odrisc-approach-content">
          <h2 id="why-odrisc-approach-title">
            <span>From separate</span>{" "}
            <span>
              snapshots to
              <br className="why-odrisc-approach-mobile-break" /> trajectories
            </span>
          </h2>
          <div className="why-odrisc-approach-principles">
            <p className="why-odrisc-approach-intro">The 3 Concise Principles</p>
            <div className="why-odrisc-approach-list">
              <article>
                <h3>Connect</h3>
                <p>
                  Bring maternal health, pregnancy risk and fetal growth into one continuous view.
                </p>
              </article>
              <article>
                <h3>Follow</h3>
                <p>Understand how measurements and health indicators change across time.</p>
              </article>
              <article>
                <h3>Support</h3>
                <p>
                  Turn those changing patterns into meaningful guidance and better-informed care
                  conversations.
                </p>
              </article>
            </div>
          </div>
        </div>
        <WhyOdriscApproachFrame
          ariaLabel="Women viewing the ODRISC experience together"
          imageSrc="/media/why-odrisc-approach-community-desktop-1672x941-v1.png"
          mobileImageSrc="/media/why-odrisc-approach-community-mobile-853x1844-v1.png"
        >
          <blockquote>
            <p>
              <span>“Knowing how your health</span>
              <span>and your baby’s growth are</span>
              <span>changing today can support</span>
              <span>better-informed decisions</span>
              <span>throughout pregnancy.</span>
              <span>Making that knowledge</span>
              <span>accessible is what gives</span>
              <span>our purpose its meaning.”</span>
            </p>
            <footer>
              <strong>Dr. Asif Khan</strong>
              <span>Founder - ODRISC TECHNOLOGIES</span>
            </footer>
          </blockquote>
        </WhyOdriscApproachFrame>
      </section>
      <section
        className="why-odrisc-collaboration"
        aria-labelledby="why-odrisc-collaboration-title"
      >
        <div className="why-odrisc-collaboration-marker" aria-label="Clinical Collaboration">
          <span className="why-odrisc-purpose-box" aria-hidden="true" />
          <span className="why-odrisc-purpose-label">Clinical Collaboration</span>
          <span className="why-odrisc-purpose-line" aria-hidden="true" />
        </div>
        <div className="why-odrisc-collaboration-content">
          <h2 id="why-odrisc-collaboration-title">
            <span>Shaped alongside</span>{" "}
            <span>
              pregnancy-care
              <br className="why-odrisc-collaboration-mobile-break" /> professionals
            </span>
          </h2>
          <div className="why-odrisc-collaboration-intro">
            <p>
              ODRISC is not being developed in isolation. Its direction is being shaped through
              engagement with obstetricians, clinicians and healthcare stakeholders who understand
              the realities of pregnancy care. Their perspectives help us examine clinical
              relevance, usability and how maternal–fetal intelligence could support existing care
              pathways.
            </p>
          </div>
        </div>
        <WhyOdriscApproachFrame
          ariaLabel="Pregnancy-care professionals collaborating"
          imageSrc="/media/why-odrisc-collaboration-clinicians-desktop-1672x941-v1.png"
          mobileImageSrc="/media/why-odrisc-collaboration-clinicians-mobile-1672x941-v1.png"
        >
          <div className="why-odrisc-collaboration-frame-copy">
            <h3>The future we envision</h3>
            <p>
              <span>We envision a future where pregnancy information does more than</span>
              <span>
                document individual appointments. It helps create a continuous understanding
              </span>
              <span>
                of maternal health and fetal growth—from the earliest assessment through every stage
                of pregnancy.
              </span>
            </p>
            <p>
              <span>
                A future where women can better understand their journey, clinicians can view change
                with greater context
              </span>
              <span>and care can become more connected, preventive and informed.</span>
            </p>
          </div>
        </WhyOdriscApproachFrame>
        <div className="why-odrisc-collaboration-frame-copy why-odrisc-collaboration-mobile-copy">
          <h3>The future we envision</h3>
          <p>
            We envision a future where pregnancy information does more than document individual
            appointments. It helps create a continuous understanding of maternal health and fetal
            growth—from the earliest assessment through every stage of pregnancy.
          </p>
          <p>
            A future where women can better understand their journey, clinicians can view change
            with greater context and care can become more connected, preventive and informed.
          </p>
        </div>
        <div className="section-seven-talk-fade why-odrisc-collaboration-closing">
          <div className="section-seven-talk-closing">
            <p>One connected view of pregnancy for women, clinicians and healthcare systems</p>
            <h2>Help shape what comes next</h2>
            <a
              className="section-seven-about-action section-seven-journey-action"
              href="https://app.odrisc.com"
            >
              <span className="section-seven-about-icon" aria-hidden="true">
                <Image
                  className="section-seven-about-icon-image"
                  src="/brand/website-icon.svg"
                  alt=""
                  width={86}
                  height={62}
                />
              </span>
              <span className="section-seven-about-button">Start your Journey</span>
            </a>
            <div className="section-seven-technologies-marker" aria-label="ODRISC Technologies">
              <span className="section-seven-care-capsule" aria-hidden="true" />
              <span className="section-seven-care-label">ODRISC TECHNOLOGIES</span>
              <span className="section-seven-care-line" aria-hidden="true" />
            </div>
            <div className="section-seven-company-links">
              <h3>
                <span>A new way to experience</span>
                <span>pregnancy care</span>
              </h3>
              <div className="section-seven-company-column">
                <h4>OUR POLICIES</h4>
                <span>Terms and Conditions</span>
                <span>Privacy Policy</span>
                <span>Cancellation and Refund</span>
                <span>Shipping and Delivery Policy</span>
              </div>
              <div className="section-seven-company-column">
                <h4>FOLLOW US</h4>
                <a href="https://www.linkedin.com/company/odrisc-technologies/">
                  <span>Linkedin</span>
                </a>
                <a href="https://www.instagram.com/odriscapp?stkn=MWFrMnh1Y3gwYngxMw==">
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <strong>© 2026 ODRISC TECHNOLOGIES</strong>
        <span>
          Learn About Us: <a href="mailto:support@odrisc.com">support@odrisc.com</a>
        </span>
      </footer>
    </main>
  );
}
