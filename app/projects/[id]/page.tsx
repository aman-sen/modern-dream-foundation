import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, Quote } from "lucide-react";
import { projects } from "@/lib/projects";
import { PageHero } from "@/components/PageHero";
import { Reveal, SectionEyebrow } from "@/components/Reveal";
import { Card } from "@/components/ui/card";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

// export function generateMetadata({
//   params,
// }: {
//   params: { id: string };
// }): Metadata {
//   const project = projects.find((p) => p.id === params.id);
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

// export default function ProjectDetailPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const project = projects.find((p) => p.id === params.id);
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <>
      <PageHero
        title={project.title}
        subtitle={project.subtitle}
        image={project.image}
      />

      <div className="bg-surface">
        {/* Summary */}
        <section className="py-16 px-6 md:px-10 border-b border-slate-100">
          <Reveal>
            <div className="mx-auto max-w-4xl">
              <SectionEyebrow>Summary</SectionEyebrow>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                {project.summary}
              </p>
            </div>
          </Reveal>
        </section>

        {/* Challenge */}
        <section className="bg-section py-16 px-6 md:px-10">
          <Reveal>
            <div className="mx-auto max-w-4xl">
              <SectionEyebrow>The Challenge</SectionEyebrow>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink md:text-3xl">
                What We Are Solving
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                {project.challenge}
              </p>
            </div>
          </Reveal>
        </section>

        {/* Solution */}
        <section className="py-16 px-6 md:px-10">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <SectionEyebrow>Our Solution</SectionEyebrow>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink md:text-3xl">
                How We Do It
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {project.solution.map((sol, i) => (
                <Reveal key={sol.heading} delay={i * 0.08}>
                  <Card className="h-full p-6">
                    <h3 className="font-display text-lg font-semibold text-purple-700">
                      {sol.heading}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {sol.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-ink-soft">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-purple-500 mt-0.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Story */}
        {project.impactStory && (
          <section className="bg-[#1E0A3C] py-16 px-6 md:px-10">
            <Reveal direction="zoom">
              <div className="mx-auto max-w-3xl text-center">
                <Quote className="h-10 w-10 text-purple-400/40 mx-auto" />
                <p className="mt-4 font-warm italic text-xl leading-relaxed text-white md:text-2xl">
                  &ldquo;{project.impactStory.quote}&rdquo;
                </p>
                <p className="mt-5 text-sm font-semibold text-purple-300">
                  — {project.impactStory.author}
                </p>
              </div>
            </Reveal>
          </section>
        )}

        {/* Long Term Impact */}
        <section className="bg-section py-16 px-6 md:px-10">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <SectionEyebrow>Long-Term Impact</SectionEyebrow>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink md:text-3xl">
                What We Have Achieved
              </h2>
            </Reveal>
            <ul className="mt-8 space-y-4">
              {project.longTermImpact.map((item, i) => (
                <Reveal key={item} delay={i * 0.06}>
                  <li className="flex items-start gap-3 rounded-xl bg-white px-5 py-4 shadow-soft">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-purple-600 mt-0.5" />
                    <span className="text-ink-soft">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Goal */}
        <section className="py-16 px-6 md:px-10">
          <Reveal direction="zoom">
            <div className="mx-auto max-w-3xl rounded-2xl bg-grad-primary p-10 text-center shadow-lift">
              <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                Our Goal
              </h3>
              <p className="mt-4 text-white/90 leading-relaxed">
                {project.goal}
              </p>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}