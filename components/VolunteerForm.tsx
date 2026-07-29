"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all";

export function VolunteerForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1200);
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 rounded-xl3 bg-white p-12 text-center shadow-soft"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"
        >
          <CheckCircle2 className="h-9 w-9" />
        </motion.span>
        <h3 className="font-display text-xl font-bold text-ink">Thank You for Volunteering!</h3>
        <p className="max-w-sm text-sm text-ink-soft">
          We&apos;ve received your details. Our team will reach out within 2&ndash;3 working days
          with next steps.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Submit Another Response
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-xl3 bg-white p-8 shadow-soft md:p-10">
      <div className="grid gap-4 sm:grid-cols-2">
        <input required placeholder="Full Name" className={inputClass} />
        <input required type="email" placeholder="Email Address" className={inputClass} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input required type="tel" placeholder="Phone Number" className={inputClass} />
        <input required placeholder="City" className={inputClass} />
      </div>
      <input placeholder="Skills (e.g. teaching, medical, design)" className={inputClass} />
      <textarea rows={4} placeholder="Tell us why you'd like to volunteer" className={inputClass} />

      <Button type="submit" size="lg" disabled={status === "loading"} className="mt-2">
        <AnimatePresence mode="wait" initial={false}>
          {status === "loading" ? (
            <motion.span key="loading" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Loader2 className="h-5 w-5 animate-spin" /> Submitting...
            </motion.span>
          ) : (
            <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              Submit Application
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
    </form>
  );
}
