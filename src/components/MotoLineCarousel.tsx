
import React, { useState, useEffect } from 'react';

const carouselImages = [
  '/lovable-uploads/e2c3c58b-6069-4bef-a545-d9720c2594b0.png', // Imagem atual
  '/lovable-uploads/bdc28d2a-fc7d-40e4-aad4-5a25a10dd446.png', // Ninja branca
  '/lovable-uploads/8f5bcdc7-1e83-48cb-aa30-c335e8b3e3fc.png', // Scooter branco
  '/lovable-uploads/d41ed6ec-f4a1-4b15-9be8-ddc91219b78a.png'  // Harley preta
];

const MotoLineCarousel = () => {
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
          alt={`Linha de Motopeças ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-bold mb-1">Linha de Motopeças</h3>
        <p className="text-sm opacity-90">Peças e acessórios para motocicletas</p>
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

export default MotoLineCarousel;
