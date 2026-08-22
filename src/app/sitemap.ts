import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url; // e.g. https://www.cabeazy.in

  const routes = [
    "",
    "/cab-booking",
    "/taxi-booking",
    "/airport-cab-booking",
    "/outstation-cab-booking",
    "/local-cab-booking",
    "/cab-booking/mumbai",
    "/cab-booking/pune",
    "/mumbai-to-pune-cab",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
