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
        slug: "katarak-lensa-refraktif",
        category: "Layanan Katarak, Lensa dan Bedah Refraktif",
        description: "",
        icon: "shield",
        color: "green",
        items: [
          { name: "Katarak" },
          { name: "Kornea" },
          { name: "Laser Vision Correction" },
          { name: "Lensa" },
          { name: "FLACS" },
        ],
      },
      {
        slug: "glaukoma",
        category: "Layanan Glaukoma",
        description: "",
        icon: "eye",
        color: "orange",
        items: [{ name: "Glaukoma" }],
      },
      {
        slug: "retina",
        category: "Layanan Retina",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          { name: "Low Vision" },
          { name: "Diabetes Education & Care" },
          { name: "Vitreoretina" },
        ],
      },
      {
        slug: "okuloplasti",
        category: "Layanan Okuloplasti dan Rekonstruksi Orbita",
        description: "",
        icon: "shield",
        color: "green",
        items: [{ name: "Orbital, Oculoplastic and Reconstructive" }],
      },
      {
        slug: "mata-anak-dan-juling",
        category: "Layanan Mata Anak(Pediatrik) dan Mata Juling",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [
          { name: "Ambliopia" },
          { name: "Strabismus" },
          { name: "Children Eye & Strabismus Center" },
          { name: "Katarak Pada Anak" },
          { name: "Myopia Control Care" },
        ],
      },
      {
        slug: "lensa-kontak",
        category: "Layanan Lensa Kontak",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          { name: "Contact Lens" },
          { name: "Orthokeratology (Ortho-K)" },
        ],
      },
      {
        slug: "infeksi-imunologi",
        category: "Layanan Infeksi dan Imunologi",
        description: "",
        icon: "shield",
        color: "green",
        items: [{ name: "Infeksi Okular dan Imunologi" }],
      },
      {
        slug: "neuro-oftalmologi",
        category: "Layanan Neuro-Oftalmologi",
        description: "",
        icon: "eye",
        color: "orange",
        items: [{ name: "Neuro-Ophthalmology" }],
      },
      {
        slug: "mata-kering",
        category: "Layanan Mata Kering",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [{ name: "Dry Eye" }],
      },
      {
        slug: "eye-check",
        category: "Eye Check",
        description: "",
        icon: "eye",
        color: "orange",
        items: [{ name: "Eye Check" }],
      },
      {
        slug: "teleoftalmologi",
        category: "Teleoftalmologi",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [{ name: "Teleoftalmologi" }],
      },
      {
        slug: "thyroid-eye-center",
        category: "Thyroid Eye Center",
        description: "",
        icon: "shield",
        color: "green",
        items: [{ name: "Thyroid Eye Center" }],
      },
    ],

    en: [
      {
        slug: "cataract-lens-refractive",
        category: "Cataract, Lens & Refractive Surgery Services",
        description: "",
        icon: "shield",
        color: "green",
        items: [
          { name: "Cataract" },
          { name: "Cornea" },
          { name: "Laser Vision Correction" },
          { name: "Lens" },
          { name: "FLACS" },
        ],
      },
      {
        slug: "glaucoma",
        category: "Glaucoma Services",
        description: "",
        icon: "eye",
        color: "orange",
        items: [{ name: "Glaucoma" }],
      },
      {
        slug: "retina",
        category: "Retina Services",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          { name: "Low Vision" },
          { name: "Diabetes Education & Care" },
          { name: "Vitreoretina" },
        ],
      },
      {
        slug: "oculoplasty",
        category: "Oculoplasty & Orbital Reconstruction",
        description: "",
        icon: "shield",
        color: "green",
        items: [{ name: "Orbital, Oculoplastic and Reconstructive" }],
      },
      {
        slug: "pediatric-and-strabismus",
        category: "Pediatric & Strabismus Eye Services",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [
          { name: "Amblyopia" },
          { name: "Strabismus" },
          { name: "Children Eye & Strabismus Center" },
          { name: "Pediatric Cataract" },
          { name: "Myopia Control Care" },
        ],
      },
      {
        slug: "contact-lens",
        category: "Contact Lens Services",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          { name: "Contact Lens" },
          { name: "Orthokeratology (Ortho-K)" },
        ],
      },
      {
        slug: "infection-immunology",
        category: "Ocular Infection & Immunology",
        description: "",
        icon: "shield",
        color: "green",
        items: [{ name: "Ocular Infection & Immunology" }],
      },
      {
        slug: "neuro-ophthalmology",
        category: "Neuro-Ophthalmology",
        description: "",
        icon: "eye",
        color: "orange",
        items: [{ name: "Neuro-Ophthalmology" }],
      },
      {
        slug: "dry-eye",
        category: "Dry Eye Services",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [{ name: "Dry Eye" }],
      },
      {
        slug: "eye-check",
        category: "Eye Check",
        description: "",
        icon: "eye",
        color: "orange",
        items: [{ name: "Eye Check" }],
      },
      {
        slug: "teleophthalmology",
        category: "Teleophthalmology",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [{ name: "Teleophthalmology" }],
      },
      {
        slug: "thyroid-eye-center",
        category: "Thyroid Eye Center",
        description: "",
        icon: "shield",
        color: "green",
        items: [{ name: "Thyroid Eye Center" }],
      },
    ],

    ar: [
      {
        slug: "katarak-lensa-refraktif",
        category: "خدمات المياه البيضاء والعدسات وجراحة تصحيح الإبصار",
        description: "",
        icon: "shield",
        color: "green",
        items: [
          { name: "المياه البيضاء" },
          { name: "القرنية" },
          { name: "تصحيح الإبصار بالليزر" },
          { name: "العدسات" },
          { name: "FLACS" },
        ],
      },
      {
        slug: "glaukoma",
        category: "خدمات الجلوكوما",
        description: "",
        icon: "eye",
        color: "orange",
        items: [{ name: "الجلوكوما" }],
      },
      {
        slug: "retina",
        category: "خدمات الشبكية",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          { name: "ضعف البصر" },
          { name: "التثقيف والرعاية لمرضى السكري" },
          { name: "جراحة الشبكية والجسم الزجاجي" },
        ],
      },
      {
        slug: "okuloplasti",
        category: "خدمات تجميل العين وإعادة بناء محجر العين",
        description: "",
        icon: "shield",
        color: "green",
        items: [{ name: "جراحة محجر العين والتجميل وإعادة البناء" }],
      },
      {
        slug: "mata-anak-dan-juling",
        category: "خدمات عيون الأطفال والحول",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [
          { name: "كسل العين" },
          { name: "الحول" },
          { name: "مركز عيون الأطفال والحول" },
          { name: "المياه البيضاء عند الأطفال" },
          { name: "علاج التحكم بقصر النظر" },
        ],
      },
      {
        slug: "lensa-kontak",
        category: "خدمات العدسات اللاصقة",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          { name: "العدسات اللاصقة" },
          { name: "تقويم القرنية (أورثو-كي)" },
        ],
      },
      {
        slug: "infeksi-imunologi",
        category: "خدمات التهابات العين والمناعة",
        description: "",
        icon: "shield",
        color: "green",
        items: [{ name: "التهابات العين والمناعة" }],
      },
      {
        slug: "neuro-oftalmologi",
        category: "خدمات طب أعصاب العيون",
        description: "",
        icon: "eye",
        color: "orange",
        items: [{ name: "طب أعصاب العيون" }],
      },
      {
        slug: "mata-kering",
        category: "خدمات علاج جفاف العين",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [{ name: "جفاف العين" }],
      },
      {
        slug: "eye-check",
        category: "فحص العين",
        description: "",
        icon: "eye",
        color: "orange",
        items: [{ name: "فحص العين" }],
      },
      {
        slug: "teleoftalmologi",
        category: "طب العيون عن بُعد",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [{ name: "طب العيون عن بُعد" }],
      },
      {
        slug: "thyroid-eye-center",
        category: "مركز اعتلال العين المرتبط بالغدة الدرقية",
        description: "",
        icon: "shield",
        color: "green",
        items: [{ name: "مركز اعتلال العين المرتبط بالغدة الدرقية" }],
      },
    ],
  };

  return data[lang] || data.id;
};
