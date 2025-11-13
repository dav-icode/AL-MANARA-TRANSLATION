import type { Metadata } from 'next';
import { Amiri, Cairo, Cinzel, Montserrat } from 'next/font/google';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { WhatsAppButton } from '../components/WhatsAppButton';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
});

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const amiri = Amiri({
  variable: '--font-amiri',
  subsets: ['latin', 'arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

const cairo = Cairo({
  variable: '--font-cairo',
  subsets: ['latin', 'arabic'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Al Manara Translation - Traduções Profissionais',
  description: 'Tradução profissional com nativos especializados',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${montserrat.variable} ${cinzel.variable} ${amiri.variable} ${cairo.variable} antialiased font-sans`}
      >
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
