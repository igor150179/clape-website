"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useCallback, useEffect } from "react";
import { PremiumVideo } from "@/components/PremiumVideo";
import type { VideoAspectRatio } from "@/components/PremiumVideo";

type VideoLightboxProps = {
  open: boolean;
  onClose: () => void;
  src: string;
  webmSrc?: string;
  poster: string;
  posterJpg?: string;
  alt: string;
  aspectRatio?: VideoAspectRatio;
};

export function VideoLightbox({
  open,
  onClose,
  src,
  webmSrc,
  poster,
  posterJpg,
  alt,
  aspectRatio = "16/9",
}: VideoLightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, handleKey]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/92 p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Vídeo em tela cheia"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar vídeo"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <motion.div
            className="w-full max-w-5xl"
            initial={{ scale: 0.94, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <PremiumVideo
              src={src}
              webmSrc={webmSrc}
              poster={poster}
              posterJpg={posterJpg}
              aspectRatio={aspectRatio}
              allowSound
              alt={alt}
              eager
              className="shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
