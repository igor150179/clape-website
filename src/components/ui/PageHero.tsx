import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function PageHero({ title, subtitle, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-clape-dark pt-32 pb-16 sm:pt-40 sm:pb-20",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-clape-orange/10 to-transparent" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="font-display text-4xl font-bold tracking-[-0.02em] text-clape-cream sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-base leading-relaxed text-clape-cream/75 sm:text-lg">
              {subtitle}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
