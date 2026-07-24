import type { ReactNode } from "react";
import { PremiumVideo } from "@/components/PremiumVideo";
import type { VideoAspectRatio } from "@/components/PremiumVideo";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

type ZigZagSectionProps = {
  videoPosition: "left" | "right";
  src: string;
  poster: string;
  posterJpg?: string;
  webmSrc?: string;
  aspectRatio?: VideoAspectRatio;
  videoAlt: string;
  children: ReactNode;
  className?: string;
};

export function ZigZagSection({
  videoPosition,
  src,
  poster,
  posterJpg,
  webmSrc,
  aspectRatio = "4/5",
  videoAlt,
  children,
  className,
}: ZigZagSectionProps) {
  const video = (
    <FadeIn direction={videoPosition === "left" ? "right" : "left"}>
      <PremiumVideo
        src={src}
        poster={poster}
        posterJpg={posterJpg}
        webmSrc={webmSrc}
        aspectRatio={aspectRatio}
        alt={videoAlt}
      />
    </FadeIn>
  );

  const content = (
    <FadeIn delay={0.12} direction={videoPosition === "left" ? "left" : "right"}>
      {children}
    </FadeIn>
  );

  return (
    <div
      className={cn(
        "grid items-center gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-24",
        className,
      )}
    >
      <div className={cn(videoPosition === "right" && "lg:order-2")}>{video}</div>
      <div className={cn(videoPosition === "right" && "lg:order-1")}>{content}</div>
    </div>
  );
}
