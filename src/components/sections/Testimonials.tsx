import { Quote } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Mariana S.",
    city: "São Paulo, SP",
    text: "Comprei achando que seria mais um forno compacto. Na primeira pizza de 60 segundos, entendi a diferença da Biscotto. Minha família não aceita delivery desde então.",
  },
  {
    name: "Ricardo M.",
    city: "Curitiba, PR",
    text: "Engenheiro de profissão, fiquei impressionado com o isolamento térmico. Consigo ficar ao lado do forno durante toda a noite de pizzas sem desconforto. Acabamento impecável.",
  },
  {
    name: "Ana Paula L.",
    city: "Belo Horizonte, MG",
    text: "Moramos em apartamento e o CLAPE cabe perfeitamente na varanda gourmet. O pré-aquecimento é rápido e o sabor é igual ao da pizzaria napolitana que visitamos em Nápoles.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-clape-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading eyebrow="Depoimentos" title="Quem leva, ama." dark />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <FadeIn key={item.name} delay={i * 0.1}>
              <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
                <Quote className="h-8 w-8 text-clape-orange/60" aria-hidden />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-clape-cream/80">
                  &ldquo;{item.text}&rdquo;
                </p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-display font-semibold text-clape-cream">{item.name}</p>
                  <p className="text-xs text-clape-cream/50">{item.city}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-12 text-center font-display text-xl font-bold text-clape-amber sm:text-2xl">
            Forno artesanal. Produção e entrega limitadas.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
