
import React, { useState } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { Pencil } from 'lucide-react';

const vehicleLines = [
  {
    id: 1,
    name: 'Linha Amarela',
    description: 'Veículos de transporte público e táxis',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Peças para táxis', 'Componentes para ônibus', 'Acessórios específicos']
  },
  {
    id: 2,
    name: 'Linha Industrial',
    description: 'Veículos para uso industrial e comercial',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Peças para caminhões', 'Componentes industriais', 'Sistemas hidráulicos']
  },
  {
    id: 3,
    name: 'Linha Leve',
    description: 'Carros de passeio e veículos urbanos',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Peças para carros populares', 'Componentes urbanos', 'Acessórios básicos']
  },
  {
    id: 4,
    name: 'Linha Pesada',
    description: 'Caminhões e veículos de grande porte',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Peças para caminhões pesados', 'Componentes de carga', 'Sistemas robustos']
  },
  {
    id: 5,
    name: 'Linha de Motopeças',
    description: 'Peças e acessórios para motocicletas',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Peças para motos', 'Acessórios de segurança', 'Componentes específicos']
  }
];

const VehicleLines = () => {
  const isMobile = useIsMobile();
  const [lineImages, setLineImages] = useState<Record<number, string>>(
    vehicleLines.reduce((acc, line) => ({ ...acc, [line.id]: line.image }), {})
  );

  const handleImageUpload = (lineId: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setLineImages(prev => ({ ...prev, [lineId]: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = (lineId: number) => {
    const input = document.getElementById(`file-input-${lineId}`) as HTMLInputElement;
    input?.click();
  };

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#1e3a8a]/10 text-[#1e3a8a] font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossas Linhas de Veículos
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Peças para Todos os Tipos de Veículos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Oferecemos peças especializadas para diferentes categorias de veículos, garantindo qualidade e compatibilidade
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {vehicleLines.map((line, index) => (
            <div
              key={line.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={lineImages[line.id]}
                  alt={line.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Edit button */}
                <button
                  onClick={() => triggerFileInput(line.id)}
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md"
                  title="Editar imagem"
                >
                  <Pencil size={16} />
                </button>

                {/* Hidden file input */}
                <input
                  id={`file-input-${line.id}`}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(line.id, e)}
                  className="hidden"
                />
                
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold mb-1">{line.name}</h3>
                  <p className="text-sm opacity-90">{line.description}</p>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-2">
                  {line.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#f59e0b] rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full mt-4 bg-[#1e3a8a] hover:bg-[#1e40af] text-[#f59e0b] px-4 py-2 rounded-md transition-all font-medium text-sm">
                  Ver Peças Disponíveis
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleLines;
