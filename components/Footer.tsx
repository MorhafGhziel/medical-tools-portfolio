"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"

export function Footer() {
  const { t, lang } = useLanguage()

  return (
    <footer className="relative py-20 px-6 bg-[#0a0e27] border-t border-white/10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">
                {lang === "ar" ? "د. أحمد غزيل" : "Dr. Ahmed Ghziel"}
              </h3>
              <p className="text-white/60">
                {lang === "ar" ? "أدوات طبية متخصصة" : "Specialized Medical Tools"}
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href={`tel:${t.footer.phone}`}
                whileHover={{ x: lang === "ar" ? -5 : 5 }}
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg text-white">{t.footer.phone}</span>
              </motion.a>

              <motion.a
                href={`mailto:${t.footer.email}`}
                whileHover={{ x: lang === "ar" ? -5 : 5 }}
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg text-white">{t.footer.email}</span>
              </motion.a>

              <motion.div
                whileHover={{ x: lang === "ar" ? -5 : 5 }}
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg text-white">{t.footer.address}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center text-center space-y-6 bg-white/5 rounded-lg p-10 border border-white/10"
          >
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                {lang === "ar" ? "جاهز للطلب؟" : "Ready to Order?"}
              </h3>
              <p className="text-white/70 text-lg max-w-md">
                {lang === "ar"
                  ? "تواصل معنا الآن عبر واتساب للحصول على استشارة مجانية"
                  : "Contact us now via WhatsApp for a free consultation"}
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="text-lg px-10 py-6 cursor-pointer bg-white text-[#0a0e27] hover:bg-white/90 font-semibold rounded-lg"
                onClick={() => window.open("https://wa.me/966594702048", "_blank")}
              >
                {lang === "ar" ? (
                  <>
                    {t.footer.whatsapp}
                    <MessageCircle className="w-6 h-6 mr-4" />
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-6 h-6 mr-3" />
                    {t.footer.whatsapp}
                  </>
                )}
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 justify-center pt-4">
              {[
                { label: lang === "ar" ? "توصيل سريع" : "Fast Delivery" },
                { label: lang === "ar" ? "رد 24/7" : "24/7 Reply" },
                { label: lang === "ar" ? "ضمان الجودة" : "Quality Guarantee" },
              ].map((badge, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white"
                >
                  {badge.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10 flex items-center justify-center"
        >
          <p className="text-white/60 text-center">
            {t.footer.rights}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
