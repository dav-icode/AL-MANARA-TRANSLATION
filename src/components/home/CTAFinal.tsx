'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';

export const CTAFinal = () => {
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
      className="py-20 bg-linear-to-br from-[#4F6A8B] to-[#2b3a4c] text-white relative overflow-hidden"
    >
      {/* Ondas árabes decorativas animadas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path
            d="M0,300 Q250,200 500,300 T1000,300 L1000,1000 L0,1000 Z"
            fill="rgba(191, 204, 46, 0.05)"
            className="animate-float-slow"
          />
          <path
            d="M0,400 Q250,300 500,400 T1000,400 L1000,1000 L0,1000 Z"
            fill="rgba(191, 204, 46, 0.03)"
            className="animate-float-slow"
            style={{ animationDelay: '1s', animationDuration: '25s' }}
          />
        </svg>
      </div>

      {/* Padrão de caligrafia árabe abstrata */}
      <div
        className="absolute inset-0 opacity-[0.04] transition-all duration-1000 ease-out pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * -25}px, ${mousePosition.y * -25}px) scale(${
            1 + mousePosition.x * 0.1
          })`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 100 Q 75 50, 100 100 T 150 100' stroke='%23BFCC2E' stroke-width='3' fill='none'/%3E%3Cpath d='M30 120 Q 60 80, 90 120 Q 120 160, 150 120' stroke='%23BFCC2E' stroke-width='2' fill='none'/%3E%3Ccircle cx='100' cy='100' r='5' fill='%23BFCC2E'/%3E%3Ccircle cx='50' cy='100' r='3' fill='%23BFCC2E'/%3E%3Ccircle cx='150' cy='100' r='3' fill='%23BFCC2E'/%3E%3C/svg%3E")`,
            backgroundSize: '250px 250px',
          }}
        ></div>
      </div>

      {/* Crescentes islâmicos decorativos */}
      <div className="absolute top-10 left-10 w-24 h-24 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse">
          <path d="M50 10 A 30 30 0 1 0 50 90 A 25 25 0 1 1 50 10" fill="#BFCC2E" />
        </svg>
      </div>

      <div className="absolute bottom-10 right-10 w-32 h-32 opacity-10 rotate-180">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full animate-pulse"
          style={{ animationDelay: '1.5s' }}
        >
          <path d="M50 10 A 30 30 0 1 0 50 90 A 25 25 0 1 1 50 10" fill="#BFCC2E" />
        </svg>
      </div>

      {/* Estrelas cintilantes nos cantos */}
      <div className="absolute top-20 right-20 w-16 h-16 opacity-20 animate-pulse">
        <svg viewBox="0 0 50 50">
          <path d="M25 5 L28 18 L40 21 L28 24 L25 37 L22 24 L10 21 L22 18 Z" fill="#BFCC2E" />
        </svg>
      </div>

      <div
        className="absolute bottom-20 left-20 w-12 h-12 opacity-20 animate-pulse"
        style={{ animationDelay: '0.7s' }}
      >
        <svg viewBox="0 0 50 50">
          <path d="M25 5 L28 18 L40 21 L28 24 L25 37 L22 24 L10 21 L22 18 Z" fill="#BFCC2E" />
        </svg>
      </div>

      {/* Partículas flutuantes douradas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#BFCC2E] rounded-full opacity-30 animate-float-slow"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${18 + i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Mandala árabe gigante no centro (super sutil) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.02] pointer-events-none"
        style={{
          transform: `translate(-50%, -50%) rotate(${mousePosition.x * 30}deg) scale(${
            1 + mousePosition.y * 0.2
          })`,
          transition: 'transform 1s ease-out',
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#BFCC2E" strokeWidth="1" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="#BFCC2E" strokeWidth="1" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="#BFCC2E" strokeWidth="1" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="#BFCC2E" strokeWidth="1" />
          <path d="M100 10 L100 190 M10 100 L190 100" stroke="#BFCC2E" strokeWidth="1" />
          <path d="M30 30 L170 170 M170 30 L30 170" stroke="#BFCC2E" strokeWidth="1" />
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const x1 = 100 + 50 * Math.cos(angle);
            const y1 = 100 + 50 * Math.sin(angle);
            const x2 = 100 + 90 * Math.cos(angle);
            const y2 = 100 + 90 * Math.sin(angle);
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#BFCC2E" strokeWidth="1" />
            );
          })}
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-amiri)]">
            Pronto para quebrar barreiras linguísticas?
          </h2>
          <p className="text-xl text-gray-300 font-[family-name:var(--font-amiri)] font-normal">
            Solicite um orçamento gratuito e descubra como podemos ajudar sua empresa a alcançar
            novos mercados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/orcamento">
              <Button
                size="lg"
                className="bg-[#BFCC2E] hover:bg-[#a8b41f] text-black font-bold text-lg px-10 py-7 shadow-2xl hover:scale-105 transition-all relative overflow-hidden group font-[family-name:var(--font-cairo)]"
              >
                <span className="relative z-10">Solicitar Orçamento Grátis</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
            </Link>
            <Link href="/contato">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#4F6A8B] font-semibold text-lg px-10 py-7 transition-all font-[family-name:var(--font-cairo)]"
              >
                Falar com Especialista
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;
