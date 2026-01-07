// src/i18n/ui.ts
import { about } from "./about";
export const languages = {
  en: "English",
  id: "Indonesia",
  ar: "العربية",
} as const;
export type Language = keyof typeof languages;
export const defaultLang = "id";

// Define the translation keys interface
export interface TranslationKeys {
  // Navigation
  "nav.home": string;
  "nav.about": string;
  "nav.services": string;
  "nav.doctors": string;
  "nav.contact": string;
  "nav.blog": string;
  "nav.recruitment": string;

  // Hero Section
  "hero.badge": string;
  "hero.subtitle": string;
  "hero.cta.services": string;
  "hero.cta.appointment": string;
  "hero.stats.patients": string;
  "hero.stats.success": string;

  // Promo Section
  "promo.badge": string;
  "promo.title": string;
  "promo.subtitle": string;
  "promo.badge.discount": string;
  "promo.badge.package": string;
  "promo.badge.limited": string;
  "promo.cta": string;

  // Services Section.
  "services.badge": string;
  "services.title": string;
  "services.subtitle": string;
  "services.cta": string;

  // Doctors Section
  "doctors.title": string;
  "doctors.subtitle": string;
  "doctors.education": string;
  "doctors.schedule": string;
  "doctors.cta": string;

  // CTA Section
  "cta.title": string;
  "cta.description": string;
  "cta.phoneNumber": string;
  "cta.phone": string;
  "cta.whatsapp": string;

  // Footer
  "footer.copyright": string;
  "footer.contact": string;
  "footer.address": string;
  "footer.phone": string;
  "footer.email": string;

  // Common
  "common.read-more": string;
  "common.back": string;
  "common.loading": string;
  "common.close": string;
  "common.open": string;
  "common.search": string;

  // #2 About page
  "about.title": string;
  "about.p1": string;
  "about.p2": string;
  "about.p3": string;
}

// UI translations type - each language must implement TranslationKeys
export type UITranslations = {
  [K in keyof typeof languages]: TranslationKeys;
};

export const ui: UITranslations = {
  id: {
    // Navigation
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.services": "Layanan",
    "nav.doctors": "Dokter",
    "nav.contact": "Kontak",
    "nav.blog": "Blog",
    "nav.recruitment": "Rekrutmen",

    // Hero Section
    "hero.badge": "Terpercaya Sejak 2009",
    "hero.subtitle":
      "Pusat layanan kesehatan mata terlengkap dengan teknologi modern dan tim dokter spesialis berpengalaman di Sumatera Barat, Indonesia.",
    "hero.cta.services": "Layanan Kami",
    "hero.cta.appointment": "Buat Janji",
    "hero.stats.patients": "Pasien Puas",
    "hero.stats.success": "Sukses Rate",

    // Services Section
    "services.badge": "Layanan Kami",
    "services.title": "Dapatkan layanan terbaik untuk mata anda",
    "services.subtitle": "Perawatan mata komprehensif dengan teknologi terkini",
    "services.cta": "Pelajari lebih lanjut",

    // Doctors Section
    "doctors.title": "Jadwal Dokter Spesialis",
    "doctors.subtitle":
      "dokter spesialis mata berpengalaman siap melayani Anda",
    "doctors.education": "Pendidikan",
    "doctors.schedule": "Jadwal Praktek",
    "doctors.cta": "Lihat Detail",

    // Promo Section
    "promo.badge": "Penawaran Spesial",
    "promo.title": "Promo Bulan Ini",
    "promo.subtitle": "Dapatkan penawaran terbaik untuk kesehatan mata Anda",
    "promo.badge.discount": "Diskon",
    "promo.badge.package": "Paket Hemat",
    "promo.badge.limited": "Terbatas",
    "promo.cta": "Ambil Promo",

    // CTA Section
    "cta.title": "Siap Merawat Kesehatan Mata Anda?",
    "cta.description":
      "Hubungi kami untuk konsultasi dan jadwalkan pemeriksaan mata Anda",
    "cta.phoneNumber": "627514681000",
    "cta.phone": "(0751) 4681000",
    "cta.whatsapp": "WhatsApp Kami",

    // Footer
    "footer.copyright": "© 2024 Padang Eye Center. Hak cipta dilindungi.",
    "footer.contact": "Hubungi Kami",
    "footer.address": "Alamat",
    "footer.phone": "Telepon",
    "footer.email": "Email",

    // Common
    "common.read-more": "Baca Selengkapnya",
    "common.back": "Kembali",
    "common.loading": "Memuat...",
    "common.close": "Tutup",
    "common.open": "Buka",
    "common.search": "Cari",

    // #2 About page
    ...about.id,
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.doctors": "Doctors",
    "nav.contact": "Contact",
    "nav.blog": "Blog",
    "nav.recruitment": "Recruitment",

    // Hero Section
    "hero.badge": "Trusted Since 2009",
    "hero.subtitle":
      "The most complete eye health service center with modern technology and a team of experienced specialist doctors in West Sumatra, Indonesia.",
    "hero.cta.services": "Our Services",
    "hero.cta.appointment": "Make Appointment",
    "hero.stats.patients": "Happy Patients",
    "hero.stats.success": "Success Rate",

    // Promo Section
    "promo.badge": "Special offer",
    "promo.title": "This Month Promo",
    "promo.subtitle": "Get the best deals for your eye health",
    "promo.badge.discount": "Discount",
    "promo.badge.package": "Package Deal",
    "promo.badge.limited": "Limited",
    "promo.cta": "Get Promo",
    // Services Section
    "services.badge": "Our Services",
    "services.title": "Get the best services for your eye health",
    "services.subtitle": "Comprehensive eye care with the latest technology",
    "services.cta": "Learn more",

    // Doctors Section
    "doctors.title": "Specialist Doctor Schedule",
    "doctors.subtitle": "experienced eye specialist doctors ready to serve you",
    "doctors.education": "Education",
    "doctors.schedule": "Practice Schedule",
    "doctors.cta": "View Detail",

    // CTA Section
    "cta.title": "Ready to Care for Your Eye Health?",
    "cta.description":
      "Contact us for consultation and schedule your eye examination",
    "cta.phoneNumber": "627514681000",
    "cta.phone": "(62751) 4681000",
    "cta.whatsapp": "WhatsApp Us",

    // Footer
    "footer.copyright": "© 2024 Padang Eye Center. All rights reserved.",
    "footer.contact": "Contact Us",
    "footer.address": "Address",
    "footer.phone": "Phone",
    "footer.email": "Email",

    // Common
    "common.read-more": "Read More",
    "common.back": "Back",
    "common.loading": "Loading...",
    "common.close": "Close",
    "common.open": "Open",
    "common.search": "Search",

    // #2 About page
    ...about.en,
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "الخدمات",
    "nav.doctors": "الأطباء",
    "nav.contact": "اتصل بنا",
    "nav.blog": "المدونة",
    "nav.recruitment": "التوظيف",

    // Hero Section
    "hero.badge": "موثوق منذ 2009",
    "hero.subtitle":
      "مركز متكامل لخدمات صحة العيون بأحدث التقنيات وفريق من الأطباء المتخصصين ذوي الخبرة في سومطرة الغربية، إندونيسيا.",
    "hero.cta.services": "خدماتنا",
    "hero.cta.appointment": "حجز موعد",
    "hero.stats.patients": "مرضى راضون",
    "hero.stats.success": "نسبة النجاح",

    // Promo Section
    "promo.badge": "عرض خاص",
    "promo.title": "عروض هذا الشهر",
    "promo.subtitle": "احصل على أفضل العروض لصحة عينيك",
    "promo.badge.discount": "خصم",
    "promo.badge.package": "باقة",
    "promo.badge.limited": "لفترة محدودة",
    "promo.cta": "احصل على العرض",

    // Services Section
    "services.badge": "خدماتنا",
    "services.title": "احصل على أفضل رعاية لصحة عينيك",
    "services.subtitle": "رعاية شاملة للعيون بأحدث التقنيات",
    "services.cta": "اعرف المزيد",

    // Doctors Section
    "doctors.title": "جدول الأطباء المختصين",
    "doctors.subtitle": "أطباء عيون ذوو خبرة جاهزون لخدمتك",
    "doctors.education": "التعليم",
    "doctors.schedule": "جدول الممارسة",
    "doctors.cta": "عرض التفاصيل",

    // CTA Section
    "cta.title": "هل أنت مستعد للعناية بصحة عينيك؟",
    "cta.description": "تواصل معنا للاستشارة وتحديد موعد لفحص عينيك",
    "cta.phoneNumber": "627514681000",
    "cta.phone": "(0751) 4681000",
    "cta.whatsapp": "تواصل عبر واتساب",

    // Footer
    "footer.copyright": "© 2024 مركز بادانغ لطب العيون. جميع الحقوق محفوظة.",
    "footer.contact": "تواصل معنا",
    "footer.address": "العنوان",
    "footer.phone": "الهاتف",
    "footer.email": "البريد الإلكتروني",

    // Common
    "common.read-more": "اقرأ المزيد",
    "common.back": "رجوع",
    "common.loading": "جارٍ التحميل...",
    "common.close": "إغلاق",
    "common.open": "فتح",
    "common.search": "بحث",

    // #2 About page
    ...about.ar,
  },
} as const;

// Type helper for translation keys
export type TranslationKey = keyof TranslationKeys;
