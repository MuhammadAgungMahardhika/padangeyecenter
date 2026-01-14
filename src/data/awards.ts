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
        year: "2023",
        title: "Fasilitas Perawatan Mata Terbaik",
        organization: "Indonesian Healthcare Awards",
        image: "kars.png",
      },
      {
        id: "2",
        year: "2022",
        title: "Keunggulan dalam Oftalmologi",
        organization: "Ikatan Dokter Sumatera Barat",
        image: "kars.png",
      },
      {
        id: "3",
        year: "2021",
        title: "Penghargaan Inovasi Perawatan Pasien",
        organization: "Summit Kesehatan Nasional",
        image: "kars.png",
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
        image: "kars.png",
      },
      {
        id: "2",
        year: "2022",
        title: "Excellence in Ophthalmology",
        organization: "West Sumatra Medical Association",
        image: "kars.png",
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
