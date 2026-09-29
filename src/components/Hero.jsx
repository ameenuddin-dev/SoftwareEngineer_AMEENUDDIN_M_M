import {
  ArrowUpRight,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { resume } from "../data/resume";

const profile = [
  ["Primary stack", "Java / Spring Boot"],
  ["Architecture", "Microservices / REST"],
  ["Frontend", "React / Next.js"],
  ["Cloud", "AWS / Docker"],
  ["Data", "SQL / NoSQL"],
];

export default function Hero() {
  return (
    <section
      id="about"
      className="mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 lg:px-8"
    >
      <div className="grid w-full gap-14 lg:grid-cols-[1.25fr_.75fr] lg:items-center">
        <div className="hero-copy">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[.18em] text-cyan-200">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />{" "}
            Available for software engineering roles
          </div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[.25em] text-slate-500">
            Java • Cloud • Distributed Systems
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[.98] tracking-tighter text-white sm:text-7xl lg:text-8xl">
            Building <span className="gradient-text">reliable</span>
            <br />
            software systems.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Software Engineer focused on Java, Spring Boot, microservices, REST
            APIs, React and AWS — with an engineering mindset around
            performance, reliability and clean product delivery.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="magnetic rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950"
            >
              Explore work <ArrowUpRight className="ml-1 inline h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="magnetic inline-flex items-center rounded-full border border-cyan-300/15 bg-cyan-300/5 px-5 py-3 text-sm font-semibold text-cyan-200 hover:bg-cyan-300/10"
            >
              Contact
              <Mail className="ml-1 h-4 w-4" />
            </a>
            <a
              href={resume.resumePath}
              download
              className="magnetic rounded-full border border-cyan-300/15 bg-cyan-300/5 px-5 py-3 text-sm font-semibold text-cyan-200 hover:bg-cyan-300/10"
            >
              <Download className="mr-1 inline h-4 w-4" /> Resume
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-5 text-xs text-slate-500">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {resume.location}
            </span>
            <span className="h-1 w-1 rounded-full bg-slate-700" />
            <a
              className="flex items-center gap-2 hover:text-cyan-300"
              href={resume.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              className="flex items-center gap-2 hover:text-cyan-300"
              href={resume.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
        <div className="hero-card-wrap relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="glass glow floating-card rounded-4xl p-5 sm:p-7">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[.2em] text-slate-500">
                  Engineer profile
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  {resume.name}
                </p>
              </div>
              <div className="icon-orbit rounded-xl border border-cyan-300/15 bg-cyan-300/5 p-2.5 text-cyan-300">
                <Code2 className="h-5 w-5" />
              </div>
            </div>
            <div className="space-y-5">
              {profile.map(([a, b]) => (
                <div key={a}>
                  <div className="mb-1.5 flex justify-between text-xs">
                    <span className="text-slate-500">{a}</span>
                    <span className="font-medium text-slate-200">{b}</span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-white/5">
                    <div className="skill-bar h-full w-[82%] rounded-full bg-linear-to-r from-cyan-300 to-violet-400" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="stat-card rounded-xl border border-white/5 bg-white/2.5 p-4">
                <p className="text-2xl font-semibold text-white">99.5%</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
                  availability
                </p>
              </div>
              <div className="stat-card rounded-xl border border-white/5 bg-white/2.5 p-4">
                <p className="text-2xl font-semibold text-white">20%+</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
                  latency reduction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
