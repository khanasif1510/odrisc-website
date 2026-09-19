"use client";

import { useId, useState } from "react";
import { m, useReducedMotion } from "motion/react";
import { ArrowUpRight, FileText, ScanLine, ShieldCheck } from "lucide-react";

import {
  demoCase,
  displayDate,
  gestationalLabel,
  intervalSummary,
} from "@/content/providers/demo-case";
import { providerStatus } from "@/content/providers/site";

import styles from "@/components/provider/provider.module.css";

type DemoView = "growth" | "doppler" | "source";

/** CMP-FTR-202: finite synthetic case; no uploads, patient inputs or clinical engine. */
export function FetalGrowthDemo({ detailed = false }: Readonly<{ detailed?: boolean }>) {
  const [selected, setSelected] = useState(2);
  const [view, setView] = useState<DemoView>("growth");
  const reducedMotion = useReducedMotion();
  const id = useId();
  const visit = demoCase.visits[selected];
  const interval = intervalSummary(demoCase.visits[selected - 1], visit);
  const points = demoCase.visits.map((item) => ({
    x: 64 + ((item.gestationalDays - 140) / 59) * 512,
    y: 238 - (item.efw / 1500) * 202,
  }));
  const views: ReadonlyArray<{ value: DemoView; label: string }> = [
    { value: "growth", label: "Growth timeline" },
    { value: "doppler", label: "Doppler context" },
    { value: "source", label: "Source record" },
  ];

  return (
    <div className={styles.demo} data-testid="fetal-growth-demo">
      <div className={styles.demoHeader}>
        <div className={styles.demoIdentity}>
          <ScanLine size={21} aria-hidden="true" />
          <div>
            <strong>Pregnancy in view</strong>
            <span>
              {demoCase.id} · {providerStatus.preview}
            </span>
          </div>
        </div>
        <span className={styles.status}>Interactive preview</span>
      </div>
      <div className={styles.demoToolbar} role="group" aria-label="Demonstration views">
        {views.map((item) => (
          <button
            key={item.value}
            type="button"
            aria-pressed={view === item.value}
            aria-controls={`${id}-view`}
            onClick={() => setView(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className={styles.demoLayout}>
        <div className={styles.demoMain} id={`${id}-view`}>
          <div className={styles.demoMetrics}>
            <div>
              <span>Estimated fetal weight</span>
              <strong>
                {visit.efw.toLocaleString("en-GB")} <small>g</small>
              </strong>
              <span>Reported example value</span>
            </div>
            <div>
              <span>Selected assessment</span>
              <strong>{gestationalLabel(visit.gestationalDays)}</strong>
              <span>{displayDate(visit.date)}</span>
            </div>
            <div>
              <span>Change from previous scan</span>
              <strong>
                {interval ? `+${interval.change}` : "—"} <small>{interval ? "g" : ""}</small>
              </strong>
              <span>{interval ? `Over ${interval.days} days` : "First recorded assessment"}</span>
            </div>
          </div>
          {view === "growth" ? (
            <>
              <div className={styles.chartTitle}>
                <h3>Growth across visits</h3>
                <span>
                  <i /> Reported EFW
                </span>
              </div>
              <svg
                className={styles.chart}
                viewBox="0 0 640 292"
                role="img"
                aria-labelledby={`${id}-chart-title ${id}-chart-description`}
              >
                <title id={`${id}-chart-title`}>
                  Three reported estimated fetal weights across pregnancy
                </title>
                <desc id={`${id}-chart-description`}>
                  331 grams at 20 weeks, 695 grams at 24 weeks 1 day, and 1237 grams at 28 weeks 3
                  days. The line connects recorded values; it is not a reference curve or a
                  prediction. The same values are available in the visit buttons and data table.
                </desc>
                {[0, 500, 1000, 1500].map((value) => (
                  <g key={value}>
                    <line
                      x1="64"
                      x2="576"
                      y1={238 - (value / 1500) * 202}
                      y2={238 - (value / 1500) * 202}
                      stroke="var(--line)"
                    />
                    <text x="51" y={242 - (value / 1500) * 202} textAnchor="end">
                      {value.toLocaleString("en-GB")}
                    </text>
                  </g>
                ))}
                <text x="18" y="17">
                  g
                </text>
                <path
                  d={`M${points.map((point) => `${point.x},${point.y}`).join(" L")} L576,238 L64,238 Z`}
                  fill="var(--coral-wash)"
                  opacity="0.7"
                />
                <polyline
                  points={points.map((point) => `${point.x},${point.y}`).join(" ")}
                  fill="none"
                  stroke="var(--coral-dark)"
                  strokeWidth="3"
                />
                {points.map((point, index) => (
                  <g key={index}>
                    <m.circle
                      cx={point.x}
                      cy={point.y}
                      animate={{ r: selected === index ? 9 : 5 }}
                      transition={{ duration: reducedMotion ? 0 : 0.2 }}
                      fill={selected === index ? "var(--coral-dark)" : "white"}
                      stroke="var(--coral-dark)"
                      strokeWidth="2"
                    />
                    <text x={point.x} y="268" textAnchor="middle">
                      {gestationalLabel(demoCase.visits[index].gestationalDays)}
                    </text>
                  </g>
                ))}
              </svg>
              <p className={styles.chartNote}>
                Connecting reported measurements across time. No projection or population centile
                curve is shown.
              </p>
              <div className={styles.intervalBar}>
                <span>Estimated interval growth</span>
                <strong>
                  {interval ? `${interval.gramsPerWeek} g/week` : "Two visits needed"}
                </strong>
                <span>
                  {interval
                    ? `EFW difference ÷ ${interval.days} days × 7`
                    : "Select a later visit to compare"}
                </span>
              </div>
            </>
          ) : view === "doppler" ? (
            <div className={styles.contextPanel}>
              <span className={styles.kicker}>Same visit. Additional context.</span>
              <h3>Doppler observations</h3>
              <div className={styles.dopplerValues}>
                <div>
                  <span>Umbilical artery PI</span>
                  <strong>{visit.uaPi.toFixed(2)}</strong>
                </div>
                <div>
                  <span>Middle cerebral artery PI</span>
                  <strong>{visit.mcaPi.toFixed(2)}</strong>
                </div>
                <div>
                  <span>Cerebroplacental ratio</span>
                  <strong>{(visit.mcaPi / visit.uaPi).toFixed(2)}</strong>
                </div>
                <div>
                  <span>Ductus venosus observation</span>
                  <strong className={styles.missing}>Not recorded</strong>
                </div>
              </div>
              <p>
                CPR is calculated from MCA PI ÷ UA PI. These example values carry no automated
                normal or abnormal classification.
              </p>
              <div className={styles.reviewNote}>
                <ShieldCheck size={20} aria-hidden="true" />
                <div>
                  <strong>Staging needs its full clinical context</strong>
                  <p>
                    A missing observation remains missing. The selected protocol, required
                    measurements and clinician assessment belong alongside a staging result.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.contextPanel}>
              <span className={styles.kicker}>Information you can trace</span>
              <h3>{visit.source}</h3>
              <dl className={styles.recordList}>
                <div>
                  <dt>Case</dt>
                  <dd>{demoCase.id} · Fictional</dd>
                </div>
                <div>
                  <dt>Report date</dt>
                  <dd>{displayDate(visit.date)}</dd>
                </div>
                <div>
                  <dt>Dating baseline</dt>
                  <dd>EDD {displayDate(demoCase.edd)}</dd>
                </div>
                <div>
                  <dt>Gestational age</dt>
                  <dd>{gestationalLabel(visit.gestationalDays)}</dd>
                </div>
                <div>
                  <dt>Reported EFW</dt>
                  <dd>{visit.efw.toLocaleString("en-GB")} g</dd>
                </div>
                <div>
                  <dt>Source type</dt>
                  <dd>Prepared demonstration record</dd>
                </div>
              </dl>
              <p>
                Review the date, unit and source before interpreting a measurement. This record is
                synthetic and is not an uploaded patient report.
              </p>
            </div>
          )}
        </div>
        <aside className={styles.visitRail} aria-label="Select an assessment">
          <span className={styles.kicker}>Scan timeline</span>
          <p className={styles.railHint}>Select a visit to review its context.</p>
          {demoCase.visits.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={styles.visit}
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
            >
              <span className={styles.visitDot} />
              <span>
                <strong>{gestationalLabel(item.gestationalDays)}</strong>
                <span>{displayDate(item.date)}</span>
                <b>{item.efw.toLocaleString("en-GB")} g</b>
                <span>{item.label}</span>
              </span>
            </button>
          ))}
          <div className={styles.railFooter}>
            <FileText size={16} aria-hidden="true" />
            <span>
              One dating baseline.
              <br />
              Three traceable records.
            </span>
          </div>
        </aside>
      </div>
      <div className={styles.demoFooter}>
        <span aria-live="polite">
          Selected: {gestationalLabel(visit.gestationalDays)} · {displayDate(visit.date)}
        </span>
        <span>Synthetic data · Not for clinical use</span>
      </div>
      {detailed ? (
        <details className={styles.dataTable}>
          <summary>
            View the demonstration data <ArrowUpRight size={16} aria-hidden="true" />
          </summary>
          <div
            className={styles.tableScroll}
            tabIndex={0}
            role="region"
            aria-label="Demonstration data table"
          >
            <table>
              <caption>Fictional case DEMO-001. EFW is a reported estimate.</caption>
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Gestational age</th>
                  <th scope="col">EFW (g)</th>
                  <th scope="col">UA PI</th>
                  <th scope="col">MCA PI</th>
                  <th scope="col">DV</th>
                </tr>
              </thead>
              <tbody>
                {demoCase.visits.map((item) => (
                  <tr key={item.id}>
                    <td>{displayDate(item.date)}</td>
                    <td>{gestationalLabel(item.gestationalDays)}</td>
                    <td>{item.efw}</td>
                    <td>{item.uaPi.toFixed(2)}</td>
                    <td>{item.mcaPi.toFixed(2)}</td>
                    <td>Not recorded</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      ) : null}
    </div>
  );
}
