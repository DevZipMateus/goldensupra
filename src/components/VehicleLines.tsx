
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import YellowLineCarousel from './YellowLineCarousel';
import IndustrialLineCarousel from './IndustrialLineCarousel';
import LightLineCarousel from './LightLineCarousel';
import HeavyLineCarousel from './HeavyLineCarousel';
import MotoLineCarousel from './MotoLineCarousel';

const vehicleLines = [
  {
    id: 1,
    name: 'Linha Amarela',
    description: 'Veículos de transporte público e táxis',
    features: ['Peças para táxis', 'Componentes para ônibus', 'Acessórios específicos'],
    useCarousel: true,
    carouselType: 'yellow'
  },
  {
    id: 2,
    name: 'Linha Industrial',
    description: 'Veículos para uso industrial e comercial',
    features: ['Peças para caminhões', 'Componentes industriais', 'Sistemas hidráulicos'],
    useCarousel: true,
    carouselType: 'industrial'
  },
  {
    id: 3,
    name: 'Linha Leve',
    description: 'Carros de passeio e veículos urbanos',
    features: ['Peças para carros populares', 'Componentes urbanos', 'Acessórios básicos'],
    useCarousel: true,
    carouselType: 'light'
  },
  {
    id: 4,
    name: 'Linha Pesada',
    description: 'Caminhões e veículos de grande porte',
    features: ['Peças para caminhões pesados', 'Componentes de carga', 'Sistemas robustos'],
    useCarousel: true,
    carouselType: 'heavy'
  },
  {
    id: 5,
    name: 'Linha de Motopeças',
    description: 'Peças e acessórios para motocicletas',
    features: ['Peças para motos', 'Acessórios de segurança', 'Componentes específicos'],
    useCarousel: true,
    carouselType: 'moto'
  }
];

const VehicleLines = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#1e3a8a]/10 text-[#1e3a8a] font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossas Linhas de Veículos
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Peças para Todos os Tipos de Veículos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Oferecemos peças especializadas para diferentes categorias de veículos, garantindo qualidade e compatibilidade
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {vehicleLines.map((line, index) => (
            <div
              key={line.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {line.useCarousel ? (
                line.carouselType === 'yellow' ? (
                  <YellowLineCarousel />
                ) : line.carouselType === 'industrial' ? (
                  <IndustrialLineCarousel />
                ) : line.carouselType === 'light' ? (
                  <LightLineCarousel />
                ) : line.carouselType === 'heavy' ? (
                  <HeavyLineCarousel />
                ) : line.carouselType === 'moto' ? (
                  <MotoLineCarousel />
                ) : null
              ) : null}
              
              <div className="p-6">
                <ul className="space-y-2">
                  {line.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#f59e0b] rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={`https://wa.me/5585996023538?text=Olá! Gostaria de saber mais sobre peças para ${line.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-4 bg-[#1e3a8a] hover:bg-[#1e40af] text-[#f59e0b] px-4 py-2 rounded-md transition-all font-medium text-sm inline-block text-center"
                >
                  Ver Peças Disponíveis
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleLines;
