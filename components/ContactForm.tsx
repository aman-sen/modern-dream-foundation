"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-xl3 bg-white p-8 shadow-soft md:p-10">
      <div className="grid gap-4 sm:grid-cols-2">
        <input required placeholder="Full Name" className={inputClass} />
        <input required type="email" placeholder="Email Address" className={inputClass} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input required type="tel" placeholder="Phone Number" className={inputClass} />
        <input required placeholder="Subject" className={inputClass} />
      </div>
      <textarea required rows={5} placeholder="Your Message" className={inputClass} />

      <Button type="submit" variant="secondary" size="lg" className="mt-1">
        {sent ? <CheckCircle2 className="h-5 w-5" /> : <Send className="h-5 w-5" />}
        {sent ? "Message Sent!" : "Send Message"}
      </Button>

      {sent && (
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-sm font-medium text-emerald-600"
        >
          We&apos;ll get back to you within 24 hours.
        </motion.p>
      )}
    </form>
  );
}
