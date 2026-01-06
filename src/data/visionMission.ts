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

// Type untuk multilingual data
export type MultilingualVisionMission = {
  [key in "id" | "en"]: VisionMissionData;
};

export const visionMissionData: MultilingualVisionMission = {
  id: {
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
  },
  en: {
    vision: {
      title: "Vision",
      description:
        "To become a trusted and leading hospital in the field of community eye health services with the implementation of customer satisfaction values",
      icon: "eye",
    },
    mission: {
      title: "Mission",
      items: [
        "Provide integrated sub-specialist eye services",
        "Provide professional and competent medical personnel",
        "Encourage a spirit of togetherness to achieve company goals",
        "Establish cooperative relationships with related institutions both nationally and internationally",
      ],
      icon: "check-circle",
    },
  },
};

// Helper function untuk get data by language
export function getVisionMissionData(lang: "id" | "en"): VisionMissionData {
  return visionMissionData[lang];
}
