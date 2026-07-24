"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  sizes?: string;
};

export function ImageWithFallback({
  src,
  alt,
  fill = false,
  width,
  height,
  priority = false,
  className,
  containerClassName,
  sizes,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (fill) {
    return (
      <div
        className={cn(
          "relative overflow-hidden bg-clape-image-fallback",
          "absolute inset-0 h-full w-full",
          containerClassName,
        )}
        role={hasError ? "img" : undefined}
        aria-label={hasError ? alt : undefined}
      >
        {/* TODO: substituir por foto real */}
        {!hasError && (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className={cn("object-cover", className)}
            onError={() => setHasError(true)}
          />
        )}
      </div>
    );
  }

  if (hasError) {
    return (
      <div
        className={cn("bg-clape-image-fallback", containerClassName, className)}
        style={{ width, height }}
        role="img"
        aria-label={alt}
      >
        {/* TODO: substituir por foto real */}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      className={cn("object-cover", className)}
      onError={() => setHasError(true)}
    />
  );
}
