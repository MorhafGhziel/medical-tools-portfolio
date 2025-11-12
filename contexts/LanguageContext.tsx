"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Language, translations } from "@/lib/data/translations"

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: typeof translations.ar
  isTransitioning: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("ar")
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleSetLang = (newLang: Language) => {
    if (newLang === lang) return
    
    setIsTransitioning(true)
    setTimeout(() => {
      setLang(newLang)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 150)
    }, 300)
  }

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang: handleSetLang,
        t: translations[lang],
        isTransitioning,
      }}
    >
      {children}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-slate-900 z-[9999] pointer-events-none"
          />
        )}
      </AnimatePresence>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

