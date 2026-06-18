import Link from "next/link";

const links = [
  { href: "/metodologia", label: "Metodología" },
  { href: "/programas", label: "Programas" },
  { href: "/protocolos", label: "Protocolos" },
  { href: "/escuela-de-guias", label: "Escuela de Guías" },
];

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <Link
          href="/"
          className="font-display text-xl tracking-widest text-bone uppercase"
        >
          Cúspide
        </Link>
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
        <Link
          href="/postulacion"
          className="border border-bone/60 px-5 py-2 text-xs uppercase tracking-[0.18em] text-bone transition hover:bg-bone hover:text-ink"
        >
          Postulate
        </Link>
      </div>
    </header>
  );
}
