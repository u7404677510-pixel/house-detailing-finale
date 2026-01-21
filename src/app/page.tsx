import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { ITESection } from "@/components/home/ITESection";
import { ArgumentsSection } from "@/components/home/ArgumentsSection";
import { MainLayout } from "@/components/layout/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesSection />
      <BeforeAfterSection />
      <ITESection />
      <ArgumentsSection />
    </MainLayout>
  );
}
