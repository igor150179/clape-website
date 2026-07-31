import { Check } from "lucide-react";
import { ZigZagSection } from "@/components/ui/ZigZagSection";
import { VIDEOS } from "@/lib/videos";

const features = [
  "Corte a laser de alta precisão",
  "Dobra CNC com tolerância milimétrica",
  "Solda a laser invisível e contínua",
  "Estrutura monobloco indeformável",
];

export function Fabricacao() {
  return (
    <section id="fabricacao" className="bg-clape-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ZigZagSection
          videoPosition="left"
          src={VIDEOS.fabricacaoSolda.mp4}
          webmSrc={VIDEOS.fabricacaoSolda.webm}
          poster={VIDEOS.fabricacaoSolda.poster}
          posterJpg={VIDEOS.fabricacaoSolda.posterJpg}
          aspectRatio={VIDEOS.fabricacaoSolda.aspectRatio}
          videoAlt={VIDEOS.fabricacaoSolda.alt}
        >
          <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-clape-orange">
            <span className="h-px w-8 bg-clape-orange/50" aria-hidden />
            Fabricação de precisão
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-clape-dark sm:text-4xl lg:text-5xl">
            Feito como nenhum outro forno no Brasil.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-clape-dark/70 sm:text-lg">
            Enquanto a maioria usa chapas estampadas e soldas convencionais, o CLAPE é
            construído com corte, dobra e solda a laser — um processo de precisão
            industrial raro no país. O resultado: estrutura indeformável, encaixes
            milimétricos, solda invisível e durabilidade de uma vida inteira.
          </p>
          <ul className="mt-8 space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-clape-orange/15">
                  <Check className="h-4 w-4 text-clape-orange" aria-hidden />
                </span>
                <span className="text-base leading-relaxed text-clape-dark/80">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-display text-lg font-semibold text-clape-orange sm:text-xl">
            Tecnologia que poucos no Brasil dominam. Padrão que ninguém entrega.
          </p>
        </ZigZagSection>
      </div>
    </section>
  );
}
