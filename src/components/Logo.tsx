import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { container: "rounded-md px-2 py-1", image: "h-5" },
  md: { container: "rounded-lg px-3 py-1.5", image: "h-7 sm:h-8" },
  lg: { container: "rounded-xl px-4 py-2", image: "h-9 sm:h-10" },
};

export function Logo({ className, size = "md" }: LogoProps) {
  const s = sizes[size];

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center bg-white shadow-md ring-1 ring-black/5",
        s.container,
        className,
      )}
    >
      <Image
        src="/images/logo.png"
        alt="clapé — Forno de pizza napolitana artesanal"
        width={1024}
        height={544}
        className={cn("w-auto object-contain", s.image)}
        priority
      />
    </span>
  );
}
