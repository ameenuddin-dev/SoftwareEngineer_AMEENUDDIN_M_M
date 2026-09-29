import React, { useState } from "react";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/resume";

export default function Projects() {
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionTitle
        eyebrow="02 / Selected work"
        title="Systems built to ship"
        text="A selection of product and platform work spanning commerce, CRM integration, messaging and logistics."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.name}
            className="project-card group glass reveal rounded-2xl p-6 sm:p-8"
            style={{ "--delay": `${i * 70}ms` }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[.2em] text-cyan-300/70">
                  0{i + 1}
                </span>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  {p.name}
                </h3>

                <p className="mt-1 text-xs text-slate-500">{p.type}</p>
              </div>

              {/* External Link */}
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${p.name}`}
                className="rounded-full border border-white/10 p-2.5 text-slate-400 transition hover:border-cyan-300/40 hover:text-cyan-300"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-6 text-sm leading-6 text-slate-400">{p.text}</p>

            <div
              className="mt-6 cursor-pointer overflow-hidden rounded-xl border border-white/10"
              onClick={() => setPreviewImage(p)}
            >
              <img
                src={p.image}
                alt={`${p.name} preview`}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/7 bg-white/2.5 px-2.5 py-1 text-[10px] text-slate-400"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* View Project */}
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center text-xs font-semibold text-cyan-300 opacity-0 transition group-hover:opacity-100"
            >
              View project
              <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
            </a>
          </article>
        ))}
      </div>
      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-5 backdrop-blur-md"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/60 p-2 text-white hover:bg-black"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image */}
            <img
              src={previewImage.image}
              alt={previewImage.name}
              className="max-h-[70vh] w-full object-contain"
            />

            {/* Bottom section */}
            <div className="flex items-center justify-between gap-4 border-t border-white/10 p-5">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {previewImage.name}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {previewImage.type}
                </p>
              </div>

              <a
                href={previewImage.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Go to Website
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
