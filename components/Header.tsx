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
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50"
      dir="ltr"
    >
      <div className="container mx-auto px-4 md:px-6 py-2 md:py-4 flex flex-row items-center">
        {isProductPage ? (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="shrink-0"
          >
            <Button
              variant="outline"
              onClick={() => router.back()}
              className="gap-1.5 md:gap-2 cursor-pointer bg-slate-800/80 hover:bg-slate-800 border-slate-700 text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">{t.product.back}</span>
            </Button>
          </motion.div>
        ) : (
          <Link href="/" className="shrink-0">
            <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
              <div className="flex flex-col">
                <span className="text-base md:text-xl font-bold text-white">
                  {lang === "ar" ? "د. أحمد غزيل" : "Dr. Ahmed"}
                </span>
                <span className="text-xs md:text-sm text-slate-400">
                  {lang === "ar" ? "أدوات طبية متخصصة" : "Medical Equipment"}
                </span>
              </div>
            </motion.div>
          </Link>
        )}

        <div className="grow"></div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="shrink-0"
        >
          <Button
            onClick={toggleLanguage}
            variant="outline"
            size="sm"
            className="font-semibold cursor-pointer text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2"
          >
            {lang === "ar" ? "English" : "العربية"}
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
}
