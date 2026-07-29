"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, HeartHandshake, ShieldCheck, Lock, Award } from "lucide-react";
import { donationAmounts } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-sunrise-400 focus:ring-2 focus:ring-sunrise-100 transition-all";

const GOAL = 2500000;
const RAISED = 1725000;

export function DonateForm() {
  const [amount, setAmount] = useState<number>(1000);
  const [custom, setCustom] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const progress = Math.round((RAISED / GOAL) * 100);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("success");
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 rounded-xl3 bg-white p-12 text-center shadow-soft"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sunrise-50 text-sunrise-500">
          <CheckCircle2 className="h-9 w-9" />
        </span>
        <h3 className="font-display text-xl font-bold text-ink">
          Thank You for Your Generosity, ₹{(custom || amount).toLocaleString("en-IN")}!
        </h3>
        <p className="max-w-sm text-sm text-ink-soft">
          Your contribution brings us closer to our mission. A confirmation and 80G receipt
          will be emailed to you shortly.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Make Another Donation
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="rounded-xl3 bg-white p-8 shadow-soft md:p-10">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-baseline justify-between text-sm font-medium text-ink-soft">
          <span>₹{RAISED.toLocaleString("en-IN")} raised</span>
          <span>Goal: ₹{GOAL.toLocaleString("en-IN")}</span>
        </div>
        <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-section">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-full rounded-full bg-grad-warm"
          />
        </div>
        <p className="mt-1 text-xs text-ink-faint">{progress}% of annual goal funded</p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-5">
        <div>
          <p className="mb-2 text-sm font-semibold text-ink">Choose Amount</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {donationAmounts.map((amt) => (
              <button
                type="button"
                key={amt}
                onClick={() => {
                  setAmount(amt);
                  setCustom("");
                }}
                className={cn(
                  "rounded-xl border-2 py-3 text-sm font-semibold transition-all",
                  amount === amt && !custom
                    ? "border-sunrise-500 bg-sunrise-50 text-sunrise-600"
                    : "border-slate-200 text-ink-soft hover:border-sunrise-300"
                )}
              >
                ₹{amt.toLocaleString("en-IN")}
              </button>
            ))}
          </div>
          <input
            type="number"
            min={1}
            placeholder="Custom Amount (₹)"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            className={cn(inputClass, "mt-3")}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <input required placeholder="Full Name" className={inputClass} />
          <input required type="email" placeholder="Email Address" className={inputClass} />
        </div>
        <input required type="tel" placeholder="Phone Number" className={inputClass} />
        <textarea rows={3} placeholder="Message (optional)" className={inputClass} />

        <Button type="submit" variant="accent" size="lg" className="mt-1">
          <HeartHandshake className="h-5 w-5" />
          Donate ₹{(custom || amount || 0).toString()} Now
        </Button>
      </form>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-6 border-t border-slate-100 pt-6">
        <span className="flex items-center gap-1.5 text-xs font-medium text-ink-soft">
          <ShieldCheck className="h-4 w-4 text-emerald-500" /> 80G Tax Exempt
        </span>
        <span className="flex items-center gap-1.5 text-xs font-medium text-ink-soft">
          <Lock className="h-4 w-4 text-emerald-500" /> Secure Payments
        </span>
        <span className="flex items-center gap-1.5 text-xs font-medium text-ink-soft">
          <Award className="h-4 w-4 text-emerald-500" /> Registered Trust
        </span>
      </div>
    </div>
  );
}
