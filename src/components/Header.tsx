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
import {
  ChevronDown,
  FileText, // ⚖️ Balança de juiz (Tradução Juramentada)
  Globe,
  Home,
  Info,
  Mail,
  Menu, // 🔧 Chave de fenda (Tradução Técnica)
  Scale,
  Sparkles, // 📄 Papel (Tradução Simples)
  Wrench, // 🔧 Chave de fenda (Tradução Técnica)
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from './ui/card';

export function Header() {
  return (
    <Card className="sticky rounded-none top-0 z-50 w-full bg-linear-to-r from-white to-[#F3EFB6]/15 backdrop-blur-xl border-b-2 border-[#4F6A8B]/10 shadow-lg h-30 flex items-center">
      {/* Detalhe decorativo árabe no topo */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#BFCC2E] to-transparent opacity-60"></div>

      <nav className="container mx-auto px-4 lg:px-8 relative">
        <div className="flex h-20 items-center justify-between">
          {/* Logo com efeito hover */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Image
                src="/LOGO-AL-MANARA-SERVIÇOS-LINGUÍSTICOS-SEM-FUNDO-02.png"
                alt="Al Manara Serviços Linguísticos"
                width={200}
                height={60}
                priority
                className="h-14 w-auto transition-all duration-300 group-hover:scale-105"
              />
              {/* Brilho sutil no hover */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#BFCC2E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <Link href="/">
              <Button
                variant="ghost"
                className="text-[#4F6A8B] hover:text-[#BFCC2E] hover:bg-linear-to-r hover:from-[#4F6A8B]/5 hover:to-[#BFCC2E]/5 font-semibold transition-all duration-300 relative group px-5"
              >
                Início
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#4F6A8B] to-[#BFCC2E] group-hover:w-full transition-all duration-300"></span>
              </Button>
            </Link>

            <Link href="/sobre">
              <Button
                variant="ghost"
                className="text-[#4F6A8B] hover:text-[#BFCC2E] hover:bg-linear-to-r hover:from-[#4F6A8B]/5 hover:to-[#BFCC2E]/5 font-semibold transition-all duration-300 relative group px-5"
              >
                Sobre Nós
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#4F6A8B] to-[#BFCC2E] group-hover:w-full transition-all duration-300"></span>
              </Button>
            </Link>

            {/* Dropdown de Serviços */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-[#4F6A8B] hover:text-[#BFCC2E] hover:bg-linear-to-r hover:from-[#4F6A8B]/5 hover:to-[#BFCC2E]/5 font-semibold transition-all duration-300 relative group px-5"
                >
                  Serviços{' '}
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180 duration-300" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#4F6A8B] to-[#BFCC2E] group-hover:w-full transition-all duration-300"></span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-72 bg-linear-to-br from-white/45 to-[#F3EFB6]/55 backdrop-blur-xl border-2 border-[#4F6A8B]/10 shadow-2xl rounded-2xl p-2 mt-2"
              >
                {/* Detalhe decorativo no dropdown */}
                <div className="h-1 w-full bg-linear-to-r from-[#4F6A8B] via-[#BFCC2E] to-[#4F6A8B] rounded-t-xl mb-2"></div>

                <DropdownMenuItem asChild>
                  <Link
                    href="/servicos/traducao-simples"
                    className="cursor-pointer hover:bg-linear-to-r hover:from-[#4F6A8B]/5 hover:to-[#BFCC2E]/5 rounded-xl p-3 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#4F6A8B] to-[#3d5570] flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                        <FileText className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-[#4F6A8B] group-hover:text-[#BFCC2E] transition-colors">
                          Tradução Simples
                        </p>
                        <p className="text-xs text-gray-500">Documentos e textos gerais</p>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link
                    href="/servicos/traducao-tecnica"
                    className="cursor-pointer hover:bg-linear-to-r hover:from-[#4F6A8B]/5 hover:to-[#BFCC2E]/5 rounded-xl p-3 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#4F6A8B] to-[#3d5570] flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                        <Wrench className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-[#4F6A8B] group-hover:text-[#BFCC2E] transition-colors">
                          Tradução Técnica
                        </p>
                        <p className="text-xs text-gray-500">Manuais e conteúdo especializado</p>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link
                    href="/servicos/traducao-juramentada"
                    className="cursor-pointer hover:bg-linear-to-r hover:from-[#4F6A8B]/5 hover:to-[#BFCC2E]/5 rounded-xl p-3 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#4F6A8B] to-[#3d5570] flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                        <Scale className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-[#4F6A8B] group-hover:text-[#BFCC2E] transition-colors">
                          Tradução Juramentada
                        </p>
                        <p className="text-xs text-gray-500">Documentos oficiais certificados</p>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link
                    href="/servicos/idiomas-raros"
                    className="cursor-pointer hover:bg-linear-to-r hover:from-[#BFCC2E]/10 hover:to-[#F3EFB6]/20 rounded-xl p-3 transition-all duration-300 group border border-[#BFCC2E]/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#BFCC2E] to-[#a8b41f] flex items-center justify-center text-black font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                        <Globe className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <p className="font-bold text-[#4F6A8B] group-hover:text-[#BFCC2E] transition-colors">
                          Idiomas Raros ✨
                        </p>
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
                className="text-[#4F6A8B] hover:text-[#BFCC2E] hover:bg-linear-to-r hover:from-[#4F6A8B]/5 hover:to-[#BFCC2E]/5 font-semibold transition-all duration-300 relative group px-5"
              >
                Contato
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#4F6A8B] to-[#BFCC2E] group-hover:w-full transition-all duration-300"></span>
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
                  className="gap-2 border-2 border-[#4F6A8B]/30 hover:border-[#4F6A8B] hover:bg-linear-to-r hover:from-[#4F6A8B]/5 hover:to-[#BFCC2E]/5 transition-all duration-300 rounded-xl font-semibold group"
                >
                  <Globe className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                  PT
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="backdrop-blur-xl border-2 border-[#4F6A8B]/10 shadow-xl rounded-xl p-1 mt-2"
              >
                <DropdownMenuItem className="cursor-pointer hover:bg-linear-to-r hover:from-[#4F6A8B]/5 hover:to-[#BFCC2E]/5 rounded-lg font-medium transition-all">
                  🇧🇷 Português
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-linear-to-r hover:from-[#4F6A8B]/5 hover:to-[#BFCC2E]/5 rounded-lg font-medium transition-all">
                  🇲🇦 العربية
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-linear-to-r hover:from-[#4F6A8B]/5 hover:to-[#BFCC2E]/5 rounded-lg font-medium transition-all">
                  🇺🇸 English
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-linear-to-r hover:from-[#4F6A8B]/5 hover:to-[#BFCC2E]/5 rounded-lg font-medium transition-all">
                  🇪🇸 Español
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-linear-to-r hover:from-[#4F6A8B]/5 hover:to-[#BFCC2E]/5 rounded-lg font-medium transition-all">
                  🇫🇷 Français
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Principal */}
            <Link href="/orcamento">
              <Button className="bg-linear-to-r from-[#BFCC2E] to-[#a8b41f] hover:from-[#a8b41f] hover:to-[#BFCC2E] text-black font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl px-6 relative overflow-hidden group">
                <span className="relative z-10">Solicitar Orçamento</span>
                {/* Brilho animado */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Sheet */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-black border-none rounded-xl transition-all"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-white/60 backdrop-blur-xl border-2 border-[#4F6A8B]/10 shadow-xl rounded-tl-none p-6"
            >
              <SheetHeader className="border-b-2 border-[#4F6A8B]/20 pb-4">
                <SheetTitle className="text-left text-[#4F6A8B] text-2xl font-bold">
                  Menu
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2 mt-6">
                <SheetClose asChild>
                  <Link href="/">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-[#4F6A8B] hover:bg-linear-to-r hover:from-[#4F6A8B]/10 hover:to-[#BFCC2E]/10 text-base font-semibold rounded-xl transition-all"
                    >
                      <Home className="h-5 w-5 mr-2" />
                      Início
                    </Button>
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="/sobre">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-[#4F6A8B] hover:bg-linear-to-r hover:from-[#4F6A8B]/10 hover:to-[#BFCC2E]/10 text-base font-semibold rounded-xl transition-all"
                    >
                      <Info className="h-5 w-5 mr-2" />
                      Sobre Nós
                    </Button>
                  </Link>
                </SheetClose>

                {/* Serviços no mobile */}
                <div className="space-y-2 py-3 px-2 bg-linear-to-r from-[#4F6A8B]/5 to-[#BFCC2E]/5 rounded-xl mt-2">
                  <p className="text-sm font-bold text-[#4F6A8B] px-2 mb-2 flex items-center gap-2">
                    <span className="w-1 h-4 bg-linear-to-b from-[#4F6A8B] to-[#BFCC2E] rounded-full"></span>
                    SERVIÇOS
                  </p>
                  <div className="flex flex-col gap-1">
                    <SheetClose asChild>
                      <Link href="/servicos/traducao-simples">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-gray-700 hover:text-[#4F6A8B] hover:bg-white/80 pl-6 rounded-lg font-medium transition-all"
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Tradução Simples
                        </Button>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/servicos/traducao-tecnica">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-gray-700 hover:text-[#4F6A8B] hover:bg-white/80 pl-6 rounded-lg font-medium transition-all"
                        >
                          <Wrench className="h-4 w-4 mr-2" />
                          Tradução Técnica
                        </Button>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/servicos/traducao-juramentada">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-gray-700 hover:text-[#4F6A8B] hover:bg-white/80 pl-6 rounded-lg font-medium transition-all"
                        >
                          <Scale className="h-4 w-4 mr-2" />
                          Tradução Juramentada
                        </Button>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/servicos/idiomas-raros">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-gray-700 hover:text-[#BFCC2E] hover:bg-white/80 pl-6 rounded-lg font-medium transition-all border border-[#BFCC2E]/30"
                        >
                          <Globe className="h-4 w-4 mr-2" />
                          Idiomas Raros ✨
                        </Button>
                      </Link>
                    </SheetClose>
                  </div>
                </div>

                <SheetClose asChild>
                  <Link href="/contato">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-[#4F6A8B] hover:bg-linear-to-r hover:from-[#4F6A8B]/10 hover:to-[#BFCC2E]/10 text-base font-semibold rounded-xl transition-all"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      Contato
                    </Button>
                  </Link>
                </SheetClose>

                {/* Idiomas mobile */}
                <div className="border-t-2 border-[#4F6A8B]/10 pt-4 mt-4">
                  <p className="text-sm font-bold text-[#4F6A8B] mb-3 px-2 flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    IDIOMA
                  </p>
                  <div className="grid grid-cols-2 gap-2 px-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-linear-to-r hover:from-[#4F6A8B]/10 hover:to-[#BFCC2E]/10 rounded-lg font-semibold transition-all border-[#4F6A8B]/30"
                    >
                      🇧🇷 PT
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-linear-to-r hover:from-[#4F6A8B]/10 hover:to-[#BFCC2E]/10 rounded-lg font-semibold transition-all border-[#4F6A8B]/30"
                    >
                      🇲🇦 AR
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-linear-to-r hover:from-[#4F6A8B]/10 hover:to-[#BFCC2E]/10 rounded-lg font-semibold transition-all border-[#4F6A8B]/30"
                    >
                      🇺🇸 EN
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-linear-to-r hover:from-[#4F6A8B]/10 hover:to-[#BFCC2E]/10 rounded-lg font-semibold transition-all border-[#4F6A8B]/30"
                    >
                      🇪🇸 ES
                    </Button>
                  </div>
                </div>

                {/* CTA mobile */}
                <SheetClose asChild>
                  <Link href="/orcamento" className="mt-6">
                    <Button className="w-full bg-linear-to-r from-[#BFCC2E] to-[#a8b41f] hover:from-[#a8b41f] hover:to-[#BFCC2E] text-black font-bold text-base py-7 shadow-xl rounded-xl transition-all hover:scale-[1.02] relative overflow-hidden group">
                      <Sparkles className="h-5 w-5 mr-2 relative z-10" />
                      <span className="relative z-10">Solicitar Orçamento</span>
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
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
