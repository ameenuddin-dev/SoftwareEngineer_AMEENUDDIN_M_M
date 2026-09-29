import { Sparkles } from "lucide-react";
import Metric from "./Metric";
import { metrics } from "../data/resume";

export default function Impact() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="glass impact-panel reveal overflow-hidden rounded-4xl p-8 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.2em] text-cyan-300">
              <Sparkles className="h-4 w-4" /> Certifications & impact
            </div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Cloud-native delivery with a focus on measurable reliability.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-400">
              AWS Certified Cloud Practitioner · Java Full Stack Development ·
              SQL Certification. Resume highlights include 5+ AWS deployments
              and a reported 20%+ backend latency reduction through query
              optimization and caching.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {metrics.map((m) => (
              <Metric key={m.label} {...m} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
