import { resume } from "../data/resume";
export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <span>© 2026 {resume.name}</span>
        <span>{resume.role} · Java · Cloud · Full Stack</span>
      </div>
    </footer>
  );
}
