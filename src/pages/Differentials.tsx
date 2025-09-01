import React from 'react';
import DifferentialsSection from '@/components/DifferentialsSection';

const bgUrl = '/images/solutions3.png';

const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="relative min-h-screen pt-20 overflow-hidden">
      {/* Fundo com bg-fixed (sem filtros pesados) */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(${bgUrl})`, backgroundAttachment: 'fixed' }}
        />
        {/* Overlay escuro como no /contato */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Conteúdo acima do fundo */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <DifferentialsSection />
        </div>
      </div>
    </section>
  );
};

export default Differentials;
