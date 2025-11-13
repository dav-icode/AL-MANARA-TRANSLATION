'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CheckCircle,
  FileText,
  Globe,
  Loader2,
  Scale,
  Send,
  Upload,
  Wrench,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Schema de validação com Zod
const quoteSchema = z.object({
  nome: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  telefone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  empresa: z.string().optional(),
  tipoServico: z
    .string()
    .refine(val => ['simples', 'tecnica', 'juramentada', 'idiomas-raros'].includes(val), {
      message: 'Selecione um tipo de serviço válido',
    }),
  idiomaOrigem: z.string().min(2, 'Selecione o idioma de origem'),
  idiomaDestino: z.string().min(2, 'Selecione o idioma de destino'),
  prazo: z.string().refine(val => ['urgente', 'normal', 'flexivel'].includes(val), {
    message: 'Selecione um prazo válido',
  }),
  mensagem: z.string().min(10, 'Descreva sua necessidade (mínimo 10 caracteres)'),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export default function OrcamentoPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const tipoServico = watch('tipoServico');

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

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      uploadedFiles.forEach(file => {
        formData.append('files', file);
      });

      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar orçamento');
      }

      setSubmitStatus('success');
      reset();
      setUploadedFiles([]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Erro:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...files]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const services = [
    { value: 'simples', label: 'Tradução Simples', icon: FileText },
    { value: 'tecnica', label: 'Tradução Técnica', icon: Wrench },
    { value: 'juramentada', label: 'Tradução Juramentada', icon: Scale },
    { value: 'idiomas-raros', label: 'Idiomas Raros', icon: Globe },
  ];

  const languages = [
    'Português',
    'Inglês',
    'Espanhol',
    'Francês',
    'Alemão',
    'Italiano',
    'Árabe',
    'Chinês',
    'Japonês',
    'Russo',
    'Islandês',
    'Georgiano',
    'Letão',
    'Outro',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white -mt-16 relative overflow-hidden">
      {/* Padrão árabe no fundo geral */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <div
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L55 35 L80 40 L55 45 L50 70 L45 45 L20 40 L45 35 Z' fill='%234F6A8B'/%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px',
          }}
          className="absolute inset-0"
        ></div>
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-br from-[#4F6A8B] via-[#3d5570] to-[#2b3a4c] text-white py-20"
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
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-slow opacity-10"
              style={{
                left: `${15 + i * 18}%`,
                top: `${25 + (i % 2) * 30}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${16 + i * 2}s`,
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
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <span className="bg-[#BFCC2E] text-black px-4 py-2 rounded-full text-sm font-semibold font-[family-name:var(--font-cairo)]">
                💬 Orçamento Gratuito
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-amiri)]">
              Solicite seu Orçamento em <span className="text-[#BFCC2E]">2 Minutos</span>
            </h1>
            <p className="text-xl text-gray-300 font-[family-name:var(--font-amiri)] font-normal">
              Resposta em até 2 horas úteis • Sem compromisso • Totalmente gratuito
            </p>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Mensagem de Sucesso */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-6 mb-8 flex items-start gap-4 animate-slide-down relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                  <div
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 5 L22 15 L30 17 L22 19 L20 27 L18 19 L10 17 L18 15 Z' fill='%2316a34a'/%3E%3C/svg%3E")`,
                      backgroundSize: '60px 60px',
                    }}
                    className="absolute inset-0"
                  ></div>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0 mt-1 relative z-10" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-green-800 mb-2 font-[family-name:var(--font-amiri)]">
                    Orçamento Enviado com Sucesso! 🎉
                  </h3>
                  <p className="text-green-700 font-[family-name:var(--font-amiri)] font-normal">
                    Recebemos sua solicitação e entraremos em contato em até 2 horas úteis.
                    Verifique seu email (incluindo spam) para nossa resposta.
                  </p>
                </div>
              </div>
            )}

            {/* Mensagem de Erro */}
            {submitStatus === 'error' && (
              <div className="bg-red-50 border-2 border-red-500 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-2 font-[family-name:var(--font-amiri)]">
                  Erro ao Enviar
                </h3>
                <p className="text-red-700 font-[family-name:var(--font-amiri)] font-normal">
                  Houve um problema ao enviar seu orçamento. Por favor, tente novamente ou entre em
                  contato via WhatsApp.
                </p>
              </div>
            )}

            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden">
              {/* Ornamento decorativo no canto */}
              <div className="absolute top-0 right-0 w-40 h-40 opacity-[0.03] pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M50 10 L55 35 L80 40 L55 45 L50 70 L45 45 L20 40 L45 35 Z"
                    fill="#BFCC2E"
                  />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="#4F6A8B" strokeWidth="2" />
                </svg>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                {/* Dados Pessoais */}
                <div>
                  <h2 className="text-2xl font-bold text-[#4F6A8B] mb-6 flex items-center gap-2 font-[family-name:var(--font-amiri)]">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#4F6A8B] to-[#3d5570] rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    Seus Dados
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="nome"
                        className="text-[#4F6A8B] font-semibold font-[family-name:var(--font-cairo)]"
                      >
                        Nome Completo *
                      </Label>
                      <Input
                        id="nome"
                        {...register('nome')}
                        placeholder="Seu nome"
                        className="mt-2 border-2 focus:border-[#BFCC2E] font-[family-name:var(--font-amiri)]"
                      />
                      {errors.nome && (
                        <p className="text-red-500 text-sm mt-1 font-[family-name:var(--font-cairo)]">
                          {errors.nome.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="text-[#4F6A8B] font-semibold font-[family-name:var(--font-cairo)]"
                      >
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        placeholder="seu@email.com"
                        className="mt-2 border-2 focus:border-[#BFCC2E] font-[family-name:var(--font-amiri)]"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1 font-[family-name:var(--font-cairo)]">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label
                        htmlFor="telefone"
                        className="text-[#4F6A8B] font-semibold font-[family-name:var(--font-cairo)]"
                      >
                        Telefone/WhatsApp *
                      </Label>
                      <Input
                        id="telefone"
                        {...register('telefone')}
                        placeholder="(11) 99999-9999"
                        className="mt-2 border-2 focus:border-[#BFCC2E] font-[family-name:var(--font-amiri)]"
                      />
                      {errors.telefone && (
                        <p className="text-red-500 text-sm mt-1 font-[family-name:var(--font-cairo)]">
                          {errors.telefone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label
                        htmlFor="empresa"
                        className="text-[#4F6A8B] font-semibold font-[family-name:var(--font-cairo)]"
                      >
                        Empresa (Opcional)
                      </Label>
                      <Input
                        id="empresa"
                        {...register('empresa')}
                        placeholder="Nome da empresa"
                        className="mt-2 border-2 focus:border-[#BFCC2E] font-[family-name:var(--font-amiri)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Tipo de Serviço */}
                <div>
                  <h2 className="text-2xl font-bold text-[#4F6A8B] mb-6 flex items-center gap-2 font-[family-name:var(--font-amiri)]">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#4F6A8B] to-[#3d5570] rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    Tipo de Serviço
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    {services.map(service => {
                      const Icon = service.icon;
                      return (
                        <button
                          key={service.value}
                          type="button"
                          onClick={() =>
                            setValue('tipoServico', service.value as QuoteFormData['tipoServico'])
                          }
                          className={`p-6 rounded-xl border-2 transition-all text-left relative overflow-hidden group ${
                            tipoServico === service.value
                              ? 'border-[#BFCC2E] bg-gradient-to-br from-[#BFCC2E]/10 to-[#4F6A8B]/5 shadow-lg'
                              : 'border-gray-200 hover:border-[#4F6A8B]/30'
                          }`}
                        >
                          {/* Brilho ao selecionar */}
                          {tipoServico === service.value && (
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#BFCC2E]/10 to-transparent animate-pulse"></div>
                          )}
                          <div className="flex items-center gap-4 relative z-10">
                            <div
                              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                tipoServico === service.value
                                  ? 'bg-gradient-to-br from-[#BFCC2E] to-[#a8b41f] scale-110 rotate-6'
                                  : 'bg-gray-100 group-hover:scale-105'
                              }`}
                            >
                              <Icon
                                className={`h-6 w-6 ${
                                  tipoServico === service.value ? 'text-black' : 'text-gray-600'
                                }`}
                              />
                            </div>
                            <span
                              className={`font-semibold font-[family-name:var(--font-amiri)] ${
                                tipoServico === service.value ? 'text-[#4F6A8B]' : 'text-gray-700'
                              }`}
                            >
                              {service.label}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {errors.tipoServico && (
                    <p className="text-red-500 text-sm mt-2 font-[family-name:var(--font-cairo)]">
                      {errors.tipoServico.message}
                    </p>
                  )}
                </div>

                {/* Idiomas */}
                <div>
                  <h2 className="text-2xl font-bold text-[#4F6A8B] mb-6 flex items-center gap-2 font-[family-name:var(--font-amiri)]">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#4F6A8B] to-[#3d5570] rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    Idiomas
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="idiomaOrigem"
                        className="text-[#4F6A8B] font-semibold font-[family-name:var(--font-cairo)]"
                      >
                        Idioma de Origem *
                      </Label>
                      <Select onValueChange={value => setValue('idiomaOrigem', value)}>
                        <SelectTrigger className="mt-2 border-2 focus:border-[#BFCC2E] font-[family-name:var(--font-amiri)]">
                          <SelectValue placeholder="Selecione o idioma" />
                        </SelectTrigger>
                        <SelectContent>
                          {languages.map(lang => (
                            <SelectItem
                              key={lang}
                              value={lang.toLowerCase()}
                              className="font-[family-name:var(--font-amiri)]"
                            >
                              {lang}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.idiomaOrigem && (
                        <p className="text-red-500 text-sm mt-1 font-[family-name:var(--font-cairo)]">
                          {errors.idiomaOrigem.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label
                        htmlFor="idiomaDestino"
                        className="text-[#4F6A8B] font-semibold font-[family-name:var(--font-cairo)]"
                      >
                        Idioma de Destino *
                      </Label>
                      <Select onValueChange={value => setValue('idiomaDestino', value)}>
                        <SelectTrigger className="mt-2 border-2 focus:border-[#BFCC2E] font-[family-name:var(--font-amiri)]">
                          <SelectValue placeholder="Selecione o idioma" />
                        </SelectTrigger>
                        <SelectContent>
                          {languages.map(lang => (
                            <SelectItem
                              key={lang}
                              value={lang.toLowerCase()}
                              className="font-[family-name:var(--font-amiri)]"
                            >
                              {lang}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.idiomaDestino && (
                        <p className="text-red-500 text-sm mt-1 font-[family-name:var(--font-cairo)]">
                          {errors.idiomaDestino.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Prazo */}
                <div>
                  <h2 className="text-2xl font-bold text-[#4F6A8B] mb-6 flex items-center gap-2 font-[family-name:var(--font-amiri)]">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#4F6A8B] to-[#3d5570] rounded-full flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    Prazo Desejado
                  </h2>

                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { value: 'urgente', label: 'Urgente (1-2 dias)', color: 'red' },
                      { value: 'normal', label: 'Normal (3-5 dias)', color: 'blue' },
                      { value: 'flexivel', label: 'Flexível (+7 dias)', color: 'green' },
                    ].map(option => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                          setValue('prazo', option.value as 'urgente' | 'normal' | 'flexivel')
                        }
                        className={`p-4 rounded-xl border-2 transition-all group relative overflow-hidden ${
                          watch('prazo') === option.value
                            ? 'border-[#BFCC2E] bg-gradient-to-br from-[#BFCC2E]/10 to-[#4F6A8B]/5'
                            : 'border-gray-200 hover:border-[#4F6A8B]/30'
                        }`}
                      >
                        {watch('prazo') === option.value && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#BFCC2E]/10 to-transparent animate-pulse"></div>
                        )}
                        <p
                          className={`font-semibold relative z-10 font-[family-name:var(--font-cairo)] ${
                            watch('prazo') === option.value ? 'text-[#4F6A8B]' : 'text-gray-700'
                          }`}
                        >
                          {option.label}
                        </p>
                      </button>
                    ))}
                  </div>
                  {errors.prazo && (
                    <p className="text-red-500 text-sm mt-2 font-[family-name:var(--font-cairo)]">
                      {errors.prazo.message}
                    </p>
                  )}
                </div>

                {/* Mensagem e Arquivos */}
                <div>
                  <h2 className="text-2xl font-bold text-[#4F6A8B] mb-6 flex items-center gap-2 font-[family-name:var(--font-amiri)]">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#4F6A8B] to-[#3d5570] rounded-full flex items-center justify-center text-white font-bold">
                      5
                    </div>
                    Detalhes do Projeto
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <Label
                        htmlFor="mensagem"
                        className="text-[#4F6A8B] font-semibold font-[family-name:var(--font-cairo)]"
                      >
                        Descreva sua Necessidade *
                      </Label>
                      <Textarea
                        id="mensagem"
                        {...register('mensagem')}
                        placeholder="Conte-nos sobre seu projeto: tipo de documento, quantidade de páginas, contexto, etc."
                        rows={6}
                        className="mt-2 border-2 focus:border-[#BFCC2E] resize-none font-[family-name:var(--font-amiri)]"
                      />
                      {errors.mensagem && (
                        <p className="text-red-500 text-sm mt-1 font-[family-name:var(--font-cairo)]">
                          {errors.mensagem.message}
                        </p>
                      )}
                    </div>

                    {/* Upload de Arquivos */}
                    <div>
                      <Label className="text-[#4F6A8B] font-semibold font-[family-name:var(--font-cairo)]">
                        Anexar Documentos (Opcional)
                      </Label>
                      <div className="mt-2 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#BFCC2E] transition-colors group relative overflow-hidden">
                        {/* Brilho ao hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#BFCC2E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4 group-hover:scale-110 group-hover:text-[#BFCC2E] transition-all duration-300" />
                        <input
                          type="file"
                          multiple
                          onChange={handleFileUpload}
                          className="hidden"
                          id="file-upload"
                          accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                        />
                        <label
                          htmlFor="file-upload"
                          className="cursor-pointer text-[#4F6A8B] font-semibold hover:text-[#BFCC2E] font-[family-name:var(--font-cairo)]"
                        >
                          Clique para adicionar arquivos
                        </label>
                        <p className="text-sm text-gray-500 mt-2 font-[family-name:var(--font-amiri)]">
                          PDF, DOC, TXT, JPG (Máx. 10MB por arquivo)
                        </p>
                      </div>

                      {uploadedFiles.length > 0 && (
                        <div className="mt-4 space-y-2">
                          {uploadedFiles.map((file, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors group"
                            >
                              <span className="text-sm text-gray-700 font-[family-name:var(--font-amiri)]">
                                {file.name}
                              </span>
                              <button
                                title="Remover Arquivo"
                                type="button"
                                onClick={() => removeFile(index)}
                                className="text-red-500 hover:text-red-700 hover:scale-110 transition-all duration-300"
                              >
                                <X className="h-5 w-5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Botão de Envio */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#BFCC2E] to-[#a8b41f] hover:from-[#a8b41f] hover:to-[#BFCC2E] text-black font-bold text-lg py-7 shadow-xl hover:shadow-2xl transition-all disabled:opacity-50 relative overflow-hidden group font-[family-name:var(--font-cairo)]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Enviando Orçamento...
                      </>
                    ) : (
                      <>
                        Enviar Solicitação de Orçamento
                        <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>

                <p className="text-center text-sm text-gray-500 font-[family-name:var(--font-amiri)] font-normal">
                  Ao enviar, você concorda com nossa{' '}
                  <Link
                    href="/privacidade"
                    className="text-[#4F6A8B] hover:underline font-semibold"
                  >
                    Política de Privacidade
                  </Link>
                </p>
              </form>
            </div>

            {/* Info Adicional */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CheckCircle className="h-12 w-12 text-[#BFCC2E] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-[#4F6A8B] mb-2 font-[family-name:var(--font-amiri)]">
                  Resposta Rápida
                </h3>
                <p className="text-sm text-gray-600 font-[family-name:var(--font-amiri)] font-normal">
                  Orçamento em até 2 horas úteis
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CheckCircle className="h-12 w-12 text-[#BFCC2E] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-[#4F6A8B] mb-2 font-[family-name:var(--font-amiri)]">
                  Sem Compromisso
                </h3>
                <p className="text-sm text-gray-600 font-[family-name:var(--font-amiri)] font-normal">
                  Orçamento gratuito e sem obrigação
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CheckCircle className="h-12 w-12 text-[#BFCC2E] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-[#4F6A8B] mb-2 font-[family-name:var(--font-amiri)]">
                  Segurança Total
                </h3>
                <p className="text-sm text-gray-600 font-[family-name:var(--font-amiri)] font-normal">
                  Seus dados protegidos e confidenciais
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
