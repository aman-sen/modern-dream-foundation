import type { Metadata } from "next";
import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Reveal, SectionEyebrow } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Modern Dream Foundation. Visit us, call, email, or send a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="We'd love to hear from you — questions, partnerships, or just to say hello."
        image="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="bg-section py-24 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal direction="left">
            <SectionEyebrow>Contact Details</SectionEyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink">Let&apos;s Talk</h2>

            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-ink">Opening Hours</p>
                  <p className="text-sm text-ink-soft">Monday&ndash;Saturday: 10 AM &ndash; 6 PM</p>
                  <p className="text-sm text-ink-soft">Sunday: Closed</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-ink">Address</p>
                  <p className="text-sm text-ink-soft">SEC 5 Rohini, Landmark Near Rithala Mode, Delhi 110085</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sunrise-50 text-sunrise-500">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-ink">Phone</p>
                  <a href="tel:+918851597933" className="text-sm text-ink-soft hover:text-emerald-600">+91 8851597933</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-ink">Email</p>
                  <a href="mailto:info@moderndreamfoundation.com" className="text-sm text-ink-soft hover:text-emerald-600 break-all">
                    info@moderndreamfoundation.com
                  </a>
                </div>
              </li>
            </ul>

            {/* <div className="mt-8 overflow-hidden rounded-xl2 shadow-soft">
              <iframe
                title="Modern Dream Foundation location"
                src="https://www.google.com/maps?q=Rithala,Delhi,110085&output=embed"
                width="100%"
                height="220"
                loading="lazy"
                className="border-0"
              />
            </div> */}
          </Reveal>

          <Reveal direction="right">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
