import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Globe, Heart, Sparkles, Target, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SobrePage() {
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
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="bg-[#BFCC2E] text-black px-4 py-2 rounded-full text-sm font-semibold animate-slide-up">
                ✨ Nossa História
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight animate-slide-up">
              Conectando Culturas Através das <span className="text-[#BFCC2E]">Palavras</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed animate-slide-up">
              Desde 2017, a Al Manara é referência em traduções profissionais com foco em precisão
              cultural e excelência linguística.
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

      {/* História */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 animate-slide-right">
              <div className="inline-block">
                <span className="text-[#4F6A8B] font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-[#BFCC2E]"></span>
                  Nossa Jornada
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#4F6A8B]">
                Uma História de Conexão e Cultura
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Em 2017, <strong className="text-[#4F6A8B]">Amine Ouahabi</strong>, fundador da Al
                  Manara Serviços Linguísticos, chegou ao Brasil vindo do Marrocos com a intenção de
                  explorar a cultura brasileira e suas diferenças em relação à cultura árabe.
                </p>
                <p>
                  Logo depois, decidiu estabelecer residência no país. Em pouco tempo, iniciou sua
                  atuação no mercado de tradução e localização de videogames, conquistando uma
                  sólida reputação tanto no mercado brasileiro como internacional.
                </p>
                <p>
                  A empresa também está focada em inovação e tecnologia, sempre mantendo um{' '}
                  <strong className="text-[#BFCC2E]">toque humano</strong>. Acreditamos que a
                  excelência no atendimento e a precisão dos serviços são fundamentais para
                  assegurar a compreensão e interpretação corretas entre as nações.
                </p>
              </div>
            </div>

            <div className="relative animate-slide-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/IMG-20251111-WA0060.jpg"
                  alt="Amine Ouahabi - Fundador Al Manara"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4F6A8B]/50 to-transparent"></div>
              </div>
              {/* Detalhe decorativo */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#BFCC2E] to-[#a8b41f] rounded-2xl -z-10 animate-float"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#4F6A8B]/20 to-[#BFCC2E]/20 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Ornamento de fundo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#BFCC2E]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#4F6A8B]/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#4F6A8B] mb-4">
              Nossos Pilares
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Valores que guiam cada tradução que realizamos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Missão */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-[#4F6A8B]">
              <div className="bg-gradient-to-br from-[#4F6A8B] to-[#3d5570] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#4F6A8B] mb-4 font-heading">Nossa Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Promover a aproximação e valorização da diversidade cultural, principalmente árabe,
                e corrigir as ideias de prestabilidades existentes sobre outras culturas.
              </p>
            </div>

            {/* Visão */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-[#BFCC2E]">
              <div className="bg-gradient-to-br from-[#BFCC2E] to-[#a8b41f] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-[#4F6A8B] mb-4 font-heading">Nossa Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser principal referência em soluções linguísticas, oferecendo serviços de alta
                qualidade com profissionais nativos, promovendo a comunicação eficaz entre o Brasil
                e outras culturas.
              </p>
            </div>

            {/* Valores */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-[#4F6A8B]">
              <div className="bg-gradient-to-br from-[#4F6A8B] to-[#3d5570] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#4F6A8B] mb-4 font-heading">
                Nossos Valores
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#BFCC2E] rounded-full"></span>
                  <strong>Qualidade:</strong>
                  Excelência em cada entrega
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#BFCC2E] rounded-full"></span>
                  <strong>Inovação:</strong> Tecnologia com toque humano
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#BFCC2E] rounded-full"></span>
                  <strong>Responsabilidade:</strong> Compromisso e prazos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#4F6A8B] mb-4">
              O Que Nos Torna Únicos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tradutores nativos garantem autenticidade cultural e precisão linguística
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-[#4F6A8B]/5 hover:to-[#BFCC2E]/5 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[#BFCC2E] to-[#a8b41f] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Users className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-xl font-bold text-[#4F6A8B] mb-2">Tradutores Nativos</h3>
              <p className="text-gray-600">Vivendo em seus países de origem</p>
            </div>

            <div className="text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-[#4F6A8B]/5 hover:to-[#BFCC2E]/5 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[#4F6A8B] to-[#3d5570] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4F6A8B] mb-2">100% Humana</h3>
              <p className="text-gray-600">Sem automação ou IA</p>
            </div>

            <div className="text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-[#4F6A8B]/5 hover:to-[#BFCC2E]/5 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[#BFCC2E] to-[#a8b41f] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Globe className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-xl font-bold text-[#4F6A8B] mb-2">50+ Idiomas</h3>
              <p className="text-gray-600">Incluindo idiomas raros</p>
            </div>

            <div className="text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-[#4F6A8B]/5 hover:to-[#BFCC2E]/5 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[#4F6A8B] to-[#3d5570] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4F6A8B] mb-2">Cultura Árabe</h3>
              <p className="text-gray-600">Especialização única</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
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
              Pronto para quebrar barreiras linguísticas?
            </h2>
            <p className="text-xl text-gray-300">
              Junte-se a centenas de empresas que confiam na Al Manara para conectar culturas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/orcamento">
                <Button
                  size="lg"
                  className="bg-[#BFCC2E] hover:bg-[#a8b41f] text-black font-bold text-lg px-10 py-7 shadow-2xl hover:scale-105 transition-all"
                >
                  Solicitar Orçamento
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
