import type { Metadata } from "next";
import { HandHeart, Users, Clock, Sparkles } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { VolunteerForm } from "@/components/VolunteerForm";
import { Reveal, SectionEyebrow } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Become a Volunteer",
  description: "Join Modern Dream Foundation as a volunteer and help empower communities across India.",
};

const perks = [
  { icon: HandHeart, text: "Make a direct, measurable impact on real lives" },
  { icon: Users, text: "Join a community of 150+ passionate volunteers" },
  { icon: Clock, text: "Flexible commitments to fit your schedule" },
  { icon: Sparkles, text: "Gain hands-on experience in social impact work" },
];

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        title="Become a Volunteer"
        subtitle="Lend your time, skills, and heart to communities that need it most."
        image="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="bg-section py-24 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal direction="left">
            <SectionEyebrow>Join The Movement</SectionEyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
              Why Volunteer With Us?
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Whether you can spare a weekend or a season, your time helps us reach further &mdash;
              from rural health camps to classrooms and skill-training workshops.
            </p>

            <ul className="mt-8 space-y-5">
              {perks.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="pt-2 text-sm text-ink-soft">{text}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="right">
            <VolunteerForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
