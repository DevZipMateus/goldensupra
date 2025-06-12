
import React from 'react';

const LocationMap = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.227847472983!2d-38.58287842445153!3d-3.717221896281086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c749b5631b7f4f%3A0x2b1c9e4e4a9b0f4e!2sR.%20Antônio%20Augusto%2C%20584%20-%20Vila%20Peri%2C%20Fortaleza%20-%20CE%2C%2060750-000!5e0!3m2!1spt-BR!2sbr!4v1703123456789!5m2!1spt-BR!2sbr"
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
