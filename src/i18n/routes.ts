//i18n/routes.ts
import type { Language } from "./ui";

export type RouteKey = "home" | "about" | "services" | "blog";

export const routes: Record<RouteKey, Record<Language, string>> = {
  home: {
    id: "",
    en: "",
    ar: "",
  },
  about: {
    id: "tentang",
    en: "about",
    ar: "about",
  },
  services: {
    id: "layanan",
    en: "services",
    ar: "services",
  },
  blog: {
    id: "blog",
    en: "blog",
    ar: "blog",
  },
};
