// src/data/promos.ts

export interface promo {
  id: number;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  price: string;
  oldPrice: string | null;
  note: string | null;
  features: string[] | [];
  link: string;
  buttonText: string;
  gradient: string;
  border: string;
  buttonGradient: string;
  image?: string | null; // Tambahan field untuk gambar
}

// export const promos: promo[] = [];

// Contoh dengan gambar:
export const promos: promo[] = [
  {
    id: 1,
    badge: "Diskon 25%",
    badgeColor: "orange",
    title: "Pemeriksaan Lengkap",
    description: "Dapatkan pemeriksaan mata komprehensif dengan harga spesial",
    price: "Rp 150K",
    oldPrice: "Rp 200K",
    note: null,
    features: [
      "Pemeriksaan Refraksi",
      "Pemeriksaan Funduskopi",
      "Konsultasi Gratis",
    ],
    link: "/promo/pemeriksaan",
    buttonText: "Ambil Promo",
    gradient: "from-orange-50 to-white",
    border: "border-orange-100",
    buttonGradient: "from-orange-500 to-orange-600",
    image: "/assets/images/promos/pemeriksaan.jpg", // Opsional: tambahkan gambar
  },
  {
    id: 2,
    badge: "Paket Hemat",
    badgeColor: "green",
    title: "Paket Keluarga",
    description: "Pemeriksaan untuk sekeluarga dengan harga lebih ekonomis",
    price: "Rp 500K",
    oldPrice: null,
    note: "(4 orang)",
    features: [
      "Untuk 4 Anggota Keluarga",
      "Pemeriksaan Lengkap",
      "Hemat Hingga 30%",
    ],
    link: "/promo/keluarga",
    buttonText: "Ambil Promo",
    gradient: "from-green-50 to-white",
    border: "border-green-100",
    buttonGradient: "from-green-500 to-green-600",
    image: "/assets/images/promos/keluarga.jpg",
  },
  {
    id: 3,
    badge: "Terbatas",
    badgeColor: "orange",
    title: "Operasi Katarak",
    description: "Promo spesial operasi katarak dengan teknologi modern",
    price: "Rp 12.000K",
    oldPrice: "Rp 15.000K",
    note: "per mata",
    features: [
      "Teknologi Phacoemulsification",
      "Lensa Premium",
      "Perawatan Pasca Operasi",
      "Garansi 1 Tahun",
    ],
    link: "/promo/katarak",
    buttonText: "Konsultasi Gratis",
    gradient: "from-orange-50 to-white",
    border: "border-orange-100",
    buttonGradient: "from-orange-500 to-orange-600",
    image: "/assets/images/promos/katarak.jpg",
  },
  {
    id: 4,
    badge: "Best Seller",
    badgeColor: "green",
    title: "LASIK Premium",
    description: "Bebas kacamata dengan teknologi LASIK terkini",
    price: "Rp 10.000K",
    oldPrice: "Rp 14.000K",
    note: "per mata",
    features: [
      "Teknologi Femto LASIK",
      "Pemeriksaan Pre-Op Lengkap",
      "Post-Op Care 6 Bulan",
      "Garansi Lifetime",
    ],
    link: "/promo/lasik",
    buttonText: "Jadwalkan Konsultasi",
    gradient: "from-green-50 to-white",
    border: "border-green-100",
    buttonGradient: "from-green-500 to-green-600",
    image: "/assets/images/promos/lasik.jpg",
  },
];

/* 
CARA MENGGUNAKAN GAMBAR:
1. Simpan gambar di folder: public/assets/images/promos/
2. Tambahkan path di field 'image': "/assets/images/promos/nama-file.jpg"
3. Jika tidak ada gambar, set image: null atau hapus field image
4. Rekomendasi ukuran gambar: 600x400px (ratio 3:2)
5. Format: JPG, PNG, atau WebP
*/
