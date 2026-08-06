export const SITE = {
  name: "CLAPE",
  title: "CLAPE | Forno de Pizza Napolitana Artesanal",
  description:
    "Forno de pizza napolitana artesanal brasileiro com pedra Biscotto italiana legítima. Compacto, engenharia patenteada e feito à mão. Entre na lista de espera.",
  headline: "O fogo de Nápoles, feito à mão para a sua mesa.",
  subheadline:
    "Cada forno CLAPE é construído um a um, no Brasil — pedra Biscotto Saputo legítima, engenharia patenteada e solda a laser invisível. Para reunir quem você ama.",
  availability:
    "Cada CLAPE é montado conforme a demanda. De tempos em tempos, unidades prontas saem do ateliê para entrega imediata.",
} as const;

export const WHATSAPP_URL = "https://wa.me/5511947632211";
export const INSTAGRAM_URL = "https://www.instagram.com/clape.forno/";
export const FACEBOOK_URL = "https://www.facebook.com/p/Clape-61556664961261/";
export const YOUTUBE_URL = "https://www.youtube.com/@clapeforno";

/** Checkout Hotmart — substitua pelo link real do produto */
export const FARINHA_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_FARINHA_CHECKOUT_URL ?? "#checkout";
export const FARINHA_SUPPORT_EMAIL = "contato@clape.com.br";

export const NAV_LINKS = [
  { label: "O Forno", href: "/#diferenciais" },
  { label: "O Padrão CLAPE", href: "/#padrao" },
  { label: "A Pedra Biscotto", href: "/#biscotto" },
  { label: "Engenharia", href: "/#engenharia" },
  { label: "Fabricação", href: "/#fabricacao" },
  { label: "História", href: "/historia" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const PIZZA_STYLES = [
  "Napolitana",
  "Romana",
  "Genovesa",
  "Pan",
  "Chicago Deep Dish",
  "Paulistana",
  "Siciliana",
  "Nova-iorquina",
  "Calzone",
  "Focaccia",
] as const;

export const GALLERY_IMAGES = [
  {
    src: "/images/forno-frontal.png",
    alt: "Forno CLAPE — vista frontal com câmara e pedra Biscotto visíveis",
  },
  {
    src: "/images/forno-frontal-2.png",
    alt: "Forno CLAPE — ângulo frontal alternativo com acabamento premium",
  },
  {
    src: "/images/pedra-biscotto.png",
    alt: "Close da pedra Biscotto Saputo e controles cromados do CLAPE",
  },
  {
    src: "/images/chamine-lateral.png",
    alt: "Chaminé lateral com logo clapé cortado a laser",
  },
  {
    src: "/images/detalhe-entrada-oxigenio.png",
    alt: "Detalhe da ventilação e entrada de oxigênio do forno CLAPE",
  },
  {
    src: "/images/forno-lateral-tras.png",
    alt: "Vista lateral traseira do forno CLAPE — estrutura e branding",
  },
] as const;
