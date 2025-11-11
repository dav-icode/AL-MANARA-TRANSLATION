import { ArrowRight, FileText, Globe, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const ServiceEmphasis = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#4F6A8B] mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções profissionais de tradução para cada necessidade do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card Tradução Simples */}
          <Link href="/servicos/traducao-simples" className="group">
            <div className="bg-linear-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#4F6A8B] hover:shadow-xl transition-all duration-300 h-full">
              <div className="bg-[#4F6A8B] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#4F6A8B] mb-3">Tradução Simples</h3>
              <p className="text-gray-600 mb-4">
                Para documentos e textos gerais que precisam de tradução precisa e cultural.
              </p>
              <span className="text-[#BFCC2E] font-semibold group-hover:gap-2 flex items-center transition-all">
                Saiba mais{' '}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

          {/* Card Tradução Técnica */}
          <Link href="/servicos/traducao-tecnica" className="group">
            <div className="bg-linear-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#4F6A8B] hover:shadow-xl transition-all duration-300 h-full">
              <div className="bg-[#4F6A8B] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#4F6A8B] mb-3">Tradução Técnica</h3>
              <p className="text-gray-600 mb-4">
                Conteúdo especializado com terminologia precisa para seu setor.
              </p>
              <span className="text-[#BFCC2E] font-semibold group-hover:gap-2 flex items-center transition-all">
                Saiba mais{' '}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

          {/* Card Tradução Juramentada */}
          <Link href="/servicos/traducao-juramentada" className="group">
            <div className="bg-linear-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#4F6A8B] hover:shadow-xl transition-all duration-300 h-full">
              <div className="bg-[#4F6A8B] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#4F6A8B] mb-3">Tradução Juramentada</h3>
              <p className="text-gray-600 mb-4">
                Documentos oficiais com certificação reconhecida legalmente.
              </p>
              <span className="text-[#BFCC2E] font-semibold group-hover:gap-2 flex items-center transition-all">
                Saiba mais{' '}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

          {/* Card Idiomas Raros */}
          <Link href="/servicos/idiomas-raros" className="group">
            <div className="bg-linear-to-br from-[#BFCC2E]/10 to-white border-2 border-[#BFCC2E] rounded-2xl p-8 hover:border-[#4F6A8B] hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-[#BFCC2E] text-black px-3 py-1 rounded-full text-xs font-bold">
                  DESTAQUE
                </span>
              </div>
              <div className="bg-[#BFCC2E] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-[#4F6A8B] mb-3">Idiomas Raros</h3>
              <p className="text-gray-600 mb-4">
                Islandês, georgiano, taitiano e outros idiomas difíceis de encontrar.
              </p>
              <span className="text-[#4F6A8B] font-semibold group-hover:gap-2 flex items-center transition-all">
                Saiba mais{' '}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceEmphasis;
