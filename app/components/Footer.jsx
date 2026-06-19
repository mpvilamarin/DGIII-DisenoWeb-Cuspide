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
    <footer className="border-t border-stone/20 bg-ink text-bone/70">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-xl uppercase tracking-widest text-bone">
              Cúspide
            </p>
            <p className="mt-1 max-w-xs text-xs leading-relaxed text-bone/50">
              No te llevamos a la montaña. Te preparamos para merecerla.
            </p>
          </div>

          <form className="flex w-full max-w-sm gap-2 sm:w-auto">
            <input
              type="email"
              required
              placeholder="Newsletter — Escuela de Guías"
              className="w-full border border-bone/20 bg-transparent px-3 py-2 text-xs text-bone placeholder:text-bone/40 focus:border-violet-light focus:outline-none sm:w-56"
            />
            <button
              type="submit"
              className="whitespace-nowrap border border-bone/40 px-4 py-2 text-xs uppercase tracking-widest transition hover:bg-bone hover:text-ink"
            >
              Sumarme
            </button>
          </form>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center gap-4 border-t border-bone/10 pt-6 text-xs text-bone/40 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Cúspide · Formación de montaña</p>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone/50 transition hover:text-violet-light"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  className="h-4 w-4"
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
