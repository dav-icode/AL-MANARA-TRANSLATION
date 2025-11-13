'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Clock, Globe, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function ContatoPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio (você vai implementar a API depois)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white -mt-16">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-br from-[#4F6A8B] via-[#3d5570] to-[#2b3a4c] text-white overflow-hidden py-20 lg:py-32"
      >
        {/* Padrão geométrico árabe com movimento */}
        <div
          className="absolute inset-0 opacity-5 transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          }}
        >
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
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${18 + i * 2}s`,
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
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <span className="bg-[#BFCC2E] text-black px-4 py-2 rounded-full text-sm font-semibold font-[family-name:var(--font-cairo)]">
                💬 Fale Conosco
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight font-[family-name:var(--font-amiri)]">
              Estamos Aqui para <span className="text-[#BFCC2E]">Ajudar</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-[family-name:var(--font-amiri)] font-normal">
              Entre em contato e descubra como podemos transformar suas necessidades linguísticas em
              soluções eficazes
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

      {/* Contato Rápido - Cards */}
      <section className="py-16 -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* WhatsApp */}
            <Link
              href="https://wa.me/5511960229051?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#25D366] relative overflow-hidden"
            >
              {/* Brilho sutil */}
              <div className="absolute inset-0 bg-linear-to-br from-[#25D366]/0 to-[#25D366]/0 group-hover:from-[#25D366]/5 group-hover:to-[#128C7E]/5 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#4F6A8B] mb-2 font-[family-name:var(--font-amiri)]">
                  WhatsApp
                </h3>
                <p className="text-gray-600 mb-3 font-[family-name:var(--font-amiri)] font-normal">
                  Resposta imediata
                </p>
                <p className="text-[#4F6A8B] font-semibold group-hover:text-[#25D366] transition-colors font-[family-name:var(--font-cairo)]">
                  +55 (11) 96022-9051
                </p>
              </div>
            </Link>

            {/* Email */}
            <Link
              href="mailto:contato@almanaratranslation.com.br"
              className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#BFCC2E] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#BFCC2E]/0 to-[#BFCC2E]/0 group-hover:from-[#BFCC2E]/5 group-hover:to-[#a8b41f]/5 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-[#BFCC2E] to-[#a8b41f] w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Mail className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-[#4F6A8B] mb-2 font-[family-name:var(--font-amiri)]">
                  Email
                </h3>
                <p className="text-gray-600 mb-3 font-[family-name:var(--font-amiri)] font-normal">
                  Resposta em 24h
                </p>
                <p className="text-[#4F6A8B] font-semibold group-hover:text-[#BFCC2E] transition-colors break-all font-[family-name:var(--font-cairo)]">
                  contato@almanaratranslation.com.br
                </p>
              </div>
            </Link>

            {/* Telefone */}
            <Link
              href="tel:+5511960229051"
              className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#4F6A8B] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#4F6A8B]/0 to-[#4F6A8B]/0 group-hover:from-[#4F6A8B]/5 group-hover:to-[#3d5570]/5 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-[#4F6A8B] to-[#3d5570] w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#4F6A8B] mb-2 font-[family-name:var(--font-amiri)]">
                  Telefone
                </h3>
                <p className="text-gray-600 mb-3 font-[family-name:var(--font-amiri)] font-normal">
                  Atendimento comercial
                </p>
                <p className="text-[#4F6A8B] font-semibold group-hover:text-[#BFCC2E] transition-colors font-[family-name:var(--font-cairo)]">
                  +55 (11) 96022-9051
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Formulário + Info */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Padrão árabe sutil no fundo */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10 L45 30 L65 35 L45 40 L40 60 L35 40 L15 35 L35 30 Z' fill='%234F6A8B'/%3E%3C/svg%3E")`,
              backgroundSize: '120px 120px',
            }}
            className="absolute inset-0"
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Formulário */}
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl relative overflow-hidden">
              {/* Ornamento decorativo */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <svg viewBox="0 0 100 100">
                  <path
                    d="M50 10 L55 35 L80 40 L55 45 L50 70 L45 45 L20 40 L45 35 Z"
                    fill="#BFCC2E"
                  />
                </svg>
              </div>

              <div className="mb-8 relative z-10">
                <h2 className="text-3xl font-bold text-[#4F6A8B] mb-2 font-[family-name:var(--font-amiri)]">
                  Envie sua Mensagem
                </h2>
                <p className="text-gray-600 font-[family-name:var(--font-amiri)] font-normal">
                  Preencha o formulário e retornaremos o mais breve possível
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <Label
                    htmlFor="nome"
                    className="text-[#4F6A8B] font-semibold font-[family-name:var(--font-cairo)]"
                  >
                    Nome Completo *
                  </Label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="mt-2 border-2 border-gray-200 focus:border-[#BFCC2E] transition-colors font-[family-name:var(--font-amiri)]"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-[#4F6A8B] font-semibold font-[family-name:var(--font-cairo)]"
                    >
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="mt-2 border-2 border-gray-200 focus:border-[#BFCC2E] transition-colors font-[family-name:var(--font-amiri)]"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="telefone"
                      className="text-[#4F6A8B] font-semibold font-[family-name:var(--font-cairo)]"
                    >
                      Telefone
                    </Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="mt-2 border-2 border-gray-200 focus:border-[#BFCC2E] transition-colors font-[family-name:var(--font-amiri)]"
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="assunto"
                    className="text-[#4F6A8B] font-semibold font-[family-name:var(--font-cairo)]"
                  >
                    Assunto *
                  </Label>
                  <Input
                    id="assunto"
                    name="assunto"
                    type="text"
                    required
                    value={formData.assunto}
                    onChange={handleChange}
                    placeholder="Como podemos ajudar?"
                    className="mt-2 border-2 border-gray-200 focus:border-[#BFCC2E] transition-colors font-[family-name:var(--font-amiri)]"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="mensagem"
                    className="text-[#4F6A8B] font-semibold font-[family-name:var(--font-cairo)]"
                  >
                    Mensagem *
                  </Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Descreva sua necessidade..."
                    rows={6}
                    className="mt-2 border-2 border-gray-200 focus:border-[#BFCC2E] transition-colors resize-none font-[family-name:var(--font-amiri)]"
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border-2 border-green-500 text-green-700 px-4 py-3 rounded-xl font-[family-name:var(--font-cairo)]">
                    ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#BFCC2E] to-[#a8b41f] hover:from-[#a8b41f] hover:to-[#BFCC2E] text-black font-bold text-lg py-6 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 relative overflow-hidden group font-[family-name:var(--font-cairo)]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </form>
            </div>

            {/* Informações Adicionais */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#4F6A8B] mb-6 font-[family-name:var(--font-amiri)]">
                  Informações de Contato
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="bg-gradient-to-br from-[#4F6A8B] to-[#3d5570] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#4F6A8B] mb-1 font-[family-name:var(--font-amiri)]">
                        Endereço
                      </h4>
                      <p className="text-gray-600 font-[family-name:var(--font-amiri)] font-normal">
                        Barueri - São Paulo, Brasil
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="bg-gradient-to-br from-[#BFCC2E] to-[#a8b41f] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Clock className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#4F6A8B] mb-1 font-[family-name:var(--font-amiri)]">
                        Horário de Atendimento
                      </h4>
                      <p className="text-gray-600 font-[family-name:var(--font-amiri)] font-normal">
                        Segunda a Sexta: 9h - 18h
                      </p>
                      <p className="text-gray-600 font-[family-name:var(--font-amiri)] font-normal">
                        Sábado: 9h - 13h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="bg-gradient-to-br from-[#4F6A8B] to-[#3d5570] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#4F6A8B] mb-1 font-[family-name:var(--font-amiri)]">
                        Idiomas de Atendimento
                      </h4>
                      <p className="text-gray-600 font-[family-name:var(--font-amiri)] font-normal">
                        Português, Árabe, Inglês, Francês e Espanhol
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preferência de Contato */}
              <div className="bg-gradient-to-br from-[#4F6A8B]/5 to-[#BFCC2E]/5 p-8 rounded-2xl border-2 border-[#BFCC2E]/20 relative overflow-hidden">
                {/* Mini estrela decorativa */}
                <div className="absolute top-2 right-2 w-8 h-8 opacity-10">
                  <svg viewBox="0 0 30 30">
                    <path
                      d="M15 3 L17 12 L25 14 L17 16 L15 24 L13 16 L5 14 L13 12 Z"
                      fill="#BFCC2E"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#4F6A8B] mb-4 font-[family-name:var(--font-amiri)]">
                  💡 Dica Rápida
                </h3>
                <p className="text-gray-600 mb-4 font-[family-name:var(--font-amiri)] font-normal">
                  Para atendimento mais rápido, entre em contato via WhatsApp! Respondemos em
                  minutos durante o horário comercial.
                </p>
                <Link href="https://wa.me/5511960229051" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold relative overflow-hidden group font-[family-name:var(--font-cairo)]">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      Abrir WhatsApp
                    </span>
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </Button>
                </Link>
              </div>

              {/* FAQ Rápido */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-[#4F6A8B] mb-4 font-[family-name:var(--font-amiri)]">
                  Perguntas Frequentes
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#4F6A8B] mb-1 font-[family-name:var(--font-amiri)]">
                      Quanto tempo leva para receber um orçamento?
                    </h4>
                    <p className="text-sm text-gray-600 font-[family-name:var(--font-amiri)] font-normal">
                      Geralmente respondemos em até 2 horas úteis.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#4F6A8B] mb-1 font-[family-name:var(--font-amiri)]">
                      Atendem urgências?
                    </h4>
                    <p className="text-sm text-gray-600 font-[family-name:var(--font-amiri)] font-normal">
                      Sim! Entre em contato via WhatsApp para demandas urgentes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#4F6A8B] mb-1 font-[family-name:var(--font-amiri)]">
                      Posso agendar uma reunião?
                    </h4>
                    <p className="text-sm text-gray-600 font-[family-name:var(--font-amiri)] font-normal">
                      Claro! Mencione no formulário e agendaremos um horário.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="h-96 bg-gray-200 relative overflow-hidden">
        {/* Padrão árabe no mapa */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L55 35 L80 40 L55 45 L50 70 L45 45 L20 40 L45 35 Z' fill='%234F6A8B'/%3E%3C/svg%3E")`,
              backgroundSize: '150px 150px',
            }}
            className="absolute inset-0"
          ></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#4F6A8B]/90 to-[#2b3a4c]/90">
          <div className="text-center text-white">
            <MapPin className="h-16 w-16 mx-auto mb-4 text-[#BFCC2E] animate-pulse" />
            <h3 className="text-2xl font-bold mb-2 font-[family-name:var(--font-amiri)]">
              Barueri - São Paulo
            </h3>
            <p className="text-gray-300 font-[family-name:var(--font-amiri)] font-normal">
              Atendimento presencial mediante agendamento
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
