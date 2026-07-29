"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Reveal, SectionEyebrow } from "@/components/Reveal";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-section py-24 px-6 md:px-10">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <SectionEyebrow>Voices Of Change</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">What People Say</h2>
        </Reveal>

        <div className="relative mt-12 rounded-xl3 bg-white p-8 shadow-soft md:p-12">
          <Quote className="h-10 w-10 text-emerald-100" />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              <p className="max-w-2xl font-warm italic text-lg leading-relaxed text-ink md:text-xl">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < t.rating ? "fill-sunrise-500 text-sunrise-500" : "text-slate-300"}`}
                  />
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-emerald-100">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="text-xs font-medium text-emerald-600">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-section hover:bg-emerald-100 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-section hover:bg-emerald-100 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
