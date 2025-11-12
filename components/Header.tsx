"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function Header() {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const isProductPage = pathname?.startsWith("/products/");

  const toggleLanguage = () => {
    setLang(lang === "ar" ? "en" : "ar");
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/95 backdrop-blur-xl border-b border-white/10"
      dir="ltr"
    >
      <div className="container mx-auto px-6 py-4 flex flex-row items-center justify-between">
        {isProductPage ? (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="shrink-0"
          >
            <Button
              variant="outline"
              onClick={() => router.back()}
              className="gap-2 cursor-pointer bg-transparent hover:bg-white/10 border-white/20 text-white text-sm px-4 py-2 rounded-lg"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{t.product.back}</span>
            </Button>
          </motion.div>
        ) : (
          <Link href="/" className="shrink-0">
            <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">
                  {lang === "ar" ? "د. أحمد غزيل" : "Dr. Ahmed"}
                </span>
                <span className="text-xs text-white/60">
                  {lang === "ar" ? "أدوات طبية متخصصة" : "Medical Equipment"}
                </span>
              </div>
            </motion.div>
          </Link>
        )}

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="shrink-0"
        >
          <Button
            onClick={toggleLanguage}
            variant="outline"
            size="sm"
            className="font-medium cursor-pointer bg-transparent hover:bg-white/10 border-white/20 text-white text-sm px-4 py-2 rounded-lg"
          >
            {lang === "ar" ? "English" : "العربية"}
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
}
