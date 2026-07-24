import { JsonLd } from "@/components/JsonLd";
import { BiscottoHighlight } from "@/components/sections/BiscottoHighlight";
import { Comparison } from "@/components/sections/Comparison";
import { Differentials } from "@/components/sections/Differentials";
import { Engineering } from "@/components/sections/Engineering";
import { Fabricacao } from "@/components/sections/Fabricacao";
import { FAQ } from "@/components/sections/FAQ";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { PizzaStyles } from "@/components/sections/PizzaStyles";
import { Pricing } from "@/components/sections/Pricing";
import { Story } from "@/components/sections/Story";
import { Testimonials } from "@/components/sections/Testimonials";
import { WaitlistForm } from "@/components/sections/WaitlistForm";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Story />
      <Differentials />
      <Comparison />
      <Engineering />
      <Fabricacao />
      <BiscottoHighlight />
      <PizzaStyles />
      <Gallery />
      <Testimonials />
      <Pricing />
      <FAQ />
      <WaitlistForm />
    </>
  );
}
