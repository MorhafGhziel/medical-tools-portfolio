export const translations = {
  ar: {
    hero: {
      title: "د. أحمد غزيل",
      subtitle: "دكتور وبائع أدوات طبية متخصصة",
      cta: "تصفح المنتجات",
    },
    products: {
      title: "منتجاتنا الطبية",
      subtitle: "أدوات طبية عالية الجودة لجميع التخصصات",
      currency: "ريال",
      order: "اطلب الآن",
      viewDetails: "عرض التفاصيل",
      searchPlaceholder: "ابحث عن منتج...",
    },
    footer: {
      contact: "تواصل معنا",
      phone: "2048 470 59 966+",
      email: "ahmedghziel@gmail.com",
      address: "الرياض، المملكة العربية السعودية",
      whatsapp: "اطلب عبر واتساب",
      rights: "© 2025 د. أحمد غزيل. جميع الحقوق محفوظة.",
    },
    product: {
      back: "العودة للمنتجات",
      order: "اطلب الآن",
      description: "الوصف",
      specifications: "المواصفات",
      related: "منتجات مشابهة",
      downloadCatalog: "تحميل الكتالوج",
      contactForPrice: "تواصل للاستفسار عن السعر",
    },
  },
  en: {
    hero: {
      title: "Dr. Ahmed Ghziel",
      subtitle: "Consultant & Specialized Medical Tools Provider",
      cta: "Browse Products",
    },
    products: {
      title: "Our Medical Products",
      subtitle: "High-quality medical tools for all specialties",
      currency: "SAR",
      order: "Order Now",
      viewDetails: "View Details",
      searchPlaceholder: "Search for a product...",
    },
    footer: {
      contact: "Contact Us",
      phone: "+966 59 470 2048",
      email: "ahmedghziel@gmail.com",
      address: "Riyadh, Saudi Arabia",
      whatsapp: "Order via WhatsApp",
      rights: "© 2025 Dr. Ahmed Ghziel. All rights reserved.",
    },
    product: {
      back: "Back to Products",
      order: "Order Now",
      description: "Description",
      specifications: "Specifications",
      related: "Related Products",
      downloadCatalog: "Download Catalog",
      contactForPrice: "Contact for Price",
    },
  },
} as const

export type Language = keyof typeof translations

