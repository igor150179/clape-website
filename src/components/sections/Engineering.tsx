import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ZigZagSection } from "@/components/ui/ZigZagSection";
import { VIDEOS } from "@/lib/videos";

const features = [
  "Norma AVPN/DOC respeitada em cada detalhe",
  "Tubulações certificadas Inmetro",
  "Válvula de segurança de corte automático",
  "Ignição elétrica de precisão",
  "Parafusos em aço inox de alta resistência",
  "Pés niveladores para superfícies irregulares",
  "Controle de chama azul ou amarela",
  "Faixa de temperatura: 160°C a 500°C+",
];

export function Engineering() {
  return (
    <section id="engenharia" className="bg-clape-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ZigZagSection
          videoPosition="right"
          src={VIDEOS.engenhariaMedidas.mp4}
          webmSrc={VIDEOS.engenhariaMedidas.webm}
          poster={VIDEOS.engenhariaMedidas.poster}
          posterJpg={VIDEOS.engenhariaMedidas.posterJpg}
          aspectRatio={VIDEOS.engenhariaMedidas.aspectRatio}
          videoAlt={VIDEOS.engenhariaMedidas.alt}
        >
          <SectionHeading
            title="Engenharia obsessiva. Cada norma da pizza napolitana, respeitada."
            dark
            align="left"
            className="mb-8"
          />
          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-clape-orange/20">
                  <Check className="h-4 w-4 text-clape-orange" aria-hidden />
                </span>
                <span className="text-base leading-relaxed text-clape-cream/85">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </ZigZagSection>
      </div>
    </section>
  );
}
