"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Posso fazer outros estilos de pizza além da napolitana?",
    answer:
      "Sim. O CLAPE opera de 160°C a mais de 500°C+, permitindo napolitana, romana, pan, calzone, focaccia e muito mais. Você controla a chama e a temperatura.",
  },
  {
    question: "Funciona com gás de botijão (GLP) e gás natural encanado?",
    answer:
      "Sim, ambos. O forno é compatível com GLP (botijão) e gás natural encanado. Na entrega, orientamos a configuração ideal para o seu caso.",
  },
  {
    question: "Se eu girar o registro acidentalmente, vaza gás?",
    answer:
      "Não. O CLAPE possui válvula de segurança com corte automático. Em caso de falha de chama ou registro fechado incorretamente, o fluxo de gás é interrompido.",
  },
  {
    question: "Quanto tempo antes preciso ligar o forno?",
    answer:
      "O pré-aquecimento é rápido: em aproximadamente 20 a 30 minutos o forno atinge temperatura ideal para pizzas napolitanas autênticas.",
  },
  {
    question: "Como faço a limpeza?",
    answer:
      "Simples. A alta temperatura do forno queima resíduos naturalmente. Para a pedra Biscotto, basta escovar suavemente quando fria. Sem produtos químicos.",
  },
  {
    question: "Preciso de profissional para instalar?",
    answer:
      "Não necessariamente. A entrega inclui orientação personalizada de instalação e primeiro uso. Para gás encanado, recomendamos um profissional habilitado.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-clape-dark py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading title="Perguntas frequentes" dark />
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <FadeIn key={faq.question} delay={i * 0.05}>
                <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-sm font-semibold text-clape-cream sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-clape-orange transition-transform",
                        isOpen && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-clape-cream/75">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
