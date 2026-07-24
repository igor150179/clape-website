import Image from "next/image";
import { cn } from "@/lib/utils";

type ProductShotProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  aspect?: "square" | "4/3" | "3/4" | "16/10";
  padding?: "sm" | "md" | "lg";
  sizes?: string;
};

const aspects = {
  square: "aspect-square",
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "16/10": "aspect-[16/10]",
};

const paddings = {
  sm: "p-3",
  md: "p-4 sm:p-6",
  lg: "p-6 sm:p-8",
};

export function ProductShot({
  src,
  alt,
  priority = false,
  className,
  aspect = "4/3",
  padding = "md",
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: ProductShotProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5",
        paddings[padding],
        className,
      )}
    >
      <div className={cn("relative w-full", aspects[aspect])}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-contain"
        />
      </div>
    </div>
  );
}
