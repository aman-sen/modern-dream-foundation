import type { Metadata } from "next";
import { Eye, Target } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal, SectionEyebrow } from "@/components/Reveal";
import { Card } from "@/components/ui/card";
import { timeline } from "@/lib/data";

export const metadata: Metadata = {
  title: "Vision & Mission",
  description:
    "Discover the vision and mission driving Modern Dream Foundation's work in health, education and community empowerment.",
};

export default function VisionMissionPage() {
  return (
    <>
      <PageHero
        title="Vision & Mission"
        subtitle="The purpose that guides every program we run and every life we touch."
        image="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="bg-surface py-24 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <Reveal direction="left">
            <Card className="h-full p-9">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Eye className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold text-ink">Our Vision</h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Our Vision is to inspire a healthier, happier, and more sustainable society by
                empowering individuals and communities through holistic health, education and
                social welfare initiatives.
              </p>
            </Card>
          </Reveal>

          <Reveal direction="right">
            <Card className="h-full p-9">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                <Target className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold text-ink">Our Mission</h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Modern Dream Foundation aims to build an inclusive and thriving society where
                every individual&mdash;regardless of age, gender, or background&mdash;has the
                opportunity to thrive through access to wellness, education, emotional support,
                livelihood opportunities and meaningful cultural engagement.
              </p>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="bg-section py-24 px-6 md:px-10">
        <div className="mx-auto max-w-4xl">
          <Reveal className="text-center">
            <SectionEyebrow>Our Journey</SectionEyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">Milestones</h2>
          </Reveal>

          <div className="relative mt-14 pl-8">
            <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-emerald-400 via-sky-400 to-sunrise-400" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <Reveal key={item.year} direction="left" delay={i * 0.08}>
                  <div className="relative">
                    <span className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-grad-primary ring-4 ring-white shadow-soft" />
                    <p className="font-display text-sm font-bold text-emerald-600">{item.year}</p>
                    <h3 className="mt-1 font-display text-lg font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
