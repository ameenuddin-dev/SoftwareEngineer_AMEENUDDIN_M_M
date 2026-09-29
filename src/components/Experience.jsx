import { BriefcaseBusiness } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { experience } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionTitle
        eyebrow="01 / Experience"
        title="Engineering experience"
        text="Hands-on delivery across full-stack development, backend systems, cloud deployments and performance engineering."
      />
      <div className="mt-14 space-y-5">
        {experience.map((e, i) => (
          <article
            key={e.company}
            className="experience-card glass reveal rounded-2xl p-6 sm:p-8"
            style={{ "--delay": `${i * 90}ms` }}
          >
            <div className="grid gap-5 md:grid-cols-[.8fr_1.6fr_auto] md:items-start">
              <div>
                <div className="mb-3 inline-flex rounded-lg border border-white/5 bg-white/3 p-2 text-cyan-300">
                  <BriefcaseBusiness className="h-4 w-4" />
                </div>
                <p className="text-lg font-semibold text-white">{e.company}</p>
                <p className="mt-1 text-sm text-cyan-300">{e.role}</p>
              </div>
              <ul className="space-y-3 text-sm leading-6 text-slate-400">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    {p}
                  </li>
                ))}
              </ul>
              <p className="font-mono text-[11px] text-slate-500 md:text-right">
                {e.date}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
