
import React, { useState, useEffect } from 'react';

const carouselImages = [
  '/lovable-uploads/df88317d-7833-4fea-b57d-7c2a4350f31c.png',
  '/lovable-uploads/9adf9340-25c8-4e49-8b3d-d9be004ac73d.png',
  '/lovable-uploads/ea0ec475-4d2e-4cf7-af54-f92dd272181e.png',
  '/lovable-uploads/bb3ea50b-799e-4834-afce-a09848e21a46.png'
];

const IndustrialLineCarousel = () => {
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
          alt={`Linha Industrial ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-bold mb-1">Linha Industrial</h3>
        <p className="text-sm opacity-90">Veículos para uso industrial e comercial</p>
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

export default IndustrialLineCarousel;
