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
import { useState } from 'react';
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

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Criar FormData para enviar arquivos também
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      // Adicionar arquivos
      uploadedFiles.forEach(file => {
        formData.append('files', file);
      });

      // Chamar API Route
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

      // Scroll para o topo após sucesso
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
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white -mt-16">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-[#4F6A8B] via-[#3d5570] to-[#2b3a4c] text-white py-20">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23BFCC2E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <span className="bg-[#BFCC2E] text-black px-4 py-2 rounded-full text-sm font-semibold">
                💬 Orçamento Gratuito
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold">
              Solicite seu Orçamento em <span className="text-[#BFCC2E]">2 Minutos</span>
            </h1>
            <p className="text-xl text-gray-300">
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
              <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-6 mb-8 flex items-start gap-4 animate-slide-down">
                <CheckCircle className="h-8 w-8 text-green-600 flex shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Orçamento Enviado com Sucesso! 🎉
                  </h3>
                  <p className="text-green-700">
                    Recebemos sua solicitação e entraremos em contato em até 2 horas úteis.
                    Verifique seu email (incluindo spam) para nossa resposta.
                  </p>
                </div>
              </div>
            )}

            {/* Mensagem de Erro */}
            {submitStatus === 'error' && (
              <div className="bg-red-50 border-2 border-red-500 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-2">Erro ao Enviar</h3>
                <p className="text-red-700">
                  Houve um problema ao enviar seu orçamento. Por favor, tente novamente ou entre em
                  contato via WhatsApp.
                </p>
              </div>
            )}

            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Dados Pessoais */}
                <div>
                  <h2 className="text-2xl font-heading font-bold text-[#4F6A8B] mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 bg-linear-to-br from-[#4F6A8B] to-[#3d5570] rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    Seus Dados
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="nome" className="text-[#4F6A8B] font-semibold">
                        Nome Completo *
                      </Label>
                      <Input
                        id="nome"
                        {...register('nome')}
                        placeholder="Seu nome"
                        className="mt-2 border-2 focus:border-[#BFCC2E]"
                      />
                      {errors.nome && (
                        <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-[#4F6A8B] font-semibold">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        placeholder="seu@email.com"
                        className="mt-2 border-2 focus:border-[#BFCC2E]"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="telefone" className="text-[#4F6A8B] font-semibold">
                        Telefone/WhatsApp *
                      </Label>
                      <Input
                        id="telefone"
                        {...register('telefone')}
                        placeholder="(11) 99999-9999"
                        className="mt-2 border-2 focus:border-[#BFCC2E]"
                      />
                      {errors.telefone && (
                        <p className="text-red-500 text-sm mt-1">{errors.telefone.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="empresa" className="text-[#4F6A8B] font-semibold">
                        Empresa (Opcional)
                      </Label>
                      <Input
                        id="empresa"
                        {...register('empresa')}
                        placeholder="Nome da empresa"
                        className="mt-2 border-2 focus:border-[#BFCC2E]"
                      />
                    </div>
                  </div>
                </div>

                {/* Tipo de Serviço */}
                <div>
                  <h2 className="text-2xl font-heading font-bold text-[#4F6A8B] mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 bg-linear-to-br from-[#4F6A8B] to-[#3d5570] rounded-full flex items-center justify-center text-white font-bold">
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
                          className={`p-6 rounded-xl border-2 transition-all text-left ${
                            tipoServico === service.value
                              ? 'border-[#BFCC2E] bg-linear-to-br from-[#BFCC2E]/10 to-[#4F6A8B]/5 shadow-lg'
                              : 'border-gray-200 hover:border-[#4F6A8B]/30'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                tipoServico === service.value
                                  ? 'bg-linear-to-br from-[#BFCC2E] to-[#a8b41f]'
                                  : 'bg-gray-100'
                              }`}
                            >
                              <Icon
                                className={`h-6 w-6 ${
                                  tipoServico === service.value ? 'text-black' : 'text-gray-600'
                                }`}
                              />
                            </div>
                            <span
                              className={`font-semibold ${
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
                    <p className="text-red-500 text-sm mt-2">{errors.tipoServico.message}</p>
                  )}
                </div>

                {/* Idiomas */}
                <div>
                  <h2 className="text-2xl font-heading font-bold text-[#4F6A8B] mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 bg-linear-to-br from-[#4F6A8B] to-[#3d5570] rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    Idiomas
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="idiomaOrigem" className="text-[#4F6A8B] font-semibold">
                        Idioma de Origem *
                      </Label>
                      <Select onValueChange={value => setValue('idiomaOrigem', value)}>
                        <SelectTrigger className="mt-2 border-2 focus:border-[#BFCC2E]">
                          <SelectValue placeholder="Selecione o idioma" />
                        </SelectTrigger>
                        <SelectContent>
                          {languages.map(lang => (
                            <SelectItem key={lang} value={lang.toLowerCase()}>
                              {lang}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.idiomaOrigem && (
                        <p className="text-red-500 text-sm mt-1">{errors.idiomaOrigem.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="idiomaDestino" className="text-[#4F6A8B] font-semibold">
                        Idioma de Destino *
                      </Label>
                      <Select onValueChange={value => setValue('idiomaDestino', value)}>
                        <SelectTrigger className="mt-2 border-2 focus:border-[#BFCC2E]">
                          <SelectValue placeholder="Selecione o idioma" />
                        </SelectTrigger>
                        <SelectContent>
                          {languages.map(lang => (
                            <SelectItem key={lang} value={lang.toLowerCase()}>
                              {lang}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.idiomaDestino && (
                        <p className="text-red-500 text-sm mt-1">{errors.idiomaDestino.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Prazo */}
                <div>
                  <h2 className="text-2xl font-heading font-bold text-[#4F6A8B] mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 bg-linear-to-br from-[#4F6A8B] to-[#3d5570] rounded-full flex items-center justify-center text-white font-bold">
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
                        className={`p-4 rounded-xl border-2 transition-all ${
                          watch('prazo') === option.value
                            ? 'border-[#BFCC2E] bg-linear-to-br from-[#BFCC2E]/10 to-[#4F6A8B]/5'
                            : 'border-gray-200 hover:border-[#4F6A8B]/30'
                        }`}
                      >
                        <p
                          className={`font-semibold ${
                            watch('prazo') === option.value ? 'text-[#4F6A8B]' : 'text-gray-700'
                          }`}
                        >
                          {option.label}
                        </p>
                      </button>
                    ))}
                  </div>
                  {errors.prazo && (
                    <p className="text-red-500 text-sm mt-2">{errors.prazo.message}</p>
                  )}
                </div>

                {/* Mensagem e Arquivos */}
                <div>
                  <h2 className="text-2xl font-heading font-bold text-[#4F6A8B] mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 bg-linear-to-br from-[#4F6A8B] to-[#3d5570] rounded-full flex items-center justify-center text-white font-bold">
                      5
                    </div>
                    Detalhes do Projeto
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="mensagem" className="text-[#4F6A8B] font-semibold">
                        Descreva sua Necessidade *
                      </Label>
                      <Textarea
                        id="mensagem"
                        {...register('mensagem')}
                        placeholder="Conte-nos sobre seu projeto: tipo de documento, quantidade de páginas, contexto, etc."
                        rows={6}
                        className="mt-2 border-2 focus:border-[#BFCC2E] resize-none"
                      />
                      {errors.mensagem && (
                        <p className="text-red-500 text-sm mt-1">{errors.mensagem.message}</p>
                      )}
                    </div>

                    {/* Upload de Arquivos */}
                    <div>
                      <Label className="text-[#4F6A8B] font-semibold">
                        Anexar Documentos (Opcional)
                      </Label>
                      <div className="mt-2 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#BFCC2E] transition-colors">
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
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
                          className="cursor-pointer text-[#4F6A8B] font-semibold hover:text-[#BFCC2E]"
                        >
                          Clique para adicionar arquivos
                        </label>
                        <p className="text-sm text-gray-500 mt-2">
                          PDF, DOC, TXT, JPG (Máx. 10MB por arquivo)
                        </p>
                      </div>

                      {uploadedFiles.length > 0 && (
                        <div className="mt-4 space-y-2">
                          {uploadedFiles.map((file, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                            >
                              <span className="text-sm text-gray-700">{file.name}</span>
                              <button
                                title="Remover Arquivo"
                                type="button"
                                onClick={() => removeFile(index)}
                                className="text-red-500 hover:text-red-700"
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
                  className="w-full bg-linear-to-r from-[#BFCC2E] to-[#a8b41f] hover:from-[#a8b41f] hover:to-[#BFCC2E] text-black font-bold text-lg py-7 shadow-xl hover:shadow-2xl transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Enviando Orçamento...
                    </>
                  ) : (
                    <>
                      Enviar Solicitação de Orçamento
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>

                <p className="text-center text-sm text-gray-500">
                  Ao enviar, você concorda com nossa{' '}
                  <Link href="/privacidade" className="text-[#4F6A8B] hover:underline">
                    Política de Privacidade
                  </Link>
                </p>
              </form>
            </div>

            {/* Info Adicional */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <CheckCircle className="h-12 w-12 text-[#BFCC2E] mx-auto mb-3" />
                <h3 className="font-bold text-[#4F6A8B] mb-2">Resposta Rápida</h3>
                <p className="text-sm text-gray-600">Orçamento em até 2 horas úteis</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <CheckCircle className="h-12 w-12 text-[#BFCC2E] mx-auto mb-3" />
                <h3 className="font-bold text-[#4F6A8B] mb-2">Sem Compromisso</h3>
                <p className="text-sm text-gray-600">Orçamento gratuito e sem obrigação</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <CheckCircle className="h-12 w-12 text-[#BFCC2E] mx-auto mb-3" />
                <h3 className="font-bold text-[#4F6A8B] mb-2">Segurança Total</h3>
                <p className="text-sm text-gray-600">Seus dados protegidos e confidenciais</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
