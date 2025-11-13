import type { Metadata } from 'next';
import { Amiri, Cairo, Cinzel, Montserrat } from 'next/font/google';
import { Footer } from '../components/Footer';

import { Header } from '../components/Header';
import './globals.css';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const amiri = Amiri({
  weight: ['400', '700'],
  subsets: ['latin', 'arabic'],
  variable: '--font-amiri',
  display: 'swap',
});

const cairo = Cairo({
  weight: ['400', '600', '700'],
  subsets: ['latin', 'arabic'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Al Manara - Tradução Profissional | Idiomas Raros',
  description:
    'Serviços de tradução simples, técnica e juramentada. Especialistas em idiomas raros como Islandês, Georgiano e mais. Tradutores nativos certificados.',
  keywords:
    'tradução, idiomas raros, tradução juramentada, tradução técnica, islandês, georgiano, tradução profissional, tradutor nativo',
  authors: [{ name: 'Al Manara Serviços Linguísticos' }],
  openGraph: {
    title: 'Al Manara - Tradução Profissional',
    description: 'Especialistas em idiomas raros e tradução juramentada',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cinzel.variable} ${montserrat.variable} ${amiri.variable} ${cairo.variable}`}
    >
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
