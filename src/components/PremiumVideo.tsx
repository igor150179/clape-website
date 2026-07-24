"use client";

import { Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type VideoAspectRatio = "4/5" | "16/9" | "16/10" | "4/3" | "square";

const aspectClasses: Record<VideoAspectRatio, string> = {
  "4/5": "aspect-[4/5]",
  "16/9": "aspect-video",
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-[4/3]",
  square: "aspect-square",
};

type PremiumVideoProps = {
  src: string;
  poster: string;
  posterJpg?: string;
  webmSrc?: string;
  aspectRatio?: VideoAspectRatio;
  className?: string;
  allowSound?: boolean;
  priority?: boolean;
  alt?: string;
  eager?: boolean;
};

export function PremiumVideo({
  src,
  poster,
  posterJpg,
  webmSrc,
  aspectRatio = "4/5",
  className,
  allowSound = true,
  priority = false,
  alt = "",
  eager = false,
}: PremiumVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  useEffect(() => {
    if (eager) {
      setShouldLoad(true);
      setIsVisible(true);
    }
  }, [eager]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || reduceMotion || eager) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) setShouldLoad(true);
      },
      { rootMargin: "120px", threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduceMotion, eager]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad || reduceMotion) return;

    if (isVisible) {
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [isVisible, shouldLoad, reduceMotion, eager]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative w-full overflow-hidden rounded-3xl bg-clape-dark-deep shadow-[0_24px_80px_-24px_rgba(0,0,0,0.55)] ring-1 ring-white/10",
        aspectClasses[aspectRatio],
        className,
      )}
    >
      <Image
        src={poster}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />

      {shouldLoad && !reduceMotion && (
        <video
          ref={videoRef}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-[600ms] ease-out",
            isPlaying ? "opacity-100" : "opacity-0",
          )}
          poster={posterJpg ?? poster}
          muted={muted}
          loop
          playsInline
          autoPlay
          preload="none"
          aria-label={alt}
          onPlaying={() => setIsPlaying(true)}
        >
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          <source src={src} type="video/mp4" />
        </video>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 to-transparent" />

      {allowSound && shouldLoad && !reduceMotion && (
        <button
          type="button"
          onClick={() => setMuted((value) => !value)}
          aria-label={muted ? "Ativar som do vídeo" : "Desativar som do vídeo"}
          className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-black/45 group-hover:opacity-100 focus:opacity-100"
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      )}
    </div>
  );
}
