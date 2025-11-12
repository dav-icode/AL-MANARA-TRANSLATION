import { Award, CheckCircle, Globe, MessageSquare, Shield, Users } from 'lucide-react';

export const Differential = () => {
  return (
    <section className="py-20 bg-linear-to-br from-[#4F6A8B]/5 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#4F6A8B] mb-4">
            Por que escolher a Al Manara?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Diferenciais que fazem toda a diferença no resultado final
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
            <div className="bg-[#BFCC2E]/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Users className="h-7 w-7 text-[#4F6A8B]" />
            </div>
            <h3 className="text-xl font-bold text-[#4F6A8B] mb-3">Tradutores Nativos</h3>
            <p className="text-gray-600">
              Profissionais vivendo em seus países de origem, garantindo adaptação cultural
              perfeita.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
            <div className="bg-[#BFCC2E]/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <CheckCircle className="h-7 w-7 text-[#4F6A8B]" />
            </div>
            <h3 className="text-xl font-bold text-[#4F6A8B] mb-3">100% Humana</h3>
            <p className="text-gray-600">
              Sem automação. Cada palavra é traduzida por um profissional especializado.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
            <div className="bg-[#BFCC2E]/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Globe className="h-7 w-7 text-[#4F6A8B]" />
            </div>
            <h3 className="text-xl font-bold text-[#4F6A8B] mb-3">Idiomas Raros</h3>
            <p className="text-gray-600">
              Atendemos idiomas difíceis de encontrar: islandês, georgiano, estoniano, taitiano.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
            <div className="bg-[#BFCC2E]/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Award className="h-7 w-7 text-[#4F6A8B]" />
            </div>
            <h3 className="text-xl font-bold text-[#4F6A8B] mb-3">Especialização Árabe</h3>
            <p className="text-gray-600">
              Expertise única em cultura e idioma árabe, com tradutores especializados.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
            <div className="bg-[#BFCC2E]/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <MessageSquare className="h-7 w-7 text-[#4F6A8B]" />
            </div>
            <h3 className="text-xl font-bold text-[#4F6A8B] mb-3">Pagamento Flexível</h3>
            <p className="text-gray-600">
              Você só paga quando receber o pagamento do seu cliente. Condições especiais para
              empresas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
            <div className="bg-[#BFCC2E]/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Shield className="h-7 w-7 text-[#4F6A8B]" />
            </div>
            <h3 className="text-xl font-bold text-[#4F6A8B] mb-3">Certificação Oficial</h3>
            <p className="text-gray-600">
              Tradução juramentada com validade legal em todo território nacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differential;
