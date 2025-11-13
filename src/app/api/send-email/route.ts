import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    // Parse FormData
    const formData = await request.formData();

    // Extrair dados do formulário
    const nome = formData.get('nome') as string;
    const email = formData.get('email') as string;
    const telefone = formData.get('telefone') as string;
    const empresa = (formData.get('empresa') as string) || 'Não informado';
    const tipoServico = formData.get('tipoServico') as string;
    const idiomaOrigem = formData.get('idiomaOrigem') as string;
    const idiomaDestino = formData.get('idiomaDestino') as string;
    const prazo = formData.get('prazo') as string;
    const mensagem = formData.get('mensagem') as string;

    // Extrair arquivos (se houver)
    const files = formData.getAll('files') as File[];

    // Mapear tipo de serviço para nome legível
    const servicoMap: Record<string, string> = {
      simples: 'Tradução Simples',
      tecnica: 'Tradução Técnica',
      juramentada: 'Tradução Juramentada',
      'idiomas-raros': 'Idiomas Raros',
    };

    const prazoMap: Record<string, string> = {
      urgente: 'Urgente (1-2 dias)',
      normal: 'Normal (3-5 dias)',
      flexivel: 'Flexível (+7 dias)',
    };

    // Configurar transporter do Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Processar anexos (converter File para Buffer)
    const attachments = await Promise.all(
      files.map(async file => {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        return {
          filename: file.name,
          content: buffer,
        };
      })
    );

    // HTML do email para a empresa
    const htmlEmpresa = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #4F6A8B 0%, #2b3a4c 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-row { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #BFCC2E; border-radius: 5px; }
            .label { font-weight: bold; color: #4F6A8B; display: inline-block; min-width: 150px; }
            .highlight { background: #BFCC2E; color: black; padding: 2px 8px; border-radius: 3px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🌍 Nova Solicitação de Orçamento</h1>
              <p>Al Manara Serviços Linguísticos</p>
            </div>
            <div class="content">
              <h2 style="color: #4F6A8B;">Dados do Cliente</h2>
              <div class="info-row">
                <span class="label">Nome:</span> ${nome}
              </div>
              <div class="info-row">
                <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
              </div>
              <div class="info-row">
                <span class="label">Telefone:</span> <a href="tel:${telefone}">${telefone}</a>
              </div>
              <div class="info-row">
                <span class="label">Empresa:</span> ${empresa}
              </div>

              <h2 style="color: #4F6A8B; margin-top: 30px;">Detalhes do Serviço</h2>
              <div class="info-row">
                <span class="label">Tipo de Serviço:</span> <span class="highlight">${
                  servicoMap[tipoServico]
                }</span>
              </div>
              <div class="info-row">
                <span class="label">Idioma Origem:</span> ${idiomaOrigem.toUpperCase()}
              </div>
              <div class="info-row">
                <span class="label">Idioma Destino:</span> ${idiomaDestino.toUpperCase()}
              </div>
              <div class="info-row">
                <span class="label">Prazo:</span> ${prazoMap[prazo]}
              </div>

              <h2 style="color: #4F6A8B; margin-top: 30px;">Mensagem</h2>
              <div class="info-row">
                <p style="margin: 0; white-space: pre-wrap;">${mensagem}</p>
              </div>

              ${
                files.length > 0
                  ? `
                <h2 style="color: #4F6A8B; margin-top: 30px;">Arquivos Anexados</h2>
                <div class="info-row">
                  <ul style="margin: 0; padding-left: 20px;">
                    ${files
                      .map(f => `<li>${f.name} (${(f.size / 1024).toFixed(2)} KB)</li>`)
                      .join('')}
                  </ul>
                </div>
              `
                  : ''
              }

              <p style="margin-top: 30px; padding: 20px; background: white; border-radius: 5px; text-align: center;">
                <strong>⏰ Responder em até 2 horas úteis</strong>
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // HTML do email para o cliente (confirmação)
    const htmlCliente = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #4F6A8B 0%, #2b3a4c 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #BFCC2E; color: black; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✅ Orçamento Recebido!</h1>
              <p>Al Manara Serviços Linguísticos</p>
            </div>
            <div class="content">
              <p>Olá, <strong>${nome}</strong>!</p>
              <p>Recebemos sua solicitação de orçamento para <strong>${
                servicoMap[tipoServico]
              }</strong> e estamos analisando todos os detalhes.</p>

              <p><strong>📋 Resumo da sua solicitação:</strong></p>
              <ul>
                <li>Serviço: ${servicoMap[tipoServico]}</li>
                <li>Idiomas: ${idiomaOrigem.toUpperCase()} → ${idiomaDestino.toUpperCase()}</li>
                <li>Prazo: ${prazoMap[prazo]}</li>
              </ul>

              <p style="background: #fff3cd; padding: 15px; border-left: 4px solid #BFCC2E; border-radius: 5px;">
                <strong>⏰ Responderemos em até 2 horas úteis</strong><br>
                Fique atento ao seu email (verifique também a caixa de spam).
              </p>

              <p>Enquanto isso, você pode entrar em contato via WhatsApp para atendimento mais rápido:</p>
              <div style="text-align: center;">
                <a href="https://wa.me/5511945540455?text=Olá!%20Acabei%20de%20solicitar%20um%20orçamento" class="button">
                  📱 Falar no WhatsApp
                </a>
              </div>

              <p style="margin-top: 30px; color: #666; font-size: 14px;">
                Atenciosamente,<br>
                <strong style="color: #4F6A8B;">Equipe Al Manara</strong><br>
                📧 contato@almanaratranslation.com.br<br>
                📱 +55 (11) 94554-0455
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Enviar email para a empresa
    await transporter.sendMail({
      from: `"Al Manara - Site" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Email da empresa
      subject: `🌍 Novo Orçamento: ${servicoMap[tipoServico]} - ${nome}`,
      html: htmlEmpresa,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    // Enviar email de confirmação para o cliente
    await transporter.sendMail({
      from: `"Al Manara Traduções" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: '✅ Orçamento Recebido - Al Manara Traduções',
      html: htmlCliente,
    });

    return NextResponse.json(
      { success: true, message: 'Orçamento enviado com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { success: false, message: 'Erro ao enviar orçamento' },
      { status: 500 }
    );
  }
}
