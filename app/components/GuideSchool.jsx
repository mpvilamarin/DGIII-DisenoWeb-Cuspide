import Reveal from "./Reveal";
import TopoPattern from "./TopoPattern";

const features = [
  {
    title: "Formación avanzada",
    detail: "Certificaciones alineadas a estándares internacionales.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 19 L9 8 L13 14 L16 9 L21 19 Z"
      />
    ),
  },
  {
    title: "Rescate en grietas",
    detail: "Técnicas y protocolos en entornos reales.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 21V11a5 5 0 0 1 10 0v10M5 21h14M9 7V5a3 3 0 0 1 6 0v2"
      />
    ),
  },
  {
    title: "Primeros auxilios",
    detail: "Atención y manejo en zonas remotas.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M8 12h8" />
      </>
    ),
  },
  {
    title: "Mentoría experta",
    detail: "Acompañamiento de guías certificados UIAGM.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 11a3 3 0 100-6 3 3 0 000 6zm0 2c-3 0-6 1.5-6 4v2h8v-2c0-1-.3-1.9-.8-2.6M17 5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm.5 6.2c2 .4 3.5 1.7 3.5 3.8v2h-5"
      />
    ),
  },
];

export default function GuideSchool() {
  return (
    <section
      id="escuela-de-guias"
      className="relative flex h-screen min-h-160 flex-col overflow-hidden bg-ink text-bone"
    >
      <TopoPattern className="absolute inset-0 h-full w-full text-violet" />

      <div className="absolute right-[8%] top-[14%] hidden font-mono text-xs text-violet-light/50 sm:block">
        3000
      </div>
      <div className="absolute right-[18%] top-[42%] hidden font-mono text-xs text-violet-light/50 sm:block">
        2000
      </div>
      <div className="absolute right-[26%] top-[68%] hidden font-mono text-xs text-violet-light/50 sm:block">
        1000
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 md:px-10 lg:px-16">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-violet-light">
            Próximamente · 2027
          </p>
          <span className="mt-3 block h-px w-6 bg-violet" />

          <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] text-bone sm:text-5xl">
            Escuela de Guías Cúspide
          </h2>
          <p className="mt-5 max-w-xl font-serif text-base leading-relaxed text-bone/75">
            Certificaciones internacionales en rescate en grietas y primeros
            auxilios en zonas agrestes. La misma exigencia con la que
            formamos a nuestros clientes, ahora para formar a los próximos
            guías.
          </p>
          <a
            href="#newsletter"
            className="mt-8 inline-flex items-center gap-3 border border-violet/40 px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-violet-light transition hover:border-violet-light hover:text-bone"
          >
            Sumarme a la lista de espera
            <span>→</span>
          </a>
        </Reveal>
      </div>

      <div className="relative z-10 px-6 pb-10 md:px-10 md:pb-14 lg:px-16">
        <div className="grid grid-cols-1 divide-y divide-bone/10 border-t border-bone/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {features.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="flex items-start gap-3 py-4 sm:px-5 sm:pt-4 first:sm:pl-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  className="h-5 w-5 shrink-0 text-violet-light"
                >
                  {item.icon}
                </svg>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-bone">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-bone/55">
                    {item.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
