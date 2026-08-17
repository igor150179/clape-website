import type { Metadata } from "next";
import { CalculadoraLoginPage } from "@/components/calculadora/LoginForm";

export const metadata: Metadata = {
  title: "Acesso — Calculadora BIGA | Clape",
  description: "Login exclusivo para compradores do eBook de Fermentação.",
  robots: { index: false, follow: false },
};

export default function CalculadoraBigaAcessoPage() {
  return <CalculadoraLoginPage product="biga" />;
}
