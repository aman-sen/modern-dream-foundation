"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "zoom" | "none";

function getOffset(direction: Direction): { x: number; y: number; scale: number } {
  switch (direction) {
    case "left":
      return { x: -50, y: 0, scale: 1 };
    case "right":
      return { x: 50, y: 0, scale: 1 };
    case "zoom":
      return { x: 0, y: 0, scale: 0.9 };
    case "none":
      return { x: 0, y: 0, scale: 1 };
    case "up":
    default:
      return { x: 0, y: 40, scale: 1 };
  }
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const { x, y, scale } = getOffset(direction);
  return (
    <motion.div
      initial={{ opacity: 0, x, y, scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow">
      <span className="h-1.5 w-1.5 rounded-full bg-sunrise-500" />
      {children}
    </span>
  );
}
