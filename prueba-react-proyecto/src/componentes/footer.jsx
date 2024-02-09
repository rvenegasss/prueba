import React from 'react';
import './footer.css'; // Asegúrate de tener el archivo CSS correctamente importado

const Footer = () => {
  return (
    <footer className="pie-pagina">
      <div className="grupo-a">
        <div className="box-a">
          <figure>
            <a href="https://renca.cl/">
              <img src="./componentes/Footer/renca.png" alt="Logo municipalidad" />
            </a>
          </figure>
          <div className="box-info">
            <p>
              <i className="fa fa-map-marker"></i>&nbsp; Blanco Encalada Nº 1335, Plaza de Renca, Renca.
            </p>
            <p>
              <i className="fa fa-phone"></i>&nbsp; +56 2 2685 6600
            </p>
            <p>
              <i className="fa fa-envelope"></i>&nbsp; contacto@renca.cl
            </p>
            <p>
              <i className="fa fa-phone"></i>&nbsp;Atención Social Teléfonica:
            </p>
            <p>
              +56 2 3241 1999, de lunes a viernes de 08:30 a 14:00 horas 15:00 a 17:00 horas.
            </p>
          </div>
        </div>
        <div className="box-b">
          {/* Aquí puedes colocar cualquier contenido adicional para este box */}
        </div>
        <div className="box-RRSS">
          <div className="red-social">
            <h2 style={{ fontSize: 'medium' }}>Redes Sociales</h2>
            <a href="https://www.facebook.com/MuniRenca/" className="fa fa-facebook"></a>
            <a href="https://twitter.com/Muni_Renca/" className="fa fa-twitter"></a>
            <a href="https://www.instagram.com/Muni_renca/" className="fa fa-instagram"></a>
            <a href="https://www.flickr.com/photos/153772620@N02/" className="fa fa-flickr"></a>
            <a href="https://www.youtube.com/channel/UCosdtBKfRSxhhi4x9247Nbw/" className="fa fa-youtube"></a>
          </div>
        </div>
      </div>
      <div className="grupo-b">
        <small>&copy; 2024 <b>Municipalidad de Renca</b> - Proyecto integrador en desarrollo - Generation Chile</small>
      </div>
    </footer>
  );
};

export default Footer;