// src/data/history.ts
import type { TranslationKey } from "../i18n/ui";

export interface HistoryItem {
  year: string;
  title: string;
  description: string;
}

export type MultilingualHistory = {
  [lang: string]: HistoryItem[];
};

export const padangEyeCenterTimeline: MultilingualHistory = {
  id: [
    {
      year: "2007",
      title: "Pendirian PT. Muda Medika Mandiri",
      description:
        "PT. Muda Medika Mandiri didirikan berdasarkan Akta No. 08 tanggal 4 Agustus 2007 di Padang dan disahkan oleh Kementerian Hukum dan HAM RI.",
    },
    {
      year: "2008",
      title: "Berdiri sebagai Klinik Mata",
      description:
        "Padang Eye Center mulai beroperasi melayani kesehatan mata masyarakat dengan izin Klinik Mata.",
    },
    {
      year: "2010",
      title: "Menjadi Rumah Sakit Mata",
      description:
        "Pada 6 September 2010, Padang Eye Center resmi beroperasi sebagai Rumah Sakit Mata dengan nama RSKM Padang Eye Center.",
    },
    {
      year: "2025",
      title: "Pindah Lokasi",
      description:
        "Pada 1 Maret 2025, Padang Eye Center berpindah ke tempat baru dengan fasilitas dan gedung yang lebih luas dengan nama RS Mata PEC Khatib.",
    },
    {
      year: "Sekarang",
      title: "Pelayanan Berbasis Mutu & Hati",
      description:
        "Padang Eye Center terus meningkatkan mutu, daya saing, dan pelayanan dengan nilai dasar “Melayani Dengan Hati”.",
    },
  ],

  en: [
    {
      year: "2007",
      title: "Establishment of PT. Muda Medika Mandiri",
      description:
        "PT. Muda Medika Mandiri was established based on Deed No. 08 dated August 4, 2007 in Padang and legalized by the Ministry of Law and Human Rights of Indonesia.",
    },
    {
      year: "2008",
      title: "Established as an Eye Clinic",
      description:
        "Padang Eye Center began operating to provide eye health services to the community with an Eye Clinic license.",
    },
    {
      year: "2010",
      title: "Becoming an Eye Hospital",
      description:
        "On September 6, 2010, Padang Eye Center officially operated as an Eye Hospital under the name RSKM Padang Eye Center.",
    },
    {
      year: "2025",
      title: "Relocation",
      description:
        "On March 1, 2025, Padang Eye Center moved to a new location with larger facilities and buildings under the name RS Mata PEC Khatib.",
    },
    {
      year: "Present",
      title: "Quality & Heart-Based Services",
      description:
        "Padang Eye Center continues to improve quality, competitiveness, and services with the core value of “Serving with Heart”.",
    },
  ],

  ar: [
    {
      year: "2007",
      title: "تأسيس شركة مودا ميديكا مانديري",
      description:
        "تأسست شركة مودا ميديكا مانديري بموجب الوثيقة رقم 08 بتاريخ 4 أغسطس 2007 في بادانغ، وتم اعتمادها من قبل وزارة القانون وحقوق الإنسان في إندونيسيا.",
    },
    {
      year: "2008",
      title: "التأسيس كعيادة عيون",
      description:
        "بدأ مركز بادانغ لطب العيون عملياته لتقديم خدمات رعاية العيون للمجتمع بترخيص كعيادة عيون.",
    },
    {
      year: "2010",
      title: "التحول إلى مستشفى عيون",
      description:
        "في 6 سبتمبر 2010، بدأ مركز بادانغ لطب العيون العمل رسميًا كمستشفى عيون تحت اسم مستشفى بادانغ لطب العيون.",
    },
    {
      year: "2025",
      title: "الانتقال إلى موقع جديد",
      description:
        "في 1 مارس 2025، انتقل مركز بادانغ لطب العيون إلى موقع جديد بمرافق ومبنى أوسع تحت اسم مستشفى PEC للعيون – خطيب.",
    },
    {
      year: "الحاضر",
      title: "خدمات قائمة على الجودة والقلب",
      description:
        "يواصل مركز بادانغ لطب العيون تحسين الجودة والقدرة التنافسية والخدمات مع الالتزام بالقيمة الأساسية «الخدمة من القلب».",
    },
  ],
};

// helper
export function getHistoryTimeline(lang: string): HistoryItem[] {
  return padangEyeCenterTimeline[lang] ?? padangEyeCenterTimeline.id;
}
