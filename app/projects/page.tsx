import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { PageHero } from "@/components/PageHero";
import { Reveal, SectionEyebrow } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore Modern Dream Foundation's key projects — Vidya Vikas, Harit Sapna, and Digital Sapna.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="Initiatives designed to create lasting change across education, environment and digital empowerment."
        image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="bg-section py-24 px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-2xl text-center mb-14">
            <SectionEyebrow>What We Run</SectionEyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
              Our Key Projects
            </h2>
            <p className="mt-4 text-ink-soft">
              Each project addresses a specific community need with a structured,
              measurable approach.
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.1}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft hover:-translate-y-2 hover:shadow-lift transition-all duration-300">
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-3 left-4 rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs font-semibold text-white">
                      {project.subtitle}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-bold text-ink">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft line-clamp-3 flex-1">
                      {project.summary}
                    </p>
                    <Link
                      href={`/projects/${project.id}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 hover:gap-3 transition-all"
                    >
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}