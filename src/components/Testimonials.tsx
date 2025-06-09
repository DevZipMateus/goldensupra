
import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [{
  id: 1,
  name: 'Elina Santos',
  position: 'Diretora da BJT Transportadora',
  content: 'A Golden Supra tem se mostrado extremamente pontual na entrega de peças e o suporte é sempre atencioso. Recomendo a todos que procuram um serviço de auto peças confiável.',
  rating: 5,
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
}, {
  id: 2,
  name: 'Joel Gomes',
  position: 'Administrador da Torque Implementos',
  content: 'O comprometimento da equipe da Golden Supra com a satisfação do cliente é notável. Eles sempre atendem às necessidades da nossa empresa com excelência e profissionalismo.',
  rating: 5,
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
}, {
  id: 3,
  name: 'João Meneses',
  position: 'Diretor da Ágil Mecânica',
  content: 'O atendimento da Golden Supra é prestativo, sempre esclarecendo nossas dúvidas. Os serviços prestados são excelentes e nos ajudam a manter nosso negócio em ordem.',
  rating: 5,
  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
}];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-[#1e3a8a]/10 text-[#1e3a8a] font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Depoimentos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-600 text-lg">
            Veja os depoimentos de quem confia na Golden Supra Auto Peças
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-[#f59e0b]/20"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#f59e0b] fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 text-lg mb-4 italic">
                  "{testimonials[activeIndex].content}"
                </blockquote>
                
                <div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-[#1e3a8a] font-medium">
                    {testimonials[activeIndex].position}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-[#1e3a8a]/10 hover:bg-[#1e3a8a]/20 text-[#1e3a8a] transition-colors"
              aria-label="Depoimento anterior"
            >
              <ArrowLeft size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex 
                      ? 'bg-[#f59e0b]' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-[#1e3a8a]/10 hover:bg-[#1e3a8a]/20 text-[#1e3a8a] transition-colors"
              aria-label="Próximo depoimento"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
