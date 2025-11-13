'use client';

import { ArrowRight, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-linear-to-br from-[#4F6A8B] via-[#3d5570] to-[#2b3a4c] text-white overflow-hidden -mt-16"
    >
      {/* Padrão geométrico árabe sutil com movimento do mouse */}
      <div
        className="absolute inset-0 opacity-5 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto Hero */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-[#BFCC2E] text-black px-4 py-2 rounded-full text-sm font-semibold font-[family-name:var(--font-cairo)]">
                ✨ Tradução 100% Humana
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight font-[family-name:var(--font-amiri)]">
              Traduções Profissionais com
              <span className="text-[#BFCC2E]"> Nativos Especializados</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed font-[family-name:var(--font-amiri)] font-normal">
              Quebramos barreiras linguísticas para sua empresa alcançar o mundo. Tradutores nativos
              vivendo em seus países de origem garantem precisão cultural e técnica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/orcamento">
                <Button
                  size="lg"
                  className="bg-[#BFCC2E] hover:bg-[#a8b41f] text-black font-bold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105 font-[family-name:var(--font-cairo)]"
                >
                  Solicitar Orçamento Grátis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link href="/sobre">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#4F6A8B] font-semibold text-lg px-8 py-6 transition-all font-[family-name:var(--font-cairo)]"
                >
                  Conheça Nossa História
                </Button>
              </Link>
            </div>

            {/* Stats rápidos */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <p className="text-3xl font-bold text-[#BFCC2E] font-[family-name:var(--font-amiri)]">
                  50+
                </p>
                <p className="text-sm text-gray-300 font-[family-name:var(--font-amiri)] font-normal">
                  Idiomas atendidos
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#BFCC2E] font-[family-name:var(--font-amiri)]">
                  100%
                </p>
                <p className="text-sm text-gray-300 font-[family-name:var(--font-amiri)] font-normal">
                  Tradução humana
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#BFCC2E] font-[family-name:var(--font-amiri)]">
                  24h
                </p>
                <p className="text-sm text-gray-300 font-[family-name:var(--font-amiri)] font-normal">
                  Resposta média
                </p>
              </div>
            </div>
          </div>

          {/* Imagem Hero */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/IMG-20251111-WA0059.jpg"
                alt="Equipe Al Manara"
                width={600}
                height={600}
                className="w-full h-auto"
              />
              {/* Overlay linear */}
              <div className="absolute inset-0 bg-linear-to-t from-[#4F6A8B]/50 to-transparent"></div>
            </div>

            {/* Card flutuante */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl max-w-xs">
              <div className="flex items-center gap-4">
                <div className="bg-[#BFCC2E] p-3 rounded-lg">
                  <Award className="h-8 w-8 text-black" />
                </div>
                <div>
                  <p className="font-bold text-[#4F6A8B] font-[family-name:var(--font-amiri)]">
                    Certificação Oficial
                  </p>
                  <p className="text-sm text-gray-600 font-[family-name:var(--font-amiri)] font-normal">
                    Tradução Juramentada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Onda decorativa */}
      <div className="absolute bottom-0 left-0 right-0 -mb-px">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
