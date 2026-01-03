// src/data/doctors.ts

export interface Doctor {
  id: number;
  name: string;
  title: string;
  specialization: string;
  image: string;
  schedule: {
    day: string;
    time: string;
  }[];
  education: string[];
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Ahmad Rizki, Sp.M",
    title: "Dokter Spesialis Mata",
    specialization: "Katarak & Refraksi",
    image: "/assets/images/doctors/A.jpg",
    schedule: [
      { day: "Senin - Rabu", time: "08:00 - 14:00" },
      { day: "Jumat", time: "13:00 - 17:00" },
    ],
    education: [
      "Spesialis Mata Universitas Indonesia",
      "Fellowship Katarak RS Mata Jakarta",
    ],
  },
  {
    id: 2,
    name: "Dr. Siti Nurhaliza, Sp.M",
    title: "Dokter Spesialis Mata",
    specialization: "LASIK & Kornea",
    image: "/assets/images/doctors/B.jpg",
    schedule: [
      { day: "Selasa - Kamis", time: "09:00 - 15:00" },
      { day: "Senin", time: "08:00 - 12:00" },
      { day: "Rabu", time: "08:00 - 12:00" },
      { day: "Kamis", time: "08:00 - 12:00" },
    ],
    education: [
      "Spesialis Mata Universitas Andalas",
      "Fellowship LASIK Singapore Eye Center",
    ],
  },
  {
    id: 3,
    name: "Dr. Budi Santoso, Sp.M",
    title: "Dokter Spesialis Mata",
    specialization: "Retina & Glaukoma",
    image: "/assets/images/doctors/C.jpg",
    schedule: [
      { day: "Senin - Kamis", time: "14:00 - 18:00" },
      { day: "Sabtu", time: "09:00 - 13:00" },
    ],
    education: [
      "Spesialis Mata Universitas Padjadjaran",
      "Fellowship Retina National Eye Center",
    ],
  },
  {
    id: 4,
    name: "Dr. Maya Indah, Sp.M",
    title: "Dokter Spesialis Mata",
    specialization: "Pediatrik Oftalmologi",
    image: "/assets/images/doctors/D.jpg",
    schedule: [{ day: "Senin - Jumat", time: "10:00 - 16:00" }],
    education: [
      "Spesialis Mata Universitas Gadjah Mada",
      "Fellowship Pediatric Eye Disease Malaysia",
    ],
  },
];
