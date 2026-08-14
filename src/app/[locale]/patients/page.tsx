import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { AnimatedJourneyChecklist } from "@/components/patient/animated-journey-checklist";
import {
  ConnectedPregnancyJourney,
  PatientImageNarrative,
  PersonalPregnancyStory,
} from "@/components/patient/connected-pregnancy-journey";
import { ResponsivePatientHeroVideo } from "@/components/responsive-patient-hero-video";
import { routing } from "@/i18n/routing";

import { SiteHeader } from "../_components/site-header";

export const metadata: Metadata = {
  title: "For Patients | ODRISC",
  description: "A supportive, connected view of your pregnancy journey.",
};

const tools = [
  {
    number: "01",
    title: "Risk awareness",
    href: "risk-awareness",
    status: "Status to confirm",
    body: "Understand contributing factors and prepare more informed questions for your healthcare professional.",
  },
  {
    number: "02",
    title: "Nutrition support",
    href: "nutrition",
    status: "Status to confirm",
    body: "Explore pregnancy-aware nutrition principles designed to support conversations with qualified professionals.",
  },
  {
    number: "03",
    title: "Activity guidance",
    href: "physical-activity",
    status: "Status to confirm",
    body: "Learn about trimester-aware movement with clear safety boundaries and professional guidance.",
  },
  {
    number: "04",
    title: "Weight monitoring",
    href: "weight-monitoring",
    status: "Status to confirm",
    body: "See how change over time can be understood without stigma, pressure or isolated numbers.",
  },
] as const;

export default async function PatientPage({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const prefix = locale === "en" ? "" : `/${locale}`;
  const nav = [
    { label: "RAS Test", href: `${prefix}/patients/risk-awareness/` },
    { label: "Nutrition", href: `${prefix}/patients/nutrition/` },
    { label: "Fitness", href: `${prefix}/patients/physical-activity/` },
    { label: "Monitor", href: `${prefix}/patients/maternal-and-fetal-progress/` },
  ];

  return (
    <main className="audience-page patient-page">
      <SiteHeader locale={locale} audience="patient" items={nav} />
      <section id="overview" className="audience-hero patient-hero">
        <ResponsivePatientHeroVideo />
        <div className="hero-copy reveal">
          <div className="store-availability" aria-label="ODRISC app availability">
            <span className="store-availability-item">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
              </svg>
              <span>
                Available on <strong>Google Play Store</strong>
              </span>
            </span>
            <span className="store-availability-item">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M8.8086 14.9194l6.1107-11.0368c.0837-.1513.1682-.302.2437-.4584.0685-.142.1267-.2854.1646-.4403.0803-.3259.0588-.6656-.066-.9767-.1238-.3095-.3417-.5678-.6201-.7355a1.4175 1.4175 0 0 0-.921-.1924c-.3207.043-.6135.1935-.8443.4288-.1094.1118-.1996.2361-.2832.369-.092.1463-.175.2979-.259.4492l-.3864.6979-.3865-.6979c-.0837-.1515-.1667-.303-.2587-.4492-.0837-.1329-.1739-.2572-.2835-.369-.2305-.2353-.5233-.3857-.844-.429a1.4181 1.4181 0 0 0-.921.1926c-.2784.1677-.4964.426-.6203.7355-.1246.311-.1461.6508-.066.9767.038.155.0962.2984.1648.4403.0753.1564.1598.307.2437.4584l1.248 2.2543-4.8625 8.7825H2.0295c-.1676 0-.3351-.0007-.5026.0092-.1522.009-.3004.0284-.448.0714-.3108.0906-.5822.2798-.7783.548-.195.2665-.3006.5929-.3006.9279 0 .3352.1057.6612.3006.9277.196.2683.4675.4575.7782.548.1477.043.296.0623.4481.0715.1675.01.335.009.5026.009h13.0974c.0171-.0357.059-.1294.1-.2697.415-1.4151-.6156-2.843-2.0347-2.843zM3.113 18.5418l-.7922 1.5008c-.0818.1553-.1644.31-.2384.4705-.067.1458-.124.293-.1611.452-.0785.3346-.0576.6834.0645 1.0029.1212.3175.3346.583.607.7549.2727.172.5891.2416.9013.1975.3139-.044.6005-.1986.8263-.4402.1072-.1148.1954-.2424.2772-.3787.0902-.1503.1714-.3059.2535-.4612L6 19.4636c-.0896-.149-.9473-1.4704-2.887-.9218m20.5861-3.0056a1.4707 1.4707 0 0 0-.779-.5407c-.1476-.0425-.2961-.0616-.4483-.0705-.1678-.0099-.3352-.0091-.503-.0091H18.648l-4.3891-7.817c-.6655.7005-.9632 1.485-1.0773 2.1976-.1655 1.0333.0367 2.0934.546 3.0004l5.2741 9.3933c.084.1494.167.299.2591.4435.0837.131.1739.2537.2836.364.231.2323.5238.3809.8449.4232.3192.0424.643-.0244.9217-.1899.2784-.1653.4968-.4204.621-.7257.1246-.3072.146-.6425.0658-.9641-.0381-.1529-.0962-.2945-.165-.4346-.0753-.1543-.1598-.303-.2438-.4524l-1.216-2.1662h1.596c.1677 0 .3351.0009.5029-.009.1522-.009.3007-.028.4483-.0705a1.4707 1.4707 0 0 0 .779-.5407A1.5386 1.5386 0 0 0 24 16.452a1.539 1.539 0 0 0-.3009-.9158Z" />
              </svg>
              <span>
                Available on <strong>Apple App Store</strong>
              </span>
            </span>
          </div>
          <span className="eyebrow">Your pregnancy is one connected journey.</span>
          <h1>
            <span className="hero-title-line">Understand your health.</span>
            <span className="hero-title-line">Follow your baby’s growth.</span>
            <em className="hero-title-line">See the whole picture.</em>
          </h1>
          <p className="hero-lead">
            ODRISC brings together maternal health, pregnancy risk, personalised guidance and fetal
            growth into one continuous pregnancy journey, helping you understand what is changing,
            how you and your baby are progressing, and what may matter next.
          </p>
          <div className="button-row">
            <a className="button primary" href="https://app.odrisc.com">
              Start Your Journey
            </a>
            <a className="button quiet" href="#safety">
              Explore ODRISC
            </a>
          </div>
        </div>
      </section>

      <section id="journey" className="section journey-section">
        <div className="journey-intro">
          <p className="journey-intro-kicker">Bringing fragmented pregnancy data into one place</p>
          <p className="journey-intro-title">ODRISC Maternal Fetal Intelligence</p>
          <p className="journey-intro-summary">
            <span>ODRISC connects maternal health and fetal growth over time,</span>
            <span>creating a clearer, more continuous view of your pregnancy journey.</span>
          </p>
        </div>
        <ConnectedPregnancyJourney>
          <div className="journey-copy">
            <span className="eyebrow">Your story, seen in context</span>
            <h2>
              <span>Pregnancy is connected.</span>
              <span>Your information</span>
              <span>usually isn&apos;t.</span>
            </h2>
            <p>
              Health information can live in many places. ODRISC is designed to help organize
              approved information into a more understandable timeline without asking you to
              interpret complex clinical data alone.
            </p>
            <AnimatedJourneyChecklist
              items={[
                "See change in context, not as a single number",
                "Prepare questions for your next appointment",
                "Keep your healthcare professional at the centre of care",
              ]}
            />
          </div>
        </ConnectedPregnancyJourney>
      </section>

      <section className="section personal-journey-section">
        <PersonalPregnancyStory>
          <div className="section-heading personal-journey-heading">
            <span className="eyebrow">A journey shaped around you</span>
            <h2>
              <span>Every pregnancy begins</span>
              <span>with a different you.</span>
            </h2>
            <p>
              ODRISC is designed to understand each woman&apos;s unique starting point across BMI,
              pregnancy risk, weight trajectory and pregnancy stage, informing guidance that evolves
              throughout pregnancy.
            </p>
            <AnimatedJourneyChecklist
              items={[
                "Understand your starting point across health, risk and pregnancy stage.",
                "Shape guidance around your BMI, needs and changing pregnancy journey.",
                "Adapt guidance as your health and pregnancy progress over time.",
              ]}
            />
          </div>
        </PersonalPregnancyStory>
      </section>

      <PatientImageNarrative
        id="maternal-trajectory"
        className="maternal-image-story"
        label="Maternal trajectory image stages"
        story="maternal"
        visualSide="right"
      >
        <div className="journey-copy maternal-trajectory-copy">
          <span className="eyebrow">Your health in motion</span>
          <h2>
            What matters is where your <span>pregnancy is progressing.</span>
          </h2>
          <div className="maternal-trajectory-body">
            <p>
              ODRISC is designed to connect measurements across pregnancy to help reveal patterns,
              trends and trajectories, giving context to how maternal health is changing over time.
            </p>
          </div>
          <AnimatedJourneyChecklist
            items={[
              "Capture meaningful maternal health changes at different stages of pregnancy.",
              "Bring individual measurements together to reveal patterns across time.",
              "See your trajectory and understand how your pregnancy is progressing.",
            ]}
          />
        </div>
      </PatientImageNarrative>

      <PatientImageNarrative
        id="fetal-growth-journey"
        className="fetal-image-story"
        label="Fetal growth image stages"
        story="fetal"
        visualSide="left"
      >
        <div className="journey-copy fetal-growth-copy">
          <span className="eyebrow">Growth understood over time</span>
          <h2>
            <span>See more than a measurement.</span> <span>Understand a growth journey.</span>
          </h2>
          <div className="fetal-growth-body">
            <p>
              Every ultrasound provides an important snapshot of your baby&apos;s growth, but
              understanding how that growth changes across pregnancy can reveal a much clearer
              picture.
            </p>
            <p>
              ODRISC Fetal Intelligence is designed to bring measurements from across pregnancy
              together, helping transform individual snapshots into a continuous view of how a baby
              is growing over time.
            </p>
          </div>
        </div>
      </PatientImageNarrative>

      <section id="tools" className="section patient-tools">
        <div className="section-heading">
          <span className="eyebrow">A clearer path forward</span>
          <h2>Four connected areas of support</h2>
          <p>
            The initial Patient experience draws on the wellness journey in your reference material
            while keeping availability transparent.
          </p>
        </div>
        <div className="tool-grid">
          {tools.map((tool) => (
            <a className="tool-card" href={`${prefix}/patients/${tool.href}/`} key={tool.number}>
              <span className="tool-number">{tool.number}</span>
              <div className="tool-icon" aria-hidden="true">
                <span />
              </div>
              <h3>{tool.title}</h3>
              <p>{tool.body}</p>
              <span className="status-label">{tool.status}</span>
              <span className="tool-link">Learn more →</span>
            </a>
          ))}
        </div>
      </section>

      <section id="safety" className="section safety-section">
        <div>
          <span className="eyebrow">Designed around dignity and safety</span>
          <h2>Technology should support care—not replace it.</h2>
        </div>
        <div className="safety-card">
          <span className="safety-mark">+</span>
          <p>
            ODRISC does not diagnose conditions, provide emergency care, or replace advice from a
            qualified healthcare professional. Capabilities shown here are concepts or works in
            progress unless explicitly marked available.
          </p>
        </div>
      </section>

      <section className="closing-cta patient-closing">
        <div>
          <span className="eyebrow">Every pregnancy has a story</span>
          <h2>Understand how yours is evolving.</h2>
        </div>
        <a className="button primary" href={`${prefix}/contact/`}>
          Stay connected
        </a>
      </section>
      <footer className="site-footer">
        <span>© 2026 ODRISC Technologies</span>
        <span>For information only · Not medical advice</span>
      </footer>
    </main>
  );
}
