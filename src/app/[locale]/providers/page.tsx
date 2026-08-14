import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

import { GrowthChart, MaternalFetalMatrix, StoryOrbit } from "../_components/visuals";
import { SiteHeader } from "../_components/site-header";

export const metadata: Metadata = {
  title: "For Healthcare Providers | ODRISC",
  description: "Longitudinal maternal and fetal intelligence for clinical monitoring.",
};

const modules = [
  {
    n: "01",
    title: "Gestational-age context",
    tag: "In development",
    body: "A consistent chronological reference designed to make longitudinal comparisons easier to review.",
  },
  {
    n: "02",
    title: "Growth trajectories",
    tag: "In development",
    body: "Illustrative fetal growth trends across sequential observations, with explainable provenance.",
  },
  {
    n: "03",
    title: "Maternal–fetal context",
    tag: "In development",
    body: "A synchronized view of maternal patterns and fetal growth for clinician review.",
  },
  {
    n: "04",
    title: "Report extraction",
    tag: "Planned",
    body: "A clinician-verified workflow concept for turning ultrasound reports into structured records.",
  },
] as const;

export default async function ProviderPage({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const prefix = locale === "en" ? "" : `/${locale}`;
  const nav = [
    { label: "Monitor", href: "#monitor" },
    { label: "Intelligence", href: "#intelligence" },
    { label: "Validation", href: "#validation" },
    { label: "Insights", href: "#insights" },
    { label: "ODRISC App", href: "#app" },
    { label: "Request demo", href: `${prefix}/providers/request-demonstration/` },
  ];

  return (
    <main className="audience-page provider-page">
      <SiteHeader locale={locale} audience="provider" items={nav} />
      <section className="audience-hero provider-hero">
        <div className="hero-copy reveal">
          <span className="eyebrow">For clinicians · Platform in development</span>
          <h1>
            See the pregnancy as a <em>trajectory,</em> not a snapshot.
          </h1>
          <p className="hero-lead">
            ODRISC is developing a maternal and fetal intelligence layer to organize fragmented
            information across time and support more informed clinical monitoring.
          </p>
          <div className="button-row">
            <a className="button primary" href="#intelligence">
              Explore the platform
            </a>
            <a className="button quiet" href={`${prefix}/providers/request-demonstration/`}>
              Request a walkthrough
            </a>
          </div>
          <div className="trust-line">
            <span>Explainable</span>
            <span>Longitudinal</span>
            <span>Clinician-supportive</span>
          </div>
        </div>
        <div className="hero-visual provider-visual">
          <StoryOrbit variant="provider" />
          <div className="metric-card metric-one">
            <span>Trajectory</span>
            <strong>Longitudinal</strong>
            <small>illustrative view</small>
          </div>
          <div className="metric-card metric-two">
            <span>Review state</span>
            <strong>Clinician in loop</strong>
            <small>decision support</small>
          </div>
        </div>
      </section>

      <section className="provider-ribbon">
        <span>Clinical data</span>
        <b>→</b>
        <span>Longitudinal intelligence</span>
        <b>→</b>
        <span>Earlier recognition</span>
        <b>→</b>
        <span>Better monitoring</span>
      </section>

      <section id="monitor" className="section split-section">
        <div className="section-copy">
          <span className="eyebrow">Monitor · One evolving story</span>
          <h2>Connect observations across time.</h2>
          <p>
            Pregnancy information often arrives through separate scans, reports, measurements and
            conversations. The proposed monitoring experience brings approved information into a
            coherent chronological view.
          </p>
          <div className="mini-stats">
            <div>
              <strong>01</strong>
              <span>Shared timeline</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Clear provenance</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Reviewable change</span>
            </div>
          </div>
        </div>
        <GrowthChart />
      </section>

      <section id="intelligence" className="section intelligence-section">
        <div className="section-heading light">
          <span className="eyebrow">Intelligence · Explainable by design</span>
          <h2>From fragmented data to a structured clinical view.</h2>
          <p>
            Four connected concepts from the clinician reference, presented with their approved
            development status.
          </p>
        </div>
        <div className="module-grid">
          {modules.map((module) => (
            <article className="module-card" key={module.n}>
              <div>
                <span className="module-number">{module.n}</span>
                <span className={`status-label ${module.tag === "Planned" ? "planned" : ""}`}>
                  {module.tag}
                </span>
              </div>
              <h3>{module.title}</h3>
              <p>{module.body}</p>
              <span className="module-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section matrix-section">
        <div className="matrix-copy">
          <span className="eyebrow">Maternal–fetal matrix</span>
          <h2>Two trajectories. One connected review.</h2>
          <p>
            A conceptual matrix aligns maternal patterns with fetal growth context. It is an
            illustrative decision-support visualization—not a live clinical tool or diagnostic
            output.
          </p>
          <div className="legend">
            <span className="on-track">On track</span>
            <span className="observe">Observe</span>
            <span className="review">Review</span>
          </div>
        </div>
        <MaternalFetalMatrix />
      </section>

      <section id="validation" className="section validation-section">
        <div className="section-heading">
          <span className="eyebrow">Validation · Evidence before promotion</span>
          <h2>Transparent about what is known—and what is still being built.</h2>
        </div>
        <div className="validation-grid">
          <article>
            <span>01</span>
            <h3>Clinical boundary</h3>
            <p>
              Supports review and monitoring. It does not diagnose, prescribe, or replace clinical
              judgment.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Product status</h3>
            <p>Maternal and fetal intelligence are in development; ultrasound OCR is planned.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Illustrative data</h3>
            <p>
              Every chart and metric on this website uses synthetic sample data for demonstration.
            </p>
          </article>
        </div>
      </section>

      <section id="insights" className="section insights-section">
        <div className="insight-index">01—04</div>
        <div>
          <span className="eyebrow">Insights · The four pillars</span>
          <h2>Observe the signal behind the isolated measurement.</h2>
        </div>
        <div className="pillar-list">
          <div>
            <b>01</b>
            <span>Maternal trajectory</span>
          </div>
          <div>
            <b>02</b>
            <span>Fetal growth trajectory</span>
          </div>
          <div>
            <b>03</b>
            <span>Centile movement</span>
          </div>
          <div>
            <b>04</b>
            <span>Growth variance</span>
          </div>
        </div>
      </section>

      <section id="app" className="section app-section">
        <div className="app-mock" aria-hidden="true">
          <div className="phone">
            <div className="phone-top" />
            <div className="phone-content">
              <span>ODRISC</span>
              <strong>Pregnancy story</strong>
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="app-orbit" />
        </div>
        <div>
          <span className="eyebrow">One platform · Connected experiences</span>
          <h2>Bring patients and providers into the same pregnancy story.</h2>
          <p>
            The future ODRISC ecosystem is intended to support complementary Patient and Provider
            experiences while preserving appropriate clinical roles, privacy and information depth.
          </p>
          <span className="status-label">Patient app status to confirm</span>
        </div>
      </section>

      <section className="closing-cta provider-closing">
        <div>
          <span className="eyebrow">Explore the clinical direction</span>
          <h2>Review the intelligence layer with us.</h2>
        </div>
        <a className="button primary" href={`${prefix}/providers/request-demonstration/`}>
          Request a demonstration
        </a>
      </section>
      <footer className="site-footer">
        <span>© 2026 ODRISC Technologies</span>
        <span>Clinical decision support · Not a diagnostic service</span>
      </footer>
    </main>
  );
}
