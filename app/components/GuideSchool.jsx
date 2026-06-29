import Image from "next/image";
import Reveal from "./Reveal";
import TopoPattern from "./TopoPattern";

const features = [
  {
    num: "01",
    title: "Formación avanzada",
    detail: "Certificaciones alineadas a estándares internacionales.",
  },
  {
    num: "02",
    title: "Rescate en grietas",
    detail: "Técnicas y protocolos en entornos reales.",
  },
  {
    num: "03",
    title: "Primeros auxilios",
    detail: "Atención y manejo en zonas remotas.",
  },
  {
    num: "04",
    title: "Mentoría experta",
    detail: "Acompañamiento de guías certificados UIAGM.",
  },
];

export default function GuideSchool() {
  return (
    <section
      id="escuela-de-guias"
      className="relative flex h-screen min-h-160 flex-col overflow-hidden bg-ink text-bone"
    >
      {/* Imagen de fondo */}
      <Image
        src="/images/pinnacle-back.jpg"
        alt="Aguja de roca patagónica al atardecer"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-30"
      />
      <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/80 to-ink/25" />

      <TopoPattern className="absolute inset-0 h-full w-full text-violet/30" />

      {/* Cotas altitud */}
      <div className="absolute right-[8%] top-[14%] hidden font-mono text-xs text-violet-light/50 sm:block">
        3000
      </div>
      <div className="absolute right-[18%] top-[42%] hidden font-mono text-xs text-violet-light/50 sm:block">
        2000
      </div>
      <div className="absolute right-[26%] top-[68%] hidden font-mono text-xs text-violet-light/50 sm:block">
        1000
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 md:px-10 lg:px-16">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-violet">
            Próximamente · 2027
          </p>
          <span className="mt-3 block h-0.5 w-8 bg-violet" />

          <h2 className="mt-6 font-display text-3xl uppercase leading-[1.08] text-bone sm:text-4xl md:text-5xl">
            Escuela de
            <br />
            <span className="text-violet">guías</span> Cúspide
          </h2>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-bone/75">
            Certificaciones internacionales en rescate en grietas y primeros
            auxilios en zonas agrestes. La misma exigencia con la que
            formamos a nuestros clientes, ahora para formar a los próximos
            guías.
          </p>

          <a
            href="#newsletter"
            className="mt-8 inline-flex items-center gap-3 border-b border-violet/50 pb-1 text-xs uppercase tracking-[0.18em] text-violet transition hover:border-violet hover:text-violet-light"
          >
            Sumarme a la lista de espera
            <span>→</span>
          </a>
        </Reveal>
      </div>

      {/* Features inferiores */}
      <div className="relative z-10 px-6 pb-10 md:px-10 md:pb-14 lg:px-16">
        <div className="grid grid-cols-2 divide-x divide-bone/10 border-t border-bone/10 lg:grid-cols-4">
          {features.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="flex flex-col px-10 py-7">
                <p className="font-mono text-3xl font-light text-glacier">{item.num}</p>
                <span className="mt-1.5 block h-px w-8 bg-violet" />
                <p className="mt-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-bone">
                  {item.title}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-bone/55">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
