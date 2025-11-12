export interface Product {
  id: number
  name: {
    ar: string
    en: string
  }
  price: number
  image: string
  images?: string[]
  description?: {
    ar: string
    en: string
  }
  specifications?: {
    ar: string[]
    en: string[]
  }
}

export const products: Product[] = [
  {
    id: 1,
    name: { ar: "سماعة طبية رقمية", en: "Digital Stethoscope" },
    price: 850,
    image: "/images/Product1-1.jpeg",
    images: [
      "/images/Product1-1.jpeg",
      "/images/Product1-2.jpeg",
      "/images/Product1-3.jpeg",
    ],
    description: {
      ar: "سماعة طبية رقمية متطورة مع تقنية عالية الدقة لسماع الأصوات القلبية والرئوية بوضوح تام. تتميز بتقليل الضوضاء المحيطة وتحسين جودة الصوت.",
      en: "Advanced digital stethoscope with high-resolution technology for clear cardiac and pulmonary sound auscultation. Features noise reduction and enhanced sound quality.",
    },
    specifications: {
      ar: [
        "دقة صوت عالية جداً",
        "تقليل الضوضاء المحيطة",
        "بطارية قابلة لإعادة الشحن",
        "متوافق مع تطبيقات الهاتف",
        "ضمان سنتين",
      ],
      en: [
        "Ultra-high sound precision",
        "Ambient noise reduction",
        "Rechargeable battery",
        "Smartphone app compatible",
        "2-year warranty",
      ],
    },
  },
  {
    id: 2,
    name: { ar: "جهاز قياس ضغط الدم", en: "Blood Pressure Monitor" },
    price: 450,
    image: "/images/Product2-1.jpeg",
    images: [
      "/images/Product2-1.jpeg",
      "/images/Product2-2.jpeg",
      "/images/Product2-3.jpeg",
    ],
    description: {
      ar: "جهاز قياس ضغط الدم الاحترافي مع شاشة LCD كبيرة وذاكرة لـ 200 قياس. سهل الاستخدام ودقيق للغاية.",
      en: "Professional blood pressure monitor with large LCD display and memory for 200 readings. Easy to use and highly accurate.",
    },
    specifications: {
      ar: [
        "شاشة LCD كبيرة",
        "ذاكرة 200 قياس",
        "كشف عدم انتظام ضربات القلب",
        "حزام قابل للتعديل",
        "ضمان سنة واحدة",
      ],
      en: [
        "Large LCD display",
        "200 reading memory",
        "Irregular heartbeat detection",
        "Adjustable cuff",
        "1-year warranty",
      ],
    },
  },
  {
    id: 3,
    name: { ar: "مجموعة أدوات جراحية", en: "Surgical Instruments Set" },
    price: 2500,
    image: "/images/Product1-1.jpeg",
    images: [
      "/images/Product1-1.jpeg",
      "/images/Product1-2.jpeg",
      "/images/Product1-3.jpeg",
    ],
    description: {
      ar: "مجموعة شاملة من الأدوات الجراحية عالية الجودة مصنوعة من الفولاذ المقاوم للصدأ. مناسبة لجميع الإجراءات الجراحية الأساسية.",
      en: "Comprehensive set of high-quality surgical instruments made from stainless steel. Suitable for all basic surgical procedures.",
    },
    specifications: {
      ar: [
        "فولاذ مقاوم للصدأ",
        "30 قطعة أساسية",
        "معقمة ومغلفة",
        "متوافقة مع المعايير الطبية",
        "ضمان 5 سنوات",
      ],
      en: [
        "Stainless steel construction",
        "30 essential pieces",
        "Sterilized and packaged",
        "Medical grade certified",
        "5-year warranty",
      ],
    },
  },
  {
    id: 4,
    name: { ar: "ميزان حرارة رقمي", en: "Digital Thermometer" },
    price: 120,
    image: "/images/Product1-1.jpeg",
    images: [
      "/images/Product1-1.jpeg",
      "/images/Product1-2.jpeg",
      "/images/Product1-3.jpeg",
    ],
    description: {
      ar: "ميزان حرارة رقمي سريع ودقيق مع شاشة كبيرة سهلة القراءة. مناسب للاستخدام الفموي والإبطي.",
      en: "Fast and accurate digital thermometer with large, easy-to-read display. Suitable for oral and axillary use.",
    },
    specifications: {
      ar: [
        "قياس سريع في 10 ثواني",
        "شاشة كبيرة واضحة",
        "مقاوم للماء",
        "إيقاف تلقائي",
        "ضمان سنة واحدة",
      ],
      en: [
        "10-second fast reading",
        "Large clear display",
        "Water resistant",
        "Auto shut-off",
        "1-year warranty",
      ],
    },
  },
  {
    id: 5,
    name: { ar: "جهاز قياس السكر", en: "Glucose Meter" },
    price: 350,
    image: "/images/Product1-1.jpeg",
    images: [
      "/images/Product1-1.jpeg",
      "/images/Product1-2.jpeg",
      "/images/Product1-3.jpeg",
    ],
    description: {
      ar: "جهاز قياس السكر في الدم مع تقنية متقدمة ونتائج دقيقة في 5 ثواني. يتضمن تطبيق ذكي لتتبع النتائج.",
      en: "Blood glucose meter with advanced technology and accurate results in 5 seconds. Includes smart app for tracking results.",
    },
    specifications: {
      ar: [
        "نتائج في 5 ثواني",
        "ذاكرة 500 قياس",
        "تطبيق ذكي متوافق",
        "كود QR للنتائج",
        "ضمان سنتين",
      ],
      en: [
        "5-second results",
        "500 reading memory",
        "Smart app compatible",
        "QR code for results",
        "2-year warranty",
      ],
    },
  },
  {
    id: 6,
    name: { ar: "أوكسيمتر نبضي", en: "Pulse Oximeter" },
    price: 280,
    image: "/images/Product1-1.jpeg",
    images: [
      "/images/Product1-1.jpeg",
      "/images/Product1-2.jpeg",
      "/images/Product1-3.jpeg",
    ],
    description: {
      ar: "أوكسيمتر نبضي محمول لقياس مستوى الأكسجين في الدم ومعدل النبض. مناسب للاستخدام المنزلي والطبي.",
      en: "Portable pulse oximeter for measuring blood oxygen levels and pulse rate. Suitable for home and medical use.",
    },
    specifications: {
      ar: [
        "قياس فوري",
        "شاشة OLED ملونة",
        "كشف الحركة",
        "إيقاف تلقائي",
        "ضمان سنة واحدة",
      ],
      en: [
        "Instant measurement",
        "Color OLED display",
        "Motion detection",
        "Auto shut-off",
        "1-year warranty",
      ],
    },
  },
]

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getRelatedProducts(currentId: number, limit: number = 3): Product[] {
  return products.filter((product) => product.id !== currentId).slice(0, limit)
}

