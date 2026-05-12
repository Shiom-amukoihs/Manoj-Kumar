import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  Cloud,
  Cpu,
  Database,
  GraduationCap,
  Layers3,
  LineChart,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Upload,
  Waves,
} from "lucide-react";

const thesisHighlights = [
  { icon: Cloud, title: "Cloud Forecasting", detail: "Arrival-rate prediction for real workloads." },
  { icon: Cpu, title: "Diffusion Autoformer", detail: "Decomposition with probabilistic sequence modeling." },
  { icon: Activity, title: "Trend Learning", detail: "Seasonality-aware temporal representation." },
  { icon: ShieldCheck, title: "Risk-Aware Scaling", detail: "Forecast uncertainty for smarter capacity decisions." },
];

const architectureStages = [
  {
    icon: Database,
    title: "Input Layer",
    detail: "Historical job-arrival series plus contextual signals such as hour-of-day and day-of-week.",
  },
  {
    icon: Layers3,
    title: "Decomposition",
    detail: "Moving-average separation of trend behaviour and seasonal workload cycles.",
  },
  {
    icon: BrainCircuit,
    title: "Autoformer Encoder",
    detail: "Autocorrelation attention captures long-range dependencies across extended horizons.",
  },
  {
    icon: Waves,
    title: "Diffusion Decoder",
    detail: "Forward noise and reverse denoising model uncertainty and sudden workload shifts.",
  },
  {
    icon: ServerCog,
    title: "Output Projection",
    detail: "Point forecasts and prediction intervals feed risk-aware auto-scaling decisions.",
  },
];

const resultRows = [
  { dataset: "Facebook-5m", loadDynamics: 47.2, wgan: 42.11, autoformer: 45, daf: 40.53 },
  { dataset: "Facebook-10m", loadDynamics: 18.5, wgan: 16.2, autoformer: 17, daf: 18.39 },
  { dataset: "Facebook-30m", loadDynamics: 8.9, wgan: 7.5, autoformer: 8.1, daf: 8.02 },
  { dataset: "Alibaba-2018-5m", loadDynamics: 12.3, wgan: 10.5, autoformer: 11.2, daf: 10.81 },
  { dataset: "Alibaba-2018-10m", loadDynamics: 6.2, wgan: 5.1, autoformer: 5, daf: 4.57 },
  { dataset: "Alibaba-2018-30m", loadDynamics: 3.5, wgan: 2.9, autoformer: 3, daf: 2.6 },
  { dataset: "Google-5m", loadDynamics: 15.4, wgan: 13.2, autoformer: 14, daf: 11.45 },
  { dataset: "Google-10m", loadDynamics: 7.8, wgan: 6.5, autoformer: 7, daf: 7.21 },
  { dataset: "Google-30m", loadDynamics: 4.2, wgan: 3.4, autoformer: 3.6, daf: 3.5 },
  { dataset: "Wiki-5m", loadDynamics: 2.8, wgan: 2.1, autoformer: 2.5, daf: 2.23 },
  { dataset: "Wiki-10m", loadDynamics: 1.17, wgan: 1.34, autoformer: 1.2, daf: 1.15 },
  { dataset: "Wiki-30m", loadDynamics: 0.85, wgan: 0.92, autoformer: 0.95, daf: 1.05 },
  { dataset: "Azure-VM-2017-5m", loadDynamics: 9.6, wgan: 8.2, autoformer: 9, daf: 9.02 },
  { dataset: "Azure-VM-2019-5m", loadDynamics: 11.2, wgan: 9.8, autoformer: 10.5, daf: 8.95 },
  { dataset: "Azure-Func-2019-5m", loadDynamics: 6.5, wgan: 6.8, autoformer: 6.4, daf: 6.15 },
];

const resultAnalysis = [
  "The experimental results demonstrate that the Diffusion Autoformer achieves highly competitive and state-of-the-art forecasting performance across multiple workload datasets. Lower MAPE values indicate better forecasting accuracy.",
  "In most datasets, DAF either outperforms or closely matches baseline models such as LoadDynamics, WGAN-gp, and Autoformer. The Facebook 5-minute workload shows DAF at 40.53 MAPE, outperforming all listed baselines for that interval.",
  "For Alibaba-2018 datasets, DAF consistently achieves the lowest forecasting errors across all intervals, highlighting its strength in learning cloud workload dynamics. In Google and Azure datasets, DAF improves forecasting accuracy particularly in short-term workload prediction scenarios.",
  "The results indicate that DAF performs especially well on datasets with dynamic fluctuations and irregular patterns. Its diffusion-based mechanism improves robustness and uncertainty handling, enabling more stable predictions for cloud resource management and intelligent auto-scaling systems.",
];

const profileFacts = [
  {
    icon: ServerCog,
    label: "Current Role",
    value: "Assistant General Manager - ICT Solutions & Program Management, Tata Consulting Engineers Ltd.",
    accent: "text-teal-300",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "M.Tech in Cloud Computing, Indian Institute of Technology Patna",
    accent: "text-sky-300",
  },
  {
    icon: ShieldCheck,
    label: "Certifications",
    value: "AWS Certified Solutions Architect, ISO 27001 Lead Auditor, Data Virtualization Architect",
    accent: "text-amber-300",
  },
  {
    icon: Database,
    label: "Core Expertise",
    value: "Smart City ICT, AWS cloud, cyber security, DWDM/OTN, OFC networks",
    accent: "text-emerald-300",
  },
];

const futureScope = [
  "Multivariate forecasting across CPU, memory, network I/O, and job arrivals.",
  "Lightweight or distilled diffusion models for faster deployment.",
  "Reinforcement-learning controllers for closed-loop scaling.",
  "Production deployment in Kubernetes and serverless platforms.",
  "Anomaly-aware forecasting for rare workload spikes.",
  "Federated forecasting for edge and distributed systems.",
];

const sampleSeries = [18, 20, 24, 22, 29, 35, 33, 38, 46, 42, 51, 58, 54, 63, 70, 66, 76, 82];

const pageLinks = [
  { path: "/", label: "Home" },
  { path: "/about-thesis", label: "About Thesis" },
  { path: "/architecture", label: "Architecture" },
  { path: "/results", label: "Results" },
  { path: "/csv-lab", label: "CSV Lab" },
  { path: "/about-manoj", label: "About Manoj" },
  { path: "/future-scope", label: "Future Scope" },
];

const pageIntroCards = [
  {
    path: "/about-thesis",
    icon: Cloud,
    title: "About the Thesis",
    detail: "Research overview, forecasting goals, and core thesis highlights.",
  },
  {
    path: "/architecture",
    icon: Layers3,
    title: "DAF Architecture",
    detail: "A page-level view of the forecasting pipeline and model stages.",
  },
  {
    path: "/results",
    icon: LineChart,
    title: "Result Analysis",
    detail: "MAPE comparison, uncertainty coverage, and runtime indicators.",
  },
  {
    path: "/csv-lab",
    icon: Upload,
    title: "CSV Workload Lab",
    detail: "Upload workload traces and preview a browser-side forecast.",
  },
  {
    path: "/about-manoj",
    icon: GraduationCap,
    title: "About Manoj",
    detail: "Professional profile, experience, certifications, and research work.",
  },
  {
    path: "/future-scope",
    icon: Sparkles,
    title: "Future Scope",
    detail: "Next research directions for cloud workload forecasting.",
  },
];

function Section({ children, className = "" }) {
  return (
    <section className={`px-6 py-16 md:px-12 lg:px-24 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-black text-white">{title}</h2>
      {children ? <p className="mt-5 text-lg leading-8 text-slate-300">{children}</p> : null}
    </div>
  );
}

function useCurrentPath() {
  const getPath = () => window.location.pathname || "/";
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const handlePopState = () => setPath(getPath());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function navigate(nextPath) {
    if (nextPath === path) return;
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return [path, navigate];
}

function HeaderNav({ activePath, onNavigate }) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#071017]/90 px-6 py-4 backdrop-blur md:px-12 lg:px-24">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("/");
          }}
          className="text-left text-sm font-black uppercase tracking-[0.2em] text-teal-200"
        >
          Thesis Showcase
        </a>

        <div className="flex flex-wrap items-center gap-2">
          {pageLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(link.path);
              }}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                activePath === link.path ? "bg-teal-300 text-slate-950" : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-slate-400">
      Futuristic Thesis Showcase | IIT Patna
    </footer>
  );
}

function PageFrame({ children }) {
  return <main className="min-h-screen overflow-hidden bg-[#071017] text-white">{children}</main>;
}

function PageHero({ eyebrow, title, children }) {
  return (
    <Section className="bg-[#0a1416]">
      <div className="max-w-4xl py-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">{eyebrow}</p>
        <h1 className="mt-3 text-5xl font-black leading-tight text-white md:text-6xl">{title}</h1>
        {children ? <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{children}</p> : null}
      </div>
    </Section>
  );
}

function LinkCard({ icon: Icon, title, detail, path, onNavigate }) {
  return (
    <a
      href={path}
      onClick={(event) => {
        event.preventDefault();
        onNavigate(path);
      }}
      className="h-full rounded-lg border border-white/10 bg-white/[0.045] p-6 text-left shadow-2xl shadow-black/20 transition hover:border-teal-300/50 hover:bg-teal-300/10"
    >
      <Icon className="mb-5 h-8 w-8 text-teal-300" aria-hidden="true" />
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-200">
        Open page <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </a>
  );
}

function StatCard({ icon: Icon, title, detail }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20">
      <Icon className="mb-5 h-8 w-8 text-teal-300" aria-hidden="true" />
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p>
    </article>
  );
}

function ProfileFact({ icon: Icon, label, value, accent }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
      <Icon className={`mb-3 h-6 w-6 ${accent}`} aria-hidden="true" />
      <h3 className="font-bold text-white">{label}</h3>
      <p className="mt-1 break-words text-sm leading-6 text-slate-300">{value}</p>
    </article>
  );
}

function ArchitectureMap() {
  return (
    <div className="mt-10 grid gap-4 lg:grid-cols-5">
      {architectureStages.map((stage, index) => (
        <div key={stage.title} className="relative">
          <article className="h-full rounded-lg border border-white/10 bg-[#0d1a1d] p-5">
            <stage.icon className="mb-5 h-8 w-8 text-amber-300" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Stage {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 text-xl font-bold text-white">{stage.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{stage.detail}</p>
          </article>
          {index < architectureStages.length - 1 ? (
            <ArrowRight
              className="absolute -right-5 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-teal-300 lg:block"
              aria-hidden="true"
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}

function ResultsChart() {
  const max = 50;
  const chartWidth = 96 + resultRows.length * 92;
  const points = resultRows
    .map((row, index) => {
      const x = 48 + index * 92;
      const y = 220 - (row.daf / max) * 170;
      return `${x},${y}`;
    })
    .join(" ");
  const average = (key) => resultRows.reduce((sum, row) => sum + row[key], 0) / resultRows.length;
  const bestDaf = resultRows.reduce((best, row) => (row.daf < best.daf ? row : best), resultRows[0]);
  const dafWins = resultRows.filter((row) => row.daf <= Math.min(row.loadDynamics, row.wgan, row.autoformer)).length;
  const averageDaf = average("daf");

  return (
    <div className="mt-10 space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
          <p className="text-sm text-slate-400">Best reported MAPE</p>
          <p className="mt-2 text-3xl font-black text-teal-200">{bestDaf.daf.toFixed(2)}%</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">Diffusion Autoformer on {bestDaf.dataset} traces.</p>
        </article>
        <article className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
          <p className="text-sm text-slate-400">Average DAF MAPE</p>
          <p className="mt-2 text-3xl font-black text-sky-200">{averageDaf.toFixed(2)}%</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">Mean error across all 15 workload traces.</p>
        </article>
        <article className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
          <p className="text-sm text-slate-400">Best or tied results</p>
          <p className="mt-2 text-3xl font-black text-amber-200">{dafWins}/15</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">DAF has the lowest MAPE in most listed datasets.</p>
        </article>
        <article className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
          <p className="text-sm text-slate-400">Model comparison</p>
          <p className="mt-2 text-3xl font-black text-emerald-200">4 models</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">LoadDynamics, WGAN-gp, Autoformer, and DAF.</p>
        </article>
      </div>

      <div className="rounded-lg border border-white/10 bg-[#081316] p-4">
        <div className="overflow-x-auto">
          <svg
            viewBox={`0 0 ${chartWidth} 290`}
            role="img"
            aria-label="MAPE comparison across workload datasets"
            className="h-auto min-w-[980px]"
            style={{ width: `${chartWidth}px` }}
          >
            <defs>
              <linearGradient id="resultLine" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#2dd4bf" />
                <stop offset="55%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
            {[0, 1, 2, 3, 4].map((tick) => (
              <line
                key={tick}
                x1="36"
                x2={chartWidth - 34}
                y1={50 + tick * 42}
                y2={50 + tick * 42}
                stroke="rgba(148,163,184,0.15)"
              />
            ))}
            {resultRows.map((row, index) => {
              const x = 48 + index * 92;
              const baseY = 220;
              const values = [
                { name: "LoadDynamics", value: row.loadDynamics, color: "#64748b", offset: 0 },
                { name: "WGAN-gp", value: row.wgan, color: "#94a3b8", offset: 14 },
                { name: "Autoformer", value: row.autoformer, color: "#38bdf8", offset: 28 },
                { name: "DAF", value: row.daf, color: "#2dd4bf", offset: 42 },
              ];
              return (
                <g key={row.dataset}>
                  {values.map((item) => (
                    <rect
                      key={item.name}
                      x={x + item.offset}
                      y={baseY - (item.value / max) * 170}
                      width="10"
                      height={(item.value / max) * 170}
                      rx="4"
                      fill={item.color}
                      opacity={item.name === "DAF" ? "1" : "0.58"}
                    />
                  ))}
                  <text
                    x={x + 24}
                    y="250"
                    textAnchor="end"
                    fill="#94a3b8"
                    fontSize="10"
                    transform={`rotate(-35 ${x + 24} 250)`}
                  >
                    {row.dataset}
                  </text>
                </g>
              );
            })}
            <polyline points={points} fill="none" stroke="url(#resultLine)" strokeWidth="4" strokeLinecap="round" />
            <text x="38" y="24" fill="#e2e8f0" fontSize="16" fontWeight="700">
              Table 2: MAPE comparison with different workload datasets
            </text>
          </svg>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead className="bg-white/10 text-slate-200">
                <tr>
                  {["Dataset", "LoadDynamics", "WGAN-gp", "Autoformer", "DAF"].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-bold">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {resultRows.map((row) => {
                  const best = Math.min(row.loadDynamics, row.wgan, row.autoformer, row.daf);
                  return (
                    <tr key={row.dataset} className="border-t border-white/10">
                      <td className="px-4 py-3 font-semibold text-white">{row.dataset}</td>
                      {[
                        ["loadDynamics", row.loadDynamics],
                        ["wgan", row.wgan],
                        ["autoformer", row.autoformer],
                        ["daf", row.daf],
                      ].map(([key, value]) => (
                        <td
                          key={key}
                          className={`px-4 py-3 ${
                            value === best ? "font-black text-teal-200" : "text-slate-300"
                          }`}
                        >
                          {Number(value).toFixed(2)}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-[#0d1a1d] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Table 2 Analysis</p>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
            {resultAnalysis.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function parseCsv(text) {
  const rows = [];
  let current = "";
  let row = [];
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && quoted && next === '"') {
      current += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(current.trim());
      current = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(current.trim());
      if (row.some(Boolean)) rows.push(row);
      row = [];
      current = "";
    } else {
      current += char;
    }
  }

  row.push(current.trim());
  if (row.some(Boolean)) rows.push(row);
  return rows;
}

function getWorkloadSeries(rows) {
  if (rows.length === 0) return [];

  const header = rows[0].map((cell) => cell.toLowerCase());
  const preferredIndex = header.findIndex((cell) =>
    ["workload", "job", "jobs", "arrival", "arrivals", "jar", "count", "value", "load"].some((name) =>
      cell.includes(name),
    ),
  );
  const dataRows = rows.slice(1);
  const columnCount = Math.max(...rows.map((row) => row.length));
  const candidates = [];

  for (let col = 0; col < columnCount; col += 1) {
    const values = dataRows
      .map((row) => Number(String(row[col] ?? "").replace(/,/g, "")))
      .filter((value) => Number.isFinite(value));
    if (values.length >= 4) {
      candidates.push({ col, values, score: values.length + (col === preferredIndex ? 1000 : 0) });
    }
  }

  candidates.sort((a, b) => b.score - a.score);
  return candidates[0]?.values ?? [];
}

function buildForecast(series) {
  if (series.length < 4) return [];
  const recent = series.slice(-24);
  const windowSize = Math.min(6, recent.length);
  const baseline = recent.slice(-windowSize).reduce((sum, value) => sum + value, 0) / windowSize;
  const trend = (recent[recent.length - 1] - recent[0]) / Math.max(recent.length - 1, 1);

  return Array.from({ length: 12 }, (_, index) => {
    const seasonal = recent[index % recent.length] - baseline;
    return Math.max(0, baseline + trend * (index + 1) + seasonal * 0.35);
  });
}

function ChartLine({ series, forecast = [] }) {
  const combined = [...series.slice(-36), ...forecast];
  const max = Math.max(...combined, 1);
  const min = Math.min(...combined, 0);
  const span = Math.max(max - min, 1);
  const width = 620;
  const height = 220;
  const history = series.slice(-36);

  const toPoint = (value, index, total) => {
    const x = 28 + (index / Math.max(total - 1, 1)) * (width - 56);
    const y = height - 28 - ((value - min) / span) * (height - 58);
    return `${x},${y}`;
  };

  const historyPoints = history.map((value, index) => toPoint(value, index, combined.length)).join(" ");
  const forecastPoints = forecast
    .map((value, index) => toPoint(value, history.length + index, combined.length))
    .join(" ");

  return (
    <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label="CSV workload forecast preview" className="w-full">
      {[0, 1, 2, 3].map((tick) => (
        <line key={tick} x1="28" x2="592" y1={36 + tick * 42} y2={36 + tick * 42} stroke="rgba(148,163,184,0.15)" />
      ))}
      <polyline points={historyPoints} fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
      {forecast.length ? (
        <polyline points={forecastPoints} fill="none" stroke="#f59e0b" strokeWidth="4" strokeDasharray="8 8" />
      ) : null}
      <text x="30" y="24" fill="#cbd5e1" fontSize="13">
        Uploaded workload
      </text>
      <text x="482" y="24" fill="#fbbf24" fontSize="13">
        12-step forecast
      </text>
    </svg>
  );
}

function CsvTester() {
  const [series, setSeries] = useState(sampleSeries);
  const [fileName, setFileName] = useState("Sample workload");
  const [error, setError] = useState("");

  const forecast = useMemo(() => buildForecast(series), [series]);
  const stats = useMemo(() => {
    const last = series[series.length - 1] ?? 0;
    const peak = Math.max(...series, 0);
    const average = series.reduce((sum, value) => sum + value, 0) / Math.max(series.length, 1);
    const nextPeak = Math.max(...forecast, 0);
    return { last, peak, average, nextPeak };
  }, [forecast, series]);

  function handleFile(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const rows = parseCsv(String(reader.result ?? ""));
      const nextSeries = getWorkloadSeries(rows);

      if (nextSeries.length < 4) {
        setError("CSV needs at least one numeric workload column with four or more values.");
        return;
      }

      setSeries(nextSeries);
      setFileName(file.name);
      setError("");
    };
    reader.readAsText(file);
  }

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div>
        <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-teal-300/50 bg-teal-300/10 px-6 py-10 text-center transition hover:border-amber-300 hover:bg-amber-300/10">
          <Upload className="h-10 w-10 text-teal-200" aria-hidden="true" />
          <span className="mt-4 text-lg font-bold text-white">Upload workload CSV</span>
          <span className="mt-2 text-sm leading-6 text-slate-300">
            The tester reads a numeric workload, arrival, count, value, job, or JAR column.
          </span>
          <input type="file" accept=".csv,text/csv" onChange={handleFile} className="sr-only" />
        </label>
        {error ? <p className="mt-4 rounded-lg bg-rose-400/10 px-4 py-3 text-sm text-rose-200">{error}</p> : null}
      </div>

      <div className="rounded-lg border border-white/10 bg-[#081316] p-4">
        <div className="flex flex-wrap items-center justify-between gap-3 px-1 pb-4">
          <div>
            <p className="text-sm text-slate-400">CSV workload test</p>
            <h3 className="mt-1 text-xl font-bold text-white">{fileName}</h3>
          </div>
          <p className="rounded-lg bg-white/10 px-3 py-2 text-sm text-slate-200">{series.length} points</p>
        </div>
        <ChartLine series={series} forecast={forecast} />
        <div className="mt-4 grid gap-3 sm:grid-cols-4">
          {[
            ["Latest", stats.last],
            ["Average", stats.average],
            ["Peak", stats.peak],
            ["Next peak", stats.nextPeak],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg bg-white/[0.055] p-3">
              <p className="text-xs text-slate-400">{label}</p>
              <p className="mt-1 text-lg font-bold text-white">{Number(value).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HomePage({ onNavigate }) {
  return (
    <>
      <section className="relative min-h-[84vh] px-6 py-16 md:px-12 lg:px-24">
        <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(7,16,23,0.98),rgba(14,34,41,0.92)_48%,rgba(13,18,32,0.96))]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#071017] to-transparent" />

        <div className="relative mx-auto flex min-h-[68vh] max-w-7xl items-center">
          <div className="max-w-5xl animate-hero">
            <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-sm text-teal-100">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              IIT Patna | M.Tech Cloud Computing Thesis
            </div>

            <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
              Predicting Cloud Workload Job Arrival Rates Using a{" "}
              <span className="block text-teal-200">Diffusion Autoformer Model</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              A research showcase for probabilistic cloud workload forecasting that combines decomposition, Autoformer
              attention, diffusion denoising, and uncertainty-aware auto-scaling.
            </p>

            <a
              href="/about-thesis"
              onClick={(event) => {
                event.preventDefault();
                onNavigate("/about-thesis");
              }}
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-teal-300 px-5 py-3 font-bold text-slate-950 transition hover:bg-amber-300"
            >
              Explore thesis <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeader eyebrow="Website Pages" title="Explore Each Section">
          The original sections now open as separate pages with their own browser locations.
        </SectionHeader>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pageIntroCards.map((item) => (
            <LinkCard key={item.path} {...item} onNavigate={onNavigate} />
          ))}
        </div>
      </Section>
    </>
  );
}

function AboutThesisPage() {
  return (
    <>
      <PageHero eyebrow="Thesis Overview" title="About the Thesis">
        A focused page for the research problem, model objective, and cloud forecasting highlights.
      </PageHero>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeader eyebrow="Research Focus" title="Probabilistic Cloud Workload Forecasting">
              The Diffusion Autoformer estimates the future distribution of job arrival rates rather than only a single
              deterministic value.
            </SectionHeader>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              It uses historical workload data and exogenous temporal features to produce point forecasts and prediction
              intervals for proactive cloud resource provisioning. The model is designed for workload traces where sudden
              traffic changes, repeating temporal patterns, and resource-planning uncertainty must be handled together.
            </p>
          </div>

          <div className="grid gap-4 rounded-lg border border-white/10 bg-[#081316] p-5 shadow-2xl shadow-black/20 sm:grid-cols-3">
            {[
              ["Goal", "Predict job arrivals"],
              ["Model", "Diffusion Autoformer"],
              ["Use", "Cloud auto-scaling"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg bg-white/[0.055] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
                <p className="mt-3 text-xl font-black leading-tight text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {thesisHighlights.map((item) => (
            <StatCard key={item.title} {...item} />
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <article className="rounded-lg border border-teal-300/20 bg-teal-300/10 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">Why It Matters</p>
            <h3 className="mt-3 text-2xl font-black text-white">Forecasts become provisioning decisions.</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Accurate job-arrival prediction helps cloud systems prepare resources before demand spikes, reducing both
              under-provisioning risk and unnecessary over-allocation.
            </p>
          </article>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["01", "Decompose workload trends and seasonal structure."],
              ["02", "Learn long-range dependencies with Autoformer attention."],
              ["03", "Use diffusion denoising to support robust forecasting."],
            ].map(([step, detail]) => (
              <article key={step} className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
                <p className="text-sm font-black text-amber-300">{step}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

function ArchitecturePage() {
  return (
    <>
      <PageHero eyebrow="DAF Architecture" title="Forecasting Pipeline">
        The thesis architecture combines series decomposition, Autoformer representation learning, contextual
        conditioning, and diffusion-based denoising to generate stable workload predictions with uncertainty bounds.
      </PageHero>
      <Section className="bg-[#0a1416]">
        <ArchitectureMap />
      </Section>
    </>
  );
}

function ResultsPage() {
  return (
    <>
      <PageHero eyebrow="Result Analysis" title="Futuristic Workload Graph">
        Reported thesis results show lower MAPE for the proposed model across multiple real-world workload traces,
        including Google Cluster, Azure VM, Alibaba, Facebook, and Wikipedia.
      </PageHero>
      <Section>
        <ResultsChart />
      </Section>
    </>
  );
}

function CsvLabPage() {
  return (
    <>
      <PageHero eyebrow="CSV Workload Lab" title="Test a Workload Trace">
        Upload a CSV trace to preview workload shape, summary statistics, and a lightweight browser-side forecast for
        the next 12 steps.
      </PageHero>
      <Section className="bg-[#0a1416]">
        <CsvTester />
      </Section>
    </>
  );
}

function AboutManojPage() {
  return (
    <>
      <PageHero eyebrow="Researcher" title="About Manoj Kumar Chauhan">
        ICT consultant, technical program manager, telecom infrastructure specialist, and cloud computing researcher.
      </PageHero>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-start">
          <div className="mx-auto w-full max-w-xs overflow-hidden rounded-lg border border-teal-300/20 bg-slate-900 shadow-2xl shadow-black/25 lg:mx-0">
            <img src="/manoj.jpg" alt="Manoj Kumar Chauhan" className="aspect-[3/4] h-full w-full object-cover" />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Researcher</p>
            <h2 className="mt-3 text-4xl font-black text-white">About Manoj Kumar Chauhan</h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-300">
              <p>
                Manoj Kumar Chauhan is an accomplished ICT Consultant, Technical Program Manager, and telecom
                infrastructure specialist with over two decades of experience in digital infrastructure, cloud
                computing, Smart City solutions, and optical network engineering.
              </p>

              <p>
                Currently associated with Tata Consulting Engineers Ltd. as Assistant General Manager - ICT Solutions
                & Program Management, he leads strategic initiatives involving Smart City ICT ecosystems, integrated
                command and control centers, AWS cloud infrastructure, OFC networks, and enterprise cyber security
                architectures.
              </p>

              <p>
                Before joining TCE, Manoj worked with Bharti Airtel and VIAVI Solutions, contributing to long-haul
                fiber networks, LTE deployments, optical transport systems, quality assurance programs, and telecom
                modernization projects while collaborating with global technology vendors including Ericsson, Huawei,
                Nokia Siemens Networks, ZTE, and Tellabs.
              </p>

              <p>
                He holds an M.Tech in Cloud Computing from Indian Institute of Technology Patna and has published IEEE
                research papers focused on AI-driven cloud workload prediction, adaptive resource scaling, and
                intelligent cloud optimization frameworks.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {profileFacts.map((fact) => (
                <ProfileFact key={fact.label} {...fact} />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function FutureScopePage() {
  return (
    <>
      <PageHero eyebrow="Future Scope" title="Next Research Directions">
        Research extensions that can strengthen real-world cloud forecasting and autonomous resource management.
      </PageHero>
      <Section className="bg-[#0a1416]">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader eyebrow="Future Scope" title="Next Research Directions" />
          <div className="grid gap-4 sm:grid-cols-2">
            {futureScope.map((item) => (
              <article key={item} className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
                <LineChart className="mb-4 h-6 w-6 text-teal-300" aria-hidden="true" />
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

function NotFoundPage({ onNavigate }) {
  return (
    <Section>
      <div className="max-w-3xl py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Page Not Found</p>
        <h1 className="mt-3 text-5xl font-black text-white">This section does not exist yet.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Use the navigation to open one of the available thesis showcase pages.
        </p>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("/");
          }}
          className="mt-8 inline-flex items-center gap-3 rounded-lg bg-teal-300 px-5 py-3 font-bold text-slate-950 transition hover:bg-amber-300"
        >
          Back home <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </Section>
  );
}

export default function ThesisWebsite() {
  const [path, navigate] = useCurrentPath();

  const pages = {
    "/": <HomePage onNavigate={navigate} />,
    "/about-thesis": <AboutThesisPage />,
    "/architecture": <ArchitecturePage />,
    "/results": <ResultsPage />,
    "/csv-lab": <CsvLabPage />,
    "/about-manoj": <AboutManojPage />,
    "/future-scope": <FutureScopePage />,
  };

  return (
    <PageFrame>
      <HeaderNav activePath={path} onNavigate={navigate} />
      {pages[path] ?? <NotFoundPage onNavigate={navigate} />}
      <Footer />
    </PageFrame>
  );
}
