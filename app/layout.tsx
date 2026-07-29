import type { Metadata } from "next";
import { Sora, Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { ScrollProgress } from "@/components/ScrollProgress";
import { LoadingScreen } from "@/components/LoadingScreen";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["400", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "600", "700"] });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", style: ["italic", "normal"], weight: ["400", "500"] });

const siteUrl = "https://www.moderndreamfoundation.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Modern Dream Foundation | Empowering Communities",
    template: "%s | Modern Dream Foundation",
  },
  description:
    "Modern Dream Foundation is a non-profit organization dedicated to education, healthcare, women empowerment, environmental sustainability and social welfare.",
  keywords: [
    "NGO India",
    "non-profit",
    "women empowerment",
    "health camps",
    "education charity",
    "Delhi NGO",
    "donate India",
  ],
  authors: [{ name: "Modern Dream Foundation" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Modern Dream Foundation",
    title: "Modern Dream Foundation | Empowering Communities",
    description:
      "A non-profit dedicated to education, healthcare, women empowerment, environmental sustainability and social welfare.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Modern Dream Foundation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Dream Foundation | Empowering Communities",
    description:
      "A non-profit dedicated to education, healthcare, women empowerment, environmental sustainability and social welfare.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  // icons: { icon: "/favicon.ico" },
//   icons: {
//   icon: [
//     { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
//     { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
//   ],
//   apple: "/apple-touch-icon.png",
//   shortcut: "/favicon.ico",
// },
icons: {
  icon: "/logo.png",
  shortcut: "/favicon.ico",
},
};

const schema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Modern Dream Foundation",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Non-profit trust dedicated to education, healthcare, women empowerment, environmental sustainability and social welfare.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "SEC 5 Rohini, Landmark Near Rithala Mode",
    addressLocality: "Delhi",
    postalCode: "110085",
    addressCountry: "IN",
  },
  telephone: "+91-8851597933",
  email: "info@moderndreamfoundation.com",
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${newsreader.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        <LoadingScreen />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
