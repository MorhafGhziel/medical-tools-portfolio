"use client"

import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { ProductsGrid } from "@/components/ProductsGrid"
import { Footer } from "@/components/Footer"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Home() {
  const { lang } = useLanguage()
  
  return (
    <div className={`min-h-screen bg-slate-900 ${lang === "ar" ? "rtl" : "ltr"}`} dir={lang === "ar" ? "rtl" : "ltr"}>
      <Header />
      <Hero />
      <ProductsGrid />
      <Footer />
    </div>
  )
}
