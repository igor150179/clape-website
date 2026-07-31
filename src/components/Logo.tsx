import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "negative" | "color";
};

const sizes = {
  sm: { image: "h-6" },
  md: { image: "h-8 sm:h-9" },
  lg: { image: "h-11 sm:h-12" },
};

const sources = {
  negative: "/images/logo-negative.png",
  color: "/images/logo-color.png",
};

export function Logo({ className, size = "md", variant = "negative" }: LogoProps) {
  const s = sizes[size];

  return (
    <Image
      src={sources[variant]}
      alt="clapé — Forno de pizza napolitana artesanal"
      width={1024}
      height={544}
      className={cn(
        "w-auto shrink-0 object-contain",
        variant === "negative" && "drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]",
        s.image,
        className,
      )}
      priority
    />
  );
}
