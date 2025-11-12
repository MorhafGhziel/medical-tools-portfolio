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
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 px-6 bg-[#0a0e27]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 pt-8 lg:pt-0"
          >
            {/* Image - Mobile: on top, Desktop: hidden (shown on right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:hidden w-full max-w-xs mx-auto mb-6"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden border border-white/10 shadow-xl">
                <Image
                  src="/images/Ahmed2.png"
                  alt={t.hero.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0e27]/60 to-transparent"></div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight"
            >
              {t.hero.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-white/80 leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="flex items-center gap-2 px-5 py-3 bg-white/5 rounded-lg border border-white/10"
                >
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                  <span className="text-base text-white font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="pt-6"
            >
              <Button
                size="lg"
                onClick={scrollToProducts}
                className="group text-lg px-10 py-6 cursor-pointer bg-white text-[#0a0e27] hover:bg-white/90 font-semibold rounded-lg"
              >
                {t.hero.cta}
                {lang === "en" && (
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                )}
                {lang === "ar" && (
                  <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" />
                )}
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image - Desktop only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="relative aspect-square rounded-lg overflow-hidden border border-white/10 shadow-xl">
              <Image
                src="/images/Ahmed2.png"
                alt={t.hero.title}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 50vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0a0e27]/60 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
