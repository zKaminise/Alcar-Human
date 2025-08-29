import React from 'react';
import SolutionsSection from '@/components/SolutionsSection';

const Solutions = () => {

  // Ajuste o caminho conforme a pasta que você criou em /public
  // Solutions.tsx
  const bgUrl = '/images/solutions.png';
  return (
    <>

      {/* Parallax Background */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgUrl})`,
          backgroundAttachment: 'fixed',
          filter: 'blur(3px)',
          transform: 'scale(1.1)',
          zIndex: 0
        }}
      />
      {/* Overlay */}
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm pointer-events-none" style={{ zIndex: 5 }} />

      {/* Content Container */}
      <div className="relative z-10">
        <div className="min-h-screen pt-20">
          <SolutionsSection />
        </div>
      </div>
    </>
  );
};

export default Solutions;