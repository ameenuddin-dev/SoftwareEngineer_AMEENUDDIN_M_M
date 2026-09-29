import { Mail, Phone } from "lucide-react";
import { resume } from "../data/resume";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-5 pb-28 pt-16 lg:px-8"
    >
      <div className="contact-panel relative overflow-hidden rounded-4xl border border-cyan-300/15 bg-linear-to-br from-cyan-300/8 to-violet-400/6 p-8 sm:p-12 reveal">
        <div className="contact-orb absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-[.2em] text-cyan-300">
            04 / Contact
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Let's build something reliable.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-400">
            Open to software engineering opportunities involving Java, Spring
            Boot, full-stack development, microservices and cloud engineering.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${resume.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950"
            >
              <Mail className="mr-2 inline h-4 w-4" />
              {resume.email}
            </a>
            <a
              href={`tel:${resume.phone.replaceAll(" ", "")}`}
              className="magnetic rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
            >
              <Phone className="mr-2 inline h-4 w-4" /> {resume.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
