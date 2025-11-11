import { Header } from '@/components/Header';
import CTAFinal from '../components/CTAFinal';
import Differential from '../components/Differential';
import HeroSection from '../components/HeroSection';
import ServiceEmphasis from '../components/ServiceEmphasis';

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#4F6A8B] via-[#3d5570] to-[#aaa]">
      <Header />

      {/* HERO SECTION */}
      <HeroSection />

      {/* SERVIÇOS EM DESTAQUE */}
      <ServiceEmphasis />

      {/* DIFERENCIAIS */}
      <Differential />

      {/* CTA FINAL */}
      <CTAFinal />
    </div>
  );
}
