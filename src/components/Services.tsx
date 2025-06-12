import React from 'react';
import { Car, Truck, Wrench, Settings, ArrowRight } from 'lucide-react';
const services = [{
  id: 1,
  title: 'Linha Amarela',
  description: 'Peças especializadas para veículos da linha amarela, incluindo táxis e transporte público.',
  icon: Car,
  delay: '0s'
}, {
  id: 2,
  title: 'Linha Industrial',
  description: 'Componentes robustos para veículos industriais e de trabalho pesado.',
  icon: Settings,
  delay: '0.1s'
}, {
  id: 3,
  title: 'Linha Leve',
  description: 'Peças para carros de passeio, utilitários leves e veículos do dia a dia.',
  icon: Car,
  delay: '0.2s'
}, {
  id: 4,
  title: 'Linha Pesada',
  description: 'Peças para caminhões, ônibus e veículos de grande porte.',
  icon: Truck,
  delay: '0.3s'
}, {
  id: 5,
  title: 'Moto Peças',
  description: 'Componentes especializados para motocicletas de todas as categorias.',
  icon: Wrench,
  delay: '0.4s'
}];
const Services = () => {
  return <section id="services" className="section bg-white my-[86px]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#1e3a8a]/10 text-[#1e3a8a] font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Produtos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Peças automotivas para todos os tipos de veículos
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos um estoque completo com peças de alta qualidade OEM para garantir 
            o desempenho e a durabilidade do seu veículo, desde carros antigos até modernos.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map(service => <div key={service.id} className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#f59e0b] transition-all duration-300 transform hover:scale-[1.02] animate-fade-in" style={{
          animationDelay: service.delay
        }}>
              <div className="bg-[#1e3a8a]/10 p-4 rounded-lg inline-block mb-5">
                <service.icon className="text-[#1e3a8a]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>)}
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] rounded-2xl p-8 md:p-12 text-white mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Por que escolher a Golden Supra?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#f59e0b] p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                    <ArrowRight className="text-[#1e3a8a]" size={16} />
                  </div>
                  <span>Peças OEM (qualidade original aprovada pelas Montadoras)</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#f59e0b] p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                    <ArrowRight className="text-[#1e3a8a]" size={16} />
                  </div>
                  <span>Atendimento personalizado e especializado</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#f59e0b] p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                    <ArrowRight className="text-[#1e3a8a]" size={16} />
                  </div>
                  <span>Envio rápido e seguro para todo o Brasil</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#f59e0b] p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                    <ArrowRight className="text-[#1e3a8a]" size={16} />
                  </div>
                  <span>Retirar peças express (em até 2h*)</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="text-4xl font-bold text-[#f59e0b] mb-2">+10</div>
                <div className="text-lg mb-4">Anos de experiência</div>
                <div className="text-sm opacity-90">Especializados em carros antigos, nacionais e importados</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <a href="https://wa.me/5585996023538" target="_blank" rel="noopener noreferrer" className="bg-[#1e3a8a] hover:bg-[#1e40af] text-[#f59e0b] px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex">
            <span>Consulte nossas peças</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>;
};
export default Services;