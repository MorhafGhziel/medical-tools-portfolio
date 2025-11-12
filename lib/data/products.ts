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
  catalog?: string
}

export const products: Product[] = [
  {
    id: 1,
    name: { ar: "زرعات نوتش للأسنان", en: "Notch Implant" },
    price: 450,
    image: "/product-1/Notch-Implant.jpeg",
    images: ["/product-1/Notch-Implant.jpeg"],
    description: {
      ar: "نظام زراعة أسنان عالي الجودة مصمم بدقة وقوة وثبات طويل الأمد. مناسب لجميع أنواع العظام وجميع الاستخدامات الجراحية.",
      en: "High-quality dental implant system engineered for precision, strength, and long-term stability. Designed for all bone types and surgical indications.",
    },
    specifications: {
      ar: [
        "صناعة ألمانية",
        "تيتانيوم درجة 5",
        "وصلة مخروطية داخلية",
        "سطح حيوي Calcioss™",
        "متوافق مع جميع تركيبات NOTCH®",
      ],
      en: [
        "Made in Germany",
        "Titanium Grade 5",
        "Internal Conical Connection",
        "Biocompatible Calcioss™ Surface",
        "Compatible with all NOTCH® prosthetics",
      ],
    },
    catalog: "/product-1/NOTCH_Catalog.pdf",
  },
  {
    id: 2,
    name: { ar: "أدوات طب الأسنان", en: "Dental Instruments" },
    price: 0,
    image: "/product-2/Dental-instruments.png",
    images: ["/product-2/Dental-instruments.png"],
    description: {
      ar: "أدوات طب أسنان احترافية مصممة بدقة وراحة ومتانة عالية. توفر كل أداة أداءً موثوقًا وسهولة في الاستخدام اليومي داخل العيادات.",
      en: "Professional dental instruments designed for precision, comfort, and durability. Each tool ensures reliable performance and smooth handling for daily clinical use.",
    },
    specifications: {
      ar: [
        "مصنوعة من الستانلس ستيل عالي الجودة",
        "مقابض مريحة غير قابلة للانزلاق",
        "قابلة للتعقيم ومقاومة للتآكل",
        "متوفرة بعدة أشكال وأحجام",
        "مثالية للعيادات والمختبرات السنية",
      ],
      en: [
        "Made from premium stainless steel",
        "Ergonomic, non-slip handles",
        "Autoclavable and corrosion-resistant",
        "Available in multiple models and sizes",
        "Ideal for clinics and dental laboratories",
      ],
    },
    catalog: "/product-2/Dental-instruments.pdf",
  },
  {
    id: 3,
    name: { ar: "عظم أخضر", en: "Green Bone" },
    price: 0,
    image: "/product-3/Green-Bone.jpeg",
    images: ["/product-3/Green-Bone.jpeg"],
    description: {
      ar: "عظم أخضر متطور مخصص لعمليات زراعة الأسنان، يتميز بمسامية عالية تساعد على تسريع تجديد العظم، مع توافق حيوي ممتاز. مثالي لحفظ التجويف وعمليات رفع الجيب الأنفي.",
      en: "Advanced Green Bone designed for dental implant procedures. It features high porosity for faster bone regeneration and exceptional biocompatibility. Perfect for socket preservation and sinus lift surgeries.",
    },
    specifications: {
      ar: [
        "مصنوع من مواد صناعية نقية بنسبة 100٪",
        "هيكل عالي المسامية",
        "اندماج عظمي سريع",
        "معقم وجاهز للاستخدام",
        "متوفر بأحجام حبيبية متعددة",
      ],
      en: [
        "100% Synthetic Material",
        "High Porosity Structure",
        "Rapid Osseointegration",
        "Sterile and Ready to Use",
        "Available in Multiple Granule Sizes",
      ],
    },
    catalog: "/product-3/Green-Bone.pdf",
  },
]

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getRelatedProducts(currentId: number, limit: number = 3): Product[] {
  return products.filter((product) => product.id !== currentId).slice(0, limit)
}

