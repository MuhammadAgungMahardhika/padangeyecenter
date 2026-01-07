import type { Language } from "../i18n/ui";

/**
 * Single language data shape
 */
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

/**
 * Multilingual data
 * → otomatis mengikuti languages di ui.ts
 */
export type MultilingualVisionMission = {
  [key in Language]: VisionMissionData;
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

  ar: {
    vision: {
      title: "الرؤية",
      description:
        "أن نصبح مستشفى موثوقًا ورائدًا في مجال خدمات صحة العيون مع تطبيق قيم رضا المرضى",
      icon: "eye",
    },
    mission: {
      title: "الرسالة",
      items: [
        "تقديم خدمات متكاملة في تخصصات العيون الدقيقة",
        "توفير كوادر طبية مهنية وكفؤة",
        "تعزيز روح التعاون لتحقيق أهداف المؤسسة",
        "إقامة شراكات مع مؤسسات ذات صلة محليًا ودوليًا",
      ],
      icon: "check-circle",
    },
  },
};

/**
 * Helper function
 */
export function getVisionMissionData(lang: Language): VisionMissionData {
  return visionMissionData[lang];
}
