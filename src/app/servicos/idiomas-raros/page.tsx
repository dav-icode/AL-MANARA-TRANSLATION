import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Languages,
  MapPin,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function IdiomasRarosPage() {
  const rareLanguages = [
    { name: 'Islandês', region: 'Islândia', speakers: '350 mil' },
    { name: 'Georgiano', region: 'Geórgia', speakers: '4 milhões' },
    { name: 'Letão', region: 'Letônia', speakers: '1.5 milhão' },
    { name: 'Estoniano', region: 'Estônia', speakers: '1.1 milhão' },
    { name: 'Maltês', region: 'Malta', speakers: '520 mil' },
    { name: 'Islandês', region: 'Islândia', speakers: '350 mil' },
    { name: 'Faroês', region: 'Ilhas Faroé', speakers: '66 mil' },
    { name: 'Galês', region: 'País de Gales', speakers: '750 mil' },
  ];

  const whyRare = [
    {
      icon: Users,
      title: 'Tradutores Nativos',
      description: 'Profissionais vivendo em seus países de origem garantem autenticidade',
    },
    {
      icon: Star,
      title: 'Especialização Única',
      description: 'Somos uma das poucas empresas no Brasil a oferecer idiomas raros',
    },
    {
      icon: Globe,
      title: 'Rede Global',
      description: 'Parceria com tradutores em mais de 50 países',
    },
    {
      icon: Sparkles,
      title: 'Precisão Cultural',
      description: 'Conhecimento profundo de expressões, dialetos e contextos culturais',
    },
  ];

  const useCases = [
    {
      title: 'Imigração',
      description: 'Documentação para processos de visto e cidadania em países nórdicos e bálticos',
    },
    {
      title: 'Negócios Internacionais',
      description: 'Contratos e comunicações com empresas em mercados emergentes',
    },
    {
      title: 'Pesquisa Acadêmica',
      description: 'Tradução de teses, artigos e materiais de pesquisa histórica',
    },
    {
      title: 'Herança Cultural',
      description: 'Documentos familiares, cartas antigas e registros históricos',
    },
  ];

  return (
    <div className="min-h-screen bg-white -mt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#BFCC2E] via-[#a8b41f] to-[#8b9a1a] text-black overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F6A8B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-black text-[#BFCC2E] px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  SERVIÇO EXCLUSIVO
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight">
                Idiomas Raros, Nossa{' '}
                <span className="text-white drop-shadow-lg">Especialidade</span>
              </h1>
              <p className="text-xl text-gray-800 leading-relaxed">
                Acesso a tradutores nativos de idiomas de difícil acesso. Islandês, Georgiano, Letão
                e dezenas de outros idiomas únicos.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-black/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Star className="h-5 w-5 text-black" />
                  <span className="text-sm font-semibold">Exclusividade</span>
                </div>
                <div className="flex items-center gap-2 bg-black/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Users className="h-5 w-5 text-black" />
                  <span className="text-sm font-semibold">Nativos Certificados</span>
                </div>
                <div className="flex items-center gap-2 bg-black/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Globe className="h-5 w-5 text-black" />
                  <span className="text-sm font-semibold">50+ Idiomas</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/orcamento">
                  <Button
                    size="lg"
                    className="bg-black hover:bg-gray-900 text-[#BFCC2E] font-bold px-8 py-6"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contato">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-black text-black hover:bg-black hover:text-[#BFCC2E]"
                  >
                    Consultar Disponibilidade
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-black/20">
                <Image
                  src="/IMG-20251111-WA0065.jpg"
                  alt="Idiomas Raros"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-black rounded-2xl -z-10 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-white/50 rounded-full -z-10"></div>
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

      {/* Idiomas Disponíveis */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#4F6A8B] mb-4">
              Idiomas Raros que Oferecemos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Acesso exclusivo a tradutores nativos dos idiomas mais difíceis de encontrar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {rareLanguages.map((lang, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#4F6A8B]/5 to-[#BFCC2E]/5 p-6 rounded-2xl border-2 border-[#BFCC2E]/30 hover:border-[#BFCC2E] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <Languages className="h-10 w-10 text-[#4F6A8B] group-hover:text-[#BFCC2E] transition-colors" />
                  <Star className="h-5 w-5 text-[#BFCC2E]" />
                </div>
                <h3 className="text-xl font-bold text-[#4F6A8B] mb-2">{lang.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <MapPin className="h-4 w-4 text-[#BFCC2E]" />
                  {lang.region}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="h-4 w-4 text-[#BFCC2E]" />
                  {lang.speakers} falantes
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              <strong className="text-[#4F6A8B]">E muitos outros idiomas!</strong> Entre em contato
              para consultar disponibilidade de idiomas não listados.
            </p>
            <Link href="/contato">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#4F6A8B] text-[#4F6A8B] hover:bg-[#4F6A8B] hover:text-white"
              >
                Consultar Outro Idioma
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Por Que Somos Únicos */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#4F6A8B] mb-4">
              Por Que Somos Especialistas?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nossa rede global de tradutores nativos nos torna únicos no mercado brasileiro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyRare.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all group"
                >
                  <div className="bg-gradient-to-br from-[#BFCC2E] to-[#a8b41f] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all">
                    <Icon className="h-10 w-10 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-[#4F6A8B] mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#4F6A8B] mb-4">
              Quando Você Precisa de Idiomas Raros?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#4F6A8B]/5 to-[#BFCC2E]/5 p-8 rounded-2xl border-l-4 border-[#BFCC2E] hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-bold text-[#4F6A8B] mb-3 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-[#BFCC2E]" />
                  {useCase.title}
                </h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimento */}
      <section className="py-20 bg-gradient-to-br from-[#4F6A8B] to-[#2b3a4c] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-[#BFCC2E] fill-[#BFCC2E]" />
              ))}
            </div>
            <blockquote className="text-2xl font-medium mb-6 italic">
              <p>
                "Precisava traduzir documentos do Islandês para Português e a Al Manara foi a única
                empresa que conseguiu me atender com qualidade e rapidez. Tradutor nativo, excelente
                comunicação. Recomendo!"
              </p>
            </blockquote>
            <p className="text-[#BFCC2E] font-semibold">— Maria Silva, Cliente Satisfeita</p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-br from-[#BFCC2E]/10 to-[#4F6A8B]/10 p-12 rounded-3xl border-2 border-[#BFCC2E]">
            <Sparkles className="h-16 w-16 text-[#BFCC2E] mx-auto" />
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#4F6A8B]">
              Precisa de um Idioma Raro?
            </h2>
            <p className="text-xl text-gray-600">
              Consulte disponibilidade e receba um orçamento personalizado em até 2 horas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/orcamento">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#BFCC2E] to-[#a8b41f] hover:from-[#a8b41f] hover:to-[#BFCC2E] text-black font-bold text-lg px-10 py-7"
                >
                  Solicitar Orçamento Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contato">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#4F6A8B] text-[#4F6A8B] hover:bg-[#4F6A8B] hover:text-white font-semibold text-lg px-10 py-7"
                >
                  Consultar Disponibilidade
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
