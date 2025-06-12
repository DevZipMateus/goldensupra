
import React, { useState, useEffect } from 'react';

const carouselImages = [
  '/lovable-uploads/0d2a86b6-46cb-4cd4-8a11-6cd166353efe.png',
  '/lovable-uploads/ea466542-0aa5-4c92-9833-f62cd601b0b1.png',
  '/lovable-uploads/193be9ce-4eae-4b97-b366-291b9bdf333a.png'
];

const YellowLineCarousel = () => {
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
          alt={`Linha Amarela ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-bold mb-1">Linha Amarela</h3>
        <p className="text-sm opacity-90">Veículos de transporte público e táxis</p>
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

export default YellowLineCarousel;
