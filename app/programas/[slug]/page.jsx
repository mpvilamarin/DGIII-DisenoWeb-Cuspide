import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../components/Reveal";
import PostulationForm from "./PostulationForm";
import { programs, getProgramBySlug } from "./data";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};
  return {
    title: `${program.name} — ${program.subtitle} · Cúspide`,
    description: program.tagline,
  };
}

export default async function ProgramaPage({ params }) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const related = program.relacionados
    .map((s) => programs.find((p) => p.slug === s))
    .filter(Boolean);

  const maxAlt = Math.max(...program.itinerario.map((d) => d.altitudM));
  const altPoints = program.itinerario
    .map((d, i) => {
      const x = (i / (program.itinerario.length - 1)) * 100;
      const y = 100 - (d.altitudM / maxAlt) * 88;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <>
      {/* ─── 1. HERO ─── */}
      <section className="relative flex h-screen min-h-[640px] flex-col justify-end overflow-hidden bg-ink text-bone">
        <Image
          src={program.image}
          alt={`${program.name} — ${program.subtitle}`}
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-ink/50" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-ink/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_100%,rgba(87,64,224,0.22),transparent)]" />
        <div className="grain absolute inset-0 opacity-60" />

        <div className="relative z-10 px-6 pb-16 md:px-10 lg:px-16">
          <div className="mb-6 flex items-center gap-4">
            <span className="border border-violet/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.26em] text-violet-light">
              Grado {program.grade} — {program.gradeLabel}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50">
              {program.location}
            </span>
          </div>

          <h1 className="font-display text-4xl uppercase leading-[0.9] text-bone drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)] sm:text-5xl md:text-6xl">
            {program.name}
            <br />
            <span className="text-glacier">{program.subtitle}</span>
          </h1>

          <p className="mt-6 max-w-lg font-mono text-sm leading-relaxed text-bone/65">
            {program.tagline}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#postulacion"
              className="inline-flex items-center gap-3 bg-violet px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-bone transition hover:bg-violet-light"
            >
              Postularme
              <span>→</span>
            </a>
            <a
              href="#ficha"
              className="inline-flex items-center gap-3 border border-bone/25 px-8 py-4 text-xs uppercase tracking-[0.18em] text-bone/70 transition hover:border-bone/50 hover:text-bone"
            >
              Ver ficha técnica
            </a>
          </div>
        </div>

        <div className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/40 [writing-mode:vertical-rl]">
            Scroll
          </span>
          <span className="h-12 w-px bg-linear-to-b from-bone/40 to-transparent" />
        </div>
      </section>

      {/* ─── 2. FICHA TÉCNICA ─── */}
      <section
        id="ficha"
        className="border-t border-stone/15 bg-bone px-6 py-20 md:px-10 md:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-violet">
              Ficha técnica
            </p>
            <span className="mt-4 block h-0.5 w-12 bg-linear-to-r from-violet to-glacier" />
            <h2 className="mt-7 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
              Datos del programa
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <dl className="mt-12 divide-y divide-stone/12">
              {program.ficha.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[220px_1fr] sm:gap-8"
                >
                  <dt className="font-mono text-xs uppercase tracking-[0.18em] text-stone-light">
                    {row.label}
                  </dt>
                  <dd className="font-mono text-sm text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ─── 3. EL DESAFÍO ─── */}
      <section className="grid grid-cols-1 border-t border-stone/15 bg-ink text-bone lg:grid-cols-2">
        <Reveal className="flex flex-col justify-center px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-violet">
            El desafío
          </p>
          <span className="mt-4 block h-0.5 w-12 bg-linear-to-r from-violet to-glacier" />
          <h2 className="mt-7 font-display text-3xl uppercase leading-[0.95] text-bone sm:text-4xl">
            Lo que la montaña
            <br />
            <span className="text-glacier">exige</span>
          </h2>

          <div className="mt-8 space-y-5 max-w-lg">
            {program.desafio.map((parrafo, i) => (
              <p
                key={i}
                className={`text-base leading-relaxed ${i === 0 ? "text-bone/90" : "text-bone/60"}`}
              >
                {parrafo}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="relative min-h-[50vh] overflow-hidden lg:min-h-0">
          <Image
            src={program.altImage}
            alt={`Terreno — ${program.subtitle}`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-l from-transparent to-ink/80 lg:bg-linear-to-r" />
          <div className="absolute inset-0 bg-violet/10 mix-blend-multiply" />

          <div className="absolute bottom-8 left-8 z-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone/70">
              {program.location}
            </p>
          </div>
        </Reveal>
      </section>

      {/* ─── 4. CRONOGRAMA DE PREPARACIÓN ─── */}
      <section className="border-t border-stone/15 bg-bone px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-violet">
              Cronograma de preparación previa
            </p>
            <span className="mt-4 block h-0.5 w-12 bg-linear-to-r from-violet to-glacier" />
            <h2 className="mt-7 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
              El camino
              <br />
              antes del{" "}
              <span className="bg-linear-to-r from-violet via-violet-light to-glacier bg-clip-text text-transparent">
                terreno
              </span>
            </h2>
          </Reveal>

          <ol className="mt-14">
            {program.cronograma.map((step, i) => (
              <Reveal key={i} delay={i * 60}>
                <li className="grid grid-cols-1 gap-4 border-t border-stone/12 py-8 first:border-t-0 sm:grid-cols-[160px_1fr_100px]">
                  <div>
                    <span className="font-display text-4xl leading-none text-stone/10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-violet/80">
                      {step.period}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ink">
                      {step.title}
                    </p>
                    <p className="mt-3 max-w-lg font-mono text-xs leading-relaxed text-stone-light">
                      {step.body}
                    </p>
                  </div>

                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-stone-light sm:text-right">
                    {step.duration}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── 5. ITINERARIO EN TERRENO ─── */}
      <section className="border-t border-stone/15 bg-ink px-6 py-20 text-bone md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-violet">
              Itinerario en terreno
            </p>
            <span className="mt-4 block h-0.5 w-12 bg-linear-to-r from-violet to-glacier" />
            <h2 className="mt-7 font-display text-3xl uppercase leading-[0.95] text-bone sm:text-4xl">
              Día a día
              <br />
              en la{" "}
              <span className="text-glacier">montaña</span>
            </h2>
          </Reveal>

          {/* Altitude profile */}
          <Reveal delay={80}>
            <div className="mt-12 overflow-hidden rounded-sm border border-bone/10 bg-bone/5 px-6 py-5">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/40">
                Perfil de altitud aproximado
              </p>
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="h-20 w-full"
              >
                <defs>
                  <linearGradient id="altGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#5740e0" />
                    <stop offset="100%" stopColor="#9ceeff" />
                  </linearGradient>
                  <linearGradient id="altFill" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#5740e0" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#5740e0" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polygon
                  points={`0,100 ${altPoints} 100,100`}
                  fill="url(#altFill)"
                />
                <polyline
                  points={altPoints}
                  fill="none"
                  stroke="url(#altGrad)"
                  strokeWidth="2.5"
                  vectorEffect="non-scaling-stroke"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Reveal>

          <ol className="mt-10 space-y-0">
            {program.itinerario.map((day, i) => (
              <Reveal key={i} delay={i * 50}>
                <li className="grid grid-cols-[80px_1fr] gap-6 border-t border-bone/10 py-7 first:border-t-0 sm:grid-cols-[120px_1fr]">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone/40">
                      {day.dia}
                    </span>
                    <span className="font-mono text-xs font-semibold text-glacier">
                      {day.altitud}
                    </span>
                  </div>
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-bone">
                      {day.titulo}
                    </p>
                    <p className="mt-2 font-mono text-xs leading-relaxed text-bone/50">
                      {day.descripcion}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── 6. EQUIPAMIENTO ─── */}
      <section className="border-t border-stone/15 bg-bone px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-violet">
              Equipamiento
            </p>
            <span className="mt-4 block h-0.5 w-12 bg-linear-to-r from-violet to-glacier" />
            <h2 className="mt-7 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
              Qué traés,
              <br />
              qué{" "}
              <span className="bg-linear-to-r from-violet to-glacier bg-clip-text text-transparent">
                proveemos
              </span>
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
            <Reveal delay={80}>
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px flex-1 bg-violet/30" />
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-violet">
                    Provisto por Cúspide
                  </p>
                </div>
                <ul className="space-y-3">
                  {program.equipamiento.provisto.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-mono text-sm text-stone"
                    >
                      <span className="mt-px text-violet">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px flex-1 bg-stone/20" />
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-stone">
                    A cargo del participante
                  </p>
                </div>
                <ul className="space-y-3">
                  {program.equipamiento.participante.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-mono text-sm text-stone"
                    >
                      <span className="mt-px text-stone/40">–</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 7. PROTOCOLOS DE SEGURIDAD ─── */}
      <section className="border-t border-stone/15 bg-ink px-6 py-20 text-bone md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-violet">
              Protocolos de seguridad específicos
            </p>
            <span className="mt-4 block h-0.5 w-12 bg-linear-to-r from-violet to-glacier" />
            <h2 className="mt-7 font-display text-3xl uppercase leading-[0.95] text-bone sm:text-4xl">
              Cada escenario
              <br />
              tiene un{" "}
              <span className="text-glacier">protocolo</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {program.protocolos.map((proto, i) => (
              <Reveal key={proto.titulo} delay={i * 80}>
                <div className="border-t-2 border-violet pt-8">
                  <span className="block font-mono text-2xl text-violet/50">
                    {proto.icon}
                  </span>
                  <p className="mt-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-bone">
                    {proto.titulo}
                  </p>
                  <p className="mt-4 font-mono text-xs leading-relaxed text-bone/55">
                    {proto.descripcion}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. GUÍAS ASIGNADOS ─── */}
      <section className="border-t border-stone/15 bg-bone px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-violet">
              Guías asignados
            </p>
            <span className="mt-4 block h-0.5 w-12 bg-linear-to-r from-violet to-glacier" />
            <h2 className="mt-7 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
              Quiénes van
              <br />
              con vos
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {program.guias.map((guia, i) => (
              <Reveal key={guia.nombre} delay={i * 100}>
                <div className="group overflow-hidden">
                  <div className="relative h-72 overflow-hidden bg-stone/10">
                    <Image
                      src={guia.imagen}
                      alt={guia.nombre}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-ink/60 to-transparent" />
                  </div>

                  <div className="border-t-2 border-violet pt-5">
                    <p className="font-display text-lg uppercase text-ink">
                      {guia.nombre}
                    </p>
                    <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-violet">
                      {guia.certificacion}
                    </p>
                    <p className="mt-3 font-mono text-xs leading-relaxed text-stone-light">
                      {guia.experiencia}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. PROCESO DE POSTULACIÓN ─── */}
      <section
        id="postulacion"
        className="border-t border-stone/15 bg-ink px-6 py-20 text-bone md:px-10 md:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-violet">
              Proceso de postulación
            </p>
            <span className="mt-4 block h-0.5 w-12 bg-linear-to-r from-violet to-glacier" />
            <h2 className="mt-7 font-display text-3xl uppercase leading-[0.95] text-bone sm:text-4xl">
              Requisitos
              <br />
              y{" "}
              <span className="text-glacier">postulación</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.2fr]">
            <Reveal delay={60}>
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-bone/50">
                  Requisitos para postular
                </p>
                <span className="mt-3 block h-px w-8 bg-violet/40" />

                <ul className="mt-7 space-y-5">
                  {program.postulacion.requisitos.map((req, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-violet/40 font-mono text-[9px] text-violet/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="font-mono text-xs leading-relaxed text-bone/70">
                        {req}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 border-t border-bone/10 pt-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone/35">
                    Certificaciones aceptadas
                  </p>
                  <p className="mt-2 font-mono text-xs leading-relaxed text-bone/55">
                    AAGM · UIAGM · IFMGA y equivalentes internacionales. La
                    evaluación final la realiza el guía a cargo del programa.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-bone/50">
                  Formulario de postulación
                </p>
                <span className="mt-3 block h-px w-8 bg-violet/40" />
                <div className="mt-7">
                  <PostulationForm
                    programName={`${program.name} — ${program.subtitle}`}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 10. PROGRAMAS RELACIONADOS ─── */}
      <section className="border-t border-stone/15 bg-bone px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-violet">
              Programas relacionados
            </p>
            <span className="mt-4 block h-0.5 w-12 bg-linear-to-r from-violet to-glacier" />
            <h2 className="mt-7 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
              Seguí{" "}
              <span className="bg-linear-to-r from-violet via-violet-light to-glacier bg-clip-text text-transparent">
                sumando
              </span>
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {related.map((rel, i) => (
              <Reveal key={rel.slug} delay={i * 80}>
                <Link
                  href={`/programas/${rel.slug}`}
                  className="group relative flex h-72 flex-col justify-between overflow-hidden p-8"
                >
                  <Image
                    src={rel.image}
                    alt={rel.name}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-ink/10" />
                  <div className="absolute inset-0 bg-violet/0 transition group-hover:bg-violet/15" />

                  <div className="relative z-10">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-bone/70">
                      Grado {rel.grade}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3 className="font-display text-xl uppercase text-bone sm:text-2xl">
                      {rel.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-glacier">
                      {rel.subtitle}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-violet-light">
                      Ver ficha técnica →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}

            {program.guiaRelacionado && (
              <Reveal delay={related.length * 80}>
                <Link
                  href="/#escuela-de-guias"
                  className="group relative flex h-72 flex-col justify-between overflow-hidden border border-violet/30 bg-ink p-8"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(87,64,224,0.2),transparent_60%)]" />

                  <div className="relative z-10">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-violet">
                      Próximamente · 2027
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3 className="font-display text-xl uppercase text-bone sm:text-2xl">
                      Escuela de guías
                    </h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-violet-light">
                      Cúspide
                    </p>
                    <p className="mt-3 font-mono text-xs leading-relaxed text-bone/55">
                      Certificación internacional. La formación que sigue
                      después de completar este programa.
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-violet transition group-hover:text-violet-light">
                      Sumarme a la lista →
                    </span>
                  </div>
                </Link>
              </Reveal>
            )}
          </div>

          <Reveal delay={200}>
            <div className="mt-14 text-center">
              <Link
                href="/#programas"
                className="inline-flex items-center gap-3 border-b border-stone/30 pb-1 font-mono text-xs uppercase tracking-[0.2em] text-stone transition hover:border-violet hover:text-violet"
              >
                ← Ver todos los programas
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
