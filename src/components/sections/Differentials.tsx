"use client";

import {
  Flame,
  Gem,
  Layers,
  Ruler,
  Shield,
  Zap,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ZigZagSection } from "@/components/ui/ZigZagSection";
import { VIDEOS } from "@/lib/videos";
import { cn } from "@/lib/utils";

const items = [
  {
    icon: Gem,
    title: "Pedra Biscotto Saputo italiana legítima",
    description: "Inclusa de fábrica — a mesma pedra das pizzarias premiadas de Nápoles.",
  },
  {
    icon: Shield,
    title: "Isolamento térmico 360°",
    description: "Confortável de estar ao redor. Segurança e eficiência em cada centímetro.",
  },
  {
    icon: Layers,
    title: "Sistema patenteado de dupla cúpula",
    description: "Circulação de ar otimizada para calor uniforme e chama perfeita.",
  },
  {
    icon: Flame,
    title: "Pizzas de até 36cm em 60 segundos",
    description: "Alta performance napolitana sem comprometer a autenticidade.",
  },
  {
    icon: Zap,
    title: "Corte, dobra e solda a laser",
    description:
      "Processo industrial de precisão raríssimo no Brasil. Solda a laser invisível, encaixes perfeitos e estrutura indeformável. Engenharia de outro nível.",
  },
  {
    icon: Ruler,
    title: "Compacto: 54 × 52 × 37 cm",
    description: "Cabe em qualquer cozinha. Grande na performance, discreto no espaço.",
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-clape-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="O forno"
            title="Por que o CLAPE é diferente de tudo no mercado"
            dark
          />
        </FadeIn>

        <div className="mt-16">
          <ZigZagSection
            videoPosition="right"
            src={VIDEOS.diferencialFogo.mp4}
            webmSrc={VIDEOS.diferencialFogo.webm}
            poster={VIDEOS.diferencialFogo.poster}
            posterJpg={VIDEOS.diferencialFogo.posterJpg}
            aspectRatio={VIDEOS.diferencialFogo.aspectRatio}
            videoAlt={VIDEOS.diferencialFogo.alt}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-clape-orange">
              Performance napolitana
            </p>
            <h3 className="font-display text-2xl font-bold tracking-tight text-clape-cream sm:text-3xl lg:text-4xl">
              Fogo de pizzaria. Na sua casa.
            </h3>
            <p className="mt-6 text-base leading-relaxed text-clape-cream/80 sm:text-lg">
              Chama alta, calor instantâneo e controle absoluto. O CLAPE atinge temperatura
              napolitana em minutos e mantém a faixa ideal para aquela pizza de 60 segundos
              — cornetta aerada, base cozida, mozzarella derretida na medida.
            </p>
          </ZigZagSection>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <article
                className={cn(
                  "group h-full rounded-2xl border border-white/10 bg-white/5 p-6",
                  "transition-all duration-400 ease-out",
                  "hover:scale-[1.02] hover:border-clape-orange/40 hover:bg-white/[0.07] hover:shadow-[0_24px_60px_-24px_rgba(232,118,45,0.35)]",
                )}
              >
                <div className="mb-4 inline-flex rounded-xl bg-clape-orange/15 p-3 text-clape-orange transition-transform duration-400 group-hover:scale-105">
                  <item.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="font-display text-lg font-semibold text-clape-cream">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-clape-cream/70">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
