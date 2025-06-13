
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const LocationCarousel = () => {
  const images = [
    '/lovable-uploads/8b67e8b3-8809-4466-b386-a473afe91f29.png',
    '/lovable-uploads/fbe26f46-2568-4779-8d34-1f61e0a92e4d.png',
    '/lovable-uploads/690e28f1-bf89-4c28-bf9e-87f8551d1580.png',
    '/lovable-uploads/b9627b2f-99b6-4351-b62d-0a03723e5f0c.png',
    '/lovable-uploads/a7d3af3e-e9d9-4888-91ed-4cd66cca855b.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedImage, setExpandedImage] = useState(null);

  // Auto-advance carousel every 5 seconds (increased from 3 for better user experience)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const openExpandedView = (imageUrl) => {
    setExpandedImage(imageUrl);
  };

  const closeExpandedView = () => {
    setExpandedImage(null);
  };

  // Handle keyboard navigation in expanded view
  useEffect(() => {
    if (expandedImage) {
      const handleKeyPress = (e) => {
        if (e.key === 'Escape') {
          closeExpandedView();
        } else if (e.key === 'ArrowLeft') {
          const currentIdx = images.indexOf(expandedImage);
          const prevIdx = currentIdx === 0 ? images.length - 1 : currentIdx - 1;
          setExpandedImage(images[prevIdx]);
        } else if (e.key === 'ArrowRight') {
          const currentIdx = images.indexOf(expandedImage);
          const nextIdx = (currentIdx + 1) % images.length;
          setExpandedImage(images[nextIdx]);
        }
      };

      document.addEventListener('keydown', handleKeyPress);
      return () => document.removeEventListener('keydown', handleKeyPress);
    }
  }, [expandedImage, images]);

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden relative">
        <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full h-full flex-shrink-0">
                <img
                  src={image}
                  alt={`Loja Golden Supra - Imagem ${index + 1}`}
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => openExpandedView(image)}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Improved positioning and visibility */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={16} className="sm:w-5 sm:h-5" />
          </button>

          {/* Dots Indicator - Improved responsiveness */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-white scale-110' : 'bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Expanded Image Modal - Improved responsiveness */}
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={closeExpandedView}
        >
          <div className="relative max-w-[95vw] max-h-[95vh] w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeExpandedView}
              className="absolute -top-8 sm:-top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Fechar imagem expandida"
            >
              <X size={24} className="sm:w-8 sm:h-8" />
            </button>
            
            {/* Navigation in expanded view */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIdx = images.indexOf(expandedImage);
                const prevIdx = currentIdx === 0 ? images.length - 1 : currentIdx - 1;
                setExpandedImage(images[prevIdx]);
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full transition-all z-10"
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIdx = images.indexOf(expandedImage);
                const nextIdx = (currentIdx + 1) % images.length;
                setExpandedImage(images[nextIdx]);
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full transition-all z-10"
              aria-label="Próxima imagem"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
            
            <img
              src={expandedImage}
              alt="Imagem expandida da loja"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Image counter */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
              {images.indexOf(expandedImage) + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LocationCarousel;
