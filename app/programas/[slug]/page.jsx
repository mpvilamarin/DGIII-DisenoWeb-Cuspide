import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar, Users, Mountain, Check, ArrowRight,
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
    title: `${program.name} — ${program.subtitle} · Cúspides`,
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

  const guiaCert = program.incluye.find((i) => i.icon === "User")?.label ?? "Guía certificado";
  const seguro = program.incluye.find((i) => i.icon === "Shield")?.sub ?? "Asistencia médica incluida";
  const checklist = [guiaCert, seguro];

  return (
    <>
      <TopoBackground />

      {/* ─── HERO ─── */}
      <section className="relative flex min-h-[55vh] flex-col overflow-hidden bg-ink text-bone sm:min-h-[60vh] lg:min-h-[65vh]">
        <Image
          src={program.image}
          alt={`${program.name} — ${program.subtitle}`}
          fill
          sizes="100vw"
          priority
          quality={90}
          className="object-cover object-center"
        />

        {/* Overlay principal — oscurece el lado del texto, deja la imagen clara del lado derecho */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(8,6,18,0.92) 0%, rgba(8,6,18,0.75) 35%, rgba(8,6,18,0.35) 58%, rgba(8,6,18,0) 78%)",
          }}
        />
        {/* Franjas superior/inferior — legibilidad del nav y de la barra de stats */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 22%), " +
              "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 26%)",
          }}
        />
        {/* Acento violeta sutil, solo de marca */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 100% at 0% 100%, rgba(76,29,149,0.35) 0%, rgba(76,29,149,0.15) 35%, rgba(76,29,149,0) 55%)",
          }}
        />
        <div className="grain absolute inset-0 opacity-50" />

        {/* Vertical program name — right edge */}
        <div className="pointer-events-none absolute right-6 top-24 bottom-32 z-10 hidden items-center lg:right-10 lg:flex">
          <p className="origin-center rotate-180 font-mono text-[20px] uppercase tracking-[0.3em] text-bone/40 [writing-mode:vertical-rl]">
            {program.name}
          </p>
        </div>

        {/* Breadcrumb */}
        <nav className="relative z-10 flex items-center gap-2 px-6 pt-24 font-mono text-[11px] uppercase tracking-[0.14em] text-bone/70 md:px-10 lg:px-16">
          <Link href="/#programas" className="transition hover:text-bone">
            Programas
          </Link>
          <span>/</span>
          <span className="text-bone/90">{program.subtitle}</span>
        </nav>

        {/* Main content — título/CTA a la izquierda, card de precio a la derecha */}
        <div className="relative z-10 mt-auto grid grid-cols-1 gap-4 px-6 pb-4 pt-8 md:px-10 lg:grid-cols-[1fr_320px] lg:items-end lg:gap-8 lg:px-16 lg:pb-12">
          {/* Izquierda: título, tagline, chips, CTA */}
          <div className="text-center lg:text-left">
            <h1 className="mt-8 font-display text-[2.1rem] uppercase leading-[0.9] text-bone sm:text-3xl md:text-4xl lg:text-[2.5rem]">
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

            <p className="mx-auto mt-4 max-w-md font-mono text-xs leading-relaxed text-bone/75 lg:mx-0">
              {program.tagline}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
              <a
                href="#postulacion"
                className="hidden w-full rounded-md bg-violet px-6 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-bone transition hover:bg-bone hover:text-ink sm:inline-block sm:w-auto"
              >
                Ver fechas disponibles →
              </a>
              <a
                href="#postulacion"
                className="mb-2 w-full rounded-md border border-bone/40 px-6 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-bone transition hover:border-bone hover:bg-bone/10 sm:mb-0 sm:w-auto"
              >
                Postularme
              </a>
            </div>
          </div>

          {/* Derecha: card de precio */}
          <div className="mx-auto w-full max-w-xs rounded-lg border border-bone/10 bg-ink/40 p-3 backdrop-blur-xs lg:mx-0 lg:max-w-[320px] lg:p-4">
            <div className="flex flex-col items-center gap-1 text-center lg:flex-row lg:items-start lg:justify-between lg:gap-4 lg:text-left">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-bone/70">
                  Precio por persona
                </p>
                <p className="mt-1 font-display text-xl text-bone">${program.price}</p>
                <p className="font-mono text-[10px] text-bone/60">USD {program.priceUSD}</p>
              </div>

              <ul className="hidden space-y-1.5 text-left lg:block">
                {checklist.map((item) => (
                  <li key={item} className="flex items-center gap-2 font-mono text-[10px] text-bone/90">
                    <Check className="h-3 w-3 shrink-0 text-teal" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#incluye"
              className="mt-1.5 flex w-full items-center justify-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-bone transition hover:text-violet-light lg:mt-3 lg:justify-end"
            >
              Qué incluye →
            </a>
          </div>
        </div>

        {/* Stats bar — integrated at bottom of hero, contenida con margen */}
        <div className="relative z-10 mx-6 mb-4 mt-0 rounded-lg border border-bone/10 bg-ink/10 backdrop-blur-xs sm:mt-auto md:mx-10 md:mb-6 lg:mx-16">
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
                  <p className="font-mono text-[8px] uppercase tracking-[0.1em] text-bone/80 leading-snug sm:text-[9px] sm:tracking-[0.16em]">
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
      <section id="incluye" className="relative flex min-h-[70vh] flex-col overflow-hidden border-t border-stone/10">
        <Image
          src="/images/ridge-walk.jpg"
          alt="Montañista avanzando sobre una cresta nevada"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover"
        />
        {/* Tinte parejo — evita que el lado derecho de la foto quede sin oscurecer */}
        <div className="absolute inset-0 bg-ink/40" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.8) 22%, rgba(0,0,0,0.4) 35%, rgba(0,0,0,0) 46%)",
          }}
        />
        {/* Franjas superior/inferior — profundidad y legibilidad del borde de sección */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 18%), " +
              "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 22%)",
          }}
        />
        {/* Acento violeta sutil, solo de marca */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 0% 0%, rgba(76,29,149,0.4) 0%, rgba(76,29,149,0.15) 32%, rgba(76,29,149,0) 55%)",
          }}
        />
        <div className="grain absolute inset-0 opacity-40" />

        <div className="relative z-10 grid flex-1 grid-cols-1 items-center gap-12 px-6 py-10 md:px-10 md:py-14 lg:grid-cols-2 lg:gap-16 lg:px-16">
          {/* Left: qué incluye */}
          <Reveal>
            <p className="text-center font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-light sm:text-left">
              Qué incluye
            </p>
            <span className="mx-auto mt-3 block h-0.5 w-10 bg-violet-light sm:mx-0" />
            <h2 className="mt-6 text-center font-display text-3xl uppercase leading-[0.95] text-bone sm:text-left sm:text-4xl">
              Todo lo que necesitás, <span className="text-bone">para</span>{" "}
              <span className="text-gradient-cool sm:whitespace-nowrap">llegar preparado.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-bone/80 sm:mx-0 sm:text-left">
              Te brindamos todo lo necesario para que tu única preocupación
              sea la montaña.
            </p>

            <div className="mx-auto mt-7 grid max-w-sm grid-cols-2 gap-1.5 sm:mx-0 sm:max-w-md sm:grid-cols-3 sm:gap-3">
              {program.incluye.map((item, i) => {
                const Icon = ICON_MAP[item.icon] || Shield;
                return (
                  <div
                    key={i}
                    className="group flex flex-col items-center gap-0 rounded-lg border border-bone/15 bg-bone/5 p-2 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-light/50 hover:bg-bone/10 sm:p-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet/20 transition-colors duration-300 group-hover:bg-violet/35 sm:h-8 sm:w-8">
                      <Icon className="h-3.5 w-3.5 text-violet-light transition-transform duration-300 group-hover:scale-110" strokeWidth={1.6} />
                    </span>
                    <div className="mt-2">
                      <p className="text-xs font-bold uppercase tracking-[0.04em] text-bone">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-snug text-bone/80">
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
            <div id="requisitos" className="relative scroll-mt-24 overflow-hidden rounded-2xl border border-bone/15 bg-violet-dark/60 shadow-[0_8px_40px_rgba(76,29,149,0.35)] backdrop-blur-md lg:ml-auto lg:max-w-sm">
              <div className="relative z-10 p-6 lg:p-7">
                <p className="text-center font-mono text-[9px] font-semibold uppercase tracking-[0.24em] text-teal sm:text-left">
                  Requisitos
                </p>
                <span className="mx-auto mt-2.5 block h-0.5 w-8 bg-violet-light sm:mx-0" />
                <h2 className="mt-4 text-center font-display text-lg uppercase leading-[1.05] text-bone sm:text-left sm:text-xl">
                  <span className="sm:whitespace-nowrap">Para tu seguridad,</span>
                  <br />
                  <span className="text-gradient-cool sm:whitespace-nowrap">exigimos lo mejor.</span>
                </h2>

                <ul className="mt-5 divide-y divide-bone/15">
                  {program.postulacion.requisitos.map((req, i) => {
                    const Icon = REQ_ICONS[i % REQ_ICONS.length];
                    return (
                      <li key={i} className="group flex items-center gap-3 rounded-lg py-2.5 px-2 -mx-2 transition-colors duration-300 hover:bg-bone/10">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal/15 transition-colors duration-300 group-hover:bg-teal/30">
                          <Icon className="h-3.5 w-3.5 text-teal transition-colors duration-300 group-hover:text-teal" strokeWidth={1.8} />
                        </span>
                        <span className="text-sm leading-snug text-bone/90">{req}</span>
                      </li>
                    );
                  })}
                </ul>

                <a
                  href="#postulacion"
                  className="mt-4 flex items-center justify-end gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-bone/85 transition hover:text-bone"
                >
                  Ver requisitos detallados <span>→</span>
                </a>
              </div>
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
            <div className="flex flex-col items-center gap-3 text-center sm:flex-1 sm:flex-row sm:gap-6 sm:text-left">
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-bone/30">
                <span className="absolute inset-0 rounded-full border border-bone/30 animate-ping [animation-duration:2.5s]" />
                <Image
                  src="/images/Logo blanco.png"
                  alt="Cúspides"
                  width={24}
                  height={24}
                  quality={100}
                  className="relative h-5 w-5 object-contain"
                />
              </span>
              <div>
                <h2 className="font-display text-[1.4rem] uppercase text-bone sm:text-xl">
                  Este programa no es para todos.
                </h2>
                <p className="mt-1 max-w-2xl font-mono text-xs leading-relaxed text-bone/85">
                  Si llegaste hasta acá y estás dispuesto a comprometerte con el
                  proceso, el siguiente paso es postularte. El equipo evaluará
                  tu perfil antes de confirmar tu lugar.
                </p>
              </div>
            </div>
            <div className="flex shrink-0 flex-col items-center gap-3 sm:flex-row">
              <a
                href="#postulacion"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-bone bg-bone px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-transparent hover:text-bone"
              >
                Postulate a este programa <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── POSTULACIÓN ─── */}
      <section id="postulacion" className="border-t border-stone/15 px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
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
                  PRIMER PASO
                </p>
                <h3 className="mt-2 text-center font-display text-[1.4rem] uppercase leading-tight text-bone sm:text-left">
                  EL PROCESO EMPIEZA ACÁ.
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
            {related.map((rel, i) => {
              const relDays = rel.ficha.find((f) => f.label === "Días en terreno")?.value ?? "—";
              return (
                <Reveal key={rel.slug} delay={i * 80}>
                  <Link
                    href={`/programas/${rel.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.14)]"
                  >
                    <div className="relative h-52 shrink-0 overflow-hidden">
                      <Image
                        src={rel.image}
                        alt={rel.name}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        quality={90}
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-ink/60 via-ink/0 to-transparent" />
                      <span className="absolute left-4 top-4 z-10 rounded-lg bg-violet px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-bone shadow-md">
                        Grado {rel.grade}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-xl uppercase text-ink">{rel.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-violet-dark">{rel.subtitle}</p>
                      <span className="mt-3 block h-px bg-stone/15" />

                      <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-stone">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-violet-dark" strokeWidth={1.6} />
                          {rel.location.split(",")[0]}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-violet-dark" strokeWidth={1.6} />
                          {relDays}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-1 items-end justify-between border-t border-stone/15 pt-3">
                        <div>
                          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-stone-light">Desde</p>
                          <p className="mt-0.5 font-display text-xl text-ink">${rel.price}</p>
                        </div>
                        <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-violet-dark">
                          Ver ficha <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={1.8} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
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
