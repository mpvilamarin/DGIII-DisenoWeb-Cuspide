import Image from "next/image";
import { Compass } from "lucide-react";
import Reveal from "./Reveal";

const features = [
  { num: "01", title: "Formación integral" },
  { num: "02", title: "Prácticas en terreno" },
  { num: "03", title: "Avalada por UIAGM" },
  { num: "04", title: "Salida laboral y acompañamiento" },
];

export default function GuideSchool() {
  return (
    <section
      id="escuela-de-guias"
      className="relative overflow-hidden bg-ink text-bone"
    >
      <Image
        src="/images/pinnacle-back.jpg"
        alt="Aguja de roca patagónica al atardecer"
        fill
        sizes="100vw"
        className="object-cover object-right opacity-35"
      />
      <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/85 to-ink/40" />

      <Reveal>
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-6 md:grid-cols-[1.8fr_1fr_1fr_1fr_1fr] md:items-center md:gap-0 md:px-10 md:py-7 lg:px-16">
          <div className="md:pr-8">
            <h2 className="font-display text-xl uppercase leading-[1.05] text-bone sm:text-2xl">
              Escuela de
              {" "}
              Guías <span className="text-glacier">Cúspide</span>
            </h2>

            <p className="mt-2 max-w-xs text-xs leading-relaxed text-bone/55">
              Formamos guías con criterio, experiencia y compromiso.
              {" "}
              Conocé nuestra formación profesional.
            </p>

            <a
              href="#newsletter"
              className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-bone transition hover:text-glacier"
            >
              Más información <span>→</span>
            </a>
          </div>

          {features.map((item) => (
            <div
              key={item.num}
              className="relative border-t border-bone/15 pl-5 pt-5 md:border-l md:border-t-0 md:pt-0"
            >
              <Compass className="absolute -top-2 left-[-9px] hidden h-4 w-4 text-glacier md:block" strokeWidth={1.6} />
              <p className="font-display text-base text-glacier">{item.num}</p>
              <p className="mt-1.5 max-w-[8rem] text-xs leading-snug text-bone">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
