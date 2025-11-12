import { Header } from '@/components/Header';
import CTAFinal from '../components/home/CTAFinal';
import Differential from '../components/home/Differential';
import HeroSection from '../components/home/HeroSection';
import ServiceEmphasis from '../components/home/ServiceEmphasis';

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
