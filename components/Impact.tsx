"use client";

import { impactStats } from "@/lib/data";
import { Reveal, SectionEyebrow } from "@/components/Reveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export function Impact() {
  return (
    // <section id="impact" className="relative overflow-hidden bg-[#0B1F14] py-24 px-6 md:px-10">
    <section id="impact" className="relative overflow-hidden bg-[#1E0A3C] py-24 px-6 md:px-10"> 
    <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>By The Numbers</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">Our Impact</h2>
          <p className="mt-4 text-white/70">
            Every ring represents a promise kept — measured progress toward a better tomorrow.
          </p>
          <p className="mt-2 text-white font-semibold tracking-wide text-lg">
  🇮🇳 Pan India Presence
</p>
        </Reveal>

        {/* <div className="mt-14 grid grid-cols-2 gap-y-10 md:grid-cols-3 lg:grid-cols-6"> */}
       <div className="mt-14 grid grid-cols-2 gap-y-10 md:grid-cols-4 place-items-center">
          {impactStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06}>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} label={stat.label} ring />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
