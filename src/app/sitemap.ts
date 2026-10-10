import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { tours } from "@/data/tours";
import { posts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  // Cache Components: derleme anında sabit zaman damgası kullan.
  const lastModified = new Date("2026-10-10");

  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/aktiviteler", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/kapadokya-rehberi", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/galeri", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/hakkimizda", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/iletisim", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/rezervasyon", priority: 0.8, changeFrequency: "yearly" as const },
  ].map((r) => ({
    url: `${site.domain}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const tourRoutes: MetadataRoute.Sitemap = tours.map((t) => ({
    url: `${site.domain}/aktiviteler/${t.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${site.domain}/kapadokya-rehberi/${p.slug}`,
    lastModified: p.updatedAt ? new Date(p.updatedAt) : new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...tourRoutes, ...postRoutes];
}
