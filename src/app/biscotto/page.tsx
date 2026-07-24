import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProductShot } from "@/components/ui/ProductShot";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Pedra Biscotto Saputo | CLAPE — Forno de Pizza Napolitana",
  description:
    "Descubra por que a pedra Biscotto Saputo italiana legítima é superior à refratária comum. A alma napolitana do forno CLAPE.",
  openGraph: {
    title: "Pedra Biscotto Saputo | CLAPE",
    description:
      "A pedra italiana legítima usada nas pizzarias premiadas de Nápoles — inclusa de fábrica no forno CLAPE.",
  },
};

export default function BiscottoPage() {
  return (
    <>
      <PageHero
        title="A pedra que define a pizza napolitana"
        subtitle="Biscotto Saputo italiana legítima — não é refratária comum. É a diferença entre uma pizza boa e uma pizza inesquecível."
      />

      <section className="bg-clape-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <ProductShot
                src="/images/pedra-biscotto.png"
                alt="Close da pedra Biscotto Saputo no forno CLAPE"
                aspect="4/3"
              />
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-6 text-base leading-relaxed text-clape-dark/80 sm:text-lg">
                <h2 className="font-display text-2xl font-bold text-clape-dark sm:text-3xl">
                  O que é a Biscotto Saputo?
                </h2>
                <p>
                  A Biscotto di Sorrento — produzida pela Saputo, família italiana com
                  tradição centenária — é a pedra porosa de origem vulcânica usada nos
                  fornos das pizzarias mais premiadas de Nápoles. Não é marketing: é
                  matéria-prima certificada, importada diretamente da Itália.
                </p>
                <p>
                  Sua estrutura microporosa absorve a umidade da massa e libera calor de
                  forma gradual e uniforme. O resultado é a base perfeita: cozida por
                  baixo sem queimar, com cornetta aerada e leve carbonização no cornicione.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-clape-dark py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-2xl font-bold text-clape-cream sm:text-3xl">
              Biscotto vs. Cordierite: a diferença real
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-10 space-y-8">
              <article className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <h3 className="font-display text-lg font-semibold text-clape-orange">
                  Cordierite (fornos convencionais)
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-clape-cream/75 sm:text-base">
                  Pedra refratária industrial, densa e de baixa porosidade. Esquenta rápido
                  mas de forma irregular. Tende a queimar a base antes do cornicione estar
                  pronto. Comum em fornos de produção em massa importados.
                </p>
              </article>

              <article className="rounded-2xl border border-clape-orange/30 bg-clape-orange/10 p-6 sm:p-8">
                <h3 className="font-display text-lg font-semibold text-clape-amber">
                  Biscotto Saputo (forno CLAPE)
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-clape-cream/85 sm:text-base">
                  Pedra porosa de origem vulcânica, curada artesanalmente na Itália.
                  Distribui calor de forma homogênea, não queima a massa e permite a
                  autêntica leopardatura napolitana. Inclusa de fábrica em cada forno CLAPE
                  — sem upgrade, sem custo extra.
                </p>
              </article>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-clape-cream py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-2xl font-bold text-clape-dark sm:text-3xl">
              A Biscotto vem inclusa no CLAPE
            </h2>
            <p className="mt-4 text-base leading-relaxed text-clape-dark/70 sm:text-lg">
              Não vendemos a pedra separadamente. Ela faz parte da engenharia do forno —
              calibrada, testada e pronta para entregar pizza napolitana autêntica desde o
              primeiro uso.
            </p>
            <Link
              href="/#lista-espera"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-clape-orange px-8 py-4 text-base font-semibold text-white transition hover:bg-clape-amber"
            >
              Entrar na Lista de Espera
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
