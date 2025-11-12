"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export function ProductImageGallery({
  images,
  productName,
}: ProductImageGalleryProps) {
  const { lang } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // In RTL, swap the navigation functions
  const handleLeftClick = () => {
    if (lang === "ar") {
      nextImage(); // In RTL, left arrow goes to next
    } else {
      prevImage(); // In LTR, left arrow goes to previous
    }
  };

  const handleRightClick = () => {
    if (lang === "ar") {
      prevImage(); // In RTL, right arrow goes to previous
    } else {
      nextImage(); // In LTR, right arrow goes to next
    }
  };

  const goToImage = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className="space-y-4">
        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-square rounded-lg overflow-hidden bg-white/5 border border-white/10 cursor-pointer group"
          onClick={() => setIsLightboxOpen(true)}
        >
          <Image
            src={images[selectedIndex] || "/placeholder.svg"}
            alt={`${productName} - Image ${selectedIndex + 1}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Expand Icon */}
          <div className="absolute top-4 right-4 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-all">
            <Maximize2 className="w-5 h-5 text-white" />
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleLeftClick();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRightClick();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-sm text-white font-medium">
                {selectedIndex + 1} / {images.length}
              </span>
            </div>
          )}
        </motion.div>

        {/* Thumbnail Grid */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-4">
            {images.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => goToImage(index)}
                className={`relative aspect-square rounded-lg overflow-hidden border transition-all duration-300 cursor-pointer ${
                  selectedIndex === index
                    ? "border-white/30 scale-105 shadow-md shadow-black/20"
                    : "border-white/10 hover:border-white/30"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${productName} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 25vw, 25vw"
                />
                <div
                  className={`absolute inset-0 bg-black/30 ${
                    selectedIndex === index ? "opacity-0" : ""
                  }`}
                ></div>
                {selectedIndex === index && (
                  <motion.div
                    layoutId="selectedThumbnail"
                    className="absolute inset-0 bg-blue-600/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-colors z-50 group cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white group-hover:text-red-500 transition-colors" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-lg overflow-hidden border border-white/20 shadow-2xl shadow-black/50 w-full h-[85vh]">
                <Image
                  src={images[selectedIndex] || "/placeholder.svg"}
                  alt={`${productName} - Image ${selectedIndex + 1}`}
                  fill
                  className="object-contain rounded-2xl"
                  sizes="(max-width: 1200px) 90vw, 1200px"
                />
              </div>

              {images.length > 1 && (
                <>
                  {/* Navigation Arrows */}
                  <button
                    onClick={handleLeftClick}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all hover:scale-110 cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-7 h-7 text-white" />
                  </button>
                  <button
                    onClick={handleRightClick}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all hover:scale-110 cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-7 h-7 text-white" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`transition-all rounded-full cursor-pointer ${
                          selectedIndex === index
                            ? "bg-white w-8 h-3"
                            : "bg-white/40 hover:bg-white/60 w-3 h-3"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Image Info */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <span className="text-sm text-white font-medium">
                  {selectedIndex + 1} / {images.length}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
