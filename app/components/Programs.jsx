import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Mountain,
  Calendar,
  Star,
  ArrowRight,
  Users,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";
import Reveal from "./Reveal";

const programs = [
  {
    slug: "ascenso-tecnico-fitz-roy",
    name: "Ascenso Técnico",
    subtitle: "Cerro Fitz Roy",
    grade: "D",
    cupos: "4 cupos",
    monthsPrep: "4 meses prep.",
    daysExp: "12 días exp.",
    date: "Marzo 2027",
    price: "980.000",
    image: "/images/pinnacle-back.jpg",
  },
  {
    slug: "glaciar-perito-moreno",
    name: "Travesía de Hielo",
    subtitle: "Glaciar Perito Moreno",
    grade: "AD",
    cupos: "6 cupos",
    monthsPrep: "4 meses prep.",
    daysExp: "6 días exp.",
    date: "Noviembre 2026",
    price: "620.000",
    image: "/images/ice-couloir.jpg",
    featured: true,
    features: [
      { icon: Users, title: "Grupos reducidos", detail: "máx. 6 personas" },
      { icon: BadgeCheck, title: "Guías UIAGM", detail: "certificados" },
      { icon: Mountain, title: "Enfoque técnico", detail: "y progresivo" },
      { icon: ShieldCheck, title: "Seguridad", detail: "como prioridad" },
    ],
  },
  {
    slug: "cerro-torre-avanzado",
    name: "Expedición Avanzada",
    subtitle: "Cerro Torre",
    grade: "D+",
    cupos: "2 cupos",
    monthsPrep: "5 meses prep.",
    daysExp: "14 días exp.",
    date: "Enero 2027",
    price: "1.000.000",
    image: "/images/rock-face.png",
  },
];

const initiation = {
  slug: "iniciacion-cordada",
  name: "Iniciación en Cordada",
  subtitle: "Cordón Marconi",
  grade: "PD",
  tagline: "Ideal para empezar",
  cupos: "10 cupos",
  monthsPrep: "3 meses prep.",
  daysExp: "5 días exp.",
  date: "Octubre 2026",
  price: "540.000",
  image: "/images/rope-team.jpg",
};

function MetaRow({ items, className = "" }) {
  return (
    <div className={`flex flex-wrap items-center gap-4 text-xs ${className}`}>
      {items.map(({ icon: Icon, label }) => (
        <span key={label} className="flex items-center gap-1.5">
          <Icon className="h-3.5 w-3.5" strokeWidth={1.6} />
          {label}
        </span>
      ))}
    </div>
  );
}

function StandardCard({ program, delay }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/programas/${program.slug}`}
        className="group flex h-full flex-col overflow-hidden bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="relative h-32 overflow-hidden sm:h-36">
          <Image
            src={program.image}
            alt={program.name}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 bg-violet px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-bone">
            Grado {program.grade}
          </span>
          <span className="absolute right-3 top-3 bg-ink/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-bone">
            {program.cupos}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-4">
          <h3 className="font-display text-lg uppercase text-ink">{program.name}</h3>
          <p className="mt-0.5 text-xs font-semibold text-violet">{program.subtitle}</p>

          <div className="mt-3 border-t border-stone/15 pt-3">
            <MetaRow
              className="text-stone"
              items={[
                { icon: Clock, label: program.monthsPrep },
                { icon: Mountain, label: program.daysExp },
                { icon: Calendar, label: program.date },
              ]}
            />
          </div>

          <div className="mt-3 flex flex-1 items-end justify-between gap-3 border-t border-stone/15 pt-3">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-stone-light">Desde</p>
              <p className="mt-0.5 font-display text-xl text-ink">${program.price}</p>
              <p className="mt-0.5 text-[11px] text-stone-light">ARS · todo incluido</p>
            </div>
            <span className="flex shrink-0 items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-violet">
              Ver ficha <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

function FeaturedCard({ program, delay }) {
  return (
    <Reveal delay={delay} className="lg:-mt-4">
      <Link
        href={`/programas/${program.slug}`}
        className="group relative flex h-full flex-col border-2 border-violet bg-ink shadow-xl transition hover:-translate-y-1"
      >
        <span className="absolute -top-3.5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap bg-violet px-4 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-bone shadow-md">
          <Star className="h-3.5 w-3.5" fill="currentColor" strokeWidth={0} />
          Plan destacado
        </span>

        <div className="relative h-32 overflow-hidden sm:h-36">
          <Image
            src={program.image}
            alt={program.name}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
          <span className="absolute left-3 top-3 bg-violet px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-bone">
            Grado {program.grade}
          </span>
          <span className="absolute right-3 top-3 bg-bone px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-ink">
            {program.cupos}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-4">
          <h3 className="font-display text-lg uppercase text-bone">{program.name}</h3>
          <p className="mt-0.5 text-xs font-semibold text-glacier">{program.subtitle}</p>

          <div className="mt-3 border-t border-bone/15 pt-3">
            <MetaRow
              className="text-bone/70 [&_svg]:text-glacier"
              items={[
                { icon: Clock, label: program.monthsPrep },
                { icon: Mountain, label: program.daysExp },
                { icon: Calendar, label: program.date },
              ]}
            />
          </div>

          <div className="mt-3 flex items-end justify-between gap-3 border-t border-bone/15 pt-3">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-bone/50">Desde</p>
              <p className="mt-0.5 font-display text-xl text-bone">${program.price}</p>
              <p className="mt-0.5 text-[11px] text-bone/50">ARS · todo incluido</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 bg-violet px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-bone transition group-hover:bg-violet-light">
              Ver ficha <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3 border-t border-bone/15 pt-3">
            {program.features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex items-start gap-1.5">
                  <Icon className="h-3.5 w-3.5 shrink-0 text-glacier" strokeWidth={1.6} />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.03em] text-bone">
                      {feature.title}
                    </p>
                    <p className="text-[10px] text-bone/55">{feature.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

function WideCard({ program, delay }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/programas/${program.slug}`}
        className="group flex flex-col overflow-hidden bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:flex-row"
      >
        <div className="relative h-24 w-full shrink-0 overflow-hidden sm:h-auto sm:w-48">
          <Image
            src={program.image}
            alt={program.name}
            fill
            sizes="(min-width: 640px) 192px, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 bg-violet px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-bone">
            Grado {program.grade}
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-violet">
              {program.tagline} · {program.cupos}
            </p>
            <h3 className="mt-1 font-display text-lg uppercase text-ink">{program.name}</h3>
            <p className="mt-0.5 text-xs font-semibold text-violet">{program.subtitle}</p>

            <MetaRow
              className="mt-2 text-stone"
              items={[
                { icon: Clock, label: program.monthsPrep },
                { icon: Mountain, label: program.daysExp },
                { icon: Calendar, label: program.date },
              ]}
            />
          </div>

          <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-2">
            <div className="text-left sm:text-right">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-stone-light">Desde</p>
              <p className="mt-0.5 font-display text-xl text-ink">${program.price}</p>
              <p className="text-[11px] text-stone-light">ARS · todo incluido</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 bg-violet px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.06em] text-bone transition group-hover:bg-violet-light">
              Ver ficha <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export default function Programs() {
  return (
    <section
      id="programas"
      className="flex min-h-screen flex-col justify-center border-t border-stone/15 bg-[#EEF0FB] px-6 py-10 md:px-10 md:py-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-violet">
              Programas 2026—2027
            </p>
            <h2 className="mt-2 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl md:text-5xl">
              Expediciones,
              <br />
              <span className="bg-gradient-to-r text-gradient-purple">
                No excursiones.
              </span>
            </h2>
            <span className="mt-3 block h-0.5 w-10 bg-violet" />
            <p className="mt-3 max-w-md text-sm text-stone">
              Expediciones reales, formación seria, grupos reducidos.
            </p>
          </Reveal>

          <Reveal delay={80} className="flex items-start gap-3 lg:max-w-xs">
            <Mountain className="h-7 w-7 shrink-0 text-violet" strokeWidth={1.4} />
            <div>
              <p className="text-sm leading-relaxed text-stone">
                <span className="font-semibold text-ink">Precios todo incluido:</span>{" "}
                meses de preparación + expedición guiada.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-start">
          {programs.map((program, i) =>
            program.featured ? (
              <FeaturedCard key={program.slug} program={program} delay={i * 80} />
            ) : (
              <StandardCard key={program.slug} program={program} delay={i * 80} />
            )
          )}
        </div>

        <div className="mt-4">
          <WideCard program={initiation} delay={240} />
        </div>

        <Reveal delay={300}>
          <div className="mt-6 flex flex-col items-start justify-between gap-2 border-t border-stone/15 pt-4 sm:flex-row sm:items-center">
            <p className="flex items-center gap-2 text-xs text-stone">
              <Mountain className="h-4 w-4 text-violet" strokeWidth={1.6} />
              Todos los programas incluyen: guía certificado, logística, comidas, equipo grupal y seguros.
            </p>
            <a
              href="#"
              className="text-xs font-semibold text-violet transition hover:text-violet-light"
            >
              Ver qué incluye cada expedición →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
