import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav, resume } from "../data/resume";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#070a12]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="font-mono text-sm font-bold tracking-tight">
            <span className="text-cyan-300">AMEENUDDIN</span>
            <span className="text-white/50"> </span>
            <span className="text-cyan-300">M M</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                className="nav-link text-xs font-medium text-slate-400"
              >
                {n}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => setShowContact(true)}
              className="magnetic rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-semibold text-cyan-200 hover:bg-cyan-300/10"
            >
              Let's talk
              <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" />
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="text-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <div
          className={`mobile-menu border-t border-white/5 bg-[#070a12] px-5 py-4 md:hidden ${
            open ? "open" : ""
          }`}
        >
          {nav.map((n) => (
            <a
              onClick={() => setOpen(false)}
              key={n}
              href={`#${n.toLowerCase()}`}
              className="block py-3 text-sm text-slate-300"
            >
              {n}
            </a>
          ))}
        </div>
      </header>

      {/* Contact Modal OUTSIDE header */}
      <ContactModal open={showContact} onClose={() => setShowContact(false)} />
    </>
  );
}
