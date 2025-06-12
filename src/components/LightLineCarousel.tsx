
import React, { useState, useEffect } from 'react';

const carouselImages = [
  '/lovable-uploads/2e1e15d1-5445-409a-b661-df8321a30608.png',
  '/lovable-uploads/e2443f6e-40a2-4daa-92fc-be6bd6287a33.png',
  '/lovable-uploads/f9b98c86-3f82-42f7-9252-7eafa3edfc58.png'
];

const LightLineCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Troca a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-48 overflow-hidden">
      {carouselImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Linha Leve ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-bold mb-1">Linha Leve</h3>
        <p className="text-sm opacity-90">Carros de passeio e veículos urbanos</p>
      </div>
      
      {/* Indicadores do carrossel */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        {carouselImages.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-[#f59e0b]' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default LightLineCarousel;
