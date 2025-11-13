'use client';

import { Facebook, Globe, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
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
    <footer
      ref={footerRef}
      className="bg-linear-to-br from-[#2b3a4c] via-[#3d5570] to-[#4F6A8B] text-white relative overflow-hidden"
    >
      {/* Padrão decorativo árabe com parallax */}
      <div
        className="absolute inset-0 opacity-5 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23BFCC2E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Mandala decorativa gigante no fundo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.02] pointer-events-none"
        style={{
          transform: `translate(-50%, -50%) rotate(${mousePosition.x * 20}deg)`,
          transition: 'transform 1.2s ease-out',
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="95" fill="none" stroke="#BFCC2E" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="75" fill="none" stroke="#BFCC2E" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="55" fill="none" stroke="#BFCC2E" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="35" fill="none" stroke="#BFCC2E" strokeWidth="0.5" />
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 100 + 35 * Math.cos(angle);
            const y1 = 100 + 35 * Math.sin(angle);
            const x2 = 100 + 95 * Math.cos(angle);
            const y2 = 100 + 95 * Math.sin(angle);
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#BFCC2E" strokeWidth="0.5" />
            );
          })}
        </svg>
      </div>

      {/* Estrelas flutuantes decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow opacity-10"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 30}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${20 + i * 3}s`,
            }}
          >
            <svg width="30" height="30" viewBox="0 0 30 30">
              <path
                d="M15 3 L17 12 L25 14 L17 16 L15 24 L13 16 L5 14 L13 12 Z"
                fill="#BFCC2E"
                opacity="0.4"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Crescentes decorativos nos cantos */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse">
          <path d="M50 10 A 30 30 0 1 0 50 90 A 25 25 0 1 1 50 10" fill="#BFCC2E" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-5 rotate-180">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full animate-pulse"
          style={{ animationDelay: '1s' }}
        >
          <path d="M50 10 A 30 30 0 1 0 50 90 A 25 25 0 1 1 50 10" fill="#BFCC2E" />
        </svg>
      </div>

      {/* Linha decorativa no topo com brilho */}
      <div className="h-1 bg-linear-to-r from-transparent via-[#BFCC2E] to-transparent relative">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Coluna 1: Logo e Descrição */}
          <div className="space-y-6">
            <div className="relative group">
              <Image
                src="/LOGO-AL-MANARA-SERVIÇOS-LINGUÍSTICOS-SEM-FUNDO-02.png"
                alt="Al Manara"
                width={180}
                height={60}
                className="h-14 w-auto brightness-0 invert transition-transform duration-300 group-hover:scale-105"
              />
              {/* Brilho sutil ao hover */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#BFCC2E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            </div>
            <p className="text-gray-300 leading-relaxed font-[family-name:var(--font-amiri)] font-normal">
              Traduções profissionais com nativos especializados. Quebramos barreiras linguísticas
              para sua empresa alcançar o mundo.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="bg-white/10 hover:bg-[#BFCC2E] hover:text-black p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-6 group relative"
              >
                <Facebook className="h-5 w-5" />
                <div className="absolute inset-0 bg-[#BFCC2E] opacity-0 group-hover:opacity-20 rounded-lg blur-xl transition-opacity duration-300"></div>
              </Link>
              <Link
                href="#"
                className="bg-white/10 hover:bg-[#BFCC2E] hover:text-black p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-6 group relative"
              >
                <Instagram className="h-5 w-5" />
                <div className="absolute inset-0 bg-[#BFCC2E] opacity-0 group-hover:opacity-20 rounded-lg blur-xl transition-opacity duration-300"></div>
              </Link>
              <Link
                href="#"
                className="bg-white/10 hover:bg-[#BFCC2E] hover:text-black p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-6 group relative"
              >
                <Linkedin className="h-5 w-5" />
                <div className="absolute inset-0 bg-[#BFCC2E] opacity-0 group-hover:opacity-20 rounded-lg blur-xl transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>

          {/* Coluna 2: Serviços */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#BFCC2E] flex items-center gap-2 font-[family-name:var(--font-amiri)]">
              <span className="w-1 h-6 bg-linear-to-b from-[#BFCC2E] to-[#4F6A8B] rounded-full animate-pulse"></span>
              Serviços
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/servicos/traducao-simples"
                  className="text-gray-300 hover:text-[#BFCC2E] transition-all duration-300 flex items-center gap-2 group font-[family-name:var(--font-amiri)] font-normal"
                >
                  <span className="w-0 h-0.5 bg-[#BFCC2E] group-hover:w-4 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Tradução Simples
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/traducao-tecnica"
                  className="text-gray-300 hover:text-[#BFCC2E] transition-all duration-300 flex items-center gap-2 group font-[family-name:var(--font-amiri)] font-normal"
                >
                  <span className="w-0 h-0.5 bg-[#BFCC2E] group-hover:w-4 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Tradução Técnica
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/traducao-juramentada"
                  className="text-gray-300 hover:text-[#BFCC2E] transition-all duration-300 flex items-center gap-2 group font-[family-name:var(--font-amiri)] font-normal"
                >
                  <span className="w-0 h-0.5 bg-[#BFCC2E] group-hover:w-4 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Tradução Juramentada
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/idiomas-raros"
                  className="text-gray-300 hover:text-[#BFCC2E] transition-all duration-300 flex items-center gap-2 group font-[family-name:var(--font-amiri)] font-normal"
                >
                  <span className="w-0 h-0.5 bg-[#BFCC2E] group-hover:w-4 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Idiomas Raros ✨
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#BFCC2E] flex items-center gap-2 font-[family-name:var(--font-amiri)]">
              <span
                className="w-1 h-6 bg-linear-to-b from-[#BFCC2E] to-[#4F6A8B] rounded-full animate-pulse"
                style={{ animationDelay: '0.3s' }}
              ></span>
              Links Rápidos
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-[#BFCC2E] transition-all duration-300 flex items-center gap-2 group font-[family-name:var(--font-amiri)] font-normal"
                >
                  <span className="w-0 h-0.5 bg-[#BFCC2E] group-hover:w-4 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Início
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-gray-300 hover:text-[#BFCC2E] transition-all duration-300 flex items-center gap-2 group font-[family-name:var(--font-amiri)] font-normal"
                >
                  <span className="w-0 h-0.5 bg-[#BFCC2E] group-hover:w-4 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Sobre Nós
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/orcamento"
                  className="text-gray-300 hover:text-[#BFCC2E] transition-all duration-300 flex items-center gap-2 group font-[family-name:var(--font-amiri)] font-normal"
                >
                  <span className="w-0 h-0.5 bg-[#BFCC2E] group-hover:w-4 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Solicitar Orçamento
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-gray-300 hover:text-[#BFCC2E] transition-all duration-300 flex items-center gap-2 group font-[family-name:var(--font-amiri)] font-normal"
                >
                  <span className="w-0 h-0.5 bg-[#BFCC2E] group-hover:w-4 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Contato
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#BFCC2E] flex items-center gap-2 font-[family-name:var(--font-amiri)]">
              <span
                className="w-1 h-6 bg-linear-to-b from-[#BFCC2E] to-[#4F6A8B] rounded-full animate-pulse"
                style={{ animationDelay: '0.6s' }}
              ></span>
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300 group hover:text-[#BFCC2E] transition-colors duration-300 font-[family-name:var(--font-amiri)] font-normal">
                <MapPin className="h-5 w-5 text-[#BFCC2E] mt-0.5 flex shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span>Barueri - São Paulo, Brasil</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 group font-[family-name:var(--font-amiri)] font-normal">
                <Phone className="h-5 w-5 text-[#BFCC2E] flex shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <Link href="tel:+5511945540455" className="hover:text-[#BFCC2E] transition-colors">
                  +55 (11) 94554-0455
                </Link>
              </li>
              <li className="flex items-center gap-3 text-gray-300 group font-[family-name:var(--font-amiri)] font-normal">
                <Mail className="h-5 w-5 text-[#BFCC2E] flex shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <Link
                  href="mailto:contato@almanaratranslation.com.br"
                  className="hover:text-[#BFCC2E] transition-colors break-all"
                >
                  contato@almanaratranslation.com.br
                </Link>
              </li>
              <li className="flex items-center gap-3 text-gray-300 group font-[family-name:var(--font-amiri)] font-normal">
                <Globe className="h-5 w-5 text-[#BFCC2E] flex shrink-0 group-hover:rotate-180 transition-transform duration-500" />
                <span>almanaratranslation.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória decorativa com animação */}
        <div className="relative h-px mb-8 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#BFCC2E]/50 to-transparent animate-pulse"></div>
        </div>

        {/* Copyright com hover especial */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm font-[family-name:var(--font-amiri)] font-normal">
          <p className="hover:text-gray-300 transition-colors duration-300">
            © {currentYear} Al Manara Serviços Linguísticos. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-2">
            Desenvolvido por{' '}
            <Link
              href="https://instagram.com/webevy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BFCC2E] hover:underline font-semibold font-[family-name:var(--font-cairo)] hover:scale-105 inline-block transition-all duration-300"
            >
              Nimbus
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
