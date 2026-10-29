import type { MetadataRoute } from "next";
const site = process.env.NEXT_PUBLIC_SITE_URL;
export default function sitemap(): MetadataRoute.Sitemap {
  return site ? [{ url: site, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }] : [];
}