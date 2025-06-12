
import React from 'react';

const LocationMap = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.1992686445844!2d-38.58048002445157!3d-3.7189747962793686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c749b422f4a3ef%3A0x9c8a1a4f0a4b5c8d!2sR.%20Dr.%20João%20Moreira%2C%20566%20-%20Meireles%2C%20Fortaleza%20-%20CE%2C%2060170-000!5e0!3m2!1spt-BR!2sbr!4v1703123456789!5m2!1spt-BR!2sbr"
        width="100%"
        height="384"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização Golden Supra"
      />
    </div>
  );
};

export default LocationMap;
