
import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1e3a8a] text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/3dc78da3-3e5b-49e1-ae49-e6861b911a69.png" 
                alt="Golden Supra Auto Peças" 
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-xl font-semibold">Golden Supra</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Auto Peças & Acessórios - Sua confiança, nossa qualidade!
            </p>
            <p className="text-gray-300 text-sm">
              Especialistas em peças para carros antigos, nacionais e importados.
            </p>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 flex-shrink-0 text-[#f59e0b]" size={18} />
                <span>(85) 99602-3538</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 flex-shrink-0 text-[#f59e0b]" size={18} />
                <span>goldensupra86@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0 text-[#f59e0b]" size={18} />
                <span>Avenida D, 1289 - Fortaleza, CE</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links & Social */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="#" className="hover:text-[#f59e0b] transition-colors duration-300 inline-block">Início</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#f59e0b] transition-colors duration-300 inline-block">Sobre Nós</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#f59e0b] transition-colors duration-300 inline-block">Produtos</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#f59e0b] transition-colors duration-300 inline-block">Contato</a>
              </li>
            </ul>
            
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/goldensupraautopecas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#f59e0b]/80 hover:text-[#1e3a8a] transition-colors duration-300 p-2 rounded-full"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} Golden Supra Auto Peças. Todos os direitos reservados.</p>
          <p className="mt-2">Responsável: Moises Felipe Gomes Schiffner Santos Viana</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
