'use client';

import { Award, CheckCircle, Globe, MessageSquare, Shield, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export const Differential = () => {
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
      className="py-20 bg-linear-to-br from-[#4F6A8B]/5 to-white relative overflow-hidden"
    >
      {/* Padrão árabe animado no fundo */}
      <div
        className="absolute inset-0 opacity-[0.025] transition-transform duration-1000 ease-out pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px) rotate(${
            mousePosition.x * 5
          }deg)`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z' fill='%234F6A8B' fill-opacity='1'/%3E%3Ccircle cx='50' cy='50' r='15' fill='none' stroke='%23BFCC2E' stroke-width='2'/%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px',
          }}
        ></div>
      </div>

      {/* Ornamentos islâmicos nos cantos */}
      <div className="absolute top-0 left-0 w-48 h-48 opacity-[0.04]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <g className="animate-spin-slow" transform-origin="center">
            <circle cx="100" cy="100" r="80" fill="none" stroke="#BFCC2E" strokeWidth="2" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="#BFCC2E" strokeWidth="2" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="#BFCC2E" strokeWidth="2" />
            <path d="M100 20 L100 180 M20 100 L180 100" stroke="#BFCC2E" strokeWidth="3" />
            <path d="M50 50 L150 150 M150 50 L50 150" stroke="#BFCC2E" strokeWidth="2" />
          </g>
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-[0.04] rotate-180">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <g
            className="animate-spin-slow"
            transform-origin="center"
            style={{ animationDelay: '2s' }}
          >
            <circle cx="100" cy="100" r="80" fill="none" stroke="#4F6A8B" strokeWidth="2" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="#4F6A8B" strokeWidth="2" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="#4F6A8B" strokeWidth="2" />
            <path d="M100 20 L100 180 M20 100 L180 100" stroke="#4F6A8B" strokeWidth="3" />
            <path d="M50 50 L150 150 M150 50 L50 150" stroke="#4F6A8B" strokeWidth="2" />
          </g>
        </svg>
      </div>

      {/* Estrelas flutuantes decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute animate-float-slow opacity-[0.03]"
          style={{ left: '10%', top: '15%', animationDelay: '0s', animationDuration: '18s' }}
        >
          <svg width="70" height="70" viewBox="0 0 70 70">
            <path d="M35 5 L40 25 L60 30 L40 35 L35 55 L30 35 L10 30 L30 25 Z" fill="#BFCC2E" />
          </svg>
        </div>
        <div
          className="absolute animate-float-slow opacity-[0.03]"
          style={{ left: '85%', top: '25%', animationDelay: '3s', animationDuration: '22s' }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60">
            <path d="M30 5 L34 22 L50 26 L34 30 L30 45 L26 30 L10 26 L26 22 Z" fill="#4F6A8B" />
          </svg>
        </div>
        <div
          className="absolute animate-float-slow opacity-[0.03]"
          style={{ left: '20%', top: '75%', animationDelay: '6s', animationDuration: '20s' }}
        >
          <svg width="65" height="65" viewBox="0 0 65 65">
            <path d="M32 5 L36 24 L55 28 L36 32 L32 50 L28 32 L9 28 L28 24 Z" fill="#BFCC2E" />
          </svg>
        </div>
        <div
          className="absolute animate-float-slow opacity-[0.03]"
          style={{ left: '75%', top: '70%', animationDelay: '9s', animationDuration: '24s' }}
        >
          <svg width="55" height="55" viewBox="0 0 55 55">
            <path d="M27 5 L30 20 L45 23 L30 26 L27 40 L24 26 L9 23 L24 20 Z" fill="#4F6A8B" />
          </svg>
        </div>
      </div>

      {/* Padrão de mosaico árabe sutil */}
      <div
        className="absolute inset-0 opacity-[0.01] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0 L90 30 L60 60 L30 30 Z M60 60 L90 90 L60 120 L30 90 Z M0 60 L30 90 L0 120 L-30 90 Z M120 60 L150 90 L120 120 L90 90 Z' fill='%23BFCC2E' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px',
          transform: `translate(${-mousePosition.x * 50}px, ${-mousePosition.y * 50}px)`,
          transition: 'transform 1.5s ease-out',
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#4F6A8B] mb-4 font-[family-name:var(--font-amiri)]">
            Por que escolher a Al Manara?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-amiri)] font-normal">
            Diferenciais que fazem toda a diferença no resultado final
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 - Tradutores Nativos */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
            {/* Brilho decorativo no hover */}
            <div className="absolute inset-0 bg-linear-to-br from-[#BFCC2E]/0 to-[#4F6A8B]/0 group-hover:from-[#BFCC2E]/5 group-hover:to-[#4F6A8B]/5 transition-all duration-500"></div>

            {/* Mini estrela decorativa */}
            <div className="absolute top-2 right-2 w-8 h-8 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
              <svg viewBox="0 0 30 30">
                <path d="M15 3 L17 12 L25 14 L17 16 L15 24 L13 16 L5 14 L13 12 Z" fill="#BFCC2E" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="bg-[#BFCC2E]/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Users className="h-7 w-7 text-[#4F6A8B]" />
              </div>
              <h3 className="text-xl font-bold text-[#4F6A8B] mb-3 font-[family-name:var(--font-amiri)]">
                Tradutores Nativos
              </h3>
              <p className="text-gray-600 font-[family-name:var(--font-amiri)] font-normal">
                Profissionais vivendo em seus países de origem, garantindo adaptação cultural
                perfeita.
              </p>
            </div>
          </div>

          {/* Card 2 - 100% Humana */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-[#BFCC2E]/0 to-[#4F6A8B]/0 group-hover:from-[#BFCC2E]/5 group-hover:to-[#4F6A8B]/5 transition-all duration-500"></div>

            <div className="absolute top-2 right-2 w-8 h-8 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
              <svg viewBox="0 0 30 30">
                <path d="M15 3 L17 12 L25 14 L17 16 L15 24 L13 16 L5 14 L13 12 Z" fill="#BFCC2E" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="bg-[#BFCC2E]/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <CheckCircle className="h-7 w-7 text-[#4F6A8B]" />
              </div>
              <h3 className="text-xl font-bold text-[#4F6A8B] mb-3 font-[family-name:var(--font-amiri)]">
                100% Humana
              </h3>
              <p className="text-gray-600 font-[family-name:var(--font-amiri)] font-normal">
                Sem automação. Cada palavra é traduzida por um profissional especializado.
              </p>
            </div>
          </div>

          {/* Card 3 - Idiomas Raros */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-[#BFCC2E]/0 to-[#4F6A8B]/0 group-hover:from-[#BFCC2E]/5 group-hover:to-[#4F6A8B]/5 transition-all duration-500"></div>

            <div className="absolute top-2 right-2 w-8 h-8 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
              <svg viewBox="0 0 30 30">
                <path d="M15 3 L17 12 L25 14 L17 16 L15 24 L13 16 L5 14 L13 12 Z" fill="#BFCC2E" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="bg-[#BFCC2E]/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Globe className="h-7 w-7 text-[#4F6A8B]" />
              </div>
              <h3 className="text-xl font-bold text-[#4F6A8B] mb-3 font-[family-name:var(--font-amiri)]">
                Idiomas Raros
              </h3>
              <p className="text-gray-600 font-[family-name:var(--font-amiri)] font-normal">
                Atendemos idiomas difíceis de encontrar: islandês, georgiano, estoniano, taitiano.
              </p>
            </div>
          </div>

          {/* Card 4 - Especialização Árabe */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-[#BFCC2E]/0 to-[#4F6A8B]/0 group-hover:from-[#BFCC2E]/5 group-hover:to-[#4F6A8B]/5 transition-all duration-500"></div>

            <div className="absolute top-2 right-2 w-8 h-8 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
              <svg viewBox="0 0 30 30">
                <path d="M15 3 L17 12 L25 14 L17 16 L15 24 L13 16 L5 14 L13 12 Z" fill="#BFCC2E" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="bg-[#BFCC2E]/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Award className="h-7 w-7 text-[#4F6A8B]" />
              </div>
              <h3 className="text-xl font-bold text-[#4F6A8B] mb-3 font-[family-name:var(--font-amiri)]">
                Especialização Árabe
              </h3>
              <p className="text-gray-600 font-[family-name:var(--font-amiri)] font-normal">
                Expertise única em cultura e idioma árabe, com tradutores especializados.
              </p>
            </div>
          </div>

          {/* Card 5 - Pagamento Flexível */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-[#BFCC2E]/0 to-[#4F6A8B]/0 group-hover:from-[#BFCC2E]/5 group-hover:to-[#4F6A8B]/5 transition-all duration-500"></div>

            <div className="absolute top-2 right-2 w-8 h-8 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
              <svg viewBox="0 0 30 30">
                <path d="M15 3 L17 12 L25 14 L17 16 L15 24 L13 16 L5 14 L13 12 Z" fill="#BFCC2E" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="bg-[#BFCC2E]/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <MessageSquare className="h-7 w-7 text-[#4F6A8B]" />
              </div>
              <h3 className="text-xl font-bold text-[#4F6A8B] mb-3 font-[family-name:var(--font-amiri)]">
                Pagamento Flexível
              </h3>
              <p className="text-gray-600 font-[family-name:var(--font-amiri)] font-normal">
                Você só paga quando receber o pagamento do seu cliente. Condições especiais para
                empresas.
              </p>
            </div>
          </div>

          {/* Card 6 - Certificação Oficial */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-[#BFCC2E]/0 to-[#4F6A8B]/0 group-hover:from-[#BFCC2E]/5 group-hover:to-[#4F6A8B]/5 transition-all duration-500"></div>

            <div className="absolute top-2 right-2 w-8 h-8 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
              <svg viewBox="0 0 30 30">
                <path d="M15 3 L17 12 L25 14 L17 16 L15 24 L13 16 L5 14 L13 12 Z" fill="#BFCC2E" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="bg-[#BFCC2E]/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Shield className="h-7 w-7 text-[#4F6A8B]" />
              </div>
              <h3 className="text-xl font-bold text-[#4F6A8B] mb-3 font-[family-name:var(--font-amiri)]">
                Certificação Oficial
              </h3>
              <p className="text-gray-600 font-[family-name:var(--font-amiri)] font-normal">
                Tradução juramentada com validade legal em todo território nacional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differential;
