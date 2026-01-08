import { type Language } from "../i18n/ui";

export interface ServiceItem {
  name: string;
}

export interface Service {
  slug: string;
  category: string;
  description: string;
  items: ServiceItem[];
  icon: "eye" | "shield" | "spark";
  color: "orange" | "green" | "gradient";
}

export const getServices = (lang: Language): Service[] => {
  const data: Record<Language, Service[]> = {
    id: [
      {
        slug: "katarak",
        category: "Layanan Katarak",
        description: "Solusi bedah katarak modern dengan pemulihan cepat.",
        icon: "shield",
        color: "green",
        items: [
          { name: "Phacoemulsification" },
          { name: "SICS (Small Incision)" },
          { name: "Lensa Premium (IOL)" },
        ],
      },
      {
        slug: "pemeriksaan-mata",
        category: "Pemeriksaan Mata",
        description: "Diagnostik lengkap untuk kesehatan mata keluarga.",
        icon: "eye",
        color: "orange",
        items: [
          { name: "Periksa Mata Umum" },
          { name: "Screening Glaukoma" },
          { name: "Retina Imaging" },
        ],
      },
      {
        slug: "lasik",
        category: "Layanan LASIK",
        description: "Segera hadir",
        icon: "spark",
        color: "gradient",
        items: [{ name: "Pre-Lasik Examination" }, { name: "Femto-LASIK" }],
      },
    ],
    en: [
      {
        slug: "cataract",
        category: "Cataract Services",
        description: "Modern cataract surgery solutions with fast recovery.",
        icon: "shield",
        color: "green",
        items: [
          { name: "Phacoemulsification" },
          { name: "SICS" },
          { name: "Premium Lens" },
        ],
      },
      {
        slug: "eye-examination",
        category: "Eye Examination",
        description: "Comprehensive diagnostics for family eye health.",
        icon: "eye",
        color: "orange",
        items: [
          { name: "General Check" },
          { name: "Glaucoma" },
          { name: "Retina" },
        ],
      },
      {
        slug: "lasik",
        category: "LASIK Services",
        description: "Cooming soon",
        icon: "spark",
        color: "gradient",
        items: [{ name: "Pre-Lasik" }, { name: "Femto-LASIK" }],
      },
    ],
    ar: [
      {
        slug: "cataract",
        category: "خدمات المياه البيضاء",
        description: "حلول جراحة المياه البيضاء الحديثة مع تعافي سريع.",
        icon: "shield",
        color: "green",
        items: [{ name: "تفتيت العدسة" }, { name: "جراحة الشق الصغير" }],
      },
      {
        slug: "eye-exam",
        category: "فحص العين",
        description: "تشخيص شامل لصحة عيون الأسرة.",
        icon: "eye",
        color: "orange",
        items: [{ name: "فحص العين العام" }, { name: "فحص الجلوكوما" }],
      },
      {
        slug: "lasik",
        category: "خدمات الليزك",
        description: "حل بدون نظارات بأحدث التقنيات.",
        icon: "spark",
        color: "gradient",
        items: [{ name: "فحص ما قبل الليزك" }, { name: "فيمتو ليزك" }],
      },
    ],
  };
  return data[lang] || data.id;
};
