import Reveal from "./Reveal";

const pillars = [
  {
    title: "Protocolos profesionales",
    detail: "Procedimientos probados en alta montaña bajo estándares UIAA.",
  },
  {
    title: "Experiencia real en terreno",
    detail: "Aprendizaje basado en situaciones reales en condiciones extremas.",
  },
  {
    title: "Seguridad integral",
    detail: "Gestión de riesgos antes, durante y después de cada salida.",
  },
  {
    title: "Equipo certificado UIAGM",
    detail: "Guías con la máxima certificación internacional reconocida en 23 países.",
  },
];

export default function SafetyProtocols() {
  return (
    <section
      id="protocolos"
      className="relative mt-20 overflow-hidden bg-ink"
    >
      <div className="map-grid pointer-events-none absolute inset-0" />

      <div className="relative grid grid-cols-1 md:grid-cols-[1fr_4fr]">
        {/* Encabezado */}
        <div className="flex flex-col items-center justify-center border-b border-teal/15 px-6 py-12 text-center md:items-start md:border-b-0 md:border-r md:px-10 md:py-16 md:text-left lg:px-16">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-teal/50">
              Protocolos de seguridad
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.6rem,2.4vw,2.2rem)] uppercase leading-[0.95] tracking-tight text-bone">
              Cada decisión
              <br />
              tiene un
              <br />
              <span className="bg-linear-to-r text-gradient-cool">
                protocolo.
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 100} className="h-full">
              <div className="group relative h-full overflow-hidden border-b border-bone/6 px-6 py-5 transition-colors duration-300 last:border-b-0 hover:bg-teal/[0.04] sm:border-r sm:border-b-0 sm:py-8 sm:last:border-r-0 md:py-12">
                {/* Barra superior de acento */}
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-teal transition-transform duration-400 ease-out group-hover:scale-x-100" />

                {/* Número fantasma */}
                <span className="pointer-events-none absolute -bottom-4 -right-2 font-display text-[7rem] leading-none text-bone/3 transition-colors duration-400 group-hover:text-teal/5">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative mb-3 flex items-center justify-between sm:mb-5">
                  <span className="font-mono text-[10px] tracking-[0.1em] text-teal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="animate-blink-dot h-[5px] w-[5px] rounded-full bg-teal" />
                </div>

                <p className="relative font-display text-sm uppercase leading-[1.15] tracking-wide text-bone/60 transition-colors duration-300 group-hover:text-bone">
                  {pillar.title}
                </p>
                <p className="relative mt-3 text-xs leading-relaxed text-bone/50 transition-colors duration-300 group-hover:text-bone">
                  {pillar.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
