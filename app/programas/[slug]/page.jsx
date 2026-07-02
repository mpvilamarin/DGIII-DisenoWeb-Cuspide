import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Gauge, Calendar, Users, Mountain,
  User, Package, Wrench, Home, Radio, Shield, Mail,
  MapPin, ChevronRight,
} from "lucide-react";
import Reveal from "../../components/Reveal";
import PostulationForm from "./PostulationForm";
import ProgramGallery from "./ProgramGallery";
import { programs, getProgramBySlug } from "./data";
import AscentRoute from "./AscentRoute";

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
    { icon: Gauge,    value: `Grado ${program.grade}`,                              label: "Dificultad" },
    { icon: Calendar, value: getFicha("Días en terreno"),                           label: "Duración total" },
    { icon: Users,    value: getFicha("Ratio guía / cliente").replace(/\s/g, ""),   label: "Máximo guías / cliente" },
    { icon: Mountain, value: getFicha("Altitud máxima").replace(" s.n.m.", ""),     label: "Altitud máxima" },
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
        <div className="grain absolute inset-0 opacity-50" />

        {/* Vertical brand tagline — right edge */}
        <div className="pointer-events-none absolute right-6 top-24 bottom-32 z-10 hidden items-center lg:right-10 lg:flex">
          <p className="origin-center rotate-180 font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40 [writing-mode:vertical-rl]">
            No te llevamos a la montaña. Te preparamos para merecerla.
          </p>
        </div>

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
          <div className="mt-7 flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-teal" strokeWidth={1.6} />
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-bone/60">
              {program.location}
            </span>
          </div>

          <p className="mt-5 max-w-md font-mono text-xs leading-relaxed text-bone/50">
            {program.tagline}
          </p>

          {/* Single CTA */}
          <div className="mt-9">
            <a
              href="#postulacion"
              className="inline-flex items-center gap-3 bg-violet px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-bone transition hover:bg-bone hover:text-ink"
            >
              Ver programa <span>→</span>
            </a>
          </div>
        </div>

        {/* Stats bar — integrated at bottom of hero, full-bleed edge to edge */}
        <div className="relative z-10 mt-auto w-full border-t border-bone/10 bg-ink/80 backdrop-blur-sm">
          <div className="grid grid-cols-2 divide-x divide-bone/10 md:grid-cols-4">
            {statItems.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex flex-col items-center gap-3 px-4 py-9 text-center sm:py-10">
                  <Icon className="h-5 w-5 text-teal" strokeWidth={1.4} />
                  <p className="font-display text-xl uppercase leading-none text-bone sm:text-2xl">
                    {stat.value}
                  </p>
                  <span className="h-px w-6 bg-bone/20" />
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-bone/40 leading-snug">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── RUTA DE ASCENSO ─── */}
      <AscentRoute itinerario={program.itinerario} galeria={program.galeria} mainImage={program.image} />

      {/* ─── 3. QUÉ INCLUYE + REQUISITOS ─── */}
      <section className="grid grid-cols-1 border-t border-stone/10 bg-bone lg:grid-cols-2">
        {/* Left: qué incluye */}
        <div className="border-b border-stone/10 px-8 py-14 lg:border-b-0 lg:border-r lg:px-14 lg:py-20">
          <Reveal>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-stone">
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
              className="mt-10 inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-stone transition hover:text-ink"
            >
              Ver todo lo que incluye <span>→</span>
            </a>
          </Reveal>
        </div>

        {/* Right: requisitos */}
        <div className="px-8 py-14 lg:px-14 lg:py-20">
          <Reveal delay={80}>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-stone">
              Requisitos
            </p>
            <ul className="mt-8 space-y-5">
              {program.postulacion.requisitos.map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 font-bold text-stone">✓</span>
                  <span className="text-sm leading-relaxed text-stone">{req}</span>
                </li>
              ))}
            </ul>
            <a
              href="#postulacion"
              className="mt-10 inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-stone transition hover:text-ink"
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
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-violet-light">
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
            className="shrink-0 inline-flex items-center gap-3 bg-violet px-8 py-4 font-mono text-xs uppercase tracking-[0.18em] text-bone transition hover:bg-bone hover:text-ink"
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
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-violet-light">
              Proceso de postulación
            </p>
            <span className="mt-4 block h-0.5 w-12 bg-violet-light" />
            <h2 className="mt-7 font-display text-3xl uppercase leading-[0.95] text-bone sm:text-4xl">
              Requisitos y{" "}
              <span className="text-violet-light">postulación</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.2fr]">
            <Reveal delay={60}>
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-bone/50">
                  Requisitos para postular
                </p>
                <span className="mt-3 block h-px w-8 bg-violet-light/40" />
                <ul className="mt-7 space-y-5">
                  {program.postulacion.requisitos.map((req, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-violet-light/40 font-mono text-[9px] text-violet-light/70">
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
                <span className="mt-3 block h-px w-8 bg-violet-light/40" />
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
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-stone">
              Programas relacionados
            </p>
            <span className="mt-4 block h-0.5 w-12 bg-violet-light" />
            <h2 className="mt-7 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
              Seguí{" "}
              <span className="text-gradient-cool bg-linear-to-r">
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
                  <div className="absolute inset-0 bg-violet/0 transition group-hover:bg-violet/8" />

                  <div className="relative z-10">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-bone/70">
                      Grado {rel.grade}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3 className="font-display text-xl uppercase text-bone sm:text-2xl">
                      {rel.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-violet-light">
                      {rel.subtitle}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-violet-light">
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
                className="inline-flex items-center gap-3 border-b border-stone/30 pb-1 font-mono text-xs uppercase tracking-[0.2em] text-stone transition hover:border-stone hover:text-ink"
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
