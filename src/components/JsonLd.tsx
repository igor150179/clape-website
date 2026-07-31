import { SITE } from "@/lib/constants";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Forno CLAPE — Pizza Napolitana Artesanal",
    description: SITE.description,
    brand: {
      "@type": "Brand",
      name: "CLAPE",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      url: "https://clape.com.br",
    },
    image: "https://clape.com.br/images/forno-frontal.png",
    category: "Forno de pizza napolitana",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
