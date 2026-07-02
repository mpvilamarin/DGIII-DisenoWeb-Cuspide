import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar, Users, Mountain,
  User, Package, Wrench, Home, Radio, Shield,
  MapPin, HeartPulse, Footprints, ClipboardCheck, Mail, Phone, Info,
} from "lucide-react";
import Reveal from "../../components/Reveal";
import TopoBackground from "../../components/TopoBackground";
import PostulationForm from "./PostulationForm";
import { programs, getProgramBySlug } from "./data";
import AscentRoute from "./AscentRoute";
import GearShowcase from "./GearShowcase";
import Reviews from "./Reviews";

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
      <section className="relative flex min-h-[80vh] flex-col overflow-hidden bg-ink text-bone sm:min-h-screen">
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

        {/* Main content — vertically centered; centrado en mobile, alineado a la izquierda desde lg */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-16 pt-24 text-center md:px-10 lg:max-w-[60%] lg:items-start lg:px-16 lg:text-left">
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
        <div className="relative z-10 mx-6 mb-4 mt-6 rounded-lg border border-bone/10 bg-ink/10 backdrop-blur-xl sm:mt-auto md:mx-10 md:mb-6 lg:mx-16">
          <div className="grid grid-cols-2 divide-x divide-bone/10 md:grid-cols-4">
            {statItems.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex flex-col items-center gap-0.5 px-1.5 py-1.5 text-center sm:gap-1.5 sm:px-3 sm:py-4">
                  {Icon ? (
                    <Icon className="h-2.5 w-2.5 text-teal sm:h-3.5 sm:w-3.5" strokeWidth={1.4} />
                  ) : (
                    <DifficultyBars grade={program.grade} />
                  )}
                  <p className="font-display text-[11px] uppercase leading-none text-bone sm:text-base">
                    {stat.value}
                  </p>
                  <span className="h-px w-4 bg-bone/20" />
                  <p className="font-mono text-[6px] uppercase tracking-[0.1em] text-bone/40 leading-snug sm:text-[8px] sm:tracking-[0.16em]">
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
            <p className="text-center font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-dark sm:text-left">
              ¿Qué incluye?
            </p>
            <span className="mx-auto mt-3 block h-0.5 w-10 bg-violet sm:mx-0" />
            <h2 className="mt-6 text-center font-display text-3xl uppercase leading-[0.95] text-ink sm:text-left sm:text-4xl">
              Todo lo que necesitás,{" "}
              <span className="text-gradient-cool">para llegar preparado.</span>
            </h2>

            <div className="mt-9 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4">
              {program.incluye.map((item, i) => {
                const Icon = ICON_MAP[item.icon] || Shield;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl border border-stone/15 bg-white/70 p-3 text-left shadow-sm sm:flex-col sm:gap-0 sm:p-5 sm:text-center"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet/10 sm:mx-auto sm:h-11 sm:w-11">
                      <Icon className="h-4 w-4 text-violet-dark sm:h-5 sm:w-5" strokeWidth={1.6} />
                    </span>
                    <div className="sm:mt-3">
                      <p className="text-xs font-bold uppercase tracking-[0.04em] text-ink">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-xs leading-snug text-stone-light sm:mt-1">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </Reveal>

          {/* Right: requisitos */}
          <Reveal delay={80}>
            <div className="rounded-2xl border border-stone/15 bg-white/70 p-8 shadow-sm lg:p-10">
              <p className="text-center font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-dark sm:text-left">
                Requisitos
              </p>
              <span className="mx-auto mt-3 block h-0.5 w-10 bg-violet sm:mx-0" />
              <h2 className="mt-6 text-center font-display text-2xl uppercase leading-[0.95] text-ink sm:text-left sm:text-3xl">
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

      {/* ─── 4. RESEÑAS ─── */}
      <Reviews />

      {/* ─── 5. CTA ─── */}
      <section className="py-10 pr-4 sm:pr-6 lg:pr-10">
        <div className="relative overflow-hidden rounded-r-2xl bg-violet-dark px-6 py-7 sm:px-9">
          <div className="map-grid pointer-events-none absolute inset-0" />
          <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:gap-4 sm:text-left">
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-bone/30">
                <span className="absolute inset-0 rounded-full border border-bone/30 animate-ping [animation-duration:2.5s]" />
                <Image
                  src="/images/Logo blanco.png"
                  alt="Cúspide"
                  width={24}
                  height={24}
                  className="relative h-5 w-5 object-contain"
                />
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
      <section id="postulacion" className="border-t border-stone/15 px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-center font-mono text-xs uppercase tracking-[0.32em] text-violet-dark sm:text-left">
              Proceso de postulación
            </p>
            <span className="mx-auto mt-4 block h-0.5 w-12 bg-violet sm:mx-0" />
            <h2 className="mt-7 text-center font-display text-3xl uppercase leading-[0.95] text-ink sm:text-left sm:text-4xl">
              Requisitos y{" "}
              <span className="text-gradient-cool">postulación</span>
            </h2>
          </Reveal>

          {/* Tarjetas superpuestas: info de contacto + formulario */}
          <Reveal delay={60}>
            <div className="relative mt-14 lg:grid lg:grid-cols-[340px_1fr] lg:items-center">
              <div className="relative z-0 rounded-2xl bg-violet-dark p-8 text-bone shadow-xl lg:mr-[-48px] lg:p-10">
                {/* Info de requisitos — ícono con hover */}
                <div className="group absolute left-5 top-5 z-20">
                  <button
                    type="button"
                    aria-label="Ver requisitos para postular"
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-bone/30 text-bone/70 transition hover:border-bone hover:text-bone"
                  >
                    <Info className="h-3.5 w-3.5" strokeWidth={1.8} />
                  </button>
                  <div className="pointer-events-none absolute left-0 top-9 z-30 w-64 origin-top-left scale-95 opacity-0 transition-all duration-150 group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100">
                    <div className="rounded-lg border border-stone/10 bg-white p-4 shadow-xl">
                      <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-violet-dark">
                        Requisitos para postular
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {program.postulacion.requisitos.map((req, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="mt-0.5 shrink-0 font-mono text-[9px] font-bold text-violet-dark">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-[11px] leading-relaxed text-stone">
                              {req}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="mt-10 text-center font-mono text-[10px] uppercase tracking-[0.24em] text-bone/50 sm:text-left">
                  ¿Tenés dudas?
                </p>
                <h3 className="mt-2 text-center font-display text-xl uppercase leading-tight text-bone sm:text-left">
                  Hablemos antes de postular.
                </h3>
                <ul className="mt-8 space-y-5">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" strokeWidth={1.6} />
                    <span className="text-xs leading-relaxed text-bone/75">
                      El Chaltén, Santa Cruz, Patagonia Argentina
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal" strokeWidth={1.6} />
                    <span className="text-xs leading-relaxed text-bone/75">
                      info@cuspide.com
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal" strokeWidth={1.6} />
                    <span className="text-xs leading-relaxed text-bone/75">
                      +54 9 2962 45-0000
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative z-10 mt-6 lg:mt-0">
                <PostulationForm programName={`${program.name} — ${program.subtitle}`} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── PROGRAMAS RELACIONADOS ─── */}
      <section className="border-t border-stone/15 bg-bone px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="text-center sm:text-left">
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-stone">
                Programas relacionados
              </p>
              <span className="mx-auto mt-4 block h-0.5 w-12 bg-violet-light sm:mx-0" />
              <h2 className="mt-7 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
                Seguí{" "}
                <span className="text-gradient-cool bg-linear-to-r">
                  sumando
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {related.map((rel, i) => (
              <Reveal key={rel.slug} delay={i * 80}>
                <Link
                  href={`/programas/${rel.slug}`}
                  className="group relative flex h-72 flex-col justify-between overflow-hidden rounded-2xl p-8"
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
