// src/config/navigation.ts
import type { TranslationKey } from "../i18n/ui";

export interface NavItem {
  key: string;
  labelKey: TranslationKey;
  path: string;
}

export const navigationItems: NavItem[] = [
  {
    key: "",
    labelKey: "nav.home",
    path: "/",
  },
  {
    key: "about",
    labelKey: "nav.about",
    path: "/about",
  },
  {
    key: "blog",
    labelKey: "nav.blog",
    path: "/blog",
  },
  {
    key: "recruitment",
    labelKey: "nav.recruitment",
    path: "/recruitment",
  },
];
