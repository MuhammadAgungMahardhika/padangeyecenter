import { type Language } from "../i18n/ui";

export interface ServiceItem {
  slug: string;
  name: string;
  description?: string;
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
          { slug: "katarak", name: "Katarak" },
          { slug: "kornea", name: "Kornea" },
          { slug: "laser-vision-correction", name: "Laser Vision Correction" },
          { slug: "lensa", name: "Lensa" },
          { slug: "flacs", name: "FLACS" },
        ],
      },
      {
        slug: "glaukoma",
        category: "Layanan Glaukoma",
        description: "",
        icon: "eye",
        color: "orange",
        items: [{ slug: "glaukoma", name: "Glaukoma" }],
      },
      {
        slug: "retina",
        category: "Layanan Retina",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          { slug: "low-vision", name: "Low Vision" },
          {
            slug: "diabetes-education-care",
            name: "Diabetes Education & Care",
            description:
              "Layanan edukasi dan perawatan komprehensif bagi penderita diabetes untuk mencegah dan menangani komplikasi mata akibat diabetes, termasuk retinopati diabetik. Tim kami memberikan pemeriksaan rutin, edukasi gaya hidup, serta penanganan dini untuk menjaga kualitas penglihatan Anda.",
          },
          { slug: "vitreoretina", name: "Vitreoretina" },
        ],
      },
      {
        slug: "okuloplasti",
        category: "Layanan Okuloplasti dan Rekonstruksi Orbita",
        description: "",
        icon: "shield",
        color: "green",
        items: [
          {
            slug: "orbital-oculoplastic-reconstructive",
            name: "Orbital, Oculoplastic and Reconstructive",
          },
        ],
      },
      {
        slug: "mata-anak-dan-juling",
        category: "Layanan Mata Anak(Pediatrik) dan Mata Juling",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [
          { slug: "ambliopia", name: "Ambliopia" },
          { slug: "strabismus", name: "Strabismus" },
          {
            slug: "children-eye-strabismus-center",
            name: "Children Eye & Strabismus Center",
          },
          { slug: "katarak-pada-anak", name: "Katarak Pada Anak" },
          { slug: "myopia-control-care", name: "Myopia Control Care" },
        ],
      },
      {
        slug: "lensa-kontak",
        category: "Layanan Lensa Kontak",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          { slug: "contact-lens", name: "Contact Lens RGP" },
          { slug: "orthokeratology", name: "Orthokeratology (Ortho-K)" },
        ],
      },
      {
        slug: "infeksi-imunologi",
        category: "Layanan Infeksi dan Imunologi",
        description: "",
        icon: "shield",
        color: "green",
        items: [
          {
            slug: "infeksi-okular-imunologi",
            name: "Infeksi Okular dan Imunologi",
          },
        ],
      },
      {
        slug: "neuro-oftalmologi",
        category: "Layanan Neuro-Oftalmologi",
        description: "",
        icon: "eye",
        color: "orange",
        items: [{ slug: "neuro-ophthalmology", name: "Neuro-Ophthalmology" }],
      },
      {
        slug: "mata-kering",
        category: "Layanan Mata Kering",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [{ slug: "dry-eye", name: "Dry Eye" }],
      },
      {
        slug: "eye-check",
        category: "Eye Check",
        description: "",
        icon: "eye",
        color: "orange",
        items: [{ slug: "eye-check", name: "Eye Check" }],
      },
      {
        slug: "teleoftalmologi",
        category: "Teleoftalmologi",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [{ slug: "teleoftalmologi", name: "Teleoftalmologi" }],
      },
      {
        slug: "thyroid-eye-center",
        category: "Thyroid Eye Center",
        description: "",
        icon: "shield",
        color: "green",
        items: [{ slug: "thyroid-eye-center", name: "Thyroid Eye Center" }],
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
          { slug: "cataract", name: "Cataract" },
          { slug: "cornea", name: "Cornea" },
          { slug: "laser-vision-correction", name: "Laser Vision Correction" },
          { slug: "lens", name: "Lens" },
          { slug: "flacs", name: "FLACS" },
        ],
      },
      {
        slug: "glaucoma",
        category: "Glaucoma Services",
        description: "",
        icon: "eye",
        color: "orange",
        items: [{ slug: "glaucoma", name: "Glaucoma" }],
      },
      {
        slug: "retina",
        category: "Retina Services",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          { slug: "low-vision", name: "Low Vision" },
          {
            slug: "diabetes-education-care",
            name: "Diabetes Education & Care",
            description:
              "Comprehensive education and care services for diabetic patients to prevent and manage eye complications caused by diabetes, including diabetic retinopathy. Our team provides regular screenings, lifestyle education, and early treatment to preserve your vision quality.",
          },
          { slug: "vitreoretina", name: "Vitreoretina" },
        ],
      },
      {
        slug: "oculoplasty",
        category: "Oculoplasty & Orbital Reconstruction",
        description: "",
        icon: "shield",
        color: "green",
        items: [
          {
            slug: "orbital-oculoplastic-reconstructive",
            name: "Orbital, Oculoplastic and Reconstructive",
          },
        ],
      },
      {
        slug: "pediatric-and-strabismus",
        category: "Pediatric & Strabismus Eye Services",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [
          { slug: "amblyopia", name: "Amblyopia" },
          { slug: "strabismus", name: "Strabismus" },
          {
            slug: "children-eye-strabismus-center",
            name: "Children Eye & Strabismus Center",
          },
          { slug: "pediatric-cataract", name: "Pediatric Cataract" },
          { slug: "myopia-control-care", name: "Myopia Control Care" },
        ],
      },
      {
        slug: "contact-lens",
        category: "Contact Lens Services",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          { slug: "contact-lens", name: "Contact Lens RGP" },
          { slug: "orthokeratology", name: "Orthokeratology (Ortho-K)" },
        ],
      },
      {
        slug: "infection-immunology",
        category: "Ocular Infection & Immunology",
        description: "",
        icon: "shield",
        color: "green",
        items: [
          {
            slug: "ocular-infection-immunology",
            name: "Ocular Infection & Immunology",
          },
        ],
      },
      {
        slug: "neuro-ophthalmology",
        category: "Neuro-Ophthalmology",
        description: "",
        icon: "eye",
        color: "orange",
        items: [{ slug: "neuro-ophthalmology", name: "Neuro-Ophthalmology" }],
      },
      {
        slug: "dry-eye",
        category: "Dry Eye Services",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [{ slug: "dry-eye", name: "Dry Eye" }],
      },
      {
        slug: "eye-check",
        category: "Eye Check",
        description: "",
        icon: "eye",
        color: "orange",
        items: [{ slug: "eye-check", name: "Eye Check" }],
      },
      {
        slug: "teleophthalmology",
        category: "Teleophthalmology",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [{ slug: "teleophthalmology", name: "Teleophthalmology" }],
      },
      {
        slug: "thyroid-eye-center",
        category: "Thyroid Eye Center",
        description: "",
        icon: "shield",
        color: "green",
        items: [{ slug: "thyroid-eye-center", name: "Thyroid Eye Center" }],
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
          { slug: "cataract", name: "المياه البيضاء" },
          { slug: "cornea", name: "القرنية" },
          { slug: "laser-vision-correction", name: "تصحيح الإبصار بالليزر" },
          { slug: "lens", name: "العدسات" },
          { slug: "flacs", name: "FLACS" },
        ],
      },
      {
        slug: "glaukoma",
        category: "خدمات الجلوكوما",
        description: "",
        icon: "eye",
        color: "orange",
        items: [{ slug: "glaucoma", name: "الجلوكوما" }],
      },
      {
        slug: "retina",
        category: "خدمات الشبكية",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          { slug: "low-vision", name: "ضعف البصر" },
          {
            slug: "diabetes-education-care",
            name: "التثقيف والرعاية لمرضى السكري",
            description:
              "خدمات تثقيفية ورعاية شاملة لمرضى السكري للوقاية من مضاعفات العين الناجمة عن مرض السكري وعلاجها، بما في ذلك اعتلال الشبكية السكري. يقدم فريقنا فحوصات منتظمة وتثقيفاً حول نمط الحياة وعلاجاً مبكراً للحفاظ على جودة بصرك.",
          },
          { slug: "vitreoretina", name: "جراحة الشبكية والجسم الزجاجي" },
        ],
      },
      {
        slug: "okuloplasti",
        category: "خدمات تجميل العين وإعادة بناء محجر العين",
        description: "",
        icon: "shield",
        color: "green",
        items: [
          {
            slug: "orbital-oculoplastic-reconstructive",
            name: "جراحة محجر العين والتجميل وإعادة البناء",
          },
        ],
      },
      {
        slug: "mata-anak-dan-juling",
        category: "خدمات عيون الأطفال والحول",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [
          { slug: "amblyopia", name: "كسل العين" },
          { slug: "strabismus", name: "الحول" },
          {
            slug: "children-eye-strabismus-center",
            name: "مركز عيون الأطفال والحول",
          },
          { slug: "pediatric-cataract", name: "المياه البيضاء عند الأطفال" },
          { slug: "myopia-control-care", name: "علاج التحكم بقصر النظر" },
        ],
      },
      {
        slug: "lensa-kontak",
        category: "خدمات العدسات اللاصقة",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          { slug: "contact-lens", name: "العدسات اللاصقة" },
          { slug: "orthokeratology", name: "تقويم القرنية (أورثو-كي)" },
        ],
      },
      {
        slug: "infeksi-imunologi",
        category: "خدمات التهابات العين والمناعة",
        description: "",
        icon: "shield",
        color: "green",
        items: [
          {
            slug: "ocular-infection-immunology",
            name: "التهابات العين والمناعة",
          },
        ],
      },
      {
        slug: "neuro-oftalmologi",
        category: "خدمات طب أعصاب العيون",
        description: "",
        icon: "eye",
        color: "orange",
        items: [{ slug: "neuro-ophthalmology", name: "طب أعصاب العيون" }],
      },
      {
        slug: "mata-kering",
        category: "خدمات علاج جفاف العين",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [{ slug: "dry-eye", name: "جفاف العين" }],
      },
      {
        slug: "eye-check",
        category: "فحص العين",
        description: "",
        icon: "eye",
        color: "orange",
        items: [{ slug: "eye-check", name: "فحص العين" }],
      },
      {
        slug: "teleoftalmologi",
        category: "طب العيون عن بُعد",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [{ slug: "teleophthalmology", name: "طب العيون عن بُعد" }],
      },
      {
        slug: "thyroid-eye-center",
        category: "مركز اعتلال العين المرتبط بالغدة الدرقية",
        description: "",
        icon: "shield",
        color: "green",
        items: [
          {
            slug: "thyroid-eye-center",
            name: "مركز اعتلال العين المرتبط بالغدة الدرقية",
          },
        ],
      },
    ],
  };

  return data[lang] || data.id;
};
