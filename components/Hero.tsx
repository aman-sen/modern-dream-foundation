"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, HeartHandshake, ChevronDown } from "lucide-react";
import { heroSlides, heroStats } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={heroSlides[index]}
            alt="Modern Dream Foundation community outreach"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-grad-hero" />

      {/* Floating organic accent shapes — signature motif */}
      <motion.div
        className="absolute -top-10 right-10 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl animate-float"
        aria-hidden
      />
      <motion.div
        className="absolute bottom-24 left-10 h-40 w-40 rounded-full bg-sunrise-400/20 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="glass-dark mb-5 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white"
        >
          10+ Years of Grassroots Impact
        </motion.span> */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          Together We Can Build A <span className="text-sunrise-400">Better Tomorrow</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg"
        >
          Modern Dream Foundation is dedicated to empowering communities through education,
          healthcare, women&apos;s empowerment, environmental sustainability and social welfare.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <Link href="/donate">
            <Button variant="accent" size="lg" className="w-full sm:w-auto">
              Donate Now <HeartHandshake className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/volunteer">
            <Button
              size="lg"
              className="w-full border-2 border-white/70 bg-white/10 text-white backdrop-blur hover:bg-white/20 sm:w-auto"
            >
              Become Volunteer <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 flex flex-col items-center gap-1 text-white/70"
        >
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </motion.div>
      </div>

      {/* Counters strip */}
      <div className="glass-dark absolute bottom-0 left-0 right-0 hidden grid-cols-4 gap-6 px-8 py-6 md:grid">
        {heroStats.map((s) => (
          <AnimatedCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
        ))}
      </div>
    </section>
  );
}
