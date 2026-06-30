"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/metodologia", label: "Metodología" },
  { href: "/programas", label: "Programas" },
  { href: "/protocolos", label: "Protocolos" },
  { href: "/escuela-de-guias", label: "Escuela de Guías" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <Link
          href="/"
          className="font-display text-xl tracking-widest text-bone uppercase"
        >
          Cúspide
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.18em] text-bone/80 transition hover:text-bone"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Hamburger — solo mobile */}
          <button
            className="flex flex-col justify-center gap-1.25 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            <span
              className={`block h-px w-6 bg-bone transition-transform duration-300 ${open ? "translate-y-1.75 rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-bone transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-bone transition-transform duration-300 ${open ? "-translate-y-1.75 -rotate-45" : ""}`}
            />
          </button>

          {/* CTA — solo desktop */}
          <Link
            href="/postulacion"
            className="hidden border border-glacier px-5 py-2 text-xs uppercase tracking-[0.18em] text-glacier transition hover:bg-glacier hover:text-ink md:inline-flex"
          >
            Postulate
          </Link>
        </div>
      </div>

      {/* Menú mobile */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${open ? "max-h-screen" : "max-h-0"}`}
      >
        <nav className="flex flex-col border-t border-bone/10 bg-ink/95 px-6 pb-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-bone/10 py-4 text-xs uppercase tracking-[0.18em] text-bone/80 transition hover:text-bone"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/postulacion"
            onClick={() => setOpen(false)}
            className="mt-6 border border-glacier px-5 py-3 text-center text-xs uppercase tracking-[0.18em] text-glacier transition hover:bg-glacier hover:text-ink"
          >
            Postulate
          </Link>
        </nav>
      </div>
    </header>
  );
}
