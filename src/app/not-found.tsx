import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4F6A8B] to-[#2b3a4c] text-white">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-[#BFCC2E] mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-6">Página não encontrada</h2>
        <p className="text-xl mb-8 text-gray-300">
          A página que você procura não existe ou foi movida.
        </p>
        <Link href="/">
          <Button size="lg" className="bg-[#BFCC2E] hover:bg-[#a8b41f] text-black font-bold">
            <Home className="mr-2 h-5 w-5" />
            Voltar para o Início
          </Button>
        </Link>
      </div>
    </div>
  );
}
