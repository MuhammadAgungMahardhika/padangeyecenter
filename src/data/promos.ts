export interface promo {
  id: number;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  price: string;
  oldPrice: string;
  note: string | null;
  features: string[] | [];
  link: string;
  buttonText: string;
  gradient: string;
  border: string;
  buttonGradient: string;
}
export const promos: promo[] = [];
// export const promos: promo[] = [
//   {
//     id: 1,
//     badge: "Diskon 25%",
//     badgeColor: "orange",
//     title: "Pemeriksaan Lengkap",
//     description: "Dapatkan pemeriksaan mata komprehensif dengan harga spesial",
//     price: "Rp 150K",
//     oldPrice: "Rp 200K",
//     note: "Rp 200K",
//     features: [
//       "Pemeriksaan Refraksi",
//       "Pemeriksaan Funduskopi",
//       "Konsultasi Gratis",
//     ],
//     link: "/promo/pemeriksaan",
//     buttonText: "Ambil Promo",
//     gradient: "from-orange-50 to-white",
//     border: "border-orange-100",
//     buttonGradient: "from-orange-500 to-orange-600",
//   },
//   {
//     id: 2,
//     badge: "Paket Hemat",
//     badgeColor: "green",
//     title: "Paket Keluarga",
//     description: "Pemeriksaan untuk sekeluarga dengan harga lebih ekonomis",
//     price: "Rp 500K",
//     oldPrice: null,
//     note: "(4 orang)",
//     features: [
//       "Untuk 4 Anggota Keluarga",
//       "Pemeriksaan Lengkap",
//       "Hemat Hingga 30%",
//     ],
//     link: "/promo/keluarga",
//     buttonText: "Ambil Promo",
//     gradient: "from-green-50 to-white",
//     border: "border-green-100",
//     buttonGradient: "from-green-500 to-green-600",
//   },
//   {
//     id: 3,
//     badge: "Paket Hemat",
//     badgeColor: "green",
//     title: "Paket Keluarga",
//     description: "Pemeriksaan untuk sekeluarga dengan harga lebih ekonomis",
//     price: "Rp 500K",
//     oldPrice: null,
//     note: "(4 orang)",
//     features: [
//       "Untuk 4 Anggota Keluarga",
//       "Pemeriksaan Lengkap",
//       "Hemat Hingga 30%",
//     ],
//     link: "/promo/keluarga",
//     buttonText: "Ambil Promo",
//     gradient: "from-green-50 to-white",
//     border: "border-green-100",
//     buttonGradient: "from-orange-500 to-orange-600",
//   },
// ];
