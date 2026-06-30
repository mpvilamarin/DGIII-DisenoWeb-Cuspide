import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  TrendingUp, Calendar, Users, Mountain,
  User, Package, Wrench, Home, Radio, Shield, Mail,
  MapPin, Clock, ChevronRight,
} from "lucide-react";
import Reveal from "../../components/Reveal";
import PostulationForm from "./PostulationForm";
import ItineraryAccordion from "./ItineraryAccordion";
import ProgramGallery from "./ProgramGallery";
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

const ICON_MAP = { User, Package, Wrench, Home, Radio, Shield };

export default async function ProgramaPage({ params }) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const related = program.relacionados
    .map((s) => programs.find((p) => p.slug === s))
    .filter(Boolean);

  const getFicha = (label) => program.ficha.find((f) => f.label === label)?.value ?? "—";

  const statItems = [
    { icon: TrendingUp, value: `Grado ${program.grade}`, label: program.gradeLabel },
    { icon: Calendar,   value: getFicha("Días en terreno"),        label: "Duración total de la expedición" },
    { icon: Users,      value: getFicha("Ratio guía / cliente"),   label: "Máximo ratio guía / cliente" },
    { icon: Mountain,   value: getFicha("Altitud máxima"),         label: "Altitud máxima alcanzada" },
  ];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-ink text-bone">
        <Image
          src={program.image}
          alt={`${program.name} — ${program.subtitle}`}
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />

        {/* Overlays: heavy left, fades right so photo shows */}
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/80 to-ink/20" />
        <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_60%,rgba(131,77,251,0.18),transparent)]" />
        <div className="grain absolute inset-0 opacity-50" />

        {/* Breadcrumb */}
        <div className="relative z-10 flex items-center gap-2 px-6 pt-8 md:px-10 lg:px-16">
          <Link
            href="/programas"
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/45 transition hover:text-bone/70"
          >
            Programas
          </Link>
          <ChevronRight className="h-3 w-3 text-bone/30" strokeWidth={1.5} />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/45">
            {program.name}
          </span>
          <ChevronRight className="h-3 w-3 text-bone/30" strokeWidth={1.5} />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/70">
            {program.subtitle}
          </span>
        </div>

        {/* Main content — vertically centered, left-aligned */}
        <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-16 md:px-10 lg:max-w-[58%] lg:px-16">
          {/* Grade badge — filled */}
          <span className="inline-flex w-fit items-center bg-violet px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.26em] text-bone">
            Grado {program.grade}
          </span>

          {/* Title: subtitle (mountain) big, name (type) below */}
          <h1 className="mt-5 font-display text-5xl uppercase leading-[0.88] text-bone sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            {program.subtitle}
          </h1>
          <p className="mt-3 font-display text-2xl uppercase leading-none text-bone/60 sm:text-3xl">
            {program.name}
          </p>

          {/* Metadata row */}
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-bone/60">
              <MapPin className="h-3.5 w-3.5 text-violet" strokeWidth={1.6} />
              {program.location}
            </span>
            <span className="hidden h-3 w-px bg-bone/20 sm:block" />
            <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-bone/60">
              <Clock className="h-3.5 w-3.5 text-violet" strokeWidth={1.6} />
              {getFicha("Días en terreno")} · {getFicha("Ratio guía / cliente")}
            </span>
          </div>

          <p className="mt-5 max-w-md font-mono text-xs leading-relaxed text-bone/50">
            {program.tagline}
          </p>

          {/* Single CTA */}
          <div className="mt-9">
            <a
              href="#postulacion"
              className="inline-flex items-center gap-3 bg-violet px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-bone transition hover:bg-violet-light"
            >
              Ver próximas fechas <span>→</span>
            </a>
          </div>
        </div>

        {/* Stats bar — integrated at bottom of hero */}
        <div className="relative z-10 mt-auto w-full border-t border-bone/10 bg-ink/80 backdrop-blur-sm">
          <div className="grid grid-cols-2 divide-x divide-bone/10 md:grid-cols-4">
            {statItems.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex flex-col items-center gap-2.5 px-4 py-7 text-center">
                  <Icon className="h-4 w-4 text-violet" strokeWidth={1.4} />
                  <p className="font-display text-lg uppercase leading-none text-bone sm:text-xl">
                    {stat.value}
                  </p>
                  <span className="h-px w-6 bg-bone/20" />
                  <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-bone/40 leading-snug">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 2. SOBRE EL PROGRAMA + ITINERARIO ─── */}
      <section id="ficha" className="grid grid-cols-1 bg-white lg:grid-cols-2">
        {/* Left: sobre el programa */}
        <div className="border-b border-stone/10 px-8 py-14 lg:border-b-0 lg:border-r lg:px-14 lg:py-20">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-stone-light">
              Sobre el programa
            </p>
            <h2 className="mt-6 font-display text-4xl uppercase leading-[0.95] text-ink sm:text-5xl">
              {program.headline.split("\n").map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h2>
            <div className="mt-8 space-y-4">
              {program.desafio.slice(0, 2).map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-stone">{p}</p>
              ))}
            </div>
            <a
              href="#postulacion"
              className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-violet transition hover:text-violet-light"
            >
              Ver más sobre el programa <span>→</span>
            </a>
          </Reveal>
        </div>

        {/* Right: itinerario resumido */}
        <div className="px-8 py-14 lg:px-14 lg:py-20">
          <Reveal delay={80}>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-stone-light">
              Itinerario resumido
            </p>
            <div className="mt-6">
              <ItineraryAccordion itinerario={program.itinerario} />
            </div>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-violet transition hover:text-violet-light"
            >
              Ver itinerario completo <span>→</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ─── 3. QUÉ INCLUYE + REQUISITOS ─── */}
      <section className="grid grid-cols-1 border-t border-stone/10 bg-bone lg:grid-cols-2">
        {/* Left: qué incluye */}
        <div className="border-b border-stone/10 px-8 py-14 lg:border-b-0 lg:border-r lg:px-14 lg:py-20">
          <Reveal>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-violet">
              ¿Qué incluye?
            </p>
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-8">
              {program.incluye.map((item, i) => {
                const Icon = ICON_MAP[item.icon] || Shield;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-stone/50" strokeWidth={1.4} />
                    <div>
                      <p className="text-sm font-semibold leading-snug text-ink">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-xs leading-snug text-stone-light">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <a
              href="#"
              className="mt-10 inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-violet transition hover:text-violet-light"
            >
              Ver todo lo que incluye <span>→</span>
            </a>
          </Reveal>
        </div>

        {/* Right: requisitos */}
        <div className="px-8 py-14 lg:px-14 lg:py-20">
          <Reveal delay={80}>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-violet">
              Requisitos
            </p>
            <ul className="mt-8 space-y-5">
              {program.postulacion.requisitos.map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 font-bold text-violet">✓</span>
                  <span className="text-sm leading-relaxed text-stone">{req}</span>
                </li>
              ))}
            </ul>
            <a
              href="#postulacion"
              className="mt-10 inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-violet transition hover:text-violet-light"
            >
              Ver requisitos detallados <span>→</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ─── 4. GALERÍA ─── */}
      <section className="bg-ink py-14 text-bone lg:py-20">
        <div className="px-8 lg:px-14">
          <Reveal>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-glacier">
                  La montaña
                </p>
                <h2 className="mt-3 font-display text-3xl uppercase text-bone sm:text-4xl">
                  Imponente. Salvaje. Inolvidable.
                </h2>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <ProgramGallery images={program.galeria} />
          </Reveal>
        </div>
      </section>

      {/* ─── 5. CTA ─── */}
      <section className="border-t border-bone/10 bg-ink py-10 text-bone">
        <div className="mx-auto flex flex-col gap-6 px-8 sm:flex-row sm:items-center sm:justify-between lg:px-14">
          <div>
            <div className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-bone/40" strokeWidth={1.4} />
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50">
                ¿Tenés dudas sobre este programa?
              </p>
            </div>
            <h2 className="mt-3 font-display text-2xl uppercase text-bone sm:text-3xl">
              Hablemos de tu próxima expedición.
            </h2>
          </div>
          <a
            href="mailto:info@cuspide.com"
            className="shrink-0 inline-flex items-center gap-3 bg-violet px-8 py-4 font-mono text-xs uppercase tracking-[0.18em] text-bone transition hover:bg-violet-light"
          >
            Escribinos <span>→</span>
          </a>
        </div>
      </section>

      {/* ─── POSTULACIÓN ─── */}
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
              Requisitos y{" "}
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
                      <p className="font-mono text-xs leading-relaxed text-bone/70">{req}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-bone/50">
                  Formulario de postulación
                </p>
                <span className="mt-3 block h-px w-8 bg-violet/40" />
                <div className="mt-7">
                  <PostulationForm programName={`${program.name} — ${program.subtitle}`} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── PROGRAMAS RELACIONADOS ─── */}
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
                  <div className="absolute inset-0 bg-violet/0 transition group-hover:bg-violet/10" />

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
                    <span className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-violet">
                      Ver ficha técnica →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
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
