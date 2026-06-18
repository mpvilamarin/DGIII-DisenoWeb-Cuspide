const affiliations = [
  "Club Andino Patagónico",
  "Federación Argentina de Esquí y Andinismo",
  "UIAGM / IFMGA",
];

const columns = [
  {
    title: "Institución",
    items: ["Filosofía", "Metodología", "Protocolos de seguridad", "Equipo técnico"],
  },
  {
    title: "Programas",
    items: ["Expediciones activas", "Escuela de Guías 2027", "Ficha de postulación"],
  },
  {
    title: "Contacto",
    items: ["Cúspide Base, El Chaltén", "contacto@cuspides.com.ar", "+54 9 2962 000000"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone/20 bg-ink text-bone/80">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="font-display text-2xl uppercase tracking-widest text-bone">
              Cúspide
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone/70">
              No te llevamos a la montaña. Te preparamos para merecerla.
            </p>
            <ul className="mt-6 space-y-1 text-xs uppercase tracking-[0.14em] text-bone/50">
              {affiliations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs uppercase tracking-[0.18em] text-violet-light">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-bone/70">
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-bone/10 pt-8">
          <p className="text-xs uppercase tracking-[0.14em] text-bone/50">
            Newsletter — Escuela de Guías
          </p>
          <form className="mt-4 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="tu@email.com"
              className="w-full border border-bone/20 bg-transparent px-4 py-2 text-sm text-bone placeholder:text-bone/40 focus:border-violet-light focus:outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap border border-bone/40 px-5 py-2 text-xs uppercase tracking-[0.14em] transition hover:bg-bone hover:text-ink"
            >
              Sumarme
            </button>
          </form>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-bone/10 pt-6 text-xs text-bone/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Cúspide. Formación de montaña.</p>
          <p>Guías certificados UIAGM/IFMGA · Wilderness First Responder</p>
        </div>
      </div>
    </footer>
  );
}
