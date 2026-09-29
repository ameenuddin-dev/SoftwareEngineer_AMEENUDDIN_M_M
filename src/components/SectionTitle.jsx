export default function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl reveal">
      <p className="font-mono text-[11px] uppercase tracking-[.2em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}
