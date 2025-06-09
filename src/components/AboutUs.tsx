
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const AboutUs = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2 animate-fade-in">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="bg-[#1e3a8a]/20 w-full h-full absolute -left-3 -top-3 lg:-left-6 lg:-top-6 rounded-lg"></div>
              <img 
                alt="Peças automotivas Golden Supra" 
                className="relative z-10 rounded-lg shadow-lg w-full object-cover h-[300px] sm:h-[350px] lg:h-[400px]" 
                src="https://images.unsplash.com/photo-1606942790567-5783bab8d944?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              />
              <div className={`absolute ${isMobile ? '-bottom-4 -right-4' : '-bottom-8 -right-8'} bg-white rounded-lg shadow-lg p-4 lg:p-6 z-20 animate-float max-w-[200px] sm:max-w-none`}>
                <div className="flex flex-col sm:flex-row items-center justify-between mb-3 lg:mb-4 gap-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-[#1e3a8a] rounded-full mr-2"></div>
                    <span className="text-xs lg:text-sm font-medium text-gray-600">Desde 2014</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-[#f59e0b] rounded-full mr-2"></div>
                    <span className="text-xs lg:text-sm font-medium text-gray-600">Qualidade OEM</span>
                  </div>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900">100%</div>
                <div className="text-xs lg:text-sm text-gray-600">Satisfação garantida</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block bg-[#1e3a8a]/10 text-[#1e3a8a] font-medium px-4 py-1.5 rounded-full text-sm mb-4 animate-fade-in">
              Sobre a Golden Supra
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6 animate-fade-in" style={{
              animationDelay: '0.1s'
            }}>
              Paixão por carros antigos e importados
            </h2>
            <p className="text-gray-600 mb-4 lg:mb-6 text-sm sm:text-base animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
              Somos apaixonados por carros antigos, nacionais e importados. Estamos aqui para oferecer a melhor experiência 
              em peças automotivas para você. Na Golden Supra Auto Peças temos um estoque completo com peças de alta qualidade 
              para garantir o desempenho e a durabilidade do seu veículo.
            </p>
            <p className="text-gray-600 mb-6 lg:mb-8 text-sm sm:text-base animate-fade-in" style={{
              animationDelay: '0.3s'
            }}>
              Com anos de experiência no mercado, nossa equipe está pronta para atender as suas demandas com 
              profissionalismo e dedicação, seja para restaurar um clássico ou manter seu carro atual em perfeito funcionamento.
            </p>
            
            {/* Key Points */}
            <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
              <div className="flex items-start animate-fade-in" style={{
                animationDelay: '0.4s'
              }}>
                <div className="bg-[#1e3a8a]/10 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  <Check className="text-[#1e3a8a]" size={14} />
                </div>
                <div>
                  <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-1">Qualidade Garantida</h4>
                  <p className="text-gray-600 text-sm lg:text-base">Produtos OEM com qualidade original aprovada pelas montadoras</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
                animationDelay: '0.5s'
              }}>
                <div className="bg-[#1e3a8a]/10 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  <Check className="text-[#1e3a8a]" size={14} />
                </div>
                <div>
                  <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-1">Atendimento Especializado</h4>
                  <p className="text-gray-600 text-sm lg:text-base">Equipe especializada em carros antigos, nacionais e importados</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
                animationDelay: '0.6s'
              }}>
                <div className="bg-[#1e3a8a]/10 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  <Check className="text-[#1e3a8a]" size={14} />
                </div>
                <div>
                  <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-1">Entrega Rápida</h4>
                  <p className="text-gray-600 text-sm lg:text-base">Envio seguro para todo o Brasil e retirada express em até 2h</p>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="bg-[#1e3a8a] hover:bg-[#1e40af] text-[#f59e0b] px-4 lg:px-6 py-2 lg:py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex text-sm lg:text-base animate-fade-in" style={{
              animationDelay: '0.7s'
            }}>
              <span>Entre em Contato</span>
              <ArrowRight size={isMobile ? 16 : 18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
