'use client';

import { Facebook, Globe, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-br from-[#2b3a4c] via-[#3d5570] to-[#4F6A8B] text-white relative overflow-hidden">
      {/* Padrão decorativo árabe */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23BFCC2E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Linha decorativa no topo */}
      <div className="h-1 bg-linear-to-r from-transparent via-[#BFCC2E] to-transparent"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Coluna 1: Logo e Descrição */}
          <div className="space-y-6">
            <Image
              src="/LOGO-AL-MANARA-SERVIÇOS-LINGUÍSTICOS-SEM-FUNDO-02.png"
              alt="Al Manara"
              width={180}
              height={60}
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed">
              Traduções profissionais com nativos especializados. Quebramos barreiras linguísticas
              para sua empresa alcançar o mundo.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="bg-white/10 hover:bg-[#BFCC2E] hover:text-black p-2 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-white/10 hover:bg-[#BFCC2E] hover:text-black p-2 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-white/10 hover:bg-[#BFCC2E] hover:text-black p-2 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Coluna 2: Serviços */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#BFCC2E] flex items-center gap-2">
              <span className="w-1 h-6 bg-linear-to-b from-[#BFCC2E] to-[#4F6A8B] rounded-full"></span>
              Serviços
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/servicos/traducao-simples"
                  className="text-gray-300 hover:text-[#BFCC2E] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#BFCC2E] group-hover:w-4 transition-all duration-300"></span>
                  Tradução Simples
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/traducao-tecnica"
                  className="text-gray-300 hover:text-[#BFCC2E] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#BFCC2E] group-hover:w-4 transition-all duration-300"></span>
                  Tradução Técnica
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/traducao-juramentada"
                  className="text-gray-300 hover:text-[#BFCC2E] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#BFCC2E] group-hover:w-4 transition-all duration-300"></span>
                  Tradução Juramentada
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/idiomas-raros"
                  className="text-gray-300 hover:text-[#BFCC2E] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#BFCC2E] group-hover:w-4 transition-all duration-300"></span>
                  Idiomas Raros ✨
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#BFCC2E] flex items-center gap-2">
              <span className="w-1 h-6 bg-linear-to-b from-[#BFCC2E] to-[#4F6A8B] rounded-full"></span>
              Links Rápidos
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-[#BFCC2E] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#BFCC2E] group-hover:w-4 transition-all duration-300"></span>
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-gray-300 hover:text-[#BFCC2E] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#BFCC2E] group-hover:w-4 transition-all duration-300"></span>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/orcamento"
                  className="text-gray-300 hover:text-[#BFCC2E] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#BFCC2E] group-hover:w-4 transition-all duration-300"></span>
                  Solicitar Orçamento
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-gray-300 hover:text-[#BFCC2E] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#BFCC2E] group-hover:w-4 transition-all duration-300"></span>
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#BFCC2E] flex items-center gap-2">
              <span className="w-1 h-6 bg-linear-to-b from-[#BFCC2E] to-[#4F6A8B] rounded-full"></span>
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="h-5 w-5 text-[#BFCC2E] mt-0.5 flex shrink-0" />
                <span>Barueri - São Paulo, Brasil</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="h-5 w-5 text-[#BFCC2E] flex shrink-0" />
                <Link href="tel:+5511960229051" className="hover:text-[#BFCC2E] transition-colors">
                  +55 (11) 96022-9051
                </Link>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="h-5 w-5 text-[#BFCC2E] flex shrink-0" />
                <Link
                  href="mailto:contato@almanaratranslation.com.br"
                  className="hover:text-[#BFCC2E] transition-colors break-all"
                >
                  contato@almanaratranslation.com.br
                </Link>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Globe className="h-5 w-5 text-[#BFCC2E] flex shrink-0" />
                <span>almanaratranslation.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória decorativa */}
        <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>© {currentYear} Al Manara Serviços Linguísticos. Todos os direitos reservados.</p>
          <p className="flex items-center gap-2">
            Desenvolvido por{' '}
            <Link
              href="https://instagram.com/webevy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BFCC2E] hover:underline font-semibold"
            >
              Nimbus
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
