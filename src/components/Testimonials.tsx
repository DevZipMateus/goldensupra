import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
const testimonials = [{
  id: 1,
  name: 'Elina Santos',
  position: 'Diretora da BJT Transportadora',
  content: 'A ContaPlus tem se mostrado extremamente pontual na entrega de documentos e o suporte é sempre atencioso. Recomendo a todos que procuram um serviço contábil confiável.',
  rating: 5,
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
}, {
  id: 2,
  name: 'Joel Gomes',
  position: 'Administrador da Torque Implementos',
  content: 'O comprometimento da equipe da ContaPlus com a satisfação do cliente é notável. Eles sempre atendem às necessidades da nossa empresa com excelência e profissionalismo.',
  rating: 5,
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
}, {
  id: 3,
  name: 'João Meneses',
  position: 'Diretor da Ágil Mecânica',
  content: 'O atendimento da ContaPlus é prestativo, sempre esclarecendo nossas dúvidas. Os serviços prestados são excelentes e nos ajudam a manter nosso negócio em ordem.',
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
  return;
};
export default Testimonials;