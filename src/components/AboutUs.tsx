
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="bg-[#1e3a8a]/20 w-full h-full absolute -left-6 -top-6 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Peças automotivas Golden Supra" 
                className="relative z-10 rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-6 z-20 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#1e3a8a] rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Desde 2014</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#f59e0b] rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Qualidade OEM</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Satisfação garantida</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-[#1e3a8a]/10 text-[#1e3a8a] font-medium px-4 py-1.5 rounded-full text-sm mb-4 animate-fade-in">
              Sobre a Golden Supra
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Paixão por carros antigos e importados
            </h2>
            <p className="text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Somos apaixonados por carros antigos, nacionais e importados. Estamos aqui para oferecer a melhor experiência 
              em peças automotivas para você. Na Golden Supra Auto Peças temos um estoque completo com peças de alta qualidade 
              para garantir o desempenho e a durabilidade do seu veículo.
            </p>
            <p className="text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Com anos de experiência no mercado, nossa equipe está pronta para atender as suas demandas com 
              profissionalismo e dedicação, seja para restaurar um clássico ou manter seu carro atual em perfeito funcionamento.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="bg-[#1e3a8a]/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-[#1e3a8a]" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Qualidade Garantida</h4>
                  <p className="text-gray-600">Produtos OEM com qualidade original aprovada pelas montadoras</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="bg-[#1e3a8a]/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-[#1e3a8a]" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Atendimento Especializado</h4>
                  <p className="text-gray-600">Equipe especializada em carros antigos, nacionais e importados</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="bg-[#1e3a8a]/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-[#1e3a8a]" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Entrega Rápida</h4>
                  <p className="text-gray-600">Envio seguro para todo o Brasil e retirada express em até 2h</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="bg-[#1e3a8a] hover:bg-[#1e40af] text-[#f59e0b] px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex animate-fade-in" 
              style={{ animationDelay: '0.7s' }}
            >
              <span>Entre em Contato</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
