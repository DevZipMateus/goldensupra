
import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import LocationMap from './LocationMap';

const LocationSection = () => {
  return (
    <section className="py-12 bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#1e3a8a]/10 text-[#1e3a8a] font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Localização
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nos Localizamos Aqui
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Venha nos visitar em nossa loja física. Estamos prontos para atendê-lo com as melhores peças automotivas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <LocationMap />
          </div>

          {/* Location Details */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-start mb-4">
                <div className="bg-[#f59e0b]/10 p-3 rounded-full mr-4 flex-shrink-0">
                  <MapPin className="text-[#f59e0b]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">Endereço</h3>
                  <p className="text-neutral-600 mb-4">
                    Av. D, 1317 - Conj. Ceará<br/>
                    Fortaleza - CE, 60533-605
                  </p>
                  <a 
                    href="https://www.google.com/maps/place/Av.+D,+1317+-+Conj.+Cear%C3%A1,+Fortaleza+-+CE,+60533-605/@-3.7637282,-38.6028956,19z/data=!3m1!4b1!4m5!3m4!1s0x7c74c7869fdd771:0xb6d8e4b0fc199e4a!8m2!3d-3.7637295!4d-38.6022519?entry=ttu&g_ep=EgoyMDI1MDYwOS4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f59e0b] hover:text-[#d97706] transition-colors underline text-sm"
                  >
                    Ver no Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-start mb-4">
                <div className="bg-[#1e3a8a]/10 p-3 rounded-full mr-4 flex-shrink-0">
                  <Clock className="text-[#1e3a8a]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">Horário de Funcionamento</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Segunda - Sexta:</span>
                      <span className="font-medium text-neutral-900">08:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Sábado:</span>
                      <span className="font-medium text-neutral-900">08:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Domingo:</span>
                      <span className="font-medium text-neutral-900">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-start">
                <div className="bg-emerald-500/10 p-3 rounded-full mr-4 flex-shrink-0">
                  <Phone className="text-emerald-500" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">Contato Direto</h3>
                  <p className="text-neutral-600 mb-4">
                    Entre em contato conosco para mais informações
                  </p>
                  <a 
                    href="https://wa.me/5585996023538?text=Olá! Gostaria de saber mais sobre suas peças automotivas."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1e3a8a] hover:bg-[#1e40af] text-[#f59e0b] px-4 py-2 rounded-md inline-flex items-center gap-2 transition-all font-medium text-sm"
                  >
                    <span>(85) 99602-3538</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
