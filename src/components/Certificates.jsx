import { useState } from "react";
import { Award, ExternalLink, X, Maximize2 } from "lucide-react";
import { certificates } from "../data/resume";
import SectionTitle from "./SectionTitle";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <>
      {/* Certificates Section */}
      <section
        id="certificates"
        className="mx-auto max-w-7xl px-5 py-24 lg:px-8"
      >
        <SectionTitle
          eyebrow="03 / Certifications & Training"
          title="Learning & Professional Growth"
          text="Certifications, technical training and hands-on learning that have strengthened my software development skills."
        />

        {/* Certificate Cards */}
        <div className="mt-10 space-y-5">
          {certificates.map((certificate) => (
            <div
              key={`${certificate.company}-${certificate.title}`}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-cyan-300/30 hover:bg-white/[0.05] sm:p-8"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                {/* Certificate Information */}
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                    <Award className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-cyan-300">
                      {certificate.company}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {certificate.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {certificate.date}
                    </p>

                    <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-400">
                      {certificate.description}
                    </p>

                    {/* Tech Stack */}
                    {certificate.stack && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {certificate.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Preview Button */}
                <button
                  type="button"
                  onClick={() => setSelectedCertificate(certificate)}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  Preview Certificate
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>

      {/* PDF Preview Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  {selectedCertificate.title}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {selectedCertificate.company}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {/* Open PDF */}
                <a
                  href={selectedCertificate.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  Open PDF
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                {/* Close */}
                <button
                  type="button"
                  onClick={() => setSelectedCertificate(null)}
                  aria-label="Close certificate preview"
                  className="rounded-lg border border-white/10 p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* PDF Preview */}
            <div className="min-h-0 flex-1 bg-slate-900">
              <iframe
                src={`${selectedCertificate.certificate}#toolbar=1&navpanes=0`}
                title={`${selectedCertificate.title} certificate`}
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
