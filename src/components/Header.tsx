'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ChevronDown, Globe, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from './ui/card';

export function Header() {
  return (
    <Card className="sticky rounded-tr-none rounded-tl-none top-0 z-50 w-full bg-linear-to-r from-white via-gray-50/50 to-white backdrop-blur-md  border-gray-200 shadow-sm h-30 flex items-center ">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/LOGO-AL-MANARA-SERVIÇOS-LINGUÍSTICOS-SEM-FUNDO-02.png"
              alt="Al Manara Serviços Linguísticos"
              width={200}
              height={60}
              priority
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-5">
            <Link href="/">
              <Button
                variant="ghost"
                className="text-[#4F6A8B] hover:text-[#BFCC2E] hover:bg-[#4F6A8B]/5 font-medium transition-all"
              >
                Início
              </Button>
            </Link>

            <Link href="/sobre">
              <Button
                variant="ghost"
                className="text-[#4F6A8B] hover:text-[#BFCC2E] hover:bg-[#4F6A8B]/5 font-medium transition-all"
              >
                Sobre Nós
              </Button>
            </Link>

            {/* Dropdown de Serviços */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-[#4F6A8B] hover:text-[#BFCC2E] hover:bg-[#4F6A8B]/5 font-medium transition-all"
                >
                  Serviços <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 bg-white/95 backdrop-blur">
                <DropdownMenuItem asChild>
                  <Link
                    href="/servicos/traducao-simples"
                    className="cursor-pointer hover:bg-[#4F6A8B]/5"
                  >
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-medium">Tradução Simples</p>
                        <p className="text-xs text-gray-500">Documentos e textos gerais</p>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link
                    href="/servicos/traducao-tecnica"
                    className="cursor-pointer hover:bg-[#4F6A8B]/5"
                  >
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-medium">Tradução Técnica</p>
                        <p className="text-xs text-gray-500">Manuais e conteúdo especializado</p>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/servicos/traducao-juramentada"
                    className="cursor-pointer hover:bg-[#4F6A8B]/5"
                  >
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-medium">Tradução Juramentada</p>
                        <p className="text-xs text-gray-500">Documentos oficiais certificados</p>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/servicos/idiomas-raros"
                    className="cursor-pointer hover:bg-[#4F6A8B]/5"
                  >
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-medium">Idiomas Raros</p>
                        <p className="text-xs text-gray-500">Islandês, georgiano e mais</p>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/contato">
              <Button
                variant="ghost"
                className="text-[#4F6A8B] hover:text-[#BFCC2E] hover:bg-[#4F6A8B]/5 font-medium transition-all"
              >
                Contato
              </Button>
            </Link>
          </div>

          {/* CTAs Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Seletor de Idioma */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 border-[#4F6A8B]/30 hover:border-[#4F6A8B] hover:bg-[#4F6A8B]/5 transition-all"
                >
                  <Globe className="h-4 w-4" />
                  PT
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white">
                <DropdownMenuItem className="cursor-pointer">🇧🇷 Português</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">🇸🇦 العربية</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">🇬🇧 English</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">🇪🇸 Español</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">🇫🇷 Français</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Principal */}
            <Link href="/orcamento">
              <Button className="bg-[#BFCC2E] hover:bg-[#a8b41f] text-black font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105">
                Solicitar Orçamento
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Sheet */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-[#4F6A8B]">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[400px] bg-white">
              <SheetHeader className="border-b pb-4">
                <SheetTitle className="text-left text-[#4F6A8B] text-xl font-bold">Menu</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-3 mt-6">
                <SheetClose asChild>
                  <Link href="/">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-[#4F6A8B] hover:bg-[#4F6A8B]/10 text-base"
                    >
                      🏠 Início
                    </Button>
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="/sobre">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-[#4F6A8B] hover:bg-[#4F6A8B]/10 text-base"
                    >
                      ℹ️ Sobre Nós
                    </Button>
                  </Link>
                </SheetClose>

                {/* Serviços no mobile */}
                <div className="space-y-2 py-2">
                  <p className="text-sm font-bold text-[#4F6A8B] px-3 mb-2">SERVIÇOS</p>
                  <div className="flex flex-col gap-1">
                    <SheetClose asChild>
                      <Link href="/servicos/traducao-simples">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-gray-700 hover:bg-[#4F6A8B]/10 pl-6"
                        >
                          📄 Tradução Simples
                        </Button>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/servicos/traducao-tecnica">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-gray-700 hover:bg-[#4F6A8B]/10 pl-6"
                        >
                          🔧 Tradução Técnica
                        </Button>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/servicos/traducao-juramentada">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-gray-700 hover:bg-[#4F6A8B]/10 pl-6"
                        >
                          ⚖️ Tradução Juramentada
                        </Button>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/servicos/idiomas-raros">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-gray-700 hover:bg-[#4F6A8B]/10 pl-6"
                        >
                          🌍 Idiomas Raros
                        </Button>
                      </Link>
                    </SheetClose>
                  </div>
                </div>

                <SheetClose asChild>
                  <Link href="/contato">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-[#4F6A8B] hover:bg-[#4F6A8B]/10 text-base"
                    >
                      📧 Contato
                    </Button>
                  </Link>
                </SheetClose>

                {/* Idiomas mobile */}
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <p className="text-sm font-bold text-[#4F6A8B] mb-3 px-3">IDIOMA</p>
                  <div className="grid grid-cols-2 gap-2 px-3">
                    <Button variant="outline" size="sm" className="hover:bg-[#4F6A8B]/10">
                      🇧🇷 PT
                    </Button>
                    <Button variant="outline" size="sm" className="hover:bg-[#4F6A8B]/10">
                      🇸🇦 AR
                    </Button>
                    <Button variant="outline" size="sm" className="hover:bg-[#4F6A8B]/10">
                      🇬🇧 EN
                    </Button>
                    <Button variant="outline" size="sm" className="hover:bg-[#4F6A8B]/10">
                      🇪🇸 ES
                    </Button>
                  </div>
                </div>

                {/* CTA mobile */}
                <SheetClose asChild>
                  <Link href="/orcamento" className="mt-6">
                    <Button className="w-full bg-[#BFCC2E] hover:bg-[#a8b41f] text-black font-semibold text-base py-6 shadow-lg">
                      ✨ Solicitar Orçamento
                    </Button>
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </Card>
  );
}
