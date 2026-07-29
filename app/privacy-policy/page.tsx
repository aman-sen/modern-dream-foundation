import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        Modern Dream Foundation (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your
        privacy. This policy explains what information we collect through this website, how we
        use it, and the choices you have.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We collect information you voluntarily provide, such as your name, email, phone number
        and message, when you fill out a donation, volunteer, newsletter or contact form.
      </p>
      <h2>How We Use Information</h2>
      <p>
        We use your information to respond to inquiries, process donations, coordinate
        volunteering, send updates you&apos;ve opted into, and improve our programs.
      </p>
      <h2>Data Sharing</h2>
      <p>
        We do not sell or rent your personal information. We may share data with trusted payment
        processors solely to complete a transaction.
      </p>
      <h2>Your Choices</h2>
      <p>
        You may unsubscribe from communications at any time or request deletion of your data by
        contacting info@moderndreamfoundation.com.
      </p>
      <p className="text-sm text-ink-faint">Last updated: January 2026.</p>
    </LegalPage>
  );
}
