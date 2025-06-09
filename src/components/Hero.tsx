import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';
const Hero = () => {
  const isMobile = useIsMobile();
  return <section className="pt-28 pb-12 md:pt-36 md:pb-20 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#f59e0b]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#ef4444]/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center py-[61px]">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img src="/lovable-uploads/3dc78da3-3e5b-49e1-ae49-e6861b911a69.png" alt="Golden Supra Auto Peças" className={`mx-auto ${isMobile ? 'w-32 h-32' : 'w-48 h-48'} object-contain`} />
          </div>
          
          <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold text-white leading-tight mb-6 animate-fade-in`} style={{
          animationDelay: '0.1s'
        }}>
            Peças automotivas de qualidade para carros antigos e importados
          </h1>
          
          <p className="text-lg text-[#fef3c7] mb-4 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            Somos apaixonados por carros antigos, nacionais e importados. Oferecemos a melhor experiência em peças automotivas com qualidade OEM garantida.
          </p>
          
          <p className="text-xl font-semibold text-[#f59e0b] mb-10 animate-fade-in" style={{
          animationDelay: '0.25s'
        }}>
            Golden Supra Auto Peças & Acessórios – Sua confiança, nossa qualidade!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <a href="https://wa.me/5585996023538" target="_blank" rel="noopener noreferrer" className="bg-[#f59e0b] hover:bg-[#d97706] text-[#1e3a8a] px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-semibold">
              <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-5 h-5" />
              <span>Solicitar Orçamento</span>
            </a>
            <a href="#services" className="btn-secondary">
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
    </section>;
};
export default Hero;