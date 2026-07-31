import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ZigZagSection } from "@/components/ui/ZigZagSection";
import { VIDEOS } from "@/lib/videos";

export function BiscottoHighlight() {
  return (
    <section id="biscotto" className="bg-clape-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ZigZagSection
          videoPosition="left"
          src={VIDEOS.pedraBiscotto.mp4}
          webmSrc={VIDEOS.pedraBiscotto.webm}
          poster={VIDEOS.pedraBiscotto.poster}
          posterJpg={VIDEOS.pedraBiscotto.posterJpg}
          aspectRatio={VIDEOS.pedraBiscotto.aspectRatio}
          videoAlt={VIDEOS.pedraBiscotto.alt}
        >
          <SectionHeading
            eyebrow="A pedra"
            title="A alma napolitana: pedra Biscotto Saputo legítima"
            dark={false}
            align="left"
            className="mb-6"
          />
          <div className="space-y-4 text-base leading-relaxed text-clape-dark/80 sm:text-lg">
            <p>
              A maioria dos fornos compactos usa pedras refratárias comuns — cordierite —
              que queimam a base, esquentam de forma irregular e nunca chegam perto da
              experiência napolitana real.
            </p>
            <p>
              O CLAPE vem de fábrica com pedra Biscotto Saputo italiana legítima: a mesma
              matéria-prima das pizzarias premiadas de Nápoles. Ela absorve e libera calor
              de forma homogênea, não queima a massa e cria aquela cornetta perfeita —
              macia por dentro, levemente carbonizada por fora.
            </p>
          </div>
          <Link
            href="/biscotto"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-clape-orange px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-clape-amber hover:shadow-glow"
          >
            Saiba mais sobre a Biscotto
          </Link>
        </ZigZagSection>
      </div>
    </section>
  );
}
