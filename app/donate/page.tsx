import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { DonateForm } from "@/components/DonateForm";
import { Reveal, SectionEyebrow } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support Modern Dream Foundation's mission in education, healthcare and women empowerment with your donation.",
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        title="Support Our Mission"
        subtitle="Every contribution helps us reach one more village, one more child, one more family."
        image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="bg-section py-24 px-6 md:px-10">
        <div className="mx-auto max-w-2xl">
          <Reveal className="mb-10 text-center">
            <SectionEyebrow>Give With Confidence</SectionEyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
              Support Our Mission
            </h2>
          </Reveal>
          <Reveal direction="zoom">
            <DonateForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
