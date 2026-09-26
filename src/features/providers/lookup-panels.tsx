"use client";
import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { ArrowUpRight, Check, X } from "lucide-react";
import {
  clinicalRegistry,
  lookupSources,
  type SourceFixture,
} from "@/content/providers/lookup-sources";
import {
  calculateEfw,
  displayDate,
  formula,
  provenance,
  type ClinicalCase,
  type DopplerVisit,
  type GrowthScan,
} from "@/content/providers/lookup-cases";
import styles from "@/components/provider/lookup-dashboard.module.css";

export function ReviewDialog({
  title,
  onClose,
  triggerRef,
  children,
}: {
  title: string;
  onClose: () => void;
  triggerRef: RefObject<HTMLElement | null>;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const dialog = ref.current;
    if (!returnFocus.current && document.activeElement instanceof HTMLElement) {
      returnFocus.current = triggerRef.current ?? document.activeElement;
    }
    dialog?.showModal();
    return () => {
      dialog?.close();
      returnFocus.current?.focus({ preventScroll: true });
    };
  }, [triggerRef]);
  return (
    <dialog
      ref={ref}
      className={styles.dialog}
      aria-labelledby="lookup-dialog-title"
      onCancel={onClose}
    >
      <div className={styles.dialogHead}>
        <div>
          <span className={styles.eyebrow}>Evidence & review</span>
          <h2 id="lookup-dialog-title">{title}</h2>
        </div>
        <button
          type="button"
          className={styles.iconButton}
          onClick={onClose}
          aria-label="Close review panel"
        >
          <X size={22} />
        </button>
      </div>
      <div className={styles.dialogBody}>{children}</div>
    </dialog>
  );
}
export function DefinitionList({ items }: { items: [string, ReactNode][] }) {
  return (
    <dl className={styles.definitions}>
      {items.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
export function SourceDetail({ source, why }: { source: SourceFixture; why: string }) {
  const registered = clinicalRegistry.sources.find((row) => row.id === source.registryId)!;
  const related = [
    ...registered.correctedBy,
    ...registered.supersededBy,
    ...registered.relatedSources,
  ];
  return (
    <>
      <div className={styles.notice}>
        <strong>Demonstration source fixture</strong>
        <p>Fixture source content — not production clinical content. Clinical review pending.</p>
      </div>
      <h3>{source.title}</h3>
      <p>{source.fixtureNote}</p>
      <DefinitionList
        items={[
          ["Why this appeared", why],
          ["Matched concept", source.concept],
          ["Source ID", source.registryId],
          ["Issuing body", source.body],
          [
            "Version / publication",
            `${source.version} · ${registered.publicationDate ?? "Date not supplied"}`,
          ],
          ["Reaffirmation", registered.reaffirmedDate ?? "Not recorded in the registry"],
          ["Jurisdiction", source.jurisdiction],
          ["Population scope", source.population],
          ["Source locator", source.locator],
          ["Lookup promotion", registered.lookupStatus],
          ["Numerical promotion", registered.numericalStatus],
          ["Clinical review", registered.clinicalReviewStatus],
          ["Content package", registered.contentStatus],
          ["Registry version", clinicalRegistry.registry.version],
        ]}
      />
      {related.length > 0 && (
        <section>
          <h3>Corrections & related records</h3>
          <ul className={styles.list}>
            {related.map((id) => {
              const item = clinicalRegistry.sources.find((s) => s.id === id);
              return (
                <li key={id}>
                  {item ? (
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.title} · {item.publicationDate}
                    </a>
                  ) : (
                    id
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      )}
      <details>
        <summary>Review requirements & limitations</summary>
        <ul className={styles.list}>
          {[...registered.blockers, ...registered.limitations].map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </details>
      <a className={styles.primaryButton} href={source.url} target="_blank" rel="noreferrer">
        Open published source <ArrowUpRight size={16} />
      </a>
    </>
  );
}
export function MethodDetail({ scan }: { scan?: GrowthScan }) {
  return (
    <>
      <span className={styles.badge}>Calculated by ODRISC utility · synthetic demonstration</span>
      <h3>{formula.name}</h3>
      <p className={styles.formula}>{formula.expression}</p>
      <p>
        {formula.units}. Stored mm are divided by 10 once. BPD is retained as an observation but is
        not an input to this equation.
      </p>
      {scan && (
        <DefinitionList
          items={[
            ["Source-reported EFW", `${scan.reportedEfw} g`],
            ["Recalculated EFW", `${calculateEfw(scan).toFixed(2)} g (unrounded utility)`],
            ["Selected EFW", `${scan.selectedEfw} g (supplied rounded fixture)`],
            ["Selected basis", "Recalculated fixture matching simulated source report"],
            ["Formula identity", `${formula.id} / ${formula.version}`],
          ]}
        />
      )}
      <h3>Interval method</h3>
      <p>
        ΔEFW ÷ elapsed acquisition days × 7 = g/week. No Doppler-only observation or postnatal
        birthweight is inserted into the growth series. A minimum 14-day interval is required for
        the reference comparison.
      </p>
      <h3>Reference method</h3>
      <p>
        WHO table bands are supplied fixtures. No exact centile, Z-score, interpolated tail, GROW
        coefficient or velocity distribution is included. Where both endpoint medians are supplied,
        their difference is divided by the same scan interval.
      </p>
      <h3>CPR method</h3>
      <p>
        MCA PI ÷ UA PI from the same visit, displayed to three decimals. No universal abnormality
        threshold is applied.
      </p>
      <div className={styles.notice}>
        Independent numerical release is pending in registry {clinicalRegistry.registry.version}.
        These utilities operate only on the two synthetic cases.
      </div>
    </>
  );
}
export function ObservationDetail({ record, scan }: { record: ClinicalCase; scan?: GrowthScan }) {
  if (!scan) {
    return <p>No growth observation exists at this review date.</p>;
  }
  const origin = provenance(record, scan);
  return (
    <>
      <span className={styles.badge}>Source verified · synthetic fixture</span>
      <h3>{scan.id}</h3>
      <DefinitionList
        items={[
          ["Acquisition", `${displayDate(scan.date)} · time not supplied`],
          ["Reported / accepted GA", `${scan.ga} / ${origin.accepted_ga}`],
          ["BPD / HC / AC / FL", `${scan.bpd} / ${scan.hc} / ${scan.ac} / ${scan.fl} mm`],
          ["Reported EFW", `${scan.reportedEfw} g`],
          ["Selected EFW", `${scan.selectedEfw} g`],
          ["WHO EFW and AC position", `${scan.band} (table bands)`],
          ["OCR confidence", "Not supplied; no confidence score invented"],
          ["Case / pregnancy / fetus", `${record.id} / ${record.pregnancyId} / ${record.fetusId}`],
          ["Anchor", record.anchorId],
          ["Review history", origin.review_history[0]],
        ]}
      />
      <details>
        <summary>Complete observation provenance</summary>
        <pre className={styles.code}>{JSON.stringify(origin, null, 2)}</pre>
      </details>
    </>
  );
}
export type DopplerRevision = {
  reportId: string;
  date: string;
  ua: number;
  mca: number;
  edf: DopplerVisit["edf"];
  revision: number;
};
export function VerificationDemo({
  record,
  scan,
  doppler,
  onConfirm,
}: {
  record: ClinicalCase;
  scan?: GrowthScan;
  doppler?: DopplerVisit;
  onConfirm: (revision: Omit<DopplerRevision, "revision">) => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const [ua, setUa] = useState(String(doppler?.ua ?? ""));
  const [mca, setMca] = useState(String(doppler?.mca ?? ""));
  const [edf, setEdf] = useState<DopplerVisit["edf"]>(doppler?.edf ?? "Forward");
  const [error, setError] = useState("");
  if (!doppler) {
    return (
      <p>
        No simulated Doppler report is available at this review date. Choose a date with a recorded
        Doppler observation.
      </p>
    );
  }
  if (!loaded) {
    return (
      <>
        <p>
          Load a simulated report for {record.name} dated {displayDate(doppler.date)}. This local
          demonstration uses the supplied fictional record and does not accept patient files.
        </p>
        <button className={styles.primaryButton} onClick={() => setLoaded(true)}>
          Load simulated report <ArrowUpRight size={16} />
        </button>
      </>
    );
  }
  const sameScan = scan?.date === doppler.date ? scan : undefined;
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (
          !Number.isFinite(Number(ua)) ||
          !Number.isFinite(Number(mca)) ||
          Number(ua) <= 0 ||
          Number(mca) <= 0 ||
          Number(ua) > 5 ||
          Number(mca) > 5
        ) {
          setError("Enter a PI greater than 0 and no greater than 5 for this demonstration.");
          return;
        }
        onConfirm({
          reportId: doppler.id,
          date: doppler.date,
          ua: Number(ua),
          mca: Number(mca),
          edf,
        });
      }}
    >
      <div className={styles.notice}>
        <strong>OCR extracted — unverified</strong>
        <p>
          Pending fields are excluded from accepted observations and lookup matching until you
          confirm. OCR is simulated; no extraction service runs.
        </p>
      </div>
      <DefinitionList
        items={[
          ["Report", doppler.id],
          ["Date", displayDate(doppler.date)],
          [
            "Reported GA",
            record.growth.find((row) => row.date === doppler.date)?.ga ??
              "Doppler-only visit; no new growth scan",
          ],
          [
            "Biometry / EFW",
            sameScan
              ? `BPD ${sameScan.bpd}, HC ${sameScan.hc}, AC ${sameScan.ac}, FL ${sameScan.fl} mm · EFW ${sameScan.reportedEfw} g (read-only fixture)`
              : "Not found in this Doppler-only report",
          ],
          [
            "DV",
            doppler.dv === null
              ? "Not found in report · not assessed"
              : `PI ${doppler.dv}; a-wave forward`,
          ],
        ]}
      />
      <p>
        Compare each editable Doppler field with its source. Corrections create a local demo
        revision; the original historical fixture remains available.
      </p>
      <div className={styles.fieldGrid}>
        <label>
          Umbilical artery PI<small>Raw source: “Umb A PI {doppler.ua}”</small>
          <input
            aria-label="Confirmed UA PI"
            type="number"
            step="0.01"
            min="0.01"
            max="5"
            required
            value={ua}
            onChange={(e) => setUa(e.target.value)}
          />
        </label>
        <label>
          Middle cerebral artery PI<small>Raw source: “MCA PI {doppler.mca}”</small>
          <input
            aria-label="Confirmed MCA PI"
            type="number"
            step="0.01"
            min="0.01"
            max="5"
            required
            value={mca}
            onChange={(e) => setMca(e.target.value)}
          />
        </label>
        <label>
          UA end-diastolic flow<small>Raw source: “UA EDF {doppler.edf}”</small>
          <select
            aria-label="Confirmed UA EDF"
            value={edf}
            onChange={(e) => setEdf(e.target.value as DopplerVisit["edf"])}
          >
            <option>Forward</option>
            <option>Absent</option>
          </select>
        </label>
      </div>
      {error && <p role="alert">{error}</p>}
      <button type="submit" className={styles.primaryButton}>
        Confirm demo observations <Check size={17} />
      </button>
      <p className={styles.finePrint}>
        Confirmation records a demonstration-user review only. It never generates a stage or a
        management recommendation.
      </p>
    </form>
  );
}
export function SourceRegistryPanel({ onSource }: { onSource: (id: string) => void }) {
  return (
    <>
      <div className={styles.notice}>
        <strong>Registry {clinicalRegistry.registry.version}</strong>
        <p>
          {clinicalRegistry.sources.length} source identities ·{" "}
          {clinicalRegistry.summary.lookup_enabled_count} lookup-enabled ·{" "}
          {clinicalRegistry.summary.utility_enabled_count} numerical utilities enabled.
        </p>
      </div>
      <p>
        All identities below come from the supplied clinical source registry. Registry presence is
        not approval to use clinical content or execute a numerical model.
      </p>
      <div className={styles.sourceList}>
        {lookupSources.map((source) => (
          <button key={source.id} onClick={() => onSource(source.id)}>
            <span>{source.body}</span>
            <strong>{source.title}</strong>
            <small>{source.registryId}</small>
            <ArrowUpRight size={16} />
          </button>
        ))}
      </div>
      <details>
        <summary>All 38 registered sources</summary>
        <ul className={styles.list}>
          {clinicalRegistry.sources.map((s) => (
            <li key={s.id}>
              <a href={s.url} target="_blank" rel="noreferrer">
                {s.title}
              </a>
              <small>
                {s.id} · {s.lookupStatus} · numerical: {s.numericalStatus}
              </small>
            </li>
          ))}
        </ul>
      </details>
    </>
  );
}
