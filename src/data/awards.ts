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
      "Trusted by thousands of patients and recognized by various healthcare institutions",
    awards: [
      {
        id: "1",
        year: "2023",
        title: "Best Eye Care Facility",
        organization: "Indonesian Healthcare Awards",
        image: "4.jpeg",
      },
      {
        id: "2",
        year: "2022",
        title: "Excellence in Ophthalmology",
        organization: "West Sumatra Medical Association",
        image: "5.jpeg",
      },
      {
        id: "3",
        year: "2021",
        title: "Patient Care Innovation Award",
        organization: "National Healthcare Summit",
        image: "kars.png",
      },
    ],
  },
  ar: {
    sectionBadge: "الجوائز والإنجازات",
    sectionTitle: "التزامنا بالتميز",
    sectionSubtitle:
      "موثوق بآلاف المرضى ومُعترف به من قبل مختلف المؤسسات الصحية",
    awards: [
      {
        id: "1",
        year: "2023",
        title: "أفضل مرافق رعاية العين",
        organization: "جوائز الرعاية الصحية الإندونيسية",
        image: "kars.png",
      },
      {
        id: "2",
        year: "2022",
        title: "التميز في الطب البصري",
        organization: "جمعية أطباء سوماترا الغربية",
        image: "kars.png",
      },
      {
        id: "3",
        year: "2021",
        title: "جائزة الابتكار في رعاية المرضى",
        organization: "قمة الرعاية الصحية الوطنية",
        image: "kars.png",
      },
    ],
  },
};
