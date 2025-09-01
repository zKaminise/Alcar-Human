import React from 'react';
import CasesSection from '@/components/CasesSection';

const bgUrl = '/images/solutions3.png';

const Cases: React.FC = () => {
  return (
    <section id="cases" className="relative min-h-screen pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(${bgUrl})`, backgroundAttachment: 'fixed' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <CasesSection />
        </div>
      </div>
    </section>
  );
};

export default Cases;
