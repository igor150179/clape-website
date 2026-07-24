"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GALLERY_IMAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <section className="bg-clape-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="O CLAPE de perto."
            subtitle="Acabamento, engenharia e materiais — sem atalhos."
            dark={false}
          />
        </FadeIn>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {GALLERY_IMAGES.map((image, i) => (
            <FadeIn key={image.src} delay={i * 0.06}>
              <button
                type="button"
                className="group mb-4 block w-full overflow-hidden rounded-xl bg-white p-3 shadow-lg ring-1 ring-clape-dark/5 transition-all duration-400 ease-out hover:scale-[1.02] hover:shadow-[0_28px_70px_-28px_rgba(26,29,35,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-clape-orange sm:p-4"
                onClick={() => setActiveIndex(i)}
                aria-label={`Ampliar ${image.alt}`}
              >
                <div
                  className={cn(
                    "relative w-full overflow-hidden",
                    i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/5]",
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Visualização ampliada da foto"
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
              onClick={close}
              aria-label="Fechar lightbox"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              className="relative max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-xl bg-white p-4 sm:p-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={GALLERY_IMAGES[activeIndex].src}
                  alt={GALLERY_IMAGES[activeIndex].alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
