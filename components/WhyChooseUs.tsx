"use client";

import { ShieldCheck, Users, HandHeart, Sprout, GraduationCap, HeartPulse } from "lucide-react";
import { whyChooseUs } from "@/lib/data";
import { Reveal, SectionEyebrow } from "@/components/Reveal";
import { Card } from "@/components/ui/card";

const icons: Record<string, React.ElementType> = {
  ShieldCheck,
  Users,
  HandHeart,
  Sprout,
  GraduationCap,
  HeartPulse,
};

export function WhyChooseUs() {
  return (
    <section className="bg-surface py-24 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Our Promise</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">Why Choose Us</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 0.07} direction="zoom">
                <Card className="group flex h-full flex-col gap-4 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-grad-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{item.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
