import React from "react";

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/5567996442404?text=Ol%C3%A1!%20%20Quero%20tirar%20minhas%20d%C3%BAvidas%20sobre%20o%20Clube%20das%20Zizas."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white rounded-full p-4 shadow-lg z-50 transition-transform hover:scale-110"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;