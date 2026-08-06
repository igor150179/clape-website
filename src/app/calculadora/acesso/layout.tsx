import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acesso à Calculadora | Clape — A Farinha Certa",
  description: "Login exclusivo para compradores do eBook A Farinha Certa.",
  robots: { index: false, follow: false },
};

export default function CalculadoraAcessoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
