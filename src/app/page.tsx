import Solutions from "@/features/home-page/solution/solution";
import Product from "@/features/home-page/products/product";
import Feature from "@/features/home-page/features/feature";
import { FaqSection } from "@/features/home-page/faq/faq";
import HeroSection from "@/features/home-page/hero/hero";
import HowItWorks from "@/features/home-page/work/work";
import CTA from "@/features/home-page/cta/cta";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <Solutions />
      <HowItWorks />
      <Feature />
      <Product />
      <CTA />
      <FaqSection />
    </>
  );
}
