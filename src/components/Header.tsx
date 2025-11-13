'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
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

            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-2xl border-l-2 border-[#4F6A8B]/20 p-0 overflow-y-auto"
            >
              {/* Header do Menu Mobile com padrão árabe */}
              <div className="relative p-6 border-b-2 border-[#4F6A8B]/10 bg-linear-to-br from-white to-[#F3EFB6]/20">
                {/* Padrão árabe sutil */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                  <div
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 5 L22 15 L30 17 L22 19 L20 27 L18 19 L10 17 L18 15 Z' fill='%23BFCC2E'/%3E%3C/svg%3E")`,
                      backgroundSize: '60px 60px',
                    }}
                    className="absolute inset-0"
                  ></div>
                </div>

                <Image
                  src="/LOGO-AL-MANARA-SERVIÇOS-LINGUÍSTICOS-SEM-FUNDO-02.png"
                  alt="Al Manara"
                  width={150}
                  height={45}
                  className="relative z-10 animate-fade-in-up"
                />
              </div>

              {/* Menu Items */}
              <div className="flex flex-col gap-2 p-6">
                <Link href="/" className="group">
                  <div className="flex items-center gap-3 p-4 rounded-xl hover:bg-linear-to-r hover:from-[#4F6A8B]/10 hover:to-[#BFCC2E]/10 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#BFCC2E]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#4F6A8B] to-[#3d5570] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    </div>
                    <span className="text-[#4F6A8B] font-bold group-hover:text-[#BFCC2E] transition-colors relative z-10 font-[family-name:var(--font-cairo)]">
                      Início
                    </span>
                  </div>
                </Link>

                <Link href="/sobre" className="group">
                  <div className="flex items-center gap-3 p-4 rounded-xl hover:bg-linear-to-r hover:from-[#4F6A8B]/10 hover:to-[#BFCC2E]/10 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#BFCC2E]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#4F6A8B] to-[#3d5570] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-[#4F6A8B] font-bold group-hover:text-[#BFCC2E] transition-colors relative z-10 font-[family-name:var(--font-cairo)]">
                      Sobre Nós
                    </span>
                  </div>
                </Link>

                {/* Serviços - Expandível */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-linear-to-r from-[#4F6A8B]/5 to-[#BFCC2E]/5 border-2 border-[#BFCC2E]/20">
                    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#4F6A8B] to-[#3d5570] flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[#4F6A8B] font-bold font-[family-name:var(--font-cairo)]">
                      Serviços
                    </span>
                  </div>

                  <div className="ml-4 space-y-2 border-l-2 border-[#BFCC2E]/30 pl-4">
                    <Link href="/servicos/traducao-simples" className="group block">
                      <div className="flex items-center gap-2 p-3 rounded-lg hover:bg-[#4F6A8B]/5 transition-all duration-300">
                        <FileText className="w-4 h-4 text-[#4F6A8B] group-hover:text-[#BFCC2E] transition-colors" />
                        <span className="text-sm text-[#4F6A8B] group-hover:text-[#BFCC2E] transition-colors font-[family-name:var(--font-amiri)]">
                          Tradução Simples
                        </span>
                      </div>
                    </Link>

                    <Link href="/servicos/traducao-tecnica" className="group block">
                      <div className="flex items-center gap-2 p-3 rounded-lg hover:bg-[#4F6A8B]/5 transition-all duration-300">
                        <Wrench className="w-4 h-4 text-[#4F6A8B] group-hover:text-[#BFCC2E] transition-colors" />
                        <span className="text-sm text-[#4F6A8B] group-hover:text-[#BFCC2E] transition-colors font-[family-name:var(--font-amiri)]">
                          Tradução Técnica
                        </span>
                      </div>
                    </Link>

                    <Link href="/servicos/traducao-juramentada" className="group block">
                      <div className="flex items-center gap-2 p-3 rounded-lg hover:bg-[#4F6A8B]/5 transition-all duration-300">
                        <Scale className="w-4 h-4 text-[#4F6A8B] group-hover:text-[#BFCC2E] transition-colors" />
                        <span className="text-sm text-[#4F6A8B] group-hover:text-[#BFCC2E] transition-colors font-[family-name:var(--font-amiri)]">
                          Tradução Juramentada
                        </span>
                      </div>
                    </Link>

                    <Link href="/servicos/idiomas-raros" className="group block">
                      <div className="flex items-center gap-2 p-3 rounded-lg hover:bg-linear-to-r hover:from-[#BFCC2E]/10 hover:to-[#F3EFB6]/20 transition-all duration-300 border border-[#BFCC2E]/30">
                        <Globe className="w-4 h-4 text-[#BFCC2E] animate-pulse" />
                        <span className="text-sm text-[#4F6A8B] group-hover:text-[#BFCC2E] transition-colors font-bold font-[family-name:var(--font-amiri)]">
                          ✨ Idiomas Raros
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>

                <Link href="/contato" className="group">
                  <div className="flex items-center gap-3 p-4 rounded-xl hover:bg-linear-to-r hover:from-[#4F6A8B]/10 hover:to-[#BFCC2E]/10 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#BFCC2E]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#4F6A8B] to-[#3d5570] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-[#4F6A8B] font-bold group-hover:text-[#BFCC2E] transition-colors relative z-10 font-[family-name:var(--font-cairo)]">
                      Contato
                    </span>
                  </div>
                </Link>
              </div>

              {/* CTA no final do menu mobile */}
              <div className="p-6 border-t-2 border-[#4F6A8B]/10 bg-linear-to-br from-white to-[#F3EFB6]/10">
                <Link href="/orcamento">
                  <Button className="w-full bg-linear-to-r from-[#BFCC2E] to-[#a8b41f] hover:from-[#a8b41f] hover:to-[#BFCC2E] text-black font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl py-6 relative overflow-hidden group font-[family-name:var(--font-cairo)]">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Sparkles className="h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                      Solicitar Orçamento Grátis
                    </span>
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </Button>
                </Link>

                {/* Seletor de Idioma Mobile */}
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500 font-[family-name:var(--font-cairo)]">
                  <Globe className="w-4 h-4" />
                  <span>🇧🇷 PT | 🇲🇦 AR | 🇺🇸 EN | 🇪🇸 ES | 🇫🇷 FR</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </Card>
  );
}
