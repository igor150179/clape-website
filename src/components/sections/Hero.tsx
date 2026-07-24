"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { PremiumVideo } from "@/components/PremiumVideo";
import { VideoLightbox } from "@/components/VideoLightbox";
import { SITE } from "@/lib/constants";
import { VIDEOS } from "@/lib/videos";

export function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 48]);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative min-h-screen overflow-hidden bg-clape-dark"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(232,118,45,0.14),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(248,156,27,0.08),transparent_45%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-clape-dark to-transparent" />

        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 pb-24 pt-32 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-20 lg:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-clape-orange/30 bg-clape-orange/10 px-4 py-2 text-sm font-medium text-clape-amber backdrop-blur-sm"
              animate={reduceMotion ? undefined : { scale: [1, 1.02, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              🔥 Pizzas autênticas em 60 segundos
            </motion.span>

            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-clape-cream sm:text-5xl lg:text-6xl xl:text-7xl">
              {SITE.headline}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-clape-cream/80 sm:text-lg lg:text-xl">
              {SITE.subheadline}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/#lista-espera"
                className="inline-flex items-center justify-center rounded-full bg-clape-orange px-8 py-4 text-base font-semibold text-white transition hover:bg-clape-amber"
              >
                Entrar na Lista de Espera
              </Link>
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-clape-cream/30 px-8 py-4 text-base font-semibold text-clape-cream transition hover:border-clape-orange hover:text-clape-orange"
              >
                <Play className="h-4 w-4 fill-current" />
                Ver em Ação
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 lg:hidden">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-clape-cream">
                Pedra Biscotto Italiana Legítima
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-clape-cream">
                Solda a laser de precisão
              </span>
            </div>
          </motion.div>

          <motion.div
            style={{ y: videoY }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="overflow-hidden rounded-3xl bg-white p-3 shadow-[0_32px_100px_-28px_rgba(0,0,0,0.65)] ring-1 ring-white/20 sm:p-4">
              <PremiumVideo
                src={VIDEOS.hero.mp4}
                webmSrc={VIDEOS.hero.webm}
                poster={VIDEOS.hero.poster}
                posterJpg={VIDEOS.hero.posterJpg}
                aspectRatio={VIDEOS.hero.aspectRatio}
                alt={VIDEOS.hero.alt}
                priority
                allowSound={false}
                className="rounded-2xl shadow-none ring-0"
              />
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 right-4 hidden flex-col gap-3 sm:right-8 lg:flex"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="rounded-2xl border border-white/10 bg-clape-dark/80 px-5 py-4 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-wider text-clape-orange">
                Certificado
              </p>
              <p className="mt-1 font-display text-sm font-bold text-clape-cream">
                Pedra Biscotto Italiana Legítima
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-clape-dark/80 px-5 py-4 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-wider text-clape-orange">
                Fabricação
              </p>
              <p className="mt-1 font-display text-sm font-bold text-clape-cream">
                Solda a laser de precisão
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <VideoLightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        src={VIDEOS.hero.mp4}
        webmSrc={VIDEOS.hero.webm}
        poster={VIDEOS.hero.poster}
        posterJpg={VIDEOS.hero.posterJpg}
        alt={VIDEOS.hero.alt}
        aspectRatio="16/9"
      />
    </>
  );
}
