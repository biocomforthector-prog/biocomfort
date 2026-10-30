import logoBiocomfort from '../assets/logo-biocomfort.png';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a className="brand" href="#inicio" aria-label="BIOCOMFORT, volver al inicio">
          <img
            className="footer__logo"
            src={logoBiocomfort}
            alt="BIOCOMFORT - Soluciones climáticas"
          />
        </a>
        <p className="footer__copy">© {year} BIOCOMFORT. Todos los derechos reservados.</p>
        <nav className="footer__links" aria-label="Enlaces del pie de página">
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </footer>
  );
}
