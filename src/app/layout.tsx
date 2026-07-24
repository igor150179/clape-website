import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SITE } from "@/lib/constants";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  keywords: [
    "forno de pizza napolitana",
    "forno de pizza compacto",
    "pedra biscotto",
    "forno de pizza apartamento",
    "forno CLAPE",
    "pizza napolitana artesanal",
  ],
  metadataBase: new URL("https://clape.com.br"),
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    locale: "pt_BR",
    type: "website",
    siteName: "CLAPE",
    images: [
      {
        url: "/images/forno-frontal.png",
        width: 1200,
        height: 630,
        alt: "Forno CLAPE — Pizza Napolitana Artesanal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
