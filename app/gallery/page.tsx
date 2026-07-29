import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore photos from Modern Dream Foundation's health camps, education drives, and community events.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Our Gallery"
        subtitle="Moments of change captured across health camps, classrooms, and communities."
        image="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1600&auto=format&fit=crop"
      />
      <section className="bg-surface py-20 px-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
