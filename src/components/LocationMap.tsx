
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-38.580611, -3.717222], // Coordenadas da nova localização
      zoom: 16,
    });

    // Add marker
    new mapboxgl.Marker({
      color: '#f59e0b'
    })
    .setLngLat([-38.580611, -3.717222])
    .setPopup(
      new mapboxgl.Popup({ offset: 25 })
        .setHTML('<div class="text-center"><h3 class="font-bold text-[#1e3a8a] mb-1">Golden Supra</h3><p class="text-sm text-gray-600">Fortaleza - CE</p></div>')
    )
    .addTo(map.current);

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  if (!mapboxToken) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">Configuração do Mapa</h3>
        <p className="text-neutral-600 mb-4">
          Para visualizar o mapa, insira seu token público do Mapbox:
        </p>
        <input
          type="text"
          placeholder="Digite seu token do Mapbox aqui..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f59e0b] mb-4"
          onChange={(e) => setMapboxToken(e.target.value)}
        />
        <p className="text-sm text-neutral-500">
          Obtenha seu token em: <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-[#f59e0b] hover:underline">mapbox.com</a>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div ref={mapContainer} className="w-full h-96" />
    </div>
  );
};

export default LocationMap;
