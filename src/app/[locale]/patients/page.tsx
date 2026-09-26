import type { Metadata } from "next";
import Image from "next/image";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { AnimatedJourneyChecklist } from "@/components/patient/animated-journey-checklist";
import {
  ConnectedPregnancyJourney,
  PatientImageNarrative,
  PersonalPregnancyStory,
} from "@/components/patient/connected-pregnancy-journey";
import { PatientSectionSixVideo } from "@/components/patient/patient-section-six-video";
import { PatientSectionSevenAbout } from "@/components/patient/patient-section-seven-about";
import { ResponsivePatientHeroVideo } from "@/components/responsive-patient-hero-video";
import { PatientToolsFrame } from "@/components/patient/patient-tools-frame";
import { PatientCareTierFrames } from "@/components/patient/patient-care-tier-frames";
import { routing } from "@/i18n/routing";

import { SiteHeader } from "../_components/site-header";

export const metadata: Metadata = {
  title: "For Patients | ODRISC",
  description: "A supportive, connected view of your pregnancy journey.",
};

const journeyCapabilityColumns = [
  [
    {
      title: "RAS Test",
      description: "Assess your Risk for Gestational diabetes",
      image: "/media/patient-connected-story/capability-ras-test-desktop-122x116-v1.png",
      mobileImage: "/media/patient-connected-story/capability-ras-test-mobile-96x116-v1.png",
      imageAlt: "Visual representing the RAS Test",
    },
    {
      title: "Nutrition",
      description: "Nourishment for healthier conception & pregnancy",
      image: "/media/patient-connected-story/capability-nutrition-desktop-122x116-v1.png",
      mobileImage: "/media/patient-connected-story/capability-nutrition-mobile-96x116-v1.png",
      imageAlt: "Visual representing nutrition",
    },
    {
      title: "Fitness",
      description: "Activity to benefit Conception & Pregnancy",
      image: "/media/patient-connected-story/capability-fitness-desktop-122x116-v1.png",
      mobileImage: "/media/patient-connected-story/capability-fitness-mobile-96x116-v1.png",
      imageAlt: "Visual representing fitness",
    },
    {
      title: "Monitor",
      description: "Healthy Weight is Vital for Conception & Pregnancy",
      image: "/media/patient-connected-story/capability-monitor-desktop-122x116-v1.png",
      mobileImage: "/media/patient-connected-story/capability-monitor-mobile-96x116-v1.png",
      imageAlt: "Visual representing monitoring",
    },
  ],
  [
    {
      title: "Pregnancy Dating",
      description: "The documented baseline",
      image: "/media/patient-connected-story/capability-gestational-age-desktop-122x116-v1.png",
      mobileImage: "/media/patient-connected-story/capability-gestational-age-mobile-96x116-v1.png",
      imageAlt: "Visual representing pregnancy dating",
    },
    {
      title: "Biometry",
      description: "Longitudinal Fetal Growth Timeline",
      image: "/media/patient-connected-story/capability-biometry-desktop-122x116-v1.png",
      mobileImage: "/media/patient-connected-story/capability-biometry-mobile-96x116-v1.png",
      imageAlt: "Visual representing fetal biometry",
    },
    {
      title: "Growth Analysis",
      description: "Continuous Tracking across the Scans",
      image: "/media/patient-connected-story/capability-growth-analysis-desktop-122x116-v1.png",
      mobileImage: "/media/patient-connected-story/capability-growth-analysis-mobile-96x116-v1.png",
      imageAlt: "Visual representing fetal growth analysis",
    },
    {
      title: "Doppler Lookup",
      description: "Protocol aligned assistance",
      image: "/media/patient-connected-story/capability-doppler-staging-desktop-122x116-v1.png",
      mobileImage: "/media/patient-connected-story/capability-doppler-staging-mobile-96x116-v1.png",
      imageAlt: "Visual representing Doppler lookup",
    },
  ],
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
            <span className="hero-title-line">
              Understand
              <br className="patient-hero-mobile-break" /> your health.
            </span>
            <span className="hero-title-line">
              Follow your
              <br className="patient-hero-mobile-break" /> baby’s growth.
            </span>
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
            <a className="button quiet" href={`${prefix}/about/`}>
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
          <div className="journey-capability-grid" aria-label="ODRISC support areas">
            {journeyCapabilityColumns.map((column) => (
              <div className="journey-capability-column" key={column[0].title}>
                {column.map((capability) => (
                  <article className="journey-capability-card" key={capability.title}>
                    <div className="journey-capability-image">
                      <picture>
                        <source media="(max-width: 760px)" srcSet={capability.mobileImage} />
                        <Image
                          src={capability.image}
                          alt={capability.imageAlt}
                          fill
                          sizes="(max-width: 760px) 96px, 122px"
                        />
                      </picture>
                    </div>
                    <div className="journey-capability-copy">
                      <h3>{capability.title}</h3>
                      <p>{capability.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
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
          <h2 className="maternal-trajectory-title">
            <span className="maternal-trajectory-title-line">What matters is where</span>{" "}
            <span className="maternal-trajectory-title-line">
              your <span className="maternal-trajectory-title-accent">pregnancy is</span>
            </span>{" "}
            <span className="maternal-trajectory-title-line maternal-trajectory-title-accent">
              progressing.
            </span>
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
              ODRISC Fetal Intelligence is designed to bring measurements from across pregnancy
              together, helping transform individual snapshots into a continuous view of how a baby
              is growing over time.
            </p>
          </div>
          <AnimatedJourneyChecklist
            items={[
              "See each ultrasound as one moment in your baby’s growth.",
              "Bring measurements across pregnancy together into one continuous view.",
              "Follow growth over time with greater clarity and context.",
            ]}
          />
        </div>
      </PatientImageNarrative>

      <PatientToolsFrame>
        <PatientSectionSixVideo />
      </PatientToolsFrame>

      <section id="about-odrisc" className="section patient-section-seven">
        <div className="section-seven-intro">
          <PatientSectionSevenAbout href={`${prefix}/about/`} />
          <div className="section-seven-care-marker" aria-label="Pregnancy Care">
            <span className="section-seven-care-capsule" aria-hidden="true" />
            <span className="section-seven-care-label">Pregnancy Care</span>
            <span className="section-seven-care-line" aria-hidden="true" />
          </div>
        </div>
        <div className="section-seven-intelligence-stage">
          <div className="section-seven-intelligence">
            <div className="section-seven-frame-grid" aria-label="Connected pregnancy care moments">
              <figure className="section-seven-frame section-seven-frame-primary">
                <picture>
                  <source
                    media="(max-width: 760px)"
                    srcSet="/media/patient-connected-story/pregnancy-care-couple-primary-mobile-1144x1375-v1.png"
                  />
                  <Image
                    src="/media/patient-connected-story/pregnancy-care-couple-primary-desktop-1145x1374-v1.png"
                    alt="An expectant couple sharing a quiet moment together"
                    fill
                    sizes="(max-width: 760px) 46vw, 32vw"
                  />
                </picture>
              </figure>
              <figure className="section-seven-frame section-seven-frame-secondary">
                <picture>
                  <source
                    media="(max-width: 760px)"
                    srcSet="/media/patient-connected-story/pregnancy-care-consultation-secondary-mobile-1030x1527-v1.png"
                  />
                  <Image
                    src="/media/patient-connected-story/pregnancy-care-consultation-secondary-desktop-935x1683-v1.png"
                    alt="A pregnant woman speaking with a healthcare professional"
                    fill
                    sizes="(max-width: 760px) 46vw, 32vw"
                  />
                </picture>
              </figure>
              <figure className="section-seven-frame section-seven-frame-wide">
                <picture>
                  <source
                    media="(max-width: 760px)"
                    srcSet="/media/patient-connected-story/pregnancy-care-phone-wide-mobile-1494x1052-v1.png"
                  />
                  <Image
                    src="/media/patient-connected-story/pregnancy-care-phone-wide-desktop-1494x1052-v1.png"
                    alt="A pregnant woman using a smartphone at home"
                    fill
                    sizes="(max-width: 760px) 100vw, 64vw"
                  />
                </picture>
              </figure>
            </div>
            <div className="section-seven-intelligence-copy">
              <h2 className="section-seven-intelligence-title">
                <span>Intelligence</span> <span>designed for</span> <span>every pregnancy</span>{" "}
                <span>journey</span>
              </h2>
              <p>
                ODRISC is being developed to support informed pregnancy care by combining
                evidence-based guidance, longitudinal monitoring and clinician-aligned insights
                while keeping clinical decisions with qualified healthcare professionals.
              </p>
            </div>
          </div>
          <div className="section-seven-community-marker" aria-label="Join our Community">
            <span className="section-seven-care-capsule" aria-hidden="true" />
            <span className="section-seven-care-label">Join our Community</span>
            <span className="section-seven-care-line" aria-hidden="true" />
          </div>
        </div>
        <PatientCareTierFrames href="https://app.odrisc.com" />
        <div className="section-seven-talk-stage">
          <div className="section-seven-talk-marker" aria-label="Talk to Us">
            <span className="section-seven-care-capsule" aria-hidden="true" />
            <span className="section-seven-care-label">Talk to Us</span>
            <span className="section-seven-care-line" aria-hidden="true" />
          </div>
          <div className="section-seven-talk-content">
            <div className="section-seven-talk-copy">
              <h2>Schedule a Call</h2>
              <p>
                Discover how ODRISC is advancing preventive pregnancy care by transforming health
                data into meaningful results, actionable insights and more informed care decisions.
              </p>
              <a
                className="section-seven-about-action section-seven-talk-action"
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
                <span className="section-seven-about-button">Call Us</span>
              </a>
            </div>
            <figure className="section-seven-talk-frame" aria-hidden="true">
              <picture>
                <source
                  media="(max-width: 760px)"
                  srcSet="/media/patient-connected-story/talk-to-us-mobile-1683x935-v2.png"
                />
                <Image
                  src="/media/patient-connected-story/talk-to-us-desktop-1287x1222-v2.png"
                  alt=""
                  fill
                  sizes="(max-width: 760px) 100vw, 46vw"
                />
              </picture>
            </figure>
          </div>
          <div className="section-seven-talk-fade">
            <div className="section-seven-talk-closing">
              <p>
                Understand earlier what’s
                <br className="patient-closing-mobile-break" /> changing for you and your baby
              </p>
              <h2>Care designed to look ahead</h2>
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
