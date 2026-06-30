"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProgramGallery({ images }) {
  const [offset, setOffset] = useState(0);
  const len = images.length;

  const prev = () => setOffset((o) => (o - 1 + len) % len);
  const next = () => setOffset((o) => (o + 1) % len);

  const visible = [0, 1, 2].map((n) => images[(offset + n) % len]);

  return (
    <div>
      <div className="flex justify-end gap-2 mb-5">
        <button
          onClick={prev}
          aria-label="Anterior"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-bone/25 text-bone/60 transition hover:border-bone hover:text-bone"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          onClick={next}
          aria-label="Siguiente"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-violet text-bone transition hover:bg-violet-light"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {visible.map((src, i) => (
          <div key={`${src}-${i}`} className="relative h-44 overflow-hidden sm:h-52">
            <Image
              src={src}
              alt={`Galería ${i + 1}`}
              fill
              sizes="33vw"
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
