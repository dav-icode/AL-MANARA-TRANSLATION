'use client';

import { ArrowRight, FileText, Globe, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export const ServiceEmphasis = () => {
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
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Padrão geométrico árabe sutil no fundo - movimento com mouse */}
      <div
        className="absolute inset-0 opacity-[0.03] transition-transform duration-1000 ease-out pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F6A8B' fill-opacity='1'%3E%3Cpath d='M40 0L45 25L70 30L45 35L40 60L35 35L10 30L35 25z M40 20L42 30L50 32L42 34L40 42L38 34L30 32L38 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px',
          }}
        ></div>
      </div>

      {/* Estrelas islâmicas flutuantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute animate-float-slow opacity-[0.04]"
          style={{ left: '5%', top: '10%', animationDelay: '0s', animationDuration: '20s' }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60">
            <path d="M30 5 L34 22 L50 26 L34 30 L30 45 L26 30 L10 26 L26 22 Z" fill="#BFCC2E" />
          </svg>
        </div>
        <div
          className="absolute animate-float-slow opacity-[0.04]"
          style={{ left: '90%', top: '20%', animationDelay: '2s', animationDuration: '25s' }}
        >
          <svg width="50" height="50" viewBox="0 0 50 50">
            <path d="M25 5 L28 18 L40 21 L28 24 L25 37 L22 24 L10 21 L22 18 Z" fill="#4F6A8B" />
          </svg>
        </div>
        <div
          className="absolute animate-float-slow opacity-[0.04]"
          style={{ left: '15%', top: '70%', animationDelay: '4s', animationDuration: '22s' }}
        >
          <svg width="55" height="55" viewBox="0 0 55 55">
            <path d="M27 5 L30 20 L45 23 L30 26 L27 40 L24 26 L9 23 L24 20 Z" fill="#BFCC2E" />
          </svg>
        </div>
        <div
          className="absolute animate-float-slow opacity-[0.04]"
          style={{ left: '75%', top: '80%', animationDelay: '6s', animationDuration: '28s' }}
        >
          <svg width="45" height="45" viewBox="0 0 45 45">
            <path d="M22 5 L25 17 L37 20 L25 23 L22 35 L19 23 L7 20 L19 17 Z" fill="#4F6A8B" />
          </svg>
        </div>
      </div>

      {/* Arabescos decorativos nos cantos */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-[0.03]">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#BFCC2E" strokeWidth="2" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#BFCC2E" strokeWidth="2" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="#BFCC2E" strokeWidth="2" />
          <path d="M50 10 L50 90 M10 50 L90 50" stroke="#BFCC2E" strokeWidth="2" />
        </svg>
      </div>

      <div className="absolute bottom-10 right-10 w-32 h-32 opacity-[0.03] rotate-45">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full animate-pulse"
          style={{ animationDelay: '1s' }}
        >
          <circle cx="50" cy="50" r="40" fill="none" stroke="#4F6A8B" strokeWidth="2" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#4F6A8B" strokeWidth="2" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="#4F6A8B" strokeWidth="2" />
          <path d="M50 10 L50 90 M10 50 L90 50" stroke="#4F6A8B" strokeWidth="2" />
        </svg>
      </div>

      {/* Padrão de azulejos marroquinos sutil */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L100 50 L50 100 L0 50 Z M50 20 L80 50 L50 80 L20 50 Z' fill='%23BFCC2E' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          transform: `translate(${-mousePosition.x * 40}px, ${-mousePosition.y * 40}px)`,
          transition: 'transform 1.2s ease-out',
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#4F6A8B] mb-4 font-[family-name:var(--font-amiri)]">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-amiri)] font-normal">
            Soluções profissionais de tradução para cada necessidade do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card Tradução Simples */}
          <Link href="/servicos/traducao-simples" className="group">
            <div className="bg-linear-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#4F6A8B] hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
              {/* Brilho sutil ao hover */}
              <div className="absolute inset-0 bg-linear-to-br from-[#4F6A8B]/0 via-[#4F6A8B]/0 to-[#BFCC2E]/0 group-hover:from-[#4F6A8B]/5 group-hover:to-[#BFCC2E]/5 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="bg-[#4F6A8B] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#4F6A8B] mb-3 font-[family-name:var(--font-amiri)]">
                  Tradução Simples
                </h3>
                <p className="text-gray-600 mb-4 font-[family-name:var(--font-amiri)] font-normal">
                  Para documentos e textos gerais que precisam de tradução precisa e cultural.
                </p>
                <span className="text-[#BFCC2E] font-semibold group-hover:gap-2 flex items-center transition-all font-[family-name:var(--font-cairo)]">
                  Saiba mais{' '}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>

          {/* Card Tradução Técnica */}
          <Link href="/servicos/traducao-tecnica" className="group">
            <div className="bg-linear-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#4F6A8B] hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-[#4F6A8B]/0 via-[#4F6A8B]/0 to-[#BFCC2E]/0 group-hover:from-[#4F6A8B]/5 group-hover:to-[#BFCC2E]/5 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="bg-[#4F6A8B] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#4F6A8B] mb-3 font-[family-name:var(--font-amiri)]">
                  Tradução Técnica
                </h3>
                <p className="text-gray-600 mb-4 font-[family-name:var(--font-amiri)] font-normal">
                  Conteúdo especializado com terminologia precisa para seu setor.
                </p>
                <span className="text-[#BFCC2E] font-semibold group-hover:gap-2 flex items-center transition-all font-[family-name:var(--font-cairo)]">
                  Saiba mais{' '}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>

          {/* Card Tradução Juramentada */}
          <Link href="/servicos/traducao-juramentada" className="group">
            <div className="bg-linear-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#4F6A8B] hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-[#4F6A8B]/0 via-[#4F6A8B]/0 to-[#BFCC2E]/0 group-hover:from-[#4F6A8B]/5 group-hover:to-[#BFCC2E]/5 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="bg-[#4F6A8B] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#4F6A8B] mb-3 font-[family-name:var(--font-amiri)]">
                  Tradução Juramentada
                </h3>
                <p className="text-gray-600 mb-4 font-[family-name:var(--font-amiri)] font-normal">
                  Documentos oficiais com certificação reconhecida legalmente.
                </p>
                <span className="text-[#BFCC2E] font-semibold group-hover:gap-2 flex items-center transition-all font-[family-name:var(--font-cairo)]">
                  Saiba mais{' '}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>

          {/* Card Idiomas Raros - DESTAQUE */}
          <Link href="/servicos/idiomas-raros" className="group">
            <div className="bg-linear-to-br from-[#BFCC2E]/10 to-white border-2 border-[#BFCC2E] rounded-2xl p-8 hover:border-[#4F6A8B] hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden">
              {/* Brilho dourado especial */}
              <div className="absolute inset-0 bg-linear-to-br from-[#BFCC2E]/0 via-[#BFCC2E]/0 to-[#BFCC2E]/0 group-hover:from-[#BFCC2E]/20 group-hover:to-[#BFCC2E]/10 transition-all duration-500"></div>

              {/* Badge destaque com animação */}
              <div className="absolute top-4 right-4 z-20">
                <span className="bg-[#BFCC2E] text-black px-3 py-1 rounded-full text-xs font-bold font-[family-name:var(--font-cairo)] animate-pulse">
                  DESTAQUE
                </span>
              </div>

              {/* Estrela decorativa no canto */}
              <div className="absolute -top-2 -left-2 w-16 h-16 opacity-10">
                <svg viewBox="0 0 50 50">
                  <path
                    d="M25 5 L28 18 L40 21 L28 24 L25 37 L22 24 L10 21 L22 18 Z"
                    fill="#BFCC2E"
                  />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="bg-[#BFCC2E] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Globe className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-[#4F6A8B] mb-3 font-[family-name:var(--font-amiri)]">
                  Idiomas Raros
                </h3>
                <p className="text-gray-600 mb-4 font-[family-name:var(--font-amiri)] font-normal">
                  Islandês, georgiano, taitiano e outros idiomas difíceis de encontrar.
                </p>
                <span className="text-[#4F6A8B] font-semibold group-hover:gap-2 flex items-center transition-all font-[family-name:var(--font-cairo)]">
                  Saiba mais{' '}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceEmphasis;
