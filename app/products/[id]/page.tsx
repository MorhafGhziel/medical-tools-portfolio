"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  MessageCircle,
  CheckCircle,
  Package,
  Shield,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductImageGallery } from "@/components/ProductImageGallery";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProductById, getRelatedProducts } from "@/lib/data/products";

export default function ProductPage() {
  const params = useParams();
  const { lang, t } = useLanguage();

  const productId = parseInt(params.id as string);
  const product = getProductById(productId);
  const relatedProducts = getRelatedProducts(productId, 3);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">
            {lang === "ar" ? "المنتج غير موجود" : "Product Not Found"}
          </h1>
          <Link href="/">
            <Button>{lang === "ar" ? "العودة للرئيسية" : "Go Home"}</Button>
          </Link>
        </div>
      </div>
    );
  }

  const productImages = product.images || [product.image];

  const handleWhatsAppOrder = () => {
    const message = `${lang === "ar" ? "أريد طلب" : "I want to order"}: ${
      product.name[lang]
    }`;
    window.open(
      `https://wa.me/966594702048?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const features = [
    {
      icon: Shield,
      label: lang === "ar" ? "ضمان الجودة" : "Quality Guarantee",
    },
    {
      icon: Truck,
      label: lang === "ar" ? "توصيل سريع" : "Fast Delivery",
    },
    {
      icon: Package,
      label: lang === "ar" ? "تغليف آمن" : "Secure Packaging",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-slate-900 ${lang === "ar" ? "rtl" : "ltr"}`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <Header />

      <main className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Product Details */}
          <div className="grid lg:grid-cols-2 gap-12 mb-24">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: lang === "ar" ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ProductImageGallery
                images={productImages}
                productName={product.name[lang]}
              />
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: lang === "ar" ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                  {product.name[lang]}
                </h1>
                <div className="flex items-baseline gap-3 mb-8">
                  <span className="text-6xl font-bold text-white">
                    {product.price}
                  </span>
                  <span className="text-2xl text-slate-400">
                    {t.products.currency}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl"
                  >
                    <feature.icon className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-white font-medium">
                      {feature.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {product.description && (
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Package className="w-6 h-6 text-blue-400" />
                      {t.product.description}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 leading-relaxed text-lg">
                      {product.description[lang]}
                    </p>
                  </CardContent>
                </Card>
              )}

              {product.specifications && (
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <CheckCircle className="w-6 h-6 text-blue-400" />
                      {t.product.specifications}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {product.specifications[lang].map((spec, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle className="w-4 h-4 text-blue-400" />
                          </div>
                          <span className="text-white">{spec}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="w-full text-xl px-8 py-8 font-bold cursor-pointer"
                  onClick={handleWhatsAppOrder}
                >
                  {lang === "ar" ? (
                    <>
                      {t.product.order}
                      <MessageCircle className="w-7 h-7 mr-4" />
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-7 h-7 mr-3" />
                      {t.product.order}
                    </>
                  )}
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-24"
            >
              <h2 className="text-4xl font-bold mb-12 text-center text-white">
                {t.product.related}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct, index) => (
                  <motion.div
                    key={relatedProduct.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/products/${relatedProduct.id}`}>
                      <Card className="group cursor-pointer bg-slate-800 border-slate-700 hover:border-blue-600 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-2">
                        <div className="relative aspect-square overflow-hidden bg-slate-700">
                          <Image
                            src={relatedProduct.image || "/placeholder.svg"}
                            alt={relatedProduct.name[lang]}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
                        </div>
                        <div className="p-6 space-y-4">
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                            {relatedProduct.name[lang]}
                          </h3>
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-white">
                              {relatedProduct.price}
                            </span>
                            <span className="text-lg text-slate-400">
                              {t.products.currency}
                            </span>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
