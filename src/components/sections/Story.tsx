import Link from "next/link";
import { PremiumVideo } from "@/components/PremiumVideo";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VIDEOS } from "@/lib/videos";

export function Story() {
  return (
    <section id="historia" className="bg-clape-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          <FadeIn direction="right">
            <PremiumVideo
              src={VIDEOS.historia.mp4}
              webmSrc={VIDEOS.historia.webm}
              poster={VIDEOS.historia.poster}
              posterJpg={VIDEOS.historia.posterJpg}
              aspectRatio={VIDEOS.historia.aspectRatio}
              alt={VIDEOS.historia.alt}
            />
          </FadeIn>

          <FadeIn delay={0.15} direction="left">
            <SectionHeading
              eyebrow="A origem"
              title="Nascido de uma viagem à Itália. Batizado pelos meus filhos."
              dark={false}
              align="left"
              className="mb-8"
            />
            <div className="space-y-4 text-base leading-relaxed text-clape-dark/80 sm:text-lg">
              <p>
                Sou engenheiro de formação. Antes da pandemia, uma viagem à Itália
                despertou uma paixão que nunca mais me deixou: a pizza napolitana
                autêntica — aquela que transforma uma mesa em memória.
              </p>
              <p>
                De volta ao Brasil, comecei a construir um forno em casa. Meses de
                engenharia, testes e ajustes até chegar ao que hoje é o CLAPE: um forno
                compacto, artesanal e capaz de entregar o mesmo calor, textura e alma das
                pizzarias de Nápoles.
              </p>
              <p className="font-display text-xl font-semibold text-clape-orange">
                CLAPE é a junção de Clara e Pedro — a razão de tudo.
              </p>
            </div>
            <Link
              href="/historia"
              className="mt-8 inline-flex items-center text-sm font-semibold text-clape-orange transition hover:text-clape-amber"
            >
              Ler a história completa →
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
