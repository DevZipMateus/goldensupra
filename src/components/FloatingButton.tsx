import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const isMobile = useIsMobile();

  // Start pulsing effect every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 2000);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsPulsing(false); // Stop pulsing when opened
  };
  return <div className={`fixed ${isMobile ? 'bottom-4 right-3' : 'bottom-8 right-8'} z-50`}>
      {/* Contact Options - All lead to WhatsApp */}
      <div className={`flex flex-col-reverse items-end mb-3 space-y-reverse space-y-2 transition-all duration-500 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <a href="https://wa.me/5585996023538" target="_blank" rel="noopener noreferrer" className="flex items-center bg-[#1e3a8a] text-[#f59e0b] px-4 py-2 rounded-md shadow-lg hover:bg-[#1e40af] transition-all duration-300 gap-2 font-medium">
          <span className="mr-1">WhatsApp</span>
        </a>
        
        
        
        
      </div>
      
      {/* Main Button */}
      <button onClick={toggleMenu} className={`${isMobile ? 'p-3' : 'p-4'} rounded-full flex items-center justify-center transition-all duration-300 
          ${isOpen ? 'bg-[#ef4444] hover:bg-[#dc2626]' : 'bg-[#f59e0b] hover:bg-[#d97706]'} 
          ${isOpen ? 'text-white' : 'text-[#1e3a8a]'} 
          ${isPulsing && !isOpen ? 'animate-pulse' : ''}
          transform hover:scale-105 active:scale-95 shadow-lg`} aria-label={isOpen ? "Fechar menu de contato" : "Abrir menu de contato"} style={{
      boxShadow: isOpen ? '0 4px 12px rgba(239, 68, 68, 0.4)' : '0 4px 12px rgba(245, 158, 11, 0.4)'
    }}>
        {isOpen ? <X size={isMobile ? 18 : 22} /> : <div className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`}>
            <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-full h-full object-contain" />
          </div>}
      </button>
    </div>;
};
export default FloatingButton;