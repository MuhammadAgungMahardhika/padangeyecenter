// src/data/awards.ts

export interface Award {
  id: string;
  year: string;
  title: string;
  organization: string;
  image?: string; // Path ke gambar/logo penghargaan
}

export const awardsTranslations = {
  id: {
    sectionBadge: "Penghargaan & Prestasi",
    sectionTitle: "Komitmen Kami terhadap Keunggulan",
    sectionSubtitle:
      "Dipercaya oleh ribuan pasien dan diakui oleh berbagai institusi kesehatan",
    awards: [
      {
        id: "1",
        year: "2025",
        title: "Penghargaan Bintang 4 Transformasi Digital FKRTL",
        organization: "Badan Penyelenggara Jaminan Sosial Kesehatan (BPJSK)",
        image: "11.jpeg",
      },
      {
        id: "2",
        year: "2024",
        title:
          "Penghargaan Kecelakaan Nihil dalam melaksanakan Program Keselamatan dan Kesehatan Kerja (K3)",
        organization: "Kementrian Ketenagakerjaan Republik Indonesia",
        image: "22.jpeg",
      },
      {
        id: "3",
        year: "2023",
        title:
          "Penghargaan K3 Pencegahan & Penanggulangan Covid-19 dengan nilai Platinum",
        organization: "Kementrian Ketenagakerjaan Republik Indonesia",
        image: "33.jpeg",
      },
      {
        id: "4",
        year: "2021",
        title: "Penghargaan PARAMAKARYA Kategori Pemimpin dalam Industri",
        organization: "Kementrian Ketenagakerjaan Republik Indonesia",
        image: "44.jpeg",
      },
      {
        id: "5",
        year: "2021",
        title: "Penghargaan Kecelakaan Nihil di tempat kerja",
        organization: "Kementrian Ketenagakerjaan Republik Indonesia",
        image: "55.jpeg",
      },
    ],
  },
  en: {
    sectionBadge: "Awards & Achievements",
    sectionTitle: "Our Commitment to Excellence",
    sectionSubtitle:
      "Trusted by thousands of patients and recognized by leading healthcare institutions",
    awards: [
      {
        id: "1",
        year: "2025",
        title: "4-Star Digital Transformation Award for FKRTL",
        organization:
          "Social Security Administering Body for Health (BPJS Kesehatan)",
        image: "11.jpeg",
      },
      {
        id: "2",
        year: "2024",
        title:
          "Zero Accident Award for the Implementation of Occupational Safety and Health (OSH) Program",
        organization: "Ministry of Manpower of the Republic of Indonesia",
        image: "22.jpeg",
      },
      {
        id: "3",
        year: "2023",
        title:
          "Platinum Award for Occupational Safety and Health (OSH) in COVID-19 Prevention and Control",
        organization: "Ministry of Manpower of the Republic of Indonesia",
        image: "33.jpeg",
      },
      {
        id: "4",
        year: "2021",
        title: "PARAMAKARYA Award – Leadership in Industry Category",
        organization: "Ministry of Manpower of the Republic of Indonesia",
        image: "44.jpeg",
      },
      {
        id: "5",
        year: "2021",
        title: "Zero Accident Award in the Workplace",
        organization: "Ministry of Manpower of the Republic of Indonesia",
        image: "55.jpeg",
      },
    ],
  },
  ar: {
    sectionBadge: "الجوائز والإنجازات",
    sectionTitle: "التزامنا بالتميّز",
    sectionSubtitle:
      "موثوق به من قبل آلاف المرضى ومعترف به من قبل مؤسسات الرعاية الصحية",
    awards: [
      {
        id: "1",
        year: "2025",
        title: "جائزة التحول الرقمي من فئة أربع نجوم لمرافق FKRTL",
        organization: "هيئة الضمان الاجتماعي الصحي (BPJS كيسيهاتان)",
        image: "11.jpeg",
      },
      {
        id: "2",
        year: "2024",
        title: "جائزة الحوادث الصفرية في تطبيق برنامج السلامة والصحة المهنية",
        organization: "وزارة القوى العاملة في جمهورية إندونيسيا",
        image: "22.jpeg",
      },
      {
        id: "3",
        year: "2023",
        title:
          "جائزة بلاتينية للسلامة والصحة المهنية في الوقاية والسيطرة على كوفيد-19",
        organization: "وزارة القوى العاملة في جمهورية إندونيسيا",
        image: "33.jpeg",
      },
      {
        id: "4",
        year: "2021",
        title: "جائزة باراماكاريا – فئة القيادة في القطاع الصناعي",
        organization: "وزارة القوى العاملة في جمهورية إندونيسيا",
        image: "44.jpeg",
      },
      {
        id: "5",
        year: "2021",
        title: "جائزة الحوادث الصفرية في مكان العمل",
        organization: "وزارة القوى العاملة في جمهورية إندونيسيا",
        image: "55.jpeg",
      },
    ],
  },
};
