import type { VideoAspectRatio } from "@/components/PremiumVideo";

export type VideoAsset = {
  mp4: string;
  webm?: string;
  poster: string;
  posterJpg: string;
  aspectRatio: VideoAspectRatio;
  alt: string;
};

export const VIDEOS = {
  hero: {
    mp4: "/videos/hero-forno.mp4",
    webm: "/videos/hero-forno.webm",
    poster: "/videos/posters/hero-forno.webp",
    posterJpg: "/videos/posters/hero-forno.jpg",
    aspectRatio: "16/10",
    alt: "Forno CLAPE aceso — chama napolitana e vapor da pizza",
  },
  historia: {
    mp4: "/videos/historia.mp4",
    webm: "/videos/historia.webm",
    poster: "/videos/posters/historia.webp",
    posterJpg: "/videos/posters/historia.jpg",
    aspectRatio: "4/5",
    alt: "História CLAPE — artesanato, Itália e paixão pela pizza napolitana",
  },
  fabricacaoSolda: {
    mp4: "/videos/fabricacao-solda.mp4",
    webm: "/videos/fabricacao-solda.webm",
    poster: "/videos/posters/fabricacao-solda.webp",
    posterJpg: "/videos/posters/fabricacao-solda.jpg",
    aspectRatio: "4/5",
    alt: "Fabricação CLAPE — solda a laser de precisão",
  },
  engenhariaMedidas: {
    mp4: "/videos/engenharia-medidas.mp4",
    webm: "/videos/engenharia-medidas.webm",
    poster: "/videos/posters/engenharia-medidas.webp",
    posterJpg: "/videos/posters/engenharia-medidas.jpg",
    aspectRatio: "16/9",
    alt: "Engenharia CLAPE — medidas, tubulações e circulação de ar",
  },
  pedraBiscotto: {
    mp4: "/videos/pedra-biscotto.mp4",
    webm: "/videos/pedra-biscotto.webm",
    poster: "/videos/posters/pedra-biscotto.webp",
    posterJpg: "/videos/posters/pedra-biscotto.jpg",
    aspectRatio: "4/5",
    alt: "Pedra Biscotto Saputo italiana legítima no forno CLAPE",
  },
  diferencialFogo: {
    mp4: "/videos/diferencial-fogo.mp4",
    webm: "/videos/diferencial-fogo.webm",
    poster: "/videos/posters/diferencial-fogo.webp",
    posterJpg: "/videos/posters/diferencial-fogo.jpg",
    aspectRatio: "16/9",
    alt: "Chama napolitana autêntica — forno CLAPE em ação",
  },
} satisfies Record<string, VideoAsset>;
