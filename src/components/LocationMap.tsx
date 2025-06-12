
import React from 'react';

const LocationMap = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.4026405889893!2d-38.60427842445175!3d-3.7631109962850686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7499c0c0c0c0c%3A0x1234567890abcdef!2sAv.%20D%2C%201317%20-%20Conj.%20Cear%C3%A1%2C%20Fortaleza%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1703123456789!5m2!1spt-BR!2sbr"
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
