import { type Language } from "../i18n/ui";

export interface ServiceItem {
  slug: string;
  name: string;
  description?: string;
}

export interface Service {
  slug: string;
  category: string;
  description: string;
  items: ServiceItem[];
  icon: "eye" | "shield" | "spark";
  color: "orange" | "green" | "gradient";
}

export const getServices = (lang: string): Service[] => {
  const data: Record<string, Service[]> = {
    id: [
      {
        slug: "katarak-lensa-refraktif",
        category: "Layanan Katarak, Lensa dan Bedah Refraktif",
        description: "",
        icon: "shield",
        color: "green",
        items: [
          {
            slug: "katarak",
            name: "Katarak",
            description:
              "Katarak adalah kekeruhan pada lensa mata yang menyebabkan penglihatan kabur dan buram. Padang Eye Center menyediakan tindakan operasi katarak modern dengan teknologi terkini, termasuk fakoemulsifikasi, untuk mengembalikan kejernihan penglihatan Anda secara aman dan efektif.",
          },
          {
            slug: "kornea",
            name: "Kornea",
            description:
              "Layanan kornea kami menangani berbagai kondisi seperti keratokonus, infeksi kornea, jaringan parut, dan distrofi kornea. Tim spesialis kami menawarkan penanganan mulai dari terapi obat hingga transplantasi kornea (keratoplasti) untuk memulihkan fungsi penglihatan Anda.",
          },
          {
            slug: "laser-vision-correction",
            name: "Laser Vision Correction",
            description:
              "Koreksi penglihatan dengan laser merupakan prosedur bedah refraktif yang dirancang untuk mengurangi atau menghilangkan ketergantungan pada kacamata dan lensa kontak. Kami menyediakan prosedur LASIK, LASEK, dan PRK menggunakan teknologi laser terkini untuk hasil yang presisi dan aman.",
          },
          {
            slug: "lensa",
            name: "Lensa",
            description:
              "Layanan lensa kami mencakup pemasangan lensa intraokular (IOL) premium untuk pasien yang menjalani operasi katarak maupun prosedur lensa refraktif. Tersedia berbagai pilihan lensa termasuk lensa monofokal, multifokal, dan toric untuk memenuhi kebutuhan penglihatan Anda.",
          },
          {
            slug: "flacs",
            name: "FLACS",
            description:
              "Femtosecond Laser-Assisted Cataract Surgery (FLACS) adalah teknologi operasi katarak generasi terbaru yang menggunakan sinar laser femtosecond untuk melakukan tahapan operasi dengan presisi tinggi. Metode ini menghasilkan insisi yang lebih akurat, pemulihan lebih cepat, dan risiko komplikasi yang lebih rendah.",
          },
        ],
      },
      {
        slug: "glaukoma",
        category: "Layanan Glaukoma",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          {
            slug: "glaukoma",
            name: "Glaukoma",
            description:
              "Glaukoma adalah kelompok penyakit mata yang merusak saraf optik, sering disebabkan oleh tekanan bola mata yang tinggi. Tanpa penanganan dini, glaukoma dapat menyebabkan kebutaan permanen. Layanan kami mencakup pemeriksaan tekanan mata, analisis saraf optik, hingga terapi laser dan bedah untuk mengontrol perkembangan penyakit.",
          },
        ],
      },
      {
        slug: "retina",
        category: "Layanan Retina",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          {
            slug: "low-vision",
            name: "Low Vision",
            description:
              "Low Vision adalah kondisi gangguan penglihatan yang tidak dapat dikoreksi sepenuhnya dengan kacamata, lensa kontak, atau operasi. Layanan kami membantu pasien memaksimalkan sisa penglihatan yang ada melalui alat bantu visual khusus, pelatihan adaptasi, dan strategi kompensasi untuk meningkatkan kualitas hidup sehari-hari.",
          },
          {
            slug: "diabetes-education-care",
            name: "Diabetes Education & Care",
            description:
              "Layanan edukasi dan perawatan komprehensif bagi penderita diabetes untuk mencegah dan menangani komplikasi mata akibat diabetes, termasuk retinopati diabetik. Tim kami memberikan pemeriksaan rutin, edukasi gaya hidup, serta penanganan dini untuk menjaga kualitas penglihatan Anda.",
          },
          {
            slug: "vitreoretina",
            name: "Vitreoretina",
            description:
              "Layanan vitreoretina menangani kondisi yang melibatkan retina dan badan kaca (vitreous), seperti ablasi retina, membran epiretinal, lubang makula, dan perdarahan vitreous. Tim subspesialis kami menggunakan teknik bedah vitrektomi dan laser retina terkini untuk menangani kasus-kasus kompleks dengan hasil optimal.",
          },
        ],
      },
      {
        slug: "okuloplasti",
        category: "Layanan Okuloplasti dan Rekonstruksi Orbita",
        description: "",
        icon: "shield",
        color: "green",
        items: [
          {
            slug: "orbital-oculoplastic-reconstructive",
            name: "Orbital, Oculoplastic and Reconstructive",
            description:
              "Layanan okuloplasti dan rekonstruksi orbita menangani berbagai kondisi pada kelopak mata, sistem lakrimal, dan rongga mata (orbita), termasuk ptosis, entropion, ektropion, tumor kelopak mata, dan fraktur orbita. Tim kami menggabungkan keahlian bedah oftalmologi dan estetika untuk hasil fungsional sekaligus kosmetik yang terbaik.",
          },
        ],
      },
      {
        slug: "mata-anak-dan-juling",
        category: "Layanan Mata Anak(Pediatrik) dan Mata Juling",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [
          {
            slug: "ambliopia",
            name: "Ambliopia",
            description:
              "Ambliopia atau 'mata malas' adalah kondisi di mana satu atau kedua mata tidak berkembang dengan baik pada masa kanak-kanak, menyebabkan penglihatan yang lebih lemah pada mata yang terkena. Deteksi dan penanganan dini sangat penting untuk keberhasilan terapi, yang meliputi penutupan mata yang sehat (oklusi) dan latihan penglihatan.",
          },
          {
            slug: "strabismus",
            name: "Strabismus",
            description:
              "Strabismus atau mata juling adalah kondisi di mana kedua mata tidak sejajar dan tidak menunjuk ke arah yang sama secara bersamaan. Kondisi ini dapat menyebabkan ambliopia jika tidak ditangani. Kami menyediakan terapi prisma, injeksi botulinum toksin, hingga koreksi bedah untuk mengembalikan keselarasan mata.",
          },
          {
            slug: "children-eye-strabismus-center",
            name: "Children Eye & Strabismus Center",
            description:
              "Pusat layanan mata anak dan strabismus kami dirancang khusus untuk memberikan kenyamanan dan keamanan bagi pasien anak. Tim dokter spesialis yang berpengalaman menangani berbagai kondisi mata pada anak secara holistik, mulai dari pemeriksaan rutin hingga penanganan kasus kompleks strabismus dengan pendekatan yang ramah anak.",
          },
          {
            slug: "katarak-pada-anak",
            name: "Katarak Pada Anak",
            description:
              "Katarak pada anak (katarak kongenital dan juvenil) membutuhkan penanganan segera untuk mencegah ambliopia dan gangguan perkembangan penglihatan jangka panjang. Tim kami berpengalaman dalam operasi katarak pediatrik dengan teknik yang disesuaikan untuk usia dan kondisi mata anak, dilanjutkan dengan rehabilitasi visual yang komprehensif.",
          },
          {
            slug: "myopia-control-care",
            name: "Myopia Control Care",
            description:
              "Program pengendalian miopia kami dirancang untuk memperlambat perkembangan rabun jauh pada anak dan remaja. Tersedia berbagai pilihan terapi seperti lensa ortokeratologi, lensa kontak miopia kontrol, tetes mata atropin dosis rendah, dan kacamata khusus, yang disesuaikan dengan kebutuhan dan gaya hidup setiap pasien.",
          },
        ],
      },
      {
        slug: "lensa-kontak",
        category: "Layanan Lensa Kontak",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          {
            slug: "contact-lens",
            name: "Contact Lens RGP",
            description:
              "Lensa kontak Rigid Gas Permeable (RGP) adalah lensa kontak keras yang memungkinkan oksigen melewatinya untuk menjaga kesehatan kornea. Lensa RGP ideal untuk pasien dengan astigmatisme tinggi, keratokonus, atau kondisi kornea tidak beraturan yang tidak dapat dikoreksi dengan kacamata atau lensa lunak biasa.",
          },
          {
            slug: "orthokeratology",
            name: "Orthokeratology (Ortho-K)",
            description:
              "Ortokeratologi (Ortho-K) adalah metode koreksi penglihatan non-bedah menggunakan lensa kontak keras khusus yang dipakai saat tidur untuk membentuk ulang kornea secara sementara. Hasilnya, pasien dapat melihat dengan jelas sepanjang hari tanpa kacamata atau lensa kontak. Ortho-K juga terbukti efektif dalam mengendalikan perkembangan miopia pada anak.",
          },
        ],
      },
      {
        slug: "infeksi-imunologi",
        category: "Layanan Infeksi dan Imunologi",
        description: "",
        icon: "shield",
        color: "green",
        items: [
          {
            slug: "infeksi-okular-imunologi",
            name: "Infeksi Okular dan Imunologi",
            description:
              "Layanan infeksi okular dan imunologi menangani kondisi mata yang disebabkan oleh bakteri, virus, jamur, maupun parasit, serta penyakit mata yang berkaitan dengan gangguan sistem imun seperti uveitis, skleritis, dan sindrom mata kering autoimun. Tim kami memberikan diagnosis akurat dan terapi terarah untuk mengatasi infeksi dan peradangan secara efektif.",
          },
        ],
      },
      {
        slug: "neuro-oftalmologi",
        category: "Layanan Neuro-Oftalmologi",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          {
            slug: "neuro-ophthalmology",
            name: "Neuro-Ophthalmology",
            description:
              "Neuro-oftalmologi adalah subspesialisasi yang menangani gangguan penglihatan yang berkaitan dengan sistem saraf, seperti neuritis optik, papilledema, diplopia (penglihatan ganda), kelumpuhan saraf kranial, dan gangguan lapang pandang akibat kondisi neurologis. Layanan kami bekerja sama dengan tim neurologi untuk memberikan diagnosis dan penanganan yang komprehensif.",
          },
        ],
      },
      {
        slug: "mata-kering",
        category: "Layanan Mata Kering",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [
          {
            slug: "dry-eye",
            name: "Dry Eye",
            description:
              "Sindrom mata kering terjadi ketika mata tidak memproduksi cukup air mata atau kualitas air mata tidak memadai untuk menjaga permukaan mata tetap lembab. Gejalanya meliputi rasa terbakar, gatal, perih, dan penglihatan kabur. Kami menawarkan evaluasi menyeluruh dan berbagai pilihan terapi mulai dari tetes mata artifisial, plugs punctal, terapi IPL, hingga penanganan disfungsi kelenjar meibom.",
          },
        ],
      },
      {
        slug: "eye-check",
        category: "Eye Check",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          {
            slug: "eye-check",
            name: "Eye Check",
            description:
              "Pemeriksaan mata menyeluruh yang mencakup uji ketajaman penglihatan, tekanan bola mata, kesehatan segmen anterior dan posterior, serta pemeriksaan refraksi untuk menentukan ukuran kacamata yang tepat. Deteksi dini melalui pemeriksaan rutin sangat penting untuk mencegah dan menangani berbagai penyakit mata sebelum berkembang lebih lanjut.",
          },
        ],
      },
      {
        slug: "teleoftalmologi",
        category: "Teleoftalmologi",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [
          {
            slug: "teleoftalmologi",
            name: "Teleoftalmologi",
            description:
              "Teleoftalmologi memungkinkan pasien untuk berkonsultasi dengan dokter spesialis mata secara daring tanpa perlu datang langsung ke klinik. Layanan ini sangat membantu pasien di daerah terpencil atau dengan keterbatasan mobilitas. Tersedia untuk konsultasi awal, tindak lanjut hasil pemeriksaan, serta edukasi kesehatan mata.",
          },
        ],
      },
      {
        slug: "thyroid-eye-center",
        category: "Thyroid Eye Center",
        description: "",
        icon: "shield",
        color: "green",
        items: [
          {
            slug: "thyroid-eye-center",
            name: "Thyroid Eye Center",
            description:
              "Thyroid Eye Center kami khusus menangani penyakit mata terkait gangguan tiroid (Graves' ophthalmopathy), yang dapat menyebabkan mata menonjol (proptosis), pembengkakan kelopak mata, penglihatan ganda, dan bahkan ancaman kehilangan penglihatan. Tim multidisiplin kami bekerja sama dengan spesialis endokrin untuk memberikan penanganan holistik pada setiap stadium penyakit.",
          },
        ],
      },
    ],

    en: [
      {
        slug: "cataract-lens-refractive",
        category: "Cataract, Lens & Refractive Surgery Services",
        description: "",
        icon: "shield",
        color: "green",
        items: [
          {
            slug: "cataract",
            name: "Cataract",
            description:
              "A cataract is a clouding of the eye's natural lens that causes blurry and dim vision. Padang Eye Center offers modern cataract surgery using the latest technology, including phacoemulsification, to safely and effectively restore clear vision and improve your quality of life.",
          },
          {
            slug: "cornea",
            name: "Cornea",
            description:
              "Our cornea service addresses conditions such as keratoconus, corneal infections, scarring, and dystrophies. Our specialist team offers a full range of treatments from medical therapy to corneal transplantation (keratoplasty) to restore your visual function.",
          },
          {
            slug: "laser-vision-correction",
            name: "Laser Vision Correction",
            description:
              "Laser vision correction is a refractive surgical procedure designed to reduce or eliminate dependence on glasses and contact lenses. We offer LASIK, LASEK, and PRK procedures using cutting-edge laser technology for precise and safe outcomes.",
          },
          {
            slug: "lens",
            name: "Lens",
            description:
              "Our lens service includes the implantation of premium intraocular lenses (IOLs) for patients undergoing cataract surgery or refractive lens procedures. A variety of lens options are available, including monofocal, multifocal, and toric lenses, to suit your individual vision needs.",
          },
          {
            slug: "flacs",
            name: "FLACS",
            description:
              "Femtosecond Laser-Assisted Cataract Surgery (FLACS) is the latest generation of cataract surgery technology, using a femtosecond laser to perform key surgical steps with exceptional precision. This method offers more accurate incisions, faster recovery, and a lower risk of complications compared to conventional techniques.",
          },
        ],
      },
      {
        slug: "glaucoma",
        category: "Glaucoma Services",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          {
            slug: "glaucoma",
            name: "Glaucoma",
            description:
              "Glaucoma is a group of eye diseases that damage the optic nerve, often caused by elevated intraocular pressure. Without early intervention, glaucoma can lead to permanent blindness. Our services include intraocular pressure testing, optic nerve analysis, laser therapy, and surgery to control disease progression.",
          },
        ],
      },
      {
        slug: "retina",
        category: "Retina Services",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          {
            slug: "low-vision",
            name: "Low Vision",
            description:
              "Low vision is a visual impairment that cannot be fully corrected with glasses, contact lenses, or surgery. Our service helps patients maximize their remaining vision through specialized visual aids, adaptive training, and compensatory strategies to enhance their daily quality of life.",
          },
          {
            slug: "diabetes-education-care",
            name: "Diabetes Education & Care",
            description:
              "Comprehensive education and care services for diabetic patients to prevent and manage eye complications caused by diabetes, including diabetic retinopathy. Our team provides regular screenings, lifestyle education, and early treatment to preserve your vision quality.",
          },
          {
            slug: "vitreoretina",
            name: "Vitreoretina",
            description:
              "Our vitreoretinal service manages conditions involving the retina and vitreous body, such as retinal detachment, epiretinal membrane, macular hole, and vitreous hemorrhage. Our subspecialist team employs the latest vitrectomy and retinal laser techniques to address complex cases with optimal results.",
          },
        ],
      },
      {
        slug: "oculoplasty",
        category: "Oculoplasty & Orbital Reconstruction",
        description: "",
        icon: "shield",
        color: "green",
        items: [
          {
            slug: "orbital-oculoplastic-reconstructive",
            name: "Orbital, Oculoplastic and Reconstructive",
            description:
              "Our oculoplasty and orbital reconstruction service treats conditions of the eyelids, lacrimal system, and orbit, including ptosis, entropion, ectropion, eyelid tumors, and orbital fractures. Our team combines ophthalmic surgical expertise with aesthetic principles to achieve the best functional and cosmetic outcomes.",
          },
        ],
      },
      {
        slug: "pediatric-and-strabismus",
        category: "Pediatric & Strabismus Eye Services",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [
          {
            slug: "amblyopia",
            name: "Amblyopia",
            description:
              "Amblyopia, or 'lazy eye', is a condition where one or both eyes do not develop properly in childhood, resulting in reduced vision in the affected eye. Early detection and treatment are critical for success, and may include patching the stronger eye and vision therapy exercises.",
          },
          {
            slug: "strabismus",
            name: "Strabismus",
            description:
              "Strabismus is a condition in which the two eyes are not aligned and do not point in the same direction simultaneously. If left untreated, it can lead to amblyopia. We provide prism therapy, botulinum toxin injections, and surgical correction to restore proper eye alignment.",
          },
          {
            slug: "children-eye-strabismus-center",
            name: "Children Eye & Strabismus Center",
            description:
              "Our Children Eye & Strabismus Center is specially designed to provide comfort and safety for young patients. Our experienced team of specialists addresses a wide range of pediatric eye conditions holistically, from routine check-ups to the management of complex strabismus cases, using a child-friendly approach.",
          },
          {
            slug: "pediatric-cataract",
            name: "Pediatric Cataract",
            description:
              "Pediatric cataracts (congenital and juvenile) require prompt treatment to prevent amblyopia and long-term visual developmental issues. Our team is experienced in pediatric cataract surgery with techniques tailored to the child's age and eye condition, followed by comprehensive visual rehabilitation.",
          },
          {
            slug: "myopia-control-care",
            name: "Myopia Control Care",
            description:
              "Our myopia control program is designed to slow the progression of nearsightedness in children and adolescents. Various treatment options are available, including orthokeratology lenses, myopia-control contact lenses, low-dose atropine eye drops, and specialty spectacles, tailored to each patient's needs and lifestyle.",
          },
        ],
      },
      {
        slug: "contact-lens",
        category: "Contact Lens Services",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          {
            slug: "contact-lens",
            name: "Contact Lens RGP",
            description:
              "Rigid Gas Permeable (RGP) contact lenses are hard lenses that allow oxygen to pass through to maintain corneal health. RGP lenses are ideal for patients with high astigmatism, keratoconus, or irregular corneal conditions that cannot be adequately corrected with glasses or standard soft lenses.",
          },
          {
            slug: "orthokeratology",
            name: "Orthokeratology (Ortho-K)",
            description:
              "Orthokeratology (Ortho-K) is a non-surgical vision correction method using specially designed rigid contact lenses worn overnight to temporarily reshape the cornea. The result is clear vision throughout the day without glasses or contact lenses. Ortho-K has also been proven effective in controlling myopia progression in children.",
          },
        ],
      },
      {
        slug: "infection-immunology",
        category: "Ocular Infection & Immunology",
        description: "",
        icon: "shield",
        color: "green",
        items: [
          {
            slug: "ocular-infection-immunology",
            name: "Ocular Infection & Immunology",
            description:
              "Our ocular infection and immunology service manages eye conditions caused by bacteria, viruses, fungi, and parasites, as well as immune-related eye diseases such as uveitis, scleritis, and autoimmune dry eye syndrome. Our team provides accurate diagnosis and targeted therapy to effectively resolve infections and inflammation.",
          },
        ],
      },
      {
        slug: "neuro-ophthalmology",
        category: "Neuro-Ophthalmology",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          {
            slug: "neuro-ophthalmology",
            name: "Neuro-Ophthalmology",
            description:
              "Neuro-ophthalmology is a subspecialty addressing visual disorders related to the nervous system, including optic neuritis, papilledema, diplopia (double vision), cranial nerve palsies, and visual field defects from neurological conditions. Our service collaborates closely with the neurology team for comprehensive diagnosis and management.",
          },
        ],
      },
      {
        slug: "dry-eye",
        category: "Dry Eye Services",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [
          {
            slug: "dry-eye",
            name: "Dry Eye",
            description:
              "Dry eye syndrome occurs when the eyes do not produce enough tears, or when tear quality is insufficient to keep the eye surface adequately lubricated. Symptoms include burning, itching, stinging, and blurred vision. We offer thorough evaluation and a range of treatment options including artificial tears, punctal plugs, IPL therapy, and meibomian gland dysfunction management.",
          },
        ],
      },
      {
        slug: "eye-check",
        category: "Eye Check",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          {
            slug: "eye-check",
            name: "Eye Check",
            description:
              "A comprehensive eye examination covering visual acuity testing, intraocular pressure measurement, anterior and posterior segment health assessment, and refraction to determine the correct prescription. Regular eye check-ups are essential for the early detection and prevention of eye diseases before they progress further.",
          },
        ],
      },
      {
        slug: "teleophthalmology",
        category: "Teleophthalmology",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [
          {
            slug: "teleophthalmology",
            name: "Teleophthalmology",
            description:
              "Teleophthalmology enables patients to consult with our eye specialists remotely without needing to visit the clinic in person. This service is particularly beneficial for patients in remote areas or those with limited mobility. It is available for initial consultations, follow-up visits, and eye health education.",
          },
        ],
      },
      {
        slug: "thyroid-eye-center",
        category: "Thyroid Eye Center",
        description: "",
        icon: "shield",
        color: "green",
        items: [
          {
            slug: "thyroid-eye-center",
            name: "Thyroid Eye Center",
            description:
              "Our Thyroid Eye Center specializes in managing thyroid-related eye disease (Graves' ophthalmopathy), which can cause eye protrusion (proptosis), eyelid swelling, double vision, and even a threat to vision. Our multidisciplinary team collaborates with endocrinology specialists to provide holistic management at every stage of the disease.",
          },
        ],
      },
    ],

    ar: [
      {
        slug: "katarak-lensa-refraktif",
        category: "خدمات المياه البيضاء والعدسات وجراحة تصحيح الإبصار",
        description: "",
        icon: "shield",
        color: "green",
        items: [
          {
            slug: "cataract",
            name: "المياه البيضاء",
            description:
              "المياه البيضاء هي تعتيم العدسة الطبيعية للعين مما يسبب ضبابية الرؤية وتشويشها. يوفر مركز Padang Eye Center عمليات إزالة المياه البيضاء بأحدث التقنيات، بما في ذلك استحلاب العدسة (فاكو)، لاستعادة وضوح الرؤية بأمان وفعالية.",
          },
          {
            slug: "cornea",
            name: "القرنية",
            description:
              "تعالج خدمة القرنية لدينا حالات متعددة كالقرنية المخروطية والتهابات القرنية والندبات والحثول القرنية. يقدم فريق المتخصصين لدينا طيفاً كاملاً من العلاجات، من العلاج الدوائي إلى زراعة القرنية (رأب القرنية) لاستعادة الوظيفة البصرية.",
          },
          {
            slug: "laser-vision-correction",
            name: "تصحيح الإبصار بالليزر",
            description:
              "تصحيح الإبصار بالليزر هو إجراء جراحي انكساري مصمم لتقليل الاعتماد على النظارات والعدسات اللاصقة أو إزالته. نقدم إجراءات LASIK وLASEK وPRK باستخدام أحدث تقنيات الليزر لنتائج دقيقة وآمنة.",
          },
          {
            slug: "lens",
            name: "العدسات",
            description:
              "تشمل خدمة العدسات لدينا زراعة العدسات داخل العين (IOL) المتميزة للمرضى الخاضعين لعملية إزالة المياه البيضاء أو إجراءات العدسات الانكسارية. تتوفر خيارات متنوعة من العدسات أحادية البؤرة ومتعددة البؤرة والتوريك لتلبية احتياجاتك البصرية.",
          },
          {
            slug: "flacs",
            name: "FLACS",
            description:
              "جراحة المياه البيضاء بمساعدة ليزر الفيمتوثانية (FLACS) هي أحدث جيل في تقنيات جراحة المياه البيضاء، تستخدم ليزر الفيمتوثانية لإجراء خطوات الجراحة الرئيسية بدقة فائقة. تتميز بشقوق أكثر دقة وتعافٍ أسرع ومخاطر مضاعفات أقل مقارنة بالتقنيات التقليدية.",
          },
        ],
      },
      {
        slug: "glaukoma",
        category: "خدمات الجلوكوما",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          {
            slug: "glaucoma",
            name: "الجلوكوما",
            description:
              "الجلوكوما (المياه الزرقاء) هي مجموعة من أمراض العين التي تتلف العصب البصري، وغالباً ما تنجم عن ارتفاع ضغط العين. بدون تدخل مبكر، قد يؤدي الجلوكوما إلى العمى الدائم. تشمل خدماتنا قياس ضغط العين وتحليل العصب البصري والعلاج بالليزر والجراحة للسيطرة على تطور المرض.",
          },
        ],
      },
      {
        slug: "retina",
        category: "خدمات الشبكية",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          {
            slug: "low-vision",
            name: "ضعف البصر",
            description:
              "ضعف البصر هو إعاقة بصرية لا يمكن تصحيحها بالكامل بالنظارات أو العدسات اللاصقة أو الجراحة. تساعد خدمتنا المرضى على تعظيم استخدام البصر المتبقي من خلال الوسائل البصرية المتخصصة والتدريب التكيفي واستراتيجيات التعويض لتحسين جودة حياتهم اليومية.",
          },
          {
            slug: "diabetes-education-care",
            name: "التثقيف والرعاية لمرضى السكري",
            description:
              "خدمات تثقيفية ورعاية شاملة لمرضى السكري للوقاية من مضاعفات العين الناجمة عن مرض السكري وعلاجها، بما في ذلك اعتلال الشبكية السكري. يقدم فريقنا فحوصات منتظمة وتثقيفاً حول نمط الحياة وعلاجاً مبكراً للحفاظ على جودة بصرك.",
          },
          {
            slug: "vitreoretina",
            name: "جراحة الشبكية والجسم الزجاجي",
            description:
              "تعالج خدمة الشبكية والجسم الزجاجي الحالات المتعلقة بالشبكية والجسم الزجاجي، كانفصال الشبكية والغشاء فوق الشبكي والثقب البقعي ونزيف الجسم الزجاجي. يستخدم فريق متخصصينا أحدث تقنيات استئصال الزجاجية ولیزر الشبكية لمعالجة الحالات المعقدة بأفضل النتائج.",
          },
        ],
      },
      {
        slug: "okuloplasti",
        category: "خدمات تجميل العين وإعادة بناء محجر العين",
        description: "",
        icon: "shield",
        color: "green",
        items: [
          {
            slug: "orbital-oculoplastic-reconstructive",
            name: "جراحة محجر العين والتجميل وإعادة البناء",
            description:
              "تعالج خدمة تجميل العين وإعادة بناء المحجر حالات الجفنين والجهاز الدمعي والمحجر، بما في ذلك الجفن المتدلي والانقلاب الداخلي والخارجي وأورام الجفن وكسور المحجر. يجمع فريقنا بين الخبرة الجراحية في طب العيون ومبادئ التجميل لتحقيق أفضل النتائج الوظيفية والجمالية.",
          },
        ],
      },
      {
        slug: "mata-anak-dan-juling",
        category: "خدمات عيون الأطفال والحول",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [
          {
            slug: "amblyopia",
            name: "كسل العين",
            description:
              "كسل العين (الغمش) هو حالة لا تتطور فيها إحدى العينين أو كلتاهما بشكل صحيح في مرحلة الطفولة، مما يؤدي إلى ضعف الرؤية في العين المصابة. يُعدّ الكشف المبكر والعلاج في الوقت المناسب أمراً بالغ الأهمية، ويشمل العلاج تغطية العين السليمة وتمارين العلاج البصري.",
          },
          {
            slug: "strabismus",
            name: "الحول",
            description:
              "الحول هو حالة لا تكون فيها العينان متوازيتين ولا تشيران إلى الاتجاه ذاته في آنٍ واحد. إذا تُرك دون علاج، قد يؤدي إلى كسل العين. نقدم علاجاً بالعدسات المنشورية وحقن توكسين البوتولينوم والتصحيح الجراحي لاستعادة محاذاة العين الصحيحة.",
          },
          {
            slug: "children-eye-strabismus-center",
            name: "مركز عيون الأطفال والحول",
            description:
              "تم تصميم مركز عيون الأطفال والحول لدينا خصيصاً لتوفير الراحة والأمان للمرضى الصغار. يتولى فريق متخصصينا ذوو الخبرة معالجة مجموعة واسعة من حالات العين لدى الأطفال بشكل شامل، من الفحوصات الروتينية إلى إدارة حالات الحول المعقدة، وذلك بأسلوب ودي يناسب الأطفال.",
          },
          {
            slug: "pediatric-cataract",
            name: "المياه البيضاء عند الأطفال",
            description:
              "تستلزم المياه البيضاء عند الأطفال (الخلقية واليافعة) علاجاً فورياً لمنع كسل العين ومشاكل تطور الرؤية على المدى البعيد. يتمتع فريقنا بخبرة واسعة في جراحة المياه البيضاء للأطفال بتقنيات ملائمة لعمر الطفل وحالة عينه، يعقبها إعادة تأهيل بصري شامل.",
          },
          {
            slug: "myopia-control-care",
            name: "علاج التحكم بقصر النظر",
            description:
              "يهدف برنامج التحكم في قصر النظر لدينا إلى إبطاء تطور قصر النظر لدى الأطفال والمراهقين. تتوفر خيارات علاجية متعددة تشمل عدسات تقويم القرنية وعدسات اللاصقة للتحكم في قصر النظر وقطرات الأتروبين منخفضة الجرعة والنظارات الخاصة، وذلك بما يناسب احتياجات كل مريض وأسلوب حياته.",
          },
        ],
      },
      {
        slug: "lensa-kontak",
        category: "خدمات العدسات اللاصقة",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          {
            slug: "contact-lens",
            name: "العدسات اللاصقة",
            description:
              "العدسات اللاصقة الصلبة نافذة للغاز (RGP) هي عدسات صلبة تسمح بمرور الأكسجين للحفاظ على صحة القرنية. تُعدّ عدسات RGP مثالية لمرضى الاستيغماتيزم الشديد أو القرنية المخروطية أو حالات القرنية غير المنتظمة التي لا تُصحَّح بشكل كافٍ بالنظارات أو العدسات الناعمة العادية.",
          },
          {
            slug: "orthokeratology",
            name: "تقويم القرنية (أورثو-كي)",
            description:
              "تقويم القرنية (Ortho-K) هو طريقة لتصحيح الإبصار غير الجراحية باستخدام عدسات لاصقة صلبة مصممة خصيصاً تُلبَس أثناء النوم لإعادة تشكيل القرنية مؤقتاً. والنتيجة رؤية واضحة طوال اليوم دون الحاجة إلى نظارات أو عدسات لاصقة. كما ثبتت فعالية هذا العلاج في إبطاء تطور قصر النظر لدى الأطفال.",
          },
        ],
      },
      {
        slug: "infeksi-imunologi",
        category: "خدمات التهابات العين والمناعة",
        description: "",
        icon: "shield",
        color: "green",
        items: [
          {
            slug: "ocular-infection-immunology",
            name: "التهابات العين والمناعة",
            description:
              "تعالج خدمة التهابات العين والمناعة الحالات الناجمة عن البكتيريا والفيروسات والفطريات والطفيليات، فضلاً عن أمراض العين المرتبطة باضطرابات المناعة كالتهاب العنبية والصلبة ومتلازمة جفاف العين المناعية الذاتية. يقدم فريقنا تشخيصاً دقيقاً وعلاجاً موجهاً للقضاء على العدوى والالتهابات بفعالية.",
          },
        ],
      },
      {
        slug: "neuro-oftalmologi",
        category: "خدمات طب أعصاب العيون",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          {
            slug: "neuro-ophthalmology",
            name: "طب أعصاب العيون",
            description:
              "طب أعصاب العيون هو تخصص فرعي يعالج اضطرابات الرؤية المرتبطة بالجهاز العصبي، بما في ذلك التهاب العصب البصري وتورم حليمة العصب البصري والازدواجية وشلل الأعصاب القحفية وعيوب المجال البصري الناجمة عن الحالات العصبية. تتعاون خدمتنا عن كثب مع فريق طب الأعصاب لتقديم تشخيص وعلاج شامل.",
          },
        ],
      },
      {
        slug: "mata-kering",
        category: "خدمات علاج جفاف العين",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [
          {
            slug: "dry-eye",
            name: "جفاف العين",
            description:
              "يحدث جفاف العين عندما لا تنتج العينان كمية كافية من الدموع أو تكون جودة الدموع غير كافية للحفاظ على ترطيب سطح العين. تشمل الأعراض الحرق والحكة والوخز وضبابية الرؤية. نقدم تقييماً شاملاً وخيارات علاجية متنوعة تشمل قطرات الدموع الاصطناعية وسدادات القنوات الدمعية وعلاج IPL وإدارة خلل وظيفة الغدد الميبومية.",
          },
        ],
      },
      {
        slug: "eye-check",
        category: "فحص العين",
        description: "",
        icon: "eye",
        color: "orange",
        items: [
          {
            slug: "eye-check",
            name: "فحص العين",
            description:
              "فحص شامل للعين يغطي اختبار حدة الإبصار وقياس ضغط العين وتقييم صحة الجزء الأمامي والخلفي من العين والانكسار لتحديد الوصفة الصحيحة. تُعدّ الفحوصات الدورية المنتظمة ضرورية للكشف المبكر عن أمراض العين والوقاية منها قبل أن تتطور أكثر.",
          },
        ],
      },
      {
        slug: "teleoftalmologi",
        category: "طب العيون عن بُعد",
        description: "",
        icon: "spark",
        color: "gradient",
        items: [
          {
            slug: "teleophthalmology",
            name: "طب العيون عن بُعد",
            description:
              "يتيح طب العيون عن بُعد للمرضى التشاور مع متخصصينا في طب العيون عن بُعد دون الحاجة إلى زيارة العيادة شخصياً. هذه الخدمة مفيدة بشكل خاص للمرضى في المناطق النائية أو ذوي القدرة المحدودة على التنقل، وهي متاحة للاستشارات الأولية والمتابعة وتثقيف صحة العين.",
          },
        ],
      },
      {
        slug: "thyroid-eye-center",
        category: "مركز اعتلال العين المرتبط بالغدة الدرقية",
        description: "",
        icon: "shield",
        color: "green",
        items: [
          {
            slug: "thyroid-eye-center",
            name: "مركز اعتلال العين المرتبط بالغدة الدرقية",
            description:
              "يتخصص مركزنا في علاج مرض العين المرتبط بالغدة الدرقية (اعتلال عين غريفز)، الذي قد يسبب بروز العين (جحوظ)، وتورم الجفن، والازدواجية، وحتى التهديد بفقدان البصر. يتعاون فريقنا متعدد التخصصات مع أطباء الغدد الصماء لتقديم رعاية شاملة في كل مرحلة من مراحل المرض.",
          },
        ],
      },
    ],
  };

  return data[lang] || data.id;
};
