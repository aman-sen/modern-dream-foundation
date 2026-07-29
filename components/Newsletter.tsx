"use client";

import { FormEvent, useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section className="bg-grad-primary py-16 px-6 md:px-10">
      <Reveal direction="zoom" className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-xl3 bg-white/10 p-10 text-center backdrop-blur-md md:flex-row md:justify-between md:text-left">
        <div>
          <h3 className="font-display text-2xl font-bold text-white md:text-3xl">Stay Connected</h3>
          <p className="mt-2 text-white/85">Get updates on our programs, health camps and success stories.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex w-full max-w-sm flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            aria-label="Email address"
            className="w-full rounded-full border-0 px-5 py-3 text-sm text-ink placeholder:text-ink-faint focus:ring-2 focus:ring-sunrise-400"
          />
          <Button type="submit" variant="accent" className="shrink-0">
            {submitted ? <CheckCircle2 className="h-5 w-5" /> : <Send className="h-5 w-5" />}
            {submitted ? "Subscribed" : "Subscribe"}
          </Button>
        </form>
      </Reveal>
    </section>
  );
}
