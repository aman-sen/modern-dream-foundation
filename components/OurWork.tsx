"use client";

import Image from "next/image";
import { HeartPulse, Users, Sprout, GraduationCap, Palette, HandHeart, ArrowRight } from "lucide-react";
import { workAreas } from "@/lib/data";
import { Reveal, SectionEyebrow } from "@/components/Reveal";
import { CardGradientBorder } from "@/components/ui/card";

const icons: Record<string, React.ElementType> = {
  HeartPulse,
  Users,
  Sprout,
  GraduationCap,
  Palette,
  HandHeart,
};

export function OurWork() {
  return (
    <section id="our-work" className="bg-section py-24 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>What We Do</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">Our Work</h2>
          <p className="mt-4 text-ink-soft">
            Six pillars of change, working together to build stronger, self-reliant communities.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {workAreas.map((area, i) => {
            const Icon = icons[area.icon];
            return (
              <Reveal key={area.id} delay={i * 0.08}>
                <CardGradientBorder className="group h-full overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-full bg-grad-primary text-white shadow-lift">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-ink">{area.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft line-clamp-3">
                      {area.description}
                    </p>
                    <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:gap-2.5 transition-all">
                      Read More <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </CardGradientBorder>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
