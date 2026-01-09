// src/config/navigation.ts
import type { TranslationKey } from "../i18n/ui";
import type { RouteKey } from "../i18n/routes";

export interface NavItem {
  key: RouteKey;
  labelKey: TranslationKey;
}

export const navigationItems: NavItem[] = [
  { key: "home", labelKey: "nav.home" },
  { key: "about", labelKey: "nav.about" },
  { key: "services", labelKey: "nav.services" },
  { key: "article", labelKey: "nav.article" },
];
