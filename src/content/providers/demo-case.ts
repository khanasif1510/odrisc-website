export type DemoVisit = Readonly<{
  id: string;
  date: string;
  label: string;
  gestationalDays: number;
  efw: number;
  uaPi: number;
  mcaPi: number;
  dv: null;
  source: string;
}>;

// Fictional, fixed report values. This module is not a clinical calculator.
export const demoCase = {
  id: "DEMO-001",
  edd: "2026-07-12",
  datingSource: "Documented first-trimester dating",
  visits: [
    {
      id: "visit-1",
      date: "2026-02-22",
      label: "First assessment",
      gestationalDays: 140,
      efw: 331,
      uaPi: 1.05,
      mcaPi: 1.95,
      dv: null,
      source: "Example report 01",
    },
    {
      id: "visit-2",
      date: "2026-03-23",
      label: "Second assessment",
      gestationalDays: 169,
      efw: 695,
      uaPi: 1.08,
      mcaPi: 1.82,
      dv: null,
      source: "Example report 02",
    },
    {
      id: "visit-3",
      date: "2026-04-22",
      label: "Latest assessment",
      gestationalDays: 199,
      efw: 1237,
      uaPi: 1.1,
      mcaPi: 1.75,
      dv: null,
      source: "Example report 03",
    },
  ] satisfies readonly DemoVisit[],
} as const;

export function gestationalLabel(days: number) {
  return `${Math.floor(days / 7)}w ${days % 7}d`;
}

export function displayDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function intervalSummary(previous: DemoVisit | undefined, current: DemoVisit) {
  if (!previous) {
    return null;
  }
  const days =
    (Date.parse(`${current.date}T00:00:00Z`) - Date.parse(`${previous.date}T00:00:00Z`)) /
    86_400_000;
  if (days <= 0) {
    return null;
  }
  return {
    days,
    change: current.efw - previous.efw,
    gramsPerWeek: Math.round(((current.efw - previous.efw) / days) * 7),
  };
}
