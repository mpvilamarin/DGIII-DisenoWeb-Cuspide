import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const programs = [
  {
    slug: "ascenso-tecnico-fitz-roy",
    name: "Ascenso Técnico — Cerro Fitz Roy",
    grade: "D",
    duration: "6 meses de preparación + 12 días de expedición",
    image: "/images/pinnacle-back.jpg",
    span: true,
  },
  {
    slug: "glaciar-perito-moreno",
    name: "Travesía de Hielo — Glaciar Perito Moreno",
    grade: "AD",
    duration: "4 meses de preparación + 6 días de expedición",
    image: "/images/ice-couloir.jpg",
  },
  {
    slug: "cerro-torre-avanzado",
    name: "Expedición Avanzada — Cerro Torre",
    grade: "D+",
    duration: "9 meses de preparación + 16 días de expedición",
    image: "/images/rock-face.png",
  },
  {
    slug: "iniciacion-cordada",
    name: "Iniciación en Cordada — Cordón Marconi",
    grade: "PD",
    duration: "3 meses de preparación + 5 días de expedición",
    image: "/images/rope-team.jpg",
    span: true,
  },
];

export default function Programs() {
  return (
    <section
      id="programas"
      className="border-t border-stone/15 bg-bone px-6 py-28 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-violet">
            Programas
          </p>
          <span className="mt-4 block h-0.5 w-12 bg-linear-to-r from-violet to-glacier" />
          <h2 className="mt-7 max-w-3xl font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl md:text-[3.4rem]">
            Expediciones,
            <br />
            no{" "}
            <span className="bg-linear-to-r from-violet via-violet-light to-glacier bg-clip-text text-transparent">
              excursiones
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {programs.map((program, i) => (
            <Reveal key={program.slug} delay={i * 80} className={program.span ? "md:col-span-2" : ""}>
              <Link
                href={`/programas/${program.slug}`}
                className="group relative flex h-80 flex-col justify-between overflow-hidden p-8"
              >
                <Image
                  src={program.image}
                  alt={program.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-ink/10" />
                <div className="absolute inset-0 bg-violet/0 transition group-hover:bg-violet/20" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-bone/80">
                    Grado {program.grade}
                  </span>
                  <span className="font-mono text-xs text-bone/70">
                    {program.duration}
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="font-display text-2xl uppercase text-bone sm:text-3xl">
                    {program.name}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-violet-light">
                    Ver ficha técnica →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
