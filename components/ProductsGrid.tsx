"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { products } from "@/lib/data/products";
import { Eye, Search } from "lucide-react";

export function ProductsGrid() {
  const { lang, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      product.name[lang].toLowerCase().includes(query) ||
      (product.description &&
        product.description[lang].toLowerCase().includes(query))
    );
  });

  return (
    <section id="products" className="py-24 px-6 bg-[#0a0e27]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            {t.products.title}
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            {t.products.subtitle}
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 max-w-2xl mx-auto"
        >
          <div className="relative">
            <Search
              className={`absolute top-1/2 -translate-y-1/2 ${
                lang === "ar" ? "right-5" : "left-5"
              } w-5 h-5 text-white/50`}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.products.searchPlaceholder}
              className={`w-full px-12 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all ${
                lang === "ar" ? "text-right" : "text-left"
              }`}
            />
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 overflow-hidden h-full flex flex-col">
                {/* Image */}
                <Link href={`/products/${product.id}`}>
                  <div className="relative aspect-square overflow-hidden bg-white/5 cursor-pointer">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name[lang]}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 scale-0 group-hover:scale-100">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 space-y-4 flex-grow flex flex-col">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors line-clamp-2 min-h-14 cursor-pointer">
                      {product.name[lang]}
                    </h3>
                  </Link>

                  {product.price > 0 ? (
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">
                        {product.price}
                      </span>
                      <span className="text-lg text-white/60">
                        {t.products.currency}
                      </span>
                    </div>
                  ) : (
                    <div>
                      <span className="text-lg font-semibold text-white/80">
                        {lang === "ar" ? "تواصل للاستفسار عن السعر" : "Contact for Price"}
                      </span>
                    </div>
                  )}

                  <Link href={`/products/${product.id}`} className="mt-auto">
                    <Button 
                      variant="outline" 
                      className="w-full cursor-pointer bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 text-white transition-all duration-300 rounded-lg"
                    >
                      <Eye
                        className={`w-4 h-4 ${lang === "ar" ? "ml-3" : "mr-3"}`}
                      />
                      {t.products.viewDetails}
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
