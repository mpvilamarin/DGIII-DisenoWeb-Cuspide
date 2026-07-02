import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar, Users, Mountain,
  User, Package, Wrench, Home, Radio, Shield,
  MapPin, HeartPulse, Footprints, ClipboardCheck,
} from "lucide-react";
import Reveal from "../../components/Reveal";
import TopoBackground from "../../components/TopoBackground";
import PostulationForm from "./PostulationForm";
import ProgramGallery from "./ProgramGallery";
import { programs, getProgramBySlug } from "./data";
import AscentRoute from "./AscentRoute";
import GearShowcase from "./GearShowcase";

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
const REQ_ICONS = [HeartPulse, Footprints, Shield, ClipboardCheck];

// Escala alpina francesa: F, PD, AD, D, TD, ED — se ignoran los +/- para el nivel de barras.
const GRADE_LEVELS = { F: 1, PD: 2, AD: 3, D: 4, TD: 5, ED: 5 };
const gradeLevel = (grade) => GRADE_LEVELS[grade.replace(/[+-]$/, "")] || 3;
const BAR_HEIGHTS = [5, 7, 9, 11, 14];

function DifficultyBars({ grade }) {
  const level = gradeLevel(grade);
  return (
    <div className="flex items-end gap-0.75 h-3.5" aria-hidden="true">
      {BAR_HEIGHTS.map((h, i) => (
        <span
          key={i}
          className={`w-1 rounded-xs ${i < level ? "bg-teal" : "bg-bone/15"}`}
          style={{ height: `${h}px` }}
        />
      ))}
    </div>
  );
}

export default async function ProgramaPage({ params }) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const related = program.relacionados
    .map((s) => programs.find((p) => p.slug === s))
    .filter(Boolean);

  const getFicha = (label) => program.ficha.find((f) => f.label === label)?.value ?? "—";

  const statItems = [
    { icon: null,     value: `Grado ${program.grade}`,                              label: "Dificultad" },
    { icon: Calendar, value: getFicha("Días en terreno"),                           label: "Duración total" },
    { icon: Users,    value: getFicha("Ratio guía / cliente").replace(/\s/g, ""),   label: "Máximo guías / cliente" },
    { icon: Mountain, value: getFicha("Altitud máxima").replace(" s.n.m.", ""),     label: "Altitud máxima" },
  ];

  return (
    <>
      <TopoBackground />

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

        {/* Overlays — mismo esquema que el Hero de la home */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0) 45%), " +
              "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0) 40%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 100% at 0% 100%, rgba(76,29,149,0.6) 0%, rgba(76,29,149,0.3) 40%, rgba(76,29,149,0) 60%)",
          }}
        />
        <div className="grain absolute inset-0 opacity-50" />

        {/* Vertical program name — right edge */}
        <div className="pointer-events-none absolute right-6 top-24 bottom-32 z-10 hidden items-center lg:right-10 lg:flex">
          <p className="origin-center rotate-180 font-mono text-[20px] uppercase tracking-[0.3em] text-bone/40 [writing-mode:vertical-rl]">
            {program.name}
          </p>
        </div>

        {/* Main content — vertically centered, left-aligned */}
        <div className="relative z-10 flex flex-1 flex-col justify-center px-6 pb-16 pt-24 md:px-10 lg:max-w-[60%] lg:px-16">
          {/* Ubicación — reemplaza el badge de grado */}
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-teal" strokeWidth={1.6} />
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-bone/60">
              {program.location}
            </span>
          </div>

          {/* Title: subtitle (mountain) big, name (type) below */}
          <h1 className="mt-8 font-display text-4xl uppercase leading-[0.88] text-bone sm:text-5xl md:text-6xl lg:text-[4rem]">
            {program.subtitle.split(" ").length > 1 ? (
              <>
                {program.subtitle.split(" ")[0]}
                <br />
                {program.subtitle.split(" ").slice(1).join(" ")}
              </>
            ) : (
              program.subtitle
            )}
          </h1>

          <p className="mt-5 max-w-md font-mono text-xs leading-relaxed text-bone/50">
            {program.tagline}
          </p>

          {/* Single CTA */}
          <div className="mt-9">
            <a
              href="#postulacion"
              className="rounded-md bg-violet px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-bone transition hover:bg-bone hover:text-ink"
            >
              Ver programa →
            </a>
          </div>
        </div>

        {/* Stats bar — integrated at bottom of hero, contenida con margen */}
        <div className="relative z-10 mx-6 mb-6 mt-auto rounded-lg border border-bone/10 bg-ink/10 backdrop-blur-xl md:mx-10 lg:mx-16">
          <div className="grid grid-cols-2 divide-x divide-bone/10 md:grid-cols-4">
            {statItems.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex flex-col items-center gap-1.5 px-3 py-4 text-center">
                  {Icon ? (
                    <Icon className="h-3.5 w-3.5 text-teal" strokeWidth={1.4} />
                  ) : (
                    <DifficultyBars grade={program.grade} />
                  )}
                  <p className="font-display text-base uppercase leading-none text-bone">
                    {stat.value}
                  </p>
                  <span className="h-px w-4 bg-bone/20" />
                  <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-bone/40 leading-snug">
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
      <section className="border-t border-stone/10 bg-bone">
        <div className="grid grid-cols-1 gap-12 px-6 py-14 md:px-10 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-16">
          {/* Left: qué incluye */}
          <Reveal>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-dark">
              ¿Qué incluye?
            </p>
            <span className="mt-3 block h-0.5 w-10 bg-violet" />
            <h2 className="mt-6 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
              Todo lo que necesitás,{" "}
              <span className="text-gradient-cool">para llegar preparado.</span>
            </h2>

            <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {program.incluye.map((item, i) => {
                const Icon = ICON_MAP[item.icon] || Shield;
                return (
                  <div
                    key={i}
                    className="rounded-xl border border-stone/15 bg-white/70 p-5 text-center shadow-sm"
                  >
                    <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-violet/10">
                      <Icon className="h-5 w-5 text-violet-dark" strokeWidth={1.6} />
                    </span>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.04em] text-ink">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-stone-light">
                      {item.sub}
                    </p>
                  </div>
                );
              })}
            </div>

          </Reveal>

          {/* Right: requisitos */}
          <Reveal delay={80}>
            <div className="rounded-2xl border border-stone/15 bg-white/70 p-8 shadow-sm lg:p-10">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-dark">
                Requisitos
              </p>
              <span className="mt-3 block h-0.5 w-10 bg-violet" />
              <h2 className="mt-6 font-display text-2xl uppercase leading-[0.95] text-ink sm:text-3xl">
                Para tu seguridad,{" "}
                <span className="text-gradient-cool">exigimos lo mejor.</span>
              </h2>

              <ul className="mt-8 divide-y divide-stone/10">
                {program.postulacion.requisitos.map((req, i) => {
                  const Icon = REQ_ICONS[i % REQ_ICONS.length];
                  return (
                    <li key={i} className="flex items-center gap-4 py-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet/10">
                        <Icon className="h-4.5 w-4.5 text-violet-dark" strokeWidth={1.6} />
                      </span>
                      <span className="text-sm leading-relaxed text-stone">{req}</span>
                    </li>
                  );
                })}
              </ul>

              <a
                href="#postulacion"
                className="mt-7 inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-stone transition hover:text-ink"
              >
                Ver requisitos detallados <span>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── EQUIPO TÉCNICO ─── */}
      <GearShowcase />

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
      <section className="py-10 pr-4 sm:pr-6 lg:pr-10">
        <div className="relative overflow-hidden rounded-r-2xl bg-violet-dark px-6 py-7 sm:px-9">
          <div className="map-grid pointer-events-none absolute inset-0" />
          <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-bone/30">
                <Mountain className="h-5 w-5 text-bone" strokeWidth={1.6} />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">
                  ¿Listo para tu próximo desafío?
                </p>
                <h2 className="mt-1 font-display text-xl uppercase text-bone sm:text-2xl">
                  Hablemos de tu expedición.
                </h2>
              </div>
            </div>
            <a
              href="mailto:info@cuspide.com"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-md bg-bone px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-violet-dark hover:text-bone"
            >
              Escribinos <span>→</span>
            </a>
          </div>
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
