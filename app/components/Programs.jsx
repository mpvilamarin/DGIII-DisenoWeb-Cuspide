import Image from "next/image";
import Link from "next/link";
import { Clock, Mountain, Calendar, Star, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const programs = [
  {
    slug: "ascenso-tecnico-fitz-roy",
    name: "Ascenso Técnico",
    subtitle: "Cerro Fitz Roy",
    grade: "D",
    cupos: "4 cupos",
    days: "12 días",
    exigencia: "Alta exigencia",
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
    days: "6 días",
    exigencia: "Alta exigencia",
    date: "Noviembre 2026",
    price: "620.000",
    image: "/images/ice-couloir.jpg",
    featured: true,
  },
  {
    slug: "cerro-torre-avanzado",
    name: "Expedición Avanzada",
    subtitle: "Cerro Torre",
    grade: "D+",
    cupos: "2 cupos",
    days: "14 días",
    exigencia: "Alta exigencia",
    date: "Enero 2027",
    price: "1.000.000",
    image: "/images/rock-face.png",
  },
];

function MetaRow({ days, exigencia, date, light }) {
  const cls = light ? "text-bone/70" : "text-stone";
  const iconCls = light ? "text-teal" : "";
  return (
    <div className={`flex flex-wrap items-center gap-5 text-xs ${cls}`}>
      <span className="flex items-center gap-1.5">
        <Clock className={`h-3.5 w-3.5 ${iconCls}`} strokeWidth={1.6} />
        {days}
      </span>
      <span className="flex items-center gap-1.5">
        <Mountain className={`h-3.5 w-3.5 ${iconCls}`} strokeWidth={1.6} />
        {exigencia}
      </span>
      <span className="flex items-center gap-1.5">
        <Calendar className={`h-3.5 w-3.5 ${iconCls}`} strokeWidth={1.6} />
        {date}
      </span>
    </div>
  );
}

function StandardCard({ program, delay }) {
  return (
    <Reveal delay={delay} className="h-full lg:scale-[0.96] lg:opacity-90">
      <Link
        href={`/programas/${program.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:opacity-100 hover:shadow-[0_8px_32px_rgba(0,0,0,0.14)]"
      >
        <div className="relative h-48 shrink-0 overflow-hidden">
          <Image
            src={program.image}
            alt={program.name}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            quality={90}
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col p-4">
          <h3 className="font-display text-lg uppercase text-ink">{program.name}</h3>
          <p className="mt-1 text-sm font-semibold text-stone">{program.subtitle}</p>
          <span className="mt-2.5 block h-px bg-stone/15" />

          <div className="mt-3">
            <MetaRow days={program.days} exigencia={program.exigencia} date={program.date} />
          </div>

          <div className="mt-3 flex flex-1 items-end justify-between border-t border-stone/15 pt-3">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-stone-light">Desde</p>
              <p className="mt-0.5 font-display text-xl text-ink">${program.price}</p>
              <p className="mt-0.5 text-[11px] text-stone-light">ARS · todo incluido</p>
            </div>
            <ArrowRight className="h-5 w-5 text-stone transition group-hover:translate-x-1" strokeWidth={1.8} />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

function FeaturedCard({ program, delay }) {
  return (
    <Reveal delay={delay} className="relative z-20 h-full lg:scale-[1.1] lg:-translate-y-3">
      <Link
        href={`/programas/${program.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl bg-ink shadow-[0_20px_50px_rgba(76,29,149,0.4)] ring-2 ring-teal/40 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(76,29,149,0.5)]">
        <div className="relative h-48 shrink-0 overflow-hidden">
          <Image
            src={program.image}
            alt={program.name}
            fill
            sizes="(min-width: 1024px) 36vw, 100vw"
            quality={90}
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />

          <span className="rounded-lg absolute left-4 top-4 z-10 flex items-center gap-1.5 whitespace-nowrap bg-violet px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-bone shadow-md">
            <Star className="h-3.5 w-3.5" fill="currentColor" strokeWidth={0} />
            Plan destacado
          </span>
        </div>

        <div className="flex flex-1 flex-col p-4">
          <h3 className="font-display text-lg uppercase text-bone">{program.name}</h3>
          <p className="mt-1 text-sm font-semibold text-violet-light">{program.subtitle}</p>
          <span className="mt-2.5 block h-px bg-bone/15" />

          <div className="mt-3">
            <MetaRow days={program.days} exigencia={program.exigencia} date={program.date} light />
          </div>

          <div className="mt-3 flex flex-1 items-end justify-between border-t border-bone/15 pt-3">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-bone/50">Desde</p>
              <p className="mt-0.5 font-display text-xl text-bone">${program.price}</p>
              <p className="mt-0.5 text-[11px] text-bone/50">ARS · todo incluido</p>
            </div>
            <ArrowRight className="h-5 w-5 text-teal transition group-hover:translate-x-1" strokeWidth={1.8} />
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
      className="flex min-h-screen flex-col justify-center border-t border-stone/15 px-6 pt-16 pb-10 md:px-10 md:pt-20 md:pb-12"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="text-center sm:text-left">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-stone">
              Expediciones destacadas
            </p>
            <span className="mx-auto mt-4 block h-0.5 w-12 bg-violet-light sm:mx-0" />
            <h2 className="mt-7 font-display text-[1.75rem] uppercase leading-[0.95] text-ink sm:text-3xl md:text-4xl">
              <span className="bg-linear-to-r text-gradient-cool">Elegí tu próxima</span>
              <br />
              cumbre.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-stone sm:mx-0">
              Programas diseñados para llevarte más allá, con seguridad y propósito.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {programs.map((program, i) =>
            program.featured ? (
              <FeaturedCard key={program.slug} program={program} delay={i * 80} />
            ) : (
              <StandardCard key={program.slug} program={program} delay={i * 80} />
            )
          )}
        </div>

        <Reveal delay={240}>
          <div className="mt-8 text-center lg:mt-10">
            <Link
              href="/programas"
              className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-stone transition hover:text-ink"
            >
              Ver todos los programas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
