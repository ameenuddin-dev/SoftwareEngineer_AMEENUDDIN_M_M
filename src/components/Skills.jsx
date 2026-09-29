import SectionTitle from "./SectionTitle";
import { skills } from "../data/resume";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionTitle
        eyebrow="03 / Technical stack"
        title="Tools I work with"
        text="A practical stack across application development, infrastructure, data and engineering fundamentals."
      />
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="skill-card glass reveal rounded-2xl p-6"
              style={{ "--delay": `${i * 70}ms` }}
            >
              <Icon className="h-5 w-5 text-cyan-300" />
              <h3 className="mt-5 text-sm font-semibold text-white">
                {s.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((x) => (
                  <span
                    key={x}
                    className="skill-pill rounded-lg bg-white/[.035] px-2.5 py-1.5 text-xs text-slate-400"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
