import {
  Activity,
  Cloud,
  Cpu,
  Database,
  Gauge,
  GraduationCap,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const thesisHighlights = [
  { icon: Cloud, title: "Cloud Forecasting", detail: "Arrival-rate prediction for real workloads." },
  { icon: Cpu, title: "Diffusion Autoformer", detail: "Decomposition with probabilistic sequence modeling." },
  { icon: Activity, title: "Trend Learning", detail: "Seasonality-aware temporal representation." },
  { icon: ShieldCheck, title: "Risk-Aware Scaling", detail: "Forecast uncertainty for smarter capacity decisions." },
];

const profileFacts = [
  {
    icon: GraduationCap,
    label: "IIT Patna",
    value: "M.Tech Cloud Computing",
    accent: "text-teal-300",
  },
  {
    icon: Mail,
    label: "Academic Contact",
    value: "manoj_24a07res105@iitp.ac.in",
    accent: "text-sky-300",
  },
  {
    icon: Database,
    label: "Datasets",
    value: "Google, Azure, Alibaba",
    accent: "text-amber-300",
  },
  {
    icon: Gauge,
    label: "Goal",
    value: "Real-time uncertainty-aware forecasting",
    accent: "text-emerald-300",
  },
];

function Section({ children, className = "" }) {
  return (
    <section className={`px-6 py-16 md:px-12 lg:px-24 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
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

export default function ThesisWebsite() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071017] text-white">
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
              A research showcase for a probabilistic cloud workload forecasting system that improves auto-scaling,
              reduces resource waste, and models uncertainty for real-world cloud infrastructure.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Thesis Overview</p>
            <h2 className="mt-3 text-4xl font-black text-white">About the Thesis</h2>
          </div>
          <p className="text-lg leading-8 text-slate-300">
            This thesis introduces the Diffusion Autoformer (DAF), a hybrid deep learning architecture that combines
            Transformer-based decomposition with diffusion probabilistic modelling for cloud workload forecasting. The
            system predicts Job Arrival Rates (JAR) with uncertainty awareness, enabling intelligent cloud auto-scaling.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {thesisHighlights.map((item) => (
            <StatCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <Section className="bg-[#0a1416]">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="overflow-hidden rounded-lg border border-teal-300/20 bg-slate-900">
            <img src="/manoj.jpg" alt="Manoj Kumar Chauhan" className="aspect-[4/5] h-full w-full object-cover" />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Researcher</p>
            <h2 className="mt-3 text-4xl font-black text-white">About Manoj Kumar Chauhan</h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Manoj Kumar Chauhan is an M.Tech Cloud Computing student at IIT Patna. His research focuses on
              intelligent cloud resource management using AI-driven forecasting systems.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {profileFacts.map((fact) => (
                <ProfileFact key={fact.label} {...fact} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-slate-400">
        Futuristic Thesis Showcase | IIT Patna
      </footer>
    </main>
  );
}
