import type { MetadataRoute } from "next";

const base = "https://www.moderndreamfoundation.com";

const routes = [
  "",
  "/vision-mission",
  "/gallery",
  "/volunteer",
  "/donate",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/refund-policy",
  "/shipping-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
