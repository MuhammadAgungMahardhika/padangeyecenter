// src/data/visionMission.ts

export interface VisionMissionData {
  vision: {
    title: string;
    description: string;
    icon: string;
  };
  mission: {
    title: string;
    items: string[];
    icon: string;
  };
}

export const visionMissionData: VisionMissionData = {
  vision: {
    title: "Visi",
    description:
      "Menjadikan Rumah Sakit yang terpercaya dan terkemuka di bidang pelayanan kesehatan mata masyarakat dengan implementasi nilai–nilai kepuasan pasien costumer satisfaction",
    icon: "eye",
  },
  mission: {
    title: "Misi",
    items: [
      "Menyediakan pelayanan mata sub spesialistik yang terpadu",
      "Menyediakan tenaga medis yang profesional dan kompeten",
      "Mendorong semangat kebersamaan untuk mencapai tujuan perusahaan",
      "Menjalin hubungan kerjasama dengan institusi terkait baik nasional maupun internasional",
    ],
    icon: "check-circle",
  },
};
