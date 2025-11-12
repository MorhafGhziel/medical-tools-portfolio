"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

export function Hero() {
  const { lang, t } = useLanguage();

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    lang === "ar" ? "أسعار منافسة" : "Competitive Prices",
    lang === "ar" ? "أدوات طبية معتمدة" : "Certified Medical Equipment",
    lang === "ar" ? "توصيل داخل الرياض" : "Delivery in Riyadh",
  ];

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <div className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full">
                <span className="text-blue-400 text-sm font-semibold">
                  {lang === "ar"
                    ? "أدوات طبية عالمية المستوى"
                    : "World-Class Medical Equipment"}
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-slate-300 leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                size="lg"
                onClick={scrollToProducts}
                className="group text-lg px-8 py-7 cursor-pointer"
              >
                {t.hero.cta}
                {lang === "en" && (
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                )}
                {lang === "ar" && (
                  <ArrowLeft className="w-5 h-5 mr-4 group-hover:-translate-x-1 transition-transform" />
                )}
              </Button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col gap-4 pt-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: lang === "ar" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                  <span className="text-lg text-slate-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl shadow-blue-900/20">
              <Image
                src="/images/Ahmed2.png"
                alt={t.hero.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
