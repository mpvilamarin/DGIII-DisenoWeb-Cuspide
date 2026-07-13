"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function PostulationForm({ programName }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    experiencia: "",
    motivacion: "",
  });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-xl sm:p-10">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-violet/10 text-violet-dark">
          ✓
        </span>
        <p className="mt-5 font-display text-2xl uppercase text-ink">
          ¡Listo!
        </p>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-stone">
          Te contactamos en menos de 5 días hábiles sobre tu postulación a{" "}
          <span className="text-violet-dark">{programName}</span>.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-violet/30 bg-white px-4 py-3 text-sm text-ink placeholder:text-stone-light outline-none transition focus:border-violet focus:ring-2 focus:ring-violet/15";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 shadow-xl sm:p-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="nombre"
          required
          value={form.nombre}
          onChange={handleChange}
          placeholder="Nombre completo"
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
          className={inputClass}
        />
        <input
          type="tel"
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
          placeholder="Teléfono (opcional)"
          className={inputClass}
        />
        <div className="relative">
          <select
            name="experiencia"
            required
            value={form.experiencia}
            onChange={handleChange}
            className={`${inputClass} custom-select cursor-pointer appearance-none pr-10 ${form.experiencia ? "" : "text-stone-light"}`}
          >
            <option value="" disabled className="text-stone-light">
              Nivel de experiencia
            </option>
            <option value="sin-experiencia" className="text-ink">Sin experiencia técnica</option>
            <option value="pd" className="text-ink">PD — Peu Difficile</option>
            <option value="ad" className="text-ink">AD — Assez Difficile</option>
            <option value="d" className="text-ink">D — Difficile</option>
            <option value="d-plus" className="text-ink">D+ — Très Difficile</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone" strokeWidth={1.8} />
        </div>
      </div>

      <textarea
        name="motivacion"
        required
        rows={3}
        value={form.motivacion}
        onChange={handleChange}
        placeholder="Describí tu experiencia en montaña y por qué querés sumarte a este programa"
        className={`${inputClass} mt-4 resize-none`}
      />

      <button
        type="submit"
        className="group mt-5 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-violet py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-bone transition hover:bg-violet-dark sm:w-auto sm:px-8"
      >
        Postularme
        <span className="transition group-hover:translate-x-1">→</span>
      </button>
    </form>
  );
}
