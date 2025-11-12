import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  FileText,
  Globe,
  Scale,
  Star,
  Users,
  Wrench,
} from 'lucide-react';
import Link from 'next/link';

export default function ServicosPage() {
  const services = [
    {
      icon: FileText,
      title: 'Tradução Simples',
      description: 'Documentos pessoais, comerciais e textos gerais',
      features: ['Contratos', 'Cartas', 'E-mails', 'Textos corporativos'],
      href: '/servicos/traducao-simples',
      color: 'from-[#4F6A8B] to-[#3d5570]',
      borderColor: 'border-[#4F6A8B]',
    },
    {
      icon: Wrench,
      title: 'Tradução Técnica',
      description: 'Manuais, especificações e documentação especializada',
      features: ['Manuais técnicos', 'Especificações', 'Guias', 'Documentação'],
      href: '/servicos/traducao-tecnica',
      color: 'from-[#4F6A8B] to-[#3d5570]',
      borderColor: 'border-[#4F6A8B]',
    },
    {
      icon: Scale,
      title: 'Tradução Juramentada',
      description: 'Documentos oficiais com validade legal',
      features: ['Certidões', 'Diplomas', 'Contratos', 'Procurações'],
      href: '/servicos/traducao-juramentada',
      color: 'from-[#4F6A8B] to-[#3d5570]',
      borderColor: 'border-[#4F6A8B]',
    },
    {
      icon: Globe,
      title: 'Idiomas Raros',
      description: 'Especialização em idiomas de difícil acesso',
      features: ['Islandês', 'Georgiano', 'Árabe', '50+ idiomas'],
      href: '/servicos/idiomas-raros',
      color: 'from-[#BFCC2E] to-[#a8b41f]',
      borderColor: 'border-[#BFCC2E]',
      highlight: true,
    },
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Tradutores Nativos',
      description: 'Profissionais vivendo em seus países de origem garantem autenticidade cultural',
    },
    {
      icon: CheckCircle,
      title: '100% Humana',
      description: 'Sem automação ou IA. Cada palavra é cuidadosamente traduzida por humanos',
    },
    {
      icon: Clock,
      title: 'Prazos Garantidos',
      description: 'Comprometimento total com os prazos acordados, sem surpresas',
    },
    {
      icon: Star,
      title: 'Qualidade Certificada',
      description: 'Revisão rigorosa e controle de qualidade em todas as entregas',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4F6A8B] via-[#3d5570] to-[#2b3a4c] text-white overflow-hidden py-20 lg:py-32">
        {/* Padrão geométrico árabe */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23BFCC2E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <span className="bg-[#BFCC2E] text-black px-4 py-2 rounded-full text-sm font-semibold">
                🌍 Nossos Serviços
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight">
              Soluções Linguísticas para Todas as{' '}
              <span className="text-[#BFCC2E]">Necessidades</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Da tradução simples à juramentada, oferecemos excelência em todos os idiomas,
              incluindo os mais raros
            </p>
          </div>
        </div>

        {/* Onda decorativa */}
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

      {/* Grid de Serviços */}
      <section className="py-20 -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  href={service.href}
                  className={`group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-t-4 ${
                    service.borderColor
                  } ${service.highlight ? 'ring-4 ring-[#BFCC2E]/20' : ''}`}
                >
                  {service.highlight && (
                    <div className="inline-block mb-4">
                      <span className="bg-gradient-to-r from-[#BFCC2E] to-[#a8b41f] text-black px-3 py-1 rounded-full text-xs font-bold">
                        ✨ DESTAQUE
                      </span>
                    </div>
                  )}

                  <div
                    className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <Icon
                      className={`h-8 w-8 ${service.highlight ? 'text-black' : 'text-white'}`}
                    />
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-[#4F6A8B] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="h-5 w-5 text-[#BFCC2E] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-[#4F6A8B] font-semibold group-hover:text-[#BFCC2E] transition-colors">
                    Saiba mais
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Por que escolher a Al Manara */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Ornamentos */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#BFCC2E]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#4F6A8B]/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#4F6A8B] mb-4">
              Por Que Escolher a Al Manara?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diferenciais que fazem da Al Manara a escolha certa para suas traduções
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-br from-[#4F6A8B] to-[#3d5570] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#4F6A8B] mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#4F6A8B] to-[#2b3a4c] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23BFCC2E' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold">
              Pronto para Começar seu Projeto?
            </h2>
            <p className="text-xl text-gray-300">
              Solicite um orçamento gratuito e sem compromisso. Respondemos em até 2 horas!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/orcamento">
                <Button
                  size="lg"
                  className="bg-[#BFCC2E] hover:bg-[#a8b41f] text-black font-bold text-lg px-10 py-7 shadow-2xl hover:scale-105 transition-all"
                >
                  Solicitar Orçamento Gratuito
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contato">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#4F6A8B] font-semibold text-lg px-10 py-7 transition-all"
                >
                  Falar com Especialista
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
