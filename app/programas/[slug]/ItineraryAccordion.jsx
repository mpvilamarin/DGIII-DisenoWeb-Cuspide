"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function ItineraryAccordion({ itinerario }) {
  const [open, setOpen] = useState(null);

  return (
    <ol className="divide-y divide-stone/10">
      {itinerario.map((day, i) => (
        <li key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:bg-stone/5 -mx-2 px-2 rounded"
          >
            <div className="flex items-center gap-0 flex-1 min-w-0">
              <span className="w-20 shrink-0 font-mono text-[9px] uppercase tracking-[0.2em] text-stone-light">
                {day.dia.toUpperCase()}
              </span>
              <span className="mx-3 h-3 w-px shrink-0 bg-stone/25" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-ink truncate">
                {day.titulo}
              </span>
            </div>
            <span className="shrink-0 text-violet">
              {open === i
                ? <Minus className="h-3.5 w-3.5" />
                : <Plus className="h-3.5 w-3.5" />}
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === i ? "max-h-40 pb-4" : "max-h-0"
            }`}
          >
            <p className="pl-[5.5rem] font-mono text-[10px] leading-relaxed text-stone-light">
              {day.descripcion}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
