// src/data/services.ts

export interface ServiceDetail {
  name: string;
  description: string;
  features?: string[];
  icon?: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: "orange" | "green" | "blue" | "purple";
  details: ServiceDetail[];
  image?: string;
}

// Use Record type for better type safety
type ServicesMap = Record<string, Service>;

export interface MultilingualServices {
  id: ServicesMap;
  en: ServicesMap;
}

export const servicesData: MultilingualServices = {
  id: {
    katarak: {
      id: "katarak",
      title: "Layanan Katarak",
      subtitle: "Penanganan Katarak Terpercaya",
      description:
        "Layanan komprehensif untuk penanganan katarak dengan teknologi modern dan tim dokter berpengalaman",
      icon: "eye",
      color: "orange",
      details: [
        {
          name: "FLACS (Femtosecond Laser-Assisted Cataract Surgery)",
          description:
            "Operasi katarak dengan bantuan laser femtosecond untuk presisi maksimal dan pemulihan lebih cepat",
          features: [
            "Teknologi laser terkini",
            "Presisi tinggi",
            "Pemulihan lebih cepat",
            "Minim komplikasi",
          ],
        },
        {
          name: "Operasi Katarak Standar",
          description:
            "Prosedur operasi katarak dengan metode phacoemulsification yang aman dan terbukti efektif",
          features: [
            "Prosedur standar emas",
            "Aman dan teruji",
            "Hasil memuaskan",
            "Biaya terjangkau",
          ],
        },
      ],
      image: "/assets/images/services/katarak.jpg",
    },
    lensa: {
      id: "lensa",
      title: "Lensa dan Bedah Refraktif",
      subtitle: "Koreksi Penglihatan Modern",
      description:
        "Solusi lengkap untuk koreksi kelainan refraksi mata dengan teknologi laser dan lensa premium",
      icon: "glasses",
      color: "green",
      details: [
        {
          name: "Laser Vision Correction",
          description:
            "Koreksi penglihatan menggunakan teknologi laser untuk mengurangi ketergantungan pada kacamata atau lensa kontak",
          features: [
            "LASIK (Laser-Assisted In Situ Keratomileusis)",
            "PRK (Photorefractive Keratectomy)",
            "SMILE (Small Incision Lenticule Extraction)",
            "Konsultasi gratis pra-operasi",
          ],
        },
        {
          name: "Implantasi Lensa Premium",
          description:
            "Pemasangan lensa intraokular premium untuk hasil penglihatan optimal",
          features: [
            "Lensa multifokal",
            "Lensa torik untuk astigmatisme",
            "Lensa accommodative",
            "Kualitas penglihatan superior",
          ],
        },
        {
          name: "Lensa Kontak Khusus",
          description:
            "Fitting dan penyediaan lensa kontak untuk berbagai kebutuhan",
          features: [
            "Lensa kontak RGP",
            "Lensa orthokeratology",
            "Lensa scleral",
            "Konsultasi fitting profesional",
          ],
        },
      ],
      image: "/assets/images/services/laser.jpg",
    },
    retina: {
      id: "retina",
      title: "Layanan Retina",
      subtitle: "Perawatan Retina Komprehensif",
      description:
        "Diagnosis dan penanganan penyakit retina dengan peralatan canggih dan dokter spesialis retina",
      icon: "scan",
      color: "blue",
      details: [
        {
          name: "Pemeriksaan Retina",
          description:
            "Pemeriksaan menyeluruh kondisi retina menggunakan teknologi terkini",
          features: [
            "OCT (Optical Coherence Tomography)",
            "Fundus photography",
            "Fluorescein angiography",
            "Deteksi dini penyakit retina",
          ],
        },
        {
          name: "Injeksi Intravitreal",
          description: "Terapi injeksi untuk berbagai kondisi retina",
          features: [
            "Anti-VEGF untuk AMD dan DME",
            "Steroid untuk inflamasi",
            "Prosedur aman dan nyaman",
            "Follow-up teratur",
          ],
        },
        {
          name: "Laser Retina",
          description: "Terapi laser untuk berbagai kondisi retina",
          features: [
            "Panretinal photocoagulation",
            "Focal laser untuk DME",
            "YAG laser capsulotomy",
            "Laser peripheral iridotomy",
          ],
        },
      ],
      image: "/assets/images/services/retina.jpg",
    },
    glaukoma: {
      id: "glaukoma",
      title: "Layanan Glaukoma",
      subtitle: "Deteksi dan Penanganan Glaukoma",
      description:
        "Penanganan komprehensif glaukoma untuk mencegah kebutaan permanen",
      icon: "shield",
      color: "purple",
      details: [
        {
          name: "Pemeriksaan Glaukoma",
          description:
            "Screening dan diagnosis glaukoma dengan peralatan modern",
          features: [
            "Tonometri digital",
            "Gonioskopi",
            "Visual field test",
            "OCT nervus optikus",
          ],
        },
        {
          name: "Terapi Medikamentosa",
          description: "Penanganan glaukoma dengan obat-obatan",
          features: [
            "Obat tetes mata antiglaukoma",
            "Monitoring tekanan intraokular",
            "Penyesuaian terapi individual",
            "Konsultasi rutin",
          ],
        },
        {
          name: "Operasi Glaukoma",
          description: "Prosedur bedah untuk penanganan glaukoma lanjut",
          features: [
            "Trabekulektomi",
            "Implantasi drainage device",
            "MIGS (Minimally Invasive Glaucoma Surgery)",
            "Laser trabeculoplasty",
          ],
        },
      ],
      image: "/assets/images/services/glaukoma.jpg",
    },
  },
  en: {
    katarak: {
      id: "katarak",
      title: "Cataract Services",
      subtitle: "Trusted Cataract Treatment",
      description:
        "Comprehensive cataract treatment services with modern technology and experienced doctors",
      icon: "eye",
      color: "orange",
      details: [
        {
          name: "FLACS (Femtosecond Laser-Assisted Cataract Surgery)",
          description:
            "Cataract surgery with femtosecond laser assistance for maximum precision and faster recovery",
          features: [
            "Latest laser technology",
            "High precision",
            "Faster recovery",
            "Minimal complications",
          ],
        },
        {
          name: "Standard Cataract Surgery",
          description:
            "Safe and proven effective cataract surgery procedure with phacoemulsification method",
          features: [
            "Gold standard procedure",
            "Safe and tested",
            "Satisfactory results",
            "Affordable cost",
          ],
        },
      ],
      image: "/assets/images/services/katarak.jpg",
    },
    lensa: {
      id: "lensa",
      title: "Lens and Refractive Surgery",
      subtitle: "Modern Vision Correction",
      description:
        "Complete solution for refractive error correction with laser technology and premium lenses",
      icon: "glasses",
      color: "green",
      details: [
        {
          name: "Laser Vision Correction",
          description:
            "Vision correction using laser technology to reduce dependence on glasses or contact lenses",
          features: [
            "LASIK (Laser-Assisted In Situ Keratomileusis)",
            "PRK (Photorefractive Keratectomy)",
            "SMILE (Small Incision Lenticule Extraction)",
            "Free pre-operative consultation",
          ],
        },
        {
          name: "Premium Lens Implantation",
          description:
            "Premium intraocular lens implantation for optimal vision results",
          features: [
            "Multifocal lenses",
            "Toric lenses for astigmatism",
            "Accommodative lenses",
            "Superior vision quality",
          ],
        },
        {
          name: "Specialty Contact Lenses",
          description:
            "Fitting and provision of contact lenses for various needs",
          features: [
            "RGP contact lenses",
            "Orthokeratology lenses",
            "Scleral lenses",
            "Professional fitting consultation",
          ],
        },
      ],
      image: "/assets/images/services/laser.jpg",
    },
    retina: {
      id: "retina",
      title: "Retina Services",
      subtitle: "Comprehensive Retina Care",
      description:
        "Diagnosis and treatment of retinal diseases with advanced equipment and retina specialists",
      icon: "scan",
      color: "blue",
      details: [
        {
          name: "Retinal Examination",
          description:
            "Comprehensive retinal condition examination using latest technology",
          features: [
            "OCT (Optical Coherence Tomography)",
            "Fundus photography",
            "Fluorescein angiography",
            "Early detection of retinal diseases",
          ],
        },
        {
          name: "Intravitreal Injection",
          description: "Injection therapy for various retinal conditions",
          features: [
            "Anti-VEGF for AMD and DME",
            "Steroids for inflammation",
            "Safe and comfortable procedure",
            "Regular follow-up",
          ],
        },
        {
          name: "Retinal Laser",
          description: "Laser therapy for various retinal conditions",
          features: [
            "Panretinal photocoagulation",
            "Focal laser for DME",
            "YAG laser capsulotomy",
            "Laser peripheral iridotomy",
          ],
        },
      ],
      image: "/assets/images/services/retina.jpg",
    },
    glaukoma: {
      id: "glaukoma",
      title: "Glaucoma Services",
      subtitle: "Glaucoma Detection and Treatment",
      description:
        "Comprehensive glaucoma treatment to prevent permanent blindness",
      icon: "shield",
      color: "purple",
      details: [
        {
          name: "Glaucoma Examination",
          description: "Glaucoma screening and diagnosis with modern equipment",
          features: [
            "Digital tonometry",
            "Gonioscopy",
            "Visual field test",
            "Optic nerve OCT",
          ],
        },
        {
          name: "Medical Therapy",
          description: "Glaucoma treatment with medications",
          features: [
            "Antiglaucoma eye drops",
            "Intraocular pressure monitoring",
            "Individual therapy adjustment",
            "Regular consultation",
          ],
        },
        {
          name: "Glaucoma Surgery",
          description: "Surgical procedures for advanced glaucoma treatment",
          features: [
            "Trabeculectomy",
            "Drainage device implantation",
            "MIGS (Minimally Invasive Glaucoma Surgery)",
            "Laser trabeculoplasty",
          ],
        },
      ],
      image: "/assets/images/services/glaukoma.jpg",
    },
  },
} as const;

// Helper functions
export function getServicesData(lang: "id" | "en" | "ar"): Service[] {
  return Object.values(servicesData[lang]);
}

export function getServiceById(
  lang: "id" | "en" | "ar",
  id: string
): Service | undefined {
  return servicesData[lang][id];
}
