import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  Clock,
  DollarSign,
  FileCheck,
  FileText,
  Mail,
  MessageSquare,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function TraducaoSimplesPage() {
  const documentTypes = [
    { icon: Mail, title: 'E-mails e Correspondências', description: 'Comunicações corporativas' },
    { icon: Briefcase, title: 'Documentos Comerciais', description: 'Contratos, propostas' },
    { icon: FileText, title: 'Textos Gerais', description: 'Artigos, materiais diversos' },
    { icon: MessageSquare, title: 'Cartas e Ofícios', description: 'Comunicações formais' },
  ];

  const process = [
    {
      step: '01',
      title: 'Envio do Documento',
      description: 'Envie seu documento por email ou WhatsApp',
    },
    {
      step: '02',
      title: 'Análise e Orçamento',
      description: 'Analisamos e enviamos orçamento em até 2h',
    },
    {
      step: '03',
      title: 'Tradução',
      description: 'Tradutor nativo realiza o trabalho',
    },
    {
      step: '04',
      title: 'Revisão',
      description: 'Revisão técnica e controle de qualidade',
    },
    {
      step: '05',
      title: 'Entrega',
      description: 'Receba seu documento traduzido',
    },
  ];

  const benefits = [
    'Tradutores nativos especializados',
    'Prazo de entrega garantido',
    'Revisão incluída no serviço',
    'Confidencialidade total',
    'Formatação preservada',
    'Suporte pós-entrega',
  ];

  return (
    <div className="min-h-screen bg-white -mt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4F6A8B] via-[#3d5570] to-[#2b3a4c] text-white overflow-hidden py-20 lg:py-32">
        {/* Padrão geométrico árabe animado */}
        <div className="absolute inset-0 opacity-5 animate-pulse-slow">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23BFCC2E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Estrelas flutuantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-slow opacity-10"
              style={{
                left: `${15 + i * 16}%`,
                top: `${25 + (i % 3) * 25}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${17 + i * 2}s`,
              }}
            >
              <svg width="35" height="35" viewBox="0 0 35 35">
                <path
                  d="M17.5 3 L20 14 L28 16.5 L20 19 L17.5 27 L15 19 L7 16.5 L15 14 Z"
                  fill="#BFCC2E"
                  opacity="0.4"
                />
              </svg>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-[#BFCC2E] text-black px-4 py-2 rounded-full text-sm font-semibold font-[family-name:var(--font-cairo)]">
                  📄 Tradução Simples
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight font-[family-name:var(--font-amiri)]">
                Traduções Profissionais para seu <span className="text-[#BFCC2E]">Dia a Dia</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed font-[family-name:var(--font-amiri)] font-normal">
                Documentos pessoais e comerciais traduzidos com precisão e agilidade por
                profissionais nativos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/orcamento">
                  <Button
                    size="lg"
                    className="bg-[#BFCC2E] hover:bg-[#a8b41f] text-black font-bold px-8 py-6 relative overflow-hidden group font-[family-name:var(--font-cairo)]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Solicitar Orçamento
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </Button>
                </Link>
                <Link href="/contato">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#4F6A8B] font-[family-name:var(--font-cairo)]"
                  >
                    Falar com Especialista
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/IMG-20251111-WA0062.jpg"
                  alt="Tradução Simples"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#BFCC2E] to-[#a8b41f] rounded-2xl -z-10 animate-pulse"></div>
              {/* Ornamento decorativo */}
              <div className="absolute -top-4 -left-4 w-20 h-20 opacity-10">
                <svg viewBox="0 0 60 60">
                  <path
                    d="M30 10 L35 25 L50 30 L35 35 L30 50 L25 35 L10 30 L25 25 Z"
                    fill="#BFCC2E"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

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

      {/* Tipos de Documentos */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Padrão árabe sutil no fundo */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
          <div
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10 L45 30 L65 35 L45 40 L40 60 L35 40 L15 35 L35 30 Z' fill='%234F6A8B'/%3E%3C/svg%3E")`,
              backgroundSize: '120px 120px',
            }}
            className="absolute inset-0"
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#4F6A8B] mb-4 font-[family-name:var(--font-amiri)]">
              O Que Podemos Traduzir
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-amiri)] font-normal">
              Diversos tipos de documentos para atender suas necessidades pessoais e profissionais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {documentTypes.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#4F6A8B] group relative overflow-hidden"
                >
                  {/* Brilho ao hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-[#4F6A8B]/5 group-hover:to-[#BFCC2E]/5 transition-all duration-500"></div>
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-[#4F6A8B] to-[#3d5570] w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#4F6A8B] mb-2 font-[family-name:var(--font-amiri)]">
                      {doc.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-[family-name:var(--font-amiri)] font-normal">
                      {doc.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-[#4F6A8B]/5 to-[#BFCC2E]/5 p-8 rounded-2xl max-w-4xl mx-auto relative overflow-hidden">
            {/* Mini ornamento */}
            <div className="absolute top-2 right-2 w-12 h-12 opacity-[0.05]">
              <svg viewBox="0 0 40 40">
                <path d="M20 5 L22 15 L30 17 L22 19 L20 27 L18 19 L10 17 L18 15 Z" fill="#4F6A8B" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#4F6A8B] mb-4 text-center font-[family-name:var(--font-amiri)]">
              Outros Documentos
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <ul className="space-y-2">
                <li className="flex items-center gap-2 font-[family-name:var(--font-amiri)] font-normal">
                  <CheckCircle className="h-5 w-5 text-[#BFCC2E]" />
                  Currículos e Cartas de Apresentação
                </li>
                <li className="flex items-center gap-2 font-[family-name:var(--font-amiri)] font-normal">
                  <CheckCircle className="h-5 w-5 text-[#BFCC2E]" />
                  Materiais de Marketing
                </li>
                <li className="flex items-center gap-2 font-[family-name:var(--font-amiri)] font-normal">
                  <CheckCircle className="h-5 w-5 text-[#BFCC2E]" />
                  Apresentações Corporativas
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 font-[family-name:var(--font-amiri)] font-normal">
                  <CheckCircle className="h-5 w-5 text-[#BFCC2E]" />
                  Websites e Conteúdo Digital
                </li>
                <li className="flex items-center gap-2 font-[family-name:var(--font-amiri)] font-normal">
                  <CheckCircle className="h-5 w-5 text-[#BFCC2E]" />
                  Relatórios e Atas
                </li>
                <li className="flex items-center gap-2 font-[family-name:var(--font-amiri)] font-normal">
                  <CheckCircle className="h-5 w-5 text-[#BFCC2E]" />
                  Textos Acadêmicos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Padrão árabe no fundo */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L55 35 L80 40 L55 45 L50 70 L45 45 L20 40 L45 35 Z' fill='%234F6A8B'/%3E%3C/svg%3E")`,
              backgroundSize: '140px 140px',
            }}
            className="absolute inset-0"
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#4F6A8B] mb-4 font-[family-name:var(--font-amiri)]">
              Como Funciona o Processo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-amiri)] font-normal">
              Simples, rápido e transparente do início ao fim
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-6">
              {process.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-[#4F6A8B] to-[#3d5570] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white font-[family-name:var(--font-cairo)]">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#4F6A8B] mb-2 font-[family-name:var(--font-amiri)]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-[family-name:var(--font-amiri)] font-normal">
                      {item.description}
                    </p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#4F6A8B] to-[#BFCC2E]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Padrão árabe sutil */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
          <div
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10 L45 30 L65 35 L45 40 L40 60 L35 40 L15 35 L35 30 Z' fill='%234F6A8B'/%3E%3C/svg%3E")`,
              backgroundSize: '120px 120px',
            }}
            className="absolute inset-0"
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-[#4F6A8B] mb-6 font-[family-name:var(--font-amiri)]">
                Por Que Escolher Nosso Serviço de Tradução Simples?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-[#4F6A8B]/5 hover:to-[#BFCC2E]/5 transition-all group"
                  >
                    <div className="bg-gradient-to-br from-[#BFCC2E] to-[#a8b41f] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-6 w-6 text-black" />
                    </div>
                    <p className="text-gray-700 font-medium font-[family-name:var(--font-cairo)]">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#4F6A8B] to-[#3d5570] p-8 rounded-2xl text-white text-center shadow-xl hover:scale-105 transition-all duration-300 group">
                <Clock className="h-12 w-12 mx-auto mb-4 text-[#BFCC2E] group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold mb-2 font-[family-name:var(--font-cairo)]">
                  24-48h
                </div>
                <p className="text-gray-300 font-[family-name:var(--font-amiri)] font-normal">
                  Prazo médio de entrega
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#BFCC2E] to-[#a8b41f] p-8 rounded-2xl text-black text-center shadow-xl hover:scale-105 transition-all duration-300 group">
                <FileCheck className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold mb-2 font-[family-name:var(--font-cairo)]">
                  100%
                </div>
                <p className="text-gray-700 font-[family-name:var(--font-amiri)] font-normal">
                  Satisfação garantida
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#BFCC2E] to-[#a8b41f] p-8 rounded-2xl text-black text-center shadow-xl hover:scale-105 transition-all duration-300 group">
                <DollarSign className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold mb-2 font-[family-name:var(--font-cairo)]">
                  R$ 0,15
                </div>
                <p className="text-gray-700 font-[family-name:var(--font-amiri)] font-normal">
                  Por palavra (a partir de)
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#4F6A8B] to-[#3d5570] p-8 rounded-2xl text-white text-center shadow-xl hover:scale-105 transition-all duration-300 group">
                <FileText className="h-12 w-12 mx-auto mb-4 text-[#BFCC2E] group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold mb-2 font-[family-name:var(--font-cairo)]">
                  50+
                </div>
                <p className="text-gray-300 font-[family-name:var(--font-amiri)] font-normal">
                  Idiomas disponíveis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#4F6A8B] to-[#2b3a4c] text-white relative overflow-hidden">
        {/* Padrão árabe animado */}
        <div className="absolute inset-0 opacity-10 animate-pulse-slow">
          <div
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L55 35 L80 40 L55 45 L50 70 L45 45 L20 40 L45 35 Z' fill='%23BFCC2E'/%3E%3C/svg%3E")`,
              backgroundSize: '150px 150px',
            }}
            className="absolute inset-0"
          ></div>
        </div>

        {/* Estrelas decorativas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-slow opacity-10"
              style={{
                left: `${20 + i * 25}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${18 + i * 3}s`,
              }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40">
                <path
                  d="M20 5 L22 15 L30 17 L22 19 L20 27 L18 19 L10 17 L18 15 Z"
                  fill="#BFCC2E"
                  opacity="0.3"
                />
              </svg>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-amiri)]">
              Pronto para Traduzir seu Documento?
            </h2>
            <p className="text-xl text-gray-300 font-[family-name:var(--font-amiri)] font-normal">
              Receba um orçamento gratuito em até 2 horas úteis
            </p>
            <Link href="/orcamento">
              <Button
                size="lg"
                className="bg-[#BFCC2E] hover:bg-[#a8b41f] text-black font-bold text-lg px-10 py-7 relative overflow-hidden group font-[family-name:var(--font-cairo)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Solicitar Orçamento Gratuito
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
