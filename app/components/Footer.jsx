import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "PROGRAMAS", href: "#" },
  { label: "ESCUELA DE GUÍAS", href: "#" },
  { label: "EXPEDICIONES", href: "#" },
  { label: "RECURSOS", href: "#" },
  { label: "SOBRE CÚSPIDES", href: "#" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <path d="M14 9h2V6h-2c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V9.3c0-.2.1-.3.3-.3z" />
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="3" />
        <path d="M11 9.5 15 12 11 14.5Z" fill="currentColor" stroke="none" />
      </>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto max-w-350 px-6 sm:px-8">
        <div className="flex flex-col border-b border-bone/10 sm:flex-row sm:items-stretch">
          {/* Left: Logo + tagline */}
          <div className="flex flex-col items-center gap-2 py-5 text-center sm:flex-row sm:gap-4 sm:border-r sm:border-bone/10 sm:py-8 sm:pr-10 sm:text-left">
            <Link href="/" className="shrink-0">
              <Image
                src="/images/Logo blanco.png"
                alt="Cúspides"
                width={140}
                height={32}
                quality={100}
                className="h-7 w-auto sm:h-8"
              />
            </Link>
            <div className="hidden h-9 w-px bg-bone/10 ml-6 shrink-0 sm:block" />
            <p className="text-xs leading-relaxed text-bone/70 sm:ml-6">
              No te llevamos a la montaña.<br />
              Te preparamos para{" "}
              <a href="#" className="text-violet-light hover:underline">merecerla</a>.
            </p>
          </div>

          {/* Center: Nav links — oculto en mobile */}
          <div className="hidden flex-1 flex-wrap items-center gap-x-6 gap-y-3 sm:flex sm:justify-center sm:gap-8 sm:px-10 sm:py-0">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[10px] font-medium uppercase tracking-widest text-bone/80 hover:text-bone transition whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-center gap-2 py-4 text-center text-xs text-bone/40 sm:flex-row sm:justify-between sm:gap-3 sm:py-3 sm:text-left">
          <p>© {new Date().getFullYear()} Cúspides · Formación de montaña</p>

          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 shrink-0">
              <path d="M12 2C8.686 2 6 4.686 6 8c0 5 6 14 6 14s6-9 6-14c0-3.314-2.686-6-6-6z" />
              <circle cx="12" cy="8" r="2" />
            </svg>
            <span>Patagonia Argentina · Cordón Marconi</span>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-bone/20 text-bone/50 transition hover:border-bone/50 hover:text-bone"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  className="h-3.5 w-3.5"
                >
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
