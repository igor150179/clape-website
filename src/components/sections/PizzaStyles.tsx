import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PIZZA_STYLES } from "@/lib/constants";

export function PizzaStyles() {
  return (
    <section className="bg-clape-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Versatilidade"
            title="Um forno. Infinitos estilos."
            subtitle="De 160°C a mais de 500°C. Você no controle."
            dark
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3">
            {PIZZA_STYLES.map((style, i) => (
              <span
                key={style}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-clape-cream transition hover:border-clape-orange hover:bg-clape-orange/10 hover:text-clape-amber"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {style}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
