// src/i18n/utils.ts

import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    // Urutan yang benar: ui[lang][key]
    return ui[lang][key] || ui[defaultLang][key];
  };
}

// Helper function untuk mengubah path dengan language
export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, targetLang: string = lang) {
    // Remove leading slash if exists
    path = path.replace(/^\//, "");

    // Remove language prefix if exists
    const pathWithoutLang = path.replace(/^(en|id)\//, "");

    // Add new language prefix
    return `/${targetLang}/${pathWithoutLang}`;
  };
}

// Helper untuk mendapatkan route tanpa language prefix
export function getRouteFromUrl(url: URL) {
  const [, lang, ...rest] = url.pathname.split("/");
  if (lang in ui) {
    return `/${rest.join("/")}`;
  }
  return url.pathname;
}
