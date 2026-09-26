import { SiteHeader } from "../../_components/site-header";

type PatientTopicPageProps = Readonly<{
  locale: string;
  eyebrow: string;
  title: string;
  accent: string;
  introduction: string;
  status: "Status to confirm" | "In development";
  sections: readonly Readonly<{ title: string; body: string }>[];
  boundary: string;
}>;

export function PatientTopicPage(props: PatientTopicPageProps) {
  const { locale, eyebrow, title, accent, introduction, status, sections, boundary } = props;
  const prefix = locale === "en" ? "" : `/${locale}`;
  const nav = [
    { label: "RAS Test", href: `${prefix}/patients/risk-awareness/` },
    { label: "Nutrition", href: `${prefix}/patients/nutrition/` },
    { label: "Fitness", href: `${prefix}/patients/physical-activity/` },
    { label: "Monitor", href: `${prefix}/patients/maternal-and-fetal-progress/` },
  ];

  return (
    <main className="audience-page patient-page topic-page">
      <SiteHeader locale={locale} audience="patient" items={nav} />
      <section className="topic-hero">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>
            {title} <em>{accent}</em>
          </h1>
          <p>{introduction}</p>
          <span className={`status-label ${status === "In development" ? "development" : ""}`}>
            {status}
          </span>
        </div>
        <div className="topic-signal" aria-hidden="true">
          <span />
          <span />
          <span />
          <i />
        </div>
      </section>
      <section className="topic-grid" aria-label={`${title} overview`}>
        {sections.map((section, index) => (
          <article key={section.title}>
            <span>0{index + 1}</span>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>
      <section className="topic-boundary">
        <span className="eyebrow">Your care stays human</span>
        <h2>Information for a better conversation—not a diagnosis.</h2>
        <p>{boundary}</p>
        <a className="button quiet" href={`${prefix}/patients/`}>
          Back to patient home
        </a>
      </section>
      <footer className="site-footer">
        <span>© 2026 ODRISC Technologies</span>
        <span>For information only · Not medical advice</span>
      </footer>
    </main>
  );
}
