"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sprout } from "lucide-react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          <motion.span
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-grad-primary text-white shadow-lift"
          >
            <Sprout className="h-8 w-8" />
          </motion.span>
          <p className="mt-5 font-display font-semibold text-ink tracking-wide">
            Modern Dream Foundation
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
