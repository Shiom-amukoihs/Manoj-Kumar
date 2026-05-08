import React from "react";
import { motion } from "framer-motion";
import { Cloud, Cpu, ShieldCheck, Activity, Database, Gauge, Mail, GraduationCap, Sparkles } from "lucide-react";

export default function ThesisWebsite() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative px-6 py-20 md:px-12 lg:px-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.25),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.22),transparent_30%),linear-gradient(135deg,#020617,#0f172a_55%,#111827)]" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              <Sparkles className="h-4 w-4" />
              IIT Patna • M.Tech Cloud Computing Thesis
            </div>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Predicting Cloud Workload Job Arrival Rates Using a
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Diffusion Autoformer Model
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              A futuristic research showcase for a probabilistic cloud workload forecasting system that improves auto-scaling,
              reduces resource waste, and models uncertainty for real-world cloud infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">About the Thesis</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            This thesis introduces the Diffusion Autoformer (DAF), a hybrid deep learning architecture that combines
            Transformer-based decomposition with diffusion probabilistic modelling for cloud workload forecasting.
            The system predicts Job Arrival Rates (JAR) with uncertainty awareness, enabling intelligent cloud auto-scaling.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Cloud, title: "Cloud Forecasting" },
              { icon: Cpu, title: "Diffusion Autoformer" },
              { icon: Activity, title: "Trend & Seasonal Learning" },
              { icon: ShieldCheck, title: "Risk-Aware Scaling" },
            ].map((item, index) => (
              <div key={index} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <item.icon className="mb-4 h-8 w-8 text-cyan-300" />
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-cyan-300/20">
            <img
              src="/manoj.jpg"
              alt="Manoj Kumar Chauhan"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-black">About Manoj Kumar Chauhan</h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Manoj Kumar Chauhan is an M.Tech Cloud Computing student at IIT Patna.
              His research focuses on intelligent cloud resource management using AI-driven forecasting systems.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <GraduationCap className="mb-3 h-6 w-6 text-violet-300" />
                <b>IIT Patna</b>
                <p className="text-sm text-slate-400">M.Tech Cloud Computing</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <Mail className="mb-3 h-6 w-6 text-cyan-300" />
                <b>Academic Contact</b>
                <p className="text-sm text-slate-400">manoj_24a07res105@iitp.ac.in</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <Database className="mb-3 h-6 w-6 text-blue-300" />
                <b>Datasets</b>
                <p className="text-sm text-slate-400">Google, Azure, Alibaba</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <Gauge className="mb-3 h-6 w-6 text-emerald-300" />
                <b>Goal</b>
                <p className="text-sm text-slate-400">Real-time uncertainty-aware forecasting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-slate-400">
        Futuristic Thesis Showcase • IIT Patna
      </footer>
    </main>
  );
}
