"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProductShot } from "@/components/ui/ProductShot";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const rows = [
  {
    label: "Pedra",
    common: "Refratária / cordierite comum",
    clape: "Pedra Biscotto Saputo italiana legítima",
  },
  {
    label: "Estrutura",
    common: "Chapa estampada em série",
    clape: "Corte, dobra e solda a laser de precisão",
  },
  {
    label: "Isolamento",
    common: "Aquece o ambiente ao redor",
    clape: "Isolamento térmico 360° de alta performance",
  },
  {
    label: "Origem",
    common: "Produção em massa importada",
    clape: "Artesanal, feito à mão no Brasil",
  },
  {
    label: "Engenharia",
    common: "Genérica",
    clape: "Sistema patenteado de circulação de ar",
  },
  {
    label: "Acabamento",
    common: "Padrão industrial",
    clape: "Aço inox premium com solda invisível a laser",
  },
];

export function Comparison() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="padrao" className="bg-clape-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="O comparativo"
            title="O Padrão CLAPE"
            subtitle="Não fazemos como o mercado faz. Fazemos como deveria ser feito."
            dark={false}
          />
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mx-auto mb-12 max-w-sm">
            <ProductShot
              src="/images/forno-lateral-tras.png"
              alt="Vista lateral traseira do forno CLAPE — estrutura artesanal e acabamento premium"
              aspect="16/10"
              padding="md"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-x-auto rounded-2xl border border-clape-dark/10 shadow-xl">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-clape-dark/10">
                  <th className="bg-clape-dark/5 px-4 py-4 font-display font-semibold text-clape-dark sm:px-6">
                    Característica
                  </th>
                  <th className="bg-clape-dark/5 px-4 py-4 font-display font-semibold text-clape-dark/45 sm:px-6">
                    O Forno Comum
                  </th>
                  <th className="bg-clape-dark px-4 py-4 font-display font-bold text-clape-cream sm:px-6">
                    O CLAPE
                  </th>
                </tr>
              </thead>
              <motion.tbody
                initial={reduceMotion ? false : "hidden"}
                whileInView={reduceMotion ? undefined : "visible"}
                viewport={{ once: true, margin: "-40px" }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.07 } },
                }}
              >
                {rows.map((row, i) => (
                  <motion.tr
                    key={row.label}
                    variants={
                      reduceMotion
                        ? undefined
                        : {
                            hidden: { opacity: 0, y: 12 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                            },
                          }
                    }
                    className={cn(
                      "border-b border-clape-dark/5",
                      i % 2 === 0 ? "bg-white/50" : "bg-clape-cream",
                    )}
                  >
                    <td className="px-4 py-4 font-medium text-clape-dark sm:px-6">
                      {row.label}
                    </td>
                    <td className="px-4 py-4 text-clape-dark/40 sm:px-6">
                      <span className="inline-flex items-center gap-2">
                        <Minus
                          className="h-4 w-4 shrink-0 text-clape-dark/25"
                          aria-hidden
                        />
                        {row.common}
                      </span>
                    </td>
                    <td className="bg-clape-dark px-4 py-4 font-semibold text-clape-cream sm:px-6">
                      <span className="inline-flex items-center gap-2">
                        <Check className="h-4 w-4 shrink-0 text-clape-orange" aria-hidden />
                        {row.clape}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
