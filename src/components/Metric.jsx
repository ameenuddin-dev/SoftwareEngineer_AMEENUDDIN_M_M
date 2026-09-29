export default function Metric({ value, label }) {
  return (
    <div className="metric-card rounded-xl border border-white/5 bg-black/10 p-4">
      <p className="text-2xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
        {label}
      </p>
    </div>
  );
}
