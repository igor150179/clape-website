import type { Metadata } from "next";
import {
  Caveat,
  Lora,
  Playfair_Display,
  Source_Sans_3,
} from "next/font/google";
import "./farinha.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-farinha-display",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-farinha-serif",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-farinha-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-farinha-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Pizza Começa na Farinha — eBook + Calculadora de Massa | Igor Oliveira · Clape",
  description:
    "Escolha a farinha certa no supermercado brasileiro e calcule sua massa em gramas. eBook + Calculadora online exclusiva. Napolitana, NY, romana e pão. Por Igor Oliveira — Clape.",
  openGraph: {
    title: "Pizza Começa na Farinha — eBook + Calculadora de Massa",
    description:
      "Escolha a farinha perfeita no supermercado brasileiro e calcule sua massa em gramas.",
    url: "https://clape.com.br/farinha",
    images: [
      {
        url: "/farinha/capa-livro.png",
        width: 800,
        height: 1000,
        alt: "Capa do eBook Pizza Começa na Farinha",
      },
    ],
  },
};

export default function FarinhaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`farinha-page ${playfair.variable} ${lora.variable} ${sourceSans.variable} ${caveat.variable}`}
    >
      {children}
    </div>
  );
}
