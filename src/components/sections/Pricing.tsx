import { FadeIn } from "@/components/ui/FadeIn";
import { ProductShot } from "@/components/ui/ProductShot";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const products = [
  {
    name: "Forno CLAPE",
    availability: "Montado sob encomenda · unidades prontas ocasionais",
    description:
      "O forno completo, com pedra Biscotto Saputo italiana legítima inclusa. Cada unidade é montada à mão, uma a uma.",
    featured: true,
  },
  {
    name: "Kit Pás + Cortador",
    availability: "Acompanha a sua encomenda",
    description: "Pá napolitana profissional e cortador de pizza em aço inox.",
    featured: false,
  },
  {
    name: "Suporte CLAPE",
    availability: "Acompanha a sua encomenda",
    description: "Suporte ergonômico em aço inox para posicionamento ideal do forno.",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section className="bg-clape-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="A coleção"
            title="A coleção CLAPE"
            subtitle="Cada peça é montada conforme a demanda — e, de tempos em tempos, algumas unidades saem prontas do ateliê."
            dark={false}
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product, i) => (
            <FadeIn key={product.name} delay={i * 0.1}>
              <article
                className={cn(
                  "flex h-full flex-col rounded-2xl border p-8 transition",
                  product.featured
                    ? "border-clape-orange bg-clape-dark text-clape-cream shadow-2xl shadow-clape-orange/20 md:-translate-y-2"
                    : "border-clape-dark/10 bg-white text-clape-dark",
                )}
              >
                {product.featured && (
                  <>
                    <ProductShot
                      src="/images/forno-frontal-2.png"
                      alt="Forno CLAPE completo — vista frontal com pedra Biscotto inclusa"
                      aspect="16/10"
                      padding="sm"
                      className="mb-6 shadow-lg ring-white/10"
                      sizes="(max-width: 768px) 90vw, 30vw"
                    />
                    <span className="mb-4 inline-flex w-fit rounded-full bg-clape-orange px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                      Mais popular
                    </span>
                  </>
                )}
                <h3 className="font-display text-xl font-bold">{product.name}</h3>
                <p
                  className={cn(
                    "mt-3 text-xs font-semibold uppercase tracking-[0.14em]",
                    product.featured ? "text-clape-amber" : "text-clape-orange",
                  )}
                >
                  {product.availability}
                </p>
                <p
                  className={cn(
                    "mt-4 flex-1 text-sm leading-relaxed",
                    product.featured ? "text-clape-cream/75" : "text-clape-dark/70",
                  )}
                >
                  {product.description}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition",
                    product.featured
                      ? "bg-clape-orange text-white hover:bg-clape-amber"
                      : "border border-clape-dark/20 text-clape-dark hover:border-clape-orange hover:text-clape-orange",
                  )}
                >
                  Falar com o Igor
                </a>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-10 text-center text-sm font-medium text-clape-dark/60">
            Produção artesanal. Fale com o Igor sobre disponibilidade e prazos.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
