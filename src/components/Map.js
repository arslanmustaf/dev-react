import React from 'react'

function map() {
    const mapStyles = {
        border: '0',
        width: '100vw',
        height: '450px',
      };
    
      return (
        <div className="map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6722.069244268585!2d74.27910766600142!3d31.54919378680077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903eed440ec27%3A0xf8ecebbd6a8f32a6!2sBrainy%20and%20bright%20academy!5e0!3m2!1sen!2s!4v1692719879119!5m2!1sen!2s"
            style={mapStyles}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      );
    }

export default map
