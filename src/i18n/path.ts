// src/i18n/path.ts
import { defaultLang, type Language } from "./ui";
import { routes, type RouteKey } from "./routes";

export function buildPath(lang: Language, key: RouteKey): string {
  const slug = routes[key][lang];

  if (lang === defaultLang) {
    return slug ? `/${slug}` : "/";
  }

  return slug ? `/${lang}/${slug}` : `/${lang}`;
}

export function getRouteUrl(lang: Language, key: RouteKey): string {
  const slug = routes[key][lang];

  if (lang === defaultLang) {
    return slug ? `/${slug}` : "/";
  }

  return slug ? `/${lang}/${slug}` : `/${lang}`;
}
