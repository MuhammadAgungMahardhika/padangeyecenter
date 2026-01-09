//i18n/routes.ts
import type { Language } from "./ui";

export type RouteKey = "home" | "about" | "services" | "article";

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
  article: {
    id: "article",
    en: "article",
    ar: "article",
  },
};
