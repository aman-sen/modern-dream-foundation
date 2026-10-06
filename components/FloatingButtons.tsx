// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowUp, MessageCircle, HeartHandshake } from "lucide-react";

// export function FloatingButtons() {
//   const [showTop, setShowTop] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setShowTop(window.scrollY > 500);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3">
//       <AnimatePresence>
//         {showTop && (
//           <motion.button
//             initial={{ opacity: 0, scale: 0.6 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.6 }}
//             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//             aria-label="Back to top"
//             className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lift hover:bg-emerald-600 transition-colors"
//           >
//             <ArrowUp className="h-5 w-5" />
//           </motion.button>
//         )}
//       </AnimatePresence>

//       <Link
//         href="/donate"
//         aria-label="Donate now"
//         className="flex h-14 w-14 items-center justify-center rounded-full bg-sunrise-500 text-white shadow-lift hover:bg-sunrise-600 transition-colors animate-float"
//       >
//         <HeartHandshake className="h-6 w-6" />
//       </Link>

//       <a
//         href="https://wa.me/918851597933"
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Chat on WhatsApp"
//         className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift hover:brightness-95 transition-all"
//       >
//         <MessageCircle className="h-6 w-6" fill="white" />
//       </a>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, HeartHandshake, X, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all";

function QuickContactForm({ onClose }: { onClose: () => void }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2500);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className="absolute bottom-16 right-0 w-80 rounded-2xl bg-white shadow-lift border border-slate-100 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-grad-primary px-5 py-4 flex items-center justify-between">
        <div>
          <p className="font-display font-semibold text-white">Send us a message</p>
          <p className="text-xs text-white/80 mt-0.5">We reply within 24 hours</p>
        </div>
        <button
          onClick={onClose}
          aria-label="Close contact form"
          className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Form */}
      <div className="p-4">
        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-3 py-6 text-center"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="h-7 w-7" />
            </span>
            <p className="font-semibold text-ink">Message Sent!</p>
            <p className="text-xs text-ink-soft">We&apos;ll get back to you shortly.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input required placeholder="Full Name" className={inputClass} />
            <input required type="email" placeholder="Email Address" className={inputClass} />
            {/* <input required type="tel" placeholder="Phone Number" className={inputClass} /> */}
            <input required type="tel" placeholder="Phone Number" pattern="[0-9]{10}" maxLength={10} inputMode="numeric" onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} className={inputClass} />
            <textarea
              required
              rows={3}
              placeholder="Your Message"
              className={inputClass}
            />
            <Button type="submit" variant="secondary" size="sm" className="w-full mt-1">
              <Send className="h-4 w-4" /> Send Message
            </Button>
          </form>
        )}
      </div>
    </motion.div>
  );
}

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3">
      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lift hover:bg-emerald-600 transition-colors"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Donate button */}
      <Link
        href="/donate"
        aria-label="Donate now"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-sunrise-500 text-white shadow-lift hover:bg-sunrise-600 transition-colors animate-float"
      >
        <HeartHandshake className="h-6 w-6" />
      </Link>

      {/* Contact form popup */}
      <div className="relative">
        <AnimatePresence>
          {showForm && <QuickContactForm onClose={() => setShowForm(false)} />}
        </AnimatePresence>

        <button
          onClick={() => setShowForm((o) => !o)}
          aria-label="Open contact form"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-white shadow-lift hover:bg-sky-600 transition-colors"
        >
          <AnimatePresence mode="wait" initial={false}>
            {showForm ? (
              <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X className="h-6 w-6" />
              </motion.span>
            ) : (
              <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <Send className="h-6 w-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}