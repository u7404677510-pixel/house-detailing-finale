import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { ITESection } from "@/components/home/ITESection";
import { ArgumentsSection } from "@/components/home/ArgumentsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <BeforeAfterSection />
      <ITESection />
      <ArgumentsSection />
    </>
  );
}
