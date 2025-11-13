'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { ChevronDown, FileText, Globe, Menu, Scale, Sparkles, Wrench } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Card } from './ui/card';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Card
      className={`sticky rounded-none top-0 z-50 w-full backdrop-blur-xl border-b-2 shadow-lg h-30 flex items-center transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 border-[#4F6A8B]/20 shadow-2xl'
          : 'bg-linear-to-r from-white to-[#F3EFB6]/15 border-[#4F6A8B]/10'
      }`}
    >
      {/* Barra decorativa árabe no topo - animada */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#BFCC2E] to-transparent">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent animate-pulse"></div>
      </div>

      {/* Padrão árabe sutil no fundo */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L34 22 L45 26 L34 30 L30 42 L26 30 L15 26 L26 22 Z' fill='%234F6A8B' fill-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px',
          }}
        ></div>
      </div>

      {/* Mini estrelas decorativas flutuantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-[#BFCC2E] rounded-full opacity-20 animate-float-slow"
            style={{
              left: `${20 + i * 25}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + i * 3}s`,
            }}
          />
        ))}
      </div>

      <nav className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo com efeito hover premium */}
          <Link href="/" className="flex items-center group relative">
            <div className="relative">
              <Image
                src="/LOGO-AL-MANARA-SERVIÇOS-LINGUÍSTICOS-SEM-FUNDO-02.png"
                alt="Al Manara Serviços Linguísticos"
                width={200}
                height={60}
                priority
                className="h-14 w-auto transition-all duration-500 group-hover:scale-110"
              />
              {/* Glow effect dourado */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#BFCC2E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
              {/* Brilho rotativo */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
            {/* Ornamento árabe sutil */}
            <div className="absolute -top-2 -right-2 w-6 h-6 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
              <svg viewBox="0 0 30 30">
                <path d="M15 3 L17 12 L25 14 L17 16 L15 24 L13 16 L5 14 L13 12 Z" fill="#BFCC2E" />
              </svg>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/">
              <Button
                variant="ghost"
                className="text-[#4F6A8B] hover:text-[#BFCC2E] hover:bg-linear-to-r hover:from-[#4F6A8B]/5 hover:to-[#BFCC2E]/5 font-semibold transition-all duration-300 relative group px-5 font-[family-name:var(--font-cairo)]"
              >
                Início
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#4F6A8B] to-[#BFCC2E] group-hover:w-full transition-all duration-300"></span>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#BFCC2E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </Button>
            </Link>

            <Link href="/sobre">
              <Button
                variant="ghost"
                className="text-[#4F6A8B] hover:text-[#BFCC2E] hover:bg-linear-to-r hover:from-[#4F6A8B]/5 hover:to-[#BFCC2E]/5 font-semibold transition-all duration-300 relative group px-5 font-[family-name:var(--font-cairo)]"
              >
                Sobre Nós
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#4F6A8B] to-[#BFCC2E] group-hover:w-full transition-all duration-300"></span>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#BFCC2E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </Button>
            </Link>

            {/* Dropdown de Serviços - Setinha gira APENAS quando aberto */}
            <DropdownMenu onOpenChange={setServicesOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-[#4F6A8B] hover:text-[#BFCC2E] hover:bg-linear-to-r hover:from-[#4F6A8B]/5 hover:to-[#BFCC2E]/5 font-semibold transition-all duration-300 relative group px-5 font-[family-name:var(--font-cairo)]"
                >
                  Serviços{' '}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                      servicesOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#4F6A8B] to-[#BFCC2E] group-hover:w-full transition-all duration-300"></span>
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#BFCC2E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-80 bg-white/98 backdrop-blur-2xl border-2 border-[#4F6A8B]/20 shadow-2xl rounded-2xl p-3 mt-2 overflow-hidden"
              >
                {/* Padrão árabe no fundo do dropdown */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                  <div
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 5 L22 15 L30 17 L22 19 L20 27 L18 19 L10 17 L18 15 Z' fill='%23BFCC2E'/%3E%3C/svg%3E")`,
                      backgroundSize: '60px 60px',
                    }}
                    className="absolute inset-0"
                  ></div>
                </div>

                {/* Barra decorativa premium */}
                <div className="relative h-1 w-full bg-linear-to-r from-[#4F6A8B] via-[#BFCC2E] to-[#4F6A8B] rounded-t-xl mb-3">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent animate-pulse"></div>
                </div>

                <div className="relative z-10 space-y-1">
                  <DropdownMenuItem asChild>
                    <Link
                      href="/servicos/traducao-simples"
                      className="cursor-pointer hover:bg-linear-to-r hover:from-[#4F6A8B]/10 hover:to-[#BFCC2E]/10 rounded-xl p-4 transition-all duration-300 group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#BFCC2E]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#4F6A8B] to-[#3d5570] flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-[#4F6A8B] group-hover:text-[#BFCC2E] transition-colors font-[family-name:var(--font-amiri)] text-base">
                            Tradução Simples
                          </p>
                          <p className="text-xs text-gray-500 font-[family-name:var(--font-amiri)]">
                            Documentos e textos gerais
                          </p>
                        </div>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link
                      href="/servicos/traducao-tecnica"
                      className="cursor-pointer hover:bg-linear-to-r hover:from-[#4F6A8B]/10 hover:to-[#BFCC2E]/10 rounded-xl p-4 transition-all duration-300 group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#BFCC2E]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#4F6A8B] to-[#3d5570] flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                          <Wrench className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-[#4F6A8B] group-hover:text-[#BFCC2E] transition-colors font-[family-name:var(--font-amiri)] text-base">
                            Tradução Técnica
                          </p>
                          <p className="text-xs text-gray-500 font-[family-name:var(--font-amiri)]">
                            Manuais e conteúdo especializado
                          </p>
                        </div>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link
                      href="/servicos/traducao-juramentada"
                      className="cursor-pointer hover:bg-linear-to-r hover:from-[#4F6A8B]/10 hover:to-[#BFCC2E]/10 rounded-xl p-4 transition-all duration-300 group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#BFCC2E]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#4F6A8B] to-[#3d5570] flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                          <Scale className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-[#4F6A8B] group-hover:text-[#BFCC2E] transition-colors font-[family-name:var(--font-amiri)] text-base">
                            Tradução Juramentada
                          </p>
                          <p className="text-xs text-gray-500 font-[family-name:var(--font-amiri)]">
                            Documentos oficiais certificados
                          </p>
                        </div>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  {/* Item DESTAQUE - Idiomas Raros */}
                  <DropdownMenuItem asChild>
                    <Link
                      href="/servicos/idiomas-raros"
                      className="cursor-pointer hover:bg-linear-to-r hover:from-[#BFCC2E]/15 hover:to-[#F3EFB6]/25 rounded-xl p-4 transition-all duration-300 group border-2 border-[#BFCC2E]/30 relative overflow-hidden"
                    >
                      {/* Badge DESTAQUE */}
                      <div className="absolute top-2 right-2 z-20">
                        <span className="bg-[#BFCC2E] text-black px-2 py-0.5 rounded-full text-[10px] font-bold animate-pulse font-[family-name:var(--font-cairo)]">
                          ✨ DESTAQUE
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#BFCC2E]/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#BFCC2E] to-[#a8b41f] flex items-center justify-center text-black font-bold text-sm group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl">
                          <Globe className="h-6 w-6 text-black" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-[#4F6A8B] group-hover:text-[#BFCC2E] transition-colors font-[family-name:var(--font-amiri)] text-base">
                            Idiomas Raros
                          </p>
                          <p className="text-xs text-gray-500 font-[family-name:var(--font-amiri)]">
                            Islandês, georgiano e mais
                          </p>
                        </div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/contato">
              <Button
                variant="ghost"
                className="text-[#4F6A8B] hover:text-[#BFCC2E] hover:bg-linear-to-r hover:from-[#4F6A8B]/5 hover:to-[#BFCC2E]/5 font-semibold transition-all duration-300 relative group px-5 font-[family-name:var(--font-cairo)]"
              >
                Contato
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#4F6A8B] to-[#BFCC2E] group-hover:w-full transition-all duration-300"></span>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#BFCC2E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </Button>
            </Link>
          </div>

          {/* CTAs Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Seletor de Idioma com fundo visível */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 border-2 border-[#4F6A8B]/50 bg-white hover:border-[#4F6A8B] hover:bg-linear-to-r hover:from-[#4F6A8B]/10 hover:to-[#BFCC2E]/10 transition-all duration-300 rounded-xl font-semibold group relative overflow-hidden font-[family-name:var(--font-cairo)] text-zinc-400"
                >
                  <Globe className="h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
                  PT
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#BFCC2E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className=" backdrop-blur-2xl border-2 border-[#4F6A8B]/10 shadow-2xl rounded-xl p-2 mt-2"
              >
                <DropdownMenuItem className="cursor-pointer hover:bg-linear-to-r hover:from-[#4F6A8B]/10 hover:to-[#BFCC2E]/10 rounded-lg font-medium transition-all font-[family-name:var(--font-cairo)]">
                  🇧🇷 Português
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-linear-to-r hover:from-[#4F6A8B]/10 hover:to-[#BFCC2E]/10 rounded-lg font-medium transition-all font-[family-name:var(--font-cairo)]">
                  🇲🇦 العربية
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-linear-to-r hover:from-[#4F6A8B]/10 hover:to-[#BFCC2E]/10 rounded-lg font-medium transition-all font-[family-name:var(--font-cairo)]">
                  🇺🇸 English
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-linear-to-r hover:from-[#4F6A8B]/10 hover:to-[#BFCC2E]/10 rounded-lg font-medium transition-all font-[family-name:var(--font-cairo)]">
                  🇪🇸 Español
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-linear-to-r hover:from-[#4F6A8B]/10 hover:to-[#BFCC2E]/10 rounded-lg font-medium transition-all font-[family-name:var(--font-cairo)]">
                  🇫🇷 Français
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Principal ÉPICO */}
            <Link href="/orcamento">
              <Button className="bg-linear-to-r from-[#BFCC2E] to-[#a8b41f] hover:from-[#a8b41f] hover:to-[#BFCC2E] text-black font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 rounded-xl px-6 py-2.5 relative overflow-hidden group font-[family-name:var(--font-cairo)]">
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
                  Solicitar Orçamento
                </span>
                {/* Shimmer duplo */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-100"></div>
                {/* Glow externo */}
                <div className="absolute inset-0 bg-[#BFCC2E] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10"></div>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu (mantém igual) */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-[#4F6A8B] hover:bg-linear-to-r hover:from-[#4F6A8B]/10 hover:to-[#BFCC2E]/10 border-none rounded-xl transition-all relative group"
              >
                <Menu className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#BFCC2E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </Button>
            </SheetTrigger>
            {/* ... resto do mobile menu igual ... */}
          </Sheet>
        </div>
      </nav>
    </Card>
  );
}
