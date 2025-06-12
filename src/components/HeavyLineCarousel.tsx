
import React, { useState, useEffect } from 'react';

const carouselImages = [
  '/lovable-uploads/14416488-910c-4566-8d88-d04ca4f45da1.png',
  '/lovable-uploads/9eef8056-3bfa-483d-ba48-e0027ad65ee9.png',
  '/lovable-uploads/b97422ce-cbfe-4666-a91c-3d351b10c823.png',
  '/lovable-uploads/292ffd8c-34dd-48c9-a86b-234122d6025d.png'
];

const HeavyLineCarousel = () => {
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
          alt={`Linha Pesada ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-bold mb-1">Linha Pesada</h3>
        <p className="text-sm opacity-90">Caminhões e veículos de grande porte</p>
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

export default HeavyLineCarousel;
