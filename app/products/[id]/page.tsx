"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  MessageCircle,
  CheckCircle,
  Package,
  Shield,
  Truck,
  Download,
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0e27]">
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
      className={`min-h-screen bg-[#0a0e27] ${lang === "ar" ? "rtl" : "ltr"}`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <Header />

      <main className="pt-24 pb-16 px-6">
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight tracking-tight">
                  {product.name[lang]}
                </h1>
                {product.price > 0 ? (
                  <div className="flex items-baseline gap-3 mb-8">
                    <span className="text-6xl font-bold text-white">
                      {product.price}
                    </span>
                    <span className="text-2xl text-white/60">
                      {t.products.currency}
                    </span>
                  </div>
                ) : (
                  <div className="mb-8">
                    <span className="text-2xl md:text-3xl font-bold text-white">
                      {t.product.contactForPrice}
                    </span>
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2.5 px-5 py-3 bg-white/5 border border-white/10 rounded-lg hover:border-white/20 hover:bg-white/10 transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-white">
                      {feature.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {product.description && (
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Package className="w-6 h-6 text-white" />
                      {t.product.description}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 leading-relaxed text-lg">
                      {product.description[lang]}
                    </p>
                  </CardContent>
                </Card>
              )}

              {product.specifications && (
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <CheckCircle className="w-6 h-6 text-white" />
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
                          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white">{spec}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {product.catalog && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full text-base md:text-lg px-6 md:px-8 py-5 md:py-6 font-semibold cursor-pointer bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-white/30 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 rounded-lg"
                    onClick={() => window.open(product.catalog, "_blank")}
                  >
                    {lang === "ar" ? (
                      <>
                        {t.product.downloadCatalog}
                        <Download className="w-5 h-5 mr-3" />
                      </>
                    ) : (
                      <>
                        <Download className="w-5 h-5 mr-3" />
                        {t.product.downloadCatalog}
                      </>
                    )}
                  </Button>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="w-full text-base md:text-lg px-6 md:px-8 py-4 md:py-5 font-bold cursor-pointer bg-white text-[#0a0e27] hover:bg-white/90 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
                  onClick={handleWhatsAppOrder}
                >
                  {lang === "ar" ? (
                    <>
                      {t.product.order}
                      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4" />
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 mr-3" />
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
                      <Card className="group cursor-pointer bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 overflow-hidden">
                        <div className="relative aspect-square overflow-hidden bg-white/5">
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
                          {relatedProduct.price > 0 ? (
                            <div className="flex items-baseline gap-2">
                              <span className="text-3xl font-bold text-white">
                                {relatedProduct.price}
                              </span>
                              <span className="text-lg text-white/60">
                                {t.products.currency}
                              </span>
                            </div>
                          ) : (
                            <div>
                              <span className="text-lg font-semibold text-white/80">
                                {t.product.contactForPrice}
                              </span>
                            </div>
                          )}
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
