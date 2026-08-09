"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Top info bar */}
      <div
        className={cn(
          "hidden md:flex items-center justify-end gap-6 px-8 text-xs transition-all duration-300 overflow-hidden",
          solid ? "h-9 bg-purple-900 text-white" : "h-9 bg-black/20 text-white"
        )}
      >
        <a href="tel:+918851597933" className="flex items-center gap-1.5 hover:text-orange-300 transition-colors">
          <Phone className="h-3.5 w-3.5" /> +91 8851597933
        </a>
        <a href="mailto:info@moderndreamfoundation.com" className="flex items-center gap-1.5 hover:text-orange-300 transition-colors">
          <Mail className="h-3.5 w-3.5" /> info@moderndreamfoundation.com
        </a>
      </div>

      <nav
        className={cn(
          "flex items-center justify-between px-6 md:px-10 transition-all duration-300",
          solid ? "h-20 bg-white/95 backdrop-blur-md shadow-soft" : "h-24 bg-transparent"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="Modern Dream Foundation"
            width={120}
            height={80}
            className="object-contain w-auto h-16"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-7 font-medium text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "relative transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full",
                  solid ? "text-ink hover:text-purple-700" : "text-white hover:text-orange-300"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link href="/donate" className="hidden md:block">
            <Button variant="accent" size="sm" className="shadow-lift">
              Donate Now
            </Button>
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className={cn(
              "lg:hidden rounded-full p-2",
              solid ? "text-ink" : "text-white"
            )}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-soft overflow-hidden"
          >
            <ul className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-ink font-medium hover:bg-purple-50 hover:text-purple-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="px-4 pt-2">
                <Link href="/donate" onClick={() => setOpen(false)}>
                  <Button variant="accent" className="w-full">Donate Now</Button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}