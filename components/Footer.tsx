import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube, Sprout, MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "About", href: "/#about" },
  { label: "Vision", href: "/vision-mission" },
  { label: "Mission", href: "/vision-mission" },
  { label: "Donate", href: "/donate" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Contact", href: "/contact" },
];

const policies = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Cancellation & Refund", href: "/refund-policy" },
  { label: "Shipping Policy", href: "/shipping-policy" },
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    // <footer className="bg-[#0B1F14] text-white">
    <footer className="bg-[#1E0A3C] text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 grid gap-10 md:grid-cols-4">
        <div>
          {/* <Link href="/" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-grad-primary">
              <Sprout className="h-5 w-5" />
            </span>
            Modern Dream Foundation
          </Link> */}

<Link href="/" className="flex items-center">
  <Image
    src="/logo.png"
    alt="Modern Dream Foundation"
    width={160}
    height={50}
    className="object-contain brightness-0 invert"
  />
</Link>

          <p className="mt-4 text-sm text-white/60 leading-relaxed">
            Empowering communities through education, healthcare, women&apos;s empowerment,
            environmental sustainability and social welfare.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-emerald-500 transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-sunrise-400 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Policies</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {policies.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-sunrise-400 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
              SEC 5 Rohini, Landmark Near Rithala Mode, Delhi 110085
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0 text-emerald-400" />
              <a href="tel:+918851597933" className="hover:text-sunrise-400">+91 8851597933</a>
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 shrink-0 text-emerald-400" />
              <a href="mailto:info@moderndreamfoundation.com" className="hover:text-sunrise-400 break-all">
                info@moderndreamfoundation.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © 2026 Modern Dream Foundation. All Rights Reserved.
      </div>
    </footer>
  );
}
