export function StoryOrbit({
  variant = "shared",
}: Readonly<{ variant?: "shared" | "patient" | "provider" }>) {
  return (
    <div className={`story-orbit ${variant}`} aria-hidden="true">
      <div className="orbit-ring ring-one" />
      <div className="orbit-ring ring-two" />
      <div className="orbit-ring ring-three" />
      <div className="orbit-core">
        <span>01</span>
        <small>connected story</small>
      </div>
      <span className="orbit-node node-a">Maternal</span>
      <span className="orbit-node node-b">Fetal</span>
      <span className="orbit-node node-c">Time</span>
    </div>
  );
}

export function GrowthChart() {
  return (
    <div
      className="growth-chart"
      role="img"
      aria-label="Illustrative fetal growth timeline using synthetic sample data"
    >
      <div className="chart-head">
        <div>
          <span className="eyebrow">Illustrative timeline</span>
          <strong>Longitudinal growth view</strong>
        </div>
        <span className="status-pill">In development</span>
      </div>
      <svg viewBox="0 0 680 300" aria-hidden="true">
        <defs>
          <linearGradient id="area" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ff7680" stopOpacity=".22" />
            <stop offset="1" stopColor="#80ffcc" stopOpacity=".08" />
          </linearGradient>
          <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#ff7680" />
            <stop offset="1" stopColor="#25b580" />
          </linearGradient>
        </defs>
        {[60, 120, 180, 240].map((y) => (
          <line key={y} x1="42" y1={y} x2="650" y2={y} className="grid-line" />
        ))}
        <path
          d="M42 238 C125 222 175 204 235 188 S360 148 425 132 S555 88 650 68 L650 260 L42 260 Z"
          fill="url(#area)"
        />
        <path
          d="M42 238 C125 222 175 204 235 188 S360 148 425 132 S555 88 650 68"
          fill="none"
          stroke="url(#line)"
          strokeWidth="5"
          strokeLinecap="round"
          className="draw-line"
        />
        {[
          { x: 42, y: 238 },
          { x: 154, y: 211 },
          { x: 274, y: 177 },
          { x: 398, y: 140 },
          { x: 522, y: 103 },
          { x: 650, y: 68 },
        ].map((p) => (
          <circle key={p.x} cx={p.x} cy={p.y} r="7" className="chart-point" />
        ))}
      </svg>
      <div className="chart-axis">
        <span>20w</span>
        <span>24w</span>
        <span>28w</span>
        <span>32w</span>
        <span>36w</span>
        <span>40w</span>
      </div>
      <p className="sample-note">Synthetic sample data. Not for diagnosis or clinical use.</p>
    </div>
  );
}

export function MaternalFetalMatrix() {
  const cells = [
    "Review",
    "Observe",
    "On track",
    "Review",
    "On track",
    "Observe",
    "Observe",
    "Review",
    "On track",
  ];
  return (
    <div
      className="matrix"
      role="img"
      aria-label="Illustrative maternal and fetal monitoring matrix using synthetic sample data"
    >
      <div className="matrix-label vertical">Maternal trajectory</div>
      <div className="matrix-grid">
        {cells.map((cell, index) => (
          <div
            key={`${cell}-${index}`}
            className={`matrix-cell state-${cell.toLowerCase().replace(" ", "-")}`}
          >
            <span>{cell}</span>
          </div>
        ))}
      </div>
      <div className="matrix-label horizontal">Fetal trajectory</div>
    </div>
  );
}
