
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="pt-24 pb-8 sm:pt-28 sm:pb-12 md:pt-36 md:pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://carrosbemmontados.com.br/wp-content/uploads/2023/12/TOYOTA-SUPRA-MK4-1-1536x960.jpg.webp')] bg-cover bg-center"></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center py-8 sm:py-12 lg:py-[61px]">
          {/* Logo */}
          <div className="mb-6 lg:mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/3dc78da3-3e5b-49e1-ae49-e6861b911a69.png" 
              alt="Golden Supra Auto Peças" 
              className={`mx-auto object-contain ${
                isMobile 
                  ? 'w-24 h-24 sm:w-32 sm:h-32' 
                  : 'w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48'
              }`} 
            />
          </div>
          
          <h1 className={`font-bold text-white leading-tight mb-4 lg:mb-6 animate-fade-in ${
            isMobile 
              ? 'text-2xl sm:text-3xl' 
              : 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
          }`} style={{
            animationDelay: '0.1s'
          }}>
            Peças automotivas de qualidade para carros antigos e importados
          </h1>
          
          <p className="text-base lg:text-lg text-gray-100 mb-3 lg:mb-4 px-4 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            Somos apaixonados por carros antigos, nacionais e importados. Oferecemos a melhor experiência em peças automotivas com qualidade OEM garantida.
          </p>
          
          <p className="text-lg sm:text-xl font-semibold text-[#f59e0b] mb-8 lg:mb-10 px-4 animate-fade-in" style={{
            animationDelay: '0.25s'
          }}>
            Golden Supra Auto Peças & Acessórios – Sua confiança, nossa qualidade!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 lg:gap-4 px-4 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
            <a 
              href="https://wa.me/5585996023538" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#f59e0b] hover:bg-[#d97706] text-[#1e3a8a] px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-all flex items-center justify-center gap-2 font-semibold text-sm sm:text-base"
            >
              <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Solicitar Orçamento</span>
            </a>
            <a href="#services" className="btn-secondary text-sm sm:text-base">
              Nossos produtos
            </a>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
