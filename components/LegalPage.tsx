import { ReactNode } from "react";
import { PageHero } from "@/components/PageHero";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <PageHero
        title={title}
        image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop"
      />
      <section className="bg-surface py-20 px-6 md:px-10">
        <div className="prose prose-slate mx-auto max-w-3xl prose-headings:font-display prose-a:text-emerald-600">
          {children}
        </div>
      </section>
    </>
  );
}
