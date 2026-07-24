import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  subtitle,
  dark = false,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <h2
        className={cn(
          "font-display text-3xl font-bold tracking-[-0.02em] sm:text-4xl lg:text-5xl",
          dark ? "text-clape-cream" : "text-clape-dark",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-clape-cream/75" : "text-clape-dark/70",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
