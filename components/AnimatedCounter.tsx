"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export function AnimatedCounter({
  value,
  suffix = "",
  label,
  ring = false,
}: {
  value: number;
  suffix?: string;
  label: string;
  ring?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1800, bounce: 0 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (v) => setDisplay(Math.floor(v)));
  }, [springValue]);

  const circumference = 2 * Math.PI * 34;

  return (
    <div ref={ref} className="flex flex-col items-center text-center gap-2">
      {ring ? (
        <div className="relative h-24 w-24">
          <svg viewBox="0 0 80 80" className="h-24 w-24 -rotate-90">
            <circle cx="40" cy="40" r="34" stroke="rgba(255,255,255,0.15)" strokeWidth="5" fill="none" />
            <motion.circle
              cx="40"
              cy="40"
              r="34"
              stroke="url(#ringGrad)"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={inView ? { strokeDashoffset: circumference * 0.12 } : {}}
              transition={{ duration: 1.6, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F97316" />
                <stop offset="100%" stopColor="#16A34A" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-lg text-white">
            {display}
            {suffix}
          </div>
        </div>
      ) : (
        <span className="font-display font-extrabold text-4xl md:text-5xl text-grad">
          {display}
          {suffix}
        </span>
      )}
      <span className="text-sm md:text-base font-medium text-white/80">{label}</span>
    </div>
  );
}
