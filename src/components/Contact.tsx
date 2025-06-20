
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Contact = () => {
  const isMobile = useIsMobile();

  return (
    <section id="contact" className="section bg-neutral-100">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-[#1e3a8a]/10 text-[#1e3a8a] font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Entre em contato conosco
          </h2>
          <p className="text-neutral-600 text-lg">
            Estamos prontos para atender às suas necessidades através do nosso WhatsApp.
          </p>
        </div>
        
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in">
            <div className="bg-emerald-500 p-6 flex items-center justify-center">
              <img src="/lovable-uploads/1fa16bc1-908d-4a63-9c7f-88a25f117f80.png" alt="WhatsApp" className="w-16 h-16" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">WhatsApp</h3>
              <p className="text-neutral-600 mb-4">Atendimento rápido e prático</p>
              <a href="https://wa.me/5585996023538" target="_blank" rel="noopener noreferrer" className="bg-[#1e3a8a] hover:bg-[#1e40af] text-[#f59e0b] px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium">
                <span>Enviar mensagem</span>
              </a>
            </div>
          </div>
          
          {/* Phone Card - Now leads to WhatsApp */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in" style={{
          animationDelay: '0.1s'
        }}>
            
            
          </div>
          
          {/* Email Card - Now leads to WhatsApp */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            
            
          </div>
        </div>
        
        {/* Address and Hours Card */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Address */}
            <div className="flex items-start">
              <div className="bg-neutral-100 p-3 rounded-full mr-4 flex-shrink-0">
                <MapPin className="text-neutral-700" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">Endereço</h4>
                <p className="text-neutral-600 mb-4">Av. D, 1289 - Genibaú, Fortaleza - CE, 60533-602</p>
                <a href="https://maps.app.goo.gl/yRimX4g3VtxZvwdJ9" target="_blank" rel="noopener noreferrer" className="text-[#f59e0b] hover:text-[#d97706] transition-colors underline">
                  Ver no Google Maps
                </a>
              </div>
            </div>
            
            {/* Working Hours */}
            <div>
              <h4 className="text-lg font-semibold text-neutral-900 mb-4">Horário de Atendimento</h4>
              
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
              
              <div className="mt-4 p-4 bg-[#fef3c7] rounded-lg">
                <p className="text-sm text-[#92400e] font-medium">
                  🚀 Retirada Express: Peças disponíveis em até 2 horas*
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
