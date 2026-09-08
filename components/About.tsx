"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { aboutFocus } from "@/lib/data";
import { Reveal, SectionEyebrow } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="bg-surface py-24 px-6 md:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <Reveal direction="left">
          <SectionEyebrow>Who We Are</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
            About Modern Dream Foundation
          </h2>
          <p className="mt-5 text-ink-soft leading-relaxed font-warm italic text-lg">
            &ldquo;True transformation begins with the well-being of individuals&mdash;physically,
            mentally, and emotionally&mdash;and extends to the empowerment of entire communities.&rdquo;
          </p>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Modern Dream Foundation is a non-profit trust dedicated to building a healthier,
            happier, and more sustainable society. Our work spans:
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {aboutFocus.map((item, i) => (
              <Reveal key={item} direction="up" delay={i * 0.05}>
                <div className="flex items-center gap-2 rounded-xl bg-section px-4 py-3 text-sm font-medium text-ink shadow-sm">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal direction="right" className="relative">
  <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-xl3 shadow-lift">
    <Image
      src="/about-photo.jpg"
      alt="Modern Dream Foundation community work"
      fill
      className="object-cover"
    />
  </div>
</Reveal>
      </div>
    </section>
  );
}
