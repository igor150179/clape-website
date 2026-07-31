import type { Metadata } from "next";
import { WHATSAPP_URL } from "@/lib/constants";
import { PremiumVideo } from "@/components/PremiumVideo";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";
import { VIDEOS } from "@/lib/videos";

export const metadata: Metadata = {
  title: "Nossa História | CLAPE — Forno de Pizza Napolitana Artesanal",
  description:
    "A história do CLAPE: engenharia e uma viagem à Itália que mudou tudo. Conheça o fundador e a origem do forno napolitano brasileiro.",
  openGraph: {
    title: "Nossa História | CLAPE",
    description:
      "Nascido de uma viagem à Itália. Batizado pelos filhos Clara e Pedro. A história por trás do forno CLAPE.",
  },
};

export default function HistoriaPage() {
  return (
    <>
      <PageHero
        title="Nascido de uma viagem à Itália. Batizado pelos meus filhos."
        subtitle="Esta é a história de como engenharia e paixão se encontraram em um forno."
      />

      <section className="bg-clape-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
            <FadeIn className="lg:col-span-2 lg:sticky lg:top-32">
              <PremiumVideo
                src={VIDEOS.historia.mp4}
                webmSrc={VIDEOS.historia.webm}
                poster={VIDEOS.historia.poster}
                posterJpg={VIDEOS.historia.posterJpg}
                aspectRatio={VIDEOS.historia.aspectRatio}
                alt={VIDEOS.historia.alt}
              />
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-3">
              <div className="space-y-6 text-base leading-relaxed text-clape-dark/80 sm:text-lg">
                <h2 className="font-display text-2xl font-bold text-clape-dark">
                  Antes da pandemia, a Itália
                </h2>
                <p>
                  Sou engenheiro de formação. Antes da pandemia, viajei à Itália em busca
                  de algo que ainda não sabia nomear. O que encontrei em Nápoles mudou
                  completamente minha trajetória: a pizza napolitana autêntica — aquela
                  feita em fornos com pedra Biscotto, com cornetta aerada e sabor que fica
                  na memória.
                </p>
                <p>
                  Voltei ao Brasil obcecado. Queria reproduzir aquela experiência em casa,
                  para minha família. Mas os fornos disponíveis no mercado me frustravam:
                  pedras refratárias comuns, isolamento precário, produção industrial sem
                  alma. Nenhum entregava o que eu tinha provado em Nápoles.
                </p>

                <h2 className="font-display pt-4 text-2xl font-bold text-clape-dark">
                  Engenharia na garagem
                </h2>
                <p>
                  Comecei a projetar. Meses de protótipos, testes de isolamento térmico,
                  calibração de chama, importação de pedra Biscotto Saputo diretamente da
                  Itália. Cada detalhe passou por normas AVPN/DOC. Tubulações certificadas
                  Inmetro. Válvula de segurança. Ignição elétrica. Parafusos em aço inox.
                </p>
                <p>
                  O forno que nasceu na minha garagem não era apenas funcional — era
                  bonito. Acabamento em aço inox com pintura eletrostática. Compacto o
                  suficiente para caber em qualquer cozinha brasileira: 54 × 52 × 37 cm.
                </p>

                <blockquote className="border-l-4 border-clape-orange pl-6 font-display text-xl font-semibold text-clape-orange">
                  CLAPE é a junção de Clara e Pedro — a razão de tudo.
                </blockquote>

                <h2 className="font-display pt-4 text-2xl font-bold text-clape-dark">
                  Clara + Pedro = CLAPE
                </h2>
                <p>
                  Quando o primeiro forno ficou pronto, mostrei aos meus filhos. Foi Clara
                  quem sugeriu o nome — juntando as iniciais dela e de Pedro. CLAPE. Simples,
                  brasileiro, cheio de significado. A razão de eu acordar cedo para ajustar
                  chamas e a razão de eu querer reunir famílias em torno de uma mesa.
                </p>

                <h2 className="font-display pt-4 text-2xl font-bold text-clape-dark">
                  Produção artesanal
                </h2>
                <p>
                  Hoje produzimos em lotes limitados. Cada forno é feito à mão, testado
                  individualmente e entregue com orientação personalizada. Não temos
                  e-commerce — cada forno é montado conforme a demanda, e algumas unidades
                  prontas saem do ateliê. Porque acreditamos que quem leva um
                  CLAPE merece falar conosco pessoalmente.
                </p>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center justify-center rounded-full bg-clape-orange px-8 py-4 text-base font-semibold text-white transition hover:bg-clape-amber"
              >
                Falar com o Igor
              </a>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
