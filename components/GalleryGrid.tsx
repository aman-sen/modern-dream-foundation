"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages, galleryCategories } from "@/lib/data";
import type { GalleryCategory } from "@/types";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory | "All">("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    active === "All" ? galleryImages : galleryImages.filter((g) => g.category === active);

  const openLightbox = (id: string) => {
    const idx = filtered.findIndex((g) => g.id === id);
    setLightboxIndex(idx);
  };

  const close = () => setLightboxIndex(null);
  const next = () => setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length));
  const prev = () =>
    setLightboxIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2.5">
        {["All", ...galleryCategories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat as GalleryCategory | "All")}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-semibold transition-all",
              active === cat
                ? "bg-grad-primary text-white shadow-lift"
                : "bg-section text-ink-soft hover:bg-emerald-50"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        <AnimatePresence>
          {filtered.map((img) => (
            <motion.button
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => openLightbox(img.id)}
              className="group relative block w-full overflow-hidden rounded-xl2 break-inside-avoid shadow-soft"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-sm font-medium text-white">{img.category}</span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-6"
            onClick={close}
          >
            <button
              aria-label="Close"
              onClick={close}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:left-8"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              className="relative max-h-[80vh] max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                width={1000}
                height={700}
                className="max-h-[80vh] w-auto rounded-xl2 object-contain"
              />
              <p className="mt-3 text-center text-sm text-white/70">{filtered[lightboxIndex].alt}</p>
            </motion.div>
            <button
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:right-8"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
